import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Sliders,
  Shield,
  Layers,
  Compass,
  Droplets,
  CheckCircle2,
  Minimize2,
  Crosshair,
} from "lucide-react";

const AccessSheathDesign = () => {
  const designDetails = [
    {
      id: "slider",
      title: "Slider Valve for Fine Suction Control",
      category: "PRESSURE REGULATION",
      description:
        "Fine control of suction power through the slider valve enables effective intrarenal pressure management while improving stone clearance efficiency.",
      highlight: "Real-time fingertip aspiration throttle",
      icon: <Sliders className="h-6 w-6 text-primary" />,
      color: "from-blue-500/10 to-primary/5",
    },
    {
      id: "silicon",
      title: "High-Elastic Soft Silicon Seal",
      category: "UNIVERSAL COMPATIBILITY",
      description:
        "Specially formulated high-elastic soft silicon sealing case ensures compatibility with all HugeMed flexible ureteroscopes without leakage or instrument drag.",
      highlight: "Hermetic seal with zero friction drag",
      icon: <Shield className="h-6 w-6 text-primary" />,
      color: "from-cyan-500/10 to-blue-500/5",
    },
    {
      id: "beveled",
      title: "Beveled Edge & Tapered Dilator Tip",
      category: "ATRAUMATIC ENTRY",
      description:
        "The sheath’s beveled edge design combined with a tapered dilator tip smoothly dilates the ureteric orifice, significantly reducing mucosal insertion trauma.",
      highlight: "Minimizes mucosal shear and bleeding",
      icon: <Crosshair className="h-6 w-6 text-primary" />,
      color: "from-emerald-500/10 to-teal-500/5",
    },
    {
      id: "coil",
      title: "Stainless-Steel Flat Coil Reinforcement",
      category: "KINK RESISTANCE",
      description:
        "Embedded medical-grade stainless-steel flat coil provides robust kink resistance and 1:1 torque transmission while maintaining exceptional anatomical flex.",
      highlight: "100% kink-proof lumen integrity",
      icon: <Layers className="h-6 w-6 text-primary" />,
      color: "from-amber-500/10 to-orange-500/5",
    },
    {
      id: "coating",
      title: "Hydrophilic Coating with Depth Markings",
      category: "PRECISE POSITIONING",
      description:
        "PVP hydrophilic coating enables frictionless advancement, while high-contrast laser depth marks allow millimetric visual positioning under direct fluoroscopy.",
      highlight: "Centimeter depth graduation marks",
      icon: <Droplets className="h-6 w-6 text-primary" />,
      color: "from-indigo-500/10 to-blue-500/5",
    },
  ];

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
            <span>PRECISION ENGINEERING HIGHLIGHTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Design Details That Boost{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Operational Efficiency
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Every contour, material layer, and valve mechanism is calibrated to maximize single-session stone-free rate (SFR) while protecting patient physiology.
          </motion.p>
        </div>

        {/* 5 Design Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designDetails.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom Highlight */}
              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSheathDesign;
