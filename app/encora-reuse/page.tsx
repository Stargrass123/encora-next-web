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
              Students borrow in seconds. At return, RFID-tagged containers auto-open the correct slot, auto-lock, and the bin captures photo and weight — proof-grade data for campus ops.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Talk to us
              </Link>
              <a
                href="/resources/spec-sheet.pdf"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Spec sheet
              </a>
            </div>
            <span className="inline-block rounded-md px-2 py-1 text-xs text-white/60 bg-white/10">
              Powered by RetAI verification
            </span>
          </div>
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
          Every step is tracked, from assignment to refund, so operators can automate trust.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* WHY IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="heading-lg dark:text-white">Why it works</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Reuse programs live or die on proof. Encora captures evidence automatically and turns it into trusted data for operations, refunds, and reporting.
            </p>
            <div className="space-y-5">
              {[
                { title: "Evidence at drop", desc: "Eliminates disputes and accelerates refunds — photo and weight captured automatically." },
                { title: "Ops telemetry", desc: "Surfaces late returns, hotspots, and operational risk in real time." },
                { title: "API-first architecture", desc: "Integrates with campus systems (Transact, Atrium, TouchNet, CBORD, Dine On) via webhooks — no rip-and-replace." },
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
            <p className="text-xs text-muted-foreground">
              Campus system examples shown. Use does not imply partnership.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 overflow-hidden">
            <ImageWithFallback
              src="/images/verify-evidence-feed_updated.jpeg"
              alt="Encora evidence feed with photo, weight, reason and status"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl mt-24 mb-24 px-6">
        <div className="rounded-3xl bg-emerald-600 text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to launch a reuse program?
          </h2>
          <p className="mt-3 text-base text-emerald-100 max-w-lg mx-auto">
            Talk to our team about a pilot at your campus or venue.
          </p>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
