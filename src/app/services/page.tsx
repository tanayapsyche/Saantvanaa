import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Saantwanaa's lifestyle management programs — from habit coaching to ADHD-focused plans with psychotherapy support.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
