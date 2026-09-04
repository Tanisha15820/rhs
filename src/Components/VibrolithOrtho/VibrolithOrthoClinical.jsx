import React from "react";
import clinicalImg from "../../assets/images/vibrolith_ortho_clinical.png";
import { CheckCircle2, HeartPulse, Activity, Zap, Stethoscope, Droplets, Check } from "lucide-react";

const VibrolithOrthoClinical = () => {
  const clinicalBenefits = [
    {
      title: "Immediate Neuro-Analgesic Effect",
      desc: "Radial acoustic waves desensitize local nociceptive C-nerve fibers, providing rapid pain relief within 30 seconds of starting therapy.",
    },
    {
      title: "Neovascularization & Tissue Repair",
      desc: "Stimulates micro-circulation, vascular endothelial growth factors (VEGF), and collagen production in degenerated tendons.",
    },
    {
      title: "Decalcification of Calcific Tendinitis",
      desc: "Mechanical cavitation bubbles disintegrate pathological calcium hydroxyapatite deposits, reabsorbed naturally by the lymphatic system.",
    },
    {
      title: "Osteogenesis & Bone Remodeling",
      desc: "Deep acoustic pulses induce periosteal micro-trauma, awakening osteoblasts to bridge stubborn non-union fractures and pseudoarthroses.",
    },
  ];

  const indications = [
    "Calcific Tendinitis of the Shoulder (Rotator Cuff)",
    "Lateral Epicondylitis (Tennis Elbow) & Medial (Golfer's Elbow)",
    "Plantar Fasciitis with or without Calcaneal Heel Spurs",
    "Achilles Tendinopathy & Peritendinitis",
    "Patellar Tendinopathy (Jumper's Knee) & Tibial Periostitis",
    "Non-Union Bone Fractures & Delayed Union Pseudoarthrosis",
    "Myofascial Pain Syndrome & Chronic Muscular Trigger Points",
    "Rhizarthrosis, Coccygodynia & Greater Trochanteric Pain Syndrome",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Non-Invasive Radial Shockwave Therapy
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Clinical Indications &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Therapeutic Action
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            Vibrolith Ortho produces radial shockwaves (RSWT) through compressed air projectile impact.
            The resulting high-energy acoustic pressure waves spread radially into tissue layers,
            offering non-invasive, surgery-free relief for chronic musculoskeletal disorders.
          </p>
        </div>

        {/* Clinical Diagram Showcase */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl sm:p-6">
          <img
            src={clinicalImg}
            alt="Radial Shockwave Propagation Cross-Section Diagram in Musculoskeletal Tissue"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column: Clinical Indications List */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFE] p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  <Stethoscope size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Approved Orthopedic Indications
                  </h3>
                  <p className="text-xs text-[#697A94]">
                    Evidence-based extracorporeal radial shock wave therapy
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {indications.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-3 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-blue-50/70 p-3 text-center text-xs font-bold text-primary">
              Non-Invasive • Anesthesia-Free • Zero Downtime • High Success Rate
            </div>
          </div>

          {/* Right Column: Mechanisms & Portability */}
          <div className="flex flex-col justify-between rounded-3xl border border-blue-200 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 text-white shadow-xl sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#38BDF8]">
                  <HeartPulse size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Therapeutic Mechanisms of Action
                  </h3>
                  <p className="text-xs text-slate-300">
                    Acoustic biological cascades in soft and hard tissue
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {clinicalBenefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2 font-bold text-[#38BDF8]">
                      <Check size={16} className="shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-300 pl-6 sm:text-xs">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center text-xs font-semibold text-[#38BDF8]">
              Compact 9.85 kg Desktop Unit • Mobile Compressor Trolley Cart Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithOrthoClinical;
