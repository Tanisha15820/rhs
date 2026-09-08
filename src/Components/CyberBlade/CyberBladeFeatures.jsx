import React from "react";
import {
  Sliders,
  PlayCircle,
  Gauge,
  Scissors,
  Crosshair,
  ShieldCheck,
  Zap,
  CheckCircle,
} from "lucide-react";

const CyberBladeFeatures = () => {
  const controls = [
    {
      icon: Sliders,
      title: "Suction Adjustment Lever",
      location: "Top Ergonomic Lever",
      description:
        "Smooth proportional lever for real-time fine regulation of aspiration rate during tissue extraction without looking away.",
    },
    {
      icon: PlayCircle,
      title: "Dual Blade Activation Buttons",
      location: "Forefinger & Thumb Placement",
      description:
        "Instant tactile trigger to start and pause blade oscillation with minimal finger fatigue during extended procedures.",
    },
    {
      icon: Gauge,
      title: "Speed Regulation Switch",
      location: "Rear Rotary Dial",
      description:
        "Allows swift adjustment of blade oscillating cycles to match tissue density (soft adenoma vs fibrotic tissue).",
    },
  ];

  const bladeInnovations = [
    {
      title: "Oscillating Blade Motion",
      desc: "High-frequency back-and-forth oscillation cleanly slices adenoma without spinning or wrapping tissue around the shaft.",
    },
    {
      title: "Anti-Detachment Window Geometry",
      desc: "Specially engineered distal cutting window maintains continuous contact with tissue chunks, preventing lost loose fragments in the bladder.",
    },
    {
      title: "4.5 mm (13.5 Fr) Outer Diameter",
      desc: "Ultra-slim 370 mm length profile slides easily through standard 22 Charr. nephroscopes and morcescopes.",
    },
    {
      title: "Always Razor-Sharp",
      desc: "Brand-new factory sharpened single-use blade for every case ensures peak resection velocity and zero stall risk.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Ergonomic Handpiece Architecture
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Precision Controls &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Optimized Blade Design
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Engineered from surgeon feedback. Intuitive handpiece layout puts full suction,
            speed, and blade activation directly under your fingertips.
          </p>
        </div>

        {/* 3 Handpiece Controls Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {controls.map((ctrl, idx) => {
            const Icon = ctrl.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E1ECF6] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {ctrl.location}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-extrabold text-[#102A43]">
                    {ctrl.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {ctrl.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-primary font-semibold">
                  <CheckCircle className="h-3.5 w-3.5 text-[#20B7AE]" />
                  <span>One-Handed Operation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blade Innovations Grid */}
        <div className="mt-12 rounded-3xl border border-[#DCE9F6] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Advanced Cutting Mechanics
              </span>
              <h3 className="text-xl font-extrabold text-[#102A43] mt-0.5">
                Oscillating Blade & Anti-Detachment Window
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-50 text-primary border border-blue-200 px-3 py-1 text-xs font-bold font-mono">
                Blade ⌀ 4.5 mm (13.5 Fr)
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bladeInnovations.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all hover:bg-white hover:border-slate-200"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#20B7AE] mb-3">
                  <Scissors className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-[#102A43]">{item.title}</h4>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberBladeFeatures;
