"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const WhyChooseUs = () => {
  const highlights = [
    {
      title: "Vision-Driven Approach",
      description:
        "We don't just build products; we create solutions that align with your long-term vision and make meaningful impact",
      icon: "lucide:target",
      size: "medium",
    },
    {
      title: "Indian Market Expertise",
      description:
        "Deep understanding of Indian business landscape, consumer behavior, and digital adoption patterns",
      icon: "lucide:map-pin",
      size: "small",
    },
    {
      title: "Global Quality Standards",
      description:
        "World-class development practices combined with local insights to deliver exceptional digital experiences",
      icon: "lucide:globe",
      size: "large",
    },
    {
      title: "Transparent Process",
      description:
        "Complete visibility into project progress with regular updates and collaborative decision-making",
      icon: "lucide:shield-check",
      size: "medium",
    },
    {
      title: "Social Impact Focus",
      description:
        "Committed to creating solutions that drive positive change in Indian society and economy",
      icon: "lucide:heart-handshake",
      size: "small",
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "md:col-span-1";
      case "medium":
        return "md:col-span-2";
      case "large":
        return "md:col-span-3";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden w-full">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center w-full"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Growify India
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine global expertise with local understanding to deliver
            digital solutions that drive real business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group ${getSizeClasses(
                highlight.size
              )} h-full w-full`}
            >
              <div className="h-full p-5 lg:p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-green-50 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden text-gray-800 w-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 mb-4 rounded-lg bg-gray-100 border border-gray-200 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-green-600 group-hover:scale-110">
                  <Icon
                    icon={highlight.icon}
                    className="text-2xl lg:text-3xl text-gray-600 transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-2 lg:mb-3 text-lg lg:text-xl font-bold text-gray-800 group-hover:text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700">
                  {highlight.description}
                </p>

                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-green-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Icon icon="lucide:clock" className="text-white text-xl" />
            </div>
            <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">
              Quick turnaround without compromising quality
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Icon icon="lucide:users" className="text-white text-xl" />
            </div>
            <h4 className="font-semibold text-gray-800">
              Collaborative Partnership
            </h4>
            <p className="text-gray-600 text-sm">
              We work with you, not just for you
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Icon icon="lucide:trending-up" className="text-white text-xl" />
            </div>
            <h4 className="font-semibold text-gray-800">Growth Focused</h4>
            <p className="text-gray-600 text-sm">
              Solutions designed to scale with your business
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
