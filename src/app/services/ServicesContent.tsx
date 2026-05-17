"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROCESS_STEPS, PRICING_TIERS } from "@/lib/constants";
import {
  Check,
  ArrowRight,
  Calendar,
  Clock,
  Video,
  MessageSquare,
  Handshake,
  Map as MapIcon,
  CalendarCheck,
  HeartHandshake,
  NotebookPen,
} from "lucide-react";
import {
  LeafDecoration,
  DotsPattern,
  GentleArc,
  BranchDecoration,
  SunburstDecoration,
  FlowerInVase,
  Sprig,
} from "@/components/ui/Decorations";

const weekSchedule = [
  {
    icon: Video,
    label: "2 tracking sessions per week",
    detail:
      "30 minute video calls where we review your progress, troubleshoot what's not working, and adjust your plan together. Think of it as a regular pit stop, not a performance review.",
  },
  {
    icon: MessageSquare,
    label: "Support between sessions",
    detail:
      "Life doesn't wait for scheduled meetings. Reach out via WhatsApp or email whenever you're stuck, confused, or just need a quick nudge to stay on track.",
  },
  {
    icon: Calendar,
    label: "Monthly reflection session",
    detail:
      "Once a month, we sit down and look at the bigger picture: where you started, how far you've come, what's still challenging, and what the next month should focus on.",
  },
  {
    icon: Clock,
    label: "Emotional wellness support",
    detail:
      "Scheduled whenever emotional challenges arise during your transition. Not every member needs this every week, but it's there when old patterns, guilt, or resistance show up.",
  },
];

const stepIcons = [Handshake, MapIcon, CalendarCheck, HeartHandshake, NotebookPen];

export function ServicesContent() {
  return (
    <>
      {/* Hero — Morning Nook aesthetic */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/morning-nook.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light/88 via-light/60 to-light/20" />
        </div>

        <LeafDecoration className="absolute top-16 left-8 w-24 h-24 text-accent opacity-30 hidden md:block" />
        <LeafDecoration className="absolute bottom-10 right-16 w-24 h-24 text-accent opacity-25 hidden md:block rotate-180" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                Services
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-[1.1]">
                Not another programme.{" "}
                <span className="text-accent">Yours.</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-dark-light leading-relaxed">
                You&apos;ve already tried the one size fits all method. It didn&apos;t fit. This is built around your routine, your patterns, your real life, with someone walking beside you the whole way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Process Timeline */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <LeafDecoration className="absolute top-24 right-0 w-24 h-24 text-accent opacity-15 hidden lg:block" />
        <BranchDecoration className="absolute -left-10 bottom-10 w-24 h-56 text-accent opacity-12 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Process"
            title="How We Work Together"
            subtitle="Five deliberate steps. Not a rigid programme, but a clear direction for the journey."
          />

          <div className="max-w-4xl mx-auto mt-16">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = stepIcons[i];
              const isLast = i === PROCESS_STEPS.length - 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
                >
                  {/* Left column: number + vertical line */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <span className="font-display text-5xl sm:text-6xl font-bold text-accent/20 leading-none">
                        {step.number}
                      </span>
                    </div>
                    {!isLast && (
                      <div className="flex-1 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/10 mt-3 min-h-[60px]" />
                    )}
                  </div>

                  {/* Right column: content */}
                  <div className={`pb-14 ${isLast ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-accent" strokeWidth={2} />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-dark-light leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Typical Week */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-bg to-light relative overflow-hidden">
        <DotsPattern className="absolute bottom-10 right-10 w-36 h-36 text-accent hidden lg:block" />
        <LeafDecoration className="absolute top-10 left-10 w-24 h-24 text-accent opacity-25 hidden lg:block" />
        <GentleArc className="absolute top-0 left-0 w-full h-20 text-accent opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What to Expect"
            title="A Typical Week With Us"
            subtitle="Here's what ongoing support actually looks like once you're in the programme."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {weekSchedule.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border-2 border-secondary/20 hover:border-accent/35 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.label}</h3>
                <p className="text-dark-light text-[15px] leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <SunburstDecoration className="absolute -top-20 -right-20 w-[400px] h-[400px] text-accent opacity-15" />
        <BranchDecoration className="absolute -right-8 bottom-20 w-24 h-56 text-accent opacity-15 hidden lg:block rotate-180" />
        <FlowerInVase className="absolute top-20 left-4 w-20 h-32 text-accent opacity-20 hidden lg:block" />
        <Sprig className="absolute bottom-20 right-10 w-20 h-32 text-accent opacity-20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Pricing"
            title="Choose Your Plan"
            subtitle="Three plans, each built for a different stage of your journey. All run in monthly cycles with no lock in contracts. The goal is to make you self reliant enough that you eventually won't need us at all."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 border-2 relative flex flex-col ${
                  tier.highlighted
                    ? "border-accent bg-accent/5 shadow-xl scale-[1.02]"
                    : "border-secondary/25 bg-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-dark">{tier.name}</h3>
                  <p className="text-sm text-accent font-semibold mt-1">{tier.subtitle}</p>

                  {/* Dual currency pricing */}
                  <div className="mt-5">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-4xl font-bold text-dark">{tier.priceUSD}</span>
                      <span className="text-dark-light text-sm">{tier.period}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-center gap-1 text-dark-light">
                      <span className="text-sm">or</span>
                      <span className="text-lg font-semibold text-dark">{tier.priceINR}</span>
                      <span className="text-xs">{tier.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-dark-light mt-4 italic">{tier.description}</p>
                </div>

                {/* Best for */}
                <div className="bg-accent/8 rounded-xl p-4 mb-6 border border-secondary/20">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Best for you if</p>
                  <p className="text-sm text-dark-light leading-relaxed">{tier.bestFor}</p>
                </div>

                {/* What's included */}
                <div className="flex-1 mb-6">
                  <p className="text-xs font-bold text-dark uppercase tracking-wider mb-3">What&apos;s included</p>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                          <Check size={10} className="text-accent stroke-[3]" />
                        </div>
                        <span className="text-sm text-dark-light leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-dark-light mt-10 max-w-xl mx-auto">
            Still unsure which plan fits you? Start with a{" "}
            <a href="/contact" className="text-accent font-semibold hover:underline">
              free discovery call
            </a>{" "}
            and we&apos;ll figure it out together, no pressure.
          </p>
        </div>
      </section>
    </>
  );
}
