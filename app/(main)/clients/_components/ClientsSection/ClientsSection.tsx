"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import marketImg from "@/public/clients/marketI.jpg";
import teamImg from "@/public/clients/team.jpg";
import regImg from "@/public/clients/aware.jpg";
import deliveryImg from "@/public/clients/highSignal.jpg";

import { ClientFeatureCard } from "./ClientFeatureCard";

export default function ClientsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-quart",
    });
  }, []);

  const features = [
    {
      title: "Market intelligence",
      subtitle:
        "Comprehensive analysis of compensation, supply, and role scarcity in the frontier tech market.",
      image: marketImg,
    },
    {
      title: "Team design",
      subtitle:
        "Strategic hiring order and organizational shaping tailored for rapid scale-ups.",
      image: teamImg,
    },
    {
      title: "Regulation-aware",
      subtitle:
        "Navigating risk, controls, and governance within highly regulated fintech sectors.",
      image: regImg,
    },
    {
      title: "High-signal delivery",
      subtitle:
        "Focusing on curated shortlists that match your technical and cultural requirements.",
      image: deliveryImg,
    },
  ];

  return (
    <section className="bg-[#FAFBFF] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background subtle pattern or blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header */}
        <header className="mb-32 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6" data-aos="fade-right">
              <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
              <span className="text-sm text-sky-600 font-bold uppercase tracking-[0.3em]">
                Client Partnership
              </span>
            </div>

            <h1
              data-aos="fade-up"
              className="text-[54px] md:text-[90px] font-bold text-[#05183D] leading-[0.85] mb-0 tracking-tighter"
            >
              For Clients<span className="text-sky-500">.</span>
            </h1>
          </div>

          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-slate-500 text-lg md:text-xl max-w-[400px] leading-relaxed font-medium border-l-4 border-sky-100 pl-8"
          >
            Aventra³ helps organisations build and scale capability across AI,
            Web3, crypto and regulated fintech.
          </p>
        </header>

        {/* Structured Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-16">
          {features.map((item, idx) => (
            <ClientFeatureCard
              key={idx}
              {...item}
              index={idx}
              isEven={idx % 2 !== 0}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
