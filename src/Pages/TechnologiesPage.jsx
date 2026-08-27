import React from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  Zap,
  ShieldCheck,
  Activity,
  Target,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Settings,
} from "lucide-react";

import SEO from "../Components/SEO";

import bannerBg from "../assets/images/surgery_banner.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import hollowFiber from "../assets/images/hollow_fiber.png";
import diodeLaser from "../assets/images/diode.png";
import machineImage from "../assets/images/SmartXide2Trio.png";

/* =====================================================
   TECHNOLOGY DATA
===================================================== */

const technologies = [
  {
    id: "01",
    category: "CO\u2082 LASER",
    title: "Articulated Arm",
    image: articulatedArm,
    description:
      "Advanced articulated arm technology ensures exceptional precision, maneuverability and control for a wide range of ENT procedures.",
    details: [
      "Electronic scanning systems for extremely precise, safe and reproducible treatments",
      "High precision micromanipulators",
      "Dedicated handpieces with various focal lengths and integrated swivel suction control",
    ],
    features: [
      { icon: Crosshair, text: "Electronic scanning systems for extremely precise, safe and reproducible treatments" },
      { icon: Target, text: "High precision micromanipulators" },
      { icon: Zap, text: "Dedicated handpieces with various focal lengths and integrated swivel suction control" },
    ],
    theme: "orange",
  },
  {
    id: "02",
    category: "CO\u2082 LASER",
    title: "Hollow Fibre",
    image: hollowFiber,
    description:
      "Designed to reach the most difficult-to-reach areas with maximum efficiency and minimal invasiveness.",
    details: [
      "Ideal for narrow and complex anatomical regions",
      "Optimal energy delivery with hollow fibre technology",
      "Enhanced precision with minimal thermal damage",
    ],
    features: [
      { icon: Crosshair, text: "Ideal for narrow and complex anatomical regions" },
      { icon: Zap, text: "Optimal energy delivery with hollow fibre technology" },
      { icon: ShieldCheck, text: "Enhanced precision with minimal thermal damage" },
    ],
    theme: "blue",
  },
  {
    id: "03",
    category: "DIODE LASER",
    title: "Diode Laser",
    image: diodeLaser,
    description:
      "An additional wavelength (980 nm) to expand the range of available procedures with excellent results.",
    details: [
      "Versatile soft tissue treatments",
      "Reduced bleeding and faster healing",
      "Reliable performance with high absorption in target tissue",
    ],
    features: [
      { icon: Crosshair, text: "Versatile soft tissue treatments" },
      { icon: Zap, text: "Reduced bleeding and faster healing" },
      { icon: Activity, text: "Reliable performance with high absorption in target tissue" },
    ],
    theme: "pink",
  },
];

