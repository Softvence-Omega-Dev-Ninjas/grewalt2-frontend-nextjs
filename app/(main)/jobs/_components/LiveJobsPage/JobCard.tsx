"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface JobCardProps {
  title: string;
  location: string;
  description: string;
  type: string;
  category: string;
  index: number;
}

const JobCard = ({
  title,
  location,
  description,
  type,
  category,
  index,
}: JobCardProps) => {
  return (
    <motion.div
      // AOS "fade-up" initial state
      initial={{ opacity: 0, y: 50 }}
      // Joto bar view-te ashbe toto bar e animate hobe
      whileInView={{ opacity: 1, y: 0 }}
      // Key Fix: once: false mane prothibarer por-o animation hobe
      // amount: 0.2 mane card-er 20% dekha gele animation start hobe
      viewport={{ once: false, amount: 0.2 }}
      // Index based staggered delay
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1, // proti row-te stagger reset hobe
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-col h-full group transition-all"
    >
      <h3 className="text-[22px] font-bold text-[#05183D] mb-2  group-hover:text-[#2F8BDD] transition-colors">
        {title}
      </h3>

      <div className="flex items-center gap-2 text-slate-400 text-sm mb-5 font-medium">
        <MapPin size={16} className="text-[#2F8BDD]" />
        <span>{location}</span>
      </div>

      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="px-4 py-1.5 bg-[#2F8BDD] text-white text-[12px] font-bold rounded-lg uppercase tracking-wider">
          {type}
        </span>
        <span className="px-4 py-1.5 bg-[#2F8BDD] text-white text-[12px] font-bold rounded-lg uppercase tracking-wider">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

export default JobCard;
