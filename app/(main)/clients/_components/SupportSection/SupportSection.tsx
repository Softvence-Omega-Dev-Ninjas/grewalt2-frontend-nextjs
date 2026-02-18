"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SupportCard } from "./SupportCard";
// import { SupportCard } from "./SupportCard";

export default function SupportSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const supportOptions = [
    {
      icon: "zap" as const,
      title: "Build high-performance teams",
      description:
        "Permanent, contract and executive hiring across AI, data, Web3 engineering, product, risk and compliance.",
      buttonText: "See engagement models",
    },
    {
      icon: "users" as const,
      title: "Deploy specialist squads",
      description:
        "Outcome-driven teams for KYC/AML, compliance operations, transaction monitoring QA, and AI support pods.",
      buttonText: "Explore use cases",
    },
    {
      icon: "sparkles" as const,
      title: "AI systems advisory",
      description:
        "Practical guidance on AI opportunities, vendor selection, operating model, and safe deployment in regulated environments.",
      buttonText: "AI consulting overview",
    },
  ];

  return (
    <section className="bg-white mt-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-6">
          <h2
            data-aos="fade-right"
            className="text-4xl md:text-[52px] font-bold text-[#0F172A] tracking-tight leading-[1.1]"
          >
            How we support clients
          </h2>
          <p
            data-aos="fade-left"
            className="text-slate-500 text-[16px] md:text-lg max-w-[500px] leading-relaxed"
          >
            Use Aventra³ for hiring, managed delivery, or advisory. If
            you&apos;re exploring AI systems or scaling Web3 capability, we can
            guide the approach and connect you to the right specialists.
          </p>
        </div>

        {/* Support Grid with border separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {supportOptions.map((option, idx) => (
            <SupportCard key={idx} {...option} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
