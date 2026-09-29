import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Stethoscope,
  Target,
  FileCheck,
  Search,
  Activity,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const CystoscopeClinical = () => {
  const applications = [
    {
      title: "Bladder Diverticulum Diagnosis & Therapy",
      tag: "KEY SPECIALTY",
      description:
        "The 210° wide-angle deflection allows the distal tip to enter and inspect deep bladder diverticula that are inaccessible to rigid or standard flexible scopes, identifying hidden tumors, calculi, or mucosal inflammation.",
      icon: <Target className="h-5 w-5 text-primary" />,
      features: [
        "210° active deflection to negotiate diverticular ostia",
        "Clear visualization inside narrow diverticular pouches",
        "Biopsy and stone fragment extraction under direct vision",
      ],
    },
    {
      title: "Outpatient Flexible Cystoscopy",
      tag: "HIGH EFFICIENCY",
      description:
        "Enables cost-effective in-office and day-surgery cystoscopy without relying on centralized hospital reprocessing units. Zero pre-procedure waiting time accelerates consultation turnover.",
      icon: <Stethoscope className="h-5 w-5 text-primary" />,
      features: [
        "Eliminates CSSD sterilization turnaround delays",
        "Atraumatic bullet tip minimizes patient pain score",
        "High patient satisfaction during conscious office exams",
      ],
    },
    {
      title: "Gross & Microscopic Hematuria Workup",
      tag: "RAPID DIAGNOSIS",
      description:
        "Instant readiness for emergency department and outpatient hematuria clinics. High-definition chip-on-tip imaging allows immediate localization of urethral, prostate, or bladder bleeding sources.",
      icon: <Search className="h-5 w-5 text-primary" />,
      features: [
        "Continuous irrigation with Luer-lock stopcock",
        "Integrated suction to rapidly evacuate blood clots",
        "Dual LED lighting illuminates subtle mucosal lesions",
      ],
    },
    {
      title: "Ureteral DJ Stent Removal",
      tag: "ROUTINE INTERVENTION",
      description:
        "Accommodates standard flexible foreign-body grasping forceps or dormia baskets through the working channel for smooth, gentle double-J stent extraction in minutes.",
      icon: <Activity className="h-5 w-5 text-primary" />,
      features: [
        "Smooth instrument passage through generous channel",
        "Stable image holding during wire or stent grasping",
        "Performed with local lidocaine gel in outpatient setting",
      ],
    },
    {
      title: "Cold Cup Biopsy & Bladder Surveillance",
      tag: "ONCOLOGY SURVEILLANCE",
      description:
        "Essential for regular surveillance of non-muscle invasive bladder cancer (NMIBC) and post-TURBT follow-up. Allows precise targeted biopsies of suspicious erythematous patches.",
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      features: [
        "Precise targeting with smooth single-thumb bending dial",
        "Sharp 1080P digital image feed reveals micro-vascularity",
        "Compatible with standard flexible endoscopic biopsy forceps",
      ],
    },
    {
      title: "Zero Cross-Infection Guarantee",
      tag: "INFECTION CONTROL",
      description:
        "Single-use sterile EO packaging completely eliminates multi-drug resistant (MDR) bacterial transmission and biofilm risks associated with damaged or improperly reprocessed scopes.",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      features: [
        "100% sterile individual pouch per patient",
        "Complies with international single-use safety guidelines",
        "Crucial for immunocompromised and oncology patients",
      ],
    },
  ];

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
            <span>CLINICAL INDICATIONS & WORKFLOW</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Clinical Applications in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Lower Urinary Endoscopy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Suitable for lower urinary system diagnosis and treatment, especially for bladder diverticulum, outpatient diagnostic cystoscopy, stent removal, and biopsy.
          </motion.p>
        </div>

        {/* Applications Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, idx) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                    {React.cloneElement(app.icon, {
                      className:
                        "h-5 w-5 text-primary group-hover:text-white transition-colors",
                    })}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {app.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {app.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {app.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 space-y-2">
                {app.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CystoscopeClinical;
