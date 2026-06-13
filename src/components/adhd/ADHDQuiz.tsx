"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Based on themes from WHO ASRS v1.1, DIVA-5, and Conners Adult ADHD Rating Scales.
// Reworded for warmth and relatability. NOT a diagnostic tool.
const QUIZ_QUESTIONS = [
  // Inattention domain (ASRS / DIVA-5 aligned)
  "I struggle to keep my attention on tasks that feel repetitive or unstimulating, even when they're important",
  "I make careless mistakes on projects, not because I don't care, but because my focus drifts without me noticing",
  "Organising my daily life feels harder than it should. I constantly forget appointments, lose track of tasks, or feel like things are slipping through the cracks",
  "I lose or misplace things I need regularly: keys, wallet, phone, documents. It happens so often it's become part of my routine",
  "I avoid or delay starting tasks that require sustained mental effort, even when I genuinely want to do them",
  "My mind wanders when people are speaking to me directly, and I have to ask them to repeat themselves",
  // Hyperactivity / Impulsivity domain (ASRS / CAARS aligned)
  "I feel internally restless even when I appear calm on the outside. There's always a motor running somewhere in my head",
  "I find myself talking more than I intend in conversations, or interrupting before others finish speaking",
  "I often feel driven to keep moving or doing something, and sitting still for extended periods feels genuinely uncomfortable",
  // Executive function / Emotional regulation (CAARS / DIVA-5 aligned)
  "I have difficulty unwinding or relaxing, even when I have free time. My brain doesn't seem to have an off switch",
  "My emotional reactions often feel bigger than the situation calls for: frustration, excitement, or sadness hits harder than expected",
  "I consistently struggle to manage time. I misjudge how long things will take, run late, or realise hours have passed when I thought it was minutes",
  "Simple decisions like what to eat or what to do next can feel genuinely paralysing",
  "I start many projects with genuine enthusiasm but struggle to follow through to completion",
  "I often feel like I'm working twice as hard as everyone around me just to keep up with what seems to come naturally to them",
];

function getResult(count: number) {
  const total = QUIZ_QUESTIONS.length;
  const pct = (count / total) * 100;

  if (pct >= 70) {
    return {
      title: "A lot of this feels like your daily reality",
      emoji: "🫂",
      message:
        "You related to many of these experiences. What you're feeling is real, it has a name, and you are not alone in it. These patterns are well documented in ADHD research, and the right kind of support can make a genuine difference. You don't have to keep pushing through on your own.",
      showCta: true,
    };
  } else if (pct >= 40) {
    return {
      title: "Quite a few of these sound familiar",
      emoji: "🌱",
      message:
        "Several of these experiences resonate with you. Whether or not you have a formal diagnosis, these challenges are real and they can be exhausting. Many of them respond well to the right kind of structured support and lifestyle adjustments.",
      showCta: true,
    };
  } else if (pct >= 20) {
    return {
      title: "A few things resonate",
      emoji: "✨",
      message:
        "You relate to some of these, which is completely normal. Everyone has days like this. If any of these patterns are making your life harder than it should be, support is always available.",
      showCta: false,
    };
  } else {
    return {
      title: "Mostly not your experience",
      emoji: "🌿",
      message:
        "These particular experiences don't seem to be a major part of your life, which is great. If you're still curious about lifestyle management for other reasons, our other programs might be a better fit for you.",
      showCta: false,
    };
  }
}

export function ADHDQuiz() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = (i: number) => {
    const s = new Set(selected);
    s.has(i) ? s.delete(i) : s.add(i);
    setSelected(s);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("quiz-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const result = submitted ? getResult(selected.size) : null;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-secondary/25 shadow-sm">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Relatability Check
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-dark mb-3 leading-tight">
            Does This Sound Like You?
          </h3>
          <p className="text-dark-light leading-relaxed max-w-xl mx-auto text-[15px]">
            A little just for fun self relatability checklist. Tick the ones that feel true for you and see how much resonates. Not a diagnosis, just a chance to feel a little more seen.
          </p>
        </div>

        <div className="space-y-3">
          {QUIZ_QUESTIONS.map((q, i) => {
            const on = selected.has(i);
            return (
              <button
                key={i}
                onClick={() => toggleAnswer(i)}
                disabled={submitted}
                className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all ${
                  on ? "bg-accent/8 border-2 border-accent" : "bg-warm-bg border-2 border-secondary/15 hover:border-secondary/40"
                } ${submitted ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5 transition-all ${
                  on ? "bg-accent" : "bg-white border-2 border-secondary/40"
                }`}>
                  {on && <Check size={14} className="text-white stroke-[3]" />}
                </div>
                <span className={`text-[15px] leading-relaxed ${on ? "text-dark font-medium" : "text-dark-light"}`}>
                  {q}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          {!submitted ? (
            <>
              <button
                onClick={handleSubmit}
                disabled={selected.size === 0}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                See My Reflection ({selected.size} selected)
              </button>
              {selected.size > 0 && (
                <button onClick={() => { setSelected(new Set()); }} className="text-sm text-dark-light hover:text-accent transition-colors">
                  Start over
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => { setSelected(new Set()); setSubmitted(false); }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent/30 text-accent font-semibold rounded-full hover:bg-accent/5 transition-colors"
            >
              <RotateCcw size={16} /> Take it again
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {submitted && result && (
          <motion.div
            id="quiz-result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gradient-to-br from-secondary-light/40 to-warm-bg rounded-3xl p-8 sm:p-10 border border-secondary/30"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">{result.emoji}</div>
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                {selected.size} out of {QUIZ_QUESTIONS.length}
              </p>
              <h3 className="font-display text-3xl font-bold text-dark mb-4 leading-tight">
                {result.title}
              </h3>
              <p className="text-dark-light leading-relaxed max-w-xl mx-auto mb-8">
                {result.message}
              </p>
              {result.showCta && (
                <div className="mb-2">
                  <Button href="/contact#contact-details" size="lg">Let&apos;s Talk About It</Button>
                </div>
              )}
              <p className="text-xs text-dark-light/60 mt-4 max-w-md mx-auto italic">
                This is a self reflection exercise based on themes from validated screening frameworks.
                It is not a diagnosis.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
