"use client";

import { motion } from "framer-motion";
import { Compass, Sprout, Flag } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "We walk with you",
    text: "We guide closely at first: planning, tracking, working through the hard parts together.",
  },
  {
    icon: Sprout,
    title: "You start leading",
    text: "You take more ownership, and we're still right here. You start recognising your own triggers and making your own adjustments, but we're in your corner whenever you need a sounding board or a reality check.",
  },
  {
    icon: Flag,
    title: "You carry it forward",
    text: "You have the habits, the self awareness, and the inner resilience to keep going on your own.",
  },
];

export function SelfReliance() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 text-secondary text-sm font-semibold rounded-full mb-6 border border-white/20">
              Our Promise
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              What Happens When You Don&apos;t Need Us Anymore?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-2">
              That&apos;s exactly the point. That&apos;s when we&apos;ve done our job.
            </p>
            <p className="text-white/70 leading-relaxed">
              Every session, every check in, every conversation is designed to give you skills
              that stay with you after we step back. We&apos;re not building a dependency. We&apos;re
              building <em>you</em>.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 text-center"
            >
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.icon size={22} className="text-secondary" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
