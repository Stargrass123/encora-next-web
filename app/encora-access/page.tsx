"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
import { HOW_STEPS } from "./data";

export default function EncoraAccessPage() {
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
            src="/images/retai-hero-new.jpeg"
            alt="Person returning item at Encora kiosk"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Encora Access · RetAI
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Kill the returns line.<br />
              Keep the customer.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              RetAI turns your manual returns desk into a self-serve, verified drop point. Cut labor, shrink lines, and capture proof of every return.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See how it works
              </Link>
            </div>
            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { stat: "$101B", label: "Annual return fraud" },
                { stat: "$29", label: "Avg cost per return" },
                { stat: "0%", label: "Verified at handoff today" },
              ].map((item) => (
                <div key={item.stat}>
                  <p className="text-2xl font-bold text-emerald-400">{item.stat}</p>
                  <p className="text-xs text-white/60 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-6xl mt-24 px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">How RetAI works</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Works alongside your existing POS — no rip-and-replace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {HOW_STEPS.map((step, i) => (
            <article key={i} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  0{i + 1}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-base font-bold leading-tight">{step.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="mx-auto max-w-6xl mt-24 px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">Before and after RetAI</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From a 25-minute wait to a 60-second self-serve drop.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/before-retai.jpeg"
                alt="Long manual returns line"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>
              <p className="text-base font-semibold text-foreground">Before — Manual counter returns</p>
            </div>
            <ul className="space-y-2 text-base text-muted-foreground pl-4">
              <li>25+ minute wait times at peak</li>
              <li>Associate tied up with every transaction</li>
              <li>No photo record, no weight check</li>
              <li>Fraud indistinguishable from legitimate returns</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/after-retai-cropped.jpeg"
                alt="Self-serve Encora kiosk return"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
              <p className="text-base font-semibold text-foreground">After — RetAI verified drop-off</p>
            </div>
            <ul className="space-y-2 text-base text-muted-foreground pl-4">
              <li>60-second self-serve flow, no staff needed</li>
              <li>Photo + weight captured at drop</li>
              <li>Tamper-evident record per transaction</li>
              <li>Fraud flagged before refund is issued</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUILT FOR OPS / CX / RISK */}
      <section className="mx-auto max-w-6xl mt-24 px-6">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Built for Ops, CX, and Risk
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "For Operations",
              dot: "bg-emerald-500",
              items: [
                "Reduce counter workload by 30–60%",
                "Smooth return volume across the day",
                "Extend return hours without added staffing",
              ],
            },
            {
              title: "For Customer Experience",
              dot: "bg-emerald-500",
              items: [
                "Fast, guided self-serve flow",
                "No app required — scan and drop",
                "Keep foot traffic in-store longer",
              ],
            },
            {
              title: "For Risk & Loss Prevention",
              dot: "bg-emerald-500",
              items: [
                "Every return verified, not anonymous",
                "Flags repeat abuse patterns automatically",
                "Full photo + timestamp audit trail per item",
              ],
            },
          ].map((col, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 space-y-5">
              <h3 className="text-lg font-bold">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base text-muted-foreground">
                    <span className={`w-2 h-2 rounded-full ${col.dot} flex-shrink-0 mt-2`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl mt-24 mb-24 px-6">
        <div className="rounded-3xl bg-emerald-600 text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to streamline your returns?
          </h2>
          <p className="mt-3 text-base text-emerald-100 max-w-lg mx-auto">
            Talk to our team about a pilot — we're accepting partners now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
