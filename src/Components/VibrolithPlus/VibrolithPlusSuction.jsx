import React from "react";
import probesImg from "../../assets/images/vibrolith_plus_probes.jpg";
import footswitchImg from "../../assets/images/vibrolith_plus_footswitch.jpg";
import { CheckCircle2, Stethoscope, SlidersHorizontal, Droplets, Filter, Check } from "lucide-react";

const VibrolithPlusSuction = () => {
  const suctionBenefits = [
    {
      title: "Zero Line Clamping Required",
      desc: "Eliminates the traditional nuisance of repeatedly pinching, clamping, and unclamping suction tubing during PCNL interventions.",
    },
    {
      title: "Crystal-Clear Endoscopic Vision",
      desc: "Continuous micro-aspiration removes floating stone dust, blood particles, and mucosal debris, preserving flawless optics.",
    },
    {
      title: "Sterile Stone Fragment Trap",
      desc: "Recovered stone particles collect directly into a dedicated sterile collection chamber, immediately available for infrared mineral analysis.",
    },
    {
      title: "Independent 3-Mode Foot Control",
      desc: "Surgeons control suction flow dynamically via the multi-pedal foot switch without relying on nursing assistance.",
    },
  ];

  const procedures = [
    "Percutaneous Nephrolithotomy (PCNL) & Mini-PCNL",
    "Semi-Rigid Ureterorenoscopy (URS)",
    "Flexible Ureterorenoscopy (RIRS compatible probes)",
    "Transurethral Cystolithotripsy (Bladder Calculi)",
    "Staghorn & Resistant Calcium Oxalate Disintegration",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Revolutionary Fluid Management
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Integrated Peristaltic Suction &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Stone Collector
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            No more clamping and unclamping suction lines during PCNL procedures! Vibrolith Plus
            features an industrially pioneering integrated peristaltic pump and sterile stone collection
            system that delivers superior fragment evacuation and uninterrupted visualization.
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column: Wide Range of Probes */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFE] p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  <SlidersHorizontal size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Wide Range of Multi-Caliber Probes
                  </h3>
                  <p className="text-xs text-[#697A94]">
                    Rigid, semi-rigid, and flexible endoscope compatibility
                  </p>
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <img
                  src={probesImg}
                  alt="Vibrolith Plus Precision Surgical Lithotripsy Probe Set"
                  className="h-56 w-full object-cover sm:h-64 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm mb-4">
                A comprehensive catalog of pneumatic and ultrasonic probes manufactured in various
                diameters (from ultra-fine calibers for flexible scopes up to rigid PCNL calibers) and
                custom lengths matching every endoscopic working channel.
              </p>

              <div className="space-y-2">
                {procedures.map((proc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-2.5 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-blue-50/70 p-3 text-center text-xs font-bold text-primary">
              Autoclavable • Multi-Use Medical Stainless Steel • Gas Sterilization Ready
            </div>
          </div>

          {/* Right Column: Integrated Suction & Footswitch Control */}
          <div className="flex flex-col justify-between rounded-3xl border border-blue-200 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 text-white shadow-xl sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#38BDF8]">
                  <Droplets size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Hands-Free 3-Mode Foot Controller
                  </h3>
                  <p className="text-xs text-slate-300">
                    Effortless pneumatic, ultrasonic, and pump actuation
                  </p>
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-md">
                <img
                  src={footswitchImg}
                  alt="Vibrolith Plus Ergonomic 3-Pedal Medical Foot Controller"
                  className="h-56 w-full object-cover sm:h-64 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-3 mb-6">
                {suctionBenefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2 font-bold text-[#38BDF8]">
                      <Check size={16} className="shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-300 pl-6 sm:text-xs">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-semibold text-[#38BDF8]">
              Seamless Aspiration Flow • Sterile Fragment Collection • Rapid Lithotripsy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithPlusSuction;
