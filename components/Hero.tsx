"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Globe,
  Heart,
  Target,
  Users,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-green-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-500" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <Globe className="w-full h-full text-gray-900" />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-400/10 to-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">
                  Building a Better India Through Technology
                </span>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Creating{" "}
                <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  Meaningful Change
                </span>{" "}
                Through Digital Innovation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                We believe in the power of technology to transform lives. Our
                mission is to build digital solutions that not only drive
                business growth but also create{" "}
                <span className="font-semibold text-gray-900">
                  positive social impact
                </span>{" "}
                across India and beyond.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {[
                {
                  icon: Target,
                  title: "Purpose-Driven",
                  desc: "Every project has meaning",
                },
                {
                  icon: Heart,
                  title: "Social Impact",
                  desc: "Creating positive change",
                },
                {
                  icon: Globe,
                  title: "Global Vision",
                  desc: "Indian roots, worldwide reach",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center lg:items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-orange-200 transition-all duration-300"
                >
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            >
              <Button className="group bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start Your Impact Journey
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="group rounded-xl px-8 py-4 text-gray-700 border-2 border-gray-300 hover:border-green-500 hover:text-green-700 bg-white/60 backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
              >
                <Users className="w-5 h-5" />
                Our Vision Story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="pt-6 border-t border-gray-200/50"
            >
              <p className="text-sm text-gray-600 italic">
                &quot;We don&#39;t just build products; we build relationships
                and create lasting impact. Your success is our mission, and
                together we can shape a better digital future for India.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative max-w-lg w-full space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl p-8"
              >
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-2 border-orange-500/30 border-t-green-500/30 rounded-2xl"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To become the catalyst for digital transformation in
                      India, creating solutions that empower businesses while
                      making a meaningful difference in society.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { label: "Local Impact", value: "India First" },
                      { label: "Global Reach", value: "Worldwide" },
                      { label: "Focus Area", value: "Innovation" },
                      { label: "Mission", value: "Empowerment" },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-green-50"
                      >
                        <div className="font-semibold text-gray-900 text-sm">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex justify-start"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Social Impact
                      </div>
                      <div className="text-xs text-gray-600">
                        Creating positive change
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="flex justify-end"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-gray-900">
                        Global Standards
                      </div>
                      <div className="text-xs text-gray-600">
                        World-class quality
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-medium">Discover Our Mission</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-r from-orange-500 to-green-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
