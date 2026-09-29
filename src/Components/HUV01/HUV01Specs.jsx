import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const HUV01Specs = () => {
  const specs = [
    {
      category: "Physical & Mechanical",
      items: [
        { label: "Model", value: "HUV-01 Medical Image Processor" },
        { label: "Form Factor", value: "Space-Saving Compact Desktop Console" },
        { label: "Chassis Material", value: "Medical-grade antimicrobial polymer casing" },
        { label: "Cooling Architecture", value: "Dual-zone lateral convective ventilation slots" },
        { label: "Mounting Compatibility", value: "Endoscopy cart, equipment tower, or tabletop" },
      ],
    },
    {
      category: "Imaging & Display",
      items: [
        { label: "Output Resolution", value: "1024 × 768 pixels (XGA High-Definition)" },
        { label: "Display Compatibility", value: "Connects directly to external surgical monitors" },
        { label: "Video Output Interfaces", value: "DVI, HDMI, VGA outputs" },
        { label: "Latency", value: "Real-time low-latency endoscopic feed" },
        { label: "Color Rendition", value: "True-color biological tissue enhancement" },
      ],
    },
    {
      category: "User Controls & Ports",
      items: [
        { label: "Front Control Faceplate", value: "Tactile push buttons with directional keypad" },
        { label: "Dedicated Functions", value: "Freeze, Photo Capture, Video Record, Light (+/-)" },
        { label: "Status LEDs", value: "Power, Link, Ready, Error indicators" },
        { label: "Data Interface", value: "Front USB port for USB flash drive storage" },
        { label: "Power Supply", value: "AC 100–240 V, 50/60 Hz universal power" },
      ],
    },
    {
      category: "Endoscope Compatibility",
      items: [
        { label: "Compatible Scopes", value: "Selected models of HugeMed flexible endoscopes" },
        { label: "Connection Mechanism", value: "Dedicated circular multi-pin docking socket" },
        { label: "Patient Safety", value: "Electrical patient isolation protection" },
        { label: "Clinical Specialties", value: "Urology, Airway Management, Outpatient Endoscopy" },
        { label: "Regulatory Compliance", value: "CE / ISO 13485 Medical Standards" },
      ],
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            HUV-01 Technical{" "}
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
            Reliable specifications tailored for flexible endoscopy procedures in operating rooms and diagnostic clinics.
          </motion.p>
        </div>

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

export default HUV01Specs;
