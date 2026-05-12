"use client";

import { motion } from "framer-motion";

// Three stages of a plant growing: seedling, sprout, bloom.
// Drawn as inline SVGs in the same warm style as the rest of the site.

function SeedlingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* soil line */}
      <path d="M6 34 L42 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 36 L38 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* seed (oval below soil) */}
      <ellipse cx="24" cy="38" rx="3" ry="2" fill="currentColor" opacity="0.6" />
      {/* tiny sprout emerging */}
      <path d="M24 34 Q24 28 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M24 28 Q20 26 18 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 26 Q28 24 30 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="24" rx="3" ry="1.5" fill="currentColor" transform="rotate(-25 20 24)" />
      <ellipse cx="28" cy="22" rx="3" ry="1.5" fill="currentColor" transform="rotate(25 28 22)" />
    </svg>
  );
}

function SproutIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* soil */}
      <path d="M8 38 L40 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* stem (taller) */}
      <path d="M24 38 Q24 26 24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* pairs of leaves up the stem */}
      <ellipse cx="18" cy="30" rx="5" ry="2.5" fill="currentColor" transform="rotate(-20 18 30)" />
      <ellipse cx="30" cy="28" rx="5" ry="2.5" fill="currentColor" transform="rotate(20 30 28)" />
      <ellipse cx="19" cy="22" rx="4.5" ry="2.2" fill="currentColor" transform="rotate(-25 19 22)" opacity="0.85" />
      <ellipse cx="29" cy="20" rx="4.5" ry="2.2" fill="currentColor" transform="rotate(25 29 20)" opacity="0.85" />
      {/* small top bud */}
      <circle cx="24" cy="13" r="2.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function BloomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* soil */}
      <path d="M8 40 L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* stem */}
      <path d="M24 40 Q24 26 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* lower leaves */}
      <ellipse cx="17" cy="32" rx="5" ry="2.5" fill="currentColor" transform="rotate(-20 17 32)" opacity="0.85" />
      <ellipse cx="31" cy="30" rx="5" ry="2.5" fill="currentColor" transform="rotate(20 31 30)" opacity="0.85" />
      {/* flower petals (5 around centre) */}
      <circle cx="24" cy="9" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="17" cy="13" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="31" cy="13" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="19" cy="20" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="29" cy="20" r="4" fill="currentColor" opacity="0.85" />
      {/* flower centre */}
      <circle cx="24" cy="15" r="3" fill="currentColor" />
    </svg>
  );
}

const steps = [
  {
    Icon: SeedlingIcon,
    title: "We walk with you",
    text: "We guide closely at first: planning, tracking, working through the hard parts together.",
  },
  {
    Icon: SproutIcon,
    title: "You start leading",
    text: "You take more ownership, and we're still right here. You start recognising your own triggers and making your own adjustments, but we're in your corner whenever you need a sounding board or a reality check.",
  },
  {
    Icon: BloomIcon,
    title: "You carry it forward",
    text: "You have the habits, the self awareness, and the inner resilience to keep going on your own.",
  },
];

export function SelfReliance() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/15 text-secondary text-sm font-semibold rounded-full mb-6 border border-white/20">
              Our Promise
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              What Happens When You Don&apos;t Need Us Anymore?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-3">
              That moment is something we genuinely celebrate. It means the work we did together has truly taken root in you.
            </p>
            <p className="text-white/75 leading-relaxed">
              Every session, every check in, every conversation is gently designed to give you skills that stay with you long after we step back. We&apos;re not building a dependency. We&apos;re tending to your growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 text-center"
            >
              <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.Icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
