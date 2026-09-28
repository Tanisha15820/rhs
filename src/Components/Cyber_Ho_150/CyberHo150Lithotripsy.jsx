import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Combine, Wind, ShieldAlert, XCircle, Timer } from "lucide-react";

const CyberHo150Lithotripsy = () => {
  return (
    <section className="bg-slate-900 text-white overflow-hidden">
      
      {/* FRAGMENTATION SECTION */}
      <div className="relative border-b border-slate-800 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Fragmentation
              </span>
            </h2>
            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
              Short Pulse (High Energy)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">HIGH PULSE ENERGY</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Up to 5 J, for wide pulse energy range.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">TREAT HARDEST STONES</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Greater pulse energy allows you to break harder stones.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Combine size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">COLLECTION BASKET NEEDED</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Retrieve stone pieces upon fragmentation.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* DUSTING EFFECT SECTION */}
      <div className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Dusting Effect
              </span>
            </h2>
            <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Long Pulse (High Frequency)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/40 p-6 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20">
                <ShieldAlert size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase">LIMITED RETROPULSION</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Easy ablation with no need to chase the stone.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-slate-800/40 p-6 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20">
                <XCircle size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase">NO NEED FOR BASKET</h3>
              <p className="text-slate-400 text-xs leading-relaxed">The obtained fine dust obviates the retrieval phase.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-slate-800/40 p-6 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20">
                <Wind size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase">LONG PULSE WIDTH</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Up to 1100 µs, for smooth Long Pulse Dusting.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-slate-800/40 p-6 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20">
                <Timer size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase">EXTREME FREQUENCY</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Up to 100 Hz, for enhanced speed in Dusting action.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberHo150Lithotripsy;
