import React from "react";
import { motion } from "framer-motion";
import { Target, Maximize, Award } from "lucide-react";

const MagnetoInnovation = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Quanta System Legacy
            </p>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6"
          >
            Experience-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Innovation</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Quanta System stands out in the field of urological surgery with a diverse laser portfolio that includes advanced technologies such as Holmium lasers (low and high power up to 150W), Thulium YAG lasers (up to 200W), Diode lasers, and the Thulium Fiber Laser (TFL). <strong className="text-slate-900 font-bold">With over 35 years of experience in laser device design and manufacturing</strong>, Quanta is dedicated to pushing boundaries and meeting the evolving demands of medical professionals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Innovation Goal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:bg-blue-200 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                INNOVATION IS OUR GOAL
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Positioned as an extension within the Cyber Ho family, Quanta Magneto Technology represents a significant technological advancement. Unlike traditional Holmium lasers, Magneto tames the peak power, turning it into a much longer pulse duration, <strong>providing features comparable to TFL.</strong>
              </p>
            </div>
          </motion.div>

          {/* Highest Versatility */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50 group-hover:bg-cyan-200 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-cyan-100 shadow-sm flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                <Maximize size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                HIGHEST VERSATILITY
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                This advanced system empowers surgeons to select the <strong>laser technology that best suits their unique surgical style</strong>, offering enhanced versatility and customization for urological procedures. Now they can achieve <strong>superior performance</strong> in urological treatments and in procedures like lithotripsy, on retropulsion, efficient dusting and hemostatic effects.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MagnetoInnovation;
