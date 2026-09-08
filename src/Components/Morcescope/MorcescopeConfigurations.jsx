import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Table,
  Sliders,
  Package,
} from "lucide-react";

const MorcescopeConfigurations = () => {
  const [activeConfig, setActiveConfig] = useState("slim22");

  const slim22Items = [
    {
      part: "351-829-030 (30°) / 351-829-000 (0°)",
      name: "RZ Rod Lens Cystoscope",
      details: "Autoclavable, Ø 2.9mm HD optical telescope",
      role: "Optics",
    },
    {
      part: "253-000-319 (0.8mm) / 253-000-316 (1.2mm)",
      name: "RZ Laser Working Element",
      details: "Passive actuation for fibers up to 0.8mm / 1.2mm",
      role: "Working Element",
    },
    {
      part: "253-000-352",
      name: "Resectoscope Sheath 22 Charr.",
      details: "Rotating inner tube for continuous suction and irrigation",
      role: "Outer Sheath",
    },
    {
      part: "253-000-302 (long) / 253-000-301 (short)",
      name: "RZ LL-Connection, rotatable",
      details: "For use with Laser Probe",
      role: "Adapter",
    },
    {
      part: "300-011-184",
      name: "Luer-Lock Tuohy Borst Adapter",
      details: "Ø 0.6 – 1.4mm fiber pass-through seal",
      role: "Sealing Adapter",
    },
    {
      part: "253-905-220",
      name: "Morcescope, 22 Charr.",
      details: "220mm working length, 5mm working channel",
      role: "Morcescope",
    },
    {
      part: "253-904-220",
      name: "Sealing Cap for Morcescope",
      details: "With puncture membrane, package of 10 pieces",
      role: "Consumable",
    },
  ];

  const ultraSlim18Items = [
    {
      part: "351-829-030 (30°) / 351-829-000 (0°)",
      name: "RZ Rod Lens Cystoscope",
      details: "Autoclavable, Ø 2.9mm HD optical telescope",
      role: "Optics",
    },
    {
      part: "253-000-315 (standard) / 253-000-318 (push button)",
      name: "RZ Laser Working Element, passive",
      details: "For fibers up to 0.8mm with optional push button release",
      role: "Working Element",
    },
    {
      part: "351-000-185",
      name: "Resectoscope Continuous Flow Sheath 18.5 Charr.",
      details: "Rotating sheath, incl. obturator with QuickLock",
      role: "Outer Sheath",
    },
    {
      part: "253-000-302 (long) / 253-000-301 (short)",
      name: "RZ LL-Connection, rotatable",
      details: "For use with Laser Probe",
      role: "Adapter",
    },
    {
      part: "300-011-184",
      name: "Luer-Lock Tuohy Borst Adapter",
      details: "Ø 0.6 – 1.4mm sealing adapter",
      role: "Sealing Adapter",
    },
    {
      part: "253-905-220",
      name: "Morcescope, 22 Charr.",
      details: "220mm working length, 5mm working channel",
      role: "Morcescope",
    },
    {
      part: "253-901-220",
      name: "Continuous Flow Sheath, 22 Charr.",
      details: "220mm working length, 2-way stopcock, QuickLock with Obturator",
      role: "Morcellation Sheath",
    },
    {
      part: "253-904-220",
      name: "Sealing Cap for Morcescope",
      details: "With membrane to puncture through, package of 10 pieces",
      role: "Consumable",
    },
  ];

  const activeItems = activeConfig === "slim22" ? slim22Items : ultraSlim18Items;

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
              System Configurations by RZ
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Modular HoLEP &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Morcescope Sets
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Choose between the single-sheath 22 Charr. standard or the ultra-slim 18.5 Charr.
            laser resection configuration according to clinical anatomy and patient indication.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActiveConfig("slim22")}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all duration-200 border ${
              activeConfig === "slim22"
                ? "bg-gradient-to-r from-primary to-primary-dark text-white border-primary shadow-lg shadow-blue-500/20 scale-105"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Package className="h-4 w-4" />
            <span>Slim HoLEP Set (22 Charr. Single Sheath)</span>
          </button>

          <button
            onClick={() => setActiveConfig("ultra18")}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all duration-200 border ${
              activeConfig === "ultra18"
                ? "bg-gradient-to-r from-primary to-primary-dark text-white border-primary shadow-lg shadow-blue-500/20 scale-105"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Package className="h-4 w-4" />
            <span>Ultra Slim HoLEP Set (18.5 Charr. Resection)</span>
          </button>
        </div>

        {/* Active Configuration Table */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#102A43] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Table className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                {activeConfig === "slim22"
                  ? "Slim HoLEP Laser Resectoscope & Morcescope Set (22 Charr.)"
                  : "Ultra Slim HoLEP Laser Resectoscope Set (18.5 Charr.)"}
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              According Dr. Felipe C. A. de Figueiredo
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-[#102A43] font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Component Name</th>
                  <th className="py-3.5 px-6">Part Reference No.</th>
                  <th className="py-3.5 px-6">Clinical Description & Function</th>
                  <th className="py-3.5 px-6 text-right">System Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-6 font-extrabold text-[#102A43]">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-primary">
                      {item.part}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600">
                      {item.details}
                    </td>
                    <td className="py-3.5 px-6 text-right font-semibold text-[#20B7AE]">
                      {item.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Rental Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50/50 to-blue-50 p-5 border border-blue-100">
          <div>
            <h4 className="text-sm font-bold text-[#102A43]">
              Need Full Equipment Rental for BPH / HoLEP Cases?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Available with Holmium / Thulium laser generators and certified on-site clinical support.
            </p>
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

export default MorcescopeConfigurations;
