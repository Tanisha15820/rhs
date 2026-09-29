import React from "react";
import { motion } from "framer-motion";
import { Activity, CheckCircle2, Stethoscope } from "lucide-react";

const HU30MClinical = () => {
  const clinicalProcedures = [
    {
      title: "'No-Touch' Technique Primary RIRS",
      modality: "Direct Retrograde Access",
      description:
        "The ultra-slim 6.3Fr profile enters narrow or un-dilated ureters directly without requiring pre-placed double-J stents, ureteral access sheaths, or guidewires.",
      badge: "Stentless RIRS",
    },
    {
      title: "Severe Ureteral Stricture Management",
      modality: "Stricture Passage & Laser Endopyelotomy",
      description:
        "Passes congenital or post-surgical strictures previously deemed impassable by standard 8.5Fr scopes, expanding non-invasive options for high-risk patients.",
      badge: "Stricture Bypass",
    },
    {
      title: "Lower Pole Caliceal Lithotripsy",
      modality: "285° Active Deflection & Laser Dusting",
      description:
        "Effortlessly retroflexes into acute-angle lower pole calyces, allowing continuous high irrigation flow to prevent intrarenal temperature spikes during laser dusting.",
      badge: "Stone Clearance",
    },
    {
      title: "Pediatric & High-Risk Endourology",
      modality: "Miniaturized Atraumatic Access",
      description:
        "6.3Fr outer diameter offers an atraumatic, safe solution for pediatric ureteroscopy and patients with fragile mucosal architecture prone to perforation.",
      badge: "Pediatric & Fragile",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Stethoscope className="h-3.5 w-3.5" />
            <span>CLINICAL APPLICATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Expanding Indications in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Challenging Ureteroscopy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            Trusted by global endourology centers to perform complex stentless procedures and navigate tight anatomies with high safety and comfort.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinicalProcedures.map((proc, i) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary">
                    {proc.badge}
                  </span>
                  <Activity className="h-4 w-4 text-slate-400" />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {proc.title}
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-primary">
                  {proc.modality}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {proc.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Clinically Proven Efficacy
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HU30MClinical;
