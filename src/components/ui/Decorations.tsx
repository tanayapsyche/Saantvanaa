export function LeafDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 10C60 10 20 40 20 70C20 90 38 110 60 110C82 110 100 90 100 70C100 40 60 10 60 10Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M60 25C60 25 60 110 60 110"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <path
        d="M60 50C45 45 30 55 30 55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
      />
      <path
        d="M60 65C75 60 85 68 85 68"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
      />
      <path
        d="M60 80C48 76 38 82 38 82"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
      />
    </svg>
  );
}

export function SunburstDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.08" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1="100"
          y1="100"
          x2={100 + 95 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 95 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.04"
        />
      ))}
    </svg>
  );
}

export function WaveDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40C240 10 480 70 720 40C960 10 1200 70 1440 40V80H0V40Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DotsPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={12 + col * 26}
            cy={12 + row * 26}
            r="2"
            fill="currentColor"
            opacity={0.06 + ((row * 8 + col) % 5) * 0.025}
          />
        ))
      )}
    </svg>
  );
}

export function BranchDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M80 290C80 290 80 10 80 10"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.1"
        strokeLinecap="round"
      />
      {/* Leaves on the branch */}
      <ellipse cx="55" cy="60" rx="25" ry="12" fill="currentColor" opacity="0.06" transform="rotate(-30 55 60)" />
      <ellipse cx="105" cy="100" rx="25" ry="12" fill="currentColor" opacity="0.06" transform="rotate(30 105 100)" />
      <ellipse cx="50" cy="150" rx="22" ry="10" fill="currentColor" opacity="0.06" transform="rotate(-25 50 150)" />
      <ellipse cx="110" cy="200" rx="22" ry="10" fill="currentColor" opacity="0.06" transform="rotate(25 110 200)" />
      <ellipse cx="55" cy="245" rx="20" ry="9" fill="currentColor" opacity="0.06" transform="rotate(-20 55 245)" />
    </svg>
  );
}

export function FlowerInVase({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 220" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Vase */}
      <path
        d="M55 140 L55 180 Q55 200 80 200 Q105 200 105 180 L105 140 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M60 140 L60 180 Q60 195 80 195 Q100 195 100 180 L100 140"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
        fill="none"
      />
      <ellipse cx="80" cy="140" rx="22" ry="5" fill="currentColor" opacity="0.3" />
      {/* Stems */}
      <path d="M80 140 L80 60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M80 140 Q75 110 60 70" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M80 140 Q85 100 100 60" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
      {/* Flowers/buds */}
      <circle cx="80" cy="55" r="10" fill="currentColor" opacity="0.18" />
      <circle cx="80" cy="55" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="60" cy="65" r="7" fill="currentColor" opacity="0.18" />
      <circle cx="60" cy="65" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="55" r="8" fill="currentColor" opacity="0.18" />
      <circle cx="100" cy="55" r="4" fill="currentColor" opacity="0.3" />
      {/* Small leaves along stems */}
      <ellipse cx="70" cy="95" rx="8" ry="3" fill="currentColor" opacity="0.18" transform="rotate(-25 70 95)" />
      <ellipse cx="90" cy="110" rx="8" ry="3" fill="currentColor" opacity="0.18" transform="rotate(25 90 110)" />
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 180" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main stem curving */}
      <path
        d="M60 170 Q55 130 65 90 Q70 55 55 20"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaves along the stem */}
      <ellipse cx="40" cy="150" rx="18" ry="7" fill="currentColor" opacity="0.18" transform="rotate(-35 40 150)" />
      <ellipse cx="80" cy="135" rx="18" ry="7" fill="currentColor" opacity="0.18" transform="rotate(35 80 135)" />
      <ellipse cx="35" cy="110" rx="16" ry="6" fill="currentColor" opacity="0.18" transform="rotate(-30 35 110)" />
      <ellipse cx="85" cy="90" rx="16" ry="6" fill="currentColor" opacity="0.18" transform="rotate(30 85 90)" />
      <ellipse cx="42" cy="65" rx="14" ry="5" fill="currentColor" opacity="0.18" transform="rotate(-25 42 65)" />
      <ellipse cx="75" cy="45" rx="14" ry="5" fill="currentColor" opacity="0.18" transform="rotate(25 75 45)" />
      {/* Tiny bud at top */}
      <circle cx="55" cy="20" r="5" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function GentleArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 100" fill="none" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 100C100 20 300 20 400 100"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.08"
      />
      <path
        d="M0 100C100 40 300 40 400 100"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.05"
      />
    </svg>
  );
}
