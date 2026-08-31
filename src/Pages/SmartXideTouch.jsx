import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/SmartXideTouchSurgiCO.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import diodeImage from "../assets/images/diode.png";
import hollowFiber from "../assets/images/hollow_fiber.png";
import Technologies from "../Components/SmartXide/Technologies";
import Features from "../Components/SmartXide/Features";
import Handpieces from "../Components/SmartXide/Handpieces";
import Advantages from "../Components/SmartXide/Advantages";
import Clinical from "../Components/SmartXide/Clinical";
import Professionals from "../Components/SmartXide/Professionals";
import TechnologiesSurgico from "../Components/SmartXideTouch/TechnologiesSurgico";
import ProctoScan from "../Components/SmartXideTouch/ProctoScan";
import ColpoScan from "../Components/SmartXideTouch/ColpoScan";

const FeatureCard = ({ number, type, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[285px] h-[140px] rounded-[22px] border border-white bg-white/90 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      {/* Blue Number Tab */}
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>

      {/* Blue Border Accent */}
      <div className="absolute left-0 top-[42px] h-[76px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-3">
        {/* Circular Image */}
        <div className="relative ml-2 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_20px_rgba(40,116,189,0.16)]">
          <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-blue-100 bg-white/70">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain p-2"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="min-w-0 flex-1 pr-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
              {type}
            </span>
          </div>
          <h3 className="text-[15px] font-bold leading-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-1 text-[11px] leading-[17px] text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

/* Mobile Feature Card */
const MobileFeatureCard = ({ number, type, title, description, image }) => {
  return (
    <div className="relative min-h-[110px] overflow-hidden rounded-2xl border border-white bg-white/90 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.14)] backdrop-blur-md">
      {/* Number */}
      <div className="absolute left-0 top-0 flex h-9 w-[50px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-base font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1">
        {/* Image */}
        <div className="ml-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 shadow-sm">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1.5"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase text-primary">
            {type}
          </span>
          <h3 className="mt-0.5 text-sm font-bold text-slate-900">{title}</h3>
          <p className="mt-0.5 text-xs leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2.5 right-3 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

const SmartXideTouch = () => {
  return (
    <div className="bg-white">
      <SEO
        title="SmartXide2 Unique TRIO - CO2 & Diode Laser System"
        description="The accuracy of scanner-assisted CO2 laser and the flexibility of CO2 and diode laser. Advanced ENT laser technology by Reinforce Healthcare Services."
        keywords="SmartXide2 Trio, CO2 laser, diode laser, ENT laser, surgical laser system"
        canonical="/smartxide"
      />

      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="SmartXide background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/5"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
                ENT LASER{" "}
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
              SmartXide Touch{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                SurgiCO
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              The Precision and Safety of the C02 Laser
              <br className="hidden sm:block" />
              with Scanner Assistance
            </p>
          </div>

          {/* Product Area */}
          <div className="relative mx-auto mt-2 max-w-[1200px] sm:mt-3">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              type="CO₂ LASER"
              title="Articulated Arm"
              description="Precision targeting with maximum flexibility."
              image={articulatedArm}
              position="left-8 top-20"
            />
            <FeatureCard
              number="02"
              type="PULSE TECHNOLOGY"
              title="Advanced Ablation Control"
              description="Optimized pulse delivery for precise tissue interaction and controlled penetration depth."
              image={hollowFiber}
              position="bottom-16 left-8"
            />
            <FeatureCard
              number="03"
              type="SCANNER TECHNOLOGY"
              title="Scanner-Assisted Surgery"
              description="Advanced scanning systems for precise, reproducible and versatile surgical applications."
              image={diodeImage}
              position="bottom-40 right-8"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[305px] top-[125px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-[120px] left-[305px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-[210px] right-[305px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[550px] items-end justify-center sm:h-[420px] lg:flex lg:h-[500px]">
              <div className="absolute bottom-14 left-1/2 h-36 w-60 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="SmartXide2 Unique TRIO laser system"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(39,96,150,0.18)] lg:h-[500px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden sm:max-w-[350px]">
              <div className="absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="SmartXide2 Unique TRIO laser system"
                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                type="CO₂ LASER"
                title="Articulated Arm"
                description="Precision targeting with maximum flexibility."
                image={articulatedArm}
              />
              <MobileFeatureCard
                number="02"
                type="CO₂ LASER"
                title="Hollow Fiber"
                description="Advanced delivery with hollow fiber technology."
                image={hollowFiber}
              />
              <MobileFeatureCard
                number="03"
                type="DIODE LASER"
                title="Module (Fibre)"
                description="Versatile treatment with diode laser module."
                image={diodeImage}
              />
            </div>
          </div>
        </div>
      </section>
      <TechnologiesSurgico />
      <Features />
      <ProctoScan />
      <ColpoScan />
      <Handpieces />
      <Advantages />
      <Clinical />
      <Professionals />
    </div>
  );
};

export default SmartXideTouch;
