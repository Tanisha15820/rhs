import React from "react";
import {
  Gamepad2,
  Crosshair,
  Eye,
  CheckCircle,
  Shield,
  Layers,
  Sparkles,
  Sliders,
  Maximize,
  Microscope,
  Cpu,
  Check,
} from "lucide-react";

import uscanSurgicalImg from "../../assets/images/uscanSurgical.png";

const EasySpotHybrid = () => {
  const clinicalBullets = [
    {
      title: "Minimal Thermal Damage",
      desc: "Perilesional thermal injury restricted to less than 50 microns.",
    },
    {
      title: "Zero Carbonisation",
      desc: "Maximum tissue cleanliness along all micro-cutting edges.",
    },
    {
      title: "Full Parameter Control",
      desc: "Precise regulation of cutting length, ablation area, depth & coagulation (%).",
    },
    {
      title: "Two Working Modalities",
      desc: "Dedicated clinical operating modes: 'Depth' and 'Power'.",
    },
    {
      title: "Software-Guided Centering",
      desc: "Automated procedure for optical focusing and laser beam centration.",
    },
  ];

  const easyFeatures = [
    {
      id: "control",
      title: "Easy Control",
      badge: "Microswitch Joystick",
      icon: Gamepad2,
      color: "#2585F5",
      tagline: "Operate without ever moving your eyes from the microscope.",
      points: [
        "Scanning shape rotation (step-by-step and fast)",
        "Ablation figures dimension adjustment",
        "Scan-ON / Scan-OFF toggle",
        "Laser beam centering adjustment",
      ],
    },
    {
      id: "field",
      title: "Easy Field",
      badge: "Mechanical Boundary",
      icon: Crosshair,
      color: "#159DA6",
      tagline: "Mechanical control of the working area to precisely confine the laser beam.",
      points: [
        "Confines laser strictly within operating field",
        "Enhanced safety for surrounding healthy tissue",
        "Intuitive manual locking mechanism",
        "Easy and 100% reproducible",
      ],
    },
    {
      id: "focus",
      title: "Easy Focus",
      badge: "Hybrid Optical System",
      icon: Eye,
      color: "#7259D6",
      tagline: "Single-ring focus/defocus system with focal point memory.",
      points: [
        "Hybrid technology (holographic lens & high-reflectance mirrors)",
        "High depth of focus with focal memory",
        "Exact correspondence between guide light & CO₂ laser",
        "Instant recalibration during microsurgery",
      ],
    },
  ];

  const specs = [
    { label: "Optical Technology", value: "Holographic Lenses & Mirrors (Hybrid)" },
    { label: "Spot Diameter", value: "Min 140 µm – Max 4.5 mm" },
    { label: "Field of Work @ 400 mm EFL", value: "Min 20 × 18 mm – Max 55 × 40 mm" },
    {
      label: "Adjustable Functions by Joystick",
      value: "Rotation & Size of Figures, Scan On / Off, Fine Centering",
    },
    {
      label: "Microscope Compatibility",
      value: "Universal – Compatible with all surgical microscopes",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Soft background ambient effects */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#EDF5FF] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full bg-[#E6F8F6] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              DEKA Scan-Assisted ENT Laser Microsurgery
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            EasySpot Hybrid +{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              HiScan Surgical
            </span>
          </h2>

          <p className="mt-2 text-xl font-bold tracking-wide text-primary">
            Take it Easy
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Advanced micromanipulator and scanner combination delivering unmatched
            surgical safety, reproducibility, and effortless robotic precision.
          </p>
        </div>

        {/* Top Feature Grid: Machine Display + Clinical Benefits */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: Product Image with Core Values Badge (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Soft decorative glow behind micromanipulator */}
            <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/10 blur-2xl" />

            {/* Product Image */}
            <div className="relative z-10 flex h-[340px] w-full items-center justify-center p-4 sm:h-[400px]">
              <img
                src={uscanSurgicalImg}
                alt="EasySpot Hybrid + HiScan Surgical Micromanipulator"
                className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(30,90,180,0.18)] transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Central Badge: Safety, Reproducibility, Easy to Use */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-cyan-50/50 to-blue-50 px-5 py-3 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-blue-700 uppercase">
                <Shield className="h-3.5 w-3.5 text-primary" /> Safety
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-teal-700 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-[#20B7AE]" /> Reproducibility
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-indigo-700 uppercase">
                <Gamepad2 className="h-3.5 w-3.5 text-indigo-600" /> Easy to Use
              </span>
            </div>
          </div>

          {/* Right: Key Clinical Advantages List (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Surgical Precision Highlights
              </span>
              <h3 className="text-xl font-extrabold text-[#102A43]">
                Why Surgeons Choose EasySpot Hybrid
              </h3>
            </div>

            {clinicalBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-blue-200 hover:shadow-sm"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#102A43]">
                    {bullet.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {bullet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 "Easy" Cards Grid: Easy Control, Easy Field, Easy Focus */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20B7AE]">
              Ergonomic Triad
            </span>
            <h3 className="text-2xl font-extrabold text-[#102A43]">
              The 3 Pillars of Effortless Microsurgery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {easyFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E3ECF6] bg-white p-6 shadow-[0_8px_30px_rgba(36,76,130,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(36,76,130,0.12)] hover:border-blue-200"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{ backgroundColor: item.color }}
                  />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${item.color}10`,
                          color: item.color,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="mt-4 text-lg font-extrabold text-[#102A43]">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs font-semibold leading-relaxed text-slate-600">
                      {item.tagline}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {item.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-[#102A43] to-[#1E3E62] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Microscope className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                EasySpot Hybrid Micromanipulator — Specifications
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              Universal Optical Attachment
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {specs.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 p-4 text-xs hover:bg-slate-50 transition-colors"
              >
                <div className="sm:col-span-5 font-bold text-[#102A43]">
                  {row.label}
                </div>
                <div className="sm:col-span-7 text-slate-600 font-medium mt-1 sm:mt-0">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasySpotHybrid;
