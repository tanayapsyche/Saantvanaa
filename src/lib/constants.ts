export const SITE_NAME = "Santwanaa";
export const SITE_NAME_DEVANAGARI = "सांत्वना";
export const SITE_TAGLINE = "Lifestyle Management Through Habit Coaching & Emotional Wellness";
export const SITE_DESCRIPTION =
  "Santwanaa helps you build healthier habits, overcome emotional challenges, and manage ADHD symptoms through personalized lifestyle coaching and therapeutic guidance.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/therapy", label: "Therapy" },
  { href: "/adhd", label: "ADHD Support" },
  { href: "/before-you-begin", label: "Before You Begin" },
  { href: "/contact", label: "Contact" },
] as const;

export const BEFORE_YOU_BEGIN_CONCERNS = [
  {
    question: "What if I miss a week?",
    answer:
      "You won't be the first, and you won't be scolded. We'll look at what got in the way together, tweak the plan if we need to, and keep going. Missing a week isn't failing, it's data.",
  },
  {
    question: "What if I don't want to show up?",
    answer:
      "We'll talk about it. Sometimes not wanting to show up is the exact moment a session matters most. And if you genuinely need to skip, we reschedule. No guilt.",
  },
  {
    question: "What if I relapse into old habits?",
    answer:
      "That's expected. Change isn't linear. We'll figure out what triggered the slip, what it's telling us, and how to build back gently, without pretending it didn't happen.",
  },
  {
    question: "What if the plan isn't working?",
    answer:
      "Then we change it. The plan exists to serve you, not the other way around. If something isn't clicking after two weeks, that's our signal to redesign it.",
  },
  {
    question: "What if I just want to quit?",
    answer:
      "You can. There's no lock in. But before you go, we'll sit down and honestly figure out whether this isn't working for you, or whether something harder is coming up. Sometimes quitting is the right call. Sometimes it's the thing to work through.",
  },
  {
    question: "What if I'm not ready to commit yet?",
    answer:
      "That's completely okay. Start with a free 15 minute discovery call. No pressure, no pitch. We'll just talk about what you're dealing with and see if this feels like the right fit. If it's not, I'll tell you honestly.",
  },
  {
    question: "What if I find this emotionally hard?",
    answer:
      "It probably will be, at least sometimes. Real change touches real things. That's exactly why the emotional wellness component exists. You won't be left to navigate the hard parts alone, and nothing we discuss leaves the room.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Onboarding Session",
    description:
      "A one on one session to understand your goals, lifestyle, strengths, and the challenges you want to overcome. We take a detailed case history to tailor everything that follows.",
  },
  {
    number: "02",
    title: "Lifestyle Planning",
    description:
      "Together, we design a realistic new schedule built around your life. This is collaborative; you and your coach agree on every detail so the plan actually works for you.",
  },
  {
    number: "03",
    title: "Weekly Tracking",
    description:
      "We meet twice a week to check in on progress, troubleshoot challenges, celebrate wins, and adjust the plan as needed. Consistent accountability is key.",
  },
  {
    number: "04",
    title: "Emotional Wellness Support",
    description:
      "Changing habits often surfaces difficult emotions like guilt, self doubt, or resistance. Through personalised therapeutic guidance, we work through these so they don't hold you back from your progress.",
  },
  {
    number: "05",
    title: "Self Reflection & Feedback",
    description:
      "Monthly, you receive honest feedback from your coach, and you also sit down and give feedback to yourself: what's working, what's not, what needs attention. Learning to track your own growth is how self awareness becomes self reliance.",
  },
] as const;

