import React from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Eye,
  Zap,
  Layers,
} from "lucide-react";

import SEO from "../Components/SEO";

import bannerBg from "../assets/images/smartxide_banner.png";
import cystonephroscopeImg from "../assets/images/cystonephroscope.png";

import ProductInquireCTA from "../Components/Common/ProductInquireCTA";


/* =========================================================
   DESKTOP FEATURE CARD
   ========================================================= */

const FeatureCard = ({
  number,
  type,
  title,
  description,
  image,
  position,
}) => {
  return (
    <div
      className={`
        absolute hidden xl:block
        w-[295px] h-[135px]
        rounded-[22px]
        border border-white
        bg-white/95
        shadow-[0_12px_35px_rgba(70,130,190,0.16)]
        backdrop-blur-md
        ${position}
      `}
    >
      {/* Number Badge */}
      <div className="absolute left-0 top-0 z-20 flex h-[42px] w-[56px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">
          {number}
        </span>
      </div>

      {/* Left Accent Line */}
      <div className="absolute left-0 top-[40px] h-[72px] w-[1px] bg-primary" />

      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        {/* Circular Product Image */}
        <div className="relative ml-6 flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_15px_rgba(40,116,189,0.12)]">
          <div className="flex h-[56px] w-[56px] items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-white/80">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain p-1"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="min-w-0 flex-1 pr-2">
          {type && (
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
                {type}
              </span>
            </div>
          )}

          <h4 className="text-[13px] font-bold leading-tight text-slate-900">
            {title}
          </h4>

          <p className="mt-1 line-clamp-2 text-[11px] leading-[15px] text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-2.5 right-4 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
    </div>
  );
};


/* =========================================================
   MOBILE FEATURE CARD
   ========================================================= */

