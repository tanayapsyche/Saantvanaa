"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpandableParagraph } from "@/components/ui/ExpandableParagraph";
import { BookOpen, Heart, Users } from "lucide-react";
import { OrganicBlob } from "@/components/ui/Decorations";

const highlights = [
  {
    icon: BookOpen,
    title: "Habit Coaching",
    intro: "You've made the plans. You've broken them too.",
    rest: "This time we co-design a routine built around your real life, drawing from Atomic Habits and mindfulness — and we keep tweaking until it actually fits.",
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    intro: "When the guilt, the self-doubt, the why-can't-I-just-do-this voice shows up, we meet it.",
    rest: "Real change touches real things, and you won't be navigating any of it alone.",
  },
  {
    icon: Users,
    title: "Steady Accountability",
    intro: "Not an app. Not a streak. A real person checking in twice a week.",
    rest: "Noticing you before you notice yourself slipping. Someone whose only job is to be in your corner.",
  },
];

export function WhatIsLifestyleManagement() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <OrganicBlob className="absolute -bottom-32 -left-32 w-80 h-80 text-secondary opacity-25 hidden md:block" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <ExpandableParagraph intro={item.intro} rest={item.rest} className="!mb-0 !text-[15px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
