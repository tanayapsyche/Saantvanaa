"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Target, Heart, Shield, GraduationCap } from "lucide-react";
import { LeafDecoration, DotsPattern } from "@/components/ui/Decorations";
import { ExpandableParagraph } from "@/components/ui/ExpandableParagraph";

const researchItems = [
  {
    stat: "59–66",
    unit: "days",
    headline: "The real time it takes to form a habit",
    intro: "The popular \"21 days\" myth is wrong.",
    rest: "Habit formation takes an average of 59 to 66 days, and sometimes up to 254 days, depending on the behaviour. That's why bi weekly tracking for months actually matters, and why willpower alone burns out.",
    citation: "Lally et al. (2010), European Journal of Social Psychology",
    href: "https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674",
  },
  {
    stat: "2 in 3",
    unit: "clients",
    headline: "Coaching works, measurably",
    intro: "Across 39 randomised controlled trials, roughly two in three people who received coaching showed better outcomes.",
    rest: "Better outcomes on behaviour change, wellbeing, and performance than those who didn't. Support isn't a nice to have, it's what tips the odds.",
    citation: "Theeboom et al., Journal of Positive Psychology",
    href: "https://www.tandfonline.com/doi/abs/10.1080/17439760.2013.837499",
  },
  {
    stat: "23",
    unit: "techniques",
    headline: "Goal setting + problem solving lead the way",
    intro: "Across health coaching RCTs, researchers identified 23 distinct behaviour change techniques.",
    rest: "Goal setting and problem solving, the two most frequently used, are the exact backbone of our sessions.",
    citation: "Behaviour Change Techniques in Health Coaching (PMC9837922)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9837922/",
  },
  {
    stat: "CBT",
    unit: "evidence base",
    headline: "Therapeutic support has decades of data",
    intro: "Cognitive and behaviour based therapeutic approaches have among the strongest meta analytic support in mental health.",
    rest: "For depression, anxiety, and behaviour change. Combining this with habit coaching addresses both the action and the emotion.",
    citation: "Hofmann et al., Efficacy of CBT meta-review (PMC3584580)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3584580/",
  },
];

const values = [
  {
    icon: Target,
    title: "Evidence Based",
    text: "Every approach we use is rooted in psychological research and proven methodologies like Atomic Habits, mindfulness, and the works of Joe Hudson.",
  },
  {
    icon: Heart,
    title: "Compassionate",
    text: "Change is hard. We meet you where you are, not where we think you should be. No judgment, no pressure, just genuine support.",
  },
  {
    icon: Shield,
    title: "Confidential & Safe",
    text: "Everything shared stays between us. This is a safe space where you can be completely honest about your struggles.",
  },
  {
    icon: GraduationCap,
    title: "Qualified",
    text: "Not a life coach or influencer but a trained psychologist with real experience and the expertise to address deeper patterns.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-gradient-to-br from-light to-secondary-light/20 relative overflow-hidden">
        <DotsPattern className="absolute top-10 left-10 w-32 h-32 text-accent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
                About
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-dark leading-tight mb-2">
                Hello, I&apos;m{" "}
                <span className="text-accent">Tanaya.</span>
              </h1>
              <p className="text-[12px] sm:text-sm font-semibold tracking-wide text-accent/90 mb-6">
                An Educational Psychologist · A Neurodivergent Psychotherapist · Your Behaviour Change Coach
              </p>
              <p className="text-base sm:text-lg text-dark-light leading-relaxed mb-4">
                Whatever quietly brought you here—curiosity, a desire for change, feeling stuck, or simply the feeling that life could be a little more balanced—I&apos;m glad you came.
              </p>
              <ExpandableParagraph
                intro="Saantwanaa was born from a realization I had while working with people from diverse backgrounds."
                rest="Many weren't struggling with a diagnosis or a major crisis. They simply wanted to feel happier, more aligned with themselves, and more intentional about the way they were living. They wanted support in building healthier habits, navigating life's demands, understanding themselves better, and creating a sense of balance across the parts of life that mattered most to them."
              />
              <p className="text-base sm:text-lg text-dark-light leading-relaxed mb-4">
                These experiences strengthened my belief that you don&apos;t need a diagnosis to deserve care, and you don&apos;t need a crisis to begin exploring yourself.
              </p>
              <p className="text-base sm:text-lg text-dark-light leading-relaxed mb-4">
                That&apos;s what Saantwanaa is here for. My role isn&apos;t to fix you, because I don&apos;t believe you&apos;re broken. It&apos;s to walk alongside you as you discover what works for you and create meaningful, sustainable changes that help you feel more like yourself.
              </p>
              <p className="text-base sm:text-lg text-dark-light leading-relaxed mb-8">
                If that resonates with you, let&apos;s start with a conversation.
              </p>

              <Button href="/contact#contact-details">Book a Free Discovery Call</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <LeafDecoration className="absolute -top-6 -right-6 w-20 h-20 text-accent opacity-40 z-10" />
              {/* Tanaya's portrait */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/tanaya.jpg"
                  alt="Tanaya, Educational Psychologist and founder of Saantwanaa"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Philosophy"
            title="Why Lifestyle Management?"
            subtitle="Most people don't fail at habits because they lack information. They fail because they lack support, the right kind of support."
          />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-dark-light leading-relaxed space-y-5"
            >
              <ExpandableParagraph
                intro="Every week, people download habit trackers, buy planners, and make promises to themselves."
                rest="By week three, most have abandoned the plan. Not because they're weak, but because nobody addressed why the old patterns existed in the first place."
              />
              <ExpandableParagraph
                intro="Lifestyle Management bridges this gap."
                rest="It pairs the structure of habit coaching (planning, tracking, accountability) with the depth of emotional wellness support (understanding resistance, building resilience, processing the discomfort of change)."
              />
              <p>
                This is especially critical for people with ADHD, where the challenge isn&apos;t
                knowing what to do; it&apos;s getting your brain to cooperate when it matters most.
              </p>
            </motion.div>
          </div>

          {/* Research Evidence Grid */}
          <div className="mt-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                The Research Backs This
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark">
                Why this approach actually works
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-accent-dark rounded-2xl p-6 border border-accent-dark shadow-md"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-serif text-3xl font-bold text-white">{item.stat}</span>
                    <span className="text-sm text-white/80 font-medium">{item.unit}</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.headline}</h4>
                  <ExpandableParagraph
                    intro={item.intro}
                    rest={item.rest}
                    className="!mb-3 !text-sm !text-white/85"
                  />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-secondary hover:text-white underline underline-offset-2 decoration-secondary/40 hover:decoration-white leading-snug transition-colors"
                  >
                    {item.citation}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 lg:py-28 bg-light relative overflow-hidden">
        <LeafDecoration className="absolute bottom-10 right-10 w-24 h-24 text-accent opacity-20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Values"
            title="What I Stand For"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <item.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                  <p className="text-dark-light text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
