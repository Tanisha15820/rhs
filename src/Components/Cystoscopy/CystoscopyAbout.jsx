import React from "react";
import {
  Award,
  ShieldCheck,
  Cpu,
  Sparkles,
  Layers,
  Wrench,
  CheckCircle2,
  Building2,
  Globe2,
} from "lucide-react";

const CystoscopyAbout = () => {
  const highlights = [
    {
      icon: Award,
      title: "German Medical Craftsmanship",
      desc: "Precision engineering from Tuttlingen, Germany — the world center of medical technology since 1994.",
    },
    {
      icon: ShieldCheck,
      title: "CE & ISO 13485 Certified",
      desc: "Strict compliance with international medical device standards and certified quality management.",
    },
    {
      icon: Cpu,
      title: "Premium Medical Grade Materials",
      desc: "Constructed using German surgical stainless steel, titanium alloys, and high-grade carbon fiber.",
    },
    {
      icon: Layers,
      title: "Advanced CNC Milling",
      desc: "Modern multi-axis CNC milling and turning machines ensure extreme production depth and pattern continuity.",
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
              RZ Medizintechnik GmbH • Progress in Surgery
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Endoscopic Urology
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            For over three decades, RZ Medizintechnik has developed precision
            endoscopes and complete urological instrumentation in collaboration with
            leading international surgeons.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E3EDF7] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_16px_35px_rgba(25,168,232,0.12)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#20B7AE]" />
                  <span>Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Banner Card */}
        <div className="mt-12 rounded-3xl border border-[#DCE9F6] bg-gradient-to-r from-slate-900 via-[#102A43] to-[#1E3E62] p-8 text-white shadow-xl">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 text-xs font-bold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>RZ TopSeller Product Line</span>
              </div>

              <h3 className="text-2xl font-bold sm:text-3xl text-white">
                Complete Endourology & Laser Solutions
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-2xl">
                Comprehensive instrument sets for cystoscopy, resectoscopy, stricture
                dilation, lithotripsy, nephroscopy, and uretero-renoscopy. Fully compatible
                with modern 4K imaging, monopolar, bipolar, and laser-assisted resection
                (HoLEP, ThuLEP, Diode Laser).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
                <div className="text-xl font-extrabold text-cyan-300">100% Autoclavable</div>
                <div className="text-xs text-slate-300 mt-0.5">134°C / 2.3 bar Sterilization</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
                <div className="text-xl font-extrabold text-teal-300">HD CAD Rod-Lens</div>
                <div className="text-xs text-slate-300 mt-0.5">Sapphire Protective Crystal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopyAbout;
