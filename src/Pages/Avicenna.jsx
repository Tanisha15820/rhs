import React from "react";

import { motion } from "framer-motion";

import { ArrowRight, ArrowLeft } from "lucide-react";

import SEO from "../Components/SEO";

import bannerBg from "../assets/images/smartxide_banner.png";

import avicennaImg from "../assets/images/avicenna.png";

import roboflex1 from "../assets/images/Roboflex1.png";

import roboflex2 from "../assets/images/Roboflex2.png";

import roboflex3 from "../assets/images/Roboflex3.png";
import roboflex4 from "../assets/images/Roboflex4.png";

import HandpiecesAvicenna from "../Components/Avicenna/HandpiecesAvicenna";

import RoboFlex from "../Components/Avicenna/RoboFlex";

import AvicennaMachine from "../Components/Avicenna/AvicennaMachine";

import Benefits from "../Components/Avicenna/Benefits";

import ProductInquireCTA from "../Components/Common/ProductInquireCTA";



const FeatureCard = ({ number, type, title, description, image, position }) => (
  <div className={`absolute hidden xl:block w-[285px] h-[120px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}>
    <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
      <span className="text-xl font-bold text-white">{number}</span>
    </div>
    <div className="absolute left-0 top-[42px] h-[55px] w-[1px] bg-primary" />
    <div className="flex h-full items-center gap-3 px-3 py-3">
      <div className="ml-2 h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-2 border-sky-400 bg-white shadow-sm">
        <img src={image} alt={title} className="h-full w-full rounded-full object-contain" />
      </div>
      <div className="min-w-0 flex-1 pr-1">
        <span className="text-[9px] font-bold uppercase tracking-wide text-primary">{type}</span>
        <h3 className="mt-0.5 text-[12px] font-bold leading-tight text-slate-900">{title}</h3>
        <p className="mt-1 line-clamp-3 text-[11px] leading-[15px] text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const MobileFeatureCard = ({ number, type, title, description, image }) => (
  <div className="relative min-h-[110px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.14)] backdrop-blur-md">
    <div className="absolute left-0 top-0 flex h-9 w-[50px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
      <span className="text-base font-bold text-white">{number}</span>
    </div>
    <div className="flex items-center gap-3 pt-2 pl-8">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-sky-400 bg-white shadow-sm">
        <img src={image} alt={title} className="h-full w-full rounded-full object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="text-[9px] font-bold uppercase text-primary">{type}</span>
        <h3 className="mt-0.5 text-xs font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-[11px] leading-4 text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const keypoints = [
  { number: "01", type: "INTUITIVE CONTROL CONSOLE", title: "Touchscreen Operation", description: "User-friendly interface with precise robotic control of ureteroscope movements.", image: roboflex1, position: "left-8 top-20" },
  { number: "02", type: "ERGONOMIC SURGEON CHAIR", title: "Comfortable Seated Control", description: "Ergonomic chair design for stable and fatigue-free operation during procedures.", image: roboflex2, position: "bottom-16 left-8" },
  { number: "03", type: "FLEXIBLE URETEROSCOPE", title: "High-Definition Imaging", description: "Flexible scope with excellent visualization for precise stone detection and treatment.", image: roboflex3, position: "top-20 right-8" },
  { number: "04", type: "ROBOTIC ARM SYSTEM", title: "Stable & Precise Movement", description: "Robotic arm enables smooth, stable and accurate control of ureteroscope navigation.", image: roboflex4, position: "bottom-16 right-8" },
];

const Avicenna = () => {

  return (

    <div className="bg-white">

      <SEO

        title="Roboflex Avicenna"

        description="Roboflex Avicenna robotic manipulator system for flexible ureterorenoscopy and advanced stone lithotripsy."

      />

      {/* Product Banner */}

      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">

        <div className="absolute inset-0 z-0">

          <img

            src={bannerBg}

            alt="Roboflex Avicenna background"

            className="h-full w-full object-cover"

          />

        </div>



        {/* Soft Overlay */}

        <div className="absolute inset-0 z-[1] bg-white/5"></div>



        {/* Main Content */}

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          {/* Heading */}

          <div className="pt-6 text-center sm:pt-8 lg:pt-12">

            <div className="mb-3 flex items-center justify-center gap-4">

              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">

                ENT{" "}

              </span>

              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>

            </div>



            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">

              Roboflex{" "}

              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">

                Avicenna

              </span>

            </h2>



            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">

              Robotic Flexible Ureterorenoscopy

            </p>

          </div>



          {/* Product Area */}

          <div className="relative mx-auto mt-2 max-w-[1180px] sm:mt-3">

            {/* Desktop Feature Cards */}
            {keypoints.map((item) => <FeatureCard key={item.number} {...item} />)}

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

                src={avicennaImg}

                alt="Roboflex Avicenna robotic ureteroscopy system"

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

                src={avicennaImg}

                alt="Roboflex Avicenna robotic ureteroscopy system"

                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[300px]"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8, ease: "easeOut" }}

              />

            </div>



            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 sm:px-4 lg:hidden">
              {keypoints.map((item) => <MobileFeatureCard key={item.number} {...item} />)}
            </div>

          </div>

        </div>

      </section>

      <RoboFlex />

      <Benefits />

      <AvicennaMachine />

      <HandpiecesAvicenna />

      <ProductInquireCTA

        productName="Roboflex Avicenna Robotic System"

        productImage={avicennaImg}

      />

    </div>

  );

};



export default Avicenna;
