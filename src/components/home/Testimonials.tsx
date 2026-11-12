"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { LeafDecoration } from "@/components/ui/Decorations";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-slate relative overflow-hidden">
      <LeafDecoration className="absolute -bottom-5 left-10 w-20 h-20 text-accent opacity-20 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Stories"
          title="What Members Say"
          subtitle="Real experiences from people who've walked this path."
          light
        />

        {/* Desktop arrows */}
        <div className="hidden md:flex justify-end gap-2 mb-4 max-w-6xl mx-auto">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-white/25 hover:border-white text-white/80 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-white/25 hover:border-white text-white/80 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-thin"
          style={{ scrollbarColor: "rgba(186,112,75,0.3) transparent" }}
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-7 border border-secondary/20 flex flex-col"
            >
              <Quote size={28} className="text-secondary/50 mb-3" />
              <p className="text-dark-light leading-relaxed mb-5 italic flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-dark">{item.name}</p>
                <p className="text-sm text-dark-light">{item.role}</p>
              </div>
            </motion.div>
          ))}
          {/* trailing spacer so the last card can fully snap */}
          <div className="shrink-0 w-2" aria-hidden />
        </div>

        <p className="text-center text-xs text-white/50 mt-4 md:hidden">
          Swipe to read more →
        </p>
      </div>
    </section>
  );
}
