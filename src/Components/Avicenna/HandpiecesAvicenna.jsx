import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Grid,
  SlidersHorizontal,
  Sparkles,
  CheckCircle2,
  Zap,
  X,
  ShieldCheck,
  Layers,
  Info,
  PhoneCall,
} from "lucide-react";

import roboflexSystemImg from "../../assets/images/roboflex_avicenna.png";
import ergonomicConsoleImg from "../../assets/images/ergonomic.png";
import roboticControlImg from "../../assets/images/robotic_motion.png";
import laserFiberControlImg from "../../assets/images/laser_fiber_control.png";

const products = [
  {
    id: "roboflex-system",

    title: "RoboFlex Avicenna",

    category: "Robotic fURS System",

    laserType: "Robotic Ureterorenoscopy",

    badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-200/50",

    gradient: "from-[#19A8E8] to-[#2525B8]",

    intro:
      "A robotic system developed for flexible ureterorenoscopy (fURS), designed to support precise and ergonomic treatment of kidney stones through the natural urinary tract.",

    description:
      "RoboFlex enables the surgeon to remotely control flexible endoscope movements from an ergonomic seated position while maintaining precise control throughout the procedure.",

    details:
      "The system combines robotic endoscope control, laser fibre management, irrigation control and an ergonomic surgeon console into one integrated platform.",

    specs: [
      {
        label: "Procedure Type",
        value: "Flexible Ureterorenoscopy (fURS)",
      },
      {
        label: "Primary Application",
        value: "Kidney Stone Treatment",
      },
      {
        label: "Control Type",
        value: "Robotic Console Control",
      },
      {
        label: "Approach",
        value: "Natural Urinary Tract",
      },
    ],

    highlights: [
      "Robotic control of flexible ureteroscope movements",
      "Ergonomic seated surgeon operation",
      "Integrated laser fibre and irrigation management",
    ],

    image: roboflexSystemImg,
  },

  {
    id: "ergonomic-console",

    title: "Ergonomic Surgeon Console",

    category: "Ergonomics & Control",

    laserType: "Surgeon Control",

    badgeColor: "bg-sky-500/10 text-sky-600 border-sky-200/50",

    gradient: "from-sky-500 to-blue-700",

    intro:
      "Designed to allow the surgeon to perform flexible ureteroscopy from a comfortable seated operating position.",

    description:
      "The ergonomic workstation helps reduce physical fatigue associated with prolonged standing and repetitive manual manipulation during ureterorenoscopy procedures.",

    details:
      "The surgeon can operate the robotic system from the console while controlling the endoscope and related procedural functions.",

    specs: [
      {
        label: "Operating Position",
        value: "Ergonomic Seated Position",
      },
      {
        label: "Control Location",
        value: "Remote Surgeon Console",
      },
      {
        label: "Main Benefit",
        value: "Reduced Operator Fatigue",
      },
      {
        label: "Workflow",
        value: "Centralized Procedure Control",
      },
    ],

    highlights: [
      "Comfortable seated working position",
      "Designed to minimize surgeon fatigue",
      "Centralized ergonomic control environment",
    ],

    image: ergonomicConsoleImg,
  },

  {
    id: "robotic-motion-control",

    title: "Robotic Motion Control",

    category: "Ergonomics & Control",

    laserType: "Precision Control",

    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200/50",

    gradient: "from-blue-500 to-indigo-700",

    intro:
      "Precise robotic control of the flexible ureteroscope for smooth movement inside the urinary tract.",

    description:
      "Forward and backward movement, rotation and deflection of the flexible endoscope can be controlled through the system console and manipulator controls.",

    details:
      "The robotic interface enables controlled and repeatable endoscope movements while supporting accurate navigation during fURS procedures.",

    specs: [
      {
        label: "Forward / Backward",
        value: "Robotic Control",
      },
      {
        label: "Rotation",
        value: "Controlled Rotation",
      },
      {
        label: "Deflection",
        value: "Precise Endoscope Deflection",
      },
      {
        label: "Interface",
        value: "Console & Manipulator",
      },
    ],

    highlights: [
      "Forward and backward ureteroscope control",
      "Precise rotation and deflection",
      "Smooth robotic instrument manipulation",
    ],

    image: roboticControlImg,
  },

  {
    id: "laser-fibre-management",

    title: "Laser Fibre Management",

    category: "Laser & Irrigation",

    laserType: "Laser Fibre Control",

    badgeColor: "bg-teal-500/10 text-teal-600 border-teal-200/50",

    gradient: "from-[#20B7AE] to-[#167A91]",

    intro:
      "Integrated laser fibre movement designed to simplify fibre positioning during flexible ureteroscopy.",

    description:
      "The laser fibre can be moved forward and backward through the robotic system, helping the surgeon manage its position relative to the ureteroscope tip.",

    details:
      "The system is designed to support controlled fibre insertion and retraction while helping protect the ureteroscope during procedural use.",

    specs: [
      {
        label: "Fibre Movement",
        value: "Forward & Backward",
      },
      {
        label: "Control",
        value: "Console Operated",
      },
      {
        label: "Positioning",
        value: "Controlled Fibre Advancement",
      },
      {
        label: "Purpose",
        value: "Safer Fibre Management",
      },
    ],

    highlights: [
      "Controlled laser fibre advancement",
      "Automatic forward and backward movement",
      "Designed to support ureteroscope protection",
    ],

    image: laserFiberControlImg,
  },
];

