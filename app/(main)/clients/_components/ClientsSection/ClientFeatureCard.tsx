"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  delay: number;
  isEven: boolean;
  index: number; 
}

export const ClientFeatureCard = ({
  title,
  subtitle,
  image,
  delay,
  isEven,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col bg-white rounded-[2rem] p-4 pb-10 border border-slate-100 hover:border-sky-200 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] ${
        isEven ? "md:mt-20" : "" 
      }`}
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
        <span className="text-[120px] font-black leading-none select-none">
          0{index + 1}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-8 shadow-sm">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05183D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* Floating Tag over Image */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#05183D] shadow-sm">
            Aventra³ Insight
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-sky-500 group-hover:w-16 transition-all duration-500"></div>
          <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.2em]">
            Strategy
          </span>
        </div>

        <h3 className="text-3xl font-bold text-[#05183D] mb-4 tracking-tighter leading-tight group-hover:text-sky-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-[90%]">
          {subtitle}
        </p>

        {/* Decorative arrow that appears on hover */}
        <div className="mt-8 flex items-center gap-2 text-sky-500 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <span>Read detail</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
};
