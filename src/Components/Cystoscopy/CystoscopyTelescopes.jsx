import React, { useState } from "react";
import {
  Eye,
  Crosshair,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
  Maximize2,
  Sliders,
  Layers,
  Thermometer,
} from "lucide-react";

import flexibleVideoUrs from "../../assets/images/flexible_video_urs.png";

const CystoscopyTelescopes = () => {
  const [selectedAngle, setSelectedAngle] = useState("30");

  const angles = [
    {
      deg: "0",
      code: "253-804-000",
      colorName: "Green",
      badgeColor: "#10B981",
      angleName: "Direct Forward View (0°)",
      description: "Direct end-on visualization for urethral inspection and stricture assessment.",
      visualSvgAngle: 0,
    },
    {
      deg: "12",
      code: "253-804-012",
      colorName: "White",
      badgeColor: "#94A3B8",
      angleName: "Forward-Oblique View (12°)",
      description: "Slight forward offset providing continuous visual guidance during catheterization and instrument advance.",
      visualSvgAngle: 12,
    },
    {
      deg: "30",
      code: "253-804-030",
      colorName: "Red",
      badgeColor: "#EF4444",
      angleName: "Standard Wide View (30°) — Quoted Standard",
      description: "The gold standard universal cystoscopy telescope offering balanced viewing for bladder wall inspection and ureteral orifice cannulation.",
      isQuoted: true,
      visualSvgAngle: 30,
    },
    {
      deg: "45",
      code: "253-804-045",
      colorName: "Black",
      badgeColor: "#1E293B",
      angleName: "Oblique Angle View (45°)",
      description: "Wide angle visualization for lateral and superior bladder dome examination.",
      visualSvgAngle: 45,
    },
    {
      deg: "70",
      code: "253-804-070",
      colorName: "Yellow",
      badgeColor: "#F59E0B",
      angleName: "Lateral Retrograde View (70°)",
      description: "Steep lateral view specifically designed for comprehensive inspection of the bladder dome, neck, and anterior bladder wall.",
      visualSvgAngle: 70,
    },
  ];

  const features = [
    {
      title: "Color-Coded Direction Rings",
      desc: "Instant identification of the direction of view in the sterile surgical field.",
    },
    {
      title: "C-Mount Eyepiece Connection",
      desc: "Universal standard eyepiece compatible with all modern Full HD and 4K camera heads.",
    },
    {
      title: "3-Step Light Post Adapters",
      desc: "Seamless direct connection to Storz, Wolf, Olympus, and ACMI light guide cables.",
    },
    {
      title: "Sapphire Protective Glass",
      desc: "Extreme hardness prevents scratches, corrosion, and damage to the distal optical lens system.",
    },
    {
      title: "Optimized Glass Fiber Bundle",
      desc: "High-transmission optical fiber distribution guarantees uniform, shadow-free illumination.",
    },
    {
      title: "Autoclavable at 134°C / 2.3 bar",
      desc: "Robust hermetic laser-welded sealing withstands repeated high-temperature steam sterilization.",
    },
  ];

  const currentAngle = angles.find((a) => a.deg === selectedAngle) || angles[2];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-[#E5F3FF] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[500px] w-[500px] rounded-full bg-[#E0F8F5] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              HD Rod-Lens Optical Technology
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            RZ High-Definition{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Cystoscopes
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Engineered with latest CAD-designed rod-lens optical systems, offering
            unmatched image brightness, resolution, and crystal-clear contrast.
          </p>
        </div>

        {/* Direction of View Interactive Selector */}
        <div className="mt-12 rounded-3xl border border-[#DCE8F4] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Optical Direction of View (4.0mm ⌀ / 300mm Working Length)
              </span>
              <h3 className="text-xl font-extrabold text-[#102A43] mt-0.5">
                Color-Coded Optical Angles
              </h3>
            </div>

            {/* Angle Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {angles.map((ang) => {
                const isSelected = selectedAngle === ang.deg;
                return (
                  <button
                    key={ang.deg}
                    onClick={() => setSelectedAngle(ang.deg)}
                    className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 border ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-white/50"
                      style={{ backgroundColor: ang.badgeColor }}
                    />
                    <span>{ang.deg}°</span>
                    {ang.isQuoted && (
                      <span className="hidden sm:inline rounded-full bg-red-500/20 px-1.5 py-0.2 text-[9px] text-red-300 font-normal">
                        Standard
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Angle Detail Display */}
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-12">
            {/* Visual Angle Diagram (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-[#102A43] to-[#1E3E62] p-8 text-white">
              {/* Simulated Telescope Angle Visualizer */}
              <div className="relative flex h-52 w-52 items-center justify-center">
                {/* Outer Field of View Arc */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30" />

                {/* Telescope Barrel Graphic */}
                <div className="absolute left-6 h-8 w-24 rounded-l-md bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-300 shadow-lg flex items-center justify-start pl-2">
                  <div
                    className="h-6 w-3 rounded-sm"
                    style={{ backgroundColor: currentAngle.badgeColor }}
                  />
                </div>

                {/* Light Cone / Direction Angle */}
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <linearGradient
                      id={`coneGrad-${currentAngle.deg}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor={currentAngle.badgeColor}
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor={currentAngle.badgeColor}
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>

                  {/* Laser/Optical Direction Axis */}
                  <line
                    x1="100"
                    y1="100"
                    x2={100 + 75 * Math.cos(((currentAngle.visualSvgAngle - 90) * Math.PI) / 180)}
                    y2={100 + 75 * Math.sin(((currentAngle.visualSvgAngle - 90) * Math.PI) / 180)}
                    stroke={currentAngle.badgeColor}
                    strokeWidth="3"
                    strokeDasharray="4 2"
                  />

                  {/* Target Spot */}
                  <circle
                    cx={100 + 75 * Math.cos(((currentAngle.visualSvgAngle - 90) * Math.PI) / 180)}
                    cy={100 + 75 * Math.sin(((currentAngle.visualSvgAngle - 90) * Math.PI) / 180)}
                    r="6"
                    fill={currentAngle.badgeColor}
                  />
                </svg>

                <div className="z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white border border-white/20">
                  {currentAngle.deg}° FOV
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <span>Part No: {currentAngle.code}</span>
                </div>
              </div>
            </div>

            {/* Angle Description & Specifications (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: currentAngle.badgeColor }}
                />
                <h4 className="text-xl font-extrabold text-[#102A43]">
                  {currentAngle.angleName}
                </h4>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {currentAngle.description}
              </p>

              {currentAngle.isQuoted && (
                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                    <Sparkles className="h-4 w-4" />
                    Quoted Standard Telescope in Adult Set
                  </div>
                  <p className="mt-1 text-xs text-slate-700">
                    Pre-configured as the primary optical telescope in the RZ Adult Cystoscope Set (Article: 253-804-030).
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Outer Diameter</span>
                  <p className="text-sm font-extrabold text-[#102A43]">4.0 mm ⌀ (also 2.9 mm)</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Field of View</span>
                  <p className="text-sm font-extrabold text-[#102A43]">105° Wide Angle</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Optical Lens</span>
                  <p className="text-sm font-extrabold text-[#102A43]">HD CAD Rod-Lens</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Sterilization</span>
                  <p className="text-sm font-extrabold text-[#102A43]">134°C / 2.3 bar Autoclavable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Optical Engineering Features */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20B7AE]">
              Precision Optical Engineering
            </span>
            <h3 className="text-2xl font-extrabold text-[#102A43]">
              Advanced Optical Construction
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E1ECF6] bg-white p-5 shadow-[0_4px_16px_rgba(36,76,130,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary mb-3">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-extrabold text-[#102A43]">
                  {feat.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopyTelescopes;
