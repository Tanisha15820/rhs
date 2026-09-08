import React from "react";
import {
  ShieldAlert,
  Lock,
  Workflow,
  Droplets,
  Sparkles,
  CheckCircle,
  Gauge,
  Sliders,
  Check,
} from "lucide-react";

const MorcescopeFeatures = () => {
  const features = [
    {
      icon: ShieldAlert,
      title: "Shock Resistant Optical Fibers",
      tagline: "Extended Optical Lifetime",
      description:
        "Specially buffered fiber bundles withstand micro-vibrations and mechanical shocks generated during high-speed tissue morcellation.",
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-primary",
    },
    {
      icon: Lock,
      title: "Quick-Lock Coupling System",
      tagline: "Rapid Instrument Swapping",
      description:
        "Precision engineered snap-on lock enables instant secure attachment of telescopes, working elements, and laser fibers in seconds.",
      color: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Workflow,
      title: "Universal Ø 5mm Working Channel",
      tagline: "Cross-Brand Blade Compatibility",
      description:
        "Generous 5mm lumen fully compatible with standard morcellator blades from Richard Wolf, Lumenis, Karl Storz, and Dornier.",
      color: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50 text-[#20B7AE]",
    },
    {
      icon: Droplets,
      title: "High-Flow Continuous Irrigation",
      tagline: "Crystal-Clear Operative Field",
      description:
        "Dedicated supplementary inflow port guarantees continuous high-volume fluid irrigation, maintaining superior visibility throughout the case.",
      color: "from-sky-500 to-primary",
      accentBg: "bg-sky-50 text-sky-600",
    },
  ];

  const bladeBrands = ["Richard Wolf", "Lumenis", "Karl Storz", "Dornier"];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Engineering Advantages
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Designed for{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Speed, Safety & Ergonomics
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Every component of the RZ Morcescope system is tuned for surgical ease,
            lowering operator fatigue and maximizing procedural efficiency.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E3EDF7] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(25,168,232,0.12)]"
              >
                <div>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accentBg} transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.tagline}
                  </span>

                  <h3 className="mt-1 text-base font-extrabold text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#20B7AE]">
                  <Check className="h-3.5 w-3.5" />
                  <span>RZ Premium Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Universal Morcellator Blade Compatibility Callout */}
        <div className="mt-12 rounded-3xl border border-[#DCE9F6] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Universal Morcellation Interface
              </span>
              <h3 className="text-xl font-extrabold text-[#102A43] mt-1">
                Compatible with Leading Morcellator Systems
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                The standard 5mm working channel connects seamlessly with all standard surgical blades,
                eliminating proprietary blade lock-in.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {bladeBrands.map((brand, idx) => (
                <span
                  key={idx}
                  className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorcescopeFeatures;
