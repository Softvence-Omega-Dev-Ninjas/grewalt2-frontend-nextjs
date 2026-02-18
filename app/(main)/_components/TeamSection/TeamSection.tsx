"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS ইমপোর্ট করতে ভুলবেন না
import TeamCard from "./TeamCard";
import img1 from "@/public/teamSection/img1.png";
import img2 from "@/public/teamSection/img2.png";
import img3 from "@/public/teamSection/img3.png";
import img4 from "@/public/teamSection/img4.png";
import bgImg from "@/public/teamSection/Svg file 2.svg";

const TeamSection = () => {
  // AOS ইনিশিয়ালাইজেশন
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const team = [
    { name: "Maria Johnson", role: "Senior Executive", image: img1 },
    { name: "John Doe", role: "Senior Executive", image: img2 },
    { name: "Marla Gabriel", role: "Senior Executive", image: img3 },
    { name: "Maria Gabriel", role: "Senior Executive", image: img4 },
  ];

  return (
    <section className="bg-[#05183D] py-20 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/10 opacity-90 pointer-events-none select-none z-0">
        <Image src={bgImg} alt="bg" width={800} height={800} priority />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          {/* Header Animation */}
          <div data-aos="fade-right" className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6FDEF7] shadow-[0_0_15px_#6FDEF7]"></span>
              </div>
              <p className="text-[#6FDEF7] text-[14px] font-medium uppercase tracking-wider">
                Industries We Serve
              </p>
            </div>
            <h2 className="font-bomstad text-[48px] md:text-[60px] font-bold text-white leading-[1.1]">
              The Minds Behind the Mission
            </h2>
          </div>

          {/* Subtext and Button Animation */}
          <div data-aos="fade-left" className="max-w-md">
            <p className="text-slate-300 text-[16px] mb-8 leading-relaxed">
              A specialized collective of industry veterans, talent strategists,
              and tech enthusiasts dedicated to scaling the decentralized world.
            </p>
            <button className="border border-[#6FDEF7]/30 cursor-pointer text-white px-8 py-3 rounded-xl hover:bg-[#6FDEF7] hover:text-[#05183D] transition-all duration-300 font-bold shadow-lg hover:shadow-[#6FDEF7]/20">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>

        {/* Grid loop with index-based AOS delay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamCard key={index} index={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
