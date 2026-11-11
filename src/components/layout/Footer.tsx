import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { Heart } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-dark text-light/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <BrandLogo size="lg" tone="dark" />
            </div>
            <p className="text-sm leading-relaxed text-light/60 max-w-xs">
              Lifestyle management through habit coaching and emotional wellness.
              Helping you build a life that works for you.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-light/60">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-secondary transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-secondary transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-light/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light/40">
          <p>&copy; {new Date().getFullYear()} Santwanaa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-light/20">·</span>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <span className="text-light/20">·</span>
            <p className="flex items-center gap-1">
              Made with <Heart size={12} className="text-accent fill-accent" /> for healthier lives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
