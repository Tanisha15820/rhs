import React from "react";
import suiteImg from "../../assets/images/multimed_suite.jpg";
import { CheckCircle2, ShieldCheck, Thermometer, Radio, FileText, Sparkles } from "lucide-react";

const MultimedAbout = () => {
  const highlights = [
    {
      icon: Radio,
      title: "4 AP/PA Treatment Positions",
      desc: "Flexible modular design allows supine and prone patient positioning from full bottom, full top, bottom-side, and top-side — without displacing the focal point.",
    },
    {
      icon: Thermometer,
      title: "Closed-Circuit Degassing Water System",
      desc: "Integrated degassing system removes micro-bubbles, while heating water between 30°C and 36°C for maximum acoustic transmission and patient comfort.",
    },
    {
      icon: ShieldCheck,
      title: "Dual Localization System",
      desc: "Simultaneous and automatic targeting with both integrated X-ray fluoroscopy and ultrasound, ensuring pinpoint accuracy for opaque and non-opaque stones.",
    },
    {
      icon: FileText,
      title: "DPRS Patient Recording Program",
      desc: "World's first Dynamic Patient Recording and Reporting Program (DPRS), capturing live fluoroscopy snapshots, treatment parameters, and automated patient reports.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              The Complete Lithotripsy Solution
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            MULTIMED EM{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              ESWL Suite
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            MULTIMED EM presents the complete solution to the lithotripsy world.
            Engineered by ELMED Medical Systems to provide comfortable, highly efficient,
            outpatient shock wave therapy with low noise and zero anesthesia requirement.
          </p>
        </div>

        {/* Operating Suite Image Card */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-[#F8FCFF] p-4 shadow-xl sm:p-8">
          <img
            src={suiteImg}
            alt="Multimed EM Extracorporeal Shock Wave Lithotripsy Suite"
            className="w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 px-2">
            <span className="font-semibold text-primary">
              Modular • Anaesthesia-Free • Outpatient Treatment • Low Noise
            </span>
            <span className="font-medium text-slate-500">
              1,000,000 Shock Warranty on Electromagnetic Generator
            </span>
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFE] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#697A94]">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <CheckCircle2 size={14} />
                  <span>ELMED Advanced Engineering</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MultimedAbout;
