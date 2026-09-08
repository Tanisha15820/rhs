import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, Sparkles, CheckCircle2, Zap, BatteryCharging, Scissors } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import cyberBladeImg from "../assets/images/cyber_blade.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import diodeImage from "../assets/images/diode.png";
import hollowFiber from "../assets/images/hollow_fiber.png";

import CyberBladeConcept from "../Components/CyberBlade/CyberBladeConcept";
import CyberBladeFeatures from "../Components/CyberBlade/CyberBladeFeatures";
import CyberBladeAdvantages from "../Components/CyberBlade/CyberBladeAdvantages";
import CyberBladeSpecs from "../Components/CyberBlade/CyberBladeSpecs";

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

const CyberBlade = () => {
  const cyberBladeSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Quanta System Cyber BLADE™ Integrated Cordless Morcellator",
    description:
      "Integrated cordless disposable prostate morcellator for BPH and HoLEP surgery with rechargeable motor unit, no consoles, and direct vacuum coupling.",
    brand: {
      "@type": "Brand",
      name: "Quanta System",
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
        title="Cyber BLADE™ Cordless Disposable Morcellator | Quanta System | Reinforce Healthcare Services"
        description="Rent Quanta System Cyber BLADE™ cordless disposable morcellator system for BPH, HoLEP, and ThuLEP procedures. Console-free, pre-sterile packs, and razor-sharp blades."
        keywords="Cyber Blade morcellator, Quanta System Cyber Blade, cordless prostate morcellator, disposable morcellator BPH, HoLEP morcellator rental"
        canonical="/cyber-blade"
        jsonLd={cyberBladeSchema}
      />

      {/* Hero Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Cyber Blade background banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/5"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
                CORDLESS PROSTATE MORCELLATION
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
              Cyber BLADE™{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Morcellator System
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              The Integrated Cordless Disposable Morcellator.
              <br className="hidden sm:block" />
              Marking a New Era in BPH Surgery by Quanta System.
            </p>
          </div>

          {/* Product Showcase Area */}
          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              type="CORDLESS"
              title="Without Consoles"
              description="Hand-controlled operation with zero foot pedal cords or drive console clutter."
              image={articulatedArm}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              type="DISPOSABLE"
              title="Single-Use Outer Case"
              description="No reprocessing labor or maintenance costs. Dispose outer casing after case."
              image={hollowFiber}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              type="OSCILLATING"
              title="4.5mm Cutting Blade"
              description="Anti-detachment window maintains continuous tissue contact without spinning."
              image={diodeImage}
              position="bottom-32 right-6"
            />

            {/* Central Product Image - Desktop */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[550px] items-end justify-center sm:h-[420px] lg:flex lg:h-[480px]">
              <div className="absolute bottom-14 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={cyberBladeImg}
                alt="Quanta System Cyber BLADE Morcellator System"
                className="relative z-10 h-[340px] w-auto object-contain drop-shadow-[0_25px_30px_rgba(39,96,150,0.20)] lg:h-[420px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Product Image - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden sm:max-w-[350px]">
              <div className="absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={cyberBladeImg}
                alt="Quanta System Cyber BLADE Morcellator System"
                className="relative z-10 h-[220px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[260px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                type="CORDLESS"
                title="Without Consoles"
                description="Hand-controlled operation with zero foot pedal cords or drive console clutter."
                image={articulatedArm}
              />
              <MobileFeatureCard
                number="02"
                type="DISPOSABLE"
                title="Single-Use Outer Case"
                description="No reprocessing labor or maintenance costs. Dispose outer casing after case."
                image={hollowFiber}
              />
              <MobileFeatureCard
                number="03"
                type="OSCILLATING"
                title="4.5mm Cutting Blade"
                description="Anti-detachment window maintains continuous tissue contact without spinning."
                image={diodeImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modular Product Sections */}
      <CyberBladeConcept />
      <CyberBladeFeatures />
      <CyberBladeAdvantages />
      <CyberBladeSpecs />
    </div>
  );
};

export default CyberBlade;
