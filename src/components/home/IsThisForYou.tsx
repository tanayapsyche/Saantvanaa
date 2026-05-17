"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IS_THIS_FOR_YOU } from "@/lib/constants";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function IsThisForYou() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Self Check"
          title="Does any of this sound a little too familiar?"
          subtitle="If even a few of these feel like they were written about you, take that as a quiet sign. You're in the right place."
        />

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {IS_THIS_FOR_YOU.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-warm-bg border border-secondary/20 hover:border-accent/25 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-accent" />
                </div>
                <p className="text-dark leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/contact" size="lg">
              Let&apos;s Talk About It
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
