"use client";
import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f2f30] text-white/60 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Image
              src="/images/encora_light_logo.png"
              alt="Encora"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              AI-verified return hubs for retail. Lower labor. Less loss. Verified outcomes.
            </p>
            <p className="text-white/30 text-xs mt-4">
              Patent Pending · Seattle, WA
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/bin" className="hover:text-white transition-colors">The Bin</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/encora-reuse" className="hover:text-white transition-colors">Encora Reuse</Link></li>
              <li><Link href="/blog-doc" className="hover:text-white transition-colors">Docs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li>
                <a
                  href="https://www.linkedin.com/company/encora-enterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Encora Enterprises, Inc. All rights reserved.</span>
          <span>tedw@encora.co · encora.co</span>
        </div>
      </div>
    </footer>
  );
}