export const SELF_REFLECTION_CARDS = [
  {
    label: "&ldquo;I start strong, then it all fizzles out.&rdquo;",
    name: "The Week-Three Slump",
    text: "Motivation is a spark, not a system. Without structure and someone checking in, even great habits fade. We build the routine around your real life and keep adjusting until it sticks.",
  },
  {
    label: "&ldquo;My to-do list freezes me.&rdquo;",
    name: "Overwhelm Paralysis",
    text: "When everything feels urgent, nothing feels startable. We break things into small, concrete steps so you always know what the next one is.",
  },
  {
    label: "&ldquo;I only get things done at the last minute.&rdquo;",
    name: "Pressure-Dependent Productivity",
    text: "Deadlines are doing the work your routine should be doing. Together we find calmer ways to start, so you aren&apos;t living on adrenaline.",
  },
  {
    label: "&ldquo;I know what to do. I just can&apos;t make myself do it.&rdquo;",
    name: "The Knowing–Doing Gap",
    text: "This isn&apos;t a knowledge problem, so more information won&apos;t fix it. Accountability and a look at what&apos;s underneath the resistance will.",
  },
  {
    label: "&ldquo;I feel guilty about my own potential.&rdquo;",
    name: "Guilt Loops",
    text: "Guilt feels like motivation but it quietly drains it. We work on the self-doubt so progress can feel kinder.",
  },
  {
    label: "&ldquo;Books and apps haven&apos;t worked for me.&rdquo;",
    name: "Tools Without Support",
    text: "Plenty of people don&apos;t need another app, they need a real person asking &ldquo;so what happened on Wednesday?&rdquo;",
  },
  {
    label: "&ldquo;My brain feels foggy, even simple choices are exhausting.&rdquo;",
    name: "Decision Fatigue & Brain Fog",
    text: "A cloudy mind is often a sign of too much running at once. We simplify, build rhythm, and give you a steady place to think things through.",
  },
  {
    label: "&ldquo;Maybe I have ADHD, or I was recently diagnosed.&rdquo;",
    name: "Wired Differently",
    text: "You don&apos;t need a label to deserve support. We build systems that work with your brain, not against it.",
  },
  {
    label: "&ldquo;I want real support, not just a pep talk.&rdquo;",
    name: "Professional Support",
    text: "That&apos;s exactly what this is: a qualified psychologist, evidence-based tools, and a plan made for you.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Okay so I came in just wanting to fix my sleep. Three months in I had a routine, a therapist, and a much kinder relationship with myself. Slightly dramatic but worth it.",
    name: "Rhea T.",
    role: "HR Manager, 28",
  },
  {
    quote:
      "Twelve habit apps. None of them worked. Turns out I didn't need another app, I needed someone to ask me 'so what happened on Wednesday?' once a week.",
    name: "Priya M.",
    role: "Marketing, 31",
  },
  {
    quote:
      "I genuinely thought I was just lazy. Turns out there was a lot going on under there that no planner was gonna fix. Wish I'd done this years ago tbh.",
    name: "Arjun K.",
    role: "Software dev, 29",
  },
  {
    quote:
      "First time someone built the plan around how my brain actually works, instead of asking me to fit into theirs. ADHD finally felt seen, not managed.",
    name: "Aanya R.",
    role: "Architect, ADHD",
  },
  {
    quote:
      "Bad weeks didn't get dismissed. Good weeks didn't get over celebrated. Just real, honest, human conversations. That's what I'd been missing.",
    name: "Karan D.",
    role: "Doctor, 34",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is this therapy or coaching?",
    answer:
      "It's a thoughtful combination of both. Santwanaa pairs structured habit coaching with professional therapeutic guidance. The coaching helps you build systems and accountability, while the emotional wellness component addresses the deeper patterns that often sabotage change.",
  },
  {
    question: "Will this make me dependent on you?",
    answer:
      "This is exactly the question we hope you ask, and the honest answer is no. In fact, our entire program is designed to do the opposite. The emotional wellness component exists specifically to address the patterns that could make you rely on external support. We work with you to build the self awareness, systems, and inner resilience you need to eventually stand on your own. Our job is to hold your hand through the difficult part of change, not to replace the confidence you're building in yourself. The day you feel ready to continue without us is the day we've done our job right.",
  },
  {
    question: "What happens when I don't need you anymore?",
    answer:
      "That moment is something we genuinely celebrate. It means the work we did together has taken root in you. It usually unfolds in three stages: first we walk with you, guiding closely with planning, tracking and working through the hard parts together. Then you start leading, recognising your own triggers and making your own adjustments, while we stay in your corner as a sounding board. Finally you carry it forward, with the habits, self-awareness and resilience to keep going on your own. We're not building a dependency, we're tending to your growth.",
  },
  {
    question: "How is this different from a life coach?",
    answer:
      "Unlike most life coaches, your Santwanaa coach is a qualified Educational Psychologist. This means evidence based approaches, proper training, and the ability to address deeper psychological patterns, not just surface level motivation.",
  },
  {
    question: "Do I need an ADHD diagnosis to join?",
    answer:
      "No. Our lifestyle management approach helps anyone who struggles with building habits, managing time, or overcoming patterns that hold them back, including people who suspect or have been diagnosed with ADHD.",
  },
  {
    question: "How long is the program?",
    answer:
      "The core program runs in monthly cycles, and most members see meaningful change within 2 to 3 months. Our quiet hope is that, in time, you grow into someone who can carry these tools forward on your own, with us cheering you on from the sidelines.",
  },
  {
    question: "What happens in the free discovery call?",
    answer:
      "It's a relaxed 15 minute conversation where we discuss what you're looking for, I explain how the program works, and we figure out if it's a good fit. No pressure, no commitment.",
  },
  {
    question: "Is this available online?",
    answer:
      "Yes. All sessions, including coaching, tracking, and therapeutic support, are conducted online via video call, so you can participate from anywhere.",
  },
  {
    question: "What does accountability actually mean here?",
    answer:
      "Think of it like having a workout partner for your life. Accountability here means someone who checks in on you regularly, notices when you're slipping before you do, celebrates your small wins, and helps you get back on track without judgment. It's not about being watched or judged. It's about having someone in your corner who genuinely cares about your progress.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Essentials",
    subtitle: "Habit Coaching",
    priceUSD: "$99",
    priceINR: "₹7,999",
    period: "/month",
    description: "For when you need structure, not emotional deep dives",
    bestFor: "You already know what you want to change. You just need a plan, accountability, and someone to keep you consistent.",
    features: [
      "1 on 1 onboarding session (60 min)",
      "Personalised lifestyle plan built around your routine",
      "8 tracking sessions per month, twice a week (30 min each)",
      "Monthly self reflection & feedback report",
      "WhatsApp & email support between sessions",
    ],
    notIncluded: ["Emotional wellness sessions"],
    addon: {
      title: "Need a therapy session sometimes?",
      text: "You can book one whenever you need it, and only pay for the sessions you use. No big commitment, no plan upgrade required.",
    },
    highlighted: true,
  },
  {
    name: "Complete",
    subtitle: "Coaching + Emotional Wellness",
    priceUSD: "$159",
    priceINR: "₹14,999",
    period: "/month",
    description: "For when habits keep slipping and you don't know why",
    bestFor: "You've tried planning before but emotional patterns like guilt, resistance, or self doubt keep pulling you back. You want both the plan AND the inner work.",
    features: [
      "Everything in Essentials",
      "Unlimited personalised therapeutic guidance sessions",
      "Emotional resilience and self regulation work",
      "Consistency and motivation coaching",
      "Priority scheduling for urgent support",
    ],
    notIncluded: [],
    addon: null,
    highlighted: false,
  },
] as const;

