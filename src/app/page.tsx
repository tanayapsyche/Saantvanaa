import { Hero } from "@/components/home/Hero";
import { WhatIsLifestyleManagement } from "@/components/home/WhatIsLifestyleManagement";
import { Accountability } from "@/components/home/Accountability";
import { IsThisForYou } from "@/components/home/IsThisForYou";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { SelfReliance } from "@/components/home/SelfReliance";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsLifestyleManagement />
      <Accountability />
      <IsThisForYou />
      <Testimonials />
      <FAQ />
      <SelfReliance />
      <CTABanner />
    </>
  );
}
