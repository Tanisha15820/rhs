import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Sliders,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Eye,
  RotateCcw,
} from "lucide-react";

const CystoscopeSpecs = () => {
  const [activeSeries, setActiveSeries] = useState("all");

  const intentModels = [
    {
      model: "CY-M32",
      od: "9.3Fr (3.1mm)",
      id: "3.6Fr (1.2mm)",
      length: "350mm",
      category: "INTENT",
      application: "Pediatric & Ultra-Slim Diagnostic Cystoscopy",
    },
    {
      model: "CY-M40",
      od: "12.0Fr (4.0mm)",
      id: "6.0Fr (2.0mm)",
      length: "350mm",
      category: "INTENT",
      application: "Standard Adult Diagnostic & Biopsy",
    },
    {
      model: "CY-M50",
      od: "15.0Fr (5.0mm)",
      id: "8.4Fr (2.8mm)",
      length: "350mm",
      category: "INTENT",
      application: "Therapeutic & Large Stent / Diverticulum Access",
    },
    {
      model: "CY-M52",
      od: "15.0Fr (5.0mm)",
      id: "7.8Fr (2.6mm)",
      length: "350mm",
      category: "INTENT",
      application: "High-Flow Saline Irrigation & Foreign Body Retrieval",
    },
  ];

  const megaModels = [
    {
      model: "CY-M40H",
      od: "12.0Fr (4.0mm)",
      id: "3.6Fr (1.2mm)",
      length: "350mm",
      category: "MEGA",
      application: "High-Durability Adult Diagnostic & Stent Removal",
    },
    {
      model: "CY-M52H",
      od: "15.0Fr (5.0mm)",
      id: "6.6Fr (2.2mm)",
      length: "350mm",
      category: "MEGA",
      application: "Interventional Cystoscopy & Diverticulum Therapy",
    },
  ];

  const generalSpecs = [
    {
      label: "Bending Range",
      value: "210° Up / 210° Down deflection",
      desc: "Wide-range articulation for apex and diverticular access",
    },
    {
      label: "Working Length",
      value: "350 mm",
      desc: "Optimized for male and female lower urinary tracts",
    },
    {
      label: "Handle Weight",
      value: "< 300 grams",
      desc: "Featherweight ergonomic design prevents wrist fatigue",
    },
    {
      label: "Insertion Tube Jacket",
      value: "Medical-Grade Pebax",
      desc: "Soft atraumatic outer sheath with depth graduations",
    },
    {
      label: "Image Sensor",
      value: "High-Definition CMOS",
      desc: "Chip-on-tip digital sensor delivering low-noise video",
    },
    {
      label: "Illumination Source",
      value: "Integrated Dual High-Intensity LEDs",
      desc: "Even, shadow-free illumination across vesical cavity",
    },
    {
      label: "Field of View (FOV)",
      value: "120° Wide Angle",
      desc: "Broad panoramic view of bladder mucosa and ureteral orifices",
    },
    {
      label: "Depth of Field (DOF)",
      value: "3 – 50 mm",
      desc: "Sharp mucosal clarity from close-up contact to panoramic",
    },
    {
      label: "Distal Tip Profile",
      value: "Streamlined Bullet-Shaped",
      desc: "Low-resistance urethral insertion without trauma",
    },
    {
      label: "Irrigation & Suction",
      value: "Luer-Lock Valve + Dedicated Suction Port",
      desc: "Continuous flush with single-touch evacuation button",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-16 sm:py-24 border-t border-slate-100">
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
            <span>TECHNICAL SPECIFICATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            CY Series Model{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Specifications & Matrix
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Available in INTENT and MEGA configurations spanning multiple outer diameters and working channels to match every clinical requirement.
          </motion.p>
        </div>

        {/* Dual Specification Tables (Matching Screenshot Layout) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* INTENT Series Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-blue-200/80 bg-white shadow-lg shadow-blue-900/5"
          >
            {/* Table Header Banner */}
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#2563EB] px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
                    DIAGNOSTIC & INTERVENTIONAL
                  </span>
                  <h3 className="text-xl font-extrabold tracking-wide">
                    INTENT SERIES
                  </h3>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                  4 Models
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-blue-100 bg-blue-50/60 text-slate-700">
                    <th className="py-3 px-4 font-bold">Model</th>
                    <th className="py-3 px-4 font-bold">O.D. (Outer Dia)</th>
                    <th className="py-3 px-4 font-bold">I.D. (Working Ch.)</th>
                    <th className="py-3 px-4 font-bold">Working Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {intentModels.map((item, idx) => (
                    <tr
                      key={item.model}
                      className={`transition-colors hover:bg-blue-50/40 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="py-3 px-4 font-bold text-primary">
                        {item.model}
                      </td>
                      <td className="py-3 px-4 font-medium">{item.od}</td>
                      <td className="py-3 px-4 font-medium">{item.id}</td>
                      <td className="py-3 px-4 text-slate-600">{item.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50/80 px-4 py-3 text-[11px] text-slate-500 border-t border-slate-100">
              * INTENT series features high channel-to-diameter ratio for optimal fluid dynamics and biopsy passage.
            </div>
          </motion.div>

          {/* MEGA Series Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-indigo-200/80 bg-white shadow-lg shadow-indigo-900/5 flex flex-col justify-between"
          >
            <div>
              {/* Table Header Banner */}
              <div className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
                      HIGH TORQUE & HEAVY DUTY
                    </span>
                    <h3 className="text-xl font-extrabold tracking-wide">
                      MEGA SERIES
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    2 Models
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-indigo-100 bg-indigo-50/60 text-slate-700">
                      <th className="py-3 px-4 font-bold">Model</th>
                      <th className="py-3 px-4 font-bold">O.D. (Outer Dia)</th>
                      <th className="py-3 px-4 font-bold">I.D. (Working Ch.)</th>
                      <th className="py-3 px-4 font-bold">Working Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {megaModels.map((item, idx) => (
                      <tr
                        key={item.model}
                        className={`transition-colors hover:bg-indigo-50/40 ${
                          idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        }`}
                      >
                        <td className="py-3 px-4 font-bold text-primary">
                          {item.model}
                        </td>
                        <td className="py-3 px-4 font-medium">{item.od}</td>
                        <td className="py-3 px-4 font-medium">{item.id}</td>
                        <td className="py-3 px-4 text-slate-600">
                          {item.length}
                        </td>
                      </tr>
                    ))}
                    {/* Empty placeholder rows for visual alignment */}
                    <tr className="bg-slate-50/30 opacity-40">
                      <td className="py-3 px-4 font-mono text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                    </tr>
                    <tr className="bg-white opacity-40">
                      <td className="py-3 px-4 font-mono text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-50/80 px-4 py-3 text-[11px] text-slate-500 border-t border-slate-100">
              * MEGA series delivers augmented shaft stability for prolonged intervention and complex operative diverticulum management.
            </div>
          </motion.div>
        </div>

        {/* System & Optical Parameters Matrix */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Physical & Optical Performance Parameters
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Standardized across all CY series single-use flexible cystoscopes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generalSpecs.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  {item.label}
                </div>
                <div className="mt-1 text-sm sm:text-base font-bold text-slate-900">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CystoscopeSpecs;
