"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserCheck, Eye, PartyPopper, LifeBuoy, HelpingHand } from "lucide-react";
import { FlowerInVase, Sprig } from "@/components/ui/Decorations";

const aspects = [
  {
    icon: UserCheck,
    title: "Someone who checks in",
    description:
      "Regular, consistent sessions where someone genuinely asks how you're doing and means it. Not a generic \"how's it going?\" but a structured review of what worked, what didn't, and why.",
  },
  {
    icon: Eye,
    title: "Someone who notices",
    description:
      "Your coach spots patterns you might miss yourself: the triggers that lead to procrastination, the time of day you lose momentum, the hidden wins you're not giving yourself credit for.",
  },
  {
    icon: PartyPopper,
    title: "Someone who celebrates with you",
    description:
      "Small wins matter more than big ones. Waking up on time for three days straight? That's worth acknowledging. Choosing the healthier option even once? That counts.",
  },
  {
    icon: LifeBuoy,
    title: "Someone who helps you recover",
    description:
      "Slipping up is part of the process, not the end of it. Accountability means having someone who helps you get back on track without judgment, guilt, or the \"I told you so\" attitude.",
  },
  {
    icon: HelpingHand,
    title: "Someone to lean on when you're unsure",
    description:
      "Some decisions feel too big to make alone. Whether it's a small wobble or a real fork in the road, you'll have a steady, judgement free voice to help you think it through and find your way.",
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
          subtitle="It's a word that gets thrown around a lot. Here's what it actually looks like when you work with us."
        />

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-dark-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Think of it like having a workout partner for your life. Not someone watching over
            your shoulder, but someone who&apos;s genuinely invested in seeing you grow.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aspects.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-secondary/30 hover:border-accent/30 transition-all hover:shadow-md"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light leading-relaxed text-[15px]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
