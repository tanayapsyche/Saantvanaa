"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send } from "lucide-react";
import { FORMCARRY_ENDPOINT } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch(FORMCARRY_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && (result.code === 200 || result.status === "success")) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-light rounded-2xl p-10 text-center border border-primary/10">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-dark mb-2">Message Sent!</h3>
        <p className="text-dark-light">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-dark mb-1.5">Name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-dark mb-1.5">Email *</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-dark mb-1.5">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dark mb-1.5">What brings you here? *</label>
          <select
            {...register("interest", { required: "Please select an option" })}
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">Select...</option>
            <option value="habits">Building new habits</option>
            <option value="breaking-patterns">Breaking unhealthy patterns</option>
            <option value="adhd">ADHD support</option>
            <option value="therapy">Psychotherapy</option>
            <option value="general">General enquiry</option>
          </select>
          {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-1.5">Message *</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          placeholder="Tell me a bit about what you're looking for..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={16} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
}
