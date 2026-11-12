"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Pencil, RotateCcw, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Sprig, LeafDecoration } from "@/components/ui/Decorations";
import {
  SELF_CHECKIN_AREAS,
  SELF_CHECKIN_RESULT_BANDS,
  SELF_CHECKIN_STATEMENTS,
  type SelfCheckInArea,
} from "@/lib/constants";

const TOTAL = SELF_CHECKIN_STATEMENTS.length;

// Answers live only in component state: nothing is stored or sent anywhere.
export function SelfReflection() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);

  const count = selected.size;
  const score = count; // every selected statement counts for exactly one point

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const reveal = (show: boolean) => setShowResults(show);

  // Scroll once the outgoing view has finished animating, so the new view starts at the top of the section
  const handleViewChange = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (showResults) resultsHeadingRef.current?.focus({ preventScroll: true });
  };

  const restart = () => {
    setSelected(new Set());
    reveal(false);
  };

  const band = SELF_CHECKIN_RESULT_BANDS.find((b) => score <= b.max)!;

  const areaCounts = (Object.keys(SELF_CHECKIN_AREAS) as SelfCheckInArea[])
    .map((key) => ({
      key,
      ...SELF_CHECKIN_AREAS[key],
      selected: SELF_CHECKIN_STATEMENTS.filter((s) => s.area === key && selected.has(s.id)),
      total: SELF_CHECKIN_STATEMENTS.filter((s) => s.area === key).length,
    }))
    .filter((a) => a.selected.length > 0)
    .sort((a, b) => b.selected.length / b.total - a.selected.length / a.total);

  return (
    <section ref={sectionRef} id="self-check-in" className="py-14 sm:py-20 lg:py-28 bg-warm-bg relative overflow-hidden scroll-mt-20">
      <Sprig className="absolute bottom-10 left-4 w-20 h-32 text-accent opacity-20 hidden lg:block" />
      <LeafDecoration className="absolute top-10 right-6 w-24 h-24 text-accent opacity-20 hidden lg:block" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait" initial={false} onExitComplete={handleViewChange}>
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <SectionHeading
                label="Self Check-In"
                title="A quick moment of reflection"
                subtitle="Tick any statement that sounds like you. There are no right or wrong answers, and this isn't a test. It's just a gentle way to notice what's on your mind."
              />

              <p className="flex items-center justify-center gap-2 text-sm text-dark-light mb-6 -mt-6">
                <ShieldCheck size={16} className="text-green" aria-hidden />
                Your answers stay on this device. We don&apos;t save or send them.
              </p>

              <fieldset>
                <legend className="sr-only">Statements that might resonate with you</legend>
                <div className="grid gap-3">
                  {SELF_CHECKIN_STATEMENTS.map((item) => {
                    const checked = selected.has(item.id);
                    return (
                      <label
                        key={item.id}
                        className={`group flex items-start gap-4 rounded-2xl border-2 p-4 sm:p-5 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-warm-bg ${
                          checked
                            ? "bg-accent-dark border-accent-dark text-white"
                            : "bg-white border-secondary/40 text-dark hover:border-accent"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggle(item.id)}
                        />
                        <span
                          aria-hidden
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            checked ? "bg-secondary border-secondary text-accent-dark" : "border-accent-dark bg-white"
                          }`}
                        >
                          {checked && <Check size={14} strokeWidth={3} />}
                        </span>
                        <span className="text-base sm:text-[17px] leading-snug">{item.text}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="sticky bottom-3 z-10 mt-8 rounded-2xl bg-accent-dark p-4 shadow-xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex-1" role="status" aria-live="polite">
                  <p className="text-sm font-semibold text-light">
                    {count} of {TOTAL} selected
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-light/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-secondary transition-all duration-300"
                      style={{ width: `${(count / TOTAL) * 100}%` }}
                    />
                  </div>
                </div>
                <Button variant="secondary" onClick={() => reveal(true)} className="w-full sm:w-auto">
                  See My Results <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              {count === 0 && (
                <p className="text-center text-xs text-dark-light mt-3">
                  Nothing resonating? You can still see your results.
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-3xl bg-accent-dark text-light p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <LeafDecoration className="absolute -top-4 -right-4 w-28 h-28 text-secondary opacity-30" />

                <p className="text-sm font-semibold tracking-wider uppercase text-secondary">Your reflection</p>
                <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-secondary bg-accent">
                    <span className="font-display text-3xl font-bold leading-none">{score}</span>
                    <span className="text-xs text-light/80 mt-1">of {TOTAL}</span>
                  </div>
                  <div>
                    <h3
                      ref={resultsHeadingRef}
                      tabIndex={-1}
                      className="font-display text-2xl sm:text-3xl font-bold leading-tight outline-none"
                    >
                      {band.title}
                    </h3>
                    <p className="mt-1 text-sm text-light/80">
                      You selected {count} {count === 1 ? "statement" : "statements"}.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-light/90">{band.text}</p>

                {areaCounts.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-display text-xl font-bold text-secondary">Where you may be feeling it most</h4>
                    <ul className="mt-4 space-y-4">
                      {areaCounts.map((a) => (
                        <li key={a.key} className="rounded-2xl bg-accent p-4 sm:p-5">
                          <p className="font-semibold text-light">
                            {a.name}{" "}
                            <span className="font-normal text-light/75 text-sm">
                              · {a.selected.length} of {a.total}
                            </span>
                          </p>
                          <p className="mt-1 text-sm sm:text-base text-light/85 leading-relaxed">{a.reflection}</p>
                          <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">
                            <span className="font-semibold">How we can help: </span>
                            {a.support}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 rounded-2xl bg-warm-white p-5 sm:p-6 text-dark">
                  <h4 className="font-display text-xl font-bold text-dark">
                    How Santwanaa could support you
                  </h4>
                  <p className="mt-2 text-dark-light leading-relaxed">
                    Santwanaa pairs personal habit coaching with emotional wellness support, led by a qualified
                    psychologist. We build a routine around your real life and check in with you regularly, without
                    judgement. If you&apos;re curious whether it&apos;s a fit, a free, no-pressure discovery call is the
                    easiest way to find out.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Button href="/contact#contact-details" className="w-full sm:w-auto !rounded-2xl text-center">
                      Book a Free Discovery Call <ArrowRight size={18} className="ml-2 shrink-0" />
                    </Button>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
                  <button
                    type="button"
                    onClick={() => reveal(false)}
                    className="inline-flex items-center gap-2 text-secondary hover:text-light font-semibold py-2"
                  >
                    <Pencil size={14} /> Change my answers
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-2 text-secondary hover:text-light font-semibold py-2"
                  >
                    <RotateCcw size={14} /> Start over
                  </button>
                </div>

                <p className="mt-6 text-xs text-light/70 leading-relaxed">
                  This is a short self-reflection activity, not an assessment or diagnosis, and it can&apos;t tell you
                  what you are or aren&apos;t experiencing. Your answers aren&apos;t saved or shared.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