const advantages = [
  {
    icon: Settings,
    title: "Unmatched Precision",
    description: "Our laser technologies deliver pinpoint accuracy for superior surgical outcomes.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description: "Minimally invasive procedures mean faster recovery and reduced complications.",
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Trusted by healthcare professionals worldwide for consistent, reliable performance.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Award,
    title: "Innovation Leadership",
    description: "Cutting-edge technology backed by years of research and development.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

/* =====================================================
   THEME COLORS
===================================================== */

const themeColors = {
  orange: {
    main: "#ff7b32",
    light: "#fff0e8",
    border: "#ffd8c5",
    glow: "rgba(255,123,50,0.20)",
    gradient: "from-[#ff7b32] to-[#ff9a5c]",
  },
  blue: {
    main: "#28b9df",
    light: "#e8f8fc",
    border: "#c6edf5",
    glow: "rgba(40,185,223,0.20)",
    gradient: "from-[#28b9df] to-[#4dd4ea]",
  },
  pink: {
    main: "#e95c91",
    light: "#fceaf1",
    border: "#f4ccdc",
    glow: "rgba(233,92,145,0.20)",
    gradient: "from-[#e95c91] to-[#f07baa]",
  },
};

/* =====================================================
   TECHNOLOGY CARD - ALTERNATING LAYOUT
===================================================== */

const TechnologyCard = ({ technology, index }) => {
  const theme = themeColors[technology.theme];
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      className={`group relative flex flex-col overflow-visible rounded-2xl border border-[#e2eaf2] bg-white shadow-[0_5px_25px_rgba(42,75,105,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(42,75,105,0.13)] lg:flex-row ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* ========== IMAGE PANEL ========== */}
      <div
        className={`relative flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden sm:h-[150px] sm:w-[220px] lg:w-[240px] ${
          isReversed ? "lg:border-l" : ""
        }`}
        style={{
          background: `linear-gradient(135deg, ${theme.light} 0%, #ffffff 100%)`,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60"
          style={{ borderColor: theme.border }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: `${theme.main}20` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
          style={{ borderColor: `${theme.main}30` }}
        />

        {/* Floating dots */}
        <span
          className="absolute left-[22%] top-[28%] h-1 w-1 rounded-full animate-float-y"
          style={{ backgroundColor: theme.main, animationDelay: "0.5s" }}
        />
        <span
          className="absolute bottom-[25%] right-[22%] h-1 w-1 rounded-full animate-float-y"
          style={{ backgroundColor: theme.main, animationDelay: "1.2s" }}
        />

        {/* Number badge */}
        <div
          className="absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md sm:left-4 sm:top-4"
          style={{
            background: `linear-gradient(135deg, ${theme.main}, ${theme.main}cc)`,
            boxShadow: `0 4px 12px ${theme.glow}`,
          }}
        >
          {technology.id}
        </div>

        {/* Product image */}
        <motion.img
          src={technology.image}
          alt={technology.title}
          className="relative z-10 h-[85px] w-[120px] object-contain drop-shadow-md sm:h-[100px] sm:w-[140px]"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* ========== CONTENT PANEL ========== */}
      <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6 sm:py-6 lg:px-8">
        {/* Category tag */}
        <span
          className="mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          style={{
            backgroundColor: theme.light,
            color: theme.main,
            border: `1px solid ${theme.border}`,
          }}
        >
          {technology.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight text-[#172b3d] sm:text-2xl">
          {technology.title}
        </h3>

        {/* Accent line */}
        <div className="mt-2 h-[2px] w-8 rounded-full" style={{ backgroundColor: theme.main }} />

        {/* Description */}
        <p className="mt-2.5 max-w-[420px] text-sm leading-[1.6] text-[#687887]">
          {technology.description}
        </p>

        {/* Details */}
        <div className="mt-3 space-y-1.5">
          {technology.details.map((detail, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.3 + idx * 0.08 }}
            >
              <CheckCircle
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: theme.main }}
              />
              <p className="text-sm leading-[1.45] text-[#687887]">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== FEATURES PANEL ========== */}
      <div
        className={`flex w-full flex-col justify-center gap-2 border-t border-[#e8edf3] px-5 py-4 sm:px-6 lg:w-[280px] lg:border-t-0 ${
          isReversed ? "lg:border-r" : "lg:border-l"
        }`}
        style={{
          background: `linear-gradient(180deg, ${theme.light}40 0%, #ffffff 100%)`,
        }}
      >
        <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8795a5]">
          Key Features
        </p>

        {technology.features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-2.5 rounded-lg border border-[#e8edf3] bg-white/80 px-3 py-2 shadow-[0_2px_8px_rgba(30,70,100,0.04)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#d0dde8] group-hover:shadow-[0_3px_12px_rgba(30,70,100,0.07)]"
              initial={{ opacity: 0, x: isReversed ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.35 + index * 0.08 }}
            >
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${theme.main}, ${theme.main}dd)`,
                  boxShadow: `0 2px 8px ${theme.glow}`,
                }}
              >
                <Icon size={13} strokeWidth={2} />
              </div>
              <p className="pr-1 text-xs leading-[1.45] text-[#687887]">
                {feature.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Hover glow bar */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-[60%]"
        style={{
          backgroundColor: theme.main,
          boxShadow: `0 0 15px ${theme.main}`,
        }}
      />
    </motion.div>
  );
};

/* =====================================================
   MAIN TECHNOLOGIES PAGE
===================================================== */

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Technologies - Advanced Laser & Medical Equipment"
        description="Explore the cutting-edge laser technologies powering Reinforce Healthcare Services' medical equipment. CO2 articulated arm, hollow fibre, and diode laser solutions."
        keywords="medical laser technology, CO2 laser, articulated arm laser, hollow fibre laser, diode laser, ENT laser technology, surgical laser"
        canonical="/technologies"
      />

      {/* ==================== BANNER ==================== */}
      <section
        className="relative h-[220px] w-full overflow-hidden sm:h-[260px] md:h-[300px]"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30" />

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                OUR TECHNOLOGIES
              </span>
              <span className="h-px w-8 bg-primary" />
            </motion.div>

            <motion.h1
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Advanced Laser{" "}
              <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Precision-driven innovations powering the future of minimally
              invasive surgery and therapeutic laser applications.
            </motion.p>

            {/* Banner stats */}
            <motion.div
              className="mt-6 flex items-center gap-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Crosshair size={14} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-white/90">3 Technologies</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-white/90">Proven Precision</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#f7faff] py-16 sm:py-20 lg:py-24">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-50/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-7 bg-[#20B7AE]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
                  Why Our Technologies
                </span>
                <span className="h-px w-7 bg-[#20B7AE]" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Powering{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Precision Medicine
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-[#7C879C] sm:text-base sm:leading-7">
                Our range of advanced laser technologies is designed to meet the
                demanding requirements of modern surgical and therapeutic
                procedures. From CO&#8322; lasers to diode systems, each technology
                is engineered for exceptional performance, safety, and
                reliability.
              </p>

              {/* Advantage cards - 2x2 grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group rounded-xl border border-gray-100 bg-white p-5 shadow-[0_5px_25px_rgba(20,40,80,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(20,40,80,0.10)]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${advantage.color}`}
                      >
                        <Icon
                          className={advantage.iconColor}
                          sx={{ fontSize: 25 }}
                        />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-gray-700">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        {advantage.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Machine Image */}
            <motion.div
              className="relative mx-auto flex h-[350px] w-full max-w-[480px] items-center justify-center sm:h-[440px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Glow */}
              <div className="absolute bottom-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

              {/* Decorative rings */}
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15" />
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8" />

              {/* Floating feature cards */}
              <motion.div
                className="absolute left-0 top-16 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-[0_10px_30px_rgba(65,135,190,0.12)] backdrop-blur-md xl:flex"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-primary/10 shadow-sm">
                  <img src={articulatedArm} alt="Articulated Arm" className="h-full w-full object-contain p-2" />
                </div>
                <div>
                  <span className="text-lg font-bold text-primary">01</span>
                  <h4 className="mt-0.5 text-xs font-bold text-slate-900">Articulated Arm</h4>
                  <p className="mt-0.5 text-[10px] text-slate-500">Precision targeting</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-[0_10px_30px_rgba(65,135,190,0.12)] backdrop-blur-md xl:flex"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-primary/10 shadow-sm">
                  <img src={hollowFiber} alt="Hollow Fiber" className="h-full w-full object-contain p-2" />
                </div>
                <div>
                  <span className="text-lg font-bold text-primary">02</span>
                  <h4 className="mt-0.5 text-xs font-bold text-slate-900">Hollow Fibre</h4>
                  <p className="mt-0.5 text-[10px] text-slate-500">Deep reach delivery</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-[0_10px_30px_rgba(65,135,190,0.12)] backdrop-blur-md xl:flex"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-primary/10 shadow-sm">
                  <img src={diodeLaser} alt="Diode Laser" className="h-full w-full object-contain p-2" />
                </div>
                <div>
                  <span className="text-lg font-bold text-primary">03</span>
                  <h4 className="mt-0.5 text-xs font-bold text-slate-900">Diode Laser</h4>
                  <p className="mt-0.5 text-[10px] text-slate-500">Versatile wavelength</p>
                </div>
              </motion.div>

              {/* Machine */}
              <motion.img
                src={machineImage}
                alt="Advanced laser technology system"
                className="relative z-10 h-[280px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(39,96,150,0.18)] sm:h-[340px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Connector arrows (desktop) */}
              <div className="absolute left-[180px] top-[80px] hidden items-center xl:flex">
                <div className="h-2 w-2 rounded-full border border-primary bg-white" />
                <div className="h-[1px] w-[40px] bg-primary" />
                <ArrowRight className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-[100px] left-[180px] hidden items-center xl:flex">
                <div className="h-2 w-2 rounded-full border border-primary bg-white" />
                <div className="h-[1px] w-[40px] bg-primary" />
                <ArrowRight className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-[100px] right-[180px] hidden items-center xl:flex">
                <ArrowRight className="h-3.5 w-3.5 text-primary rotate-180" strokeWidth={1.5} />
                <div className="h-[1px] w-[40px] bg-primary" />
                <div className="h-2 w-2 rounded-full border border-primary bg-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY CARDS ==================== */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section Heading */}
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Three Powerful{" "}
                <span>Technologies</span>
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Engineered for{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
              Advanced solutions. Superior precision. Better patient outcomes.
            </p>
          </motion.div>

          {/* Timeline connector */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-16 left-8 top-16 hidden w-px bg-gradient-to-b from-[#e2eaf2] via-[#d0dde8] to-[#e2eaf2] lg:block" />

            {/* Cards */}
            <div className="space-y-5">
              {technologies.map((technology, index) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-16 sm:py-20 lg:py-24">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                Get Started
              </span>
              <span className="h-px w-8 bg-white/40" />
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
              Ready to Experience Advanced{" "}
              <span className="text-white/90">Laser Technology?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              Contact us to learn more about our cutting-edge laser technologies
              and how they can enhance your clinical practice.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-dark shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/smartxide"
                className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300"
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Explore SmartXide
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