// Replace with your actual Calendly URL
export const CALENDLY_URL = "https://calendly.com/your-link-here";

// Formcarry endpoint — handles contact form submissions
export const FORMCARRY_ENDPOINT = "https://formcarry.com/s/G4JLN9Wu2NU";

export const CONTACT_EMAIL = "hellosantwanaa@gmail.com";
export const CONTACT_PHONE = "+91 63610 31937";

export const FAQ_CATEGORIES = [
  {
    id: "getting-started",
    label: "Getting started",
    questions: [
      "What if I'm not ready to commit yet?",
      "What happens in the free discovery call?",
      "Do I need an ADHD diagnosis to join?",
      "How long is the program?",
      "Is this available online?",
    ],
  },
  {
    id: "staying-on-track",
    label: "Staying on track",
    questions: [
      "What if I miss a week?",
      "What if I don't want to show up?",
      "What if I relapse into old habits?",
      "What if the plan isn't working?",
      "What if I just want to quit?",
    ],
  },
  {
    id: "therapy-support",
    label: "Therapy & support",
    questions: [
      "Is this therapy or coaching?",
      "How is this different from a life coach?",
      "What if I find this emotionally hard?",
      "What does accountability actually mean here?",
    ],
  },
  {
    id: "independence",
    label: "Growing independent",
    questions: [
      "Will this make me dependent on you?",
      "What happens when I don't need you anymore?",
    ],
  },
] as const;
