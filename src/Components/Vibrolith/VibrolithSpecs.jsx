import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const VibrolithSpecs = () => {
  const specs = [
    { parameter: "Operating Pressure", value: "0 – 4 Bar, continuously adjustable" },
    { parameter: "Supply Pressure", value: "3.5 – 6.5 Bar medical compressed air" },
    { parameter: "Pulse Mode", value: "Single & Multiple pulse options (50 – 600 pulse/min digitally selected)" },
    { parameter: "Power Supply", value: "115 / 230 V AC, 60 / 50 Hz" },
    { parameter: "Electrical Isolation", value: "Internal isolation transformer, 100% patient/operator isolation" },
    { parameter: "Dimensions (Main Unit)", value: "305 mm (W) x 255 mm (D) x 117 mm (H)" },
    { parameter: "Dimensions (Handpiece)", value: "195 mm (L) x 20 mm (Diameter)" },
    { parameter: "Weight", value: "6.3 kg (Console)" },
    {
      parameter: "Probe Diameters",
      value: "Standard: 0.8 mm, 1.0 mm, 1.2 mm, 1.5 mm, 2.0 mm (0.6 mm – 3.0 mm upon request)",
    },
    { parameter: "Probe Length", value: "Adjustable according to endoscope working channel length" },
    { parameter: "Sterilization (Handpiece)", value: "Chemical or Gas sterilization (EtO)" },
    { parameter: "Sterilization (Probes)", value: "Autoclave (Steam), Chemical, or Gas sterilization" },
    { parameter: "Regulatory Certification", value: "CE Marked (CE 1984), ISO 13485" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Technical Specifications
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Vibrolith®{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Detailed engineering and performance parameters for the ELMED Vibrolith
            pneumatic intracorporeal lithotripter system.
          </p>
        </div>

        {/* Specs Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm sm:w-1/3">
                    Parameter
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm sm:w-2/3">
                    Vibrolith® Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {specs.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-blue-50/30 odd:bg-slate-50/20"
                  >
                    <td className="py-3.5 px-6 font-semibold text-slate-800">
                      {item.parameter}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 font-medium">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithSpecs;
