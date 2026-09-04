import React from "react";
import humanImage from "../../assets/images/human.png";
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
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
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
                className="
                  group
                  relative
                  flex
                  min-h-[120px]
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E2ECF7]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_4px_20px_rgba(50,100,180,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#147BFF]/50
                  hover:shadow-[0_8px_30px_rgba(20,123,255,0.15)]
                "
              >
                {/* Left Blue Line */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    bg-[#147BFF]
                  "
                />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={application.icon}
                    alt={application.title}
                    className="
                      h-14
                      w-14
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Card Content */}

                <div className="ml-4 min-w-0 flex-1">
                  {/* Number */}

                  <p
                    className="
                      mb-1
                      text-[10px]
                      font-bold
                      tracking-wider
                      text-[#147BFF]
                    "
                  >
                    {application.number}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      text-sm
                      font-bold
                      uppercase
                      leading-tight
                      tracking-wide
                      text-[#0A2759]
                      sm:text-base
                    "
                  >
                    {application.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[200px]
                      text-[11px]
                      leading-[16px]
                      text-[#66758A]
                      sm:text-xs
                      sm:leading-[17px]
                    "
                  >
                    {application.description}
                  </p>
                </div>

                {/* Hover Bottom Line */}

                <div
                  className="
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
                  "
                />
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
          {/* Human Image */}

          <img
            src={humanImage}
            alt="Medical applications"
            className="
              relative
              z-10
              h-auto
              max-h-[520px]
              w-auto
              max-w-full
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Applications;
