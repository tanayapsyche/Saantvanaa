"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  ArrowRight,
  Check,
} from "lucide-react";
import { ADHDQuiz } from "@/components/adhd/ADHDQuiz";
import { ADHDBrainDiagram } from "@/components/adhd/ADHDBrainDiagram";
import { BrainComparison } from "@/components/adhd/BrainComparison";

// "What you might call it / What it actually is" — real adult ADHD experiences
// that most people quietly chalk up to personal failings.
const reframedSymptoms = [
  {
    label: "&ldquo;I&apos;m so lazy.&rdquo;",
    name: "Task Initiation Paralysis",
    text: "You want to start. You know exactly how to start. You can&apos;t make yourself start. Your brain treats &ldquo;activation energy&rdquo; like a wall, especially for boring or low-stimulation tasks. It&apos;s not a willpower issue, it&apos;s an executive function one.",
  },
  {
    label: "&ldquo;I&apos;m a slob.&rdquo;",
    name: "The Doom Pile",
    text: "Mail on the counter. Clothes on the chair. The bag you haven&apos;t unpacked in days. ADHD brains struggle with the micro-decisions of putting things &ldquo;away&rdquo;, so they pile in plain sight. It&apos;s not messiness, it&apos;s decision overload.",
  },
  {
    label: "&ldquo;I have no sense of time.&rdquo;",
    name: "Time Blindness",
    text: "Five minutes and forty minutes can feel identical from the inside. You routinely underestimate, get hyperfocused, lose hours, and run late even when you tried very hard not to. The brain&apos;s internal clock is genuinely different in ADHD.",
  },
  {
    label: "&ldquo;I&apos;m so forgetful.&rdquo;",
    name: "Working Memory Glitches",
    text: "Walking into a room and immediately forgetting why. Losing your train of thought mid sentence. Reading a paragraph and remembering none of it. Working memory is one of the most consistently affected areas in adult ADHD.",
  },
  {
    label: "&ldquo;I&apos;m flaky.&rdquo;",
    name: "Object Permanence Issues",
    text: "Out of sight really is out of mind. Friends you adore can vanish for weeks. The leftovers in the fridge no longer exist once the door closes. It&apos;s not that you don&apos;t care, it&apos;s that your brain doesn&apos;t hold onto things that aren&apos;t in front of you.",
  },
  {
    label: "&ldquo;I&apos;m too sensitive.&rdquo;",
    name: "Rejection Sensitive Dysphoria",
    text: "A mildly off text. A look from your boss. A friend taking longer than usual to reply. Your nervous system reads it as catastrophic, you replay it for hours. RSD is one of the most under recognised ADHD experiences in adults.",
  },
  {
    label: "&ldquo;I work best under pressure.&rdquo;",
    name: "Interest-Based Nervous System",
    text: "Translation: you can really only get going when something is interesting, novel, urgent, or challenging. Without one of those four, your brain just doesn&apos;t produce enough dopamine to start. It&apos;s not a quirk, it&apos;s wiring.",
  },
  {
    label: "&ldquo;I&apos;m a procrastinator.&rdquo;",
    name: "The Wall of Awful",
    text: "Calling the dentist. Replying to that email. A two minute task that&apos;s been on your list for three months. It&apos;s not that the task is big, it&apos;s that emotional residue (avoidance, shame, overwhelm) has built a wall around it.",
  },
  {
    label: "&ldquo;I can&apos;t sleep, I just keep scrolling.&rdquo;",
    name: "Revenge Bedtime Procrastination",
    text: "The day didn&apos;t feel like yours, so you stay up to claim some of it back. Common in adults with ADHD because of dopamine seeking, time blindness at night, and a quietly tired nervous system trying to feel a little freedom.",
  },
  {
    label: "&ldquo;I get overwhelmed in stores.&rdquo;",
    name: "Sensory Overwhelm",
    text: "Lights, sounds, crowds, fluorescent tubes, music in shops, the smell aisle of a supermarket. Many adults with ADHD have a lower threshold for sensory input, and it&apos;s exhausting. The need to leave isn&apos;t dramatic, it&apos;s neurological.",
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
                You&apos;ve spent a lifetime translating yourself for everyone else. Here, you don&apos;t have to. This is built for your brain, not against it, with real support for the parts no one else sees.
              </p>
              <Button href="/contact" size="lg">
                Book a Free Discovery Call <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms — reframed */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Reality"
            title="The Things You Thought Were Just &ldquo;You&rdquo;"
            subtitle="Most adults with ADHD spend years quietly diagnosing themselves with personality flaws. Here are some of the most common experiences, with the actual neurological names they go by."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {reframedSymptoms.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="bg-warm-bg rounded-2xl border border-secondary/25 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                  {/* Left: what you thought it was */}
                  <div className="bg-dark/5 px-5 py-5 md:py-6 md:px-6 flex items-center border-b md:border-b-0 md:border-r border-secondary/20">
                    <div>
                      <p className="text-[10.5px] font-bold tracking-wider uppercase text-dark-light/70 mb-1">
                        What you thought it was
                      </p>
                      <p
                        className="font-display text-lg sm:text-xl text-dark italic leading-snug"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    </div>
                  </div>
                  {/* Right: what it actually is */}
                  <div className="px-5 py-5 md:py-6 md:px-6">
                    <p className="text-[10.5px] font-bold tracking-wider uppercase text-accent mb-1">
                      What it actually is
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-dark mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p
                      className="text-dark-light leading-relaxed text-[14.5px]"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
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

      {/* Brain Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Through the Lens of Science"
            title="Two Brains, Side by Side."
            subtitle="A neurotypical brain and an ADHD brain are doing genuinely different things on the inside. Here's what changes, and why so much of your daily experience makes more sense once you see it."
          />
          <BrainComparison />
        </div>
      </section>

      {/* Interactive Brain Diagram */}
      <section className="py-20 lg:py-28 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Go Deeper"
            title="Your ADHD Brain, Explored"
            subtitle="Click any region below to read what leading neuroscientists have found."
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
