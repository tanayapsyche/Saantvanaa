"use client";

import { useState } from "react";

interface ExpandableParagraphProps {
  /** Always visible part. */
  intro: string;
  /** Hidden behind "Read more" on mobile; visible inline on sm and up. */
  rest: string;
  className?: string;
}

/**
 * Mobile-friendly paragraph that hides part of long content behind a
 * "Read more" toggle, but shows everything on desktop. Used in places where
 * the full paragraph reads naturally on a wide screen but feels overwhelming
 * on a phone.
 */
export function ExpandableParagraph({
  intro,
  rest,
  className = "",
}: ExpandableParagraphProps) {
  const [open, setOpen] = useState(false);

  return (
    <p
      className={`text-base sm:text-lg text-dark-light leading-relaxed mb-4 ${className}`}
    >
      {intro}{" "}
      <span className={open ? "inline" : "hidden sm:inline"}>{rest}</span>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="sm:hidden inline ml-1 text-accent-dark font-semibold underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
        >
          Read more
        </button>
      )}
    </p>
  );
}
