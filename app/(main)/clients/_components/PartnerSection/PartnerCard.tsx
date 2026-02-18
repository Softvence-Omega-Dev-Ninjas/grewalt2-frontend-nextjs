"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface PartnerCardProps {
  title: string;
  description: string;
  image?: StaticImageData;
  tag?: string;
  delay: number;
}

export const PartnerCard = ({
  title,
  description,
  image,
  tag,
  delay,
}: PartnerCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-500 border border-slate-100"
    >
      {image && (
        <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          </motion.div>
          {tag && (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-lg">
              {tag}
            </span>
          )}
        </div>
      )}
      <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};
