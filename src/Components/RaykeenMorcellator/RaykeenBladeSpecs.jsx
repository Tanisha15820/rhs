import React from "react";
import {
  Scissors,
  Gauge,
  Sparkles,
  CheckCircle,
  Table,
  Layers,
  Zap,
} from "lucide-react";

const RaykeenBladeSpecs = () => {
  const blades = [
    {
      model: "B-10-4540",
      type: "Blade for Urology",
      diameter: "Φ 4.5 mm",
      cuttingSpeed: "7.5 ~ 12.8 g/min",
      sheathCompatibility: "Standard 24-26 Fr Sheaths & 5mm Morcescopes",
      indication: "High-volume adenoma morcellation with maximum speed",
      isPrimary: true,
    },
    {
      model: "B-10-4240",
      type: "Blade for Urology (Slim)",
      diameter: "Φ 4.2 mm",
      cuttingSpeed: "7.3 ~ 12.1 g/min",
      sheathCompatibility: "Slim 22-24 Fr Sheaths & Compact Morcescopes",
      indication: "Reduced diameter for narrow urethras and tighter working channels",
      isPrimary: false,
    },
  ];

  const speedSteps = [
    { level: "Level 1–3", rpm: "350 – 900 r/min", usage: "Delicate control near bladder neck & ureteral orifices" },
    { level: "Level 4–7", rpm: "1000 – 1800 r/min", usage: "Standard medium-density adenoma morcellation" },
    { level: "Level 8–10", rpm: "1900 – 2500 r/min", usage: "High-speed peak resection for large volume glands (> 80g)" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Blade Specifications & Cutting Performance
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Precision Blade Models &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Speed Modulation
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Optimized blade geometry delivers rapid tissue extraction up to 12.8 g/min
            with minimal urethral dilation across 10 adjustable speed levels.
          </p>
        </div>

        {/* 2 Blade Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blades.map((b, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)] flex flex-col justify-between ${
                b.isPrimary
                  ? "border-blue-200 bg-gradient-to-br from-blue-50/40 via-white to-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {b.type}
                    </span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                    Model: {b.model}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-black text-[#102A43]">
                  Outside Diameter: {b.diameter}
                </h3>

                <p className="mt-2 text-xs text-slate-600">
                  {b.indication}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Cutting Performance</span>
                    <p className="text-sm font-extrabold text-primary mt-0.5">{b.cuttingSpeed}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Compatibility</span>
                    <p className="text-xs font-bold text-slate-700 mt-0.5">{b.sheathCompatibility}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#20B7AE] font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span>Certified Raykeen Surgical Blade</span>
              </div>
            </div>
          ))}
        </div>

        {/* 10-Speed Range Breakdown Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#102A43] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Gauge className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                10-Level Dynamic Speed Range (350 – 2500 r/min)
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              Stepped Torque & Velocity Profile
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {speedSteps.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-12 p-4 text-xs hover:bg-slate-50 transition-colors"
              >
                <div className="sm:col-span-3 font-extrabold text-[#102A43]">
                  {row.level}
                </div>
                <div className="sm:col-span-3 font-mono font-bold text-primary">
                  {row.rpm}
                </div>
                <div className="sm:col-span-6 text-slate-600 font-medium mt-1 sm:mt-0">
                  {row.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaykeenBladeSpecs;
