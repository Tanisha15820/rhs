import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import multimedImg from "../assets/images/multimed.png";
import suiteImg from "../assets/images/multimed_suite.jpg";
import therapyHeadImg from "../assets/images/multimed_therapy_head.jpg";

import MultimedMachine from "../Components/Multimed/MultimedMachine";
import MultimedAbout from "../Components/Multimed/MultimedAbout";
import MultimedTherapyHead from "../Components/Multimed/MultimedTherapyHead";
import MultimedTable from "../Components/Multimed/MultimedTable";
import MultimedSpecs from "../Components/Multimed/MultimedSpecs";

const FeatureCard = ({ number, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[300px] h-[105px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover p-0.5"
          />
        </div>

        <div className="min-w-0 flex-1 pr-2">
          <h4 className="text-[12px] font-bold text-slate-800 leading-tight">
            {title}
          </h4>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileFeatureCard = ({ number, title, description, image }) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover p-0.5"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-xs font-bold text-slate-800">{title}</h4>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Multimed = () => {
  return (
    <div className="bg-white">
      <SEO
        title="MULTIMED EM - Electro-Magnetic Shock Wave Lithotripsy System | Reinforce Healthcare Services"
        description="Explore the ELMED MULTIMED EM ESWL lithotripsy system featuring dual fluoroscopy and robotic ultrasound localization, 6-way treatment table, and outpatient stone therapy."
        keywords="MULTIMED EM, ESWL lithotripsy, electromagnetic shock wave, ELMED Multimed, Lithoarm robotic arm, urology lithotripsy rental"
      />

      {/* Hero Banner (Avicenna style) */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Multimed EM Background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                ELMED MEDICAL SYSTEMS • EXTRACORPOREAL LITHOTRIPSY
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              MULTIMED{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                EM
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Electro-Magnetic Extracorporeal Shock Wave Lithotripsy (ESWL) System.
              The complete solution to the lithotripsy world with robotic precision.
            </p>
          </div>

          {/* Product Area with Floating Feature Cards */}
          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            <FeatureCard
              number="01"
              title="4 AP/PA Treatment Angles"
              description="Supine & prone therapy from top/bottom without displacing the focal point."
              image={multimedImg}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Degassing Water Circuit"
              description="Heated 30°C–36°C with micro-bubble elimination for acoustic efficiency."
              image={therapyHeadImg}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Dual X-Ray & Ultrasound"
              description="Simultaneous localization with LITHOSCOPE U-Arm and LITHOARM robotics."
              image={suiteImg}
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="6-Way Motorized Table"
              description="Radiolucent table with Trendelenburg tilt for ESWL and endourology."
              image={multimedImg}
              position="bottom-14 right-6"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[305px] top-[105px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[105px] left-[305px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[305px] top-[105px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[105px] right-[305px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[390px] w-full max-w-[520px] items-end justify-center sm:h-[430px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-36 w-60 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={multimedImg}
                alt="Multimed EM Shockwave Lithotripsy System"
                className="relative z-10 h-[370px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.22)] lg:h-[450px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={multimedImg}
                alt="Multimed EM Shockwave Lithotripsy System"
                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title="4 AP/PA Treatment Angles"
                description="Supine & prone therapy from top/bottom without moving focus."
                image={multimedImg}
              />
              <MobileFeatureCard
                number="02"
                title="Degassing Water Circuit"
                description="Heated 30°C–36°C with micro-bubble elimination."
                image={therapyHeadImg}
              />
              <MobileFeatureCard
                number="03"
                title="Dual X-Ray & Ultrasound"
                description="Simultaneous localization with LITHOSCOPE & LITHOARM."
                image={suiteImg}
              />
              <MobileFeatureCard
                number="04"
                title="6-Way Motorized Table"
                description="Radiolucent table with Trendelenburg tilt for ESWL & endourology."
                image={multimedImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <MultimedMachine />
      <MultimedAbout />
      <MultimedTherapyHead />
      <MultimedTable />
      <MultimedSpecs />
    </div>
  );
};

export default Multimed;
