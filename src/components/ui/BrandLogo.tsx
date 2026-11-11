import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_NAME_DEVANAGARI } from "@/lib/constants";

interface BrandLogoProps {
  /** "light" = text for light backgrounds, "dark" = text for dark backgrounds */
  tone?: "light" | "dark";
  size?: "md" | "lg";
  onClick?: () => void;
}

// Single source of truth for logo size/spacing so every page matches.
export function BrandLogo({ tone = "light", size = "md", onClick }: BrandLogoProps) {
  const imgSize = size === "lg" ? "h-16 w-[60px]" : "h-11 w-[41px] lg:h-14 lg:w-[52px]";
  return (
    <Link href="/" onClick={onClick} aria-label={`${SITE_NAME} home`} className="flex items-center gap-3 shrink-0">
      <span className={`relative block ${imgSize}`}>
        <Image src="/Logo.png" alt="" fill sizes="60px" className="object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-brand text-2xl lg:text-3xl font-bold ${tone === "dark" ? "text-secondary" : "text-dark"}`}
        >
          {SITE_NAME_DEVANAGARI}
        </span>
        <span
          className={`mt-1 text-[10px] lg:text-xs font-semibold tracking-[0.25em] uppercase ${
            tone === "dark" ? "text-accent-light" : "text-accent"
          }`}
        >
          {SITE_NAME}
        </span>
      </span>
    </Link>
  );
}
