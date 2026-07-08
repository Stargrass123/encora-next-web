import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="bg-[#194C4D] text-white py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-encora-mint text-sm font-semibold uppercase tracking-widest mb-4">
          Where We&apos;re Headed
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to verify your returns?
        </h2>
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          RetAI is our vision for verified retail returns — built on the same
          infrastructure already running in our reuse programs today. If
          you&apos;re exploring what verified intake could look like for your
          operation, we&apos;d like to hear from you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact-us"
            className="rounded-2xl px-8 py-4 font-semibold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            Get in Touch
          </Link>
          <Link
            href="/bin"
            className="rounded-2xl px-8 py-4 font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-200 text-lg"
          >
            View Platform
          </Link>
        </div>
        <p className="mt-10 text-white/40 text-sm">
          Patent pending · Encora Enterprises, Inc. · Seattle, WA
        </p>
      </div>
    </section>
  );
}
