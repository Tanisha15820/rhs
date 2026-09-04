import React from "react";
import { Zap, Dumbbell, ShoppingBasket } from "lucide-react";
import fragmentationImage from "../../assets/images/litho35_fragmentation.png";

const Litho35Fragmentation = () => {
  const features = [
    {
      icon: Zap,
      title: "HIGH PULSE ENERGY",
      description: "Up to 5 J, for superior pulse energy range.",
    },
    {
      icon: Dumbbell,
      title: "TREAT ALSO THE HARDEST STONES",
      description: "Greater pulse energy allows to break harder stones.",
    },
    {
      icon: ShoppingBasket,
      title: "COLLECTION BASKET NEEDED",
      description: "Retrieve stone pieces upon fragmentation.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white py-16">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-center px-6 lg:flex-row lg:px-12 xl:px-16">
        {/* Left Content */}
        <div className="z-10 w-full lg:w-[48%] xl:w-[50%]">
          <div className="mb-5 flex items-center gap-5">
            <span className="hidden h-[1px] w-14 bg-[#087BFF] sm:block" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#21C8F6] sm:text-sm">
              Short Pulse Technology
            </p>
            <span className="hidden h-[1px] w-14 bg-[#087BFF] sm:block" />
          </div>

          <h2 className="mb-5 text-4xl font-black uppercase leading-[1.0] tracking-tight sm:text-5xl md:text-6xl xl:text-[60px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Fragmentation
            </span>
          </h2>

          <p className="mb-8 max-w-[520px] text-sm leading-6 text-gray-300 sm:text-base">
            High pulse energy delivers aggressive disruption tailored for large
            and extremely dense stones. Provides precise, high-impact force to
            fracture stones into retrievable fragments.
          </p>

          {/* Feature Cards */}
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

        {/* Right Side Visual */}
        <div className="relative mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-[52%] xl:w-[50%]">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-[#006DFF]/15 blur-[100px] sm:h-[500px] sm:w-[500px]" />
          <img
            src={fragmentationImage}
            alt="Litho 35 Stone Fragmentation"
            className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_0_35px_rgba(0,120,255,0.3)] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Litho35Fragmentation;
