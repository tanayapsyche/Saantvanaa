"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Clock,
  Zap,
  Heart,
  Shuffle,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import { ADHDQuiz } from "@/components/adhd/ADHDQuiz";
import { ADHDBrainDiagram } from "@/components/adhd/ADHDBrainDiagram";

const topSymptoms = [
  {
    icon: Clock, title: "Time Blindness",
    text: "Five minutes and two hours feel the same. You're always late, always underestimating, always scrambling, and people think you don't care. You do.",
  },
  {
    icon: Zap, title: "Task Paralysis",
    text: "Twenty things to do and you can't start any. It's not laziness, your brain is overwhelmed by the sheer number of choices and can't pick one.",
  },
  {
    icon: Heart, title: "Rejection Sensitivity",
    text: "A slightly off tone in a message can ruin your whole day. Criticism feels like a physical blow. Your emotions hit harder and faster than others.",
  },
  {
    icon: Shuffle, title: "Transition Struggles",
    text: "Switching from one task to another feels impossibly hard. Getting off the couch to do something you actually want to do can take enormous effort.",
  },
  {
    icon: Layers, title: "All or Nothing",
    text: "You either hyperfocus for 10 hours or can't bring yourself to spend 10 minutes. Consistent middle ground feels like it belongs to someone else.",
  },
  {
    icon: Brain, title: "The \"What's Wrong With Me\" Loop",
    text: "You know you're capable. The gap between what you could do and what you actually do creates a painful daily loop of self doubt.",
  },
];

const stats = [
  {
    number: "6%",
    label: "of US adults have ADHD",
    source: "CDC, 2025",
    href: "https://www.cdc.gov/adhd/data/index.html",
  },
  {
    number: "<20%",
    label: "ever receive a formal diagnosis",
    source: "CHADD",
    href: "https://chadd.org/about-adhd/general-prevalence/",
  },
  {
    number: "55.9%",
    label: "are first diagnosed in adulthood",
    source: "CDC, 2025",
    href: "https://www.cdc.gov/mmwr/volumes/74/wr/mm7440a3.htm",
  },
  {
    number: "21.6",
    label: "extra days of lost productivity per year",
    source: "WHO Survey",
    href: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
  },
  {
    number: "60%+",
    label: "have lost or changed a job due to symptoms",
    source: "ADDA",
    href: "https://add.org/adhd-facts/",
  },
];

const howWeHelp = [
  "Build routines that work WITH your ADHD brain, not against it",
  "Break overwhelming tasks into manageable, concrete steps you can actually start",
  "Create external accountability systems because internal motivation isn't always enough",
  "Process the guilt and self doubt through professional therapeutic guidance",
  "Develop personalised coping strategies for time blindness and task paralysis",
  "Regular check ins to catch derailment before it spirals",
  "Address the emotional exhaustion that comes from masking and overcompensating",
  "Help you celebrate progress, even when it doesn't look \"perfect\"",
];

export function ADHDContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light/95 via-light/90 to-light/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                ADHD Support
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] mb-6">
                Finally, a Place That Gets{" "}
                <span className="text-accent">How Your Brain Actually Works</span>
              </h1>
              <p className="text-lg text-dark-light leading-relaxed mb-8 max-w-2xl">
                You don&apos;t need more willpower. You need a system built for how your brain
                actually works, and support for the parts nobody else sees.
              </p>
              <Button href="/contact" size="lg">
                Book a Free Discovery Call <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Reality"
            title="What Adult ADHD Actually Feels Like"
            subtitle="Beyond the stereotypes. These are the experiences that rarely get talked about."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topSymptoms.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-warm-bg rounded-2xl p-7 border border-secondary/25 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light leading-relaxed text-[15px]">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 max-w-2xl mx-auto text-center font-display text-xl sm:text-2xl text-dark-light italic leading-relaxed"
          >
            &ldquo;If you recognise yourself here, know that you&apos;re not alone, you&apos;re
            not broken, and you&apos;re not imagining it.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-secondary text-sm font-semibold uppercase tracking-wider mb-10">
            You are not alone
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.number}</p>
                <p className="text-light/80 text-sm leading-snug">{stat.label}</p>
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-secondary/70 hover:text-secondary text-[11px] mt-1 underline underline-offset-2 decoration-secondary/30 hover:decoration-secondary transition-colors"
                >
                  {stat.source}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ADHDQuiz />
        </div>
      </section>

      {/* Interactive Brain Diagram */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Through the Lens of Science"
            title="Your ADHD Brain, Explored"
            subtitle="Click any region to discover what leading neuroscientists have found."
          />
          <ADHDBrainDiagram />
        </div>
      </section>

      {/* Manageable, not reversible */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.08),transparent)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Brain size={40} className="text-secondary mx-auto mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              ADHD isn&apos;t something to be{" "}
              <span className="text-secondary">fixed.</span>
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-6">
              Your brain is wired differently, and that wiring isn&apos;t going away. And honestly?
              It doesn&apos;t need to. ADHD isn&apos;t a flaw to be corrected.
            </p>
            <p className="text-lg text-white/85 leading-relaxed mb-6">
              But with small, intentional lifestyle changes, the right systems, and proper emotional
              support, you can effectively manage the challenging symptoms while cherishing everything
              that makes your ADHD brain special.
            </p>
            <p className="font-display text-xl text-secondary italic mt-8">
              The goal isn&apos;t to become neurotypical. It&apos;s to thrive as you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 lg:py-28 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Approach"
            title="How Saantwanaa Helps With ADHD"
            subtitle="Not generic advice. A personalised system with professional support, built for your brain."
          />

          <div className="max-w-2xl mx-auto space-y-4">
            {howWeHelp.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-secondary/20"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-accent stroke-[3]" />
                </div>
                <p className="text-dark-light leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Brain size={48} className="text-accent mx-auto mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-dark leading-tight mb-4">
              You Don&apos;t Have to Figure This Out Alone
            </h2>
            <p className="text-lg text-dark-light mb-8 max-w-xl mx-auto">
              A 15 minute call is all it takes to start understanding what&apos;s possible. No
              diagnosis required. No commitment. Just a safe, warm conversation.
            </p>
            <Button href="/contact" size="lg">
              Book Your Free Discovery Call <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
