"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SymptomFlipCard } from "@/components/adhd/SymptomFlipCard";
import { SELF_REFLECTION_CARDS } from "@/lib/constants";

const MOBILE_CUTOFF = 6;

export function SelfReflection() {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = SELF_REFLECTION_CARDS.length - MOBILE_CUTOFF;

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Self Check"
          title="Let's do a quick self-reflection"
          subtitle="If even a few of these feel like they were written about you, take that as a quiet sign. You're in the right place."
        />

        <p className="text-center text-sm text-dark-light italic mb-8 max-w-md mx-auto">
          Tap any card to flip it and see how we can help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {SELF_REFLECTION_CARDS.map((item, i) => (
            <div
              key={item.name}
              className={i >= MOBILE_CUTOFF && !showAll ? "hidden sm:block" : ""}
            >
              <SymptomFlipCard
                index={i}
                label={item.label}
                name={item.name}
                text={item.text}
                frontLabel="Sound familiar?"
                backLabel="Here's what that means"
              />
            </div>
          ))}
        </div>

        {!showAll && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="sm:hidden w-full mt-5 flex items-center justify-center gap-1.5 py-3 text-accent font-semibold text-sm hover:underline"
          >
            Show {hiddenCount} more <ChevronDown size={16} />
          </button>
        )}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/contact#contact-details" size="lg">
            Let&apos;s Talk About It
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
