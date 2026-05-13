"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { LeafDecoration, FlowerInVase, Sprig } from "@/components/ui/Decorations";

export function ContactContent() {
  return (
    <>
      {/* Hero — Morning Nook aesthetic */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/flowers-shadow.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light/92 via-light/65 to-light/25" />
        </div>

        <LeafDecoration className="absolute top-10 right-10 w-28 h-28 text-accent opacity-25 hidden lg:block" />
        <Sprig className="absolute top-20 left-8 w-24 h-36 text-accent opacity-25 hidden lg:block" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full mb-6">
                Get In Touch
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Let&apos;s Start With a{" "}
                <span className="text-accent">Conversation</span>
              </h1>
              <p className="mt-6 text-lg text-dark-light max-w-xl leading-relaxed">
                Book a free 15 minute discovery call or send a message. No pressure, no commitment, just a safe space to talk about what you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <Sprig className="absolute top-10 right-4 w-20 h-32 text-accent opacity-20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-dark mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-light">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-dark font-medium hover:text-accent transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-light">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="text-dark font-medium hover:text-accent transition-colors"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-light">Sessions</p>
                    <p className="text-dark font-medium">Online via Video Call</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-warm-bg rounded-2xl border border-secondary/25">
                <h3 className="font-semibold text-dark mb-2">What happens next?</h3>
                <ol className="space-y-2 text-sm text-dark-light">
                  <li className="flex gap-2">
                    <span className="font-semibold text-accent">1.</span>
                    Book a slot or send a message
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-accent">2.</span>
                    We have a 15 minute chat about your goals
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-accent">3.</span>
                    If it&apos;s a good fit, we schedule your onboarding session
                  </li>
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 lg:py-28 bg-warm-bg relative overflow-hidden">
        <FlowerInVase className="absolute top-10 right-10 w-24 h-36 text-accent opacity-25 hidden lg:block" />
        <LeafDecoration className="absolute bottom-10 left-10 w-20 h-20 text-accent opacity-20 hidden lg:block rotate-180" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Book Directly"
            title="Schedule Your Free Discovery Call"
            subtitle="Pick a time that works for you. 15 minutes, completely free."
          />
          <CalendlyEmbed />
        </div>
      </section>
    </>
  );
}
