


"use client";
import { motion } from "framer-motion";
import { EngagementModelCard } from "./EngagementModelCard";


export default function EngagementModel() {
  const services = [
    {
      title: "Talent Search",
      description:
        "Critical hires and leadership builds. Curated shortlists with structured vetting and close support.",
      features: [
        "Hard-to-fill roles, confidential searches, leaders.",
        "Small shortlist + scorecards and guidance.",
      ],
      buttonText: "Enquire",
    },
    {
      title: "Embedded Hiring",
      description:
        "An always-on talent engine managed by Aventra³ — ideal for multi-role scaling and pipeline building.",
      features: [
        "Scale-ups and fast hiring velocity.",
        "Pipeline, screening, reporting, market intel.",
      ],
      buttonText: "Build Your Team",
    },
    {
      title: "Specialist Squads",
      description:
        "Outcome-driven delivery teams — built to execute under pressure in regulated and high-growth settings.",
      features: [
        "Operational uplift, control frameworks, delivery.",
        "Defined workstreams + cadence + reporting.",
      ],
      buttonText: "Explore Advisory",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            {/* Glowing Dot Section */}
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-[#6FDEF7] to-[#6FDEF7]"></span>
            </div>
            <span className="text-[14px] text-slate-600 font-medium tracking-wide">
              Clear services. High signal delivery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[56px] md:text-[72px] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-8"
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#64748B] text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Three ways to work with Aventra³ — designed for AI, blockchain, DeFi
            and Web3 teams operating at speed and (often) under regulation.
          </motion.p>
        </section>

        {/* Middle Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[52px] font-bold text-[#0F172A] mb-4 tracking-tight"
          >
            Choose a model that fits your stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#64748B] text-lg max-w-3xl"
          >
            Recruitment only works when it’s aligned to team design, timing and
            risk. We start with clarity, then execute.
          </motion.p>
        </section>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, idx) => (
            <EngagementModelCard key={idx} {...service} delay={0.1 * idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
