"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import {
  LeafDecoration,
  FlowerInVase,
  Sapling,
  OrganicBlob,
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

      <OrganicBlob className="absolute -top-24 -right-24 w-[420px] h-[420px] text-accent opacity-15 hidden md:block" />
      <Sapling className="absolute top-1/2 -translate-y-1/2 right-24 w-56 h-60 text-earth opacity-40 hidden xl:block" />
      <LeafDecoration className="absolute top-20 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
      <FlowerInVase className="absolute bottom-10 right-4 w-24 h-36 text-accent opacity-30 hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-earth text-light text-sm font-semibold rounded-full mb-6">
              Lifestyle Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-earth-deep leading-[1.1]"
          >
            The life you keep promising yourself,{" "}
            <span className="text-accent-dark">let&apos;s actually build it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-earth leading-relaxed"
          >
            You&apos;ve tried the planners. You&apos;ve made the lists. By week three,
            something always slips. Santwanaa is where habit coaching meets emotional
            wellness, the grounded, personal support that helps real change actually stay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/contact#contact-details"
              className="group inline-flex items-center gap-4 bg-earth-deep border border-earth rounded-2xl px-5 py-4 shadow-md hover:shadow-lg hover:bg-earth transition-all"
            >
              <span className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Phone size={18} className="text-earth-deep" />
              </span>
              <span className="text-left">
                <span className="block font-semibold text-light text-sm sm:text-base">
                  Not sure where to start?
                </span>
                <span className="block text-light/80 text-xs sm:text-sm">
                  Book a free call, no pressure.
                </span>
              </span>
              <ArrowRight size={18} className="text-secondary transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
