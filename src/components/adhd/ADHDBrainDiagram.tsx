"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface Region {
  id: string;
  name: string;
  // Dot position on the 600x450 SVG canvas
  cx: number;
  cy: number;
  researcher: string;
  researcherInitials: string;
  researcherTitle: string;
  finding: string;
  takeaway: string;
  citation: string;
}

const REGIONS: Region[] = [
  {
    id: "prefrontal",
    name: "Prefrontal Cortex",
    cx: 175,
    cy: 165,
    researcher: "Dr. Russell Barkley",
    researcherInitials: "RB",
    researcherTitle: "ADHD researcher, 50+ years",
    finding:
      "ADHD is fundamentally a disorder of executive function, the brain's management system. Barkley identified five executive functions: self restraint, time management, self organisation, self motivation, and emotional self regulation.",
    takeaway:
      "People with ADHD aren't less intelligent or motivated. Your brain's \"manager\" just develops on a different timeline.",
    citation: "Barkley (1997), ADHD and the Nature of Self-Control",
  },
  {
    id: "limbic",
    name: "Limbic System",
    cx: 290,
    cy: 260,
    researcher: "Dr. Russell Barkley",
    researcherInitials: "RB",
    researcherTitle: "Theory of Emotional Dysregulation",
    finding:
      "Emotional dysregulation is a core component of ADHD, not a side effect. Feelings hit harder and faster. Barkley's work shows that the ADHD brain's emotional impulsiveness is as central to the condition as attention difficulties.",
    takeaway:
      "Being \"too sensitive\" isn't a character flaw. It's neurology. Understanding this reframes emotion as a feature of how your brain processes the world.",
    citation: "Barkley (2010), Differential Diagnosis of Adults with ADHD",
  },
  {
    id: "dopamine",
    name: "Dopamine Pathway",
    cx: 240,
    cy: 200,
    researcher: "Dr. Andrew Huberman",
    researcherInitials: "AH",
    researcherTitle: "Stanford neuroscientist",
    finding:
      "ADHD brains often have different dopamine signalling. Huberman Lab research shows focused attention requires specific dopamine and acetylcholine patterns. Certain behavioural protocols, like morning sunlight, deliberate focus practice, and specific binaural beat frequencies, can support the brain's natural focus chemistry.",
    takeaway:
      "Your brain responds to the environment you build for it. Small daily protocols can meaningfully support your focus chemistry.",
    citation: "Huberman Lab Podcast, Episodes 37 & 88",
  },
  {
    id: "subtypes",
    name: "Whole Brain Subtypes",
    cx: 380,
    cy: 150,
    researcher: "Dr. Daniel Amen",
    researcherInitials: "DA",
    researcherTitle: "Psychiatrist, SPECT imaging pioneer",
    finding:
      "Through over 200,000 SPECT brain scans, Amen identified that ADHD isn't one single thing. There are 7 distinct subtypes based on brain activity patterns, from classic to anxious to over-focused ADHD.",
    takeaway:
      "What works for one person with ADHD may not work for another. Your ADHD is your own, and that's why a personalised approach actually matters.",
    citation: "Amen Clinics SPECT research; Healing ADD (2013)",
  },
  {
    id: "default-mode",
    name: "Default Mode Network",
    cx: 420,
    cy: 240,
    researcher: "Dr. Holly White",
    researcherInitials: "HW",
    researcherTitle: "Creativity researcher, University of Michigan",
    finding:
      "The ADHD brain has a less inhibited default mode network, the part of the brain active during mind wandering. White's studies show ADHD adults score significantly higher on original creative thinking and real world creative achievement than non-ADHD peers.",
    takeaway:
      "Your wandering mind isn't a bug. It's where unexpected connections and creative leaps actually live.",
    citation: "White & Shah (2006, 2016)",
  },
  {
    id: "cerebellum",
    name: "Cerebellum & Timing",
    cx: 430,
    cy: 330,
    researcher: "Temporal Processing Research",
    researcherInitials: "TP",
    researcherTitle: "Converging ADHD findings",
    finding:
      "The cerebellum plays a critical role in the brain's internal clock. Research shows ADHD affects this temporal processing, which is why \"time blindness\" is real, not an excuse.",
    takeaway:
      "Time really does feel different for you. External timers, visual time aids, and accountability check ins work because they replace the internal signal.",
    citation: "Barkley on temporal processing; Valera et al. meta-analyses",
  },
];

