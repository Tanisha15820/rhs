import React from "react";
import { motion } from "framer-motion";

const MagnetoSpecs = () => {
  const specs = [
    { label: "Wavelength", val100: "2100 nm", val150: "2100 nm", single: true },
    { label: "Average power", val100: "105 W", val150: "152 W", single: false },
    { label: "Repetition rate", val100: "3 - 80 Hz", val150: "5 - 100 Hz", single: false },
    { label: "Energy per pulse", val100: "5 J", val150: "5 J", single: true },
    { label: "Pulse duration", val100: "50-2000 μs", val150: "50-2000 μs", single: true },
    { label: "Beam delivery", val100: "Optical fiber", val150: "Optical fiber", single: true },
    { label: "Aiming beam", val100: "532 nm", val150: "532 nm", single: true },
    { label: "Fiber recognition", val100: "RFID system", val150: "RFID system", single: true },
    { label: "Activation", val100: "Double footswitch", val150: "Double footswitch", single: true },
    { 
      label: "Electrical requirements", 
      val100: "230 Vac; 50/60Hz; 6.2 kVA\n208 Vac; 50/60Hz; 6.2 kVA", 
      val150: "220-230 Vac; 50/60Hz; 7.36 kVA\n208 Vac; 50/60 Hz; 7.36 kVA", 
      single: false 
    },
    { label: "Cooling", val100: "Internal chiller", val150: "Internal chiller", single: true },
    { label: "Operating temperature", val100: "10°C - 30°C", val150: "10°C - 30°C", single: true },
    { label: "Laser class", val100: "Class 4", val150: "Class 4", single: true },
    { label: "Dimensions", val100: "64 cm (W) x 120 cm (D) x 123 cm (H) (monitor closed)", val150: "64 cm (W) x 120 cm (D) x 123 cm (H) (monitor closed)", single: true },
    { label: "Weight", val100: "230 kg", val150: "260 kg", single: false },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Technical Specifications
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Detailed technical parameters for the Cyber Ho Magneto Family models.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm sm:text-base">
            <div className="p-4 sm:p-6 flex items-center">Feature</div>
            <div className="p-4 sm:p-6 text-center flex flex-col justify-center border-l border-white/20">
              <span className="text-blue-100 text-xs font-normal uppercase tracking-wider mb-1">Model</span>
              Magneto 100W
            </div>
            <div className="p-4 sm:p-6 text-center flex flex-col justify-center border-l border-white/20">
              <span className="text-cyan-100 text-xs font-normal uppercase tracking-wider mb-1">Model</span>
              Magneto 150W
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {specs.map((spec, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-3 transition-colors hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <div className="p-4 sm:p-5 text-sm font-bold text-slate-800 flex items-center">
                  {spec.label}
                </div>
                
                {spec.single ? (
                  <div className="col-span-2 p-4 sm:p-5 text-sm text-slate-600 text-center flex items-center justify-center border-l border-slate-100">
                    {spec.val100}
                  </div>
                ) : (
                  <>
                    <div className="p-4 sm:p-5 text-sm text-slate-600 text-center flex items-center justify-center border-l border-slate-100 whitespace-pre-line">
                      {spec.val100}
                    </div>
                    <div className="p-4 sm:p-5 text-sm text-slate-600 text-center flex items-center justify-center border-l border-slate-100 whitespace-pre-line">
                      {spec.val150}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagnetoSpecs;
