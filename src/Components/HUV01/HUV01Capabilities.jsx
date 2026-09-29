import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Maximize2,
  Sliders,
  Layers,
  CheckCircle2,
  Camera,
  Video,
  ShieldCheck,
} from "lucide-react";
import fhdMonitorImg from "../../assets/images/huv02_fhd_monitor.jpg";
import keypadImg from "../../assets/images/huv01_keypad.jpg";
import processorImg from "../../assets/images/huv01_processor.jpg";

const HUV01Capabilities = () => {
  const capabilities = [
    {
      title: "High-Definition Visual Output",
      category: "PROCEDURAL CONFIDENCE",
      description:
        "With an output resolution of 1024 × 768 pixels, the HUV-01 provides healthcare professionals with clear, detailed imaging for enhanced procedural confidence during critical endourology and surgical procedures.",
      image: fhdMonitorImg,
      highlights: [
        "1024 × 768 pixels high-definition output resolution",
        "Clear, artifact-free real-time endoscopic imagery",
        "Enhanced tissue contrast and border definition",
        "Low-latency transmission to external surgical displays",
      ],
      tag: "1024 × 768 px",
      reverse: false,
    },
    {
      title: "Compact Design to Save Space",
      category: "OPERATING ROOM ERGONOMICS",
      description:
        "The HUV-01’s compact footprint helps maximize space in busy operating rooms. Its slim profile can be stationed easily on equipment carts, surgical booms, or mobile endoscopy stands without cluttering the theater.",
      image: processorImg,
      highlights: [
        "Slimline tabletop footprint designed for tight surgical spaces",
        "Ultra-lightweight chassis for rapid intra-hospital transit",
        "Passive and low-noise lateral ventilation channels",
        "Rapid installation with plug-and-play simplicity",
      ],
      tag: "Compact Footprint",
      reverse: true,
    },
    {
      title: "Intuitive Button Control Panel",
      category: "TACTILE CONTROL",
      description:
        "Equipped with dedicated front-panel push buttons that enable surgeons and nurses to instantly freeze frames, capture high-resolution photos, record surgical videos, and adjust illumination without navigating complex menus.",
      image: keypadImg,
      highlights: [
        "Dedicated Freeze, Capture, and Video recording buttons",
        "Real-time light adjustment controls (+ / -)",
        "Directional keypad for straightforward system settings",
        "High-visibility LED indicators for Power, Link, Ready, and Error",
      ],
      tag: "Tactile Keypad",
      reverse: false,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            CORE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Clear Imaging & Intelligent{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Operating Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            HUV-01 is an image processor designed to connect endoscopes and displays, providing an intuitive and dependable visualization platform for surgeries.
          </motion.p>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                cap.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-3 shadow-lg shadow-blue-900/5 sm:p-4">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute left-6 top-6 rounded-full bg-slate-900/80 px-3.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                    {cap.tag}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                  {cap.category}
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
                  {cap.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6">
                  {cap.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {cap.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HUV01Capabilities;
