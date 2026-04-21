import type { Metadata } from "next";
import { ADHDContent } from "./ADHDContent";

export const metadata: Metadata = {
  title: "ADHD Support",
  description:
    "Specialized lifestyle management for high-functioning adults with ADHD. Manage overwhelm, build focus, and develop systems that work with your brain.",
};

export default function ADHDPage() {
  return <ADHDContent />;
}
