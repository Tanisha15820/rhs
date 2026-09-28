import React from "react";
import { motion } from "framer-motion";
import { Check, Waves, Shield, Activity, CircleDot, Cable, Box, Sparkles } from "lucide-react";

const MagnetoFibers = () => {
  const fibers = [
    {
      title: "STANDARD FIBERS",
      subtitle: "(Single Use and Reusable)",
      desc: "For general use in stone Lithotripsy and Soft Tissue treatments.",
      icon: Cable,
    },
    {
      title: "BALL TIP FIBERS",
      subtitle: "(Disposable)",
      desc: "Strongly simplify the insertion in already bent scopes.",
      icon: CircleDot,
    },
    {
      title: "200µm FIBER",
      subtitle: "(High Flexibility)",
      desc: "This thinner fiber grants even greater flexibility and irrigation.",
      icon: Activity,
    },
    {
      title: "GASTRO FIBERS",
      subtitle: "(Gallstones)",
      desc: "Specifically designed for the fragmentation of gallstones.",
      icon: Waves,
    }
  ];

  const maintenance = [
    {
      title: "CLEANING",
      desc: "Reusable fibers can be sterilized with the standard steam sterilization.",
      icon: Sparkles,
    },
    {
      title: "SURGICAL TRAY",
      desc: "A dedicated tray for sterilization of fibers and tools.",
      icon: Box,
    }
  ]

  return (
    <section className="bg-slate-950 py-16 lg:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Large Range of Fibers<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Large Compatibility</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Cyber Ho with <strong className="text-cyan-400">Quanta Magneto Technology</strong> can be used with a large range of fibers 
            <strong> (200, 272, 365, 550, 800 and 1000 µm)</strong>, depending on the application and settings required. 
            This mode does not require dedicated or more expensive fibers, so it offers the above benefits at no extra cost. 
            All fibers are available both as <strong className="text-white">disposable and reusable</strong> (except ball tip) and they are compatible with other Quanta System devices.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {fibers.map((fiber, idx) => {
            const Icon = fiber.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 items-start bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900 group-hover:scale-110 transition-all">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                    {fiber.title}
                  </h3>
                  <span className="text-xs text-cyan-400 mb-2 block font-medium">{fiber.subtitle}</span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {fiber.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full border-t border-slate-800 pt-16">
          {maintenance.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default MagnetoFibers;
