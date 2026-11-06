"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b-2 border-accent/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px] lg:h-24">
        <BrandLogo />

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-earth text-light"
                  : "text-earth hover:text-earth-deep hover:bg-secondary/30"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#contact-details"
            className="ml-2 px-5 py-2.5 bg-accent-dark text-white rounded-full text-sm font-semibold hover:bg-earth transition-colors"
          >
            Book Free Call
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-earth-deep"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-secondary/30 bg-warm-white">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-earth text-light"
                    : "text-earth hover:bg-secondary/25"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#contact-details"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-accent-dark text-white rounded-lg text-center font-semibold"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
