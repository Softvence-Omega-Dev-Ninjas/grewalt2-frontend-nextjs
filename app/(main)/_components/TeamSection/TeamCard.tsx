"use client";
// import React from "react";
import Image, { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  index: number;
}

const TeamCard = ({ name, role, image, index }: TeamMemberProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative w-full max-w-[320px] aspect-[4/5] rounded-[14px] overflow-hidden group bg-white"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 24, 61, 0) 40%, rgba(111, 222, 247, 0.6) 85%, rgba(47, 139, 221, 0.9) 100%)",
        }}
      >
        <h3 className="font-bomstad text-[24px] font-bold text-white leading-tight">
          {name}
        </h3>
        <p className="text-white/90 text-[14px] font-medium mt-1">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
