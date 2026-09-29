import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Touchpad,
  Maximize2,
  Cpu,
  CheckCircle2,
  Camera,
  Video,
  Palette,
  HardDrive,
  ShieldAlert,
} from "lucide-react";
import fhdMonitorImg from "../../assets/images/huv02_fhd_monitor.jpg";
import touchscreenImg from "../../assets/images/huv02_touchscreen.jpg";
import edgeConnectorImg from "../../assets/images/huv02_edge_connector.jpg";
import processorImg from "../../assets/images/huv02_processor.jpg";

const HUV02Capabilities = () => {
  const capabilities = [
    {
      title: "Maximum 1080P FHD Output",
      category: "HIGH-DEFINITION VISUALIZATION",
      description:
        "Delivers high-quality imaging with up to 1920×1080 px resolution on external medical-grade monitors, presenting minute vascular structures and tissue planes with absolute clarity.",
      image: fhdMonitorImg,
      highlights: [
        "1920×1080 px Full HD external resolution",
        "Lossless video output over HDMI/DVI interfaces",
        "Superior color reproduction and dynamic range",
        "Zero noticeable latency during endourological interventions",
      ],
      tag: "1080P FHD",
      reverse: false,
    },
    {
      title: "Intuitive LCD Touchscreen Panel",
      category: "OPERATOR EXPERIENCE",
      description:
        "Features a built-in front touchscreen for quick access to essential operating modes, photo capture, video recording, real-time white balance calibration, and custom light adjustments.",
      image: touchscreenImg,
      highlights: [
        "One-touch photo capture & video recording",
        "Instant automatic & manual white balance calibration",
        "On-screen brightness, contrast, and digital zoom adjustment",
        "Glove-responsive clinical touch surface",
      ],
      tag: "LCD Touchscreen",
      reverse: true,
    },
    {
      title: "Space-Saving Compact Design",
      category: "CLINICAL ERGONOMICS",
      description:
        "Its small footprint makes it easy to place in operating rooms, outpatient clinics, and mobile endoscopy carts where surgical theater real estate is strictly limited.",
      image: processorImg,
      highlights: [
        "Ultra-slim 82 mm profile height",
        "Desktop footprint of only 281 × 377 mm",
        "Lightweight chassis for effortless trolley mounting",
        "Low-noise active heat dissipation system",
      ],
      tag: "82 × 281 × 377 mm",
      reverse: false,
    },
    {
      title: "Edge Connector Technology",
      category: "SIGNAL INTEGRITY",
      description:
        "Adapts precision goldfinger plugs to enhance the stability of high-speed datum transfer, ensuring rugged durability, reliable hot-swapping, and zero signal distortion.",
      image: edgeConnectorImg,
      highlights: [
        "Gold-plated high-density electrical contacts",
        "Hot-swappable scope connectivity",
        "Resistant to oxidation and repetitive insertion wear",
        "Compatible with video laryngoscopes & urology endoscopes",
      ],
      tag: "Goldfinger Bus",
      reverse: true,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Intelligent Imaging Designed for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Clinical Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            The HUV-02 captures, optimizes, and transmits endoscopic video in real-time, providing surgical teams with an indispensable visual tool for complex interventions.
          </motion.p>
        </div>

        {/* Capabilities Alternate Cards */}
        <div className="mt-16 space-y-16 sm:space-y-24">
          {capabilities.map((cap, idx) => (
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
              {/* Media Column */}
              <div className="relative w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-3 shadow-lg shadow-blue-900/5 sm:p-4">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Corner Tag */}
                  <div className="absolute left-6 top-6 rounded-full bg-slate-900/80 px-3.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                    {cap.tag}
                  </div>
                </div>
              </div>

              {/* Text Column */}
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

                {/* Highlights List */}
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

export default HUV02Capabilities;
