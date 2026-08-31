import React from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  Zap,
  ShieldCheck,
  Activity,
  Target,
  CheckCircle,
} from "lucide-react";

import articulatedArm from "../../assets/images/articulate_arm.png";
import hollowFiber from "../../assets/images/hollow_fiber.png";
import diodeLaser from "../../assets/images/diode.png";

const technologies = [
  {
    id: "01",
    category: "CO₂ LASER",
    title: "Articulated Arm",
    image: articulatedArm,
    description:
      "Advanced articulated-arm technology provides precise laser delivery, excellent maneuverability and compatibility with a wide range of surgical accessories.",
    details: [
      "Electronic scanning systems",
      "High-precision micromanipulators",
      "Dedicated handpieces with multiple focal lengths",
      "Scanner-compatible surgical accessories",
    ],

    features: [
      {
        icon: Crosshair,
        text: "Electronic scanning systems",
      },
      {
        icon: Target,
        text: "High precision micromanipulators",
      },
      {
        icon: Zap,
        text: "Dedicated handpieces with multiple focal lengths",
      },
      {
        icon: Crosshair,
        text: "Scanner-compatible surgical accessorie",
      },
    ],

    theme: "orange",
  },

  {
    id: "02",
    category: "CO₂ LASER TECHNOLOGY",
    title: "Precision Pulse Control",
    image: hollowFiber,

    description:
      "Advanced pulse modes deliver controlled laser energy for precise ablation while helping manage thermal interaction and penetration depth.",

    details: ["D-Pulse Technology", "Depth Control", "Reduced Thermal Effect"],

    features: [
      {
        icon: Crosshair,
        text: "Controlled energy delivery.",
      },
      {
        icon: Zap,
        text: "Precise management of penetration.",
      },
      {
        icon: ShieldCheck,
        text: "Optimized treatment around the target area.",
      },
    ],

    theme: "blue",
  },

  {
    id: "03",
    category: "μ-SCAN TECHNOLOGY",
    title: "Scanner-Assisted Precision",
    image: diodeLaser,

    description:
      "High-speed scanning technology enables extremely precise beam movement and multiple programmable scanning patterns for controlled surgical applications.",

    details: [
      "Ultra-fast movement",
      "Controlled ablation area",
      "High-precision scanning shapes",
    ],

    features: [
      {
        icon: Crosshair,
        text: "Ultra-fast movement",
      },
      {
        icon: Zap,
        text: "Controlled ablation area",
      },
      {
        icon: Activity,
        text: "High-precision scanning shapes",
      },
    ],

    theme: "pink",
  },
];

const themeColors = {
  orange: {
    main: "#ff7b32",
    light: "#fff0e8",
    border: "#ffd8c5",
    glow: "rgba(255,123,50,0.20)",
  },

  blue: {
    main: "#28b9df",
    light: "#e8f8fc",
    border: "#c6edf5",
    glow: "rgba(40,185,223,0.20)",
  },

  pink: {
    main: "#e95c91",
    light: "#fceaf1",
    border: "#f4ccdc",
    glow: "rgba(233,92,145,0.20)",
  },
};

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
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {/* IMAGE PANEL */}

      <div
        className={`relative flex min-h-[140px] w-full shrink-0 items-center justify-center overflow-hidden sm:min-h-[150px] sm:w-[220px] lg:w-[240px] ${
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
          style={{
            backgroundColor: theme.main,
            animationDelay: "0.5s",
          }}
        />

        <span
          className="absolute bottom-[25%] right-[22%] h-1 w-1 rounded-full animate-float-y"
          style={{
            backgroundColor: theme.main,
            animationDelay: "1.2s",
          }}
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
          whileHover={{
            scale: 1.08,
            rotate: 2,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </div>

      {/* CONTENT PANEL */}

      <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6 sm:py-6 lg:px-8">
        {/* Category */}

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

        <div
          className="mt-2 h-[2px] w-8 rounded-full"
          style={{
            backgroundColor: theme.main,
          }}
        />

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
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: 0.3 + idx * 0.08,
              }}
            >
              <CheckCircle
                size={15}
                className="mt-0.5 shrink-0"
                style={{
                  color: theme.main,
                }}
              />

              <p className="text-sm leading-[1.45] text-[#687887]">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FEATURES PANEL */}

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
              initial={{
                opacity: 0,
                x: isReversed ? -15 : 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: 0.35 + index * 0.08,
              }}
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

      {/* Hover glow */}

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

const TechnologiesSurgico = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="hidden h-[1px] w-9 bg-primary sm:block" />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
              Three Powerful <span>Technologies</span>
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

        <div className="relative">
          {/* Vertical line */}

          <div className="absolute bottom-16 left-8 top-16 hidden w-px bg-gradient-to-b from-[#e2eaf2] via-[#d0dde8] to-[#e2eaf2] lg:block" />

          {/* Technology Cards */}

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
  );
};

export default TechnologiesSurgico;
