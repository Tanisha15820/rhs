import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const HU30MSpecs = () => {
  const specs = [
    {
      category: "Physical & Dimensional Parameters",
      items: [
        { label: "Model", value: "HU30M 6.3/6 Fr Single-Use Ureterorenoscope" },
        { label: "Outer Diameter (O.D.)", value: "6.3 Fr (2.1 mm) / 6.0 Fr Distal Tip" },
        { label: "Working Channel (I.D.)", value: "3.6 Fr (1.2 mm)" },
        { label: "Effective Working Length", value: "650 mm" },
        { label: "Overall Handle Weight", value: "< 300 g ultra-lightweight ergonomic chassis" },
        { label: "Rotation Knob", value: "120° Left & Right bidirectional axial rotation" },
      ],
    },
    {
      category: "Articulation & Mechanics",
      items: [
        { label: "Deflection Range", value: "Active 285° Up / 285° Down bidirectional" },
        { label: "Secondary Deflection", value: "Passive secondary bending for tortuous anatomy" },
        { label: "Articulation Material", value: "316L medical-grade stainless steel" },
        { label: "Insertion Tube Sheath", value: "Medical-grade Pebax composite polymer" },
        { label: "Torque Transmission", value: "1:1 real-time direct torque ratio" },
      ],
    },
    {
      category: "Optical & Imaging System",
      items: [
        { label: "Image Sensor", value: "160K CMOS chip-on-tip sensor" },
        { label: "Algorithmic Enhancement", value: "1080P Full HD external optimization algorithm" },
        { label: "Field of View (FOV)", value: "120° wide-angle panoramic visualization" },
        { label: "Depth of Field (DOF)", value: "3 – 50 mm continuous sharp focal range" },
        { label: "Illumination Source", value: "Integrated dual micro-LED cold light emitters" },
      ],
    },
    {
      category: "Sterility & System Integration",
      items: [
        { label: "Sterility Status", value: "100% Sterile, individually blister packaged (Single-Use)" },
        { label: "Pre-Stenting Requirement", value: "Not required ('No-touch' technique facilitated)" },
        { label: "Instrument Channel", value: "Laser fibers (up to 365 μm), baskets, biopsy forceps" },
        { label: "Image Processor Compatibility", value: "HugeMed HUV-01 / HUV-02 Processors" },
        { label: "Regulatory Approval", value: "World's 1st 6.3Fr approved for surgical procedures" },
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
            HU30M 6.3Fr Technical{" "}
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
            Engineered to challenge conventional limits of endourology, delivering an ultra-slim 6.3Fr profile without compromising channel capacity or optical fidelity.
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

export default HU30MSpecs;
