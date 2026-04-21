"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookOpen, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Habit Coaching",
    text: "We co-design a realistic routine built around your life, using frameworks from Atomic Habits and mindfulness. Then we track it twice a week and keep adjusting until it sticks. Not motivation. A system.",
  },
  {
    icon: Heart,
    title: "Emotional Wellness Support",
    text: "When guilt, resistance, or self doubt show up (and they will), we work through them with personalised therapeutic techniques. The emotional patterns stop running the show.",
  },
  {
    icon: Users,
    title: "Ongoing Accountability",
    text: "A real person checking in twice a week. Noticing when you're slipping before you do. Helping you recover without judgment. Not an app. Not a notification. A human in your corner.",
  },
];

export function WhatIsLifestyleManagement() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="More Than Coaching. More Than Therapy."
          subtitle="Lifestyle Management is a supervised approach that combines structured habit coaching with emotional wellness support, so you don't just plan better, you feel better doing it."
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
