"use client";

import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <WhyChooseUs />
      <WorkProcess />
    </main>
  );
}
