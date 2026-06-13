"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Process"
          title="How It Works"
          subtitle="From the messiness of where you are now to where you'd quietly like to be. No guesswork. Just a path we walk together, one honest step at a time."
          light
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-secondary/30" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-0 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-base">{step.number}</span>
                </div>

                <div className="bg-dark-light/50 rounded-2xl p-6 border border-secondary/10">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-light/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
