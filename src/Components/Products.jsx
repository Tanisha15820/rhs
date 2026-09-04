import React, { useEffect, useState } from "react";
import BipolarPlasmaGenerator from "../assets/images/bipolar_plasma_generator.png";
import DiodeLaser from "../assets/images/diode_laser.png";
import CyberBlade from "../assets/images/cyber_blade.png";
import BladderScanner from "../assets/images/bladder_scanner.png";
import FlexibleVideoURS from "../assets/images/flexible_video_urs.png";
import EndoVisionSet from "../assets/images/endo_vision_set.png";
import { getMachineProducts } from "../utils/machineStorage";

const PRESET_MAP = {
  bipolar_plasma_generator: BipolarPlasmaGenerator,
  diode_laser: DiodeLaser,
  cyber_blade: CyberBlade,
  bladder_scanner: BladderScanner,
  flexible_video_urs: FlexibleVideoURS,
  endo_vision_set: EndoVisionSet,
};

const Products = () => {
  const [productsData, setProductsData] = useState(getMachineProducts);

  useEffect(() => {
    const handleUpdate = () => {
      setProductsData(getMachineProducts());
    };

    window.addEventListener("rhs_machines_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_machines_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const products = productsData.map((item) => ({
    ...item,
    image: item.image || PRESET_MAP[item.presetImageKey] || BipolarPlasmaGenerator,
    bg: item.bg || "bg-[#EEF5FF]",
    iconBg: item.iconBg || "bg-[#D9E8FF]",
    iconColor: item.iconColor || "text-[#4285E8]",
    lineColor: item.lineColor || "bg-[#4285E8]",
  }));

  const [startIndex, setStartIndex] = useState(0);

  const maxStartIndex = Math.max(0, products.length - 5);

  const nextSlide = () => {
    if (products.length <= 5) return;
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (products.length <= 5) return;
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  useEffect(() => {
    if (products.length <= 5) {
      setStartIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [products.length, maxStartIndex]);

  const visibleProducts =
    products.length <= 5
      ? products
      : products.slice(startIndex, startIndex + 5);

  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#E9E6FF]/70 blur-2xl" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#E7F5FF]/80 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#EEF0FF] blur-3xl" />
      <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#E8F8F5] blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              Our Products
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Healthcare{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            High quality medical products and equipment for
            <br className="hidden sm:block" />
            better care, safety and reliability.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="absolute -left-2 top-1/2 z-30 flex h-9 w-9
              -translate-y-1/2 items-center justify-center rounded-full
              border border-[#E3EAF5] bg-white text-[#16A7B0]
              shadow-sm transition-all duration-300
              hover:-translate-x-1 hover:shadow-md
              disabled:cursor-not-allowed disabled:opacity-40
              sm:-left-5"
          >
            <span className="text-xl leading-none">‹</span>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={startIndex >= products.length - 5}
            className="absolute -right-2 top-1/2 z-30 flex h-9 w-9
              -translate-y-1/2 items-center justify-center rounded-full
              border border-[#E3EAF5] bg-white text-[#16A7B0]
              shadow-sm transition-all duration-300
              hover:translate-x-1 hover:shadow-md
              disabled:cursor-not-allowed disabled:opacity-40
              sm:-right-5"
          >
            <span className="text-xl leading-none">›</span>
          </button>

          {/* Cards */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            {visibleProducts.map((product, index) => {
              const isCenter = index === 2;

              return (
                <div
                  key={`${product.name}-${startIndex}-${index}`}
                  className={`
                    group relative shrink-0 overflow-hidden rounded-2xl
                    border border-white/90
                    ${product.bg}

                    ${
                      isCenter
                        ? "w-[23%] min-w-[205px] h-[325px] -translate-y-2 shadow-[0_18px_45px_rgba(55,75,110,0.15)]"
                        : "w-[18.5%] min-w-[160px] h-[280px] shadow-[0_8px_30px_rgba(55,75,110,0.07)]"
                    }

                    transition-all duration-500 ease-out
                    hover:-translate-y-2
                    hover:shadow-[0_18px_45px_rgba(55,75,110,0.14)]
                  `}
                >
                  {/* Soft Decorative Circle */}
                  <div
                    className={`
                      absolute left-1/2 top-8 -translate-x-1/2
                      rounded-full opacity-50 blur-[1px]
                      ${product.iconBg}
                      ${isCenter ? "h-40 w-40" : "h-32 w-32"}
                    `}
                  />

                  {/* Image */}
                  <div
                    className={`
                      relative flex items-center justify-center
                      ${isCenter ? "h-[220px]" : "h-[185px]"}
                    `}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`
                        relative z-10 object-contain
                        transition-transform duration-500
                        group-hover:scale-105
                        ${
                          isCenter
                            ? "max-h-[190px] max-w-[88%]"
                            : "max-h-[160px] max-w-[85%]"
                        }
                      `}
                    />
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 px-2 pb-2 text-center">
                    <h3
                      className={`
                        mt-2
                        font-semibold text-[#253653]
                        ${isCenter ? "text-sm" : "text-[11px] sm:text-xs"}
                      `}
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-7 flex justify-center gap-2">
          {products.slice(0, products.length - 4).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setStartIndex(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  startIndex === index
                    ? "w-5 bg-[#20B7AE]"
                    : "w-1.5 bg-[#CBD5E1]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
