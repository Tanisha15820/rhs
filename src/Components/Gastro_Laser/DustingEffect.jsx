import React from "react";
import { Clock3, Anchor, ShoppingBasket } from "lucide-react";
import dustingEffectImage from "../../assets/images/dusting.png";

const DustingEffect = () => {
  const features = [
    {
      icon: Clock3,
      title: "LONG PULSE WIDTH",
      description: "Up to 1100 μs, for smooth and controlled ablation.",
    },
    {
      icon: Anchor,
      title: "LIMITED RETROPULSION",
      description: "Easy ablation with no need to chase the stone.",
    },
    {
      icon: ShoppingBasket,
      title: "NO NEED FOR BASKET",
      description: "The obtained fine dust eliminates the retrieval phase.",
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
              Advanced Ablation Technology
            </p>

            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-[64px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Dusting Effect
            </span>
          </h1>

          {/* Description */}
          <p className="relative z-20 mb-3 max-w-[500px] leading-6 text-gray-300 text-sm sm:text-base">
            Vapor Tunnel technology creates a fine dust effect that efficiently
            disintegrates stones into microscopic particles for easier clearance
            and improved outcomes.
          </p>

          {/* IMAGE AREA */}
          <div className="relative mt-[-5px] flex min-h-[420px] w-full items-end justify-center sm:min-h-[500px] lg:mt-[-20px] lg:justify-start">
            {/* Image Glow */}
            <div className="pointer-events-none absolute bottom-4 left-[18%] h-[400px] w-[480px] rounded-full bg-[#006DFF]/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

            {/* Main Dusting Image */}
            <img
              src={dustingEffectImage}
              alt="Laser dusting effect"
              className="
                relative
                z-10
                w-full
                max-w-[650px]
                translate-x-[-2%]
                translate-y-2
                object-contain
                drop-shadow-[0_0_35px_rgba(0,120,255,0.28)]
                sm:max-w-[700px]
                lg:translate-x-[-5%]
                lg:translate-y-4
                xl:max-w-[740px]
              "
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative z-20 mt-8 flex w-full flex-col justify-center gap-3 lg:mt-16 lg:w-[42%] lg:pl-5 xl:w-[50%] xl:pl-8">
          {features.map((feature, index) => {
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
                <div className="ml-4 flex-1 py-4 pr-10 sm:ml-5">
                  <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-[#1682FF] sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="max-w-[310px] text-xs leading-5 text-gray-300 sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Hover Glow */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-[#00AFFF] transition-all duration-500 group-hover:w-full" />

                {/* Left Glow */}
                <div className="pointer-events-none absolute left-0 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-[#087BFF]/0 blur-md transition-all duration-300 group-hover:bg-[#087BFF]/70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DustingEffect;