export function ADHDBrainDiagram() {
  const [selected, setSelected] = useState<Region | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Brain SVG */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/10 rounded-3xl blur-2xl" />
          <div className="relative bg-warm-bg rounded-3xl p-6 border-2 border-secondary/25">
            <svg
              viewBox="0 0 600 450"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive ADHD brain diagram"
            >
              {/* Background glow */}
              <defs>
                <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" className="text-accent" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-accent" />
                </radialGradient>
              </defs>
              <ellipse cx="300" cy="230" rx="240" ry="180" fill="url(#brainGlow)" />

              {/* Stylized brain outline */}
              <g className="text-accent" fill="none" stroke="currentColor">
                {/* Main brain outer shape */}
                <path
                  d="M 150 230 C 110 230, 90 180, 130 140 C 120 100, 160 75, 210 85 C 230 55, 290 50, 320 80 C 360 60, 420 75, 440 120 C 490 130, 510 180, 485 220 C 510 260, 490 310, 445 320 C 440 365, 390 385, 345 370 C 320 395, 260 395, 230 370 C 180 385, 135 360, 130 320 C 90 305, 85 255, 130 240 C 135 235, 142 232, 150 230 Z"
                  strokeWidth="2"
                  opacity="0.5"
                  fill="currentColor"
                  fillOpacity="0.04"
                />
                {/* Central fissure (the gap between hemispheres) */}
                <path
                  d="M 305 75 C 310 150, 300 230, 315 310 C 305 350, 320 380, 315 395"
                  strokeWidth="1.5"
                  opacity="0.3"
                  strokeDasharray="3 4"
                />
                {/* Some texture lines suggesting brain folds */}
                <path d="M 170 160 C 200 155, 230 165, 250 155" strokeWidth="1.3" opacity="0.25" />
                <path d="M 150 200 C 185 195, 215 205, 245 200" strokeWidth="1.3" opacity="0.25" />
                <path d="M 170 250 C 200 245, 230 255, 260 250" strokeWidth="1.3" opacity="0.25" />
                <path d="M 160 295 C 195 290, 225 300, 255 295" strokeWidth="1.3" opacity="0.25" />
                <path d="M 355 155 C 385 150, 415 160, 440 155" strokeWidth="1.3" opacity="0.25" />
                <path d="M 345 200 C 385 195, 425 205, 455 200" strokeWidth="1.3" opacity="0.25" />
                <path d="M 355 250 C 390 245, 420 255, 450 250" strokeWidth="1.3" opacity="0.25" />
                <path d="M 350 295 C 385 290, 420 300, 445 295" strokeWidth="1.3" opacity="0.25" />
                {/* Cerebellum hint at bottom */}
                <path
                  d="M 360 345 C 380 360, 420 360, 440 345"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
              </g>

              {/* Interactive region dots */}
              {REGIONS.map((region) => {
                const isActive = selected?.id === region.id;
                return (
                  <g
                    key={region.id}
                    onClick={() => setSelected(region)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Pulse ring */}
                    {!isActive && (
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r="14"
                        className="text-accent"
                        fill="currentColor"
                        opacity="0.25"
                      >
                        <animate
                          attributeName="r"
                          values="12;22;12"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0;0.4"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Outer ring (on active) */}
                    {isActive && (
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r="20"
                        className="text-accent"
                        fill="currentColor"
                        opacity="0.25"
                      />
                    )}
                    {/* Main dot */}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={isActive ? "10" : "8"}
                      className="text-accent"
                      fill="currentColor"
                    />
                    {/* Inner white dot */}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r="3"
                      fill="white"
                    />
                    {/* Hover title */}
                    <title>{region.name}</title>
                  </g>
                );
              })}
            </svg>

            <p className="text-center text-sm text-dark-light mt-4 italic">
              Click any glowing region to explore the science
            </p>
          </div>
        </div>

        {/* Detail panel */}
        <div className="min-h-[420px] flex items-center">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full bg-white rounded-2xl p-7 sm:p-8 border-2 border-accent/25 shadow-md"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-warm-bg flex items-center justify-center text-dark-light transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <div className="flex items-center gap-3 mb-5 pr-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-serif text-lg font-bold">
                    {selected.researcherInitials}
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-dark leading-tight">
                      {selected.researcher}
                    </p>
                    <p className="text-xs text-dark-light">{selected.researcherTitle}</p>
                  </div>
                </div>

                <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-2">
                  {selected.name}
                </p>

                <p className="text-dark-light leading-relaxed text-[15px] mb-5">
                  {selected.finding}
                </p>

                <div className="bg-secondary-light/30 rounded-xl p-4 border border-secondary/30 mb-4">
                  <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                    What this means for you
                  </p>
                  <p className="text-dark leading-relaxed text-[15px]">{selected.takeaway}</p>
                </div>

                <p className="text-[11px] text-primary italic leading-snug">{selected.citation}</p>

                {/* Nav to next region */}
                <button
                  onClick={() => {
                    const idx = REGIONS.findIndex((r) => r.id === selected.id);
                    const next = REGIONS[(idx + 1) % REGIONS.length];
                    setSelected(next);
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Explore another region <ArrowRight size={14} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full bg-white rounded-2xl p-8 border-2 border-dashed border-secondary/40 text-center"
              >
                <p className="text-6xl mb-4">🧠</p>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">
                  Start Exploring
                </h3>
                <p className="text-dark-light leading-relaxed">
                  Click any of the pulsing dots on the brain to discover what leading
                  neuroscientists and ADHD researchers have found about your brain.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center text-xs">
                  {["Barkley", "Huberman", "Amen", "White"].map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-warm-bg text-accent rounded-full border border-accent/20"
                    >
                      Dr. {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick region pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {REGIONS.map((r) => {
          const active = selected?.id === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setSelected(r)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
                active
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-dark-light border-secondary/30 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {r.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
