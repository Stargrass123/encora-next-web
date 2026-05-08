"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { FAQ_ITEMS } from "./data";

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
        {year}
      </p>
      <p className="max-w-prose text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export default function AboutPage() {
  const sectionRef = useRef(null);
  return (
    <main className="min-h-screen text-foreground">

      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[80vh] flex items-center overflow-hidden bg-card py-[25px] sm:py-0"
      >
        <div className="container-encora relative z-10 px-4 sm:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* LEFT */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                About Encora
              </p>
              <h1 className="leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-encora-green dark:text-encora-mint">
                Built to verify <br />
                what comes back
              </h1>
              <p className="text-[1.1rem] text-encora-green/70 dark:text-encora-mint leading-relaxed max-w-xl">
                Encora is a hardware-software platform that captures proof of return at the moment it happens—so retailers, operators, and logistics partners can stop guessing and start trusting their data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                  Talk to us
                </Link>
              </div>
              <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/40 dark:bg-slate-800/40">
                Patent pending · Seattle, WA
              </span>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
              <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 shadow-xl p-1">
                <Image
                  src="/images/retai-after.jpeg"
                  alt="Encora kiosk"
                  width={350}
                  height={350}
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[4rem] px-4">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Why returns need their own infrastructure
        </h2>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                Returns are a $101B fraud problem in the US alone. Yet most of that loss happens in the first thirty seconds—at the point of drop-off—before anyone has looked at what was actually returned.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Retailers process an average of $29 in cost for every return they handle. Almost none of that investment includes any actual verification.
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-semibold text-sm sm:text-base">
                The result is predictable:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
                <li>Empty boxes and wrong items accepted as valid returns.</li>
                <li>No timestamped record of what was dropped off, or when.</li>
                <li>Refunds issued before condition is ever checked.</li>
                <li>Fraud that looks identical to a legitimate return.</li>
                <li>Manual audits that can't scale across locations.</li>
              </ul>
              <p className="font-semibold text-sm sm:text-base">
                Encora puts a verification layer at the intake point—capturing photo, weight, and item data the moment the return is made.
              </p>
            </div>

          </div>
        </article>
      </section>

      {/* WHAT ENCORA PROVIDES */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px] px-4">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          What Encora provides
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <span className="text-lg font-semibold">⟲</span>
            </div>
            <h3 className="text-lg font-semibold">Smart intake</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-4">
              <li>Kiosk hardware for stores, malls, and logistics hubs.</li>
              <li>QR scan or receipt lookup at drop-off.</li>
              <li>Guided customer flow—no staff required.</li>
              <li>Live visibility into volume and location.</li>
            </ul>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <span className="text-lg font-semibold">✓</span>
            </div>
            <h3 className="text-lg font-semibold">Proof at drop-off</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-4">
              <li>Photo and timestamp captured at the moment of return.</li>
              <li>Weight and item validation before acceptance.</li>
              <li>Automatic flags for wrong items and empty boxes.</li>
              <li>Tamper-evident record stored per transaction.</li>
            </ul>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <span className="text-lg font-semibold">⧉</span>
            </div>
            <h3 className="text-lg font-semibold">Connected data</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-4">
              <li>Works alongside your existing POS and OMS.</li>
              <li>APIs and webhooks for system-to-system routing.</li>
              <li>Refund holds until verification is complete.</li>
              <li>Audit-ready reporting across all locations.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* COMPLIANCE CALLOUT */}
      <section className="mx-auto max-w-6xl text-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8 mt-16 md:mt-24 lg:mt-[96px] px-4">
        <h3 className="text-lg font-semibold">Built for compliance and audit</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Every return event is logged with photo evidence, timestamps, and structured data—ready for internal audit, chargeback disputes, or EPR reporting without custom integrations.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px] px-4">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Our story
        </h2>
        <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            Encora started in the circular economy—building smart bins and traceability tools for reuse programs at campuses, restaurants, and public venues. The goal was simple: make it possible to run a reuse program without the spreadsheets.
          </p>
          <p>
            What we found doing those early pilots changed the direction of the company. Every operator we worked with had the same problem underneath the reuse question: <em>they couldn't prove what came back</em>. Reusable containers, retail merchandise, or returned goods—the moment of drop-off was a black hole. Items went in, but there was no reliable record of what they were, when they arrived, or whether they matched what was expected.
          </p>
          <p>
            That's when we pivoted to verification. The same hardware and software we built for reuse intake—kiosks, weight sensors, computer vision—turned out to be exactly what retail returns needed. We focused the platform on one thing: creating a tamper-evident record at the moment of drop-off.
          </p>
          <p>
            Encora is now a returns verification platform. We're accepting our first retail pilot partners in 2025, with hardware deployed and integrations with major POS and OMS systems underway.
          </p>
        </article>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 rounded-2xl border-emerald-500/30 bg-emerald-500/5 md:p-8 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-6 border-l border-border pl-6">
          <TimelineItem
            year="2022"
            text="Founded to solve traceability in reuse programs. Deployed first smart bins on campuses and at public venues."
          />
          <TimelineItem
            year="2023"
            text="Expanded hardware with weight sensors and computer vision. Identified the same intake verification gap across retail returns."
          />
          <TimelineItem
            year="2024"
            text="Pivoted to retail returns verification. Developed RetAI—the AI layer that validates items at drop-off. Filed patents on intake verification hardware and workflow."
          />
          <TimelineItem
            year="2025"
            text="Launched pilot program for apparel retailers, mall operators, and 3PL partners. Now accepting first pilot cohort."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px] px-4">
        <h2 className="text-center heading-lg mb-12 dark:text-white">FAQ</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl text-center px-4 mt-20 mb-16 rounded-3xl bg-emerald-600 text-white md:px-10 p-8">
        <h2 className="text-2xl font-semibold">
          Ready to verify your returns?
        </h2>
        <p className="mt-2 text-emerald-100">
          We're accepting pilot partners now. Talk to us about your locations and volume.
        </p>
        <div className="flex justify-center items-center">
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Request a pilot
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
