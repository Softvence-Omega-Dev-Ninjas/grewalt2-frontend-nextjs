"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Your specific image imports
import imgAI from "@/public/service/scope.jpg";
import imgWeb3 from "@/public/clients/protocol.jpg";
import imgGTM from "@/public/clients/industry.jpg";
import oneCall from "@/public/clients/one-call.jpg";

export default function PartnerSection() {
  const route = useRouter();

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
        "Marketing, partnerships, community and market entry support.",
      image: imgGTM,
      tag: "Go-to-market",
    },
    {
      title: "One call → curated introductions",
      description:
        "We understand your goals and connect you with carefully curated partners — no directories, just the right matches.",
      image: oneCall,
      tag: "Network",
    },
  ];

  return (
    <section className="bg-[#FDFDFD] py-32 px-6 md:px-12 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header Section */}
        <header className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-sky-500 rounded-full"></span>
              <span className="text-sm font-bold text-sky-600 uppercase tracking-widest">
                Global Ecosystem
              </span>
            </div>
            <h2 className="text-[50px] md:text-[80px] font-bold text-[#05183D] leading-[0.9] tracking-tighter">
              The Partner <br />{" "}
              <span className="text-slate-400">Network.</span>
            </h2>
          </div>

          <div data-aos="fade-left" className="max-w-md pb-4">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              We connect you beyond hiring. Access our trusted ecosystem of
              specialists and delivery teams to accelerate your growth.
            </p>
            <button
              onClick={() => route.push("/contact")}
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#05183D] text-white rounded-full font-bold text-sm transition-all hover:bg-sky-600 shadow-xl shadow-slate-200"
            >
              Ask for an intro
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </header>

        {/* Asymmetric & Aesthetic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {gridPartners.map((partner, idx) => (
            <motion.div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col bg-white rounded-[32px] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${
                idx === 1 || idx === 3 ? "md:mt-12" : "" // Alternating vertical offset
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05183D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Frosted Glass Tag */}
                <span className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl">
                  {partner.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#05183D] mb-4 tracking-tight leading-tight">
                  {partner.title}
                </h3>
                <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                  {partner.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sky-500 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
