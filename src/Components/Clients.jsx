import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import maxLogo from "../assets/images/max.png";
import fortisLogo from "../assets/images/fortis.png";
import siemensLogo from "../assets/images/siemens.png";

const clients = [
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F3F7FF]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F0FAFF]",
    logo: fortisLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F0FBF6]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F7F4FF]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F0F8FF]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F0FBFA]",
    logo: fortisLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#FFF7F2]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F1F7FF]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F6F3FF]",
    logo: fortisLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#EFFAF8]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F1F8FF]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F0F8FC]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#FFF6F1]",
    logo: fortisLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#FFF3F7]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F1F7FF]",
    logo: maxLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#FFF4F4]",
    logo: fortisLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F2F7FC]",
    logo: siemensLogo,
  },
  {
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F3F7FF]",
    logo: maxLogo,
  },
];

/* CLIENT CARD */

const ClientCard = ({ client }) => {
  return (
    // <div
    //   className="
    //     group
    //     flex
    //     h-[245px]
    //     w-[240px]
    //     min-w-[240px]
    //     flex-shrink-0
    //     flex-col
    //     overflow-hidden
    //     rounded-[16px]
    //     border
    //     border-[#DCE8F2]
    //     bg-white
    //     shadow-[0_8px_25px_rgba(35,70,110,0.07)]
    //     transition-all
    //     duration-300
    //     hover:-translate-y-2
    //     hover:shadow-[0_16px_38px_rgba(35,70,110,0.13)]
    //     sm:h-[255px]
    //     sm:w-[250px]
    //     sm:min-w-[250px]
    //     md:h-[265px]
    //     md:w-[260px]
    //     md:min-w-[260px]
    //   "
    // >
    <div
      className={`
          flex
          h-[140px]
          shrink-0
          items-center
          justify-center
          px-5
          ${client.accent}
          border-b
          border-[#E2ECF5]
           sm:h-[200px]
         sm:w-[250px]
         sm:min-w-[250px]
         md:h-[200px]
         md:w-[260px]
         md:min-w-[260px]
        `}
    >
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="
              max-h-[75px]
              max-w-[165px]
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
              sm:max-h-[80px]
              sm:max-w-[175px]
              md:max-h-[85px]
              md:max-w-[185px]
            "
        />
      </div>
      {/* </div> */}

      {/* <div className="flex flex-1 flex-col bg-[#F6FAFD] px-5 py-4">
        <h3
          className="
            text-[14px]
            font-bold
            leading-5
            text-[#17295C]
            sm:text-[15px]
          "
        >
          {client.name}
        </h3>

        <span
          className="
            mt-1
            text-[8px]
            font-bold
            uppercase
            tracking-[1px]
            text-[#149BC5]
            sm:text-[9px]
          "
        >
          {client.subtitle}
        </span>

        <p
          className="
            mt-2.5
            line-clamp-3
            text-[9px]
            leading-[1.55]
            text-[#71809A]
            sm:text-[10px]
          "
        >
          {client.description}
        </p>
      </div> */}
    </div>
  );
};

/* CLIENTS SECTION */

const Clients = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isHovered = useRef(false);

  /* AUTOMATIC HORIZONTAL SCROLL */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let lastTime = performance.now();

    const speed = 35;

    const autoScroll = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Pause scrolling when the user hovers over the cards
      if (!isHovered.current) {
        slider.scrollLeft += (speed * deltaTime) / 1000;
      }

      // Restart from the beginning when the last card is reached
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /* ARROW SCROLL */

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* SECTION HEADING */}

        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              Our Clients
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Healthcare Brands
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            We are proud to partner with renowned hospitals, clinics, and
            healthcare organizations that trust our products and solutions for
            better care and outcomes.
          </p>
        </div>

        {/* CLIENT CAROUSEL */}

        <div className="relative mx-auto max-w-[1200px]">
          {/* LEFT ARROW */}

          <button
            onClick={() => scroll("left")}
            aria-label="Previous clients"
            className="
              absolute
              -left-4
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE7F1]
              bg-white
              text-[#1684D8]
              shadow-[0_6px_20px_rgba(35,70,110,0.12)]
              transition-all
              duration-300
              hover:-translate-x-1
              hover:shadow-[0_10px_25px_rgba(35,70,110,0.18)]
              lg:flex
            "
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button>

          {/* AUTO SCROLLING CARDS */}

          <div
            ref={sliderRef}
            onMouseEnter={() => {
              isHovered.current = true;
            }}
            onMouseLeave={() => {
              isHovered.current = false;
            }}
            className="
              flex
              flex-nowrap
              gap-5
              overflow-x-auto
              px-2
              pb-5
              scrollbar-none
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {clients.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </div>

          {/* RIGHT ARROW */}

          <button
            onClick={() => scroll("right")}
            aria-label="Next clients"
            className="
              absolute
              -right-4
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE7F1]
              bg-white
              text-[#1684D8]
              shadow-[0_6px_20px_rgba(35,70,110,0.12)]
              transition-all
              duration-300
              hover:translate-x-1
              hover:shadow-[0_10px_25px_rgba(35,70,110,0.18)]
              lg:flex
            "
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button>
        </div>

        {/* MOBILE INDICATOR */}

        <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
          <span className="h-1.5 w-8 rounded-full bg-[#20AFA7]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D8E5F0]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D8E5F0]" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
