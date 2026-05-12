import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Educational Psychologist behind Saantwanaa and the philosophy of supervised lifestyle management.",
};

export default function AboutPage() {
  return <AboutContent />;
}
