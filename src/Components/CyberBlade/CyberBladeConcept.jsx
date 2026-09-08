import React from "react";
import {
  BatteryCharging,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
  Trash2,
  RefreshCw,
  Sliders,
} from "lucide-react";

const CyberBladeConcept = () => {
  const corePillars = [
    {
      icon: BatteryCharging,
      title: "Cordless & Console-Free",
      tagline: "Total Ergonomic Freedom",
      description:
        "All functions are managed directly on the handpiece. No bulky motor consoles, foot pedal cables, or separate drive units cluttering the operating room.",
      badge: "No Drive Console",
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-primary",
    },
    {
      icon: PackageCheck,
      title: "Complete All-in-One Sterile Pack",
      tagline: "Procedure-Ready Setup",
      description:
        "Single pre-sterilized package contains everything needed: external morcellator casing, oscillating blade, collection basket, and connection tubing.",
      badge: "Pre-Sterile Pack",
      color: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Trash2,
      title: "Disposable Outer Instrument Shell",
      tagline: "Zero Reprocessing Costs",
      description:
        "Upon completing morcellation, simply dispose of the outer shell. Eliminates intensive technician cleaning, chemical disinfection, and sharpening fees.",
      badge: "Single-Use Casing",
      color: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50 text-[#20B7AE]",
    },
    {
      icon: RefreshCw,
      title: "Reusable Drive Core & Battery",
      tagline: "Sustainable High Power",
      description:
        "High-performance drive motor and long-life rechargeable battery unit slot effortlessly into the sterile casing, delivering consistent peak torque.",
      badge: "Rechargeable Core",
      color: "from-sky-500 to-primary",
      accentBg: "bg-sky-50 text-sky-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Next-Generation BPH Morcellation
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Integrated Cordless{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Disposable Morcellator
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Quanta System Cyber BLADE™ marks a new era in endoscopic prostate surgery,
            combining the safety of single-use sharpness with cordless freedom.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E3EDF7] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(25,168,232,0.12)]"
              >
                <div>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accentBg} transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.tagline}
                  </span>

                  <h3 className="mt-1 text-base font-extrabold text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-primary">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#20B7AE]" />
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner: Vacuum & Splitter Integration */}
        <div className="mt-12 rounded-3xl border border-[#DCE9F6] bg-gradient-to-r from-slate-900 via-[#102A43] to-[#1E3E62] p-8 text-white shadow-xl">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/30">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Direct O.R. Vacuum Coupling</span>
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl text-white">
                No Dedicated Vacuum Station Needed
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Cyber BLADE™ connects straight into your operating room wall suction or standard
                vacuum splitter. Suction strength is dynamically modulated directly from the
                handpiece lever during tissue extraction.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/10 text-center w-full max-w-xs">
                <div className="text-2xl font-black text-cyan-300">100% Mobile</div>
                <p className="text-xs text-slate-300 mt-1">
                  Cordless battery operation for effortless room-to-room transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberBladeConcept;
