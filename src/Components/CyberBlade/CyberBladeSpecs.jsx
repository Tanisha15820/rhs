import React from "react";
import {
  Layers,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Table,
  ShieldCheck,
  BatteryCharging,
  Cpu,
} from "lucide-react";

const CyberBladeSpecs = () => {
  const specs = [
    { label: "Model", value: "Cyber BLADE™" },
    { label: "System Classification", value: "Battery-Powered Handpiece System" },
    { label: "Morcellator Dimensions (L × W × H)", value: "610 × 55 × 38 mm" },
    { label: "Blade Length", value: "370 mm ± 5 mm" },
    { label: "Blade Diameter (External)", value: "4.5 mm (13.5 Fr)" },
    { label: "Power Supply of Charging Station", value: "100 / 220 Vac; 50 / 60 Hz Universal" },
    { label: "Handpiece Battery", value: "Lithium-Ion High-Capacity Rechargeable" },
    { label: "Cutting Mechanism", value: "High-Frequency Reciprocating / Oscillating" },
    { label: "Vacuum Coupling", value: "Direct O.R. Wall Suction / Splitter Compatible" },
    { label: "Sterility / Packaging", value: "Pre-Sterilized Single-Use Complete Kit" },
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
              Device & Battery Specifications
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Parameters & Dimensions
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Detailed engineering specifications for Quanta System Cyber BLADE™
            cordless morcellation platform.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-[#102A43] via-[#1A385C] to-[#1E3E62] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                Quanta System Cyber BLADE™ — Device & Battery Information
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              Laser in Our DNA • Quanta System
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
                Rent Cyber BLADE™ for HoLEP & ThuLEP Cases
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Supplied with single-use sterile procedural packs, charging dock, and clinical support.
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

export default CyberBladeSpecs;
