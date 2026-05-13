"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserCheck, Eye, PartyPopper, LifeBuoy, HelpingHand } from "lucide-react";
import { FlowerInVase, Sprig } from "@/components/ui/Decorations";

const aspects = [
  {
    icon: UserCheck,
    title: "Checks in on you",
    line: "Real, structured sessions. Not generic.",
  },
  {
    icon: Eye,
    title: "Notices what you don't",
    line: "Patterns, triggers, small wins.",
  },
  {
    icon: PartyPopper,
    title: "Celebrates the small stuff",
    line: "Three days of waking on time counts.",
  },
  {
    icon: LifeBuoy,
    title: "Helps you bounce back",
    line: "No guilt, no \"I told you so\".",
  },
  {
    icon: HelpingHand,
    title: "Steady when you're unsure",
    line: "A judgement free voice to think aloud.",
  },
];

export function Accountability() {
  return (
    <section className="py-20 lg:py-28 bg-warm-bg relative overflow-hidden">
      <FlowerInVase className="absolute top-10 right-4 w-24 h-36 text-accent opacity-20 hidden lg:block" />
      <Sprig className="absolute bottom-10 left-4 w-20 h-32 text-accent opacity-20 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Accountability"
          title="What Does Accountability Actually Mean?"
          subtitle="Less of a watchdog, more of a workout partner for your life. Here's what it looks like in practice:"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {aspects.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-secondary/25 hover:border-accent/35 transition-all hover:shadow-md flex flex-col items-center text-center h-full"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-dark text-[15px] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-dark-light text-sm leading-relaxed">{item.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
