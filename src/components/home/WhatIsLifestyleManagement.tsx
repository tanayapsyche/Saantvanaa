"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookOpen, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Habit Coaching",
    text: "You've made the plans. You've broken them too. This time we co-design a routine that's built around your real life, drawing from Atomic Habits and mindfulness, and we keep tweaking until it actually fits.",
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    text: "When the guilt, the self doubt, the why-can't-I-just-do-this voice shows up, we meet it. Real change touches real things, and you won't be navigating any of it alone.",
  },
  {
    icon: Users,
    title: "Steady Accountability",
    text: "Not an app. Not a streak. A real person checking in twice a week, noticing you before you notice yourself slipping. Someone whose only job is to be in your corner.",
  },
];

export function WhatIsLifestyleManagement() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="More Than Coaching. More Than Therapy."
          subtitle="Most coaching gives you a plan. Most therapy gives you understanding. Lifestyle Management is the rare space that gives you both, with someone walking beside you the whole way."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-warm-bg rounded-2xl p-8 border border-secondary/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-dark-light leading-relaxed text-[15px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
