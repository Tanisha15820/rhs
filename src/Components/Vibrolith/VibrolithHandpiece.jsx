import React from "react";
import handpieceImg from "../../assets/images/vibrolith_handpiece.jpg";
import { CheckCircle2, ShieldAlert, Sparkles, Wrench } from "lucide-react";

const VibrolithHandpiece = () => {
  const probeSizes = [
    { size: "0.8 mm", use: "Flexible & Rigid Pediatric / Thin URS" },
    { size: "1.0 mm", use: "Standard Semi-Rigid URS" },
    { size: "1.2 mm", use: "Mid/Upper Ureter Calculi" },
    { size: "1.5 mm", use: "Large Ureteral & Renal Pelvic Stones" },
    { size: "2.0 mm", use: "Percutaneous Nephrolithotomy & Bladder Stones" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Handpiece Details */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#20B7AE]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20B7AE] sm:text-sm">
                Precision Surgical Instrumentation
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
              Ergonomic Handpiece &{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Reusable Probes
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
              The VIBROLITH handpiece is crafted from high-grade surgical stainless steel,
              weighing only a few ounces for fatigue-free maneuverability. Air tubes are
              specifically designed to prevent unintentional projectile ejection, guaranteeing
              absolute patient and theater safety.
            </p>

            {/* Suction Adapter Callout */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-[#F4F9FD] p-5">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h4 className="text-sm font-bold text-slate-900">
                  Optional Suction Adapter
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-[#697A94]">
                Specially designed suction adapter connects directly to the handpiece and probe sheath,
                enabling simultaneous stone fragmentation and aspiration of micro-fragments with manual flow control for optimal optical visibility.
              </p>
            </div>

            {/* Probes Range */}
            <div className="mt-6 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Standard Probe Calibers (0.6 mm – 3.0 mm Available)
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {probeSizes.map((probe, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
                  >
                    <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-primary">
                      {probe.size}
                    </span>
                    <span className="text-xs text-slate-600">{probe.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Handpiece Image */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-[#F8FCFF] p-4 shadow-xl sm:p-6">
              <img
                src={handpieceImg}
                alt="Precision Pneumatic Lithotripter Handpiece and Probes"
                className="w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-600 px-2">
                <span className="font-semibold text-primary">
                  100% Autoclavable & Gas Sterilizable
                </span>
                <span className="font-medium text-slate-500">
                  Probe Length Customizable to Endoscope
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithHandpiece;
