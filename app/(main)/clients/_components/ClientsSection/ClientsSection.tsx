"use client";
import { useEffect } from "react";
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ClientFeatureCard } from "./ClientFeatureCard";

// Replace these with your actual image paths
import marketImg from "@/public/clients/marketI.jpg";
import teamImg from "@/public/clients/team.jpg";
import regImg from "@/public/clients/aware.jpg";
import deliveryImg from "@/public/clients/highSignal.jpg";

import { ClientFeatureCard } from "./ClientFeatureCard";

export default function ClientsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Unlimited scroll triggers
      mirror: true,
      easing: "ease-out-quart",
    });
  }, []);

  const features = [
    {
      title: "Market intelligence",
      subtitle: "Comp, supply, role scarcity",
      image: marketImg,
    },
    {
      title: "Team design",
      subtitle: "Hiring order + org shape",
      image: teamImg,
    },
    {
      title: "Regulation-aware",
      subtitle: "Risk, controls, governance",
      image: regImg,
    },
    {
      title: "High-signal delivery",
      subtitle: "Shortlists, not longlists",
      image: deliveryImg,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 mt-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <header className="mb-32">
          <div className="flex items-center gap-2 mb-6" data-aos="fade-right">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-[#6FDEF7] to-[#6FDEF7]"></span>
            </div>
            <span className="text-sm text-slate-600 font-semibold tracking-wide">
              Advisory-led hiring + delivery for frontier tech
            </span>
          </div>

          <h1
            data-aos="fade-up"
            className="text-[55px] md:text-[74px] font-bold text-[#0F172A] leading-[1] mb-10 "
          >
            For Clients
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Aventra³ helps organisations build and scale capability across AI,
            Web3, crypto and regulated fintech. We combine market insight, team
            design, and execution models — so you move faster with less risk.
          </p>
        </header>

        {/* Section Heading with Side Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2
            data-aos="fade-right"
            className="text-4xl md:text-[54px] font-bold text-[#0F172A] tracking-tight"
          >
            What you get with Aventra³
          </h2>
          <p
            data-aos="fade-left"
            className="text-slate-500 text-lg max-w-[320px] leading-snug"
          >
            Clarity first. Execution next. Built for speed, complexity and
            regulated growth.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {features.map((item, idx) => (
            <ClientFeatureCard
              key={idx}
              {...item}
              delay={idx % 2 === 0 ? 0 : 200} // Staggers left and right columns
            />
          ))}
        </div>
      </div>
    </section>
  );
}
