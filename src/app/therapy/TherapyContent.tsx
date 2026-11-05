"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleHeart, Compass, HeartHandshake, CalendarCheck, Video, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecoration, DotsPattern } from "@/components/ui/Decorations";

const reasons = [
  {
    icon: MessageCircleHeart,
    title: "I just need to vent",
    text: "Sometimes you don't need advice or a plan. You need someone qualified to listen without judgment, and a space where nothing leaves the room.",
  },
  {
    icon: Compass,
    title: "I'm curious what therapy is like",
    text: "Not sure it's for you? Try one session. Ask anything, see how it feels, and decide for yourself with no pressure to continue.",
  },
  {
    icon: HeartHandshake,
    title: "I want regular therapy",
    text: "Book sessions whenever you like, at your own pace. No month-long program, no plan to sign up for.",
  },
];

const steps = [
  { icon: CalendarCheck, title: "Reach out", text: "Send us a message with a time that suits you." },
  { icon: Video, title: "Meet online", text: "Sessions happen over video call, from wherever you are comfortable." },
  { icon: ShieldCheck, title: "Talk freely", text: "Everything you share stays confidential. Decide afterwards what, if anything, comes next." },
];

export function TherapyContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-light to-secondary-light/20">
        <LeafDecoration className="absolute top-10 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
        <DotsPattern className="absolute bottom-10 left-10 w-28 h-28 text-accent opacity-30 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
              Therapy Sessions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1]">
              Just need to talk? <span className="text-accent">One session is enough.</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-dark-light leading-relaxed">
              Not everyone wants a month-long program, and that&apos;s completely okay. Book a single therapy session with a qualified psychologist whenever you need one.
            </p>
            <div className="mt-8">
              <Button href="/contact#contact-details" size="lg">
                Book a Session <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Who It's For"
            title="Whatever brought you here is reason enough"
            subtitle="You don't need a diagnosis or a crisis to deserve a conversation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-warm-bg rounded-2xl p-7 border border-secondary/30"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light leading-relaxed text-[15px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="Simple, and on your terms" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-dark mb-1">{step.title}</h3>
                <p className="text-dark-light text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-dark-light mt-10">
            Session length and pricing are shared when you get in touch.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="font-serif text-xl sm:text-2xl text-dark leading-relaxed italic mb-8">
            &ldquo;Looking for ongoing habit support too? Our monthly plans include therapeutic guidance alongside coaching.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact#contact-details" size="lg">Book a Session</Button>
            <Button href="/services" variant="outline" size="lg">See Monthly Plans</Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
