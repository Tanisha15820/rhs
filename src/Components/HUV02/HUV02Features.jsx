import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  Cpu,
  Layers,
  Touchpad,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sliders,
  Sparkles,
} from "lucide-react";
import huv02Machine from "../../assets/images/huv02_processor.jpg";

const HUV02Features = () => {
  const [activeCallout, setActiveCallout] = useState(null);

  const callouts = [
    {
      id: "compact",
      title: "Compact Design",
      subtitle: "Dimensions: 82 × 281 × 377 mm",
      description:
        "The HUV-02 measures just 82×281×377 mm, saving space in busy operating rooms with its ultra-compact, lightweight desktop footprint.",
      positionDesktop: "left-2 top-8 xl:left-6 xl:top-10",
      lineDir: "left-to-right",
      badge: "82 × 281 × 377 mm",
      icon: <Maximize2 className="h-4 w-4 text-primary" />,
      targetPoint: { x: "28%", y: "26%" },
    },
    {
      id: "compatible",
      title: "Fully Compatible",
      subtitle: "Multi-Scope Ecosystem",
      description:
        "Seamlessly compatible with HugeMed video laryngoscopes, disposable HU30M flexible ureterorenoscopes, cystoscopes, and cystonephroscopes.",
      positionDesktop: "left-2 bottom-8 xl:left-6 xl:bottom-12",
      lineDir: "left-to-right",
      badge: "Universal Plug & Play",
      icon: <Layers className="h-4 w-4 text-primary" />,
      targetPoint: { x: "32%", y: "78%" },
    },
    {
      id: "touch",
      title: "Touch Control Panel",
      subtitle: "Intuitive LCD Interface",
      description:
        "Front-facing high-definition LCD touch panel enables direct white-balance calibration, one-touch photo/video capture, and real-time parameter tuning.",
      positionDesktop: "right-2 top-10 xl:right-6 xl:top-14",
      lineDir: "right-to-left",
      badge: "LCD Touchscreen",
      icon: <Touchpad className="h-4 w-4 text-primary" />,
      targetPoint: { x: "74%", y: "55%" },
    },
    {
      id: "connector",
      title: "Edge Connector",
      subtitle: "Goldfinger High-Speed Transfer",
      description:
        "Adapting goldfinger plugs to enhance the stability and speed of endoscopic datum transfer, preventing latency and electrical interference.",
      positionDesktop: "right-2 bottom-6 xl:right-6 xl:bottom-10",
      lineDir: "right-to-left",
      badge: "Goldfinger Bus",
      icon: <Zap className="h-4 w-4 text-primary" />,
      targetPoint: { x: "50%", y: "65%" },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>FEATURES & ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Space-Saving Design with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Precision Engineering
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Designed specifically for operating rooms and outpatient endoscopy suites where space, speed, and uncompromising image clarity are vital.
          </motion.p>
        </div>

        {/* Central Machine Showcase with Annotations */}
        <div className="relative mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_60px_rgba(30,58,138,0.06)] backdrop-blur-xl sm:p-8 lg:p-12">
            {/* Dimension Indicators Overlay (matching Screenshot 2) */}
            <div className="relative mx-auto flex max-w-3xl items-center justify-center">
              {/* Width Dimension: 377 mm */}
              <div className="absolute -top-3 left-[18%] z-20 hidden items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-3 py-1 shadow-sm md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold text-slate-700">
                  Width: <span className="text-primary font-extrabold">377 mm</span>
                </span>
              </div>

              {/* Depth Dimension: 281 mm */}
              <div className="absolute -top-3 right-[18%] z-20 hidden items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-3 py-1 shadow-sm md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold text-slate-700">
                  Depth: <span className="text-primary font-extrabold">281 mm</span>
                </span>
              </div>

              {/* Height Dimension: 82 mm */}
              <div className="absolute left-2 top-[42%] z-20 hidden -translate-y-1/2 items-center gap-1.5 rounded-full border border-blue-200 bg-white/95 px-2.5 py-1 shadow-sm md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold text-slate-700">
                  Height: <span className="text-primary font-extrabold">82 mm</span>
                </span>
              </div>

              {/* Central Machine Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-[620px] py-4"
              >
                <img
                  src={huv02Machine}
                  alt="HugeMed HUV-02 Image Processor Console with Dimension Lines"
                  className="w-full object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.18)]"
                />

                {/* Target Pinpoint 1: Compact Body */}
                <div
                  className="absolute left-[26%] top-[24%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("compact")}
                  onMouseLeave={() => setActiveCallout(null)}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                      1
                    </span>
                  </span>
                </div>

                {/* Target Pinpoint 2: Edge Connector */}
                <div
                  className="absolute left-[48%] top-[58%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("connector")}
                  onMouseLeave={() => setActiveCallout(null)}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                      2
                    </span>
                  </span>
                </div>

                {/* Target Pinpoint 3: Touch Screen */}
                <div
                  className="absolute right-[22%] top-[52%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("touch")}
                  onMouseLeave={() => setActiveCallout(null)}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                      3
                    </span>
                  </span>
                </div>

                {/* Target Pinpoint 4: Compatibility Port / Base */}
                <div
                  className="absolute left-[33%] top-[72%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("compatible")}
                  onMouseLeave={() => setActiveCallout(null)}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                      4
                    </span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Desktop Callout Cards Positioned Around Machine */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {callouts.map((c, i) => {
                const isActive = activeCallout === c.id;
                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
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
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
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

export default HUV02Features;
