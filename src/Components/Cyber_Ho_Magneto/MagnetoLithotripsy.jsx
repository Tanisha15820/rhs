import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Maximize2, Zap } from "lucide-react";
import magnetoLithotripsyImg from "../../assets/images/magneto_lithotripsy.jpg";

const MagnetoLithotripsy = () => {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight mb-6">
              Magneto for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Lithotripsy</span>
            </h2>

            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">Quanta Magneto Technology</strong> revolutionizes laser lithotripsy by achieving lower peak power levels.
                <strong className="text-cyan-300"> Stone retropulsion is significantly lower compared to standard Holmium laser systems</strong> and is also reduced when compared to TFL systems, enabling more efficient treatment that benefits both patients and healthcare providers.
              </p>
              <p>
                Furthermore, Magneto emission mode reduces fragments size, making extraction easier and minimizing the need for additional tools such as retrieval baskets.
              </p>
              <p className="border-l-2 border-blue-500 pl-4 italic text-slate-400">
                Moreover, Cyber Ho Magneto maintains the consolidated holmium high peak power feature for application like popcorning, fragmentation of large or hard stones, PCNL procedures and HoLEP. This capability makes Magneto the most versatile Quanta laser ever.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl aspect-[4/3] group">
              <img
                src={magnetoLithotripsyImg}
                alt="Magneto Lithotripsy Technology"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />

              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Direct Connection</span>
                </div>
                <p className="text-sm text-white font-medium drop-shadow-md">
                  The direct connection between fiber tip and stone enhances energy delivery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Peak Power Chart Recreation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 w-full"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Peak Power Comparison</h3>
            <p className="text-xs text-slate-400">Magneto achieves lower peak power for low retropulsion, while retaining high power when needed.</p>
          </div>

          <div className="relative h-64 flex items-end justify-center gap-4 sm:gap-12 pb-12 border-b border-slate-700 px-4">
            {/* Y Axis Label */}
            <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-slate-500 pb-2">
              <span>{'>'}10kW</span>
              <span className="hidden sm:block absolute -left-12 top-1/2 -rotate-90 origin-center text-slate-600 font-bold tracking-widest uppercase">Peak Power</span>
            </div>

            {/* TFL Bar */}
            <div className="relative w-16 sm:w-24 group">
              <div className="h-10 bg-slate-600 rounded-t-sm w-full mx-auto transition-colors group-hover:bg-slate-500"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white">0,5kW</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-slate-300">TFL</div>
            </div>

            {/* Holmium Bar */}
            <div className="relative w-16 sm:w-24 group">
              <div className="h-40 bg-blue-600 rounded-t-sm w-full mx-auto transition-colors group-hover:bg-blue-500"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white">2kW</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-slate-300">Holmium</div>
            </div>

            {/* Cyber Ho Magneto Bar */}
            <div className="relative w-16 sm:w-24 group">
              <div className="h-10 bg-cyan-500 rounded-t-sm w-full mx-auto transition-colors group-hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-300">0,5kW</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-cyan-400 whitespace-nowrap text-center">Cyber Ho<br />Magneto</div>
            </div>

            {/* High Power Top Bar representing >10kW capability */}
            <div className="absolute top-0 right-0 left-12 h-16 bg-gradient-to-r from-transparent via-slate-700/20 to-slate-700/40 border-t border-slate-600 flex items-center justify-end px-4 pointer-events-none">
              <span className="text-xs text-slate-400 text-right">
                HoLEP<br />ShockWave mechanical<br />dissection effect
              </span>
            </div>

            <div className="absolute bottom-12 right-0 left-12 h-12 bg-gradient-to-r from-transparent via-blue-900/10 to-blue-900/30 border-b border-blue-500/20 flex items-center justify-end px-4 pointer-events-none">
              <span className="text-xs text-blue-300 text-right font-semibold">
                HARD STONES<br />LOW RETROPULSION
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MagnetoLithotripsy;
