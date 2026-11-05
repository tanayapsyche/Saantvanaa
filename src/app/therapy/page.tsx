import type { Metadata } from "next";
import { TherapyContent } from "./TherapyContent";

export const metadata: Metadata = {
  title: "Therapy Sessions",
  description:
    "Book a single therapy session with Santwanaa. No program, no monthly commitment, just a space to talk.",
};

export default function TherapyPage() {
  return <TherapyContent />;
}
