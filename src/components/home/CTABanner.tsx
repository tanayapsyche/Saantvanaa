"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { OrganicBlob, Sapling } from "@/components/ui/Decorations";

export function CTABanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-warm-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden max-w-5xl mx-4 sm:mx-6 lg:mx-auto rounded-3xl bg-gradient-to-br from-earth-deep to-earth px-6 sm:px-12 py-12 sm:py-16 text-center shadow-xl"
      >
        <OrganicBlob className="absolute -top-20 -right-20 w-64 h-64 text-accent opacity-30" />
        <Sapling className="absolute bottom-4 left-6 w-24 h-28 text-secondary opacity-30 hidden sm:block" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-light leading-tight">
            If something in you is saying yes, listen to it.
          </h2>
          <p className="mt-4 text-lg text-light/85 max-w-xl mx-auto">
            Fifteen minutes. No commitment. Just an honest conversation about what you&apos;ve been carrying, and whether we might be able to help you put it down.
          </p>
          <div className="mt-8">
            <Button href="/contact#contact-details" size="lg" variant="light">
              Book Your Free Discovery Call <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
