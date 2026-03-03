"use client";

import Image from "next/image";
import bgImage from "@/public/contact/bgOne.png";
// Apnar bitcoin/insight image-er path-ta ekhane din
import insightFeatureImg from "@/public/newImg/insight/insDetl.png";

const InsightsDetails = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className=" w-full bg-white flex flex-col">
      {/* 1. Background Header Section (No Text) */}
      <section
        className="relative w-full pt-40 pb-60 px-6 overflow-hidden"
        style={bgStyle}
      >
        {/* Dark Navy to White Gradient Overlay */}
        <div className="absolute inset-0 h-full z-0 bg-gradient-to-b from-[#021335] via-[#021335]/40 to-white" />
      </section>

      {/* 2. Image Section (Centered) */}
      <section className="relative w-full px-6 pb-24 -mt-48 z-20 flex justify-center">
        <div className="max-w-7xl w-full">
          {/* The main image from your picture */}
          <div className="relative w-full rounded-md overflow-hidden shadow-2xl  bg-[#0D1B3E]">
            <Image
              src={insightFeatureImg}
              alt="Insight Detail"
            //   layout="responsive"
              className="object-cover w-full h-[60vh]" 
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsightsDetails;
