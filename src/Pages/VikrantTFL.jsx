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
import machineImage from "../assets/images/vikrant_machine.png";
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
        <div className="relative ml-8 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm">
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

const VikrantTFL = () => {
  const generalOverview = [
    {
      title: "Efficient Dusting",
      desc: "Low pulse energy combined with very high repetition rate (Up to 2500 Hz).",
    },
    {
      title: "Reduced Retropulsion",
      desc: "Stable, finely adjustable pulse delivery helps maintain target contact.",
    },
    {
      title: "Flexible Stone Strategy",
      desc: "Dusting, fragmentation and popcorn techniques matched to stone burden.",
    },
    {
      title: "Controlled Tissue Effect",
      desc: "Pulsed, QCW and continuous delivery options for incision and coagulation.",
    },
    {
      title: "Made In India",
      desc: "Indigenous R&D and manufacturing, ensuring local support and reliability.",
    },
    {
      title: "Versatile Performance",
      desc: "Available in 30 W, 45 W, and 70 W configurations to match clinical needs.",
    },
  ];

  const specs = [
    { label: "Laser Type", value: "Thulium fiber laser" },
    { label: "Wavelength", value: "1940 nm" },
    { label: "Output", value: "Up to 30 W / 45 W / 70 W" },
    { label: "Repetition", value: "Up to 2500 Hz" },
    { label: "Pulse Energy", value: "0.005 J - 6 J" },
    { label: "Pulse Duration", value: "200 us - 50 ms" },
    { label: "Modes", value: "QCW / Pulsed / Continuous wave" },
    { label: "Aiming beam", value: "532 nm, adjustable (<5 mW), Class 3R" },
    { label: "Fiber Delivery", value: "150 / 200 / 272 / 365 / 550 microns (No-lock universal connector)" },
    { label: "Activation", value: "Double foot switch" },
    { label: "Cooling", value: "Air cooled" },
    { label: "Electrical", value: "100-240 V, 50/60 Hz, 1000 VA" },
    { label: "Weight", value: "Approximately 40 kg" },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Vikrant TFL 30/45/70 WATT - Thulium Fiber Laser | Reinforce Healthcare Services"
        description="Explore the Vikrant TFL 1940 nm Thulium Fiber Laser. Indigenous R&D, Made in India for efficient dusting, low retropulsion, and precision cutting."
        keywords="Vikrant TFL, Thulium Fiber Laser, 1940 nm laser, Made in India surgical laser, Urology laser, Lithotripsy laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Vikrant TFL Background"
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
                1940 nm THULIUM FIBER LASER
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Vikrant{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                TFL
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base font-semibold">
              30 WATT - 45 WATT - 70 WATT | INDIGENOUS R&D | MADE IN INDIA
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              Efficient Dusting • Low Retropulsion • Precision Cutting • Effective Coagulation
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1240px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Fine Dusting"
              description="Low pulse energy combined with very high repetition rate."
              image={machineImage}
              position="left-2 xl:left-4 top-12 xl:top-14"
            />
            <FeatureCard
              number="02"
              title="Broad Parameter Control"
              description="Tailor energy, frequency and pulse duration."
              image={fiberImg}
              position="bottom-12 xl:bottom-14 left-2 xl:left-4"
            />
            <FeatureCard
              number="03"
              title="Reduced Retropulsion"
              description="Finely adjustable pulse delivery helps maintain target contact."
              image={recognitionImg}
              position="right-2 xl:right-4 top-12 xl:top-14"
            />
            <FeatureCard
              number="04"
              title="Controlled Tissue Effect"
              description="Pulsed, QCW and continuous delivery options."
              image={footswitchImg}
              position="bottom-12 xl:bottom-14 right-2 xl:right-4"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[310px] xl:left-[324px] top-[108px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[108px] left-[310px] xl:left-[324px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[310px] xl:right-[324px] top-[108px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[108px] right-[310px] xl:right-[324px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[24px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[340px] xl:h-[370px] w-full max-w-[380px] items-center justify-center xl:flex">
              <div className="absolute bottom-8 left-1/2 h-28 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="Vikrant TFL Laser System"
                className="relative z-10 max-h-[240px] xl:max-h-[270px] w-auto max-w-[340px] xl:max-w-[370px] object-contain drop-shadow-[0_20px_30px_rgba(25,168,232,0.22)] rounded-xl"
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
                alt="Vikrant TFL Laser System"
                className="relative z-10 max-h-[180px] sm:max-h-[210px] w-auto max-w-full object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
              <MobileFeatureCard
                number="01"
                title="Fine Dusting"
                description="Low pulse energy combined with very high repetition rate."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                title="Broad Parameter Control"
                description="Tailor energy, frequency and pulse duration."
                image={fiberImg}
              />
              <MobileFeatureCard
                number="03"
                title="Reduced Retropulsion"
                description="Finely adjustable pulse delivery helps maintain target contact."
                image={recognitionImg}
              />
              <MobileFeatureCard
                number="04"
                title="Controlled Tissue Effect"
                description="Pulsed, QCW and continuous delivery options."
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
                  Clinical Performance Platform
                </p>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
                Why 1940 nm{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  TFL?
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                Thulium fiber energy is strongly absorbed by water. At 1940 nm, this supports shallow optical penetration and a confined interaction zone when the system is used with appropriate settings and irrigation - giving the surgeon a versatile platform for lithotripsy and endourological soft-tissue work.
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
                    Energy where it matters
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Precision | Control | Versatility
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
                          Energy focused at the fluid-target interface.
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
                          Shallow Optical Penetration
                        </div>
                        <div className="text-xs text-slate-500">
                          Interaction remains close to the fiber tip.
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
                          Built for Workflow
                        </div>
                        <div className="text-xs text-slate-500">
                          Intuitive UI, double foot switch, air cooled, wide fiber options.
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

      {/* Clinical Versatility */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">One Platform. Complete Endourology.</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              From stone management to BPH and soft tissue - without changing platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-blue-200 pb-3">STONE MANAGEMENT</h3>
              <p className="text-slate-600 font-semibold mb-4">Choose the right stone strategy (URS, RIRS, PCNL / MINI):</p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Dusting:</strong> Fine-particle strategy at low pulse energy.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Fragmentation:</strong> Controlled creation of retrievable fragments.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Popcorn:</strong> Non-contact fragment reduction in a calyx.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-blue-200 pb-3">BPH AND SOFT TISSUE</h3>
              <p className="text-slate-600 font-semibold mb-4">Cut. Vaporise. Coagulate.</p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Enucleation:</strong> Anatomical BPH tissue dissection.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Vaporisation / ablation:</strong> Controlled tissue removal.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>TUIP / bladder neck incision:</strong> Targeted incision workflows.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Urethral or ureteric stricture:</strong> Precise endoscopic incision.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bladder and upper-tract lesions:</strong> Resection or vaporisation where indicated.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Delivery Modes */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Energy delivery matched to the task</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#102A43] text-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#19A8E8]">QCW</h3>
              <p className="text-sm text-slate-300">High peak power delivery for demanding stone and tissue tasks.</p>
            </div>
            <div className="bg-[#102A43] text-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#19A8E8]">PULSED</h3>
              <p className="text-sm text-slate-300">Adjustable energy, frequency and pulse duration for procedural flexibility.</p>
            </div>
            <div className="bg-[#102A43] text-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#19A8E8]">CONTINUOUS WAVE</h3>
              <p className="text-sm text-slate-300">Smooth energy delivery for controlled cutting and coagulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-slate-200 pb-5">
            <h2 className="text-3xl font-extrabold text-slate-900">Technical Specifications</h2>
            <p className="text-slate-500 mt-2">30 W | 45 W | 70 W CONFIGURATIONS</p>
          </div>
          <div className="divide-y divide-slate-200 bg-white border border-slate-200 rounded-xl px-6 py-2 shadow-sm">
            {specs.map((spec, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 py-4">
                <div className="font-bold text-[#102A43] uppercase text-sm tracking-wider">{spec.label}</div>
                <div className="text-slate-600 text-sm font-medium">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Quality, Compliance & Support</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-[#F8FCFF] border border-blue-100 rounded-lg p-3">
                <p className="font-bold text-[#102A43] text-sm">ISO 13485:2016</p>
                <p className="text-xs text-slate-500">Quality Management System</p>
              </div>
              <div className="bg-[#F8FCFF] border border-blue-100 rounded-lg p-3">
                <p className="font-bold text-[#102A43] text-sm">ISO 9001:2015</p>
                <p className="text-xs text-slate-500">Quality Management</p>
              </div>
              <div className="bg-[#F8FCFF] border border-blue-100 rounded-lg p-3">
                <p className="font-bold text-[#102A43] text-sm">IEC 60601-1 / -1-2</p>
                <p className="text-xs text-slate-500">Safety & EMC Evaluated</p>
              </div>
              <div className="bg-[#F8FCFF] border border-blue-100 rounded-lg p-3">
                <p className="font-bold text-[#102A43] text-sm">MFG/MD/2023/001014</p>
                <p className="text-xs text-slate-500">Manufacturing Licence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="bg-white py-16 md:py-24 border-t border-slate-200">
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
            <Link to="/fiber-dust-60" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Fiber Dust 60 Watt</h3>
              <p className="text-sm text-slate-500 text-center">60W Thulium Fiber Laser</p>
            </Link>
            <Link to="/cyber-tm-150" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Cyber TM 150 Watt</h3>
              <p className="text-sm text-slate-500 text-center">150W Thulium Surgical Laser System</p>
            </Link>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="Vikrant TFL Laser System" productImage={machineImage} />
    </div>
  );
};

export default VikrantTFL;
