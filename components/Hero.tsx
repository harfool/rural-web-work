"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-[#f8f9fa] to-[#eef5f1]">
      {/* 🔹 Background Accent (subtle gradient + blur shapes) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-orange-400 to-green-500 rounded-full mix-blend-multiply opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-gradient-to-r from-green-400 to-orange-500 rounded-full mix-blend-multiply opacity-10 blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* 🔸 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 py-24 md:py-32 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* 🧠 Left Content */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Indian Businesses
            </span>{" "}
            with Digital Innovation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            At{" "}
            <span className="font-semibold text-gray-800">Growify India</span>,
            we build beautiful, scalable, and high-performing digital products —
            crafted for the next generation of Indian entrepreneurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowUpRight className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-gray-800 border-gray-300 hover:border-green-600 hover:text-green-700 hover:bg-white transition-all duration-300"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* ⚡ Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex gap-10 text-gray-800"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-sm text-gray-500">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">25+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </motion.div>
        </div>

        {/* 🎨 Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/hero.jpg" // Replace with your hero illustration
              alt="Growify Hero"
              width={650}
              height={420}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
