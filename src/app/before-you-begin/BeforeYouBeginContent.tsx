"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BEFORE_YOU_BEGIN_CONCERNS } from "@/lib/constants";
import { LeafDecoration, DotsPattern } from "@/components/ui/Decorations";

export function BeforeYouBeginContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero — Morning Nook aesthetic */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/journaling.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light/92 via-light/65 to-light/25" />
        </div>

        <LeafDecoration className="absolute top-10 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
        <DotsPattern className="absolute bottom-12 right-1/3 w-28 h-28 text-accent opacity-30 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                Before You Begin
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1]">
                The Honest Answers to What You&apos;re Probably Wondering
              </h1>
              <p className="mt-6 text-lg text-dark-light leading-relaxed max-w-xl">
                Starting something new, especially something that asks you to look inward, brings up real worries. Here are the questions people most often hesitate to ask, answered without sugar coating.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worries / Q&A */}
      <section className="py-20 lg:py-28 bg-warm-bg relative overflow-hidden">
        <DotsPattern className="absolute top-20 right-10 w-32 h-32 text-accent opacity-35 hidden lg:block" />
        <LeafDecoration className="absolute bottom-20 left-0 w-28 h-28 text-accent opacity-15 hidden lg:block" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {BEFORE_YOU_BEGIN_CONCERNS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`bg-white rounded-2xl overflow-hidden border-2 transition-colors ${
                    isOpen ? "border-accent/40 shadow-md" : "border-secondary/25 hover:border-accent/25"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-accent text-white" : "bg-accent/10 text-accent"
                      }`}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <span className="flex-1 font-serif text-lg font-bold text-dark">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-accent flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pl-20 text-dark-light leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA on white with warm accent */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <LeafDecoration className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 text-accent opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="font-serif text-xl sm:text-2xl text-dark leading-relaxed italic mb-8">
            &ldquo;If something else is on your mind, bring it to the free discovery call. There&apos;s no question too small or too personal to ask.&rdquo;
          </p>
          <Button href="/contact" size="lg">
            Book a Free Discovery Call <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
