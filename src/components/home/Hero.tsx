"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  LeafDecoration,
  FlowerInVase,
} from "@/components/ui/Decorations";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm cozy background — coffee & journal aesthetic */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Strong warm overlay to keep everything in brand palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-bg/92 via-warm-bg/75 to-secondary-light/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-light/20 via-transparent to-warm-bg/45" />
      </div>

      <LeafDecoration className="absolute top-20 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
      <FlowerInVase className="absolute bottom-10 right-20 w-28 h-40 text-accent opacity-25 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
              Lifestyle Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-[1.1]"
          >
            The life you keep promising yourself,{" "}
            <span className="text-accent">let&apos;s actually build it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-dark-light leading-relaxed"
          >
            You&apos;ve tried the planners. You&apos;ve made the lists. By week three,
            something always slips. Santwanaa is where habit coaching meets emotional
            wellness, the grounded, personal support that helps real change actually stay.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
