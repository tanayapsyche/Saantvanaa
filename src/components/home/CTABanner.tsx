"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-warm-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
          If something in you is saying yes, listen to it.
        </h2>
        <p className="mt-4 text-lg text-dark-light max-w-xl mx-auto">
          Fifteen minutes. No commitment. Just an honest conversation about what you&apos;ve been carrying, and whether we might be able to help you put it down.
        </p>
        <div className="mt-8">
          <Button href="/contact#contact-details" size="lg">
            Book Your Free Discovery Call <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
