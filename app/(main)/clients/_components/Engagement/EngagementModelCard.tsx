"use client";
import { motion } from "framer-motion";
import { ArrowRight, Target, Workflow, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  delay: number;
}

const iconMap = {
  "Talent Search": <Target className="w-8 h-8 text-sky-500" />,
  "Embedded Hiring": <Workflow className="w-8 h-8 text-sky-500" />,
  "Specialist Squads": <Rocket className="w-8 h-8 text-sky-500" />,
};

export const EngagementModelCard = ({
  title,
  description,
  features,
  buttonText,
  delay,
}: ServiceCardProps) => {
  const route = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white rounded-[32px] p-8 border border-slate-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] h-full"
    >
      {/* Top Visual Icon */}
      <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-sky-50 transition-colors duration-500">
        {iconMap[title as keyof typeof iconMap] || (
          <Target className="w-8 h-8 text-sky-500" />
        )}
      </div>

      <h3 className="text-[28px] font-bold text-[#05183D] mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-[16px] leading-relaxed mb-8 min-h-[70px]">
        {description}
      </p>

      {/* Feature List with Custom Bullets */}
      <div className="space-y-4 mb-12 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
            <span className="text-slate-600 text-[15px] font-medium leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Modern Button */}
      <button
        onClick={() => route.push("/contact")}
        className="w-full cursor-pointer flex items-center justify-between px-6 py-4 rounded-2xl bg-[#05183D] text-white font-bold text-[15px] group-hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-[#05183D]/10 hover:shadow-sky-200"
      >
        <span>{buttonText}</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>

      {/* Card Decoration for Proportion */}
      <div className="absolute top-4 right-4 text-[60px] font-bold text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
        0{Math.floor(delay * 10) + 1}
      </div>
    </motion.div>
  );
};
