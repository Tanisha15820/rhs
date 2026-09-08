import React from "react";
import {
  Gauge,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Zap,
  CheckCircle2,
  Sliders,
  Scissors,
} from "lucide-react";

const RaykeenAdvantages = () => {
  const pillars = [
    {
      icon: Scissors,
      title: "High-Efficiency Morcellator Blades",
      tagline: "Smaller Outer Sheath • Less Injury",
      desc: "Available in Φ 4.2mm and Φ 4.5mm outside diameters, delivering rapid tissue evacuation rates up to 12.8 g/min while fitting slim surgical sheaths.",
      badge: "Up to 12.8 g/min",
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-primary",
    },
    {
      icon: RefreshCw,
      title: "Durable Reusable Handpiece",
      tagline: "≥ 200 Autoclave Cycles",
      desc: "Robust medical-grade titanium construction with tolerance for over 200 steam sterilization cycles, substantially reducing per-procedure capital cost.",
      badge: "≥ 200 Sterilizations",
      color: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Gauge,
      title: "10-Level Dynamic Speed Control",
      tagline: "350 to 2500 r/min Range",
      desc: "Ultra-wide speed range across 10 distinct power steps allows surgeons to fine-tune morcellation speed precisely according to tissue density.",
      badge: "350 – 2500 r/min",
      color: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50 text-[#20B7AE]",
    },
    {
      icon: ShieldCheck,
      title: "High Negative Vacuum Capacity",
      tagline: "-88 kPa Peak Suction",
      desc: "Integrated high-performance suction system with limit negative pressure of -88 kPa draws tissue fragments firmly into the blade window.",
      badge: "-88 kPa Limit",
      color: "from-sky-500 to-primary",
      accentBg: "bg-sky-50 text-sky-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Raykeen Laser Technology • Model SRM-S2VA
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            High-Performance{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Urological Morcellation
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Engineered for rapid, safe tissue morcellation during HoLEP and endoscopic
            prostate procedures with durable 200-cycle handpiece longevity.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
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
                    {item.desc}
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
      </div>
    </section>
  );
};

export default RaykeenAdvantages;
