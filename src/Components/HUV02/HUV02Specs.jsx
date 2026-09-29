import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Sliders,
  CheckCircle,
  Cpu,
  Monitor,
  Maximize2,
  HardDrive,
  ShieldCheck,
} from "lucide-react";

const HUV02Specs = () => {
  const specs = [
    {
      category: "Physical & Mechanical",
      items: [
        { label: "Model", value: "HUV-02 Medical Image Processor" },
        { label: "Dimensions (H × D × W)", value: "82 × 281 × 377 mm" },
        { label: "Chassis Construction", value: "Medical-grade antimicrobial polymer & aluminum alloy" },
        { label: "Mounting Style", value: "Compact Desktop / Endoscopy Trolley Cart compatible" },
        { label: "Cooling Architecture", value: "Low-noise active ventilation for continuous surgical use" },
      ],
    },
    {
      category: "Imaging & Video Output",
      items: [
        { label: "Maximum Output Resolution", value: "Up to 1920 × 1080 px (1080P FHD)" },
        { label: "Control Panel", value: "Built-in Front LCD Touchscreen Panel" },
        { label: "External Display Interfaces", value: "HDMI, DVI-D (Lossless 1080P FHD Medical Feeds)" },
        { label: "Frame Rate", value: "Up to 60 fps smooth real-time visualization" },
        { label: "Latency", value: "< 20 ms ultra-low procedural latency" },
      ],
    },
    {
      category: "System Interfaces & Connectivity",
      items: [
        { label: "Scope Interface", value: "High-density Goldfinger Edge Connector slot" },
        { label: "Data Ports", value: "Front-panel USB 3.0 for flash drive export & storage" },
        { label: "Calibration", value: "Automatic & manual one-touch white balance" },
        { label: "Recording Capabilities", value: "High-resolution still photo capture & MP4 video recording" },
        { label: "Power Supply", value: "AC 100–240 V, 50/60 Hz universal input" },
      ],
    },
    {
      category: "Endoscope Compatibility Matrix",
      items: [
        { label: "Flexible Ureterorenoscopes", value: "Disposable HU30M 6.3/6 Fr & HU30M 7.5 Fr" },
        { label: "Endourology Telescopes", value: "Electronic Cystoscopes & Cystonephroscopes" },
        { label: "Airway Management", value: "HugeMed Video Laryngoscope family" },
        { label: "Accessory Support", value: "Access sheaths & suction pump synchronization" },
        { label: "Certification", value: "CE / ISO 13485 Medical Device compliant" },
      ],
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>TECHNICAL SPECIFICATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            HUV-02 Technical{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Specifications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            Engineered to meet the stringent optical, mechanical, and electrical standards of modern hospital surgical suites.
          </motion.p>
        </div>

        {/* Specs Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {specs.map((sec, idx) => (
            <motion.div
              key={sec.category}
              initial={{ opacity: 0, y: 25 }}

              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/60 to-slate-50 px-5 py-3.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {sec.category}
                </h3>
              </div>

              <div className="divide-y divide-slate-100 px-5 py-2">
                {sec.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-3 text-xs gap-1"
                  >
                    <span className="font-medium text-slate-500">
                      {item.label}
                    </span>
                    <span className="font-semibold text-slate-900 text-left sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HUV02Specs;
