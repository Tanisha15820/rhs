import React from "react";
import { Zap, Dumbbell, ShoppingBasket } from "lucide-react";

import fragmentationImage from "../../assets/images/fragmentation.png";

const Fragmentation = () => {
  const features = [
    {
      number: "01",
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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]" />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          flex-col
          items-center
          px-4
          py-12
          sm:px-6
          sm:py-16
          lg:flex-row
          lg:px-12
          lg:py-16
          xl:px-16
        "
      >
        {/* LEFT CONTENT */}
        <div className="z-10 w-full lg:w-[48%] xl:w-[50%]">
          {/* Small Heading */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 sm:gap-5 lg:justify-start">
            <span className="hidden h-[1px] w-10 bg-[#087BFF] sm:block sm:w-14" />

            <p className="text-center text-[9px] font-medium uppercase tracking-[0.22em] text-white sm:text-xs sm:tracking-[0.3em] lg:text-left lg:text-sm lg:tracking-[0.35em]">
              Precise. Powerful. Controlled.
            </p>

            <span className="hidden h-[1px] w-10 bg-[#087BFF] sm:block sm:w-14" />
          </div>

          {/* Main Heading */}
          <h1
            className="
              mb-4
              text-center
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-transparent
              sm:mb-5
              sm:text-5xl
              md:text-6xl
              lg:text-left
              lg:text-7xl
              xl:text-[65px]
            "
          >
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text">
              Fragmentation
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mb-7
              max-w-[500px]
              text-center
              text-sm
              leading-6
              text-gray-300
              sm:mb-8
              sm:text-base
              lg:mx-0
              lg:text-left
            "
          >
            Advanced short pulse technology delivers high pulse energy for
            efficient stone fragmentation. Engineered to treat even the hardest
            stones with precision and control.
          </p>

          {/* FEATURE CARDS */}
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
                    min-h-[95px]
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
                    sm:min-h-[105px]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mx-3
                      flex
                      h-11
                      w-11
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
                      sm:mx-4
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="sm:h-[27px] sm:w-[27px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="py-3 pr-3 sm:py-4 sm:pr-4">
                    <h3 className="mb-1 text-xs font-bold uppercase text-[#1682FF] sm:text-base">
                      {feature.title}
                    </h3>

                    <p className="max-w-[350px] text-xs leading-5 text-gray-300 sm:text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Blue Glow on Hover */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="
            relative
            mt-8
            flex
            w-full
            items-center
            justify-center
            sm:mt-12
            lg:mt-0
            lg:w-[52%]
            xl:w-[50%]
          "
        >
          {/* Image Glow */}
          <div
            className="
              absolute
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#006DFF]/10
              blur-[70px]
              sm:h-[400px]
              sm:w-[400px]
              sm:blur-[90px]
              lg:h-[550px]
              lg:w-[550px]
              lg:blur-[100px]
            "
          />

          {/* Main Image */}
          <img
            src={fragmentationImage}
            alt="Laser stone fragmentation"
            className="
              relative
              z-10
              w-full
              max-w-[430px]
              object-contain
              drop-shadow-[0_0_35px_rgba(0,120,255,0.25)]
              sm:max-w-[550px]
              lg:max-w-[700px]
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
