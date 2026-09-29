import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  Compass,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Activity,
  Zap,
} from "lucide-react";
import cystoscopeImg from "../../assets/images/disposable_cystoscope.jpg";

const CystoscopeCapabilities = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "revolution",
      title: "The Single-Use Revolution: Cost Savings & Efficiency Gains",
      shortTitle: "Cost Savings & Efficiency",
      lead: "Eliminating disinfection overhead, repairs, and reprocessing turnaround delays.",
      icon: <DollarSign className="h-5 w-5" />,
      content:
        "The CY series reduces hospital costs by eliminating disinfection and maintenance. Its affordability enables outpatient cystoscopy, while single-use sterile packaging enhances diagnostic and treatment efficiency.",
      bullets: [
        "Eliminates per-procedure sterilization chemical, autoclave, and labor overhead",
        "Zero repair downtime or unexpected scope degradation expenses",
        "Unlocks high-efficiency outpatient flexible cystoscopy in office settings",
        "Accelerates operating room and clinic patient turnover with instant readiness",
      ],
      stats: [
        { label: "Maintenance Cost", value: "0%" },
        { label: "Sterilization Delay", value: "0 min" },
        { label: "Outpatient Feasibility", value: "100%" },
      ],
    },
    {
      id: "configuration",
      title: "Optimized Configuration, Enhanced Operational Experience",
      shortTitle: "Operational Experience",
      lead: "Featherweight maneuverability with 210° up-and-down deflection for complete vesical visualization.",
      icon: <Compass className="h-5 w-5" />,
      content:
        "Weighing less than 300g, the CY series features a standard adjustable angle knob and 210° up-and-down deflection. Combined with a high-definition processor, it allows for clear visualization of the bladder and diverticulum.",
      bullets: [
        "Featherweight handle (<300g) prevents surgeon hand, wrist, and forearm fatigue",
        "210° wide-angle bidirectional deflection eliminates visual blind spots",
        "Effortless inspection inside deep bladder diverticula and anterior bladder neck",
        "Optimized digital signal pairing with high-definition medical processors",
      ],
      stats: [
        { label: "Handle Weight", value: "< 300g" },
        { label: "Deflection Angle", value: "210°" },
        { label: "Blind Spots", value: "0°" },
      ],
    },
    {
      id: "comfort",
      title: "Patient Comfort & Safety First",
      shortTitle: "Patient Comfort & Safety",
      lead: "Streamlined bullet-shaped tip and Pebax-wrapped shaft for atraumatic urethral entry.",
      icon: <HeartHandshake className="h-5 w-5" />,
      content:
        "The streamlined, bullet-shaped tip ensures smooth urethral insertion with minimal resistance. Combined with a soft insertion tube wrapped in Pebax, it effectively reduces urethral injury, providing patients with a more comfortable and safer experience.",
      bullets: [
        "Hydrodynamically optimized bullet tip glides through narrow urethral sphincters",
        "Medical-grade Pebax jacket offers balanced torsional stiffness and mucosal gentleness",
        "Dramatically reduced urethral stricture, pain score, and bleeding risk",
        "100% sterile ethylene oxide packaging ensures zero patient-to-patient cross-infection",
      ],
      stats: [
        { label: "Insertion Resistance", value: "Minimal" },
        { label: "Cross-Infection Risk", value: "Zero" },
        { label: "Patient Comfort", value: "Optimal" },
      ],
    },
  ];

  const currentPillar = pillars[activeTab];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>CLINICAL EXCELLENCE IN CYSTOSCOPY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Three Pillars of the{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              CY Series Revolution
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Transforming lower urinary tract endoscopy with breakthrough ergonomics, atraumatic patient engineering, and unmatched institutional economy.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {pillars.map((p, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/25 ring-2 ring-primary/20 scale-102"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/20 p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <span>PILLAR 0{activeTab + 1}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl leading-snug">
                    {currentPillar.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-primary">
                    {currentPillar.lead}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {currentPillar.content}
                  </p>

                  {/* Bullet Points */}
                  <div className="mt-6 space-y-2.5">
                    {currentPillar.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stat Highlights */}
                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">
                    {currentPillar.stats.map((s, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/60 bg-white p-3 text-center shadow-xs"
                      >
                        <div className="text-lg sm:text-2xl font-black text-primary">
                          {s.value}
                        </div>
                        <div className="mt-0.5 text-[10px] sm:text-xs font-medium text-slate-500">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-blue-900/5 overflow-hidden">
                    <img
                      src={cystoscopeImg}
                      alt={currentPillar.title}
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-103"
                    />
                    <div className="mt-3 rounded-xl bg-slate-900/90 p-3 text-center text-xs font-medium text-white backdrop-blur-sm">
                      CY Series • Single-Use Flexible Video Cystoscope
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CystoscopeCapabilities;
