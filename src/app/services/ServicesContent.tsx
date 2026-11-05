"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROCESS_STEPS, PRICING_TIERS } from "@/lib/constants";
import { ExpandableParagraph } from "@/components/ui/ExpandableParagraph";
import { SelfReflection } from "@/components/services/SelfReflection";
import {
  Check,
  ArrowRight,
  Handshake,
  Map as MapIcon,
  CalendarCheck,
  HeartHandshake,
  NotebookPen,
  Sparkles,
  Star,
  MessageCircleHeart,
} from "lucide-react";

function splitDesc(text: string): { intro: string; rest: string } {
  const idx = text.indexOf(". ");
  if (idx === -1) return { intro: text, rest: "" };
  return { intro: text.slice(0, idx + 1), rest: text.slice(idx + 2) };
}
import {
  LeafDecoration,
  BranchDecoration,
  SunburstDecoration,
  FlowerInVase,
  Sprig,
} from "@/components/ui/Decorations";

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

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40">
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
              <p className="mt-6 text-base sm:text-xl text-dark-light leading-relaxed">
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
                    {(() => {
                      const { intro, rest } = splitDesc(step.description);
                      return (
                        <ExpandableParagraph
                          intro={intro}
                          rest={rest}
                          className="!mb-0 max-w-2xl"
                        />
                      );
                    })()}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SelfReflection />

      {/* Pricing */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        <SunburstDecoration className="absolute -top-20 -right-20 w-[400px] h-[400px] text-accent opacity-15" />
        <BranchDecoration className="absolute -right-8 bottom-20 w-24 h-56 text-accent opacity-15 hidden lg:block rotate-180" />
        <FlowerInVase className="absolute top-20 left-4 w-20 h-32 text-accent opacity-20 hidden lg:block" />
        <Sprig className="absolute bottom-20 right-10 w-20 h-32 text-accent opacity-20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Pricing"
            title="Choose Your Plan"
            subtitle="Two plans, each built for a different stage of your journey. All run in monthly cycles with no lock in contracts. The goal is to make you self reliant enough that you eventually won't need us at all."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 bg-accent text-white text-xs font-bold tracking-wide uppercase rounded-full shadow-md whitespace-nowrap">
                    <Star size={12} className="fill-white" /> Most popular
                  </span>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-dark">{tier.name}</h3>
                  <p className="text-sm text-accent font-semibold mt-1">{tier.subtitle}</p>

                  {/* Dual currency pricing */}
                  <div className="mt-5">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-4xl font-bold text-dark">{tier.priceINR}</span>
                      <span className="text-dark-light text-sm">{tier.period}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-center gap-1 text-dark-light">
                      <span className="text-sm">or</span>
                      <span className="text-lg font-semibold text-dark">{tier.priceUSD}</span>
                      <span className="text-xs">{tier.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-dark-light mt-4 italic md:min-h-[2.5rem]">{tier.description}</p>
                </div>

                {/* Best for */}
                <div className="bg-accent/8 rounded-xl p-4 mb-6 border border-secondary/20 md:min-h-[9rem]">
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

                  {tier.addon && (
                    <div className="mt-5 pt-5 border-t border-dashed border-accent/25">
                      <div className="flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                          <Sparkles size={12} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-dark mb-1 leading-snug">
                            {tier.addon.title}
                          </p>
                          <p className="text-[12.5px] text-dark-light leading-relaxed">
                            {tier.addon.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  href="/contact#contact-details"
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-warm-bg border border-accent/25 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <MessageCircleHeart size={24} className="text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold text-dark">Just need to talk?</h3>
              <p className="text-dark-light text-sm sm:text-base mt-1">
                Not ready for a month-long plan? Book a single therapy session for a vent, a first taste of therapy, or ongoing support at your own pace.
              </p>
            </div>
            <Button href="/therapy" variant="outline">
              Book a session <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>

          <p className="text-center text-base sm:text-lg text-dark-light mt-12 max-w-2xl mx-auto">
            Still unsure which plan fits you? Start with a{" "}
            <a href="/contact#contact-details" className="text-accent font-semibold hover:underline">
              free discovery call
            </a>{" "}
            and we&apos;ll figure it out together, no pressure.
          </p>
        </div>
      </section>
    </>
  );
}
