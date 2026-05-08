"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MODULES, ENVIRONMENTS } from "./data";
import Link from "next/link";

export default function SolutionsPage() {
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
            src="/images/smartbin-hero-2.png"
            alt="Encora platform in retail environment"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Smart return infrastructure
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Four building blocks that work together or stand alone — plug Encora into retail, campuses, packaging EPR, and events without replatforming.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Talk to us
              </Link>
              <Link
                href="#building-blocks"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See the platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { stat: "$101B", label: "Annual return fraud in the US", sub: "Most of it happens at the point of drop-off, before anyone checks." },
              { stat: "$29", label: "Average cost per return", sub: "Retailers spend it on every return — almost none includes actual verification." },
              { stat: "0%", label: "Verified at handoff today", sub: "No photo. No weight check. No record. Just a refund." },
            ].map((item) => (
              <div key={item.stat} className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400">{item.stat}</p>
                <p className="text-base font-semibold text-foreground dark:text-white">{item.label}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR BUILDING BLOCKS */}
      <section id="building-blocks" className="mx-auto max-w-6xl px-6 mt-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">The four building blocks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with one, or deploy them together for end-to-end returns and traceability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((mod, index) => {
            const href = index === 0 ? "/bin" : index === 1 ? "/encora-reuse" : "/encora-access";
            return (
              <article
                key={mod.key}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                  <mod.Icon />
                </div>
                <h3 className="text-lg font-semibold">
                  {mod.title}
                  <span className="ml-1.5 text-sm font-normal text-muted-foreground">· {mod.subtitle}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-base text-muted-foreground flex-1">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* HOW THE PIECES CONNECT */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">How the pieces connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every return flows through the same four layers — from physical intake to your existing systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
          {[
            {
              step: "01",
              title: "Intake",
              desc: "Customer scans QR or receipt at the kiosk. The bin identifies the return and opens the intake slot.",
              icon: "⟲",
            },
            {
              step: "02",
              title: "Verify",
              desc: "RetAI captures photo and weight at the moment of drop. Flags wrong items, empty boxes, and policy violations.",
              icon: "✓",
            },
            {
              step: "03",
              title: "Record",
              desc: "A tamper-evident event is logged per transaction — item, timestamp, location, weight, and photo.",
              icon: "⧉",
            },
            {
              step: "04",
              title: "Route",
              desc: "Structured data pushes to your POS, OMS, or logistics system via webhook. Refund holds release automatically on pass.",
              icon: "→",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-emerald-500/40 z-10" />
              )}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{item.step}</span>
                  <span className="text-xl text-emerald-600 dark:text-emerald-400">{item.icon}</span>
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">Who it's for</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encora is designed for the operators, retailers, and logistics partners who own the return problem.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Apparel & specialty retailers",
              bullets: [
                "Reduce $29/return processing cost",
                "Cut fraud with verified intake before refund",
                "Self-serve kiosks free up staff for selling",
                "Data that routes items to restock, resale, or RTV",
              ],
            },
            {
              title: "Mall & hub operators",
              bullets: [
                "Shared return infrastructure across multiple tenants",
                "Drive foot traffic with convenient drop-off locations",
                "Real-time fill-level monitoring across all units",
                "Revenue opportunity from returns-as-a-service",
              ],
            },
            {
              title: "Logistics & 3PL partners",
              bullets: [
                "Verified intake data before items reach the DC",
                "Reduce surprises in the returns processing queue",
                "Photo and weight records for dispute resolution",
                "API integration with your WMS and OMS",
              ],
            },
          ].map((col, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 space-y-5">
              <h3 className="text-lg font-semibold">{col.title}</h3>
              <ul className="space-y-3">
                {col.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHERE IT FITS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">Where it fits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The same platform, deployed across four different environments.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {ENVIRONMENTS.map((env) => (
            <article
              key={env.key}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={env.imageSrc}
                  alt={env.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="pointer-events-auto w-full p-6 sm:p-8">
                  <h3 className="text-xl font-semibold sm:text-2xl">{env.title}</h3>
                  <ul className="mt-3 space-y-2 text-base text-muted-foreground">
                    {env.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Link
                      href={env.href}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                    >
                      {env.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl mt-24 mb-24 px-6">
        <div className="rounded-3xl bg-emerald-600 text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-base text-emerald-100 max-w-lg mx-auto">
            Tell us about your environment and we'll show you which building blocks fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              href="/bin"
              className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See the hardware
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