const categories = [
  "All Systems",
  "Robotic fURS System",
  "Ergonomics & Control",
  "Laser & Irrigation",
];

const HandpiecesAvicenna = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' | 'grid'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on selected category
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === "All Systems") return true;
    if (selectedCategory === "CO₂ Laser Systems")
      return p.category.includes("CO₂");
    if (selectedCategory === "Diode Laser Systems")
      return p.category.includes("Diode");
    if (selectedCategory === "Scanners & Optics")
      return p.category.includes("Scanners") || p.category.includes("Optics");
    return true;
  });

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Responsive items visible count
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProducts.length - visibleCount);

  // Auto-play timer for carousel
  useEffect(() => {
    if (isHovered || viewMode !== "carousel" || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, viewMode, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-white text-[#0f172a] pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#19A8E8]/10 to-[#20B7AE]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
              Technology That Empowers Precision
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Advanced Robotic{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Ureteroscopy Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#7C879C]">
            Precision control robotic assistance for safe, erogonomic and
            efficient
            <br className="hidden sm:block" />
            flexible ureteroscopy procedures.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/80 pb-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-md shadow-blue-500/20 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-800">
                {filteredProducts.length}
              </span>{" "}
              Handpiece Solutions
            </span>

            <div className="inline-flex rounded-xl bg-white p-1 border border-slate-200 shadow-sm">
              <button
                onClick={() => setViewMode("carousel")}
                title="Carousel View"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "carousel"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                title="Grid View"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Grid className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === "carousel" ? (
          <div
            className="relative mt-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {maxIndex > 0 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-3 lg:-left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
                  aria-label="Previous handpieces"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute -right-3 lg:-right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
                  aria-label="Next handpieces"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div className="overflow-hidden px-1 py-2">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `calc(-${currentIndex * (100 / visibleCount)}% - ${
                    currentIndex * (24 / visibleCount)
                  }px)`,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <HandpieceCard
                      product={product}
                      onSelect={() => setSelectedProduct(product)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {maxIndex > 0 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-8 bg-gradient-to-r from-primary to-primary-dark"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <HandpieceCard
                key={product.id}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <HandpieceModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const HandpieceCard = ({ product, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(30,58,138,0.06)] transition-all duration-300 hover:border-blue-300 hover:shadow-[0_20px_40px_rgba(25,168,232,0.15)]"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`} />

      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/40 p-6">
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:scale-125" />

        <div className="absolute left-4 top-4 z-10">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${product.badgeColor}`}
          >
            <Zap className="h-3 w-3" />
            {product.laserType}
          </span>
        </div>

        {/* Handpiece Image */}
        <img
          src={product.image}
          alt={product.title}
          className="relative z-10 h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Category Subtitle */}
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {product.category}
          </span>

          {/* Product Title */}
          <h3 className="mt-1 text-xl font-bold text-[#102A43] group-hover:text-primary transition-colors duration-200">
            {product.title}
          </h3>

          {/* Short Intro */}
          <p className="mt-2.5 text-xs font-semibold leading-relaxed text-slate-700">
            {product.intro}
          </p>

          {/* Key Feature Highlights Bullet Points */}
          <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
            {product.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-600"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#20B7AE]" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Card Action */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onSelect}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-dark"
          >
            <Info className="h-4 w-4" />
            View Specifications
          </button>

          <button
            type="button"
            onClick={onSelect}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary shadow-xs transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md"
            aria-label={`View details for ${product.title}`}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* Interactive Modal Dialog Component */
const HandpieceModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
      />

      {/* Modal Card Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase ${product.badgeColor}`}
            >
              {product.laserType}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              SmartXide TRIO Accessory
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200/60 text-slate-600 transition-colors hover:bg-slate-300 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Image Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50/50 via-slate-50 to-cyan-50/30 p-6 border border-slate-100">
              <div className="relative h-64 w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <p className="mt-4 text-center text-xs font-medium text-slate-500">
                Official Reinforce Healthcare ENT Accessory
              </p>
            </div>

            {/* Right Column: Detailed Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#20B7AE]">
                  {product.category}
                </span>
                <h3 className="text-2xl font-extrabold text-[#102A43] sm:text-3xl">
                  {product.title}
                </h3>
              </div>

              <div className="rounded-xl bg-blue-50/60 p-4 border border-blue-100">
                <h4 className="text-xs font-bold uppercase text-primary mb-1">
                  Overview
                </h4>
                <p className="text-xs leading-relaxed text-slate-700">
                  {product.intro}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Clinical Capabilities & Design
                </h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  {product.description}
                </p>
                <p className="text-xs leading-relaxed text-slate-600">
                  {product.details}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="mb-2 text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-primary" />
                  Technical Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-slate-50 p-2.5 border border-slate-100"
                    >
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-[#20B7AE]" />
            <span>Certified ENT Surgical Accessory for SmartXide TRIO</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              Close
            </button>
            <a
              href="/contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:opacity-95"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              Inquire Equipment
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HandpiecesAvicenna;
