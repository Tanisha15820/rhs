import React from "react";
import {
  ShieldAlert,
  Footprints,
  Droplets,
  Scissors,
  CheckCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const RaykeenFootswitch = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Segmental Foot Control Safety System
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Dual-Level Footswitch for{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Zero Accidental Bladder Injury
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Segmented two-stage actuation separates tissue capture from mechanical morcellation,
            guaranteeing complete surgical confidence in the bladder cavity.
          </p>
        </div>

        {/* 2 Stages Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Level 1: Primary Suction Stage */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary font-black text-lg">
                  1
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase text-primary border border-blue-200">
                  Primary Level (Light Depress)
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#102A43]">
                Control Suction Only
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Lightly pressing the footswitch opens the negative pressure vacuum port to safely
                engage and capture floating adenoma lobes without activating the blade.
              </p>

              <div className="mt-5 rounded-2xl bg-blue-50/50 p-4 border border-blue-100">
                <span className="text-[10px] font-bold uppercase text-primary">Key Safety Role</span>
                <p className="text-xs text-slate-700 mt-1">
                  Surgeon verifies tissue alignment in the center of the bladder before starting the cutting cycle.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#20B7AE] font-semibold">
              <CheckCircle className="h-4 w-4" />
              <span>Safe Tissue Engagement & Positioning</span>
            </div>
          </div>

          {/* Level 2: Secondary Suction + Crushing Stage */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-teal-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(36,76,130,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#20B7AE] font-black text-lg">
                  2
                </div>
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-bold uppercase text-[#20B7AE] border border-teal-200">
                  Secondary Level (Full Depress)
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#102A43]">
                Control Suction & Crushing / Cutting
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Fully depressing the footswitch activates high-speed blade oscillation (up to 2500 r/min)
                along with continuous aspiration for rapid, continuous tissue evacuation.
              </p>

              <div className="mt-5 rounded-2xl bg-teal-50/50 p-4 border border-teal-100">
                <span className="text-[10px] font-bold uppercase text-[#20B7AE]">Cutting Performance</span>
                <p className="text-xs text-slate-700 mt-1">
                  Extracts 7.5 ~ 12.8 g/min of tissue swiftly into the sterile filtration canister.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#20B7AE] font-semibold">
              <CheckCircle className="h-4 w-4" />
              <span>High-Velocity Tissue Extraction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaykeenFootswitch;
