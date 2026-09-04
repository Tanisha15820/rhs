import React from "react";
import { Move, CheckCircle2, ShieldCheck, Stethoscope, SlidersHorizontal } from "lucide-react";

const MultimedTable = () => {
  const tableSpecs = [
    { label: "Vertical Movements", value: "300 mm (motorized)" },
    { label: "Longitudinal Movements", value: "150 mm" },
    { label: "Lateral Movements", value: "150 mm" },
    { label: "Lifting Capacity", value: "200 kg" },
    { label: "Tabletop Dimensions", value: "600 mm x 2430 mm" },
    { label: "Table Height Range", value: "850 – 1150 mm" },
    { label: "Tilt Capability", value: "Motorized Trendelenburg & Lateral Tilting" },
    { label: "Patient Weight Rating", value: "155 kg tare / 200 kg dynamic" },
  ];

  const endoProcedures = [
    "Cystoscopy & Urethroscopy",
    "Percutaneous Nephrolithotomy (PCNL)",
    "Transurethral Resection (TURP/TURBT)",
    "Ureteral Stenting & Catheterization",
    "Endourological Biopsy Procedures",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Multifunctional Patient Suite
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            6-Way Motorized{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Radiolucent Treatment Table
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            The MULTIMED treatment table is capable of radiolucent scopy from any part of the
            patient's lying surface. Beyond ESWL shockwave therapy, its universal motorized
            adjustability supports a complete spectrum of endo-urological procedures.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Table Movements Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-[#F8FAFE] p-7 shadow-sm lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                <Move size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Precision 6-Way Motorized Motion
                </h3>
                <p className="text-xs text-[#697A94]">
                  Smooth, silent electronic positioning with wired remote control
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {tableSpecs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-primary sm:text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Endo-Urological Versatility Card */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-7 text-white shadow-xl lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#38BDF8]">
                <Stethoscope size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Universal Endo-Urological Platform
                </h3>
                <p className="text-xs text-slate-300">
                  Full compatibility with urological accessories & C-arm imaging
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm mb-6">
              With motorized Trendelenburg and lateral tilt, the table can be stopped and fixed
              at any desired angle, transforming the lithotripsy room into a high-utility
              intervention suite.
            </p>

            <div className="space-y-3">
              {endoProcedures.map((proc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs sm:text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 size={18} className="text-[#38BDF8] shrink-0" />
                  <span>{proc}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-semibold text-[#38BDF8]">
              Radiolucent Carbon Fiber • 200 kg Lifting Capacity • Trendelenburg Tilt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimedTable;
