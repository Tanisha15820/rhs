import {
  Zap,
  Users,
  Settings,
  Target,
  CircleDot,
} from "lucide-react";

import holmiumMachine from "../../assets/images/holium_machine.png";

const HolmiumSection = () => {
  const features = [
    {
      icon: CircleDot,
      title: "Double Footswitch",
      description: "Hands-free dual control for seamless procedure transitions.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Powerful output even with small fibers for precise targeting.",
    },
    {
      icon: Users,
      title: "Saving of Settings",
      description: "Store and recall custom profiles for each practitioner.",
    },
    {
      icon: Settings,
      title: "MasterPulse",
      description: "7-step pulse duration adjustment for tailored energy delivery.",
    },
    {
      icon: Target,
      title: "Guide Settings",
      description: "Optimized presets designed specifically for urology procedures.",
    },
  ];

  return (
    <section className="bg-[#f4f8ff] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7] sm:text-sm">
              Advanced Holmium Laser System
            </p>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Beyond standard{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              low power.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base sm:leading-7">
            Engineered for precision and efficiency, our low power Holmium laser
            delivers reliable performance for a wide range of clinical
            applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Machine Image */}
          <div className="relative flex items-center justify-center">
            {/* Decorative background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8f4fd] to-[#f0f4ff] opacity-60" />

            <img
              src={holmiumMachine}
              alt="Holmium Laser System"
              className="relative z-10 h-[350px] w-full max-w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(25,168,232,0.12)] md:h-[415px]"
            />
          </div>

          {/* RIGHT - Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* First 4 features in 2x2 grid */}
            {features.slice(0, 4).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#e2eafa] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#19A8E8]/30 hover:shadow-[0_12px_32px_rgba(25,168,232,0.1)]"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#e8f4fd] to-[#f0f8ff] text-[#19A8E8] transition-colors duration-300 group-hover:from-[#19A8E8] group-hover:to-[#2525B8] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-sm font-bold text-[#102A43] sm:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-[#697A94] sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>
                </div>
              );
            })}

            {/* 5th feature spans full width */}
            {features.length > 4 && (
              <div className="sm:col-span-2">
                {(() => {
                  const feature = features[4];
                  const Icon = feature.icon;

                  return (
                    <div className="group flex items-center gap-5 rounded-2xl border border-[#e2eafa] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#19A8E8]/30 hover:shadow-[0_12px_32px_rgba(25,168,232,0.1)]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e8f4fd] to-[#f0f8ff] text-[#19A8E8] transition-colors duration-300 group-hover:from-[#19A8E8] group-hover:to-[#2525B8] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#102A43] sm:text-base">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[#697A94] sm:text-sm sm:leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolmiumSection;
