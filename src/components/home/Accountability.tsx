"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlowerInVase, Sprig } from "@/components/ui/Decorations";

// A mock conversation showing what accountability actually looks like,
// rather than describing it in cards.
type Bubble = {
  from: "coach" | "you";
  text: string;
  time: string;
};

const conversation: Bubble[] = [
  {
    from: "coach",
    text: "Hey, how did the new morning routine feel this week?",
    time: "Mon · 9:14 AM",
  },
  {
    from: "you",
    text: "Honestly, Monday and Tuesday went well. Wednesday I slept through the alarm.",
    time: "Mon · 9:18 AM",
  },
  {
    from: "coach",
    text: "Totally okay. What was different about Tuesday night?",
    time: "Mon · 9:19 AM",
  },
  {
    from: "you",
    text: "I scrolled till 1am. I think I was a little wired from work stuff.",
    time: "Mon · 9:22 AM",
  },
  {
    from: "coach",
    text: "Got it. Let's not change the morning yet, let's protect the wind down. One small swap to try, want to chat through it on Wednesday?",
    time: "Mon · 9:24 AM",
  },
  {
    from: "you",
    text: "Yes please. Also I noticed I actually wanted to journal last night. Small win.",
    time: "Mon · 9:25 AM",
  },
  {
    from: "coach",
    text: "Not small. That's the inner shift starting to show up. I see you.",
    time: "Mon · 9:26 AM",
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
          title="What Does Accountability Actually Look Like?"
          subtitle="Less of a watchdog, more of a steady voice that knows your story. Here's a glimpse of what a week in your inbox might feel like."
        />

        <div className="max-w-2xl mx-auto">
          {/* Chat window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-secondary/25 shadow-md overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-accent text-white px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                T
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Tanaya · Your coach</p>
                <p className="text-[11px] text-white/80 leading-tight mt-0.5">
                  online · usually replies the same day
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="px-4 sm:px-6 py-6 space-y-4 bg-gradient-to-b from-warm-bg/30 to-white">
              {conversation.map((bubble, i) => {
                const isCoach = bubble.from === "coach";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className={`flex ${isCoach ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`max-w-[80%] ${isCoach ? "" : "items-end"} flex flex-col`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-[14.5px] leading-relaxed ${
                          isCoach
                            ? "bg-warm-bg text-dark rounded-tl-sm"
                            : "bg-accent text-white rounded-tr-sm"
                        }`}
                      >
                        {bubble.text}
                      </div>
                      <p
                        className={`text-[10.5px] text-dark-light/60 mt-1 ${
                          isCoach ? "ml-1" : "mr-1"
                        }`}
                      >
                        {bubble.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="px-5 py-3 bg-warm-bg/60 border-t border-secondary/20 text-center">
              <p className="text-[11px] text-dark-light italic">
                A small example. Real conversations stay private, of course.
              </p>
            </div>
          </motion.div>

          {/* Tagline below */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-dark-light text-[15px] leading-relaxed max-w-xl mx-auto"
          >
            Accountability isn&apos;t about being watched. It&apos;s about being noticed,
            celebrated, gently redirected, and steadied by someone who knows your story
            and is genuinely on your side.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
