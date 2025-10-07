"use client";

import { motion } from "framer-motion";
import { Shield, Rocket, Users, Zap, LineChart, Code } from "lucide-react";

const WhyChooseUs = () => {
  const highlights = [
    {
      title: "End-to-End Digital Solutions",
      description:
        "From website development to SEO and marketing — we handle everything you need to grow online.",
      icon: <Rocket className="w-7 h-7 text-white" />,
    },
    {
      title: "Transparent & Reliable Process",
      description:
        "We maintain complete transparency in timelines, budgets, and progress with real-time updates.",
      icon: <Shield className="w-7 h-7 text-white" />,
    },
    {
      title: "Expert Team of Professionals",
      description:
        "Our skilled developers, designers, and marketers bring innovation and precision to every project.",
      icon: <Users className="w-7 h-7 text-white" />,
    },
    {
      title: "Fast, Secure & Scalable",
      description:
        "We build high-performing solutions optimized for speed, security, and long-term scalability.",
      icon: <Zap className="w-7 h-7 text-white" />,
    },
    {
      title: "Data-Driven Growth Strategy",
      description:
        "We use analytics and performance metrics to ensure your business keeps growing smarter every day.",
      icon: <LineChart className="w-7 h-7 text-white" />,
    },
    {
      title: "Custom Solutions for Every Business",
      description:
        "Whether you’re a startup or enterprise — we tailor digital experiences that fit your goals perfectly.",
      icon: <Code className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-10 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-r from-orange-400 to-green-500 opacity-10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-green-400 to-orange-400 opacity-10 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Choose Us
            </span>
            ?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-800">Growify India</span>,
            we don’t just build digital products — we build long-term
            partnerships that drive your business growth.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-green-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
