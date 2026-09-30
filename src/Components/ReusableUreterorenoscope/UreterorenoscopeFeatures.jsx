import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Layers,
  Sparkles,
  Camera,
  Droplets,
  RotateCw,
  Hand,
  CheckCircle2,
  Maximize2,
  Sliders,
} from "lucide-react";
import scopeImg from "../../assets/images/reusable-ureterorenoscope.png";

const UreterorenoscopeFeatures = () => {
  const [activeCallout, setActiveCallout] = useState(null);

  const callouts = [
    {
      id: "handle",
      title: "Ergonomic Handle",
      subtitle: "Weight < 500g",
      description:
        "Ergonomically contoured handle weighing under 500g, designed to eliminate hand fatigue during long ureterorenoscopy procedures.",
      icon: <Hand className="h-4 w-4 text-primary" />,
      badge: "< 500g Lightweight",
    },
    {
      id: "deflection",
      title: "285° Bending Angle",
      subtitle: "Bidirectional Deflection",
      description:
        "Active 285° up-and-down deflection allows seamless navigation into challenging lower pole calyces without anatomical blind spots.",
      icon: <Compass className="h-4 w-4 text-primary" />,
      badge: "285° Up & Down",
    },
    {
      id: "tip",
      title: "Streamlined Bullet Tip",
      subtitle: "160K CMOS & Dual LEDs",
      description:
        "Bullet-shaped atraumatic distal tip containing a 160K CMOS sensor chip and high-intensity dual LEDs for clear visualization.",
      icon: <Camera className="h-4 w-4 text-primary" />,
      badge: "CMOS Chip-on-Tip",
    },
    {
      id: "tube",
      title: "Pebax Insertion Tube",
      subtitle: "1:1 Torque Transmission",
      description:
        "Medical-grade composite material Pebax wrapping provides an optimal balance of structural rigidity, flexibility, and 1:1 torque transmission.",
      icon: <Layers className="h-4 w-4 text-primary" />,
      badge: "8.5 Fr Outer Diameter",
    },
    {
      id: "valves",
      title: "Irrigation & Working Channel",
      subtitle: "3.6 Fr Operating Channel",
      description:
        "Dedicated luer-lock irrigation valve and 3.6 Fr working channel enable simultaneous suction, biopsy, and laser fiber delivery.",
      icon: <Droplets className="h-4 w-4 text-primary" />,
      badge: "3.6 Fr Channel",
    },
    {
      id: "controls",
      title: "One-Touch Buttons",
      subtitle: "Camera & Suction Triggers",
      description:
        "Integrated handle buttons allow immediate photo snapshots, video recording, and suction activation directly from the sterile field.",
      icon: <Sliders className="h-4 w-4 text-primary" />,
      badge: "Direct Controls",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 border-t border-slate-100">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>FEATURES & ANATOMY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Anatomy of the{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              HU-32 Flexible Endoscope
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Engineered with high-grade 316L stainless steel, a soft Pebax insertion tube, and full immersion disinfection capability for long-term procedural value.
          </motion.p>
        </div>

        {/* Device Showcase Box */}
        <div className="relative mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(30,58,138,0.06)] backdrop-blur-xl sm:p-8 lg:p-12">
            {/* Quick Specs Floating Card (matching bottom-left box in Screenshot 2) */}
            <div className="absolute left-6 top-6 z-20 hidden rounded-2xl border border-blue-200 bg-white/95 p-3.5 shadow-md backdrop-blur-md sm:block">
              <div className="border-b border-blue-100 pb-1.5 text-[11px] font-bold text-primary">
                MODEL: HU 32
              </div>
              <div className="mt-2 space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Outer Diameter (O.D.):</span>
                  <span className="font-bold text-slate-900">8.5 FR</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Channel Diameter (I.D.):</span>
                  <span className="font-bold text-slate-900">3.6 FR</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Working Length:</span>
                  <span className="font-bold text-slate-900">650 mm</span>
                </div>
              </div>
            </div>

            {/* Central Scope Image */}
            <div className="relative mx-auto flex max-w-4xl items-center justify-center py-6 sm:py-10">
              <motion.img
                src={scopeImg}
                alt="Reusable Flexible Video Ureterorenoscope HU-32"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full object-contain drop-shadow-[0_20px_35px_rgba(25,168,232,0.18)]"
              />

              {/* Pinpoint 1: Handle & Trigger Buttons */}
              <div
                className="absolute right-[14%] top-[45%] z-20 hidden cursor-pointer md:block"
                onMouseEnter={() => setActiveCallout("controls")}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                    1
                  </span>
                </span>
              </div>

              {/* Pinpoint 2: Working Channel / Irrigation */}
              <div
                className="absolute right-[22%] bottom-[32%] z-20 hidden cursor-pointer md:block"
                onMouseEnter={() => setActiveCallout("valves")}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                    2
                  </span>
                </span>
              </div>

              {/* Pinpoint 3: Pebax Shaft */}
              <div
                className="absolute left-[38%] top-[34%] z-20 hidden cursor-pointer md:block"
                onMouseEnter={() => setActiveCallout("tube")}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                    3
                  </span>
                </span>
              </div>

              {/* Pinpoint 4: 285° Bending Loop & Distal Tip */}
              <div
                className="absolute left-[30%] bottom-[32%] z-20 hidden cursor-pointer md:block"
                onMouseEnter={() => setActiveCallout("deflection")}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                    4
                  </span>
                </span>
              </div>
            </div>

            {/* 6 Grid Callouts */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {callouts.map((c, i) => {
                const isActive = activeCallout === c.id;
                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    onMouseEnter={() => setActiveCallout(c.id)}
                    onMouseLeave={() => setActiveCallout(null)}
                    className={`group relative rounded-2xl border p-4 transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-blue-50/70 shadow-lg shadow-blue-500/10 ring-2 ring-primary/20"
                        : "border-slate-200/80 bg-white/90 hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {c.icon}
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {c.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UreterorenoscopeFeatures;
