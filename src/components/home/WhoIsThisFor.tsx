"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sprout, RefreshCw, Brain, Cloud, HandHeart } from "lucide-react";
import { LeafDecoration } from "@/components/ui/Decorations";

const items = [
  {
    title: "Building New Habits",
    description:
      "You want to build a healthier routine with better sleep, exercise, focus, or productivity but struggle to make it stick on your own.",
    icon: Sprout,
    color: "bg-green/10 text-green",
  },
  {
    title: "Breaking Unhealthy Patterns",
    description:
      "You're stuck in cycles that aren't serving you like procrastination, doom scrolling, or irregular sleep and want structured support to replace them with something better.",
    icon: RefreshCw,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Managing ADHD",
    description:
      "You're a high functioning person with ADHD who struggles with sustained attention, last minute pressure, overwhelm, and the guilt that follows.",
    icon: Brain,
    color: "bg-secondary/30 text-accent",
  },
  {
    title: "Dealing with Brain Fog",
    description:
      "You often feel mentally cloudy, scattered, or unable to think clearly. Simple decisions feel heavy and you find yourself staring at your screen without processing anything.",
    icon: Cloud,
    color: "bg-green/10 text-green",
  },
  {
    title: "Wanting Someone in Your Corner",
    description:
      "You're tired of figuring everything out alone. Sometimes you just want someone you trust to help you think through decisions and give you that gentle push when you need it.",
    icon: HandHeart,
    color: "bg-accent/10 text-accent",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-light relative overflow-hidden">
      <LeafDecoration className="absolute top-10 right-10 w-24 h-24 text-green opacity-30 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Who It's For"
          title="This Program Is For You If..."
          subtitle="Whether you're trying to build new habits, break old ones, manage ADHD, or just need someone in your corner, Santwanaa is designed for people who want real, lasting change."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-white rounded-2xl p-7 border border-secondary/20 hover:border-green/30 transition-all hover:shadow-md group"
            >
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-dark-light leading-relaxed text-[15px]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
