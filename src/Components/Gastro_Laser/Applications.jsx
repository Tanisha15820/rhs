import React from "react";

// Background and main human image
import applicationsBg from "../../assets/images/application_bg.png";
import humanImage from "../../assets/images/human.png";

// Application icons
import entIcon from "../../assets/images/entt.png";
import gastroIcon from "../../assets/images/entt.png";
import generalSurgeryIcon from "../../assets/images/entt.png";
import disectomyIcon from "../../assets/images/entt.png";
import arthroscopyIcon from "../../assets/images/entt.png";
import urologyIcon from "../../assets/images/entt.png";

const Applications = () => {
  const applications = [
    {
      number: "01",
      title: "ENT",
      description: "Precision solutions for ear, nose and throat procedures.",
      icon: entIcon,
    },
    {
      number: "02",
      title: "GASTROENTEROLOGY",
      description:
        "Advanced technology for precise treatment of gastrointestinal disorders.",
      icon: gastroIcon,
    },
    {
      number: "03",
      title: "GENERAL SURGERY",
      description:
        "Versatile performance for a wide range of surgical applications.",
      icon: generalSurgeryIcon,
    },
    {
      number: "04",
      title: "DISCECTOMY",
      description: "Minimally invasive approach for spine procedures.",
      icon: disectomyIcon,
    },
    {
      number: "05",
      title: "ARTHROSCOPY",
      description: "Enhanced visualization and precision for joint procedures.",
      icon: arthroscopyIcon,
    },
    {
      number: "06",
      title: "UROLOGY",
      description:
        "Lithotripsy, BPH, tumors, bladder, kidney and ureteral structures.",
      icon: urologyIcon,
      active: true,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* ================= BACKGROUND ================= */}

      <img
        src={applicationsBg}
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Light overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/20" />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          flex-col
          px-6
          py-14
          sm:px-10
          lg:flex-row
          lg:items-center
          lg:px-12
          xl:px-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-20 w-full lg:w-[52%]">
          {/* Small Heading */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#1CA7E9]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7] sm:text-sm">
              Applications
            </p>
            <span className="h-px w-8 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}

          <h1
            className="
              max-w-[600px]
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#102A43]
              sm:text-4xl
              md:text-5xl
            "
          >
            <span className="block">Precision Technology.</span>

            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Limitless Possibilities.
            </span>
          </h1>

          {/* Description */}

          <p className="mb-7 max-w-lg text-sm leading-6 text-[#697A94] sm:text-base sm:leading-7">
            Litho EVO can be used to perform incision, resection, ablation,
            vaporization, coagulation and hemostasis of soft tissue and in
            lithotripsy of stones in various medical specialties.
          </p>

          {/* ================= APPLICATION CARDS ================= */}

          <div className="grid max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2">
            {applications.map((application) => (
              <div
                key={application.number}
                className={`
                  group
                  relative
                  flex
                  min-h-[100px]
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  px-4
                  py-4
                  transition-all
                  duration-300

                  ${
                    application.active
                      ? `
                        border-[#5C3BFF]
                        bg-gradient-to-r
                        from-[#175DFF]
                        to-[#6934E8]
                        shadow-[0_10px_40px_rgba(55,70,255,0.3)]
                      `
                      : `
                        border-[#E2ECF7]
                        bg-white
                        shadow-[0_4px_20px_rgba(50,100,180,0.08)]
                        hover:border-[#147BFF]/50
                        hover:shadow-[0_8px_30px_rgba(20,123,255,0.15)]
                        hover:-translate-y-0.5
                      `
                  }
                `}
              >
                {/* Left Blue Line */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    ${application.active ? "bg-[#21C8F6]" : "bg-[#147BFF]"}
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300
                    ${
                      application.active
                        ? "border-white/30 bg-white/10 group-hover:bg-white/20"
                        : "border-[#D9E8FA] bg-[#F4F9FF] group-hover:border-[#147BFF]/40 group-hover:bg-[#EBF3FF]"
                    }
                  `}
                >
                  <img
                    src={application.icon}
                    alt={application.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Card Content */}

                <div className="ml-4 min-w-0 flex-1">
                  {/* Number */}

                  <p
                    className={`
                      mb-[3px]
                      text-[8px]
                      font-bold
                      ${application.active ? "text-white/60" : "text-[#147BFF]"}
                    `}
                  >
                    {application.number}
                  </p>

                  {/* Title */}

                  <h3
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-wide
                      sm:text-[11px]
                      ${application.active ? "text-white" : "text-[#0A2759]"}
                    `}
                  >
                    {application.title}
                  </h3>

                  {/* Description */}

                  <p
                    className={`
                      mt-1.5
                      max-w-[180px]
                      text-[8px]
                      leading-[12px]
                      sm:text-[9px]
                      sm:leading-[13px]
                      ${application.active ? "text-white/80" : "text-[#66758A]"}
                    `}
                  >
                    {application.description}
                  </p>
                </div>

                {/* Hover Glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#21C8F6]
                    transition-all
                    duration-500
                    group-hover:w-full
                  `}
                />

                {/* Left Hover Glow */}
                {!application.active && (
                  <div className="pointer-events-none absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-[#147BFF]/0 blur-sm transition-all duration-300 group-hover:bg-[#147BFF]/60" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT HUMAN IMAGE ================= */}

        <div
          className="
            relative
            mt-12
            flex
            w-full
            items-center
            justify-center
            lg:mt-0
            lg:w-[48%]
          "
        >
          {/* Large Blue Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[400px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#147BFF]/8
              blur-[100px]
              sm:h-[550px]
              sm:w-[550px]
            "
          />

          {/* Human */}

          <img
            src={humanImage}
            alt="Medical applications"
            className="
              relative
              z-10
              w-full
              max-w-[600px]
              object-contain
              drop-shadow-[0_0_40px_rgba(20,123,255,0.2)]
            "
          />

          {/* ================= CONNECTOR LINES ================= */}

          {/* Top Connector */}

          <div className="pointer-events-none absolute left-[8%] top-[26%] hidden lg:block">
            <div className="h-[1px] w-[45%] bg-gradient-to-r from-[#147BFF]/0 via-[#147BFF]/60 to-[#147BFF]/30" />
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#147BFF] bg-white shadow-[0_0_10px_rgba(20,123,255,0.4)]" />
          </div>

          {/* Middle Connector */}

          <div className="pointer-events-none absolute left-[6%] top-[46%] hidden lg:block">
            <div className="h-[1px] w-[47%] bg-gradient-to-r from-[#147BFF]/0 via-[#147BFF]/60 to-[#147BFF]/30" />
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#147BFF] bg-white shadow-[0_0_10px_rgba(20,123,255,0.4)]" />
          </div>

          {/* Bottom Connector */}

          <div className="pointer-events-none absolute left-[10%] top-[66%] hidden lg:block">
            <div className="h-[1px] w-[43%] bg-gradient-to-r from-[#147BFF]/0 via-[#147BFF]/60 to-[#147BFF]/30" />
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#147BFF] bg-white shadow-[0_0_10px_rgba(20,123,255,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
