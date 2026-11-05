import { Hero } from "@/components/home/Hero";
import { WhatIsLifestyleManagement } from "@/components/home/WhatIsLifestyleManagement";
import { Accountability } from "@/components/home/Accountability";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsLifestyleManagement />
      <Accountability />
      <Testimonials />
      <CTABanner />
    </>
  );
}
