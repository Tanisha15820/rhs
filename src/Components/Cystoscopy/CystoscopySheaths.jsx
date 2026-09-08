import React, { useState } from "react";
import {
  Shield,
  Layers,
  Sliders,
  Sparkles,
  Droplets,
  Eye,
  CheckCircle,
  Activity,
  Maximize2,
} from "lucide-react";

const CystoscopySheaths = () => {
  const [activeTab, setActiveTab] = useState("standard");

  const sheathSizes = [
    { size: "17 Charr.", colorName: "Yellow", colorHex: "#F59E0B", codeStd: "253-300-017", codeValve: "253-310-017", codeObt: "253-000-117" },
    { size: "19 Charr.", colorName: "Green", colorHex: "#10B981", codeStd: "253-300-019", codeValve: "253-310-019", codeObt: "253-000-119" },
    { size: "20 Charr.", colorName: "Red", colorHex: "#EF4444", codeStd: "253-300-020", codeValve: "253-310-020", codeObt: "253-000-120" },
    { size: "22 Charr.", colorName: "Blue", colorHex: "#2563EB", codeStd: "253-300-022", codeValve: "253-310-022", codeObt: "253-000-122" },
    { size: "25 Charr.", colorName: "White", colorHex: "#94A3B8", codeStd: "253-300-025", codeValve: "253-310-025", codeObt: "253-000-125" },
  ];

  const sheathTypes = [
    {
      id: "standard",
      title: "Standard Cysto-Urethroscope Sheath",
      subtitle: "With 2 lateral stopcocks & standard atraumatic obturator",
      description: "Classical double-stopcock sheath design engineered for smooth atraumatic insertion and consistent continuous fluid exchange.",
      features: [
        "2 rotating lateral stopcocks for fluid in/out",
        "Includes standard obturator with atraumatic distal tip",
        "Color-coded rings for quick Charr size identification",
        "Compatible with all RZ Bridges and Albarran deflectors",
      ],
    },
    {
      id: "long-window",
      title: "Long Window Cysto-Urethroscope Sheath",
      subtitle: "Extended distal beak window for specialized instrumentation",
      description: "Designed with an elongated distal window offering enhanced working clearance when operating deflectable lithotripsy probes and flexible forceps.",
      features: [
        "Extended viewing & instrument deflection geometry",
        "Includes standard atraumatic obturator",
        "Available in 19, 20, 22, and 25 Charr diameters",
        "Precision laser-welded stainless steel construction",
      ],
    },
    {
      id: "central-valve",
      title: "Central Valve Cysto-Urethroscope Sheath",
      subtitle: "2 stopcocks and ergonomic central valve",
      description: "Features a dedicated central valve mechanism allowing effortless single-finger regulation of suction and continuous high-flow irrigation.",
      features: [
        "Central valve for instant regulation of suction & irrigation",
        "Prevents sudden bladder collapse during procedure",
        "Smooth rotatable stopcock ports",
        "Available from 17 Charr to 25 Charr",
      ],
    },
  ];

  const currentSheath = sheathTypes.find((s) => s.id === activeTab) || sheathTypes[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-[500px] w-[500px] rounded-full bg-teal-50 blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Surgical Sheaths & Obturators
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Cysto-Urethroscope{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Sheath Systems
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Engineered with medical grade German stainless steel for maximum patient safety,
            smooth atraumatic insertion, and optimized fluid dynamics.
          </p>
        </div>

        {/* 3 Sheath Type Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {sheathTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-200 border ${
                activeTab === type.id
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white border-primary shadow-lg shadow-blue-500/20 scale-105"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300"
              }`}
            >
              {type.title}
            </button>
          ))}
        </div>

        {/* Active Sheath Presentation Card */}
        <div className="mt-8 rounded-3xl border border-[#DCE9F5] bg-gradient-to-br from-[#F8FAFE] to-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left: Sheath Details & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary border border-blue-200">
                <Sparkles className="h-3.5 w-3.5" />
                {currentSheath.subtitle}
              </span>

              <h3 className="text-2xl font-extrabold text-[#102A43]">
                {currentSheath.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {currentSheath.description}
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentSheath.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#20B7AE]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Size Matrix Table (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>Available Calibers & Article Numbers</span>
                <span className="text-[10px] text-primary font-semibold">Color Coded</span>
              </h4>

              <div className="divide-y divide-slate-100">
                {sheathSizes.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2.5 text-xs hover:bg-slate-50 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-3.5 w-3.5 rounded-full border border-slate-200"
                        style={{ backgroundColor: row.colorHex }}
                      />
                      <span className="font-extrabold text-[#102A43]">{row.size}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                      <span>Art: {activeTab === "central-valve" ? row.codeValve : row.codeStd}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Obturators & Specialty Adapters Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visual Obturators Card */}
          <div className="rounded-3xl border border-[#DDE8F4] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-[#0BA5B1]">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0BA5B1]">
                    Direct Vision Insertion
                  </span>
                  <h4 className="text-lg font-extrabold text-[#102A43]">
                    Visual Obturators with Telescope Lock
                  </h4>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Allows insertion of 4mm RZ cystoscope telescope inside the obturator to introduce
                sheaths under continuous visual control, significantly minimizing mucosal injury.
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400">Available Sizes</span>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  17, 19, 20, 22, 25 Charr (Articles: 253-000-217 to 253-000-225)
                </p>
              </div>
            </div>
          </div>

          {/* Hamada Female Urethra Adapter Card */}
          <div className="rounded-3xl border border-[#DDE8F4] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    Female Urology Specialty
                  </span>
                  <h4 className="text-lg font-extrabold text-[#102A43]">
                    Hamada Cystoscope Adapter
                  </h4>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Specialized Hamada adapter (Part No: <strong>253-315-000</strong>) designed for use
                with RZ Cystoscope Sheaths on the female urethra to ensure a stable seal and atraumatic insertion.
              </p>

              <div className="mt-4 rounded-xl bg-teal-50/50 p-3 border border-teal-100">
                <span className="text-[10px] font-bold uppercase text-teal-700">Clinical Indication</span>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  Female urethrocystoscopy, bladder neck inspection, and gentle mucosal seal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopySheaths;
