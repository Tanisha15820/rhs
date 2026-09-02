import React from "react";
import { Cable, CircleDot, Sparkles } from "lucide-react";
import fibersImage from "../../assets/images/fiber.png";

const Fibers = () => {
  const features = [
    {
      icon: Cable,
      title: "STANDARD FIBERS",
      description:
        "For general use in stone and soft-tissue treatments. High power emission already with small fibers.",
    },
    {
      icon: CircleDot,
      title: "BALL TIP FIBERS",
      description: "Strongly simplify the insertion in already bent scopes.",
    },
    {
      icon: Sparkles,
      title: "SPECIAL FIBERS",
      description: "Specifically designed for fragmentation of gallstones.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[28%] top-[55%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006DFF]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:px-12 xl:px-16">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative z-10 flex w-full flex-col lg:w-[58%] xl:w-[60%]">
          {/* Small Top Heading */}
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white sm:text-xs">
              Advanced Fiber Technology
            </p>

            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-[64px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Fibers
            </span>
          </h1>

          {/* Description */}
          <p className="relative z-20 mb-3 max-w-[500px] text-sm leading-6 text-gray-300 sm:text-base">
            Litho EVO fibers can be operated with a large range of fibers,
            depending on the application, flexibility and setting required.
          </p>

          {/* ================= FIBER IMAGE ================= */}
          <div className="relative mt-[-5px] flex min-h-[420px] w-full items-end justify-center sm:min-h-[500px] lg:mt-[-20px] lg:justify-start">
            {/* Image Glow */}
            <div className="pointer-events-none absolute bottom-4 left-[18%] h-[400px] w-[480px] rounded-full bg-[#006DFF]/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

            {/* Image + Callouts */}
            <div className="relative w-full max-w-[650px] sm:max-w-[700px] xl:max-w-[740px]">
              {/* Main Fiber Image */}
              <img
                src={fibersImage}
                alt="Advanced laser fibers"
                className="
                  relative
                  z-10
                  w-full
                  object-contain
                  drop-shadow-[0_0_35px_rgba(0,120,255,0.28)]
                "
              />

              {/* JACKET CALLOUT */}
              <div className="pointer-events-none absolute left-[55%] top-[70%] z-20 hidden lg:block">
                {/* Point Circle */}
                <span className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full border border-white bg-transparent" />

                {/* Horizontal Line */}
                <span className="absolute left-[7px] top-[3px] h-[1px] w-[30px] bg-white" />

                {/* Vertical Line */}
                <span className="absolute left-[37px] top-[3px] h-[18px] w-[1px] bg-white" />

                {/* Label */}
                <div className="absolute left-[43px] top-[15px] w-[160px]">
                  <h4 className="text-[13px] font-bold uppercase text-[#1682FF]">
                    JACKET
                  </h4>

                  <p className="mt-[2px] text-[10px] leading-[11px] text-gray-300">
                    Helps in recognizing fiber position
                    <br />
                    and improves probe stiffness.
                  </p>
                </div>
              </div>

              {/* CLADDING CALLOUT */}
              <div className="pointer-events-none absolute left-[40%] top-[80%] z-20 hidden lg:block">
                {/* Point Circle */}
                <span className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full border border-white bg-transparent" />

                {/* Horizontal Line */}
                <span className="absolute left-[7px] top-[3px] h-[1px] w-[35px] bg-white" />

                {/* Vertical Line */}
                <span className="absolute left-[42px] top-[3px] h-[20px] w-[1px] bg-white" />

                {/* Label */}
                <div className="absolute left-[48px] top-[17px] w-[160px]">
                  <h4 className="text-[13px] font-bold uppercase text-[#1682FF]">
                    CLADDING
                  </h4>

                  <p className="mt-[2px] text-[10px] leading-[11px] text-gray-300">
                    Maintains radiation energy
                    <br />
                    within the core.
                  </p>
                </div>
              </div>

              {/* FIBER CORE CALLOUT */}
              <div className="pointer-events-none absolute left-[26%] top-[90%] z-20 hidden lg:block">
                {/* Point Circle */}
                <span className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full border border-white bg-transparent" />

                {/* Vertical Line */}
                <span className="absolute left-[3px] top-[7px] h-[28px] w-[1px] bg-white" />

                {/* Horizontal Line */}
                <span className="absolute left-[3px] top-[35px] h-[1px] w-[30px] bg-white" />

                {/* Label */}
                <div className="absolute left-[38px] top-[29px] w-[160px]">
                  <h4 className="text-[13px] font-bold uppercase text-[#1682FF]">
                    FIBER CORE
                  </h4>

                  <p className="mt-[2px] text-[10px] leading-[11px] text-gray-300">
                    Delivers fiber energy to the target.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative z-20 mt-8 flex w-full flex-col justify-center gap-3 lg:mt-16 lg:w-[42%] lg:pl-5 xl:w-[50%] xl:pl-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  flex
                  min-h-[105px]
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#087BFF]/70
                  bg-[#050A11]
                  px-4
                  transition-all
                  duration-300
                  hover:border-[#00AFFF]
                  hover:bg-[#07111D]
                  hover:shadow-[0_0_30px_rgba(0,130,255,0.15)]
                  sm:min-h-[112px]
                  sm:px-5
                "
              >
                {/* Icon Circle */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#009DFF]
                    bg-black
                    text-[#00AFFF]
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:shadow-[0_0_20px_rgba(0,160,255,0.35)]
                    sm:h-16
                    sm:w-16
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="ml-4 flex-1 py-4 pr-4 sm:ml-5">
                  <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-[#1682FF] sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="max-w-[310px] text-xs leading-5 text-gray-300 sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Hover Glow */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />

                {/* Left Hover Glow */}
                <div className="pointer-events-none absolute left-0 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-[#087BFF]/0 blur-md transition-all duration-300 group-hover:bg-[#087BFF]/70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fibers;
