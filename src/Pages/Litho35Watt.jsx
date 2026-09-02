import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/Litho_evo.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import diodeImage from "../assets/images/diode.png";
import hollowFiber from "../assets/images/hollow_fiber.png";
import Fragmentation from "../Components/Gastro_Laser/Fragmentation";
import DustingEffect from "../Components/Gastro_Laser/DustingEffect";

const FeatureCard = ({ number, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[285px] h-[100px] rounded-[22px] border border-white bg-white/90 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      {/* Blue Number Tab */}
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>

      {/* Blue Border Accent */}
      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-3">
        {/* Circular Image */}
        <div className="relative ml-2 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_20px_rgba(40,116,189,0.16)]">
          <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-blue-100 bg-white/70">
            <img
              src={image}
              alt="litho"
              className="h-full w-full object-contain p-2"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="min-w-0 flex-1 pr-2">
          <p className="mt-1 text-[11px] leading-[17px] text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* Mobile Feature Card */
const MobileFeatureCard = ({ number, description, image }) => {
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
            alt="litho image"
            className="h-full w-full object-contain p-1.5"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="mt-0.5 text-xs leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Litho35Watt = () => {
  return (
    <div className="bg-white">
      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Litho 35 Watt background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Soft Overlay */}
        <div className="absolute inset-0 z-[1] bg-white/5"></div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            {/* Small Heading */}
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
                GASTRO LASER{" "}
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
              Litho 35{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Watt
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              Powerful 35 W lithotripsy performance for precise stone
              fragmentation
              <br className="hidden sm:block" />
              with controlled energy delivery and efficient clinical workflow.
            </p>
          </div>

          {/* Product Area */}
          <div className="relative mx-auto mt-2 max-w-[1200px] sm:mt-3">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              description="Effective Lithotripsy"
              image={articulatedArm}
              position="left-8 top-20"
            />
            <FeatureCard
              number="02"
              description="Vapor TunnelTM Technology."
              image={hollowFiber}
              position="bottom-16 left-8"
            />
            <FeatureCard
              number="03"
              description="High Power and Frequency also with Small Fibers"
              image={diodeImage}
              position="bottom-80 right-8"
            />
            <FeatureCard
              number="04"
              description="Versatile treatment with diode laser module."
              image={diodeImage}
              position="bottom-20 right-8"
            />

            {/* Desktop Arrows */}
            {/* <div className="absolute left-[305px] top-[125px] hidden items-center xl:flex">
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
            <div className="absolute bottom-[210px] right-[305px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div> */}

            {/* Desktop Arrows */}

            {/* LEFT TOP */}
            <div className="absolute left-[305px] top-[125px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            {/* LEFT BOTTOM */}
            <div className="absolute bottom-[110px] left-[305px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            {/* RIGHT TOP */}
            <div className="absolute right-[305px] top-[125px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* RIGHT BOTTOM */}
            <div className="absolute bottom-[110px] right-[305px] hidden items-center xl:flex">
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
      <Fragmentation />
      <DustingEffect />
    </div>
  );
};

export default Litho35Watt;
