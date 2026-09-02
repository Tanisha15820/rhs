import React from "react";
import { Zap, Dumbbell, ShoppingBasket, Target } from "lucide-react";

import fragmentationImage from "../../assets/images/fragmentation.png";

const Fragmentation = () => {
  // Feature cards
  const features = [
    {
      icon: Zap,
      title: "HIGH PULSE ENERGY",
      description: "Up to 35 J, for superior pulse energy.",
    },
    {
      number: "02",
      icon: Dumbbell,
      title: "TREAT ALSO THE HARDEST STONES",
      description: "Greater pulse energy allows to break harder stones.",
    },
    {
      number: "03",
      icon: ShoppingBasket,
      title: "COLLECTION BASKET NEEDED",
      description: "Retrieve stone pieces upon fragmentation.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col items-center px-6 py-16 lg:flex-row lg:px-12 xl:px-16">
        {/*  LEFT SIDE */}
        <div className="z-10 w-full lg:w-[48%] xl:w-[50%]">
          {/* Small Top Heading */}
          <div className="mb-5 flex items-center gap-5">
            <span className="hidden h-[1px] w-14 bg-[#087BFF] sm:block" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white sm:text-sm">
              Precise. Powerful. Controlled.
            </p>

            <span className="hidden h-[1px] w-14 bg-[#087BFF] sm:block" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-5 text-5xl font-black uppercase leading-[0.95] tracking-tight text-transparent sm:text-6xl md:text-7xl xl:text-[65px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text">
              Fragmentation
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[500px] leading-6 text-gray-300 text-sm sm:text-base md:text-md">
            Advanced short pulse technology delivers high pulse energy for
            efficient stone fragmentation. Engineered to treat even the hardest
            stones with precision and control.
          </p>

          {/*FEATURE CARDS*/}
          <div className="space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
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
                    transition-all
                    duration-300
                    hover:border-[#00AFFF]
                    hover:bg-[#07111D]
                    hover:shadow-[0_0_30px_rgba(0,130,255,0.15)]
                  "
                >
                  {/* Icon */}
                  <div className="mx-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#009DFF] bg-black text-[#00AFFF] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,160,255,0.35)]">
                    <Icon size={27} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="py-4 pr-4">
                    <h3 className="mb-1 text-sm font-bold uppercase text-[#1682FF] sm:text-base">
                      {feature.title}
                    </h3>

                    <p className="max-w-[350px] text-sm leading-5 text-gray-300 sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Blue glow on hover */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE*/}
        <div className="relative mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-[52%] xl:w-[50%]">
          {/* Outer Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#006DFF]/10 blur-[100px] sm:h-[550px] sm:w-[550px]" />

          {/* Main Image */}
          <img
            src={fragmentationImage}
            alt="Laser stone fragmentation"
            className="
      relative
      z-10
      w-full
      max-w-[700px]
      translate-x-6
      translate-y-8
      object-contain
      drop-shadow-[0_0_35px_rgba(0,120,255,0.25)]
      lg:translate-x-10
      lg:translate-y-20
    "
          />
        </div>
      </div>
    </section>
  );
};

export default Fragmentation;
