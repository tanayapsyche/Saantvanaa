import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute discovery call or send a message. Let's talk about how Saantwanaa can help you.",
};

export default function ContactPage() {
  return <ContactContent />;
}
