import React, { useState } from "react";
import {
  Stethoscope,
  Scissors,
  Activity,
  User,
  Building2,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  HeartPulse,
} from "lucide-react";

import laryngeal1 from "../../assets/images/clinical/laryngeal_1.jpg";
import laryngeal2 from "../../assets/images/clinical/laryngeal_2.jpg";
import laryngeal3 from "../../assets/images/clinical/laryngeal_3.jpg";
import laryngeal4 from "../../assets/images/clinical/laryngeal_4.jpg";

import stapedotomy1 from "../../assets/images/clinical/stapedotomy_1.jpg";
import stapedotomy2 from "../../assets/images/clinical/stapedotomy_2.jpg";

import papillomatosis1 from "../../assets/images/clinical/papillomatosis_1.png";
import papillomatosis2 from "../../assets/images/clinical/papillomatosis_2.png";
import papillomatosis3 from "../../assets/images/clinical/papillomatosis_3.png";

import thyroid1 from "../../assets/images/clinical/thyroid_1.png";
import thyroid2 from "../../assets/images/clinical/thyroid_2.png";
import thyroid3 from "../../assets/images/clinical/thyroid_3.png";

const Clinical = () => {
  const [activeModalImage, setActiveModalImage] = useState(null);

  const clinicalCases = [
    {
      title: "LARYNGEAL PATHOLOGIES",
      icon: Stethoscope,
      color: "#159DA6",
      doctor: "Stefano Dallari, M.D.",
      details:
        "Director of the Department of ENT Surgery, Ospedale di Fermo (Hospital of Fermo, Italy)",
      steps: [
        {
          image: laryngeal1,
          label: "Left vocal cord polyp",
          subtitle: "Pre-operative condition",
        },
        {
          image: laryngeal2,
          label: "3 months Follow-up",
          subtitle: "Healthy mucosa restoration",
        },
        {
          image: laryngeal3,
          label: "Squamous cell carcinoma (T1a)",
          subtitle: "Early stage lesion",
        },
        {
          image: laryngeal4,
          label: "6 months Follow-up",
          subtitle: "Complete glottic preservation",
        },
      ],
    },
    {
      title: "ONE SHOT® STAPEDOTOMY",
      icon: Scissors,
      color: "#2585F5",
      doctor: "Arturo Mario Poletti, M.D.",
      details:
        "Consultant - Department of ENT Surgery, American Hospital Dubai (UAE)",
      steps: [
        {
          image: stapedotomy1,
          label: "'ONE SHOT' stapedotomy with CO₂ laser",
          subtitle: "Micro-fenestration with CO₂ pulse",
        },
        {
          image: stapedotomy2,
          label: "'ONE SHOT' stapedotomy with diode laser",
          subtitle: "Precision diode optical delivery",
        },
      ],
    },
    {
      title: "RESPIRATORY PAPILLOMATOSIS",
      icon: Activity,
      color: "#7259D6",
      doctor: "Guillermo Campos, M.D.",
      details:
        "Director - Instituto de Laringología Consultant - Department of Surgery, Fundación Santa Fé University Hospital, Bogotá DC, Colombia",
      steps: [
        {
          image: papillomatosis1,
          label: "Recurrent respiratory papillomatosis",
          subtitle: "Multiple warty glottic lesions",
        },
        {
          image: papillomatosis2,
          label: "After removal of the papilloma (obvious glottic stenosis)",
          subtitle: "Glottic stenosis management",
        },
        {
          image: papillomatosis3,
          label: "11 months Follow-up (after 4 procedures)",
          subtitle: "Clear airway achieved",
        },
      ],
    },
    {
      title: "VOCAL CORD & THYROID SURGERIES",
      icon: HeartPulse,
      color: "#EF3F91",
      doctor: "Guillermo Campos, M.D.",
      details:
        "Director - Instituto de Laringología Consultant - Department of Surgery, Fundación Santa Fé University Hospital, Bogotá DC, Colombia",
      steps: [
        {
          image: thyroid1,
          label: "Bilateral paralysis of the vocal cords (after total thyroidectomy)",
          subtitle: "Narrowed airway space",
        },
        {
          image: thyroid2,
          label: "Posterior cordotomy",
          subtitle: "Laser airway widening",
        },
        {
          image: thyroid3,
          label: "6 months Follow-up",
          subtitle: "Preserved phonation & airway",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#EAF4FF] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#EDF5FF] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E0F3F2]/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Badges */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#20B7C2]" />
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Clinical Excellence
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#20B7C2]" />
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
          The Technological Solution for{" "}
          <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
            All ENT Treatments
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#7181A3] sm:text-base">
          SmartXide² TRIO delivers precise, safe and effective outcomes across a
          wide range of ENT procedures. Real cases. Real results.
        </p>

        {/* Clinical Cases Grid */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-8">
          {clinicalCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex h-full flex-col justify-between">
                {/* CASE CARD */}
                <div className="group relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-[#E4ECF6] bg-white p-5 sm:p-7 shadow-[0_10px_35px_rgba(36,76,130,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(36,76,130,0.12)] hover:border-blue-200">
                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}55)`,
                    }}
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${item.color}14`,
                          boxShadow: `0 4px 14px ${item.color}20`,
                        }}
                      >
                        <Icon
                          size={22}
                          strokeWidth={2.2}
                          style={{
                            color: item.color,
                          }}
                        />
                      </div>

                      <div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: item.color }}
                        >
                          ENT Clinical Procedure
                        </span>
                        <h3 className="text-base font-extrabold uppercase tracking-wide sm:text-lg text-[#102A43]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase"
                      style={{
                        backgroundColor: `${item.color}10`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.steps.length} {item.steps.length > 2 ? "Stages" : "Modals"}
                    </span>
                  </div>

                  {/* IMAGE ROW */}
                  <div className="mt-7 flex flex-1 items-start justify-center gap-2 sm:gap-3">
                    {item.steps.map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                          {/* Circular Image Container */}
                          <div
                            onClick={() =>
                              setActiveModalImage({
                                image: step.image,
                                title: item.title,
                                label: step.label,
                                doctor: item.doctor,
                              })
                            }
                            className="group/img relative flex aspect-square w-full max-w-[96px] sm:max-w-[105px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 bg-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                              borderColor: item.color,
                              boxShadow: `0 4px 14px ${item.color}25`,
                            }}
                          >
                            <img
                              src={step.image}
                              alt={step.label}
                              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100">
                              <Maximize2 className="h-4 w-4 text-white" />
                            </div>
                          </div>

                          {/* Step Indicator Bar */}
                          <div
                            className="mt-2.5 h-[3px] w-6 sm:w-10 rounded-full"
                            style={{
                              backgroundColor: item.color,
                            }}
                          />

                          {/* Step Label */}
                          <p className="mt-1.5 text-[10px] font-bold leading-tight text-[#1e293b] sm:text-[11px] line-clamp-3">
                            {step.label}
                          </p>
                        </div>

                        {/* Arrow separator between steps */}
                        {i < item.steps.length - 1 && (
                          <div className="mt-7 flex shrink-0 items-center justify-center">
                            <div
                              className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full shadow-xs"
                              style={{
                                backgroundColor: `${item.color}15`,
                                color: item.color,
                              }}
                            >
                              <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* DOCTOR / COURTESY BAR */}
                {item.doctor ? (
                  <div className="mt-3">
                    <div className="flex items-start gap-3 rounded-2xl border border-[#E8EEF7] bg-white p-4 shadow-[0_4px_16px_rgba(36,76,130,0.04)]">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${item.color}12`,
                        }}
                      >
                        <User
                          size={18}
                          strokeWidth={2.2}
                          style={{
                            color: item.color,
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#59677F] sm:text-sm">
                          <span className="font-semibold uppercase tracking-wider text-[#8C9BB3] text-[10px] sm:text-[11px]">
                            Courtesy of:
                          </span>
                          <span
                            className="font-bold text-xs sm:text-sm"
                            style={{
                              color: item.color,
                            }}
                          >
                            {item.doctor}
                          </span>
                        </div>

                        <p className="mt-1 flex items-start gap-1.5 text-[10px] leading-4 text-[#75839D] sm:text-xs sm:leading-5">
                          <Building2
                            size={13}
                            className="mt-0.5 shrink-0 text-[#9AA8BF]"
                          />
                          <span>{item.details}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                {activeModalImage.title}
              </span>
              <h4 className="text-base font-bold text-[#102A43] mt-0.5">
                {activeModalImage.label}
              </h4>
            </div>

            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.label}
                className="h-full w-full object-contain"
              />
            </div>

            {activeModalImage.doctor && (
              <p className="mt-4 text-center text-xs text-slate-500 font-medium">
                Courtesy of {activeModalImage.doctor}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Clinical;
