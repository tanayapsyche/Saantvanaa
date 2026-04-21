"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-warm-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
          Ready to Start Living Differently?
        </h2>
        <p className="mt-4 text-lg text-dark-light max-w-xl mx-auto">
          A 15 minute conversation could be the first step. No pressure, no commitment, just a warm and honest chat about what you need.
        </p>
        <div className="mt-8">
          <Button href="/contact" size="lg">
            Book Your Free Discovery Call <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
