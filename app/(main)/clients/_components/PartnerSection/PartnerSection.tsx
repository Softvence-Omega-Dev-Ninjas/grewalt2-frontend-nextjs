"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Your specific image imports
import imgAI from "@/public/service/scope.jpg";
import imgWeb3 from "@/public/clients/protocol.jpg";
import imgGTM from "@/public/clients/industry.jpg";
import oneCall from "@/public/clients/one-call.jpg";

export default function PartnerSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-quart",
    });
  }, []);

  const gridPartners = [
    {
      title: "Implementation partners",
      description:
        "AI product build, MLOps foundations and tooling integration.",
      image: imgAI,
      tag: "AI & Data",
    },
    {
      title: "Protocol & app studios",
      description:
        "Smart contract development, audits, security review and launch support.",
      image: imgWeb3,
      tag: "Web3",
    },
    {
      title: "Industry specialists",
      description:
        "Marketing, partnerships, community and market entry support — aligned to your sector.",
      image: imgGTM,
      tag: "Go-to-market",
    },
    {
      title: "One call → curated introductions",
      description:
        "We understand your goals and constraints (timeline, budget, risk), then connect you with carefully curated partners — no directories, just the right matches.",
      image: oneCall, // Replace with your specific 'One call' image
      tag: "How partner intros work",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2
            data-aos="fade-right"
            className="text-[56px] font-bold text-[#0F172A] tracking-tighter leading-none"
          >
            Partner network
          </h2>

          <div data-aos="fade-left" className="max-w-md">
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We have strong partners across industries and capabilities. If you
              need support beyond hiring — we can connect you to trusted
              specialists and delivery teams.
            </p>
            <button className="px-8 py-3 cursor-pointer rounded-xl border border-slate-200 text-[#3B82F6] font-bold text-sm hover:bg-slate-50 transition-all">
              Ask for an intro
            </button>
          </div>
        </header>

        {/* 2-Column Grid as per the 'Partner Network' Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {gridPartners.map((partner, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 150}
              className="group cursor-pointer"
            >
              {/* Image Container with Tag */}
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-8 bg-slate-100 shadow-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

                {/* Floating Tag */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F172A] text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {partner.tag}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 tracking-tight">
                {partner.title}
              </h3>
              <p className="text-slate-500 text-[16px] leading-relaxed max-w-[90%] font-medium">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
