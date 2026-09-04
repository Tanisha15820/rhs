import React from "react";
import { ArrowUpRight, RefreshCw, SprayCan, Box } from "lucide-react";
import recognitionImage from "../../assets/images/litho35_recognition.png";

const Litho35Recognition = () => {
  const features = [
    {
      icon: ArrowUpRight,
      title: "AVAILABLE DIAMETERS",
      description: "200, 272, 365, 550, 800 and 1000 µm",
    },
    {
      icon: RefreshCw,
      title: "REUSABILITY",
      description:
        "All fibers are available both as disposable and reusable (except ball tip model).",
    },
    {
      icon: SprayCan,
      title: "CLEANING",
      description:
        "Reusable fibers can be sterilized by Sterrad® and steam sterilization.",
    },
    {
      icon: Box,
      title: "STERILIZATION TRAY",
      description: "A dedicated fiber and tool sterilization tray is available.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[20%] top-[55%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006DFF]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 sm:px-10 lg:flex-row lg:items-center lg:px-12 xl:px-16">
        {/* Left Side: Sensor Visual */}
        <div className="relative flex w-full items-center justify-center lg:w-[50%]">
          <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full border border-[#087BFF]/20 shadow-[0_0_80px_rgba(0,109,255,0.15)] sm:h-[460px] sm:w-[460px]" />

          <div className="relative z-10 w-full max-w-[500px]">
            <img
              src={recognitionImage}
              alt="Litho Fiber Recognition Sensor Port"
              className="relative z-10 w-full object-contain drop-shadow-[0_0_35px_rgba(0,120,255,0.3)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Side: Description & Cards */}
        <div className="relative z-20 mt-10 flex w-full flex-col lg:mt-0 lg:w-[50%] lg:pl-8 xl:pl-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#21C8F6] sm:text-xs">
              Smart RFID Fiber Sensing
            </p>
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase leading-[1.0] tracking-tight sm:text-5xl md:text-6xl xl:text-[60px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Fiber Recognition
            </span>
          </h2>

          <p className="relative z-20 mb-7 max-w-[500px] text-sm leading-6 text-gray-300 sm:text-base">
            The Litho automatically adjusts the emission settings based on fiber
            diameter and selected mode, preventing fiber damage and ensuring
            maximum energy transfer efficiency.
          </p>

          <div className="space-y-3.5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
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
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-300 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litho35Recognition;
