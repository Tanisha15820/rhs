import React from "react";
import procedureImage from "../../assets/images/vibrolith_procedure.jpg";
import { Activity, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

const VibrolithProcedures = () => {
  const procedures = [
    {
      step: "01",
      title: "Percutaneous Nephrolithotomy (PNL)",
      target: "Renal Pelvic, Caliceal & Staghorn Calculi",
      description:
        "High-impact ballistic energy safely breaks large, complex staghorn and pelvic calculi through nephrostomy access without damaging surrounding renal parenchyma.",
      badge: "High-Energy Direct Contact",
    },
    {
      step: "02",
      title: "Uretero-renoscopy (URS)",
      target: "Upper, Mid & Lower Ureteral Calculi",
      description:
        "Flexible and rigid probe options (0.8–1.2 mm) easily negotiate ureteroscope working channels, fragmenting impacted stones across the entire ureteral tract without mucosal heating.",
      badge: "Non-Thermal Disintegration",
    },
    {
      step: "03",
      title: "Cystolithotripsy",
      target: "Bladder Stones (All Sizes)",
      description:
        "Large-bore probes (1.5–2.0 mm) combined with the optional suction adapter rapidly pulverize and evacuate dense bladder calculi under clear endoscopic visibility.",
      badge: "Rapid Evacuation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Clinical Procedures
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Versatile Stone Treatment Across the{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Urinary Tract
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Proven clinical effectiveness for renal, ureteral, and bladder calculi,
            providing predictable stone clearance with zero thermal risk.
          </p>
        </div>

        {/* Big Procedure Diagram Card */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-[#F8FCFF] p-4 shadow-xl sm:p-8">
          <img
            src={procedureImage}
            alt="Pneumatic Ballistic Stone Lithotripsy Procedures"
            className="w-full rounded-2xl object-cover shadow-sm"
          />
        </div>

        {/* 3 Procedures Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {procedures.map((proc, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-primary">
                    {proc.step}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600">
                    {proc.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {proc.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-primary">
                  {proc.target}
                </p>

                <p className="mt-3 text-xs leading-5 text-[#697A94] sm:text-sm">
                  {proc.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 size={16} />
                <span>100% Non-Thermal Energy</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibrolithProcedures;
