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
import machineImage from "../assets/images/cyber-ho-150.png";
import footswitchImg from "../assets/images/cyber_ho_150_footswitch.png";
import vaporTunnelImg from "../assets/images/cyber_ho_150_vapor_tunnel.png";
import virtualBasketImg from "../assets/images/cyber_ho_150_virtual_basket.png";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

import Fragmentation from "../Components/Gastro_Laser/Fragmentation";
import DustingEffect from "../Components/Gastro_Laser/DustingEffect";
import Fibers from "../Components/Gastro_Laser/Fibers";
import Fiber_Recognition from "../Components/Gastro_Laser/Fiber_Recognition";

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

const CyberHo100Watt = () => {
  const generalOverview = [
    {
      title: "BPH Treatment",
      desc: "Ideal for HoLEP (Holmium Laser Enucleation of the Prostate) with high efficacy and safety.",
    },
    {
      title: "Effective Lithotripsy",
      desc: "Outstanding performance for fragmentation and dusting of urinary stones.",
    },
    {
      title: "High Frequency Emission",
      desc: "Up to 80 Hz for fast and efficient treatments.",
    },
    {
      title: "Minimized Retropulsion",
      desc: "Vapor Tunnel effect allows stone ablation without inducing stone retropulsion.",
    },
    {
      title: "Reduced Depth of Penetration",
      desc: "0.3 - 0.4 mm penetration protects delicate surrounding tissues.",
    },
    {
      title: "Soft Tissue Surgery",
      desc: "Excellent hemostasis, precise cutting, and rapid tissue vaporization.",
    },
    {
      title: "High Versatility",
      desc: "Multi-application laser platform suitable for various medical specialties.",
    },
    {
      title: "Quick ROI",
      desc: "Advanced features and versatility ensure a quick return on investment.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Cyber Ho 100 - Holmium Laser System"
        description="Explore the Cyber Ho 100 Holmium laser system for superior stone lithotripsy and BPH treatment. Available for hospital and clinic rental."
        keywords="Cyber Ho 100, Holmium laser rental, Cyber Ho laser 100W, Quanta System Cyber Ho, HoLEP laser rental, stone lithotripsy laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Cyber Ho 100 Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                THE REVOLUTION IN HOLMIUM SURGERY
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Cyber Ho{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                100
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Cyber Ho Holmium laser (2.1 µm) meets the increasing demand of efficacy, flexibility with a unique multi-application laser platform able to perform both Lithotripsy and HoLEP. Cyber Ho 100 can reach up to 105 W power.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            <FeatureCard
              number="01"
              title="BPH Treatment (HoLEP)"
              description="High effectiveness, safety, and durability for HoLEP."
              image={machineImage}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Vapor Tunnel™"
              description="Advanced technology for advanced retropulsion control."
              image={vaporTunnelImg}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Effective Lithotripsy"
              description="High energy pulse options to break the hardest stones."
              image={virtualBasketImg}
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Double Footswitch"
              description="Quick switch from one emission mode to another without interruption."
              image={footswitchImg}
              position="bottom-14 right-6"
            />

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

            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="Cyber Ho 100 Laser System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] lg:h-[460px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="Cyber Ho 100 Laser System"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title="BPH Treatment (HoLEP)"
                description="High effectiveness, safety, and durability for HoLEP."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                title="Vapor Tunnel™"
                description="Advanced technology for advanced retropulsion control."
                image={vaporTunnelImg}
              />
              <MobileFeatureCard
                number="03"
                title="Effective Lithotripsy"
                description="High energy pulse options to break the hardest stones."
                image={virtualBasketImg}
              />
              <MobileFeatureCard
                number="04"
                title="Double Footswitch"
                description="Quick switch from one emission mode to another without interruption."
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
                The Revolution in{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  Holmium Surgery
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                Cyber Ho 100 offers full choice regarding settings selection, with superior surgical experience granted by the double footswitch, the intuitive and large modulation of pulse width, and dedicated modes for different treatment steps.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                This device brings outstanding innovation by offering the exclusive Vapor Tunnel™ and MasterPULSE™ technology for advanced retropulsion control.
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
                    105W System
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
                          High Power (up to 105 W)
                        </div>
                        <div className="text-xs text-slate-500">
                          For fast and quick incision, cutting down treatment time.
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
                          Effective Hemostasis
                        </div>
                        <div className="text-xs text-slate-500">
                          Highly absorbed by water, allowing quick coagulation of bleedings.
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
                          Size Independent
                        </div>
                        <div className="text-xs text-slate-500">
                          HoLEP overcomes limitations affecting other BPH techniques regarding prostate size.
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

      {/* Double Footswitch & Intuitive GUI */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Advanced Control & Customization</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase text-center">Double Footswitch</h3>
              <p className="text-slate-600 text-center mb-6">
                The double footswitch enables immediate switch from one emission mode to another, with complete customization of pedal-mode association. No bothersome interruptions are needed for settings readjustment.
              </p>
              <img src={footswitchImg} alt="Double Footswitch" className="w-full max-w-sm object-contain" />
              <div className="grid grid-cols-2 gap-4 mt-6 w-full text-center">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <p className="font-bold text-slate-800 text-sm">Mode #1</p>
                  <p className="text-xs text-slate-500">(e.g. cutting)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <p className="font-bold text-slate-800 text-sm">Mode #2</p>
                  <p className="text-xs text-slate-500">(e.g. coagulation)</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase text-center">Intuitive GUI</h3>
              <p className="text-slate-600 text-center mb-6">
                12" Touchscreen with 270° Screen Rotation. Features include RFID Recognition System, Automatic Aperture Sensor, and user-friendly software with guided selection (BPH, Lithotripsy, Soft Tissues).
              </p>
              <img src={machineImage} alt="GUI Screen" className="w-full max-w-xs object-contain" />
              <p className="mt-6 text-sm font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-full">Save and Load Settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* BPH Treatment / HoLEP */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="mb-4">
                <span className="bg-primary text-white font-bold px-4 py-2 text-2xl uppercase inline-block">BPH</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Holmium Laser Enucleation of the Prostate (HoLEP)</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                HoLEP is a proven technique for the treatment of BPH (Benign Prostatic Hyperplasia), with high effectiveness, safety and durability.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The large amount of literature demonstrates its advantages in terms of efficacy and safety with respect to traditional treatments available for BPH. Recent studies and trials have validated the excellent outcomes achieved by this technique, with its success being reproduced in a diverse array of patients. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                HoLEP can be applied regardless of prostate size and in retreatment setting, with a low complication incidence and retreatment rate on long term follow-up.
              </p>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4 shadow-sm">
                <div className="bg-white p-3 rounded-full border border-blue-100 shadow-sm text-primary">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Fast Cutting</h4>
                  <p className="text-sm text-slate-600">The limited depth of penetration, together with the fast tissue incision, results in precise cut without affecting surrounding tissues.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4 shadow-sm">
                <div className="bg-white p-3 rounded-full border border-blue-100 shadow-sm text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Reliability</h4>
                  <p className="text-sm text-slate-600">Clinical outcomes of HoLEP have been widely investigated, with many clinical studies demonstrating its safety and effectiveness also in the long run.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vapor Tunnel */}
      <section className="bg-[#050A11] py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006DFF]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#006DFF]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0755FF] via-[#147BFF] to-[#21C8F6] mb-6">
                Vapor Tunnel™
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Specific modulation of laser pulses generates longer bubbles able to extend further towards the target. This long bubble touching the target represents a direct connection between fiber tip and stone, granting enhanced energy delivery.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black border border-[#009DFF] rounded-full p-3 text-[#00AFFF]">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#1682FF] font-bold uppercase mb-1">Magnetic Effect</h4>
                    <p className="text-gray-400 text-sm">The Vapor Tunnel effect allows stone ablation while holding the target in place, without inducing stone retropulsion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black border border-[#009DFF] rounded-full p-3 text-[#00AFFF]">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#1682FF] font-bold uppercase mb-1">Easier Treatment</h4>
                    <p className="text-gray-400 text-sm">With a more stable target, lithotripsy treatment can proceed easily with fewer hassles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black border border-[#009DFF] rounded-full p-3 text-[#00AFFF]">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#1682FF] font-bold uppercase mb-1">Time Saving</h4>
                    <p className="text-gray-400 text-sm">Less stone retropulsion prevents the time-consuming fiber repositioning, whereas enhanced energy transmission increases the ablation rate.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img src={vaporTunnelImg} alt="Vapor Tunnel" className="w-full max-w-lg object-contain drop-shadow-[0_0_45px_rgba(0,120,255,0.4)]" />
                <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">How it works:</h4>
                  <p className="text-gray-400 text-sm">As the pulse ends, the bubble collapses. The stone is dragged backwards together with the collapsing bubble (similarly to a basket). Effective and fast ablation results from the enhanced transmission of pulse energy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Components from PDF */}
      <Fragmentation />
      <DustingEffect />

      {/* MasterPULSE */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">MasterPULSE™</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Reducing retropulsion and modifying tissue cutting get easier: instead of trying multiple different settings, start with your preferred ones and then adjust the MasterPULSE™ to tune the effect of laser emission based on your visual feedback. Regulation of pulse width has never been so easy!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full text-primary border border-blue-100">
                  <span className="text-2xl font-bold">7</span>
                </div>
              </div>
              <h4 className="font-bold text-primary mb-2">GREATER FLEXIBILITY</h4>
              <p className="text-sm text-slate-600">7 levels of pulse width offer a greater flexibility with respect to the traditional 3 levels offered by the other holmium devices.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full text-primary border border-blue-100">
                  <Activity size={28} />
                </div>
              </div>
              <h4 className="font-bold text-primary mb-2">CUTTING DOWN TREATMENT TIME</h4>
              <p className="text-sm text-slate-600">Obtain the desired effect quickly, without getting mad with the standard adjustment of energy and frequency parameters.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full text-primary border border-blue-100">
                  <CheckCircle size={28} />
                </div>
              </div>
              <h4 className="font-bold text-primary mb-2">EASE OF TREATMENT</h4>
              <p className="text-sm text-slate-600">Experience a more intuitive and different way to adjust laser settings, simply based on your visual feedback.</p>
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
              Cyber Ho 100 can be used to perform incision, excision, resection, ablation, vaporization, coagulation and hemostasis of soft tissue and in lithotripsy of stones in various medical specialties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">ENT</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">SIALOLITHIASIS</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">GASTROENTEROLOGY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">GENERAL SURGERY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex items-center justify-center font-bold text-slate-800">ARTHROSCOPY</div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100 flex flex-col items-center justify-center font-bold text-slate-800">
              UROLOGY
              <span className="text-xs text-slate-500 font-normal mt-1">LITHOTRIPSY, BPH, TUMORS, STRICTURES, BNI</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Wavelength</div>
              <div className="text-slate-600">2,1 μm</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Average power</div>
              <div className="text-slate-600">Up to 105 W</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Repetition rate</div>
              <div className="text-slate-600">Up to 80 Hz</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Energy per pulse</div>
              <div className="text-slate-600">Up to 5 J</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Pulse duration</div>
              <div className="text-slate-600">50 ÷ 1100 μs</div>
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
              <div className="font-bold text-slate-800">Activation</div>
              <div className="text-slate-600">Double footswitch</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Electrical requirements</div>
              <div className="text-slate-600">230 Vac; 50/60 Hz; 6.2 kVA - 208 Vac; 50/60 Hz; 6.2 kVA</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Cooling</div>
              <div className="text-slate-600">Internal chiller</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Operating temperature</div>
              <div className="text-slate-600">10°C ÷ 30°C</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Laser class</div>
              <div className="text-slate-600">4 (IEC 60825-1:2014)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="font-bold text-slate-800">Dimensions and weight</div>
              <div className="text-slate-600">52 cm (W) x 120 cm (D) x 123 cm (H) (monitor closed), 230 kg</div>
            </div>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="Cyber Ho 100 Laser System" productImage={machineImage} />
    </div>
  );
};

export default CyberHo100Watt;
