import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  ShieldCheck,
  Expand,
  Droplet,
  Zap,
  MousePointer2,
} from "lucide-react";

const CyberHo150BPH = () => {
  const benefits = [
    {
      title: "FAST CUTTING",
      desc: "Limited depth of penetration and fast tissue incision results in a precise cut without affecting surrounding tissues.",
      icon: Scissors,
      color: "text-blue-500",
      bg: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "RELIABILITY",
      desc: "Clinical outcomes of HoLEP have been widely investigated with numerous studies demonstrating its safety and effectiveness in the long run.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "SIZE INDEPENDENT",
      desc: "HoLEP overcomes the limitations affecting other BPH techniques regarding prostate size.",
      icon: Expand,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      title: "EFFECTIVE HEMOSTASIS",
      desc: "Holmium radiation is highly absorbed by water, allowing quick coagulation of bleedings.",
      icon: Droplet,
      color: "text-rose-500",
      bg: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      title: "HIGH POWER",
      desc: "Up to 152 W output for fast and quick incision, cutting down treatment time.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      title: "DOUBLE FOOTSWITCH",
      desc: "Quick switch from one emission mode to another (e.g., from cutting to coagulation emission).",
      icon: MousePointer2,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-primary rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                BPH Treatment
              </p>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              HoLEP <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Gold Standard Procedure
              </span>
            </h2>

            <p className="mb-5 text-base leading-relaxed text-slate-600">
              <strong className="text-slate-800">HoLEP</strong> (Holmium Laser Enucleation of the Prostate) is a proven technique for the treatment of 
              <strong className="text-slate-800"> BPH</strong> (Benign Prostatic Hyperplasia), with high effectiveness, safety and durability.
            </p>

            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              The large amount of literature demonstrates its advantages in terms of efficacy and safety with respect to traditional treatments available for BPH. Recent studies and trials have validated the excellent outcomes achieved by this technique, with its success being reproduced in a diverse array of patients.
            </p>

            <p className="text-sm leading-relaxed text-slate-600">
              Cyber Ho 150 offers full choice regarding settings selection, with superior surgical experience granted by the double footswitch, the intuitive and large modulation of pulse width and the dedicated modes for the different treatment steps. The endless combinations of settings and multiple tools allow the maximum treatment versatility, so that the surgeon can easily reach the desired outcome. As alternative, the surgeon may use the side fiber to perform a HoLAP procedure for small prostatic adenomas.
            </p>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 z-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform -rotate-3 scale-105"></div>
            
            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`rounded-2xl border ${benefit.borderColor} bg-white/90 p-5 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]`}
                  >
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${benefit.bg} ${benefit.color}`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CyberHo150BPH;
