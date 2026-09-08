import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, Sparkles, CheckCircle2, Zap, Layers, Award } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import morcescopeHeroImg from "../assets/images/cyber_blade.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import diodeImage from "../assets/images/diode.png";
import hollowFiber from "../assets/images/hollow_fiber.png";

import MorcescopeWorkflow from "../Components/Morcescope/MorcescopeWorkflow";
import MorcescopeFeatures from "../Components/Morcescope/MorcescopeFeatures";
import MorcescopeClinical from "../Components/Morcescope/MorcescopeClinical";
import MorcescopeConfigurations from "../Components/Morcescope/MorcescopeConfigurations";

/* Desktop Floating Feature Card */
const FeatureCard = ({ number, type, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[290px] h-[125px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[40px] w-[54px] items-center justify-center rounded-br-[20px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[40px] h-[55px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1.5"
          />
        </div>

        <div className="min-w-0 flex-1 pr-2">
          <div className="mb-0.5 flex items-center gap-1.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
              {type}
            </span>
          </div>
          <h3 className="text-[13px] font-bold leading-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* Mobile Feature Card */
const MobileFeatureCard = ({ number, type, title, description, image }) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[9px] font-bold uppercase text-primary">
            {type}
          </span>
          <h3 className="mt-0.5 text-xs font-bold text-slate-900">{title}</h3>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Morcescope = () => {
  const morcescopeSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Slim Laser Enucleation & Morcescope System - RZ Medizintechnik",
    description:
      "22 Charr. Slim HoLEP Laser Resectoscope and Morcescope system for BPH benign prostate hyperplasia surgery by Dr. Felipe C. A. de Figueiredo.",
    brand: {
      "@type": "Brand",
      name: "RZ Medizintechnik GmbH",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "Available for hospital and surgeon rental across India.",
    },
  };

  return (
    <div className="bg-white">
      <SEO
        title="Slim Laser Enucleation System & Morcescope (HoLEP) | Reinforce Healthcare Services"
        description="Explore the RZ 22 Charr. Slim HoLEP Resectoscope and Morcescope system by Dr. Felipe Figueiredo for BPH prostate enucleation and morcellation."
        keywords="Morcescope, HoLEP resectoscope, slim laser enucleation, BPH laser surgery, prostate morcellation, RZ Medizintechnik Morcescope rental"
        canonical="/morcescope"
        jsonLd={morcescopeSchema}
      />

      {/* Hero Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Morcescope background banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/5"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
                BENIGN PROSTATE HYPERPLASIA (BPH)
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
              Slim Laser Enucleation &{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Morcescope System
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              According to Dr. Felipe C. A. de Figueiredo.
              <br className="hidden sm:block" />
              The single-sheath 22 Charr. standard for HoLEP enucleation & tissue morcellation.
            </p>
          </div>

          {/* Product Showcase Area */}
          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              type="22 CHARR."
              title="Single Sheath Concept"
              description="Perform enucleation and morcellation with the same sheath without re-dilation."
              image={articulatedArm}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              type="5MM CHANNEL"
              title="Universal Morcellator"
              description="Compatible with standard blades of Richard Wolf, Lumenis, Storz, and Dornier."
              image={hollowFiber}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              type="OPTICAL HD"
              title="Shock-Resistant Fibers"
              description="Protected optical fiber bundles guarantee maximum longevity and crisp imaging."
              image={diodeImage}
              position="bottom-32 right-6"
            />

            {/* Central Product Image - Desktop */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[550px] items-end justify-center sm:h-[420px] lg:flex lg:h-[480px]">
              <div className="absolute bottom-14 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={morcescopeHeroImg}
                alt="Slim HoLEP Laser Resectoscope and Morcescope System"
                className="relative z-10 h-[360px] w-auto object-contain drop-shadow-[0_25px_30px_rgba(39,96,150,0.20)] lg:h-[440px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Product Image - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden sm:max-w-[350px]">
              <div className="absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={morcescopeHeroImg}
                alt="Slim HoLEP Laser Resectoscope and Morcescope System"
                className="relative z-10 h-[240px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                type="22 CHARR."
                title="Single Sheath Concept"
                description="Perform enucleation and morcellation with the same sheath without re-dilation."
                image={articulatedArm}
              />
              <MobileFeatureCard
                number="02"
                type="5MM CHANNEL"
                title="Universal Morcellator"
                description="Compatible with standard blades of Richard Wolf, Lumenis, Storz, and Dornier."
                image={hollowFiber}
              />
              <MobileFeatureCard
                number="03"
                type="OPTICAL HD"
                title="Shock-Resistant Fibers"
                description="Protected optical fiber bundles guarantee maximum longevity and crisp imaging."
                image={diodeImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modular Product Sections */}
      <MorcescopeWorkflow />
      <MorcescopeFeatures />
      <MorcescopeClinical />
      <MorcescopeConfigurations />
    </div>
  );
};

export default Morcescope;
