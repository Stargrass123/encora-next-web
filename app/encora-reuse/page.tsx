"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { threeSteps, modes, howSteps } from "./data";

function ImageWithFallback({
  src,
  alt = "",
  className = "",
  placeholder = "/images/placeholder-encora.png",
}: { src: string; alt?: string; className?: string; placeholder?: string }) {
  const [imgSrc, setImgSrc] = React.useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => imgSrc !== placeholder && setImgSrc(placeholder)}
    />
  );
}

export default function EncoraReuseV2() {
  const sectionRef = useRef(null);

  return (
    <main className="min-h-screen text-foreground">

      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[100vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Reuse page hero.png"
            alt="Encora reuse bin"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Encora Reuse
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Smart reuse —<br />no app required
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Encora helps campuses, cities, and foodservice operators run reusable container programs with QR/RFID checkout, text/email reminders, verified returns, and replacement-fee tracking — no app download required.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us?context=reuse-pilot"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Explore a Reuse Pilot
              </Link>
              <Link
                href="/contact-us?context=reuse-pilot"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Request Pilot Brief
              </Link>
            </div>
            <span className="inline-block rounded-md px-2 py-1 text-xs text-white/60 bg-white/10">
              Built on the same verification layer as RetAI
            </span>
          </div>
        </div>
      </section>


      {/* THE PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="heading-lg mb-6 dark:text-white">Why reuse programs fail</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Reusable container programs have strong intent but weak infrastructure. Containers go missing, returns are manual, staff lack visibility, and requiring participants to download another app kills adoption before it starts.
            </p>
          </div>
          <ul className="space-y-4 mt-2">
            {[
              "Containers lost with no record of where or when",
              "Manual staff check-in creates bottlenecks and errors",
              "No operator dashboard — no way to send reminders or track recovery",
              "App-required workflows exclude the majority of participants",
              "No audit trail for sustainability reporting",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-base text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEST-FIT PILOTS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="text-center heading-lg mb-4 dark:text-white">Best-fit pilot partners</h2>
        <p className="text-center text-base text-muted-foreground mb-10 max-w-xl mx-auto">
          Encora Reuse is designed for organizations already running or planning reusable container programs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Campus dining programs",
            "City & municipal reuse initiatives",
            "Food halls and venues",
            "Office & corporate dining",
            "Foodservice operators",
            "Reusable foodware pilots",
          ].map((label, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5 text-center">
              <span className="text-base font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT ENCORA PROVIDES / WHAT PARTNER PROVIDES */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 space-y-5">
            <h3 className="text-xl font-semibold dark:text-white">What Encora provides</h3>
            <ul className="space-y-3">
              {[
                "QR/RFID-enabled container tracking",
                "Return verification workflow",
                "Smart bin or assisted-return workflow",
                "Operator dashboard and return records",
                "Pilot reporting — return rate, loss rate, recovery",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
            <h3 className="text-xl font-semibold dark:text-white">What the partner provides</h3>
            <ul className="space-y-3">
              {[
                "Pilot location and space for hardware",
                "Container pool or container approval",
                "Dining or operator coordination",
                "Washing plan for returned containers",
                "Basic promotion to program participants",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-2 w-2 h-2 rounded-full bg-border flex-shrink-0" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PILOT METRICS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="text-center heading-lg mb-4 dark:text-white">Pilot metrics we track together</h2>
        <p className="text-center text-base text-muted-foreground mb-10 max-w-xl mx-auto">
          Every pilot produces a shared report across these dimensions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { label: "Return rate", desc: "% of containers returned in the period" },
            { label: "Container loss rate", desc: "Containers not returned after X days" },
            { label: "Verified check-ins", desc: "Returns with a complete intake record" },
            { label: "Late returns", desc: "Returns past expected window" },
            { label: "Manual staff touchpoints", desc: "Incidents requiring staff intervention" },
            { label: "Reminder effectiveness", desc: "Return rate lift after automated nudges" },
            { label: "Recovery rate", desc: "Containers recovered after loss alert" },
          ].map((m, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5 space-y-1">
              <p className="font-semibold text-sm dark:text-white">{m.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE-STEP REUSE */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Three-step reuse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeSteps.map((s, i) => (
            <article key={i} className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <ImageWithFallback
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">0{i + 1}</span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{s.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW STUDENTS USE IT */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="text-center heading-lg mb-4 dark:text-white">
          How students use it
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Three participation modes cover self-service, optional app loyalty, and staff-led flows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 flex items-start gap-4">
              <div className="shrink-0 rounded-full bg-emerald-600/10 p-2.5 text-emerald-700 dark:text-emerald-300">
                {m.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold">{m.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="text-center heading-lg mb-4 dark:text-white">
          How it works
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Every container checkout and return creates a simple record — so operators can see what is out, what came back, and what still needs follow-up.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {howSteps.map((step, i) => (
            <div key={step.title} className="flex gap-4 items-start rounded-2xl border border-border bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 flex-shrink-0">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* RETURN POLICY CALLOUT */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 md:p-10">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Return policy</h3>
          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
            Participants have <strong className="text-foreground dark:text-white">7 days</strong> to return checked-out containers. Encora can send text or email reminders with the return deadline, approved return locations, and simple return instructions. Containers checked in on time are cleared from the user&apos;s account. Late or missing containers may trigger a replacement fee based on the pilot policy.
          </p>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="heading-lg dark:text-white">Why it works</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Reuse programs live or die on follow-through. Encora tracks every container from checkout to return — giving operators the visibility to send reminders, recover containers, and report outcomes.
            </p>
            <div className="space-y-5">
              {[
                { title: "Return records", desc: "Every return is logged with a timestamp and container status — operators can use records for reminders, replacement fees, recovery, and reporting." },
                { title: "Ops telemetry", desc: "Surfaces late returns, hotspots, and operational risk in real time." },
                { title: "Integration-ready workflows", desc: "Return records can support campus or operator reporting, reminder workflows, and configured exports or API connections where available — no rip-and-replace required." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-base text-foreground dark:text-white">{item.title} — </span>
                    <span className="text-base text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="rounded-2xl border border-border bg-card p-4 overflow-hidden">
            <ImageWithFallback
              src="/images/verify-evidence-feed_updated.jpeg"
              alt="Encora operator dashboard showing return records and container status"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl mt-24 mb-24 px-6">
        <div className="rounded-3xl bg-emerald-600 text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Explore a reuse pilot
          </h2>
          <p className="mt-3 text-base text-emerald-100 max-w-lg mx-auto">
            Whether you're running a campus dining program, city initiative, or food hall — we're evaluating select reuse pilot partners. Let's talk.
          </p>
          <div className="mt-8">
            <Link
              href="/contact-us?context=reuse-pilot"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Talk to Us About a Reuse Pilot
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
