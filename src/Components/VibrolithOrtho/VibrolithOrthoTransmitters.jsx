import React from "react";
import transmittersImg from "../../assets/images/vibrolith_ortho_transmitters.png";
import { SlidersHorizontal, CheckCircle2, ShieldCheck, Activity, Target, Zap } from "lucide-react";

const VibrolithOrthoTransmitters = () => {
  const specs = [
    { label: "Working Pressure", value: "0.5 – 5 Bar continuously adjustable" },
    { label: "Shock Frequency", value: "1 – 21 Hz (60 – 1,260 pulses/min digital control)" },
    { label: "Peak Acoustic Energy", value: "18.5 MPa maximum radial energy density" },
    { label: "Pulse Emission Modes", value: "Single pulse, Continuous burst & Automatic" },
    { label: "Handpiece Applicator", value: "185 x 200 mm with 2,000,000 shock warranty" },
    { label: "Recoil Absorber", value: "Spring-loaded anti-vibration suspension system" },
    { label: "Disinfection Standard", value: "Alcohol-based, colorless & odorless disinfectant solutions" },
    { label: "Electrical Safety", value: "Class I Type B (EN 60601-1) with internal isolation" },
  ];

  const transmitterHeads = [
    {
      size: "6 mm Focus",
      target: "Trigger Points & Acupoints",
      desc: "Deeply concentrated energy for localized micro-calcifications and tight fascial trigger points.",
    },
    {
      size: "10 mm Standard",
      target: "Tendons & Epicondyles",
      desc: "Versatile geometry for tennis elbow, golfer's elbow, and achilles tendon treatments.",
    },
    {
      size: "15 mm Planar",
      target: "Shoulder & Rotator Cuff",
      desc: "Optimal acoustic profile for calcific tendinitis of the shoulder and joint capsule.",
    },
    {
      size: "20 mm Radial",
      target: "Large Muscular Fascia",
      desc: "Homogeneous acoustic wave dispersion across broad muscles, hamstrings, and lumbar regions.",
    },
    {
      size: "35 mm Deep",
      target: "Pseudoarthrosis & Bone Non-Union",
      desc: "Extra-long trigger head designed to stimulate osteogenesis and deep tissue healing.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFE] to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Transmitter Info & Specs */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#20B7AE]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20B7AE] sm:text-sm">
                Precision Acoustic Wave Transmitters
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
              Interchangeable Multi-Caliber{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Applicator Heads
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
              Vibrolith Ortho includes a full kit of 5 precision-machined medical stainless steel
              applicator transmitter heads (6 mm, 10 mm, 15 mm, 20 mm, and 35 mm deep trigger point).
              Each head is acoustically calibrated to transmit ballistic shockwaves at targeted tissue depths.
            </p>

            {/* Transmitter Heads Mini Cards */}
            <div className="mt-6 space-y-2.5">
              {transmitterHeads.map((head, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 sm:text-sm">
                      {head.size}
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      {head.target}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#697A94]">
                    {head.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Specs List */}
            <div className="mt-6 space-y-2">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-xs"
                >
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-primary sm:text-sm text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Transmitters Visual Showcase */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-6">
            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={transmittersImg}
                  alt="Vibrolith Ortho Precision Interchangeable Transmitter Heads Set"
                  className="w-full object-cover shadow-sm transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 sm:text-sm">
                      Patented Spring-Loaded Recoil Dampening
                    </h5>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                      The internal spring suspension mechanism ensures firm, continuous applicator
                      coupling against the patient's skin while isolating the physician's hand from
                      recoil vibration, preventing hand fatigue during prolonged clinical sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithOrthoTransmitters;
