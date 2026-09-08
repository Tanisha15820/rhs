import React from "react";
import {
  GitFork,
  SlidersHorizontal,
  Layers,
  Sparkles,
  CheckCircle,
  Table,
  Target,
  Workflow,
} from "lucide-react";

const CystoscopyBridges = () => {
  const combinationMatrix = [
    {
      sheath: "25 Charr.",
      colorHex: "#94A3B8",
      withAlbarran: "1 × 10 Charr. or 2 × 8 Charr.",
      withBridge: "1 × 12 Charr. or 2 × 8 Charr.",
    },
    {
      sheath: "22 Charr.",
      colorHex: "#2563EB",
      withAlbarran: "1 × 9 Charr. or 2 × 6 Charr.",
      withBridge: "1 × 10 Charr. or 2 × 7 Charr.",
    },
    {
      sheath: "20 Charr.",
      colorHex: "#EF4444",
      withAlbarran: "1 × 6 Charr. or 2 × 5 Charr.",
      withBridge: "1 × 7 Charr. or 2 × 6 Charr.",
    },
    {
      sheath: "19 Charr.",
      colorHex: "#10B981",
      withAlbarran: "1 × 5 Charr. or 2 × 4 Charr.",
      withBridge: "1 × 6 Charr. or 2 × 5 Charr.",
    },
    {
      sheath: "17 Charr.",
      colorHex: "#F59E0B",
      withAlbarran: "—",
      withBridge: "1 × 5 Charr.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Ambient Lights */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Instrument Deflection & Working Channels
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Bridges &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Albarran Deflectors
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Engineered for low-friction passage and precise active steering of semi-rigid
            forceps, laser fibers, and lithotripter probes into ureteral orifices.
          </p>
        </div>

        {/* 2 Main Product Panels: Bridges vs Albarran */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: Cystoscope Bridges */}
          <div className="rounded-3xl border border-[#DCE9F5] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Workflow className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase text-primary">
                  Flat Angle Insertion
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#102A43]">
                Standard Cystoscope Bridges
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Compatible with all RZ Cysto-Urethroscope sheaths. Features an optimized
                low-angle entry port designed specifically to protect semi-rigid biopsy forceps
                and delicate lithotripsy laser probes from bending fatigue.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">Bridge without channel (Diagnostic)</span>
                  <span className="font-mono text-slate-500 font-semibold">Art: 253-000-100</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">Bridge with 1 channel (Max 12 Charr.)</span>
                  <span className="font-mono text-slate-500 font-semibold">Art: 253-000-101</span>
                </div>
                <div className="rounded-xl bg-blue-50/60 p-3 border border-blue-200/70 flex items-center justify-between text-xs">
                  <span className="font-bold text-primary">Bridge with 2 channels (1× 12 Ch. or 2× 8 Ch.)</span>
                  <span className="font-mono text-primary font-bold">Art: 253-000-102</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#20B7AE] font-semibold">
              <CheckCircle className="h-4 w-4" />
              <span>Included in standard RZ Adult Cystoscope Set</span>
            </div>
          </div>

          {/* Panel 2: Albarran Deflecting Mechanism */}
          <div className="rounded-3xl border border-[#DCE9F5] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-[#0BA5B1]">
                  <SlidersHorizontal className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase text-[#0BA5B1]">
                  With Ratchet Lock
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#102A43]">
                Albarran Deflecting Mechanism
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Allows fine angular steering of ureteral catheters, Dormia baskets, and stents.
                The built-in ratchet locking mechanism keeps the deflector securely in position
                without continuous finger tension during surgical maneuvers.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="rounded-xl bg-cyan-50/60 p-3 border border-cyan-200/70 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">2 Working Channels & Ratchet (Quoted)</span>
                  <span className="font-mono text-[#0BA5B1] font-bold">Art: 253-000-105</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">1 Working Channel & Ratchet</span>
                  <span className="font-mono text-slate-500 font-semibold">Art: 253-000-107</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">2 Working Channels without Ratchet</span>
                  <span className="font-mono text-slate-500 font-semibold">Art: 253-000-106</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102A43]">1 Working Channel without Ratchet</span>
                  <span className="font-mono text-slate-500 font-semibold">Art: 253-000-108</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#0BA5B1] font-semibold">
              <CheckCircle className="h-4 w-4" />
              <span>Active steering for easy ureteral orifice cannulation</span>
            </div>
          </div>
        </div>

        {/* Spreadsheet: Sheath - Instrument Combinations Table */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-[#102A43] via-[#1A385C] to-[#1E3E62] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <Table className="h-5 w-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold">
                Spreadsheet for Sheath – Instrument Combinations
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-cyan-200">
              RZ Standard Protocol Matrix
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-[#102A43] font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Cysto-Urethroscope Sheath</th>
                  <th className="py-3.5 px-6">Color Ring</th>
                  <th className="py-3.5 px-6">With Albarran Deflector</th>
                  <th className="py-3.5 px-6">With Standard Bridge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {combinationMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-6 font-extrabold text-[#102A43]">
                      {row.sheath}
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full border border-slate-200"
                          style={{ backgroundColor: row.colorHex }}
                        />
                      </div>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-700">
                      {row.withAlbarran}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-primary">
                      {row.withBridge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopyBridges;