const MobileFeatureCard = ({
  number,
  title,
  description,
  image,
}) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      {/* Number Badge */}
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">
          {number}
        </span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        {/* Image */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-blue-50">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h4 className="text-xs font-bold text-slate-800">
            {title}
          </h4>

          <p className="mt-0.5 line-clamp-2 text-[11px] leading-4 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


/* =========================================================
   MAIN PAGE
   ========================================================= */

const Cystonephroscope = () => {

  /* =======================================================
     TECHNICAL SPECIFICATIONS
     ======================================================= */

  const specs = [
    {
      label: "Optical System",
      value: "High-Definition CMOS with integrated dual LED",
    },
    {
      label: "Field of View",
      value: "120° wide visual perspective",
    },
    {
      label: "Depth of Field",
      value: "3 – 50 mm",
    },
    {
      label: "Bending Range",
      value: "Up 210° / Down 210° active bidirectional",
    },
    {
      label: "Outer Diameter",
      value: "14.5 Fr (4.8 mm)",
    },
    {
      label: "Working Channel",
      value: "6.6 Fr (2.2 mm) large biopsy/laser channel",
    },
    {
      label: "Working Length",
      value: "380 mm",
    },
    {
      label: "Sterilization",
      value: "100% Sterile, EO sterilized single-use",
    },
  ];


  /* =======================================================
     CLINICAL FEATURES
     ======================================================= */

  const features = [
    {
      icon: Eye,
      title: "Crystal-Clear Endoscopic View",
      desc:
        "Distortion-free HD CMOS camera paired with powerful LED illumination gives surgeons complete visualization of the bladder and pyelocaliceal anatomy.",
    },
    {
      icon: Zap,
      title: "Active 210° Deflection",
      desc:
        "Exceptional tip articulation allows full reach into difficult anatomy, complex lower pole calyces, and tight anatomical corners with fingertip ease.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Cross-Contamination",
      desc:
        "Eliminates high-cost reprocessing, scope degradation, and hospital-acquired infection risks with individually packed, sterile single-use packaging.",
    },
    {
      icon: Layers,
      title: "Large Working Channel",
      desc:
        "6.6 Fr instrumentation channel allows smooth passage of biopsy forceps, lithotripsy laser fibers, and continuous irrigation flow.",
    },
  ];


  /* =======================================================
     HERO FEATURES
     ======================================================= */

  const heroFeatures = [
    {
      number: "01",
      type: "Optics",
      title: "HD CMOS Sensor",
      description:
        "High-definition chip-on-the-tip imaging with a wide 120° field of view.",
      image: cystonephroscopeImg,
      position: "left-28 top-16",
    },

    {
      number: "02",
      type: "Channel",
      title: "6.6 Fr Working Channel",
      description:
        "Large channel supports irrigation, biopsy instruments and laser accessories.",
      image: cystonephroscopeImg,
      position: "bottom-14 left-28",
    },

    {
      number: "03",
      type: "Deflection",
      title: "210° Active Deflection",
      description:
        "Bidirectional articulation enables precise access through difficult anatomy.",
      image: cystonephroscopeImg,
      position: "right-28 top-16",
    },

    {
      number: "04",
      type: "Safety",
      title: "Sterile Single-Use",
      description:
        "Eliminates reprocessing requirements and reduces cross-contamination risk.",
      image: cystonephroscopeImg,
      position: "bottom-14 right-28",
    },
  ];


  return (
    <div className="bg-white">

      {/* ===================================================
          SEO
         =================================================== */}

      <SEO
        title="Disposable Cystonephroscope Rental | Reinforce Healthcare Services"
        description="High-definition single-use flexible digital cystonephroscope with 210° bidirectional deflection and large working channel for advanced hospital endourology."
        keywords="cystonephroscope rental, single use cystonephroscope, flexible video cystonephroscope, urology scope rental"
      />


      {/* ===================================================
          HERO BANNER
          Matches Bladder Scanner / SmartXide Page
         =================================================== */}

      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Disposable Cystonephroscope Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Very Light Overlay */}
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]" />


        {/* Main Hero Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          {/* ===============================
              HERO HEADING
             =============================== */}

          <div className="pt-6 text-center sm:pt-8 lg:pt-12">

            {/* Top Category Label */}
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                DISPOSABLE ENDOUROLOGY SERIES
              </span>

              <span className="hidden h-[1px] w-9 bg-primary sm:block" />
            </div>


            {/* Product Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Disposable{" "}

              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Cystonephroscope
              </span>
            </h1>


            {/* Product Description */}
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Premium single-use flexible video cystonephroscope delivering
              uncompromised high-definition visualization, 210° bidirectional
              active deflection, and maximum procedural safety.
            </p>

          </div>


          {/* =================================================
              INTERACTIVE PRODUCT SHOWCASE
             ================================================= */}

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">


            {/* ================================================
                DESKTOP FEATURE CARDS
               ================================================ */}

            {heroFeatures.map((card, idx) => (
              <FeatureCard
                key={idx}
                number={card.number}
                type={card.type}
                title={card.title}
                description={card.description}
                image={card.image}
                position={card.position}
              />
            ))}


            {/* ================================================
                DESKTOP POINTER ARROWS
               ================================================ */}

            {/* TOP LEFT */}
            <div className="absolute left-[424px] top-[105px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white" />

              <div className="h-[1px] w-[50px] bg-primary" />

              <ArrowRight
                className="h-4 w-4 text-primary"
                strokeWidth={1.5}
              />
            </div>


            {/* BOTTOM LEFT */}
            <div className="absolute bottom-[105px] left-[424px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white" />

              <div className="h-[1px] w-[50px] bg-primary" />

              <ArrowRight
                className="h-4 w-4 text-primary"
                strokeWidth={1.5}
              />
            </div>


            {/* TOP RIGHT */}
            <div className="absolute right-[424px] top-[105px] hidden items-center xl:flex">
              <ArrowLeft
                className="h-4 w-4 text-primary"
                strokeWidth={1.5}
              />

              <div className="h-[1px] w-[50px] bg-primary" />

              <div className="h-2 w-2 rounded-full border border-primary bg-white" />
            </div>


            {/* BOTTOM RIGHT */}
            <div className="absolute bottom-[105px] right-[424px] hidden items-center xl:flex">
              <ArrowLeft
                className="h-4 w-4 text-primary"
                strokeWidth={1.5}
              />

              <div className="h-[1px] w-[50px] bg-primary" />

              <div className="h-2 w-2 rounded-full border border-primary bg-white" />
            </div>


            {/* ================================================
                CENTRAL PRODUCT - DESKTOP
               ================================================ */}

            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">

              {/* Soft Product Glow */}
              <div className="absolute bottom-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />


              {/* IMPORTANT:
                  NO WHITE CARD / NO WHITE CONTAINER
              */}

              <motion.img
                src={cystonephroscopeImg}
                alt="Disposable Cystonephroscope"
                className="
                  relative z-10
                  max-h-[390px]
                  w-auto
                  max-w-[430px]
                  object-contain
                  drop-shadow-[0_25px_35px_rgba(25,168,232,0.22)]
                  lg:max-h-[460px]
                "
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

            </div>


            {/* ================================================
                CENTRAL PRODUCT - MOBILE
               ================================================ */}

            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden">

              {/* Glow */}
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl" />


              <motion.img
                src={cystonephroscopeImg}
                alt="Disposable Cystonephroscope"
                className="
                  relative z-10
                  max-h-[280px]
                  w-auto
                  max-w-full
                  object-contain
                  drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

            </div>


            {/* ================================================
                MOBILE FEATURE CARDS
               ================================================ */}

            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">

              {heroFeatures.map((card, idx) => (
                <MobileFeatureCard
                  key={idx}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CLINICAL ADVANTAGES
         =================================================== */}

      <section className="border-y border-slate-100 bg-white py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />

              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Advanced Endourology
              </p>

              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>


            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Clinical{" "}

              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>


            <p className="mt-2 text-sm text-slate-500">
              Engineered to optimize clinical outcomes and elevate surgical
              precision
            </p>

          </div>


          {/* Advantages Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feat, idx) => {

              const Icon = feat.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg"
                >

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>


                  {/* Title */}
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {feat.title}
                  </h3>


                  {/* Description */}
                  <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {feat.desc}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* ===================================================
          TECHNICAL SPECIFICATIONS
         =================================================== */}

      <section className="bg-slate-50 py-16 md:py-20">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-10 text-center">

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />

              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Certified Engineering
              </p>

              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>


            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Technical{" "}

              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>


            <p className="mt-2 text-sm text-slate-500">
              Detailed technical parameters of the Disposable Cystonephroscope
            </p>

          </div>


          {/* Specification Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="divide-y divide-slate-100">

              {specs.map((item, idx) => (

                <div
                  key={idx}
                  className={`
                    grid grid-cols-1
                    px-6 py-4
                    text-sm
                    transition-colors
                    hover:bg-blue-50/40
                    sm:grid-cols-2
                    ${idx % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50/50"
                    }
                  `}
                >

                  <span className="font-semibold text-slate-700">
                    {item.label}
                  </span>


                  <span className="mt-1 font-medium text-slate-600 sm:mt-0 sm:text-right">
                    {item.value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          PRODUCT INQUIRY CTA
         =================================================== */}

      <ProductInquireCTA
        productTitle="Disposable Cystonephroscope"
        categoryName="Disposable Ureterorenoscope"
      />

    </div>
  );
};


export default Cystonephroscope;