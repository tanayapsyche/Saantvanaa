"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BEFORE_YOU_BEGIN_CONCERNS, FAQ_ITEMS, FAQ_CATEGORIES } from "@/lib/constants";
import { LeafDecoration, DotsPattern } from "@/components/ui/Decorations";

export function BeforeYouBeginContent() {
  const [category, setCategory] = useState<string>(FAQ_CATEGORIES[0].id);
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const questions = useMemo(
    () => [...BEFORE_YOU_BEGIN_CONCERNS, ...FAQ_ITEMS] as { question: string; answer: string }[],
    []
  );
  const tabs = FAQ_CATEGORIES;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) {
      return questions.filter(
        (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
      );
    }
    const current = FAQ_CATEGORIES.find((c) => c.id === category);
    const order: readonly string[] = current ? current.questions : [];
    return order
      .map((text) => questions.find((item) => item.question === text))
      .filter((item): item is { question: string; answer: string } => Boolean(item));
  }, [query, category, questions]);

  return (
    <>
      {/* Hero — Morning Nook aesthetic */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/autumn-window.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light/92 via-light/65 to-light/25" />
        </div>

        <LeafDecoration className="absolute top-10 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
        <DotsPattern className="absolute bottom-12 right-1/3 w-28 h-28 text-accent opacity-30 hidden lg:block" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                Before You Begin
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1]">
                The questions you&apos;re afraid to ask, answered honestly.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-dark-light leading-relaxed max-w-xl">
                Before you commit to anything, here&apos;s space to address the worries that usually go unspoken. The &ldquo;what if I&apos;m not ready&rdquo; ones. The &ldquo;what if I quit&rdquo; ones. No sugar coating, no scripts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worries / Q&A */}
      <section className="py-14 sm:py-20 lg:py-24 bg-warm-bg relative overflow-hidden">
        <DotsPattern className="absolute top-20 right-10 w-32 h-32 text-accent opacity-35 hidden lg:block" />
        <LeafDecoration className="absolute bottom-20 left-0 w-28 h-28 text-accent opacity-15 hidden lg:block" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-light/60" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenQuestion(null);
              }}
              placeholder="Type your worry, e.g. “quit” or “therapy”"
              aria-label="Search questions"
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border-2 border-secondary/25 focus:border-accent/50 focus:outline-none text-dark placeholder:text-dark-light/50"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={category === tab.id && !query.trim()}
                onClick={() => {
                  setCategory(tab.id);
                  setQuery("");
                  setOpenQuestion(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === tab.id && !query.trim()
                    ? "bg-accent text-white"
                    : "bg-white text-dark-light border border-secondary/30 hover:border-accent/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {visible.length === 0 && (
              <p className="text-center text-dark-light py-10">
                Nothing matched that. Try another word, or bring it to the free discovery call below.
              </p>
            )}
            {visible.map((item) => {
              const isOpen = openQuestion === item.question;
              return (
                <div
                  key={item.question}
                  className={`bg-white rounded-2xl overflow-hidden border-2 transition-colors ${
                    isOpen ? "border-accent/40 shadow-md" : "border-secondary/25 hover:border-accent/25"
                  }`}
                >
                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-accent text-white" : "bg-accent/10 text-accent"
                      }`}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <span className="flex-1 font-serif text-lg font-bold text-dark">{item.question}</span>
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
                        <div className="px-5 sm:px-6 pb-6 sm:pl-20 text-dark-light leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-accent/25 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <MessageCircle size={22} className="text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-serif text-lg font-bold text-dark">Still have a question?</p>
              <p className="text-sm text-dark-light">No question is too small or too personal. Ask us directly.</p>
            </div>
            <Button href="/contact#contact-details" variant="outline" size="sm">
              Ask us
            </Button>
          </div>
        </div>
      </section>

      {/* Closing CTA on white with warm accent */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
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
          <Button href="/contact#contact-details" size="lg">
            Book a Free Discovery Call <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
