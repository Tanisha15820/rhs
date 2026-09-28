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
import { Link } from "react-router-dom";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/fiberdust_machine.jpg";
import footswitchImg from "../assets/images/cybertm_footswitch.jpg";
import fiberImg from "../assets/images/litho35_fiber.png";
import recognitionImg from "../assets/images/litho35_recognition.png";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

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

const FiberDust60Watt = () => {
  const generalOverview = [
    {
      title: "Effective Lithotripsy",
      desc: "Outstanding performance for the treatment of stones.",
    },
    {
      title: "Minimized Retropulsion",
      desc: "Pulsed emission with low peak power reduces retropulsion.",
    },
    {
      title: "Disposable & Reusable Fibers",
      desc: "Compatible with both, allowing significant cost savings.",
    },
    {
      title: "Continuous & Pulsed",
      desc: "Choose emission modes tailored to lithotripsy or hemostasis.",
    },
    {
      title: "Extreme Frequency",
      desc: "Up to 2500 Hz to tailor your technique to specific stones.",
    },
    {
      title: "Compact Design & Standard Outlet",
      desc: "Space saving and compatible with standard wall outlets.",
    },
  ];

  const specs = [
    { label: "Wavelength", value: "1.9 µm" },
    { label: "Average power", value: "Up to 60 W" },
    { label: "Repetition rate", value: "Up to 2500 Hz" },
    { label: "Energy per pulse", value: "0.02 - 6 J" },
    { label: "Beam delivery", value: "Wide range of flexible silica fibers" },
    { label: "Aiming beam", value: "532 nm (adjustable <5 mW) - Class 3R" },
    { label: "Fiber recognition", value: "RFID System" },
    { label: "Activation", value: "Double footswitch" },
    { label: "Electrical requirements", value: "100-240 Vac; 50/60 Hz; 1000VA" },
    { label: "Cooling", value: "Air cooling system" },
    { label: "Operating temperature", value: "10°C ÷ 30°C" },
    { label: "Laser class", value: "4" },
    { label: "Dimensions and weight", value: "47 cm (W) x 60 cm (D) x 35 cm (H); 50 kg" },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Fiber Dust 60 Watt - Thulium Fiber Laser | Reinforce Healthcare Services"
        description="Explore the Quanta System Fiber Dust 60 Watt, a Thulium Fiber Laser (TFL) for effective lithotripsy and precise soft tissue surgery."
        keywords="Fiber Dust 60 Watt, Thulium Fiber Laser, TFL technology, Quanta System, Urology laser, Lithotripsy laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Fiber Dust 60 Watt Background"
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
                TFL TECHNOLOGY BY QUANTA SYSTEM
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Fiber Dust{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                60 Watt
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Fiber Dust laser system is a Thulium Fiber Laser (TFL) surgical device intended for both Lithotripsy and precise soft tissue surgery.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Effective Lithotripsy"
              description="A promising alternative to Holmium laser in stone management."
              image={machineImage}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Extreme Frequency"
              description="Take advantage of wide frequency range up to 2500 Hz."
              image={fiberImg}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Minimized Retropulsion"
              description="Low peak power allows reduced retropulsion while ablating the stone."
              image={recognitionImg}
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Double Footswitch"
              description="Complete customization of pedal-mode association."
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
                alt="Fiber Dust 60 Watt Laser System"
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
                src={machineImage}
                alt="Fiber Dust 60 Watt Laser System"
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
                title="Effective Lithotripsy"
                description="A promising alternative to Holmium laser in stone management."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                title="Extreme Frequency"
                description="Take advantage of wide frequency range up to 2500 Hz."
                image={fiberImg}
              />
              <MobileFeatureCard
                number="03"
                title="Minimized Retropulsion"
                description="Low peak power allows reduced retropulsion while ablating the stone."
                image={recognitionImg}
              />
              <MobileFeatureCard
                number="04"
                title="Double Footswitch"
                description="Complete customization of pedal-mode association."
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
                Advanced Thulium Fiber Laser{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  for Surgery
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                During the latest years, TFL technology emerged as a new alternative to Holmium laser, in particular for the treatment of stones. With the introduction of this new surgical laser device, Quanta System completes its already wide laser portfolio, empowering the surgeon with full choice in terms of surgical equipment.
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
                    Thulium 1.9 µm
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    60W TFL System
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
                          High Absorption Efficiency
                        </div>
                        <div className="text-xs text-slate-500">
                          Matches one of the peaks in absorption curve for water, with reduced penetration depth.
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
                          Reduced Energy Requirements
                        </div>
                        <div className="text-xs text-slate-500">
                          High performances with limited energy consumption, compatible with standard outlet.
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
                          Smart Features
                        </div>
                        <div className="text-xs text-slate-500">
                          RFID Recognition System, Automatic Aperture Sensor, and 10.4” Touchscreen.
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

      {/* Why Quanta TFL? */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Quanta TFL?</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              With respect to other competitive TFL systems, Fiber Dust laser by Quanta System has the following advantages:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pulsed & Continuous</h3>
                <p className="text-slate-600 text-sm">
                  Operates in both pulsed and continuous emission. Pulsed enables stone lithotripsy and aggressive cutting. Continuous allows smoother action and better hemostasis of larger vessels.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Reusable Fibers</h3>
                <p className="text-slate-600 text-sm">
                  Designed for compatibility with reusable fibers, allowing significant savings compared to technologies compatible with disposable fibers only.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Extended Settings</h3>
                <p className="text-slate-600 text-sm">
                  Lower minimum pulse energy and higher maximum frequency. 7 steps for peak power grants wider fine-tuning based on stone hardness and visual feedback.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Reliability</h3>
                <p className="text-slate-600 text-sm">
                  Quanta System has more than 35 years of expertise in designing and manufacturing laser devices, providing cutting-edge technologies to surgeons and patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lithotripsy & Soft Tissue Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Surgical Versatility</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-blue-200 pb-3">Lithotripsy</h3>
              <p className="text-slate-600 mb-6">TFL technology has been described as a promising alternative to Holmium laser in stone management.</p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>Limited Retropulsion:</strong> Low stone retropulsion during treatment.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>Extreme Frequency:</strong> Up to 2500 Hz to tailor technique to specific cases.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>Dust & Bust:</strong> Excellent dusting tool, with specific settings for soft stone fragmentation.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-blue-200 pb-3">Soft Tissues</h3>
              <p className="text-slate-600 mb-6">Precise and smooth ablation, resection and incision in soft tissues requiring low-medium power.</p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>BPH Management:</strong> 60W power enables low-power ThuLEP (Thulium Laser Enucleation of the Prostate) in both superpulsed and continuous modes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>Effective Hemostasis:</strong> Highly absorbed by water, allowing quick coagulation of bleedings.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5"/> 
                  <div>
                    <strong>Reduced Penetration:</strong> Shallow depth of penetration, about 0.1-0.2 mm.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GUI & Fiber Information */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12">
             <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Intuitive GUI & Controls</h2>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <ul className="space-y-4 text-slate-700 text-sm leading-6">
                    <li className="border-b border-slate-100 pb-3">
                      <strong>Greater Flexibility</strong><br/>
                      7 levels of pulse width offer greater flexibility compared to the traditional 3 levels.
                    </li>
                    <li className="border-b border-slate-100 pb-3">
                      <strong>Effect Tuning</strong><br/>
                      Adjust cutting and lithotripsy fashion step by step based on target hardness and visual feedback.
                    </li>
                    <li className="pb-3">
                      <strong>Save and Load Settings</strong><br/>
                      Save a suitable settings combination in a customized preset and reload it in future treatments.
                    </li>
                  </ul>
                </div>
             </div>
             <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Compatible Fibers</h2>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <ul className="space-y-4 text-slate-700 text-sm leading-6">
                    <li className="border-b border-slate-100 pb-3">
                      <strong>Standard Fibers</strong><br/>
                      For general use in stone and soft tissue treatments.
                    </li>
                    <li className="border-b border-slate-100 pb-3">
                      <strong>Ball Tip Fibers</strong><br/>
                      Strongly simplify the insertion in already bent scopes.
                    </li>
                    <li className="pb-3">
                      <strong>Gastro Fibers</strong><br/>
                      Specifically designed for the fragmentation of gallstones.
                    </li>
                  </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-slate-200 pb-5">
            <h2 className="text-3xl font-extrabold text-slate-900">Technical Specifications</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {specs.map((spec, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 py-4">
                <div className="font-bold text-slate-800">{spec.label}</div>
                <div className="text-slate-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900">Other Products You May Like</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-16 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/cyberho100watt" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Cyber HO 100 Watt</h3>
              <p className="text-sm text-slate-500 text-center">100W Holmium:YAG Laser</p>
            </Link>
            <Link to="/litho35watt" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Litho 35 Watt</h3>
              <p className="text-sm text-slate-500 text-center">35W Holmium:YAG for Lithotripsy</p>
            </Link>
            <Link to="/cyber-tm-150" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Cyber TM 150 Watt</h3>
              <p className="text-sm text-slate-500 text-center">150W Thulium Surgical Laser System</p>
            </Link>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="Fiber Dust 60 Watt Laser System" productImage={machineImage} />
    </div>
  );
};

export default FiberDust60Watt;
