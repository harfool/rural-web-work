"use client";

import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 🔹 Hero Section */}
      <Hero />
      <WhyChoose />

      {/* 🔸 Below Hero: Growify India Work */}
      <section className="h-[80vh] flex justify-center items-center text-6xl md:text-7xl font-extrabold bg-white">
        <h1 className="text-center">
          <span className="text-[#FF671F]">Growify</span>
          <span className="text-gray-400">India</span>
          <span className="text-[#046A38]">Work</span>
        </h1>
      </section>
    </main>
  );
}
