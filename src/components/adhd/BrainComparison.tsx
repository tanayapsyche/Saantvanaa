"use client";

import { motion } from "framer-motion";

// Side-by-side comparison of a neurotypical vs ADHD brain.
// Each brain SVG has the same outline; the differences are shown through
// region highlights, dot density (representing activity), and small callouts.

type BrainProps = {
  label: string;
  subtitle: string;
  // visual differences are baked into each variant below
  variant: "neurotypical" | "adhd";
};

function Brain({ label, subtitle, variant }: BrainProps) {
  const isADHD = variant === "adhd";

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <p
          className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-2 ${
            isADHD
              ? "bg-accent text-white"
              : "bg-secondary/30 text-dark"
          }`}
        >
          {label}
        </p>
        <p className="text-xs text-dark-light italic">{subtitle}</p>
      </div>

      <div className="relative bg-warm-bg rounded-3xl p-4 sm:p-6 border-2 border-secondary/25 aspect-[5/4]">
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`${label} brain`}
        >
          <defs>
            <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" className="text-accent" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-accent" />
            </radialGradient>
          </defs>
          <ellipse cx="250" cy="200" rx="200" ry="150" fill={`url(#glow-${variant})`} />

          {/* Brain outline */}
          <g className="text-accent" fill="none" stroke="currentColor">
            <path
              d="M 130 200 C 100 200, 80 160, 110 130 C 105 90, 140 65, 180 75 C 195 50, 245 45, 270 70 C 305 55, 360 70, 380 110 C 425 120, 445 165, 425 200 C 445 235, 425 280, 385 290 C 380 330, 340 345, 305 332 C 285 355, 235 355, 215 332 C 175 345, 135 325, 130 290 C 95 280, 90 235, 130 220 Z"
              strokeWidth="2"
              opacity="0.55"
              fill="currentColor"
              fillOpacity={isADHD ? "0.06" : "0.05"}
            />
            {/* Central fissure */}
            <path
              d="M 255 65 C 260 130, 252 200, 263 270 C 257 305, 270 330, 263 350"
              strokeWidth="1.5"
              opacity="0.35"
              strokeDasharray="3 4"
            />
          </g>

          {/* Prefrontal Cortex region (front/left of brain) */}
          <g>
            <ellipse
              cx="155"
              cy="155"
              rx="42"
              ry="32"
              fill="currentColor"
              className="text-accent"
              opacity={isADHD ? "0.35" : "0.12"}
            />
            <text x="155" y="159" textAnchor="middle" className="fill-dark text-[9.5px] font-semibold">
              Prefrontal
            </text>
            <text x="155" y="171" textAnchor="middle" className="fill-dark text-[9.5px] font-semibold">
              Cortex
            </text>
            {/* Activity dots */}
            {isADHD ? (
              <>
                <circle cx="135" cy="140" r="2" fill="currentColor" className="text-accent" opacity="0.5" />
                <circle cx="170" cy="150" r="2" fill="currentColor" className="text-accent" opacity="0.5" />
              </>
            ) : (
              <>
                <circle cx="135" cy="140" r="2.2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="170" cy="150" r="2.2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="148" cy="160" r="2.2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="160" cy="170" r="2.2" fill="currentColor" className="text-accent" opacity="0.85" />
              </>
            )}
          </g>

          {/* Default Mode Network region (central/back) */}
          <g>
            <ellipse
              cx="350"
              cy="210"
              rx="50"
              ry="38"
              fill="currentColor"
              className="text-accent"
              opacity={isADHD ? "0.4" : "0.1"}
            />
            <text x="350" y="208" textAnchor="middle" className="fill-dark text-[9.5px] font-semibold">
              Default Mode
            </text>
            <text x="350" y="220" textAnchor="middle" className="fill-dark text-[9.5px] font-semibold">
              Network
            </text>
            {/* Activity dots — ADHD has more (more wandering) */}
            {isADHD ? (
              <>
                <circle cx="325" cy="195" r="2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="355" cy="200" r="2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="370" cy="220" r="2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="330" cy="225" r="2" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="345" cy="235" r="2" fill="currentColor" className="text-accent" opacity="0.85" />
              </>
            ) : (
              <>
                <circle cx="345" cy="215" r="2" fill="currentColor" className="text-accent" opacity="0.4" />
              </>
            )}
          </g>

          {/* Reward / Dopamine pathway (center) */}
          <g>
            <ellipse
              cx="240"
              cy="240"
              rx="30"
              ry="22"
              fill="currentColor"
              className="text-accent"
              opacity={isADHD ? "0.18" : "0.4"}
            />
            <text x="240" y="244" textAnchor="middle" className="fill-dark text-[9px] font-semibold">
              Dopamine
            </text>
            {/* Dot density */}
            {isADHD ? (
              <>
                <circle cx="230" cy="230" r="1.6" fill="currentColor" className="text-accent" opacity="0.45" />
                <circle cx="245" cy="235" r="1.6" fill="currentColor" className="text-accent" opacity="0.45" />
              </>
            ) : (
              <>
                <circle cx="225" cy="228" r="1.8" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="240" cy="230" r="1.8" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="252" cy="240" r="1.8" fill="currentColor" className="text-accent" opacity="0.85" />
                <circle cx="232" cy="248" r="1.8" fill="currentColor" className="text-accent" opacity="0.85" />
              </>
            )}
          </g>

          {/* Cerebellum (bottom) */}
          <g>
            <ellipse
              cx="380"
              cy="305"
              rx="35"
              ry="20"
              fill="currentColor"
              className="text-accent"
              opacity={isADHD ? "0.18" : "0.3"}
            />
            <text x="380" y="309" textAnchor="middle" className="fill-dark text-[9px] font-semibold">
              Cerebellum
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

const differences = [
  {
    region: "Prefrontal Cortex",
    note: "Develops ~3 years later in ADHD and is less active during focus tasks. Affects planning, working memory, impulse control.",
    source: "Shaw et al. (2007), PNAS",
    href: "https://www.pnas.org/doi/10.1073/pnas.0707741104",
  },
  {
    region: "Default Mode Network",
    note: "Stays much more active during focused tasks in ADHD brains. This is the &ldquo;mind wandering&rdquo; network that should quiet down when you&apos;re concentrating.",
    source: "Sonuga-Barke & Castellanos (2007), Neuroscience & Biobehavioral Reviews",
    href: "https://pubmed.ncbi.nlm.nih.gov/17555828/",
  },
  {
    region: "Dopamine Pathways",
    note: "Reduced dopamine signalling and fewer dopamine receptors in the reward pathway. Rewards feel less rewarding, so the brain craves immediate or novel stimulation.",
    source: "Volkow et al. (2009), JAMA",
    href: "https://jamanetwork.com/journals/jama/fullarticle/184750",
  },
  {
    region: "Cerebellum",
    note: "Often smaller in adults with ADHD, particularly the vermis region. Affects internal timing, coordination, and the brain&apos;s &ldquo;internal clock&rdquo;.",
    source: "Valera et al. (2007), Biological Psychiatry",
    href: "https://pubmed.ncbi.nlm.nih.gov/16876138/",
  },
];

export function BrainComparison() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Two brains side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Brain
            label="Neurotypical Brain"
            subtitle="What most people are taught to expect"
            variant="neurotypical"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Brain
            label="ADHD Brain"
            subtitle="The wiring that gets misunderstood"
            variant="adhd"
          />
        </motion.div>
      </div>

      <div className="text-center mb-6">
        <p className="text-[11px] font-bold tracking-wider uppercase text-accent">
          The Key Differences
        </p>
      </div>

      {/* Differences list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {differences.map((d, i) => (
          <motion.div
            key={d.region}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white rounded-2xl p-5 border border-secondary/25"
          >
            <h4 className="font-display text-base font-bold text-dark mb-1.5">{d.region}</h4>
            <p
              className="text-sm text-dark-light leading-relaxed mb-2"
              dangerouslySetInnerHTML={{ __html: d.note }}
            />
            <a
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
            >
              {d.source}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
