"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Smartphone, MapPin, Zap } from "lucide-react";
import React from "react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
import { sendGTMEvent } from "@/utils/gtm";

export default function BinPage() {
    return (
        <main className="flex flex-col w-full overflow-hidden text-foreground">

            {/* HERO */}
            <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/smartbin-hero-2.png"
                        alt="Encora Smart Return Bin in retail environment"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/10" />
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 flex justify-end">
                    <div className="max-w-xl space-y-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            Smart Return Bin
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                            The Smart Return Bin
                        </h1>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Controlled intake, verified at drop-off — with on-bin guidance, structured return records, and instant customer confirmation.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                href="#how-it-works"
                                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                            >
                                How it works
                            </Link>
                            <Link
                                href="/contact-us"
                                className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                            >
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="mx-auto max-w-6xl w-full mt-24 px-6">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="heading-lg dark:text-white">How it works</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        A simple flow that works alongside your existing POS — no rip-and-replace.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            step: "01",
                            icon: <BinIcon />,
                            title: "Scan your item",
                            body: "Scan or present your receipt to begin. The bin identifies your return and confirms it's expected.",
                        },
                        {
                            step: "02",
                            icon: <VerifyIcon />,
                            title: "Follow the screen",
                            body: "Clear on-bin guidance walks you through each step. The intake door opens automatically when ready.",
                        },
                        {
                            step: "03",
                            icon: <ConnectIcon />,
                            title: "Drop and go",
                            body: "Secure drop-off with instant confirmation. RetAI captures photo and weight data at the moment of deposit.",
                        },
                    ].map((step, i) => (
                        <article key={i} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{step.step}</span>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{step.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* BIN FEATURE IMAGE */}
            <section className="mx-auto max-w-6xl w-full mt-24 px-6">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="heading-lg dark:text-white">Built for quick, everyday returns</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Designed for high-traffic retail floors, mall corridors, and logistics hubs.
                    </p>
                </div>
                {/* Image right, callouts left — keeps text off the bin */}
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Left: callout list */}
                    <div className="space-y-6 order-2 md:order-1">
                        {[
                            { title: "Touchscreen display", desc: "On-bin guided instructions walk the customer through every step — no staff needed." },
                            { title: "QR / barcode scanner", desc: "Scans order receipts or QR codes to identify and validate the return before the door opens." },
                            { title: "Verified intake slot", desc: "Camera and weight sensor capture photo evidence and item weight at the exact moment of drop." },
                            { title: "Secure storage compartment", desc: "Tamper-resistant lower compartment holds items safely until operator collection." },
                            { title: "IoT connected", desc: "Always-on connectivity streams return events to the operator dashboard in real time." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5"></div>
                                <div>
                                    <h4 className="font-semibold text-base text-foreground dark:text-white">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right: bin image */}
                    <div className="relative aspect-[3/4] order-1 md:order-2">
                        <Image
                            src="/images/smartbin-feature.png"
                            alt="Encora Smart Return Bin features"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WHY IT'S SMARTER */}
            <section className="mx-auto max-w-6xl w-full mt-24 px-6">
                <h2 className="heading-lg text-center mb-12 dark:text-white">Why it's smarter</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: CheckCircle, title: "Instant confirmation", desc: "Customer knows the drop-off worked before they walk away." },
                        { icon: Smartphone, title: "No staff required", desc: "Fully self-service — frees up your team for higher-value work." },
                        { icon: MapPin, title: "Built for traffic", desc: "Compact footprint designed for high-volume retail and mall locations." },
                        { icon: Zap, title: "Faster recovery", desc: "Verified returns move faster through the reverse logistics chain." },
                    ].map((c, i) => (
                        <article key={i} className="rounded-2xl border border-border bg-card p-8 space-y-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <c.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-semibold dark:text-white">{c.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{c.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* OPERATORS SECTION */}
            <section id="operators" className="mx-auto max-w-6xl w-full mt-24 px-6">
                <div className="border-t border-border pt-24">

                    {/* Header row */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                        <div>
                            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-emerald-500/20">
                                For Operators
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-5 dark:text-white">
                                Active returns infrastructure
                            </h2>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Traditional return lockers are passive — they store items until someone manually retrieves them. The Encora Smart Return Bin is an <strong className="text-foreground dark:text-white">active participant</strong> in your reverse logistics network, initiating verification and routing the moment a return is made.
                            </p>
                        </div>
                        <div className="flex flex-col justify-between h-full gap-6">
                            <p className="text-base text-muted-foreground leading-relaxed">
                                By reading encoded tags and communicating with our verification cloud, the bin ensures every return is legitimate, tracked, and ready for its next step — resale, recycling, or restocking.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact-us"
                                    className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                                >
                                    Request a pilot
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Capabilities + Specs */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-12 border-t border-border">
                        <div className="space-y-8">
                            <h3 className="text-lg font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Core capabilities</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Real-time verification", desc: "Validates returned items against order records at the moment of drop-off." },
                                    { title: "Contactless drop-off", desc: "Seamless customer experience — no staff intervention needed." },
                                    { title: "Secure storage", desc: "Anti-tamper design keeps items safe until collection." },
                                    { title: "Data capture", desc: "Logs return volume, timing, item condition, and exception flags per transaction." },
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-600 mt-1">
                                            <CheckCircle className="w-3.5 h-3.5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base dark:text-white">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-lg font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Technical specs</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: <BinIcon />, title: "High capacity", desc: "Compact footprint, optimized for store floor deployment." },
                                    { icon: <TagsIcon />, title: "QR + RFID + NFC", desc: "Compatible with major tag standards for broad POS integration." },
                                    { icon: <ConnectIcon />, title: "Always connected", desc: "IoT-enabled for continuous monitoring and alerts." },
                                    { icon: <VerifyIcon />, title: "Instant feedback", desc: "On-screen confirmation for customers and real-time operator dashboard." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-card p-6 rounded-2xl border border-border space-y-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                            <div className="w-4 h-4 flex items-center justify-center">{item.icon}</div>
                                        </div>
                                        <h4 className="font-semibold text-sm dark:text-white">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="mx-auto max-w-6xl w-full mt-24 mb-24 px-6">
                <div className="rounded-3xl bg-emerald-600 text-white p-10 md:p-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Ready to upgrade your return infrastructure?
                    </h2>
                    <p className="mt-3 text-base text-emerald-100 max-w-lg mx-auto">
                        Talk to our team about a pilot deployment at your locations.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact-us"
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                            Request a pilot
                        </Link>
                        <Link
                            href="/contact-us"
                            className="rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
