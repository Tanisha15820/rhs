import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import maxLogo from "../assets/images/max.png";
import fortisLogo from "../assets/images/fortis.png";
import siemensLogo from "../assets/images/siemens.png";
import { getAllClients } from "../utils/clientStorage";

// Preset logo mapping
const CLIENT_LOGO_MAP = {
  max: maxLogo,
  fortis: fortisLogo,
  siemens: siemensLogo,
};

// Helper function to pick the correct logo image
const getClientLogo = (client) => {
  if (client.logo) return client.logo;
  if (client.presetKey && CLIENT_LOGO_MAP[client.presetKey]) {
    return CLIENT_LOGO_MAP[client.presetKey];
  }
  return maxLogo;
};

// Single client logo card
const ClientCard = ({ client }) => {
  const accentClass = client.accent || "bg-[#F3F7FF]";

  return (
    <div
      className={`flex h-[140px] shrink-0 items-center justify-center px-5 ${accentClass} border-b border-[#E2ECF5] sm:h-[200px] sm:w-[250px] sm:min-w-[250px] md:h-[200px] md:w-[260px] md:min-w-[260px]`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={getClientLogo(client)}
          alt={`${client.name || "Client"} logo`}
          className="max-h-[75px] max-w-[165px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[80px] sm:max-w-[175px] md:max-h-[85px] md:max-w-[185px]"
        />
      </div>
    </div>
  );
};

/**
 * Clients Section Component
 * Displays an auto-scrolling horizontal banner of hospital client logos.
 */
function Clients() {
  const [clientsData, setClientsData] = useState(getAllClients);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isHovered = useRef(false);

  // Sync data when updated in Admin portal
  useEffect(() => {
    const handleUpdate = () => {
      setClientsData(getAllClients());
    };

    window.addEventListener("rhs_clients_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_clients_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Ensure continuous auto-scroll loop has enough cards
  const displayClients =
    clientsData.length < 12
      ? [...clientsData, ...clientsData, ...clientsData]
      : [...clientsData, ...clientsData];

  // Automatic smooth horizontal scrolling
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let lastTime = performance.now();
    const speed = 35; // scroll speed in pixels per second

    const autoScroll = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Pause when user hovers mouse over carousel
      if (!isHovered.current) {
        slider.scrollLeft += (speed * deltaTime) / 1000;
      }

      // Loop back to start when reaching the end
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

  // Manual scroll with arrow buttons
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
        {/* Section Heading */}
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
            We are proud to partner with renowned hospitals, clinics, and healthcare organizations that trust our products and solutions for better care and outcomes.
          </p>
        </div>

        {/* Client Carousel */}
        <div className="relative mx-auto max-w-[1200px]">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous clients"
            className="absolute -left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE7F1] bg-white text-[#1684D8] shadow-md transition-all duration-200 hover:-translate-x-1 hover:shadow-lg lg:flex cursor-pointer"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button>

          {/* Cards Track */}
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
            {displayClients.map((client, index) => (
              <ClientCard
                key={`${client.id || "client"}-${index}`}
                client={client}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next clients"
            className="absolute -right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE7F1] bg-white text-[#1684D8] shadow-md transition-all duration-200 hover:translate-x-1 hover:shadow-lg lg:flex cursor-pointer"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Pagination Indicator */}
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
