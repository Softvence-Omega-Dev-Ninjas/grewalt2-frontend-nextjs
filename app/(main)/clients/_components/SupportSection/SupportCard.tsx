"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface SupportCardProps {
  icon: "zap" | "users" | "sparkles";
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}

const icons = {
  zap: <Zap className="w-10 h-10 text-sky-400 fill-sky-400/20" />,
  users: <Users className="w-10 h-10 text-sky-400 fill-sky-400/20" />,
  sparkles: <Sparkles className="w-10 h-10 text-sky-400 fill-sky-400/20" />,
};

export const SupportCard = ({
  icon,
  title,
  description,
  buttonText,
  delay,
}: SupportCardProps) => {
  const route = useRouter()
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center text-center px-8 py-12 border-x first:border-l-0 last:border-r-0 border-slate-200 h-full"
    >
      <div className="mb-8 p-4 rounded-2xl bg-sky-50 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
        {icons[icon]}
      </div>

      <h3 className="text-2xl font-bold text-[#0F172A] mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow max-w-[280px]">
        {description}
      </p>

      <button
        onClick={() => route.push("jobs")}
        className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#3B82F6] font-semibold text-sm hover:bg-white hover:shadow-sm transition-all group"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
