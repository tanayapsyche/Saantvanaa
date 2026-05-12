"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME_DEVANAGARI } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light/80 backdrop-blur-md border-b border-secondary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-brand text-2xl lg:text-3xl font-bold text-dark">
            {SITE_NAME_DEVANAGARI}
          </span>
          <span className="hidden sm:inline text-xs text-accent font-semibold tracking-wide uppercase">
            Saantwanaa
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-accent/10 text-accent"
                  : "text-dark-light hover:text-dark hover:bg-secondary/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            Book Free Call
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-secondary/20 bg-light">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-dark-light hover:bg-secondary/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-accent text-white rounded-lg text-center font-semibold"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
