import React from "react";
import { motion } from "framer-motion";
import { Anchor, Settings2, ThumbsUp, Clock, Layers } from "lucide-react";
import masterpulseImg from "../../assets/images/cyber_ho_150_masterpulse.png";

const CyberHo150MasterPulse = () => {
  const benefits = [
    {
      title: "REDUCED STONE INSTABILITY",
      desc: "Lower the stone instability step by step, by progressively increasing pulse width.",
      icon: Anchor,
    },
    {
      title: "CUTTING TUNING",
      desc: "Adjust cutting fashion based on your needs and the area of treatment.",
      icon: Settings2,
    },
    {
      title: "EASE OF TREATMENT",
      desc: "Experience a more intuitive and different way to adjust laser settings, simply based on your visual feedback.",
      icon: ThumbsUp,
    },
    {
      title: "CUTTING DOWN TREATMENT TIME",
      desc: "Obtain the desired effect quickly, without getting mad with the standard adjustment of energy and frequency parameters.",
      icon: Clock,
    },
    {
      title: "GREATER FLEXIBILITY",
      desc: "7 levels of pulse width offer a greater flexibility compared to the traditional 3 levels offered by the other holmium devices.",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl mb-6">
              Master<span className="text-blue-600">PULSE</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4 font-medium">
              Reduce retropulsion and modify tissue cutting more easily.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Instead of trying multiple different settings, start with your preferred settings and then adjust the MasterPULSE to tune the effect of laser emission based on your visual feedback. Regulation of pulse width has never been so easy!
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 border border-blue-100 shadow-sm mt-1">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl scale-90"></div>
              <img 
                src={masterpulseImg} 
                alt="MasterPULSE Dial" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]"
              />
              
              {/* Highlight badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-blue-100 shadow-xl rounded-2xl p-4 z-20 flex items-center gap-3">
                <div className="text-3xl font-black text-blue-600">7</div>
                <div className="text-xs font-bold text-slate-700 leading-tight">
                  LEVELS OF <br /> PULSE WIDTH
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CyberHo150MasterPulse;
