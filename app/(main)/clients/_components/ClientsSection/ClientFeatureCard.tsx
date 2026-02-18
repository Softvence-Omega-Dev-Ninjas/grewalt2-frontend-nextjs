"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  delay: number;
}

export const ClientFeatureCard = ({
  title,
  subtitle,
  image,
  delay,
}: FeatureCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col sm:flex-row items-center gap-6 group"
    >
      {/* Image Side */}
      <div className="relative w-full sm:w-1/2 aspect-[16/10] overflow-hidden rounded-xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-full"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Text Side */}
      <div className="w-full sm:w-1/2">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-slate-500 font-medium text-lg">{subtitle}</p>
      </div>
    </div>
  );
};
