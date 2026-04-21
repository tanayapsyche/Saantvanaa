"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Stories"
          title="What Members Say"
          subtitle="Real experiences from people who've walked this path."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-secondary/20"
            >
              <Quote size={32} className="text-secondary/50 mb-4" />
              <p className="text-dark-light leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-dark">{item.name}</p>
                <p className="text-sm text-dark-light">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
