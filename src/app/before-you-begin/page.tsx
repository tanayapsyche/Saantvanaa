import type { Metadata } from "next";
import { BeforeYouBeginContent } from "./BeforeYouBeginContent";

export const metadata: Metadata = {
  title: "Before You Begin",
  description:
    "Honest answers to the real worries people have before starting with Santwanaa. What if I miss a week? What if I want to quit? Read the honest answers.",
};

export default function BeforeYouBeginPage() {
  return <BeforeYouBeginContent />;
}
