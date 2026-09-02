import React from "react";
import {
  Stethoscope,
  Scissors,
  Activity,
  ArrowRight,
  User,
  Building2,
} from "lucide-react";

import laryngeal1 from "../../assets/images/clinical/laryngeal_1.png";
import laryngeal2 from "../../assets/images/clinical/laryngeal_2.png";
import laryngeal3 from "../../assets/images/clinical/laryngeal_3.png";
import laryngeal4 from "../../assets/images/clinical/laryngeal_4.png";

import stapedotomy1 from "../../assets/images/clinical/stapedotomy_1.png";
import stapedotomy2 from "../../assets/images/clinical/stapedotomy_2.png";

import papillomatosis1 from "../../assets/images/clinical/papillomatosis_1.png";
import papillomatosis2 from "../../assets/images/clinical/papillomatosis_2.png";
import papillomatosis3 from "../../assets/images/clinical/papillomatosis_3.png";

import thyroid1 from "../../assets/images/clinical/thyroid_1.png";
import thyroid2 from "../../assets/images/clinical/thyroid_2.png";
import thyroid3 from "../../assets/images/clinical/thyroid_3.png";

const Clinical = () => {
  const clinicalCases = [
    {
      title: "LARYNGEAL PATHOLOGIES",
      icon: Stethoscope,
      color: "#159DA6",
      imageList: [laryngeal1, laryngeal2, laryngeal3, laryngeal4],

      captions: [
        "Left vocal cord polyp",
        "3 months Follow-up",
        "Squamous cell carcinoma (T1a)",
        "6 months Follow-up",
      ],

      doctor: "Stefano Dallari, M.D.",
      details:
        "Director of the Department of ENT Surgery, Ospedale di Fermo (Hospital of Fermo, Italy)",
    },

    {
      title: "ONE SHOT® STAPEDOTOMY",
      icon: Scissors,
      color: "#2585F5",
      imageList: [stapedotomy1, stapedotomy2],

      captions: [
        '"ONE SHOT" stapedotomy with CO₂ laser',
        '"ONE SHOT" stapedotomy with diode laser',
      ],

      doctor: "Arturo Mario Poletti, M.D.",
      details:
        "Consultant - Department of ENT Surgery, American Hospital Dubai (UAE)",
    },

    {
      title: "RESPIRATORY PAPILLOMATOSIS",
      icon: Activity,
      color: "#7259D6",
      imageList: [papillomatosis1, papillomatosis2, papillomatosis3],

      captions: [
        "Recurrent respiratory papillomatosis",
        "After removal of papilloma (obvious glottic stenosis)",
        "11 months Follow-up (after 4 procedures)",
      ],

      doctor: "",
      details: "",
    },

    {
      title: "VOCAL CORD & THYROID SURGERIES",
      icon: Activity,
      color: "#EF3F91",
      imageList: [thyroid1, thyroid2, thyroid3],

      captions: [
        "Bilateral paralysis of the vocal cords (after total thyroidectomy)",
        "Posterior cordotomy",
        "6 months Follow-up",
      ],

      doctor: "",
      details: "",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-20">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#EAF4FF] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#EDF5FF] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E0F3F2]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#20B7C2]" />

          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-base">
            Clinical Excellence
          </p>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#20B7C2]" />
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
          The Technological Solution for{" "}
          <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
            ENT Treatment
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-center text-base text-[#7181A3] md:text-lg">
          SmartXide² TRIO delivers precise, safe and effective outcomes across a
          wide range of ENT procedures. Real cases. Real results.
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {clinicalCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex h-full flex-col">
                {/* =================================
                    CASE CARD
                ================================== */}

                <div
                  className="
                    group
                    relative
                    flex
                    flex-1
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E8EDF6]
                    bg-white
                    px-5
                    pb-6
                    pt-5
                    shadow-[0_10px_35px_rgba(36,76,130,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-transparent
                    hover:shadow-[0_18px_45px_rgba(36,76,130,0.14)]
                    sm:px-7
                    sm:pt-6
                  "
                >
                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 opacity-80"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}55)`,
                    }}
                  />

                  {/* =================================
                      CARD TITLE
                  ================================== */}

                  <div className="flex items-center gap-3">
                    {/* Icon circle */}

                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${item.color}14`,
                        boxShadow: `0 4px 12px ${item.color}22`,
                      }}
                    >
                      <Icon
                        size={20}
                        strokeWidth={2}
                        style={{
                          color: item.color,
                        }}
                      />
                    </div>

                    {/* Title */}

                    <h3
                      className="text-sm font-extrabold uppercase tracking-wide sm:text-base"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* =================================
                      IMAGE ROW
                  ================================== */}

                  <div
                    className={`
                      mt-6
                      flex
                      flex-1
                      items-start
                      justify-center
                      ${item.imageList.length === 4 ? "gap-2 sm:gap-4" : "gap-4 sm:gap-7"}
                    `}
                  >
                    {item.imageList.map((imgSrc, imageIndex) => (
                      <React.Fragment key={imageIndex}>
                        {/* IMAGE + CAPTION */}

                        <div
                          className="
                            flex
                            min-w-0
                            flex-1
                            flex-col
                            items-center
                          "
                        >
                          {/* =================================
                              IMAGE CONTAINER
                          ================================== */}

                          <div
                            className="
                              flex
                              aspect-square
                              w-full
                              max-w-[100px]
                              items-center
                              justify-center
                              overflow-hidden
                              rounded-full
                              border-2
                              bg-white
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                            style={{
                              borderColor: `${item.color}40`,
                              boxShadow: `0 6px 18px ${item.color}20`,
                            }}
                          >
                            <img
                              src={imgSrc}
                              alt={item.captions[imageIndex]}
                              className="h-full w-full object-cover rounded-full"
                            />
                          </div>

                          {/* Small colored line */}

                          <div
                            className="mt-3 h-[3px] w-14 rounded-full transition-all duration-300 group-hover:w-16"
                            style={{
                              backgroundColor: item.color,
                            }}
                          />

                          {/* Caption */}

                          <p className="mt-3 max-w-[130px] text-center text-xs font-medium leading-[18px] text-[#4A566E] sm:text-sm sm:leading-5">
                            {item.captions[imageIndex]}
                          </p>
                        </div>

                        {/* =================================
                            ARROW BETWEEN IMAGES
                        ================================== */}

                        {imageIndex < item.imageList.length - 1 && (
                          <div className="mt-12 flex shrink-0 items-center">
                            <div
                              className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                              style={{
                                backgroundColor: item.color,
                                boxShadow: `0 5px 12px ${item.color}40`,
                              }}
                            >
                              <ArrowRight
                                size={13}
                                strokeWidth={3}
                                className="text-white"
                              />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* =====================================
                    DOCTOR / COURTESY BAR
                ====================================== */}

                {item.doctor && (
                  <div className="mt-4 pt-1">
                    <div className="flex items-start gap-3 rounded-xl border border-[#EDF1F8] bg-white px-4 py-3.5 shadow-[0_6px_20px_rgba(36,76,130,0.05)]">
                      {/* Doctor Icon */}

                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${item.color}12`,
                        }}
                      >
                        <Stethoscope
                          size={18}
                          strokeWidth={2.2}
                          style={{
                            color: item.color,
                          }}
                        />
                      </div>

                      {/* Doctor Information */}

                      <div className="min-w-0">
                        <p className="flex flex-wrap items-center gap-2 text-xs text-[#59677F] sm:text-sm">
                          <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wide text-[#9AA6BC]">
                            <User size={13} />
                            Courtesy of
                          </span>
                          <span
                            className="font-bold"
                            style={{
                              color: item.color,
                            }}
                          >
                            {item.doctor}
                          </span>
                        </p>

                        <p className="mt-1.5 flex items-start gap-1.5 text-[10px] leading-4 text-[#75839D] sm:text-xs sm:leading-5">
                          <Building2
                            size={12}
                            className="mt-0.5 shrink-0 text-[#A6B2C6]"
                          />
                          <span>{item.details}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty courtesy bar for cards without doctor */}

                {!item.doctor && <div className="mt-4 pt-1" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clinical;
