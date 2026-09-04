import React from "react";
import { Clock3, Anchor, Sparkles } from "lucide-react";
import dustingImage from "../../assets/images/litho35_dusting.png";

const Litho35DustingEffect = () => {
  const features = [
    {
      icon: Clock3,
      title: "LONG PULSE WIDTH",
      description: "Up to 1500 µs, for smooth ablation and steady energy delivery.",
    },
    {
      icon: Anchor,
      title: "LIMITED RETROPULSION",
      description: "Easy ablation with no need to fetch stone during treatment.",
    },
    {
      icon: Sparkles,
      title: "NO NEED FOR BASKET",
      description: "The obtained fine dust obviates the retrieval phase completely.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[30%] top-[55%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006DFF]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 sm:px-10 lg:flex-row lg:items-center lg:px-12 xl:px-16">
        {/* Left Side */}
        <div className="relative z-10 flex w-full flex-col lg:w-[56%] xl:w-[58%]">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#21C8F6] sm:text-xs">
              Long Pulse Technology
            </p>
            <span className="h-[1px] w-12 bg-[#087BFF] sm:w-14" />
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase leading-[1.0] tracking-tight sm:text-5xl md:text-6xl xl:text-[60px]">
            <span className="bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] bg-clip-text text-transparent">
              Dusting Effect
            </span>
          </h2>

          <p className="relative z-20 mb-3 max-w-[500px] text-sm leading-6 text-gray-300 sm:text-base">
            Long pulse width minimizes stone retropulsion and creates an ultrathin
            vapor layer, pulverizing urinary stones into micronized dust that
            passes naturally without basket retrieval.
          </p>

          <div className="relative mt-2 flex min-h-[400px] w-full items-center justify-center lg:justify-start">
            <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-[#006DFF]/15 blur-[100px] sm:h-[480px] sm:w-[480px]" />
            <img
              src={dustingImage}
              alt="Litho 35 Dusting Effect"
              className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_0_35px_rgba(0,120,255,0.3)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="relative z-20 mt-8 flex w-full flex-col justify-center gap-3.5 lg:mt-0 lg:w-[44%] lg:pl-6 xl:w-[42%] xl:pl-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative flex min-h-[100px] items-center overflow-hidden rounded-xl border border-[#087BFF]/60 bg-[#050A11] px-5 py-3 transition-all duration-300 hover:border-[#00AFFF] hover:bg-[#07111D] hover:shadow-[0_0_30px_rgba(0,130,255,0.2)]"
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
    </section>
  );
};

export default Litho35DustingEffect;
