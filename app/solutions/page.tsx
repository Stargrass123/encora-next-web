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
            src="/images/solutions hero image.png"
            alt="Solutions background"
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
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHERE IT FITS */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-lg dark:text-white">Where it fits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each environment uses the same four building blocks in different combinations — from campus reuse programs to retail fraud reduction to EPR compliance.
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
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
