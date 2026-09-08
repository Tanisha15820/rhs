import React from "react";
import {
  Layers,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Table,
  ShieldCheck,
  Building2,
  Cpu,
  Gauge,
} from "lucide-react";

const RaykeenSpecs = () => {
  const specs = [
    { label: "Model", value: "SRM-S2VA" },
    { label: "Electrical Requirements", value: "~100–240V, 50/60 Hz Universal" },
    { label: "Input Power", value: "150 VA" },
    { label: "Maximum Output Speed", value: "2500 r/min" },
    { label: "Speed Control Range", value: "10 Levels (350 to 2500 r/min)" },
    { label: "Limit Negative Pressure Value", value: "-88 kPa Peak Vacuum" },
    { label: "Mainframe Size (L × W × H)", value: "474 × 446 × 165 mm" },
    { label: "Mainframe Weight", value: "12 kg (Compact Desktop / Cart Design)" },
    { label: "Handpiece Reusability", value: "Steam Sterilization Tolerance ≥ 200 Times" },
    { label: "Foot Control Mode", value: "Dual-Level Segmental Control (Suction & Cutting)" },
    { label: "Compatible Blade Sizes", value: "Φ 4.5 mm (B-10-4540) & Φ 4.2 mm (B-10-4240)" },
    {
      label: "Manufacturer",
      value: "Shanghai Raykeen Laser Technology Co., Ltd. (Pudong, Shanghai, China)",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Model SRM-S2VA Parameters
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Mainframe & System{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Technical data for the Raykeen SRM-S2VA high-speed urological morcellator platform.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-[#102A43] via-[#1A385C] to-[#1E3E62] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                Raykeen SRM-S2VA Morcellator System — Technical Parameters
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              Shanghai Raykeen Laser Technology
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
                <div className="sm:col-span-7 font-mono text-slate-700 font-semibold mt-1 sm:mt-0">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Rental Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102A43]">
                Rent Raykeen SRM-S2VA for Hospital HoLEP Programs
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Complete console, mobile cart, reusable handpiece, and sterile blades with on-demand technical support.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:opacity-95"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RaykeenSpecs;
