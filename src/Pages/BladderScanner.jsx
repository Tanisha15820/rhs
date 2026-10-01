import React, { useState } from "react";
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
  Maximize2,
  FileText,
  Sliders,
  Laptop,
  Compass,
  Award,
  Sparkles,
} from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import probeImg from "../assets/images/mmt_bladder_probe.jpg";
import cartImg from "../assets/images/bladder_scanner.png";
import softwareImg from "../assets/images/mmt_software_pvr.jpg";
import holdersImg from "../assets/images/uromic_holders_suite.jpg";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

/* Desktop Feature Card */
const FeatureCard = ({ number, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[310px] h-[110px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[42px] h-[50px] w-[1px] bg-primary"></div>
      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        {/* Circular Image */}
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1"
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

/* Mobile Feature Card */
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

const BladderScanner = () => {
  const [activeScanDepth, setActiveScanDepth] = useState(1);

  const heroFeatures = [
    {
      number: "01",
      title: "One-Button Control",
      description: "One tactile button starts and stops scanning instantaneously.",
      image: probeImg,
      position: "left-28 top-16",
    },
    {
      number: "02",
      title: "Manual Correction Mode",
      description: "Convenient manual bladder contour correction for clinical precision.",
      image: softwareImg,
      position: "bottom-14 left-28",
    },
    {
      number: "03",
      title: "Real-Time 3D & PVR",
      description: "3D volume calculations saved into Uromic app within seconds.",
      image: softwareImg,
      position: "top-16 right-28",
    },
    {
      number: "04",
      title: "Anomaly Visualization",
      description: "Physiological anomalies affecting volume calculations visualized live.",
      image: probeImg,
      position: "bottom-14 right-28",
    },
  ];

  const keyAdvantages = [
    {
      title: "No Sonographer Skills Needed",
      desc: "Intuitive automated alignment and real-time guidance enable nurses and clinicians to scan effortlessly.",
      icon: <Award className="h-5 w-5 text-primary" />,
    },
    {
      title: "Fully Automatic Multi-Plane Scans",
      desc: "Captures multi-planar sweeps from a single comfortable position on the patient's body.",
      icon: <Layers className="h-5 w-5 text-primary" />,
    },
    {
      title: "Auto-Location & Tracking",
      desc: "Automatic real-time bladder localization and contour tracking ensures reliable measurements.",
      icon: <Compass className="h-5 w-5 text-primary" />,
    },
    {
      title: "Advanced Signal Processing",
      desc: "High-frequency ultrasound filters produce crystal clear tissue contrast and sharp edge detection.",
      icon: <Cpu className="h-5 w-5 text-primary" />,
    },
    {
      title: "Full-Page JPEG & DICOM Reports",
      desc: "Generate comprehensive diagnostic reports with seamless hospital PACS / EMR export.",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      title: "Post-Test Quality Indicators",
      desc: "Real-time user feedback and validation scores guide clinicians toward optimal acoustic coupling.",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
    },
  ];

  const scanDepths = [
    {
      depth: "10 cm",
      target: "Designed for Children",
      desc: "Optimized acoustic focal zone for pediatric patients, minimizing ultrasound power output while delivering sharp resolution.",
      color: "from-sky-500/20 to-blue-500/10",
      accent: "text-sky-600",
      bgBadge: "bg-sky-100 text-sky-700",
    },
    {
      depth: "16 cm",
      target: "Designed for Adults",
      desc: "Standard adult examination depth providing high frame rate multi-plane sector visualization with automatic contour tracking.",
      color: "from-primary/25 to-primary-dark/15",
      accent: "text-primary",
      bgBadge: "bg-blue-100 text-blue-700",
    },
    {
      depth: "23 cm",
      target: "Designed for Obese",
      desc: "Extended penetration depth with enhanced low-frequency harmonics designed specifically for high BMI and difficult patient anatomies.",
      color: "from-indigo-500/25 to-purple-500/10",
      accent: "text-indigo-600",
      bgBadge: "bg-indigo-100 text-indigo-700",
    },
  ];

  const technicalSpecs = [
    { label: "Volume Measurement Range", value: "0 – 1000 ml" },
    { label: "Measurement Accuracy", value: "+/- 10% of reading, +/- 20 ml" },
    { label: "Scanning Method", value: "Sector, 180 degrees multi-plane" },
    { label: "Scan Depths", value: "10 cm (Child) | 16 cm (Adult) | 23 cm (Obese)" },
    { label: "Connectivity", value: "Standard USB interface (Tablet, Laptop, PC)" },
    { label: "Integration", value: "UROMIC Symphony, Samba, QuickStep, Jive & Standalone" },
    { label: "Report Formats", value: "Full-Page PDF, JPEG, DICOM PACS compatible" },
    { label: "Operational Mode", value: "Single-button automatic start & stop" },
  ];

  const uromicSystems = [
    {
      name: "Uromic QuickStep",
      role: "Compact & Agile Mobile Trolley",
      desc: "Equipped with dedicated side probe holster for fast bedside voiding assessment.",
    },
    {
      name: "Uromic Samba",
      role: "Full-Featured Urodynamics Suite",
      desc: "Complete urodynamic station with integrated 3D bladder PVR data synchronisation.",
    },
    {
      name: "Uromic Jive (Articulated)",
      role: "Ergonomic Articulating Display Cart",
      desc: "Adjustable display position with quick-reach magnetic scanner probe cradle.",
    },
    {
      name: "Uromic Jive (Compact)",
      role: "Streamlined Footprint Station",
      desc: "Minimal footprint ideal for space-constrained outpatient clinics and catheter clinics.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="MMT Bladder Scanner - Real-time & Non-invasive 3D Scanning | Reinforce Healthcare Services"
        description="MMT Bladder Scanner: Real-time, safe, easy and non-invasive 3D bladder scanning with automatic PVR calculation and standalone mobile cart or Uromic system integration."
        keywords="MMT Bladder Scanner, 3D bladder scanner, PVR calculation, Uromic Bladder Scanner, portable ultrasound bladder scan, urology scanner rental"
        canonical="/bladder-scanner"
      />

      {/* =========================================================================
          HERO BANNER (Matches Litho35Watt & SmartXide exactly)
         ========================================================================= */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="MMT Bladder Scanner Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        {/* Main Banner Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Top Pill / Badge */}
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                REAL-TIME, SAFE, EASY & NON-INVASIVE
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            {/* Main Product Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              MMT Bladder{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Scanner
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Precision 3D ultrasonic volume calculation and real-time bladder visualization.
              Seamlessly integrates with Uromic systems or functions as an autonomous standalone mobile unit.
            </p>
          </div>

          {/* Interactive Hero Machine & Floating Cards */}
          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            {heroFeatures.map((card, idx) => (
              <FeatureCard
                key={idx}
                number={card.number}
                title={card.title}
                description={card.description}
                image={card.image}
                position={card.position}
              />
            ))}

            {/* Desktop Pointer Arrows to Center */}
            <div className="absolute left-[424px] top-[105px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[105px] left-[424px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[424px] top-[105px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[105px] right-[424px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Product Showcase - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={cartImg}
                alt="MMT Bladder Scanner Mobile System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] lg:h-[470px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Product Showcase - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={cartImg}
                alt="MMT Bladder Scanner Mobile System"
                className="relative z-10 h-[280px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              {heroFeatures.map((card, idx) => (
                <MobileFeatureCard
                  key={idx}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GENERAL OVERVIEW & HOW IT WORKS (PDF Page 1 & 2 content)
         ========================================================================= */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#19A8E8]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                  Clinical Principle & Overview
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
                Advanced Ultrasound for{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  Accurate Urinary Assessment
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                MMT Bladder Scanner measures ultrasonic reflections within a patient’s body and
                differentiates the urinary bladder from the surrounding tissues with extreme precision.
                By evaluating acoustic impedance boundaries, it eliminates guesswork and avoids unnecessary catheterization.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                With a single tactile button on the handheld probe, clinicians can start and halt scanning in real-time.
                The system dynamically tracks physiological anomalies and provides instant 3D volume calculations.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#19A8E8] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      One Button Control
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                      Ergonomic probe button controls the scanner start and stop without touching the console.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#19A8E8] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      Manual Bladder Correction
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                      Specialized manual mode allows clinicians to adjust contours for complex patient anatomies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#19A8E8] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      PVR in Seconds
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                      Accurate post-void residual calculations generated rapidly, saving valuable clinic time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#19A8E8] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      USB Plug & Play
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">
                      Connects directly through standard USB to any hospital tablet, laptop, or workstation PC.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Probe Interactive Showcase Card */}
            <div className="relative flex items-center justify-center lg:col-span-6">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#EBF5FE] to-[#F7FAFC] p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    MMT Handheld Probe
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Lightweight Ergonomic Wand
                  </span>
                </div>

                <div className="relative mb-6 flex h-56 w-full items-center justify-center rounded-2xl bg-white p-4 shadow-inner overflow-hidden border border-blue-100">
                  <img
                    src={probeImg}
                    alt="MMT Handheld Probe"
                    className="h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-3 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                    Tactile Button Active
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-primary">
                        <Zap size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Instant Triggering
                        </div>
                        <div className="text-[11px] text-slate-500">
                          One button activates sector sweeps without doctor touching console
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Acoustic Safety
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Zero radiation hazard; safe for recurrent geriatric & pediatric scans
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

      {/* =========================================================================
          MMT BLADDER SCANNER SOFTWARE IS EASY TO OPERATE (Page 1)
         ========================================================================= */}
      <section className="bg-[#F8FCFF] py-16 md:py-24 border-b border-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Software Intelligence
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              MMT Bladder Scanner Software is{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Easy to Operate
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The proprietary MMT software delivers 3D volume calculations with automated Post-Void Residual (PVR)
              logging straight into your Uromic diagnostic records.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Screen Mockup */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl bg-slate-900 p-2 sm:p-3 shadow-2xl border-4 border-slate-700">
                <div className="relative overflow-hidden rounded-2xl bg-black">
                  <img
                    src={softwareImg}
                    alt="MMT Bladder Scanner Software UI Display"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute top-4 left-4 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Real-Time Bladder Localization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Software Benefits */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm hover:border-primary/40 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                    3D
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Automated 3D Volume Calculations
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  PVR values are measured through volumetric algorithms and automatically stored into the Uromic patient record with zero manual data entry.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm hover:border-primary/40 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 font-bold">
                    ⚡
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    PVR Available in Seconds
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed processing calculates exact volume capacity within seconds, eliminating diagnostic wait times for fast-paced urology departments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm hover:border-primary/40 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 font-bold">
                    🎯
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Physiological Anomaly Detection
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identifies and visualizes uterine enlargement, bladder diverticula, or pelvic fluid pockets so clinicians can verify accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAND ALONE SYSTEM & CLINICAL ADVANTAGES (Page 2)
         ========================================================================= */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Versatile Deployment
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              MMT Bladder Scanner{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Stand Alone System
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A comprehensive mobile trolley package engineered for daily hospital ward rounds,
              pre/post-operative recovery units, and dedicated urology clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAdvantages.map((adv, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-100 bg-[#F9FBFE] p-6 shadow-xs transition hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                  {adv.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs leading-5 text-slate-600">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stand Alone System Highlight Card */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-900 via-[#102A43] to-slate-900 p-8 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-sky-300 border border-primary/30 mb-3">
                  <Laptop className="h-3.5 w-3.5" />
                  Universal Connectivity
                </div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">
                  Connect to Any Tablet, Laptop or PC
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Through a single high-speed USB connector, it is possible to connect the MMT Bladder Scanner probe
                  directly into your existing Windows workstation, portable tablet, or medical computer cart.
                  No dedicated expensive proprietary consoles required.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center max-w-xs">
                  <div className="text-3xl font-extrabold text-[#19A8E8]">USB 2.0/3.0</div>
                  <div className="text-xs font-medium text-slate-300 mt-1">Plug & Play Operation</div>
                  <div className="mt-3 text-[11px] text-slate-400 border-t border-white/10 pt-2">
                    DICOM & JPEG full report generation with direct network export.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THREE SCAN DEPTHS SECTION (Page 2)
         ========================================================================= */}
      <section className="bg-[#F8FCFF] py-16 md:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Acoustic Customization
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Three Distinct{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Scan Depths
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The MMT scanner features intelligent depth adaptation to optimize signal-to-noise ratio
              and acoustic penetration for varying body compositions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scanDepths.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveScanDepth(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all border ${activeScanDepth === idx
                  ? "border-primary bg-white shadow-lg ring-2 ring-primary/20 scale-[1.02]"
                  : "border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300"
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${item.bgBadge}`}>
                    {item.target}
                  </span>
                  <Sliders className={`h-5 w-5 ${item.accent}`} />
                </div>

                <div className="text-4xl font-extrabold text-[#102A43] mb-2 tracking-tight">
                  {item.depth}
                </div>
                <div className={`text-xs font-bold uppercase tracking-wider ${item.accent} mb-3`}>
                  Penetration Depth
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Acoustic Mode</span>
                  <span className={item.accent}>Optimized Beam</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPECIAL HOLDERS FOR UROMIC SYSTEMS (Page 1)
         ========================================================================= */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                System Compatibility
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Special Holders for{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Uromic Systems
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The MMT Bladder Scanner probe can be mounted with custom precision brackets
              directly across the entire family of MMT Uromic diagnostic stations.
            </p>
          </div>

          {/* Full Image Banner showing all four systems with holders */}
          <div className="rounded-3xl border border-blue-100 bg-[#F8FCFF] p-6 shadow-sm overflow-hidden mb-12">
            <img
              src={holdersImg}
              alt="Special holders for Uromic systems (QuickStep, Samba, Jive)"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uromicSystems.map((sys, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs hover:border-primary/30 hover:shadow-md transition"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Uromic Station
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {sys.name}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {sys.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sys.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SPECIFICATIONS (Matches Litho35Specs style)
         ========================================================================= */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Certified Engineering
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Specification
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Engineered by MEDKONSULT medical technology s.r.o. in Olomouc, Czech Republic
              for clinical diagnostic precision and durability.
            </p>
          </div>

          <div className="mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
              <div className="divide-y divide-slate-100">
                {technicalSpecs.slice(0, 4).map((spec, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50/80 transition">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-slate-800 mt-1 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="divide-y divide-slate-100">
                {technicalSpecs.slice(4).map((spec, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50/80 transition">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-slate-800 mt-1 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manufacturer & Certification Footer Box */}
          <div className="mx-auto mt-8 w-full rounded-2xl border border-blue-100 bg-[#F0F8FF] p-4 text-center text-xs text-slate-600">
            <span className="font-semibold text-slate-800">
              MEDKONSULT medical technology s.r.o.
            </span>{" "}
            — Pasteurova 15, 779 00 Olomouc, Czech Republic | CE Certified Medical Device | www.mmtsystems.com
          </div>
        </div>
      </section>

      {/* =========================================================================
          RENTAL INQUIRY CALL TO ACTION (Standard Across RHS)
         ========================================================================= */}
      <ProductInquireCTA
        productName="MMT Bladder Scanner"
        productImage={cartImg}
        subtitle="Available for clinical equipment rental, institutional demo, or hospital purchase with full technician training and support."
      />
    </div>
  );
};

export default BladderScanner;
