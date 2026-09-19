import React from "react";
import { motion } from "framer-motion";

const CyberHo150Specs = () => {
  const specifications = [
    { label: "Wavelength", value: "2,1 µm" },
    { label: "Average power", value: "Up to 152 W" },
    { label: "Repetition rate", value: "Up to 100 Hz" },
    { label: "Energy per pulse", value: "Up to 5 J" },
    { label: "Pulse duration", value: "50 ÷ 1100 µs" },
    { label: "Beam delivery", value: "Wide range of flexible silica fibers" },
    { label: "Aiming beam", value: "532 nm (adjustable <5 mW) - Class 3R" },
    { label: "Fiber recognition", value: "RFID System" },
    { label: "Activation", value: "Double footswitch" },
    { label: "Electrical requirements", value: "220-230 Vac; 50/60 Hz; 7.36 kVA - 208 Vac; 50/60 Hz; 7.36 kVA" },
    { label: "Cooling", value: "Internal chiller" },
    { label: "Operating temperature", value: "10°C ÷ 30°C" },
    { label: "Laser class", value: "4" },
    { label: "Dimensions and weight", value: "52 cm (W) x 120 cm (D) x 123 cm (H) (monitor closed), 260 kg" },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Technical <span className="text-blue-600">Specifications</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="divide-y divide-slate-100">
            {specifications.map((spec, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 sm:grid-cols-3 hover:bg-slate-50 transition-colors"
              >
                <div className="px-6 py-4 text-sm font-bold text-slate-900 sm:border-r border-slate-100 bg-slate-50/50">
                  {spec.label}
                </div>
                <div className="px-6 py-4 text-sm text-slate-600 sm:col-span-2 flex items-center">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberHo150Specs;
