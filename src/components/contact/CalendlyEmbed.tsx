"use client";

import { CALENDLY_URL } from "@/lib/constants";
import { Calendar } from "lucide-react";

export function CalendlyEmbed() {
  // If Calendly URL is not configured, show a placeholder
  if (CALENDLY_URL.includes("your-link-here")) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 text-center border border-primary/10">
        <Calendar size={48} className="text-accent mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-dark mb-2">Booking Coming Soon</h3>
        <p className="text-dark-light">
          Online booking will be available here shortly. In the meantime, use the contact form
          above or reach out directly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden border border-primary/10">
      <iframe
        src={CALENDLY_URL}
        width="100%"
        height="700"
        frameBorder="0"
        title="Schedule a discovery call"
      />
    </div>
  );
}
