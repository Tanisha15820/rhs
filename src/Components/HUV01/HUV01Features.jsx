import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Maximize2,
  Sliders,
  Zap,
  CheckCircle2,
  Sparkles,
  Layers,
  Radio,
} from "lucide-react";
import huv01Machine from "../../assets/images/huv01_processor.jpg";

const HUV01Features = () => {
  const [activeCallout, setActiveCallout] = useState(null);

  const callouts = [
    {
      id: "resolution",
      title: "1024 × 768 Visual Output",
      subtitle: "Clear & Detailed Imaging",
      description:
        "Output resolution of 1024 × 768 pixels delivers clear, high-definition visualization to external monitors for enhanced procedural confidence.",
      badge: "1024 × 768 px",
      icon: <Monitor className="h-4 w-4 text-primary" />,
    },
    {
      id: "compact",
      title: "Compact Space-Saving Chassis",
      subtitle: "Maximized OR Real Estate",
      description:
        "The HUV-01’s compact footprint helps maximize space in busy operating rooms, outpatient suites, and mobile endoscopy carts.",
      badge: "Slim Footprint",
      icon: <Maximize2 className="h-4 w-4 text-primary" />,
    },
    {
      id: "control",
      title: "Intuitive Button Control Panel",
      subtitle: "Dedicated Surgical Functions",
      description:
        "Ergonomic front faceplate featuring tactile buttons for menu navigation, image freeze, one-touch photo capture, video recording, and illumination control.",
      badge: "Tactile Keypad",
      icon: <Sliders className="h-4 w-4 text-primary" />,
    },
    {
      id: "connector",
      title: "Scope Interface & USB Recording",
      subtitle: "Secure Endoscope Docking",
      description:
        "Dedicated circular multi-pin socket ensures secure signal coupling with HugeMed flexible endoscopes, complemented by front USB storage.",
      badge: "Direct Scope Bay",
      icon: <Zap className="h-4 w-4 text-primary" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 border-t border-slate-100">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>HARDWARE & ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Streamlined Design for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Endoscopic Precision
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Purpose-built to connect flexible endoscopes with surgical monitors seamlessly, ensuring crisp imaging and reliable tactile control throughout procedures.
          </motion.p>
        </div>

        {/* Machine Showcase Box */}
        <div className="relative mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_60px_rgba(30,58,138,0.06)] backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="relative mx-auto flex max-w-3xl items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-[620px] py-4"
              >
                <img
                  src={huv01Machine}
                  alt="HugeMed HUV-01 Endoscopy Image Processor Console"
                  className="w-full object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.18)]"
                />

                {/* Pinpoint 1: Power & Vent */}
                <div
                  className="absolute left-[16%] top-[45%] z-20 hidden cursor-pointer md:block"
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

                {/* Pinpoint 2: Scope Connector Bay */}
                <div
                  className="absolute left-[52%] top-[56%] z-20 hidden cursor-pointer md:block"
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

                {/* Pinpoint 3: Keypad Panel */}
                <div
                  className="absolute right-[18%] top-[54%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("control")}
                  onMouseLeave={() => setActiveCallout(null)}
                >
                  <span className="relative flex h-5 w-5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white shadow-sm">
                      3
                    </span>
                  </span>
                </div>

                {/* Pinpoint 4: High-Definition Output Engine */}
                <div
                  className="absolute right-[28%] top-[25%] z-20 hidden cursor-pointer md:block"
                  onMouseEnter={() => setActiveCallout("resolution")}
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

            {/* 4 Feature Callout Cards */}
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

export default HUV01Features;
