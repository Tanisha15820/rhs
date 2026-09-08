import React, { useState } from "react";
import {
  Zap,
  Scissors,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Cpu,
  Eye,
  HeartHandshake,
} from "lucide-react";

import cyberBladeImg from "../../assets/images/cyber_blade.png";
import flexibleUrsImg from "../../assets/images/flexible_video_urs.png";

const MorcescopeWorkflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      stepNumber: 1,
      title: "Laser Enucleation",
      subtitle: "Slim HoLEP Laser Resectoscope (22 / 18.5 Charr.)",
      badge: "Step 1: Enucleation",
      badgeColor: "bg-blue-500/10 text-primary border-blue-200",
      description:
        "Slim HoLEP with 22 Charr. outer diameter provides the smallest resectoscope available that uses the exact same sheath as the morcescope. Eliminates repeated dilation and mucosal shearing.",
      points: [
        "Working element based on standard ergonomic resectoscope design",
        "Snap-on mechanism for laser fibers and easy connection with scope",
        "2.9 mm HD rod-lens scope diameter",
        "Compatible for HoLEP and ThuLEP for laser fibers up to 1.2 mm",
      ],
      diameter: "22 Charr. / 18.5 Charr.",
    },
    {
      stepNumber: 2,
      title: "Tissue Morcellation",
      subtitle: "Slim HoLEP Morcescope (22 Charr. / 5mm Channel)",
      badge: "Step 2: Morcellation",
      badgeColor: "bg-teal-500/10 text-[#20B7AE] border-teal-200",
      description:
        "After Laser Enucleation, the Morcescope and Morcellator can be introduced through the same sheath. Avoids any additional traumatization of the urethra and significantly lowers postoperative incontinence risk.",
      points: [
        "Smallest 22 Charr. Morcescope minimizes urethral friction and stricture risk",
        "High-definition picture quality with shock-resistant optical fibers",
        "High-flow irrigation channel plus additional dedicated irrigation port",
        "Universal Ø 5mm working channel compatible with Wolf, Lumenis, Storz, Dornier",
      ],
      diameter: "22 Charr. Outer / 5mm Channel",
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
              Single Sheath Surgical Concept
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            The 2-Step{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Laser Enucleation & Morcellation
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Developed according to Dr. Felipe C. A. de Figueiredo. A unified single-sheath
            platform that performs enucleation and morcellation without changing outer sheaths.
          </p>
        </div>

        {/* 2-Step Process Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all duration-300 shadow-[0_8px_30px_rgba(36,76,130,0.06)] hover:-translate-y-1.5 ${
                step.stepNumber === 1
                  ? "border-blue-200 bg-gradient-to-b from-blue-50/40 via-white to-white hover:border-blue-300 hover:shadow-blue-500/10"
                  : "border-teal-200 bg-gradient-to-b from-teal-50/40 via-white to-white hover:border-teal-300 hover:shadow-teal-500/10"
              }`}
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl font-black text-xl text-white shadow-md ${
                        step.stepNumber === 1
                          ? "bg-gradient-to-r from-primary to-primary-dark shadow-blue-500/20"
                          : "bg-gradient-to-r from-[#20B7AE] to-teal-700 shadow-teal-500/20"
                      }`}
                    >
                      {step.stepNumber}
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {step.stepNumber === 1 ? "Phase I" : "Phase II"}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#102A43]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-extrabold uppercase ${step.badgeColor}`}
                  >
                    {step.diameter}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  {step.description}
                </p>

                {/* Key Points */}
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          step.stepNumber === 1 ? "text-primary" : "text-[#20B7AE]"
                        }`}
                      />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Highlight */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500">Outer Diameter:</span>
                <span
                  className={
                    step.stepNumber === 1 ? "text-primary font-mono" : "text-[#20B7AE] font-mono"
                  }
                >
                  {step.diameter}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Breakthrough Clinical Feature Banner */}
        <div className="mt-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-[#102A43] via-[#1A3A5E] to-[#102A43] p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/30">
                <ShieldCheck className="h-4 w-4" />
                <span>Zero Re-Dilation Advantage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Single Sheath Prevents Urethral Injury
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Traditional HoLEP requires swapping resectoscope sheaths for larger morcellator
                cannulas. RZ Slim HoLEP preserves the same 22 Charr. sheath throughout the entire
                case, drastically reducing mucosal trauma and long-term stricture formation.
              </p>
            </div>

            <div className="shrink-0 flex items-center justify-center h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="text-center">
                <span className="text-2xl font-black text-cyan-300">22</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  Charr.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorcescopeWorkflow;
