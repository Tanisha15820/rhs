import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Sliders,
  Droplets,
  ShieldCheck,
  Lock,
  Compass,
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react";
import featuresImg from "../../assets/images/access_sheath_features.png";

const AccessSheathFeatures = () => {
  const [activeCallout, setActiveCallout] = useState("slider");

  const callouts = [
    {
      id: "bending",
      number: "01",
      title: "Flexible Bending Portion",
      tagline: "Effortless Caliceal Navigation",
      description:
        "Navigate the renal pelvis and calyces easily with a flexible ureteroscope. The tip articulates smoothly along natural anatomical curves without kinking or buckling.",
      spec: "High-flex distal zone for upper tract access",
      icon: <Compass className="h-5 w-5 text-primary" />,
      hotspot: { x: "18%", y: "62%" }, // Near distal tip
    },
    {
      id: "coating",
      number: "02",
      title: "Hydrophilic Coating",
      tagline: "Ultra-Smooth Ureteral Advancement",
      description:
        "The external sheath and dilator tip feature an advanced hydrophilic coating for smooth and easy insertion, reducing friction resistance and protecting ureteral mucosa.",
      spec: "Fully lubricious surface activation with saline",
      icon: <Droplets className="h-5 w-5 text-primary" />,
      hotspot: { x: "42%", y: "45%" }, // Mid-shaft
    },
    {
      id: "seal",
      number: "03",
      title: "Silicone Seal",
      tagline: "Leak-Proof High-Elastic Ring",
      description:
        "A silicone sealing ring ensures a leak-proof connection, preventing fluid leakage while maintaining smooth scope passability and continuous negative-pressure aspiration.",
      spec: "High-elastic silicone, compatible with all URS",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      hotspot: { x: "61%", y: "52%" }, // Hub Y-junction
    },
    {
      id: "latch",
      number: "04",
      title: "Secure Single-Latch Mechanism",
      tagline: "Effortless One-Handed Operation",
      description:
        "Enables one-handed operation with effortless latching—no rotational alignment required. The dilator and sheath lock securely with an audible click and release instantly.",
      spec: "Zero rotational alignment required",
      icon: <Lock className="h-5 w-5 text-primary" />,
      hotspot: { x: "78%", y: "42%" }, // Rear locking hub
    },
    {
      id: "slider",
      number: "05",
      title: "Pressure Control Slider",
      tagline: "Real-Time Suction Regulation",
      description:
        "Stone fragments can be efficiently removed through the oblique side port, and the suction can be precisely controlled by the slider on it, maintaining safe intrarenal pressure.",
      spec: "Oblique side aspiration with slider valve",
      icon: <Sliders className="h-5 w-5 text-primary" />,
      hotspot: { x: "81%", y: "55%" }, // Oblique side port
    },
  ];

  const current = callouts.find((c) => c.id === activeCallout) || callouts[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 border-t border-slate-100">
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
            <span>HARDWARE ARCHITECTURE & INNOVATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Engineered for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Precision Suction & Smooth Access
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Discover the five key structural features that optimize stone clearance, prevent mucosal injury, and regulate intrarenal pressure in RIRS.
          </motion.p>
        </div>

        {/* Interactive Diagram Showcase */}
        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(25,168,232,0.06)] overflow-hidden">
          {/* Main Visual with Hotspots */}
          <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 p-4 sm:p-8 lg:p-12">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 sm:p-4 shadow-inner">
              <img
                src={featuresImg}
                alt="HugeMed Single-use Ureteral Access Sheath Features"
                className="w-full h-auto object-contain select-none"
              />

              {/* Interactive Hotspot Buttons */}
              {callouts.map((item) => {
                const isSelected = activeCallout === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCallout(item.id)}
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

            {/* Active Detail Floating Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-r from-blue-50/90 via-white to-blue-50/70 p-4 sm:p-6 shadow-md backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      {current.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          FEATURE #{current.number}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {current.tagline}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm border border-blue-100">
                    {current.spec}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Selection Nav Badges */}
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
              Click to inspect each component:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {callouts.map((item) => {
                const isSelected = activeCallout === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCallout(item.id)}
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

export default AccessSheathFeatures;
