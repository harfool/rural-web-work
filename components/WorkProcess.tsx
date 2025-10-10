"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const WorkProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Vision Alignment",
      description:
        "We begin by deeply understanding your business goals, target audience, and vision to ensure we're building the right solution",
      icon: "lucide:search",
      color: "from-blue-500 to-cyan-500",
      activities: [
        "Business goal analysis",
        "Market research",
        "Requirement mapping",
        "Vision alignment session",
      ],
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Creating a detailed roadmap with clear milestones, timelines, and success metrics tailored to your specific needs",
      icon: "lucide:trending-up",
      color: "from-purple-500 to-pink-500",
      activities: [
        "Project roadmap creation",
        "Technology stack selection",
        "Milestone planning",
        "Success metrics definition",
      ],
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description:
        "Crafting intuitive user experiences and beautiful interfaces that reflect your brand and engage your customers",
      icon: "lucide:palette",
      color: "from-orange-500 to-red-500",
      activities: [
        "UI/UX design",
        "Wireframing",
        "Prototype development",
        "User testing",
      ],
    },
    {
      step: "04",
      title: "Development & Implementation",
      description:
        "Building robust, scalable solutions using modern technologies with regular updates and collaborative feedback",
      icon: "lucide:code",
      color: "from-green-500 to-emerald-500",
      activities: [
        "Agile development",
        "Quality assurance",
        "Regular demos",
        "Client feedback integration",
      ],
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across devices and platforms to ensure flawless performance and optimal user experience",
      icon: "lucide:check-circle",
      color: "from-indigo-500 to-blue-500",
      activities: [
        "Comprehensive testing",
        "Performance optimization",
        "Security audit",
        "Cross-platform compatibility",
      ],
    },
    {
      step: "06",
      title: "Launch & Growth Support",
      description:
        "Smooth deployment followed by ongoing support, analytics, and optimization to ensure long-term success",
      icon: "lucide:rocket",
      color: "from-yellow-500 to-orange-500",
      activities: [
        "Production deployment",
        "Performance monitoring",
        "Analytics setup",
        "Growth strategy support",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-100 to-green-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A transparent, collaborative approach that ensures your vision
            becomes reality with precision and quality
          </p>
        </motion.div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 relative">
                <div className="relative">
                  <div
                    className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg z-10`}
                  >
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon icon={step.icon} className="text-white text-3xl" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                      {step.title}
                    </h3>

                    <div className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <motion.div
                          key={activityIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: activityIndex * 0.1 }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}
                          ></div>
                          <span className="text-sm">{activity}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full h-full bg-gradient-to-b from-gray-400 to-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full animate-pulse`}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Transparent Timeline</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon icon="lucide:users" className="w-4 h-4" />
                      <span>Collaborative Approach</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon icon="lucide:shield" className="w-4 h-4" />
                      <span>Quality Assured</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-8 border border-orange-200"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Our proven process ensures your project&#39;s success from concept
              to launch. Let&#39;s discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300">
                Schedule a Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-700 font-medium px-8 py-3 rounded-xl transition-all duration-300">
                Download Process PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
