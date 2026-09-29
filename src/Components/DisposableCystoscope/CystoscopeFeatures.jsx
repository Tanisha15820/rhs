import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Sparkles,
  Layers,
  Eye,
  Sliders,
  Feather,
  Pipette,
  Camera,
  CheckCircle2,
  Info,
  Maximize2,
} from "lucide-react";
import cystoscopeImg from "../../assets/images/disposable_cystoscope.jpg";

const CystoscopeFeatures = () => {
  const [activeFeature, setActiveFeature] = useState("angle");

  const callouts = [
    {
      id: "angle",
      number: "01",
      title: "210° Bending Angle",
      tagline: "Omnidirectional Target Locating",
      description:
        "The 210° up-and-down bending angle makes it easier to find targets, especially for inspecting the bladder neck, anterior wall, and difficult-to-reach bladder diverticula.",
      spec: "210° Up / 210° Down Deflection",
      icon: <RotateCcw className="h-5 w-5 text-primary" />,
      hotspot: { x: "12%", y: "65%" }, // Near curled tip
    },
    {
      id: "pebax",
      number: "02",
      title: "Pebax Insertion Tube",
      tagline: "Medical-Grade Hybrid Sheath",
      description:
        "Medical-grade material Pebax wraps insertion tube with both stiffness and flexibility, reducing urethral friction and preventing tissue trauma during gentle advancement.",
      spec: "High Lubricity Pebax Wrapping",
      icon: <Layers className="h-5 w-5 text-primary" />,
      hotspot: { x: "36%", y: "48%" }, // Along black shaft
    },
    {
      id: "tip",
      number: "03",
      title: "Distal Tip",
      tagline: "Bullet-Shaped Low Resistance",
      description:
        "Contains the micro-camera and dual LED illumination. The bullet-shaped atraumatic profile navigates the male and female urethra smoothly with minimal resistance.",
      spec: "CMOS Sensor + Dual LED Lights",
      icon: <Eye className="h-5 w-5 text-primary" />,
      hotspot: { x: "16%", y: "78%" }, // Distal tip lens
    },
    {
      id: "irrigation",
      number: "04",
      title: "Irrigation Valve",
      tagline: "Crystal Clear Field Maintenance",
      description:
        "Transparent Luer lock stopcock valve enables smooth, continuous saline irrigation to wash away debris, blood clots, and maintain optimal visibility.",
      spec: "Standard Luer Lock Connection",
      icon: <Pipette className="h-5 w-5 text-primary" />,
      hotspot: { x: "72%", y: "70%" }, // Stopcock valve
    },
    {
      id: "channel",
      number: "05",
      title: "Working Channel Port",
      tagline: "Suction & Biopsy Ready",
      description:
        "Suction and biopsies can be performed effortlessly through the dedicated working channel, accommodating biopsy forceps, baskets, and laser fibers.",
      spec: "Accommodates Instruments & Biopsy",
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      hotspot: { x: "75%", y: "62%" }, // Channel port
    },
    {
      id: "handle",
      number: "06",
      title: "Ergonomic Handle",
      tagline: "Weighs Less Than 300g",
      description:
        "The handle is ergonomically designed, the overall weight is less than 300g, make it more comfortable for medical staff to use during prolonged or back-to-back procedures.",
      spec: "Ultra-Lightweight < 300g",
      icon: <Feather className="h-5 w-5 text-primary" />,
      hotspot: { x: "64%", y: "55%" }, // Main handle body
    },
    {
      id: "suction",
      number: "07",
      title: "Suction Connector & Button",
      tagline: "Quick Evacuation Control",
      description:
        "Allows for connection of suction tubing. Press the dedicated button to start suctioning, rapidly clearing cloudy fluid and blood clots without losing scope position.",
      spec: "Dedicated Suction Port & Valve",
      icon: <Maximize2 className="h-5 w-5 text-primary" />,
      hotspot: { x: "79%", y: "73%" }, // Blue connector
    },
    {
      id: "buttons",
      number: "08",
      title: "Multifunction Buttons",
      tagline: "White Balance & Snapshots",
      description:
        "Dual multifunction buttons on the upper handle allow for quick white balance adjustment, illumination intensity switching, and instant high-res photo/video recording.",
      spec: "Dual Top Shortcut Buttons",
      icon: <Camera className="h-5 w-5 text-primary" />,
      hotspot: { x: "56%", y: "56%" }, // Top buttons
    },
    {
      id: "control",
      number: "09",
      title: "Bending Control",
      tagline: "Smooth Distal Tip Articulation",
      description:
        "Smooth bending control dial makes it easier for medical staff to control the distal tip with single-thumb micro-adjustments for precise anatomical navigation.",
      spec: "Smooth Single-Thumb Lever",
      icon: <Sliders className="h-5 w-5 text-primary" />,
      hotspot: { x: "57%", y: "70%" }, // Blue dial
    },
  ];

  const currentFeature =
    callouts.find((c) => c.id === activeFeature) || callouts[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE HARDWARE ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Anatomical Precision Meets{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Ergonomic Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Explore the precision engineered components of the Single-use Cystoscope CY Series designed for optimal lower urinary tract diagnosis.
          </motion.p>
        </div>

        {/* Interactive Showcase Box */}
        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(25,168,232,0.06)] overflow-hidden">
          {/* Main Visual with Hotspots */}
          <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 p-4 sm:p-8 lg:p-12">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 sm:p-4 shadow-inner">
              <img
                src={cystoscopeImg}
                alt="HugeMed CY Series Single-Use Cystoscope Architecture"
                className="w-full h-auto object-contain select-none"
              />

              {/* Hotspots Overlay */}
              {callouts.map((item) => {
                const isSelected = activeFeature === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeature(item.id)}
                    style={{ left: item.hotspot.x, top: item.hotspot.y }}
                    aria-label={item.title}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20"
                  >
                    <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center">
                      <span
                        className={`absolute inline-flex h-full w-full rounded-full opacity-75 transition-all duration-300 ${
                          isSelected
                            ? "animate-ping bg-primary"
                            : "bg-primary/40 group-hover:bg-primary/70"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[10px] font-bold shadow-md transition-all duration-300 ${
                          isSelected
                            ? "bg-primary text-white scale-110 ring-4 ring-primary/20"
                            : "bg-white text-primary border border-primary/50 group-hover:bg-primary group-hover:text-white"
                        }`}
                      >
                        {item.number}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Detail Floating Card on Top of Image or Directly Below */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-r from-blue-50/90 via-white to-blue-50/70 p-4 sm:p-6 shadow-md backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      {currentFeature.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          FEATURE #{currentFeature.number}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {currentFeature.tagline}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {currentFeature.title}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm border border-blue-100">
                    {currentFeature.spec}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {currentFeature.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Selection Nav Badges */}
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
              Click to inspect component callouts:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {callouts.map((item) => {
                const isSelected = activeFeature === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeature(item.id)}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:bg-blue-50/50"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="text-xs font-semibold truncate">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopeFeatures;
