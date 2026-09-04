import React from "react";

import humanImage from "../../assets/images/human_bg.png";
import entIcon from "../../assets/images/entt.png";
import gastroIcon from "../../assets/images/gastroenterology.png";
import generalSurgeryIcon from "../../assets/images/entt.png";
import disectomyIcon from "../../assets/images/entt.png";
import arthroscopyIcon from "../../assets/images/entt.png";
import urologyIcon from "../../assets/images/entt.png";

const Applications = () => {
  const applications = [
    {
      number: "01",
      title: "ENT",
      description:
        "Accurate solutions for a wide range of ear, nose and throat procedures.",
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
        "Versatile performance for a variety of surgical applications.",
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
      description:
        "Enhanced visualization and control for key joint procedures.",
      icon: arthroscopyIcon,
    },
    {
      number: "06",
      title: "UROLOGY",
      description:
        "Effective solutions for bladder, kidney and urinary treatments.",
      icon: urologyIcon,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FCFF]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#EAF7FF]
          opacity-70
          blur-[2px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[20%]
          h-[300px]
          w-[400px]
          rounded-full
          bg-[#E7F7FF]
          opacity-70
          blur-[80px]
        "
      />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          max-w-[1450px]
          items-center
          px-6
          py-12
          sm:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-20
            w-full
            lg:w-[59%]
            xl:w-[58%]
          "
        >
          {/* Small Heading */}

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#1CA7E9]" />

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#526B86]
              "
            >
              Applications
            </p>
          </div>

          {/* Main Heading */}

          <h1
            className="
              max-w-[650px]
              text-[40px]
              font-bold
              leading-[1.08]
              tracking-[-1.2px]
              text-[#0B2D55]
              sm:text-[46px]
              md:text-[50px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            <span className="block">Precision Technology.</span>

            <span
              className="
                block
                bg-gradient-to-r
                from-[#159EE8]
                to-[#2928B8]
                bg-clip-text
                text-transparent
              "
            >
              Limitless Possibilities.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-[610px]
              text-[13px]
              leading-[21px]
              text-[#64788F]
              sm:text-[14px]
              sm:leading-[22px]
            "
          >
            Designed to support complex procedures with accuracy, safety and
            ease, our solutions support a wide range of clinical applications
            across modern medical specialties.
          </p>

          {/* =================================================
              CARDS
          ================================================== */}

          <div
            className="
              mt-7
              grid
              max-w-[700px]
              grid-cols-1
              gap-3
              sm:grid-cols-2
              sm:gap-3
            "
          >
            {applications.map((application) => (
              <div
                key={application.number}
                className="
                  group
                  relative
                  flex
                  h-[88px]
                  items-center
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#DCE9F5]
                  bg-white
                  px-4
                  shadow-[0_5px_18px_rgba(35,91,140,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4DBAFF]
                  hover:shadow-[0_8px_25px_rgba(25,151,230,0.14)]
                "
              >
                {/* Left Blue Line */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    bg-[#159FFF]
                  "
                />

                {/* ICON */}

                <div
                  className="
                    ml-1
                    flex
                    h-[58px]
                    w-[58px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F2F8FF]
                    ring-1
                    ring-[#E2EFFB]
                    transition-all
                    duration-300
                    group-hover:bg-[#EAF7FF]
                    group-hover:ring-[#C7E8FF]
                  "
                >
                  <img
                    src={application.icon}
                    alt={application.title}
                    className="
                      h-[37px]
                      w-[37px]
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="ml-4 min-w-0 flex-1 pr-7">
                  {/* Number */}

                  <p
                    className="
                      mb-[2px]
                      text-[8px]
                      font-bold
                      tracking-[0.08em]
                      text-[#238FEA]
                    "
                  >
                    {application.number}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      truncate
                      text-[11px]
                      font-bold
                      uppercase
                      leading-[13px]
                      tracking-[0.01em]
                      text-[#092B55]
                      sm:text-[12px]
                    "
                  >
                    {application.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-[4px]
                      max-w-[220px]
                      text-[8.5px]
                      leading-[12px]
                      text-[#6B7D91]
                      sm:text-[9px]
                      sm:leading-[13px]
                    "
                  >
                    {application.description}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-[22px]
                    w-[22px]
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DCECF9]
                    bg-white
                    text-[#198FF0]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:border-[#9EDAFF]
                    group-hover:bg-[#EFF9FF]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

                {/* Bottom Hover */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#159FFF]
                    to-[#21C8F6]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <div
          className="
            absolute
            right-[2%]
            top-1/2
            hidden
            -translate-y-1/2
            items-center
            justify-center
            lg:flex
            lg:w-[42%]
            xl:right-[3%]
            xl:w-[40%]
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#52D6FF]
              opacity-[0.12]
              blur-[80px]
            "
          />

          {/* Human */}

          <img
            src={humanImage}
            alt="Medical applications"
            className="
              relative
              z-10
              w-[360px]
              max-w-full
              object-contain
              drop-shadow-[0_15px_35px_rgba(30,150,220,0.12)]
              xl:w-[390px]
            "
          />
        </div>

        {/* =================================================
            MOBILE IMAGE
        ================================================== */}

        <div
          className="
            mt-10
            flex
            w-full
            justify-center
            lg:hidden
          "
        >
          <img
            src={humanImage}
            alt="Medical applications"
            className="
              w-[280px]
              object-contain
              sm:w-[320px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Applications;
