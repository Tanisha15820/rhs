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
import DK30Machine from "../Components/DK30Watt/DK30Machine";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/dk30.png";
import footswitchImg from "../assets/images/litho35_footswitch.png";
import fiberImg from "../assets/images/litho35_fiber.png";
import recognitionImg from "../assets/images/litho35_recognition.png";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";
import Fragmentation from "../Components/Gastro_Laser/Fragmentation";
import DustingEffect from "../Components/Gastro_Laser/DustingEffect";
import Fibers from "../Components/Gastro_Laser/Fibers";
import Fiber_Recognition from "../Components/Gastro_Laser/Fiber_Recognition";

// Shared FeatureCard component from reference pages
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
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1.5 rounded-full"
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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1 rounded-full"
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

const DK30Watt = () => {
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
      desc: "Small desktop footprint for easy integration into the operating room.",
    },
    {
      title: "Quick ROI",
      desc: "Durable components and multi-specialty versatility maximize return on investment.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Litho DK30 - Quanta System Holmium:YAG Laser"
        description="Explore the Quanta System Litho DK30 Holmium laser system for superior stone lithotripsy and soft tissue surgery. Available for hospital and clinic rental."
        keywords="Litho DK30, Holmium laser rental, Litho laser 30W, Quanta System Litho, urology laser rental, stone lithotripsy laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Litho DK30 Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                30W HOLMIUM:YAG FOR LITHOTRIPSY
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Litho{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                DK30
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Litho DK30 surgical unit is a desktop device based on Holmium (Ho:YAG) laser with emission at 2100 nm wavelength. Highly absorbed by water and biological tissue providing excellent cutting, ablation and hemostatic properties.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1080px] sm:mt-6">
            <FeatureCard
              number="01"
              title="Effective Lithotripsy"
              description="High absorption at 2100 nm for rapid stone ablation."
              image={machineImage}
              position="left-4 top-16"
            />
            <FeatureCard
              number="02"
              title="Reduced Penetration"
              description="0.3–0.4 mm penetration prevents surrounding tissue damage."
              image={fiberImg}
              position="bottom-16 left-4"
            />
            <FeatureCard
              number="03"
              title="Smart Recognition"
              description="RFID auto-adjustment based on connected fiber diameter."
              image={recognitionImg}
              position="right-4 top-16"
            />
            <FeatureCard
              number="04"
              title="Proximity Sensor"
              description="Proximity sensor for automatic aperture control."
              image={footswitchImg}
              position="bottom-16 right-4"
            />

            <div className="absolute left-[315px] top-[116px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[116px] left-[315px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[315px] top-[116px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[116px] right-[315px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] xl:flex xl:h-[470px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="Litho DK30 Laser System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] xl:h-[470px] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 xl:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="Litho DK30 Laser System"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
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
                title="Proximity Sensor"
                description="Proximity sensor for automatic aperture control."
                image={footswitchImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* General Overview Section */}
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
                Litho DK30 surgical unit is based on Holmium (Ho:YAG) laser with
                emission at 2100 nm wavelength. This wavelength is highly
                absorbed by water and biological tissue providing excellent
                cutting, ablation, and hemostatic properties.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                The limited radiation penetration (0.3 - 0.4 mm) results in
                minimal damage to surrounding tissue. The Litho DK30 automatically
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
                    30W System
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
                          Strictly localized thermal effect sparing deeper structures
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
                          Compact Desktop Design
                        </div>
                        <div className="text-xs text-slate-500">
                          Portable and powerful unit suitable for diverse environments
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

      {/* Shared Components from PDF */}
      <Fragmentation />
      <DustingEffect />

      {/* Settings Matter */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Settings Matter</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-lg font-bold text-slate-900">HIGH POWER</h3>
              <p className="text-primary font-bold my-2">Up to 30 W</p>
              <p className="text-sm text-slate-500">for fast tissue incision</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-lg font-bold text-slate-900">HIGH PULSE ENERGY</h3>
              <p className="text-primary font-bold my-2">Up to 4 J</p>
              <p className="text-sm text-slate-500">for the fragmentation of the hardest stones</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-lg font-bold text-slate-900">HIGH FREQUENCY</h3>
              <p className="text-primary font-bold my-2">Up to 25 Hz</p>
              <p className="text-sm text-slate-500">for fast low energy ablation</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-lg font-bold text-slate-900">LARGE PULSE WIDTH RANGE</h3>
              <p className="text-primary font-bold my-2">Up to 1500 μs</p>
              <p className="text-sm text-slate-500">for superior Dusting lithotripsy</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">4</span>
              <span className="text-slate-600 font-medium">Emission Modes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">6</span>
              <span className="text-slate-600 font-medium">Fiber Diameters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">4</span>
              <span className="text-slate-600 font-medium">Fiber Types</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Reliability</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-primary mb-4">
                1000+
              </div>
              <p className="text-center text-sm font-bold text-slate-700 uppercase">INSTALLATIONS WORLDWIDE</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-primary mb-4">
                25+
              </div>
              <p className="text-center text-sm font-bold text-slate-700 uppercase">COUNTRIES WHERE INSTALLED</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-primary mb-4">
                200+
              </div>
              <p className="text-center text-sm font-bold text-slate-700 uppercase">DOCTORS TRAINED AT OUR REFERENCE CENTERS</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-primary mb-4">
                150+
              </div>
              <p className="text-center text-sm font-bold text-slate-700 uppercase">AVAILABLE COMBINATIONS OF ENERGY, FREQUENCY AND PULSE WIDTH</p>
            </div>
          </div>
        </div>
      </section>

      <Fibers />
      <Fiber_Recognition />

      {/* Applications Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Applications</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Litho DK30 can be used to perform incision, excision, resection, ablation, vaporization, coagulation and hemostasis of soft tissue and in lithotripsy of stones in various medical specialties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">ENT</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">GASTROENTEROLOGY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">GENERAL SURGERY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">ARTHROSCOPY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">DISCECTOMY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex flex-col items-center justify-center font-bold text-slate-800">
              UROLOGY
              <span className="text-xs text-slate-500 font-normal mt-1">LITHOTRIPSY, TUMORS, STRICTURES, BNI</span>
            </div>
          </div>
        </div>
      </section>

      <DK30Machine />

      {/* Technical Specifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-slate-200 pb-5">
            <h2 className="text-3xl font-extrabold text-slate-900">Technical Specifications</h2>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Wavelength</div>
              <div className="text-slate-600">2,1 μm</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Average power</div>
              <div className="text-slate-600">Up to 30 W</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Repetition rate</div>
              <div className="text-slate-600">3 ÷ 25 Hz</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Energy per pulse</div>
              <div className="text-slate-600">0,2 ÷ 4 J</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Pulse duration</div>
              <div className="text-slate-600">95 ÷ 1500 μs</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Beam delivery</div>
              <div className="text-slate-600">Wide range of flexible silica fibers</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Aiming beam</div>
              <div className="text-slate-600">532 nm (adjustable &lt;5 mW) - Class 3R</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Fiber recognition</div>
              <div className="text-slate-600">RFID System</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Electrical requirements</div>
              <div className="text-slate-600">100-120 Vac; 50/60 Hz; 16 A - 200-230 Vac; 50/60 Hz; 10 A</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Cooling</div>
              <div className="text-slate-600">Closed water air cooling circuit</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Operating temperature</div>
              <div className="text-slate-600">10° C - 30° C</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Humidity</div>
              <div className="text-slate-600">30% - 85% (no condensing)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Dimensions and weight</div>
              <div className="text-slate-600">49.5 cm (W) x 63.6 cm (D) x 38.3 cm (H) - 40 kg</div>
            </div>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="Litho DK30 Laser System" productImage={machineImage} />
    </div>
  );
};

export default DK30Watt;
