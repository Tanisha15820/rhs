import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CheckCircle,
  Monitor,
  Activity,
  Layers,
  Cpu,
  Wifi,
  Sliders,
  ShieldCheck,
  Zap,
  Radio,
  FileCheck,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import uromicHero from "../assets/images/uromic_hero_1789984346425.jpg";
import pullerImg from "../assets/images/mmt_profilometry_puller.jpg";
import pumpImg from "../assets/images/mmt_cystometry_pump.jpg";
import emgImg from "../assets/images/mmt_emg_sensor.jpg";
import uroflowImg from "../assets/images/danflow_wave_machine.jpg";
import scannerImg from "../assets/images/bladder_scanner_1789984360514.jpg";
import commodeImg from "../assets/images/danflow_stands_commode.jpg";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

const FeatureCard = ({ number, title, description, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[300px] h-[105px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>
      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="min-w-0 flex-1 pl-16 pr-2">
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

const MobileFeatureCard = ({ number, title, description }) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        <div className="min-w-0 flex-1 pl-6">
          <h4 className="text-xs font-bold text-slate-800">{title}</h4>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Symphony = () => {
  const generalOverview = [
    {
      title: "Up to 16 Measuring Channels",
      desc: "Accommodates high complexity cystometry, urethral pressure profiles, and multi-channel pelvic research.",
    },
    {
      title: "Motorized Height Adjustment",
      desc: "Smooth electric cart height elevation accommodating seated or standing clinician operating ergonomics.",
    },
    {
      title: "Dual Touchscreen Flexibility",
      desc: "Configurable dual touch displays (side-by-side or stacked) for simultaneous videourodynamics & curve review.",
    },
    {
      title: "Synchronized Video Diagnostic",
      desc: "Direct HDMI and SDI inputs for synchronized fluoroscopic X-ray and ultrasound video examination loops.",
    },
    {
      title: "Wireless Patient Unit Link",
      desc: "Connects with wireless UROMIC Harmony or DanFlow modules at 868/915 MHz for totally cord-free patient areas.",
    },
    {
      title: "Braked Medical Wheels",
      desc: "Heavy-duty locking castor wheels provide rock-solid stability during delicate clinical procedures.",
    },
  ];

  const monitorConfigs = [
    {
      title: "Dual Touchscreen (Side by Side)",
      desc: "Mounted side-by-side to visually maximize real-time graphs and live video simultaneously.",
    },
    {
      title: "Dual Touchscreen (Top & Bottom)",
      desc: "Mounted vertically in high-efficiency hospital footprint, perfect for compact suites.",
    },
    {
      title: "Single Touchscreen Station",
      desc: "Clean, streamlined single touch panel delivering comprehensive UDMvision controls.",
    },
    {
      title: "Touchscreen + Medical Keyboard",
      desc: "Touchscreen monitor paired with wireless medical-grade wipeable keyboard and mouse.",
    },
  ];

  const softwareFeatures = [
    "Easy to install and intuitive interface",
    "Videourodynamics with digital video frame capture",
    "Predefined protocols conforming to ICS standards",
    "PVR value automatically saved into test reports",
    "Multiple standardized nomograms (Siroky, Liverpool)",
    "Configurable examination methods and test reports",
    "Wireless connection with hospital network (DICOM & HL7)",
    "Voice and handheld remote control options",
    "Anorectal Manometry & biofeedback training",
    "Online remote technical diagnostics and support",
    "Post-processing editing tools for clinical artifact correction",
    "High-resolution report generation and PACS archiving",
  ];

  const accessories = [
    {
      title: "Wireless DanFlow Uroflowmeter",
      desc: "Waterproof flow meter with 868/915 MHz wireless link, lithium battery, and commode-fitting height adjustable stands.",
      image: uroflowImg,
      badge: "Wireless Flow",
    },
    {
      title: "3D Bladder Scanner",
      desc: "Real-time ultrasonic PVR measurement device that automatically transfers bladder volume values into test reports.",
      image: scannerImg,
      badge: "Real-time PVR",
    },
    {
      title: "Precision Cystometry Pump",
      desc: "MMT peristaltic infusion pump and digital weight sensor ensuring micron-accurate bladder filling volumes.",
      image: pumpImg,
      badge: "Infusion Control",
    },
    {
      title: "Magnetic Profilometry Puller",
      desc: "Automated magnetic catheter puller with customizable withdrawal speed and resterilizable catheter guide.",
      image: pullerImg,
      badge: "UPP Studies",
    },
    {
      title: "Smooth EMG Preamplifier",
      desc: "High-grade biofeedback preamplifier delivering crisp, low-noise pelvic floor electromyography curves.",
      image: emgImg,
      badge: "EMG Assessment",
    },
    {
      title: "Urodynamics Commode Chair",
      desc: "Ergonomic chair designed for effortless slide-in flow meter placement and seated videourodynamics.",
      image: commodeImg,
      badge: "Ergonomics",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="UROMIC Symphony - Flagship Urodynamic Workstation | Reinforce Healthcare Services"
        description="MMT UROMIC Symphony is an advanced level urodynamic device providing best-in-class specifications. Available with up to 16 channels, motorized height, dual touchscreens, and videourodynamics."
        keywords="UROMIC Symphony, MMT Urodynamics, Urodynamic device, Uroflowmetry, Cystometry, Videourodynamics, Reinforce Healthcare"
        canonical="/symphony"
      />

      {/* 1st Section: Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="UROMIC Symphony Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        {/* Main Banner Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                GET INTO THE FLOW WITH MMT URODYNAMICS
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              UROMIC{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Symphony
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              An advanced level urodynamic device providing the best-in-class level of specification. Configured to meet daily clinical demands.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Best-In-Class Cart"
              description="A small, compact and cost-effective urodynamic cart."
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Broad Application"
              description="Ideal for any routine examination in daily practice."
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Different Cart Formats"
              description="Touch Table, Touch Station or Medical Office formats."
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Four Braked Wheels"
              description="Braked wheels ensure patient and system safety."
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
                src={uromicHero}
                alt="UROMIC Symphony Workstation"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] lg:h-[460px] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={uromicHero}
                alt="UROMIC Symphony Workstation"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title="Best-In-Class Cart"
                description="A small, compact and cost-effective urodynamic cart."
              />
              <MobileFeatureCard
                number="02"
                title="Broad Application"
                description="Ideal for any routine examination in daily practice."
              />
              <MobileFeatureCard
                number="03"
                title="Different Cart Formats"
                description="Touch Table, Touch Station or Medical Office formats."
              />
              <MobileFeatureCard
                number="04"
                title="Four Braked Wheels"
                description="Braked wheels ensure patient and system safety."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Clinical Overview */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#19A8E8]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                  Clinical Overview
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
                The Pinnacle of Urodynamic{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  Engineering
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                UROMIC Symphony is the premium flagship solution designed for busy urodynamic departments, hospital urology wards, and specialized research centers. Built upon an ultra-sturdy medical trolley with optional electric height elevation, Symphony ensures optimum comfort for both patient and clinician.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                Offering 8 to 16 measuring channels with high-performance SDI/HDMI videourodynamics inputs, Symphony seamlessly handles simultaneous fluoroscopic loops, EMG analysis, and wireless flow meter records.
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
                    MMT Flagship Architecture
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    8–16 Channels
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        <Video size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Full Videourodynamics
                        </div>
                        <div className="text-xs text-slate-500">
                          Digital X-ray & USG capture synchronized with pressure curves
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Sliders size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Motorized Ergonomics
                        </div>
                        <div className="text-xs text-slate-500">
                          Electrical height adjustment cart with angle-adjustable keyboard
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                        <Monitor size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Multi-Monitor Configurations
                        </div>
                        <div className="text-xs text-slate-500">
                          Single touch, vertical dual, or horizontal dual displays
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

      {/* 3rd Section: Monitor Configurations */}
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              WORKSTATION ERGONOMICS
            </span>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl mt-1">
              Customizable Monitor Setups
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              UROMIC Symphony is tailored in multiple visual layouts to maximize examination clarity and clinical comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitorConfigs.map((config, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary mb-4">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {config.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {config.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Section: Software Showcase (UDMvision) */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              INTELLIGENT DIAGNOSTICS
            </span>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl mt-1">
              User Friendly Software UDMvision
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              The full-featured MMT clinical software conforming rigorously to ICS standards, supporting PACS DICOM/HL7 network integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {softwareFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#F8FCFF] p-4 rounded-2xl shadow-sm border border-blue-100/70 hover:border-blue-200 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5th Section: Visual Accessories Showcase */}
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              ACCESSORY ECOSYSTEM
            </span>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl mt-1">
              Wide Range of Compatible Accessories
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Engineered to meet the stringent demands of hospital sterile surgical environments and busy urodynamic suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-primary shadow-xs">
                    {acc.badge}
                  </span>
                  <img
                    src={acc.image}
                    alt={acc.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {acc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Section: Hardware Configurations Matrix */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              DETAILED SPECIFICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl mt-1">
              Hardware Configurations Matrix
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Find the perfect Symphony setup tailored to your institution's clinical workflow.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm w-full">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F0F7FD] text-slate-700 uppercase font-semibold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4 border-b border-blue-100">Feature</th>
                  <th className="py-3.5 px-4 border-b border-blue-100 text-center">Compact Station</th>
                  <th className="py-3.5 px-4 border-b border-blue-100 text-center">Touch Table</th>
                  <th className="py-3.5 px-4 border-b border-blue-100 text-center">Touch Station</th>
                  <th className="py-3.5 px-4 border-b border-blue-100 text-center">Work Station</th>
                  <th className="py-3.5 px-4 border-b border-blue-100 text-center">Office (Tall/Wide)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {[
                  { name: "Measuring channels", vals: ["5", "8 or 16", "8 or 16", "8 or 16", "8 or 16"] },
                  { name: "Wireless Uroflowmetry (868/915 MHz)", vals: [true, true, true, true, true] },
                  { name: "Wired Uroflowmetry Link", vals: [true, true, true, true, true] },
                  { name: "Cart Height Adjustment", vals: ["Manual", "Manual", "Electric", "Manual", "Electric"] },
                  { name: "Four Braked Wheels", vals: [true, true, true, true, true] },
                  { name: "Medical Keyboard & Mouse", vals: [true, false, false, true, true] },
                  { name: "Monitors Supported", vals: ["1", "1 Touch", "2 Touch", "1", "2 Monitors"] },
                  { name: "Angle Adjustable Pump & Pole", vals: [false, true, true, true, true] },
                  { name: "Printer & Bladder Scanner Shelves", vals: [true, true, true, true, true] },
                  { name: "HDMI / SDI Video Inputs", vals: [false, false, true, false, true] },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.name}</td>
                    {row.vals.map((val, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                          ) : (
                            <span className="inline-block w-3 border-t-2 border-slate-300" />
                          )
                        ) : (
                          <span className="font-semibold text-slate-700">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7th Section: Sister Systems Links */}
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              MMT URODYNAMIC FAMILY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Sister Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Select the optimal hardware configuration tailored to your department's case volume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link
              to="/melody"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-primary/40 hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                COMPACT COMPLETE
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                UROMIC Melody
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Compact complete system with 5 channels, inbuilt infusion pump and profilometer.
              </p>
            </Link>

            <Link
              to="/harmony"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-primary/40 hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                ULTRA-PORTABLE
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                UROMIC Harmony
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Small mobile urodynamic unit with 868/915 MHz wireless patient unit.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry & Rental CTA */}
      <ProductInquireCTA
        productName="UROMIC Symphony Urodynamic Workstation"
        productImage={uromicHero}
        subtitle="MMT UROMIC Symphony flagship urodynamics workstation with up to 16 channels, motorized cart, dual touch screens, and videourodynamics. Available for rental or purchase."
      />
    </div>
  );
};

export default Symphony;
