// components/InsightCard.tsx
"use client";
// import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface InsightCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string | StaticImageData;
  tags: string[];
  index: number;
}

const InsightCard = ({
  title,
  description,
  date,
  readTime,
  image,
  tags,
  index,
}: InsightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex flex-col group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Floating Tags */}
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#05183D] rounded-md uppercase tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="inline-block px-2 py-0.5 bg-slate-100 rounded text-[11px] font-semibold text-slate-500">
          {date} • {readTime}
        </div>
        <h3 className="text-[20px] font-bold text-[#05183D] leading-tight group-hover:text-[#2F8BDD] transition-colors font-bomstad">
          {title}
        </h3>
        <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3 font-sans">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InsightCard;
