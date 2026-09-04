import React, { useState } from "react";
import anatomyImage from "../../assets/images/litho35_anatomy.png";
import { Activity, Stethoscope, ChevronRight } from "lucide-react";

const Litho35Applications = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(5); // Default to Urology

  const specialties = [
    {
      id: 0,
      name: "ENT",
      subtitle: "Ear, Nose & Throat",
      procedures: ["Soft tissue ablation", "Turbinate reduction", "Polypectomy", "Vocal cord lesions"],
      color: "#0284C7",
    },
    {
      id: 1,
      name: "SIALOLITHIASIS",
      subtitle: "Salivary Gland Stones",
      procedures: ["Salivary duct stone fragmentation", "Minimally invasive duct preservation"],
      color: "#0D9488",
    },
    {
      id: 2,
      name: "GASTROENTEROLOGY",
      subtitle: "Digestive & Biliary Tract",
      procedures: ["Difficult bile duct stone lithotripsy", "Gallstone fragmentation", "Stricture ablation"],
      color: "#F59E0B",
    },
    {
      id: 3,
      name: "DISCECTOMY",
      subtitle: "Spine Surgery",
      procedures: ["Percutaneous disc decompression", "Nucleus pulposus vaporization", "Minimally invasive spine"],
      color: "#7C3AED",
    },
    {
      id: 4,
      name: "ARTHROSCOPY",
      subtitle: "Joint Orthopedics",
      procedures: ["Synovectomy", "Meniscal trimming", "Chondroplasty", "Joint debridement"],
      color: "#EC4899",
    },
    {
      id: 5,
      name: "UROLOGY",
      subtitle: "Endourology & Lithotripsy",
      procedures: [
        "Lithotripsy (Kidney, Ureter, Bladder)",
        "Tumor ablation (Bladder, Upper Urinary Tract)",
        "Urethral & Ureteral Strictures",
        "Bladder Neck Incision (BNI)",
      ],
      color: "#2563EB",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FCFF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Broad Clinical Spectrum
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Surgical{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Applications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            Litho can be used to perform incision, excision, resection, ablation,
            vaporization, coagulation and hemostasis of soft tissue and in
            lithotripsy of stones across multidisciplinary surgical fields.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left: Interactive Specialty Selector */}
          <div className="space-y-3 lg:col-span-5">
            {specialties.map((spec) => {
              const isSelected = activeSpecialty === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveSpecialty(spec.id)}
                  className={`group flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-blue-50/70 shadow-md translate-x-2"
                      : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                      style={{ backgroundColor: spec.color }}
                    >
                      <Stethoscope size={20} />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold ${
                          isSelected ? "text-primary" : "text-slate-800"
                        }`}
                      >
                        {spec.name}
                      </h3>
                      <p className="text-xs text-[#697A94]">{spec.subtitle}</p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      isSelected ? "text-primary translate-x-1" : "text-slate-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Center: Anatomy Graphic */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-3">
            <div className="relative flex h-[480px] w-full items-center justify-center rounded-3xl border border-blue-100 bg-white p-4 shadow-sm">
              <img
                src={anatomyImage}
                alt="Human Anatomy Clinical Applications"
                className="h-full w-auto object-contain transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Detailed Procedures for Selected Specialty */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow"
                  style={{ backgroundColor: specialties[activeSpecialty].color }}
                >
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {specialties[activeSpecialty].name}
                  </h3>
                  <p className="text-xs text-[#697A94]">
                    {specialties[activeSpecialty].subtitle}
                  </p>
                </div>
              </div>

              <div className="my-4 h-[1px] w-full bg-slate-100" />

              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Procedures & Intended Uses
              </h4>

              <ul className="space-y-2.5">
                {specialties[activeSpecialty].procedures.map((proc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-5 text-slate-700 sm:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-blue-50/60 p-3.5 text-[11px] leading-4 text-slate-600">
                <span className="font-semibold text-primary">Clinical Advantage:</span>{" "}
                Minimal 0.3–0.4 mm penetration depth ensures superior mucosal preservation and rapid recovery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litho35Applications;
