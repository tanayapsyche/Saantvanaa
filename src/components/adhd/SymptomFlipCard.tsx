"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";

interface SymptomFlipCardProps {
  label: string;
  name: string;
  text: string;
  index: number;
  frontLabel?: string;
  backLabel?: string;
}

export function SymptomFlipCard({ label, name, text, index, frontLabel = "What you thought", backLabel = "What it actually is" }: SymptomFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
      className="h-[300px] sm:h-[280px]"
      style={{ perspective: "1200px" }}
    >
      <button
        type="button"
        onClick={() => setFlipped((s) => !s)}
        className="relative w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
        aria-pressed={flipped}
        aria-label={flipped ? `Flip to question: ${label}` : `Reveal answer for: ${label}`}
      >
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-[700ms] ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT — "What you thought it was" */}
          <div
            className="absolute inset-0 bg-warm-bg border-2 border-secondary/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-accent/40 hover:shadow-md transition-all"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <p className="text-[10.5px] font-bold tracking-wider uppercase text-dark-light/70 mb-5">
              {frontLabel}
            </p>
            <p
              className="font-display text-xl sm:text-2xl text-dark italic leading-snug px-2"
              dangerouslySetInnerHTML={{ __html: label }}
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] text-accent font-medium">
              <RotateCw size={11} />
              <span>Tap to reveal</span>
            </div>
          </div>

          {/* BACK — "What it actually is" */}
          <div
            className="absolute inset-0 bg-accent text-white rounded-2xl p-6 flex flex-col shadow-md"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-[10.5px] font-bold tracking-wider uppercase text-white/70 mb-2">
              {backLabel}
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold mb-3 leading-snug">
              {name}
            </h3>
            <p
              className="text-[13.5px] text-white/95 leading-relaxed flex-1 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="flex items-center gap-1.5 text-[11px] text-white/70 mt-3 pt-2 border-t border-white/15">
              <RotateCw size={11} />
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
