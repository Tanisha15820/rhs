import React from "react";
import atlasImg from "../../assets/images/vibrolith_ortho_atlas.png";
import { CheckCircle2, Zap, ShieldCheck, Activity, Award, Sparkles, HeartPulse, Layers } from "lucide-react";

const VibrolithOrthoAbout = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Electro-Pneumatic Ballistic Power",
      desc: "High-velocity projectile strikes a precision steel transmitter head, creating powerful radial acoustic waves with up to 18.5 MPa peak pressure.",
    },
    {
      icon: Activity,
      title: "7\" Color Touch Anatomical Atlas",
      desc: "Interactive full-body color atlas with 30 preset orthopedic protocols and 10 custom user memories for instant visual targeting.",
    },
    {
      icon: ShieldCheck,
      title: "Recoil-Free Spring Suspension",
      desc: "Patented handpiece suspension absorbs backward recoil completely, ensuring zero operator wrist strain with 2,000,000 shock warranty.",
    },
    {
      icon: HeartPulse,
      title: "Natural Analgesic Therapy",
      desc: "Acoustic shockwaves induce a rapid neuro-analgesic response, rendering treatment virtually painless after the initial 30 seconds.",
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
              Extracorporeal Shock Wave Therapy (ESWT - RSWT)
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            VIBROLITH ORTHO®{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Shock Wave Therapy
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            Vibrolith Ortho is an advanced electro-pneumatic and electro-kinetic extracorporeal radial
            shockwave therapy (RSWT / ESWT) system engineered by ELMED Medical Systems for high-efficiency
            orthopedic, sports medicine, and rehabilitation treatments.
          </p>
        </div>

        {/* Anatomical Atlas Showcase Banner */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-[#F8FCFF] p-4 shadow-xl sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-md">
                <img
                  src={atlasImg}
                  alt="ELMED Vibrolith Ortho 7-inch Color Touchscreen Anatomical Treatment Atlas"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
                  <Award size={14} /> 24-Month Manufacturer Warranty
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <ShieldCheck size={14} /> CE 1984 Medical Certified
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#102A43] sm:text-2xl">
                Integrated Visual Body Atlas & 50,000 Patient Records
              </h3>
              <p className="text-xs leading-relaxed text-[#697A94] sm:text-sm">
                Clinicians select pathologies directly on the high-definition 7" color touch screen.
                The system provides visual guidance with exact anatomical treatment regions, recommended
                bar pressures, and pulse counts. Automatically archives complete treatment logs, bar levels,
                and frequencies across 50,000 patient history records.
              </p>
              <div className="rounded-xl bg-blue-50/60 p-3.5 text-xs font-semibold text-primary">
                30 Preset Orthopedic Protocols • 10 Customizable Programs • Multi-Language Support
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-600 px-2">
            <span className="font-semibold text-primary">
              Effective for calcific tendinitis, tennis elbow, heel spurs, achilles tendinopathy & non-union fractures
            </span>
            <span className="font-medium text-slate-500">
              ELMED Elektronik ve Medikal San. ve Tic. A.Ş. • Turkey & USA
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

export default VibrolithOrthoAbout;
