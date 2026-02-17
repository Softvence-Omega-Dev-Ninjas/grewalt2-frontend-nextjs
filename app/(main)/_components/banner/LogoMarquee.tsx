"use client";

const LogoMarquee = () => {
  const logos = Array(10).fill(null);

  return (
    <div className="w-full bg-[#05183D] py-10 mt-20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Trusted by 100+ Companies Worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((_, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              {/* এখানে লোগো ইমেজ হবে */}
              <div className="h-8 w-32 bg-slate-400/20 rounded-md flex items-center justify-center text-white font-bold tracking-widest text-xl italic">
                LOGO {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for Seamless Loop */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center">
          {logos.map((_, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="h-8 w-32 bg-slate-400/20 rounded-md flex items-center justify-center text-white font-bold tracking-widest text-xl italic">
                LOGO {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
