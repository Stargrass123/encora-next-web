import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    try {
          const body = await req.json();
          if (body.company) return NextResponse.json({ ok: true });
          // Time gate: humans take >4s to fill the form; bots submit instantly
      const elapsedMs = Number(body.elapsedMs);
          if (!Number.isFinite(elapsedMs) || elapsedMs < 4000)
                  return NextResponse.json({ ok: true });
          const name = String(body.name || "").trim();
          const email = String(body.email || "").trim();
          const org = String(body.org || "").trim();
          const useCase = String(body.useCase || "").trim();
          const message = String(body.message || "").trim();
          if (!name || !email || !message)
                  return new NextResponse("Missing required fields", { status: 400 });
          if (!/.+@.+\..+/.test(email))
                  return new NextResponse("Invalid email", { status: 400 });
          const to = process.env.CONTACT_TO || "tedw@encora.co";
          const from = process.env.CONTACT_FROM || "noreply@encora.co";
          const apiKey = process.env.RESEND_API_KEY;
          let sent = false;
          try {
                  if (apiKey) {
                            const { Resend } = await import("resend");
                            const resend = new Resend(apiKey);
                            const result = await resend.emails.send({
                                        from, to,
                                        subject: `New contact from ${name}`,
                                        text: `Name: ${name}\nEmail: ${email}\nOrg: ${org}\nUse case: ${useCase}\n\n${message}`,
                            });
                            if (result.error) throw new Error(result.error.message);
                            sent = true;
                  } else {
                            console.log("[contact]", { name, email, org, useCase, message });
                  }
          } catch (err) {
                  console.error("send_failed", err);
                  return new NextResponse("Failed to send", { status: 500 });
          }
          return NextResponse.json({ ok: sent });
    } catch {
          return new NextResponse("Bad request", { status: 400 });
    }
}
