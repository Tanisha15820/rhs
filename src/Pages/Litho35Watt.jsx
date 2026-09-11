import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Activity,
  Layers,
  Cpu,
  Zap,
} from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/litho35_machine.png";
import footswitchImg from "../assets/images/litho35_footswitch.png";
import fiberImg from "../assets/images/litho35_fiber.png";
import recognitionImg from "../assets/images/litho35_recognition.png";
// import Litho35Fragmentation from "../Components/Litho_35/Litho35Fragmentation";
// import Litho35DustingEffect from "../Components/Litho_35/Litho35DustingEffect";
import Fragmentation from "../Components/Gastro_Laser/Fragmentation";
import DustingEffect from "../Components/Gastro_Laser/DustingEffect";
import Fibers from "../Components/Gastro_Laser/Fibers";
import Fiber_Recognition from "../Components/Gastro_Laser/Fiber_Recognition";
import Litho35Excellence from "../Components/Litho_35/Litho35Excellence";
import Litho35Reliability from "../Components/Litho_35/Litho35Reliability";
// import Litho35Fibers from "../Components/Litho_35/Litho35Fibers";
// import Litho35Recognition from "../Components/Litho_35/Litho35Recognition";
import Litho35Applications from "../Components/Litho_35/Litho35Applications";
import Litho35Specs from "../Components/Litho_35/Litho35Specs";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";
import Litho35Machine from "../Components/Litho_35/Litho35Machine";

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
        {/* Circular Image */}
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1.5"
          />
        </div>

        {/* Card Content */}
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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1"
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

const Litho35Watt = () => {
  const generalOverview = [
    {
      title: "Effective Lithotripsy",
      desc: "Proven fragmentation and dusting across hard and soft urinary stones.",
    },
    {
      title: "Reduced Depth of Penetration",
      desc: "0.3–0.4 mm limited penetration protects delicate adjacent tissue.",
    },
    {
      title: "High Versatility",
      desc: "Supports lithotripsy, strictures, tumors, and soft tissue ablation.",
    },
    {
      title: "Soft Tissue Surgery",
      desc: "Excellent hemostasis, precise cutting, and rapid tissue vaporization.",
    },
    {
      title: "Compact Design",
      desc: "Small footprint on sturdy castor wheels for smooth operating room transit.",
    },
    {
      title: "Quick ROI",
      desc: "Durable components and multi-specialty versatility maximize return on investment.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Litho 35 Watt - Quanta System Holmium:YAG Laser | Reinforce Healthcare Services"
        description="Explore the Quanta System Litho 35 Watt Holmium laser system for superior stone lithotripsy and soft tissue surgery. Available for hospital and clinic rental."
        keywords="Litho 35 Watt, Holmium laser rental, Litho laser 35W, Quanta System Litho, urology laser rental, stone lithotripsy laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Litho 35 Watt Background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        {/* Main Banner Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                30W – 35W HOLMIUM:YAG FOR LITHOTRIPSY
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Litho 35{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Watt
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Litho surgical unit is based on Holmium (Ho:YAG) laser with
              emission at 2100 nm wavelength. Highly absorbed by water and
              biological tissue for superior cutting, ablation, and dusting.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Effective Lithotripsy"
              description="High absorption at 2100 nm for rapid stone ablation."
              image={machineImage}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Reduced Penetration"
              description="0.3–0.4 mm penetration prevents surrounding tissue damage."
              image={fiberImg}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Smart Recognition"
              description="RFID auto-adjustment based on connected fiber diameter."
              image={recognitionImg}
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Dual Footswitch"
              description="Hands-free Ready/Standby toggle and emission control."
              image={footswitchImg}
              position="bottom-14 right-6"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[310px] top-[105px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[105px] left-[310px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[310px] top-[105px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[105px] right-[310px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="Litho 35 Watt Laser System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] lg:h-[460px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="Litho 35 Watt Laser System"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title="Effective Lithotripsy"
                description="2100 nm wavelength highly absorbed by water & biological tissue."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                title="Reduced Penetration"
                description="0.3–0.4 mm penetration prevents collateral damage."
                image={fiberImg}
              />
              <MobileFeatureCard
                number="03"
                title="Smart Recognition"
                description="RFID auto-adjustment based on connected fiber diameter."
                image={recognitionImg}
              />
              <MobileFeatureCard
                number="04"
                title="Dual Footswitch"
                description="Hands-free Ready/Standby toggle and emission control."
                image={footswitchImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* General Overview Section (Page 2 of PDF) */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#19A8E8]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                  General Overview
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
                Precision Laser Technology for{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  Modern Surgery
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                Litho surgical unit is based on Holmium (Ho:YAG) laser with
                emission at 2100 nm wavelength. This wavelength is highly
                absorbed by water and biological tissue providing excellent
                cutting, ablation, and hemostatic properties.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                The limited radiation penetration (0.3 - 0.4 mm) results in
                minimal damage to surrounding tissue. The Litho automatically
                adjusts the emission settings based on fiber diameter and
                selected mode.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {generalOverview.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#19A8E8] mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:col-span-6">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#EBF5FE] to-[#F7FAFC] p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Holmium 2100 nm
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    30W / 35W System
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        <Zap size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          High Water Absorption
                        </div>
                        <div className="text-xs text-slate-500">
                          Rapid vaporization and instantaneous tissue ablation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Safety Margin (0.3 - 0.4 mm)
                        </div>
                        <div className="text-xs text-slate-500">
                          Strictly localized thermal effect sparing deeper
                          structures
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Smart Emission Controller
                        </div>
                        <div className="text-xs text-slate-500">
                          Calibrated feedback preventing optical fiber
                          overstress
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Sections */}
      <Fragmentation />
      <DustingEffect />
      <Litho35Machine />
      <Fibers />
      <Fiber_Recognition />
      {/* <Litho35Fragmentation />
      <Litho35DustingEffect /> */}
      <Litho35Excellence />
      <Litho35Reliability />
      {/* <Litho35Fibers />
      <Litho35Recognition /> */}
      <Litho35Applications />
      <Litho35Specs />
      <ProductInquireCTA productName="Litho 35 Watt Laser System" />
    </div>
  );
};

export default Litho35Watt;
