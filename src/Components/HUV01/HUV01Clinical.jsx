import React from "react";
import { motion } from "framer-motion";
import { Activity, CheckCircle2, Stethoscope } from "lucide-react";

const HUV01Clinical = () => {
  const clinicalProcedures = [
    {
      title: "Flexible Ureterorenoscopy (URS)",
      scope: "HugeMed Flexible Ureterorenoscopes",
      description:
        "Real-time visual monitoring of the upper urinary tract and renal pelvis during stone lithotripsy, inspection, and diagnosis.",
      badge: "Endourology",
    },
    {
      title: "Diagnostic Flexible Endoscopy",
      scope: "Multi-model Flexible Scopes",
      description:
        "High-definition 1024 × 768 imaging with one-touch image freeze and snapshot recording for swift outpatient mucosal evaluation.",
      badge: "Diagnostics",
    },
    {
      title: "Operating Room Video Relaying",
      scope: "External Surgical Displays",
      description:
        "Connects directly to external overhead theater monitors to ensure all surgical team members have an unobstructed, clear view.",
      badge: "Surgical Theater",
    },
    {
      title: "Airway & Emergency Endoscopy",
      scope: "HugeMed Video Intubation Scopes",
      description:
        "Compact footprint facilitates instant cart positioning for fast airway assessment and tracheal visualization in critical settings.",
      badge: "Emergency / ICU",
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
            Clinical Workflow &{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Surgical Integration
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            Tailored to connect HugeMed flexible endoscopes to displays, offering medical teams consistent reliability and easy operation.
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
                  {proc.scope}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {proc.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Validated Workflow
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HUV01Clinical;
