import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fortisLogo from "../assets/images/fortis.png";
import apolloLogo from "../assets/images/apollo.png";
import aiimsLogo from "../assets/images/aiims.png";
import medantaLogo from "../assets/images/medanta.png";
import gmchLogo from "../assets/images/gmch.png";
import pgiLogo from "../assets/images/pgi-chandigarh.png";
import sskmLogo from "../assets/images/sskm.svg";
import doonLogo from "../assets/images/doon-medical.webp";

import { getAllClients } from "../utils/clientStorage";

const DEFAULT_CLIENTS = [
  {
    id: "fortis",
    name: "Fortis Healthcare",
    presetKey: "fortis",
    logo: fortisLogo,
    accent: "bg-[#EDF9F7]",
  },

  {
    id: "apollo",
    name: "Apollo Hospitals",
    presetKey: "apollo",
    logo: apolloLogo,
    accent: "bg-[#FFF5F2]",
  },
  {
    id: "aiims",
    name: "AIIMS",
    presetKey: "aiims",
    logo: aiimsLogo,
    accent: "bg-[#F2F8FF]",
  },
  {
    id: "medanta",
    name: "Medanta",
    presetKey: "medanta",
    logo: medantaLogo,
    accent: "bg-[#F5F3FF]",
  },
  {
    id: "gmch",
    name: "GMCH",
    presetKey: "gmch",
    logo: gmchLogo,
    accent: "bg-[#F0FAF8]",
  },
  {
    id: "pgi",
    name: "PGI Chandigarh",
    presetKey: "pgi",
    logo: pgiLogo,
    accent: "bg-[#FFF5F2]",
  },
  {
    id: "sskm",
    name: "SSKM",
    presetKey: "sskm",
    logo: sskmLogo,
    accent: "bg-[#F2F8FF]",
  },
  {
    id: "doon",
    name: "Doon Medical College",
    presetKey: "doon",
    logo: doonLogo,
    accent: "bg-[#F2F8FF]",
  },
];

const CLIENT_LOGO_MAP = {
  fortis: fortisLogo,
  apollo: apolloLogo,
  aiims: aiimsLogo,
  medanta: medantaLogo,
  gmch: gmchLogo,
  pgi: pgiLogo,
  sskm: sskmLogo,
  doon: doonLogo,
};

const getClientLogo = (client) => {
  if (client.logo) {
    return client.logo;
  }

  if (client.presetKey && CLIENT_LOGO_MAP[client.presetKey]) {
    return CLIENT_LOGO_MAP[client.presetKey];
  }

  return null;
};

const ClientCard = ({ client }) => {
  const logo = getClientLogo(client);

  if (!logo) {
    return null;
  }

  const accentClass = client.accent || "bg-[#F3F7FF]";

  return (
    <div
      className={`group flex h-[140px] min-w-[260px] shrink-0 items-center justify-center border-b border-[#E2ECF5] px-5 ${accentClass} sm:h-[200px] sm:w-[250px] sm:min-w-[250px] md:h-[200px] md:w-[260px] md:min-w-[260px]`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={logo}
          alt={`${client.name || "Client"} logo`}
          className="max-h-[100px] max-w-[165px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[80px] sm:max-w-[175px] md:max-h-[85px] md:max-w-[185px]"
        />
      </div>
    </div>
  );
};

function Clients() {
  const [adminClients, setAdminClients] = useState([]);

  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const loadClients = () => {
      try {
        const clients = getAllClients();

        if (Array.isArray(clients)) {
          setAdminClients(clients);
        }
      } catch (error) {
        console.error("Error loading clients:", error);
        setAdminClients([]);
      }
    };

    loadClients();

    window.addEventListener("rhs_clients_updated", loadClients);
    window.addEventListener("storage", loadClients);

    return () => {
      window.removeEventListener("rhs_clients_updated", loadClients);
      window.removeEventListener("storage", loadClients);
    };
  }, []);

  /*
   * Start with the 7 permanent logos.
   *
   * If admin has added additional clients,
   * they will also be displayed.
   *
   * Duplicate preset logos are ignored.
   */
  const allClients = [...DEFAULT_CLIENTS, ...adminClients];

  const uniqueClients = [];
  const usedLogos = new Set();

  allClients.forEach((client) => {
    const key =
      client.presetKey ||
      client.logo ||
      client.name?.trim().toLowerCase() ||
      client.id;

    if (!key) return;

    if (usedLogos.has(key)) return;

    usedLogos.add(key);
    uniqueClients.push(client);
  });

  const displayClients = uniqueClients;

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || displayClients.length <= 1) {
      return;
    }

    let lastTime = performance.now();

    const speed = 35;

    const autoScroll = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isHovered.current) {
        slider.scrollLeft += (speed * deltaTime) / 1000;
      }

      /*
       * When the last card is reached,
       * go back to the first card.
       */
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [displayClients.length]);

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

        <div className="relative mx-auto max-w-[1200px]">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous clients"
            className="absolute -left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#DCE7F1] bg-white text-[#1684D8] shadow-md transition-all duration-200 hover:-translate-x-1 hover:shadow-lg lg:flex"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            onMouseEnter={() => {
              isHovered.current = true;
            }}
            onMouseLeave={() => {
              isHovered.current = false;
            }}
            className="flex flex-nowrap gap-5 overflow-x-auto px-2 pb-5 scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayClients.map((client) => (
              <ClientCard key={client.presetKey || client.id} client={client} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next clients"
            className="absolute -right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#DCE7F1] bg-white text-[#1684D8] shadow-md transition-all duration-200 hover:translate-x-1 hover:shadow-lg lg:flex"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Indicator */}
        <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
          <span className="h-1.5 w-8 rounded-full bg-[#20AFA7]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D8E5F0]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D8E5F0]" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
