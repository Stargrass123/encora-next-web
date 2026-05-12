"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pushToDataLayer } from "lib/gtm";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Full bleed background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-revamp-new.jpeg"
          alt="Woman returning item to Encora RetAI kiosk in mall"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay on left side for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>

      {/* Content — left aligned */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-encora-mint text-sm sm:text-base font-semibold uppercase tracking-widest mb-4"
          >
            Retail Return Verification
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Verified Returns.{" "}
            <span className="text-encora-mint">Zero Guesswork.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10"
          >
            Encora RetAI verifies every return at intake — reducing fraud,
            cutting labor, and capturing data retailers can&apos;t get today.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 mb-10"
          >
            {[
              { stat: "$101B", label: "Annual return fraud" },
              { stat: "$29", label: "Avg cost per return" },
              { stat: "0%", label: "Verified at handoff today" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-encora-mint">{item.stat}</div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact-us"
              onClick={() =>
                pushToDataLayer({
                  event: "hero_cta_click",
                  button_text: "Request a Pilot Conversation",
                  page_path: "/",
                })
              }
              className="rounded-2xl px-6 py-3 font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Request a Pilot Conversation
            </Link>
            <Link
              href="/solutions"
              className="inline-flex rounded-2xl px-6 py-3 font-semibold items-center justify-center border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
            >
              View Platform
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
