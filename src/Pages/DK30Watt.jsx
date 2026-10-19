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
  Sliders,
  SlidersHorizontal,
  Gauge,
  Globe,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Target,
  HeartPulse,
  Stethoscope,
  Bone,
} from "lucide-react";

import SEO from "../Components/SEO";

import DK30Machine from "../Components/DK30Watt/DK30Machine";

import bannerBg from "../assets/images/smartxide_banner.png";

import machineImage from "../assets/images/dk30.png";

import dk301 from "../assets/images/dk301.png";

import dk302 from "../assets/images/dk302.png";

import dk303 from "../assets/images/dk303.png";

import dk304 from "../assets/images/dk304.png";

import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

import Fragmentation from "../Components/Gastro_Laser/Fragmentation";

import DustingEffect from "../Components/Gastro_Laser/DustingEffect";

import Fibers from "../Components/Gastro_Laser/Fibers";

import Fiber_Recognition from "../Components/Gastro_Laser/Fiber_Recognition";



// Shared FeatureCard component from reference pages

const FeatureCard = ({ number, title, description, image, position }) => {

  return (

    <div

      className={`absolute hidden xl:block w-[300px] min-h-[118px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}

    >

      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">

        <span className="text-lg font-bold text-white">{number}</span>

      </div>

      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>

      <div className="flex min-h-[118px] items-center gap-3 px-3 py-2 pl-4">

        <div className="relative ml-8 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">

          <img

            src={image}

            alt={title}

            className="h-full w-full object-contain p-0.5 rounded-full"

          />

        </div>

        <div className="min-w-0 flex-1 pr-2">

          <h4 className="text-[12px] font-bold text-slate-800 leading-tight">

            {title}

          </h4>

          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-4">

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

            className="h-full w-full object-contain p-0.5 rounded-full"

          />

        </div>

        <div className="min-w-0 flex-1">

          <h4 className="text-xs font-bold text-slate-800">{title}</h4>

          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-4">

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



          <div className="relative mx-auto mt-4 max-w-[1240px] sm:mt-6">

            <FeatureCard

              number="01"


              title="Smart Fiber Recognition System"

              description="RFID-based fiber recognition identifies compatible fiber type and helps select laser parameters."

              image={dk303}
              position="left-2 xl:left-4 top-12 xl:top-14"



            />

            <FeatureCard

              number="02"

              title="Laser Fiber Connector Port"

              description="Front fiber connection port for attaching the laser fiber during lithotripsy procedures."

              image={dk302}

              position="bottom-12 xl:bottom-14 left-2 xl:left-4"

            />

            <FeatureCard

              number="03"

              title="Touchscreen Control Panel"

              description="Touchscreen interface for laser energy, frequency, system settings and status monitoring."

              image={dk301}

              position="right-2 xl:right-4 top-12 xl:top-14" s

            />

            <FeatureCard

              number="04"

              title="Emergency Stop / Control Button"

              description="Front-panel safety button for quickly stopping operation during a procedure."

              image={dk304}

              position="bottom-12 xl:bottom-14 right-2 xl:right-4"

            />



            {/* Desktop Arrows */}

            <div className="absolute left-[308px] xl:left-[316px] top-[108px] hidden items-center xl:flex">

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

              <div className="h-[1px] w-[24px] bg-primary"></div>

              <ArrowRight className="h-5 w-5 text-primary" strokeWidth={1.5} />

            </div>



            <div className="absolute bottom-[108px] left-[308px] xl:left-[316px] hidden items-center xl:flex">

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

              <div className="h-[1px] w-[24px] bg-primary"></div>

              <ArrowRight className="h-5 w-5 text-primary" strokeWidth={1.5} />

            </div>



            <div className="absolute right-[308px] xl:right-[316px] top-[108px] hidden items-center xl:flex">

              <ArrowLeft className="h-5 w-5 text-primary" strokeWidth={1.5} />

              <div className="h-[1px] w-[24px] bg-primary"></div>

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

            </div>



            <div className="absolute bottom-[108px] right-[308px] xl:right-[316px] hidden items-center xl:flex">

              <ArrowLeft className="h-5 w-5 text-primary" strokeWidth={1.5} />

              <div className="h-[1px] w-[24px] bg-primary"></div>

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

            </div>



            {/* Central Machine - Desktop */}

            <div className="relative mx-auto hidden h-[340px] xl:h-[370px] w-full max-w-[380px] items-center justify-center xl:flex">

              <div className="absolute bottom-8 left-1/2 h-28 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>

              <motion.img

                src={machineImage}

                alt="Litho DK30 Laser System"

                className="relative z-10 max-h-[230px] xl:max-h-[260px] w-auto max-w-[340px] xl:max-w-[370px] object-contain drop-shadow-[0_20px_30px_rgba(25,168,232,0.22)] rounded-xl"

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8, ease: "easeOut" }}

              />

            </div>



            {/* Central Machine - Mobile */}

            <div className="relative mx-auto flex h-auto w-full max-w-[280px] sm:max-w-[320px] items-center justify-center my-4 sm:my-6 xl:hidden">

              <div className="absolute bottom-4 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>

              <motion.img

                src={machineImage}

                alt="Litho DK30 Laser System"

                className="relative z-10 max-h-[170px] sm:max-h-[200px] w-auto max-w-full object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8, ease: "easeOut" }}

              />

            </div>



            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">

              <MobileFeatureCard

                number="01"

                title="Touchscreen Control Panel"

                description="Touchscreen interface for laser energy, frequency, system settings and status monitoring."

                image={dk301}

              />

              <MobileFeatureCard

                number="02"

                title="Laser Fiber Connector Port"

                description="Front fiber connection port for attaching the laser fiber during lithotripsy procedures."

                image={dk302}

              />

              <MobileFeatureCard

                number="03"

                title="Smart Fiber Recognition System"

                description="RFID-based fiber recognition identifies compatible fiber type and helps select laser parameters."

                image={dk303}

              />

              <MobileFeatureCard

                number="04"

                title="Emergency Stop / Control Button"

                description="Front-panel safety button for quickly stopping operation during a procedure."

                image={dk304}

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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6FAFE] via-white to-[#F0F6FC] py-20 md:py-28 border-y border-slate-100">
        {/* Subtle ambient lighting */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary-dark/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
              <Sliders className="h-3.5 w-3.5" />
              <span>Parametric Precision & Versatility</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Settings{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Matter
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary-dark" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Fine-tune pulse energy, frequency, and pulse width to match precise clinical demands — from rapid hard stone fragmentation to ultra-smooth dusting and controlled soft tissue incision.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1: High Power */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Soft Tissue
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                    HIGH POWER
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs font-semibold text-slate-400">Up to</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary-dark transition-colors">
                      30 W
                    </span>
                  </div>
                </div>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  High average output delivers rapid, controlled tissue incision, ablation, and soft-tissue vaporization with minimal thermal spread.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Fast Tissue Cutting</span>
              </div>
            </div>

            {/* Card 2: High Pulse Energy */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Lithotripsy
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                    HIGH PULSE ENERGY
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs font-semibold text-slate-400">Up to</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary-dark transition-colors">
                      4.0 J
                    </span>
                  </div>
                </div>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  Exceptional peak shockwave energy engineered to pulverize and break down even the hardest stones (calcium oxalate monohydrate, cystine).
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Hard Stone Busting</span>
              </div>
            </div>

            {/* Card 3: High Frequency */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Activity className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Dusting Rate
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                    HIGH FREQUENCY
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs font-semibold text-slate-400">Up to</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary-dark transition-colors">
                      25 Hz
                    </span>
                  </div>
                </div>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  Fast pulse repetition rates facilitate rapid low-energy stone dusting and smooth superficial tissue ablation with continuous visual clarity.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Fine Dusting Mode</span>
              </div>
            </div>

            {/* Card 4: Large Pulse Width Range */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Anti-Retropulsion
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                    LARGE PULSE WIDTH
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xs font-semibold text-slate-400">Up to</span>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary-dark transition-colors">
                      1500 μs
                    </span>
                  </div>
                </div>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  Extended pulse duration minimizes stone retropulsion and fiber burn-back, eliminating stone pushback during delicate ureteroscopic procedures.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Zero Stone Chasing</span>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Spec Pills */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 rounded-full border border-slate-200/80 bg-white px-6 py-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark text-sm font-bold text-white shadow-xs">
                4
              </span>
              <div>
                <span className="text-xs font-bold text-slate-800 sm:text-sm">Emission Modes</span>
                <p className="text-[10px] text-slate-400">Short, Long, Dusting & Custom</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-full border border-slate-200/80 bg-white px-6 py-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark text-sm font-bold text-white shadow-xs">
                6
              </span>
              <div>
                <span className="text-xs font-bold text-slate-800 sm:text-sm">Fiber Diameters</span>
                <p className="text-[10px] text-slate-400">200 μm up to 1000 μm core</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-full border border-slate-200/80 bg-white px-6 py-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark text-sm font-bold text-white shadow-xs">
                4
              </span>
              <div>
                <span className="text-xs font-bold text-slate-800 sm:text-sm">Fiber Types</span>
                <p className="text-[10px] text-slate-400">Standard, Ball Tip, Special & Reusable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Ambient background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/5 via-blue-50/40 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Proven Track Record & Uptime</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Worldwide{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Reliability
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary-dark" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Deployed across premier hospitals globally with certified clinical training and thousands of successful operative hours.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Stat 1 */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-white text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <Globe className="h-7 w-7" />
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  1000+
                </div>
                <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark" />
                <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                  Installations Worldwide
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Active surgical laser consoles in public and private medical institutions.
                </p>
              </div>

              <div className="mt-5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Global Clinical Presence
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-white text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <MapPin className="h-7 w-7" />
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  25+
                </div>
                <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark" />
                <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                  Countries Deployed
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Certified international compliance across Europe, Asia, and the Americas.
                </p>
              </div>

              <div className="mt-5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                CE & ISO Certified
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-white text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <GraduationCap className="h-7 w-7" />
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  200+
                </div>
                <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark" />
                <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                  Trained Surgeons
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Surgeons and urologists accredited at dedicated surgical training centers.
                </p>
              </div>

              <div className="mt-5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Hands-On OT Training
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-white text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <SlidersHorizontal className="h-7 w-7" />
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  150+
                </div>
                <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark" />
                <h3 className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                  Setting Combinations
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Granular combinations of energy, frequency, and pulse width for every surgical scenario.
                </p>
              </div>

              <div className="mt-5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                Multi-Parametric Control
              </div>
            </div>
          </div>
        </div>
      </section>



      <Fibers />

      <Fiber_Recognition />



      {/* Applications Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6FAFE] via-white to-[#F0F6FC] py-20 md:py-28 border-y border-slate-100">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-primary-dark/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
              <Activity className="h-3.5 w-3.5" />
              <span>Multi-Specialty Surgical Platform</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Clinical{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Applications
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary-dark" />

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The Litho DK30 delivers targeted holmium laser energy across multiple surgical specialties — performing incision, excision, resection, ablation, vaporization, coagulation, and hemostasis of soft tissue alongside high-efficiency lithotripsy.
            </p>

            {/* Surgical Capabilities Pill Strip */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {[
                "Incision",
                "Excision",
                "Resection",
                "Ablation",
                "Vaporization",
                "Coagulation",
                "Hemostasis",
                "Lithotripsy",
              ].map((action) => (
                <span
                  key={action}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
                  {action}
                </span>
              ))}
            </div>
          </div>

          {/* Specialty Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-12">
            {/* Urology - Featured Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-white via-blue-50/25 to-white p-7 shadow-[0_8px_30px_rgba(25,168,232,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_22px_50px_rgba(25,168,232,0.2)] md:col-span-2 lg:col-span-1">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-primary-dark" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/30">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    Primary Indication
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  Urology & Endourology
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Comprehensive lithotripsy & soft-tissue endourological management.
                </p>

                <div className="my-4 h-px w-full bg-primary/20" />

                <ul className="space-y-2.5">
                  {[
                    "Lithotripsy of renal, ureteral & bladder stones",
                    "Bladder and ureteral tumor ablation & resection",
                    "Urethral & ureteral stricture incision",
                    "Bladder Neck Incision (BNI) & Condylomas",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">Flexible & Rigid Scope Ready</span>
                <span>Dusting / Fragmentation</span>
              </div>
            </div>

            {/* Gastroenterology */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Endoscopic
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  Gastroenterology
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Targeted biliary fragmentation & luminal hemostasis.
                </p>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <ul className="space-y-2.5">
                  {[
                    "Biliary and gallstone fragmentation via cholangioscopy",
                    "Endoscopic hemostasis of bleeding lesions",
                    "Benign & malignant biliary stricture recanalization",
                    "Polyps & mucosal lesion coagulation",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">Ultra-Fine Delivery Fibers</span>
                <span>Minimal Collateral Thermal Spread</span>
              </div>
            </div>

            {/* General Surgery */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Soft Tissue
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  General Surgery
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Sub-millimeter margin dissection & vascular sealing.
                </p>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <ul className="space-y-2.5">
                  {[
                    "Contact incision and excision of soft tissues",
                    "Hemostasis and selective vascular coagulation",
                    "Cyst, tumor and mucosal lesion debridement",
                    "Open and laparoscopic laser interventions",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">Dry Surgical Field</span>
                <span>Reduced Post-Op Pain</span>
              </div>
            </div>

            {/* ENT */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Otolaryngology
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  ENT / Head & Neck
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Micro-precision airway & vocal cord interventions.
                </p>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <ul className="space-y-2.5">
                  {[
                    "Vocal cord nodules, polyps & granuloma excision",
                    "Recurrent respiratory papillomatosis vaporization",
                    "Turbinate reduction & subglottic stenosis treatment",
                    "Partial tonsillectomy and hemostatic sealing",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">Micro-Spot Accuracy</span>
                <span>Preserves Vocal Integrity</span>
              </div>
            </div>

            {/* Arthroscopy */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Bone className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Orthopedics
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  Arthroscopy
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Cartilage contouring & synovial joint debridement.
                </p>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <ul className="space-y-2.5">
                  {[
                    "Meniscectomy & precision meniscal edge contouring",
                    "Synovectomy and inflammatory plica excision",
                    "Chondroplasty smoothing without mechanical microfracture",
                    "Ablation of torn joint capsules & ligaments",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">No Mechanical Scuffing</span>
                <span>Smooth Chondral Surfaces</span>
              </div>
            </div>

            {/* Discectomy */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(25,168,232,0.14)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    Spine Surgery
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-primary-dark transition-colors">
                  Spine & Discectomy
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Minimally invasive percutaneous decompression.
                </p>

                <div className="my-4 h-px w-full bg-slate-100 transition-colors group-hover:bg-primary/15" />

                <ul className="space-y-2.5">
                  {[
                    "Percutaneous Laser Disc Decompression (PLDD)",
                    "Herniated nucleus pulposus volume reduction",
                    "Annuloplasty & nociceptive fiber denervation",
                    "Cervical and lumbar disc decompression under fluoroscopy",
                  ].map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-primary">Outpatient PLDD Ready</span>
                <span>Day-Care Procedure</span>
              </div>
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
