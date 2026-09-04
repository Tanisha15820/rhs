import React from "react";
import { Cable, CircleDot, Zap, Sparkles } from "lucide-react";
import fiberImage from "../../assets/images/litho35_fiber.png";

const Litho35Fibers = () => {
  const fiberTypes = [
    {
      icon: Cable,
      title: "STANDARD FIBERS",
      description: "For general use in stone and soft tissue treatments.",
    },
    {
      icon: CircleDot,
      title: "BALL TIP FIBERS",
      description: "Strongly simplify the insertion in already bent flexible scopes.",
    },
    {
      icon: Zap,
      title: "PERFORMANCE FIBERS",
      description: "Designed to deliver great power even with small fibers.",
    },
    {
      icon: Sparkles,
      title: "GASTRO FIBERS",
      description: "Specifically designed for the fragmentation of gallstones.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white py-16">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute left-[28%] top-[55%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006DFF]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 sm:px-10 lg:flex-row lg:items-center lg:px-12 xl:px-16">
        {/* Left Side: Fiber Graphic with Callouts */}
        <div className="relative z-10 flex w-full flex-col lg:w-[58%] xl:w-[60%]">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#21C8F6] sm:text-xs">
              Advanced Silica Fiber Optics
            </p>
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase leading-[1.0] tracking-tight sm:text-5xl md:text-6xl xl:text-[60px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Fibers
            </span>
          </h2>

          <p className="relative z-20 mb-6 max-w-[500px] text-sm leading-6 text-gray-300 sm:text-base">
            Litho device can be operated with a large range of fibers, depending
            on the application, flexibility, and settings required.
          </p>

          {/* Fiber Graphic Container */}
          <div className="relative flex w-full items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px]">
              <img
                src={fiberImage}
                alt="Litho Optical Fiber Construction"
                className="relative z-10 w-full object-contain drop-shadow-[0_0_35px_rgba(0,120,255,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Jacket Callout */}
              <div className="pointer-events-none absolute left-[56%] top-[58%] z-20 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full border border-white bg-[#00AFFF] shadow-[0_0_8px_#00AFFF]" />
                  <div className="h-[1px] w-8 bg-white/70" />
                  <div className="rounded-lg border border-white/20 bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[11px] font-bold text-[#00AFFF]">JACKET:</span>
                    <span className="ml-1 text-[10px] text-gray-300">Stiffness & position</span>
                  </div>
                </div>
              </div>

              {/* Cladding Callout */}
              <div className="pointer-events-none absolute left-[40%] top-[72%] z-20 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full border border-white bg-[#00AFFF] shadow-[0_0_8px_#00AFFF]" />
                  <div className="h-[1px] w-8 bg-white/70" />
                  <div className="rounded-lg border border-white/20 bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[11px] font-bold text-[#00AFFF]">CLADDING:</span>
                    <span className="ml-1 text-[10px] text-gray-300">Confines radiation</span>
                  </div>
                </div>
              </div>

              {/* Core Callout */}
              <div className="pointer-events-none absolute left-[22%] top-[86%] z-20 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full border border-white bg-[#00AFFF] shadow-[0_0_8px_#00AFFF]" />
                  <div className="h-[1px] w-8 bg-white/70" />
                  <div className="rounded-lg border border-white/20 bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[11px] font-bold text-[#00AFFF]">FIBER CORE:</span>
                    <span className="ml-1 text-[10px] text-gray-300">Delivers full energy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 4 Fiber Types */}
        <div className="relative z-20 mt-10 flex w-full flex-col justify-center gap-3.5 lg:mt-0 lg:w-[42%] lg:pl-6 xl:w-[40%] xl:pl-8">
          {fiberTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div
                key={idx}
                className="group relative flex min-h-[96px] items-center overflow-hidden rounded-xl border border-[#087BFF]/60 bg-[#050A11] px-5 py-3 transition-all duration-300 hover:border-[#00AFFF] hover:bg-[#07111D] hover:shadow-[0_0_30px_rgba(0,130,255,0.2)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#009DFF] bg-black text-[#00AFFF] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(0,160,255,0.4)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div className="ml-4 py-1">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#1682FF] sm:text-sm">
                    {type.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-300 sm:text-sm">
                    {type.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Litho35Fibers;
