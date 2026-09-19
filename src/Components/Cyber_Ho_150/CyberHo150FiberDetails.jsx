import React from "react";
import { motion } from "framer-motion";
import { ScanFace, Recycle, ShieldCheck, Box } from "lucide-react";

const CyberHo150FiberDetails = () => {
  const details = [
    {
      title: "AVAILABLE DIAMETERS",
      desc: "200, 272, 365, 550, 600, 800 and 1000 µm",
      icon: ScanFace,
    },
    {
      title: "REUSABILITY",
      desc: "All fibers are available both as disposable and reusable (except ball tip model and side fiber).",
      icon: Recycle,
    },
    {
      title: "CLEANING",
      desc: "Reusable fibers can be sterilized by Sterrad® and steam sterilization.",
      icon: ShieldCheck,
    },
    {
      title: "STERILIZATION TRAY",
      desc: "A dedicated tray for sterilization of fibers and tools.",
      icon: Box,
    },
  ];

  return (
    <section className="bg-slate-950 py-16 text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              FIBER RECOGNITION
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
              Cyber Ho automatically adjusts emission settings based on the connected fiber diameter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-slate-200 mb-2">{detail.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{detail.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberHo150FiberDetails;
