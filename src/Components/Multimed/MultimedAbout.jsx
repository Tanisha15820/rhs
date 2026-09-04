import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Settings, Activity, Radio, TableRows } from "lucide-react";
import multimodLeft from "../../assets/images/multimed_left.png";
import multimodMachine from "../../assets/images/multimed.png";
import multimodScreen from "../../assets/images/multimed_screen.png";

const features = [
  {
    icon: Zap,
    title: "Flexible Modular",
    description:
      "Advanced multi-procedure and different pulse stimulation modes.",
    color: "from-[#3495d5] to-[#2167b4]",
    bgColor: "bg-blue-50",
    iconColor: "text-[#3495d5]",
  },
  {
    icon: Settings,
    title: "Precise Positioning",
    description: "Simple, precise controls and ergonomic design.",
    color: "from-[#20AFA7] to-[#14857E]",
    bgColor: "bg-teal-50",
    iconColor: "text-[#20AFA7]",
  },
  {
    icon: Activity,
    title: "Closed Circuit Water",
    description: "Controlled water flow for consistent performance.",
    color: "from-[#6366f1] to-[#4f46e5]",
    bgColor: "bg-indigo-50",
    iconColor: "text-[#6366f1]",
  },
  {
    icon: Radio,
    title: "Simultaneous Imaging",
    description: "Integrated imaging technology and ultrasound recovery.",
    color: "from-[#f59e0b] to-[#d97706]",
    bgColor: "bg-amber-50",
    iconColor: "text-[#f59e0b]",
  },
  {
    icon: Shield,
    title: "Independent Control",
    description: "Separate treatment settings for safe and efficient use.",
    color: "from-[#10b981] to-[#059669]",
    bgColor: "bg-emerald-50",
    iconColor: "text-[#10b981]",
  },
  {
    icon: TableRows,
    title: "Radiolucent Table",
    description: "Easy patient positioning and treatment accessibility.",
    color: "from-[#ec4899] to-[#db2777]",
    bgColor: "bg-pink-50",
    iconColor: "text-[#ec4899]",
  },
];

const specifications = [
  { label: "ESWL", value: "Electro-Magnetic" },
  { label: "Shock Wave Frequency", value: "1–10 Hz" },
  { label: "Max. Energy", value: "120 mJ" },
  { label: "Focal Zone", value: "8 × 5 mm" },
  { label: "Imaging", value: "X-Ray Fluoroscopy + Ultrasound" },
  { label: "Water System", value: "Closed Circuit Recovery System" },
  { label: "Weight", value: "800–900 kg" },
  { label: "Patient Support", value: "Fully adjustable treatment table" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const MultiMedAbout = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* ===================== HERO SECTION ===================== */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#edf5ff] to-[#d8eaff] px-6 py-10 sm:px-10 lg:px-14 lg:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          {/* Decorative elements */}
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#b9d8f5]/20 blur-2xl" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#8eb8df]/20" />
          <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full border border-[#8eb8df]/15" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[240px_1fr_340px]">
            {/* Left Product Image */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
              custom={0}
            >
              <div className="group relative rounded-2xl border border-white bg-white/80 p-5 shadow-xl shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={multimodLeft}
                  alt="MultiMed Control Panel"
                  className="relative z-10 h-[200px] w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#3495d5]/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3495d5] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3495d5] sm:text-xs">
                  Electro-Magnetic ESWL System
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-[#17243a] sm:text-5xl lg:text-[56px]">
                MULTI
                <span className="bg-gradient-to-r from-[#3495d5] to-[#2167b4] bg-clip-text text-transparent">
                  MED
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#50667d] sm:text-base">
                MULTIMED is a next-generation lithotripsy system designed for
                patient comfort, clinical precision, and operational efficiency.
                Its modular design, advanced imaging integration, and
                intelligent control system make it ideal for modern healthcare
                facilities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3495d5] to-[#2167b4] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-300/50">
                  Request Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-[#aac7e0] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#35698f] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-[#3495d5]/30 hover:shadow-md">
                  Download Brochure
                </button>
              </div>
            </motion.div>

            {/* Right Machine Image */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
              custom={2}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3495d5]/10 to-[#2167b4]/10 blur-2xl" />
                <img
                  src={multimodMachine}
                  alt="MultiMed Machine"
                  className="relative z-10 h-[280px] w-full object-contain drop-shadow-[0_20px_40px_rgba(52,149,213,0.15)] lg:h-[320px]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===================== FEATURES SECTION ===================== */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#3495d5]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#3495d5] sm:text-xs">
                Key Features
              </span>
              <span className="h-px w-8 bg-[#3495d5]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
              Advanced{" "}
              <span className="bg-gradient-to-r from-[#3495d5] to-[#2167b4] bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#7C879C]">
              Engineered for precision, comfort, and clinical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50 hover:border-[#3495d5]/20"
                  variants={fadeUp}
                  custom={index}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${feature.bgColor}" />

                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} className={feature.iconColor} />
                  </div>

                  <h3 className="relative z-10 mt-4 text-base font-bold text-[#1a2b42]">
                    {feature.title}
                  </h3>

                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-[#66758a]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===================== BOTTOM SECTION ===================== */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Product Overview */}
          <motion.div
            className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#3495d5]/10 px-3 py-1">
              <CheckCircle size={14} className="text-[#3495d5]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3495d5]">
                Product Overview
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#1a2b42]">
              Designed for Clinical Excellence
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#65788c]">
              MULTIMED is designed to deliver effective, comfortable, and safe
              stone fragmentation with advanced imaging and precise treatment
              control.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-xl bg-[#f0f7ff] p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3495d5]/10">
                  <CheckCircle size={18} className="text-[#3495d5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a2b42]">
                    Reliable Clinical Operation
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#65788c]">
                    The system is designed for reliable clinical operation with
                    accurate shock wave delivery and flexible treatment settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-[#f0fdf4] p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  <CheckCircle size={18} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1a2b42]">
                    Efficient Workflows
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#65788c]">
                    With simultaneous imaging support and an advanced patient
                    treatment table, MULTIMED provides efficient workflows for
                    modern healthcare environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Image */}
          </motion.div>

          {/* Quick Specifications */}
          <motion.div
            className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#f3f8fc] p-7 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#20AFA7]/10 px-3 py-1">
              <Settings size={14} className="text-[#20AFA7]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7]">
                Technical Specs
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#1a2b42]">
              Quick Specifications
            </h2>

            <div className="mt-6 space-y-2">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3.5 transition-all duration-300 hover:border-[#3495d5]/20 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3495d5]/10 transition-colors duration-300 group-hover:bg-[#3495d5]/15">
                      <CheckCircle
                        size={14}
                        className="text-[#3495d5]"
                      />
                    </div>
                    <span className="text-sm font-medium text-[#4a5568]">
                      {spec.label}
                    </span>
                  </div>
                  <span className="text-right text-xs font-semibold text-[#1a2b42]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-[#3495d5] to-[#2167b4] p-5 text-center">
              <p className="text-sm font-semibold text-white">
                Need detailed technical specifications?
              </p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-[#3495d5] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Contact Our Team
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ===================== FULL-WIDTH SCREEN IMAGE ===================== */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-lg shadow-blue-100/40">
            <img
              src={multimodScreen}
              alt="MultiMed Treatment System"
              className="h-[280px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[340px] lg:h-[400px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2167b4]/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultiMedAbout;
