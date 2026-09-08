import React, { useState } from "react";
import {
  Zap,
  Layers,
  Gauge,
  Scissors,
  Eye,
  Crosshair,
  Sliders,
  Sparkles,
  ChevronRight,
  Target,
  Circle,
  Hexagon,
  Minus,
  Maximize2,
  ShieldCheck,
} from "lucide-react";

import microscanImg from "../../assets/images/microscan_surgical.png";

const IntegratedMicroScan = () => {
  const [activeShape, setActiveShape] = useState("Line");

  const ablationModes = [
    {
      title: "3-D ABLATION",
      badge: "Depth Control",
      description: "Accurate area management with reliable depth control.",
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "FAST ABLATION",
      badge: "High Speed",
      description: "Achieve unparalleled cutting speed and clinical performance.",
      icon: Gauge,
      color: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-500/10 text-cyan-600",
    },
    {
      title: "TURBO CUT",
      badge: "Max Efficiency",
      description: "Speed of cutting performance with minimal peripheral trauma.",
      icon: Zap,
      color: "from-sky-500 to-primary",
      accentBg: "bg-sky-500/10 text-primary",
    },
    {
      title: "LINEAR CUT",
      badge: "Clean Precision",
      description: "Clean cut at strictly controlled penetration depth.",
      icon: Scissors,
      color: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-500/10 text-teal-600",
    },
  ];

  const scanningShapes = [
    {
      name: "Line",
      desc: "Linear ablation & incision",
      render: (
        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
      ),
    },
    {
      name: "Filled Circle",
      desc: "Uniform circular spot vaporization",
      render: (
        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-red-500 to-rose-600 shadow-inner" />
      ),
    },
    {
      name: "Hexagon",
      desc: "Honeycomb coverage geometry",
      render: (
        <div className="relative flex h-8 w-8 items-center justify-center">
          <Hexagon className="h-7 w-7 fill-red-500 text-red-600" />
        </div>
      ),
    },
    {
      name: "Double Ellipse",
      desc: "Interpolated double ellipse",
      render: (
        <div className="flex -space-x-2">
          <div className="h-6 w-8 rounded-full border-2 border-red-500 bg-red-500/20" />
          <div className="h-6 w-8 rounded-full border-2 border-red-600 bg-red-600/40" />
        </div>
      ),
    },
    {
      name: "Point",
      desc: "Ultra-fine single focus point",
      render: (
        <div className="h-3.5 w-3.5 rounded-full bg-red-600 ring-4 ring-red-200" />
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#E3F2FD] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-40 h-[520px] w-[520px] rounded-full bg-[#E0F2FE] opacity-70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Scanner-Assisted Microsurgical Solution
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Integrated{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              μ-Scan
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Extremely fast movement of the laser beam (100 millionths of a second)
            delivering high-precision scanning shapes for cutting and ablating delicate tissue.
          </p>
        </div>

        {/* Main Grid: Machine Art + Key Features */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Product Showcase & Floating Badges (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Background circular radar elements */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-blue-100 sm:h-[460px] sm:w-[460px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[290px] w-[290px] rounded-full border border-blue-200/60" />

            {/* Central Product Image Container */}
            <div className="relative z-10 mx-auto flex h-[340px] w-full max-w-[500px] items-center justify-center p-4 sm:h-[420px]">
              <img
                src={microscanImg}
                alt="Integrated μ-Scan surgical scanner"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(25,168,232,0.18)] transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Card: Fast Beam Movement */}
            <div className="absolute left-2 top-4 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-3.5 shadow-[0_10px_30px_rgba(25,168,232,0.14)] backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#19A8E8] to-[#2525B8] text-white shadow-md">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#19A8E8]">
                  Ultra-Fast Beam
                </p>
                <p className="text-xs font-extrabold text-[#102A43]">
                  100 Millionths of a sec
                </p>
              </div>
            </div>

            {/* Floating Card: Easy Focus System */}
            <div className="absolute -bottom-4 right-2 z-20 max-w-[260px] rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_12px_35px_rgba(30,58,138,0.12)] backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-[#0BA5B1]">
                  <Crosshair className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-[#102A43]">
                  Easy Focus System
                </h4>
              </div>
              <p className="mt-2 text-[11px] leading-4 text-slate-600">
                Single-ring focus/defocus system with focus point memory and full HOLO zoom optics.
              </p>
            </div>
          </div>

          {/* Right Column: Easy Focus & Ablation Modalities (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Easy Focus Card */}
            <div className="rounded-3xl border border-[#DCE9F5] bg-white p-6 shadow-[0_8px_30px_rgba(36,76,130,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0BA5B1]">
                    Optical Innovation
                  </span>
                  <h3 className="text-lg font-extrabold text-[#102A43]">
                    Easy Focus Technology
                  </h3>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#20B7AE]" />
                  <span>
                    <strong>Zoom with full HOLO technology:</strong> Holographic lens and high reflectance mirrors.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#20B7AE]" />
                  <span>
                    <strong>Single-ring focusing/defocusing:</strong> Instant system with integrated focus point memory.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#20B7AE]" />
                  <span>
                    <strong>Perfect optical alignment:</strong> Exact correspondence between the guide light and the CO₂ laser beam.
                  </span>
                </li>
              </ul>
            </div>

            {/* 4 Ablation Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ablationModes.map((mode, i) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-[#E3EDF7] bg-white p-4 shadow-[0_4px_16px_rgba(36,76,130,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {mode.badge}
                      </span>
                    </div>

                    <h4 className="mt-3 text-xs font-extrabold text-[#102A43]">
                      {mode.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {mode.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scanning Shapes Section */}
        <div className="mt-12 rounded-3xl border border-[#DDE8F4] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Multi-Geometry Laser Emission
              </span>
              <h3 className="text-xl font-extrabold text-[#102A43]">
                Widest Range of Scanning Shapes Dedicated to Surgery
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Custom scan geometry tailored for cutting, micro-ablation, and vaporization in confined spaces.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Shapes:</span>
              <span className="rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-bold">
                5 Surgical Patterns
              </span>
            </div>
          </div>

          {/* Shapes Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {scanningShapes.map((shape, idx) => {
              const isSelected = activeShape === shape.name;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveShape(shape.name)}
                  className={`cursor-pointer flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 ${
                    isSelected
                      ? "border-red-400 bg-red-50/40 shadow-md scale-105"
                      : "border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center">
                    {shape.render}
                  </div>
                  <h4 className="mt-2 text-xs font-bold text-[#102A43]">
                    {shape.name}
                  </h4>
                  <p className="mt-0.5 text-[10px] text-slate-500">
                    {shape.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedMicroScan;
