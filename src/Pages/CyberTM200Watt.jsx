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
import machineImage from "../assets/images/cybertm_machine.png";
import footswitchImg from "../assets/images/cybertm_footswitch.jpg";
import fiberImg from "../assets/images/litho35_fiber.png";
import recognitionImg from "../assets/images/litho35_recognition.png";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";
import CyberTmMachine from "../Components/Cyber_Tm/CyberTmMachine";

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

const CyberTM200Watt = () => {
  const generalOverview = [
    {
      title: "High Precision",
      desc: "Observable surgical effect - \"what you see is what you get\".",
    },
    {
      title: "High Safety Level",
      desc: "Precise control of laser delivery and great hemostasis.",
    },
    {
      title: "Versatility",
      desc: "Ability to vaporize, resect or ablate tissue as needed.",
    },
    {
      title: "Clear Surgical Field",
      desc: "Consistent power delivery keeps surgical field clear of bubbles or blood.",
    },
    {
      title: "Reduced Catheterization",
      desc: "In most patients, the catheter can be removed within 12 hours.",
    },
    {
      title: "Shorter Hospitalization",
      desc: "In many cases the patient discharge occurs within 24 hours.",
    },
  ];

  const specs = [
    { label: "Wavelength", value: "2010 nm" },
    { label: "Laser Class", value: "4 (IEC/EN 60825-1:2007)" },
    { label: "Power", value: "Up to 200 W depending on local clearance" },
    { label: "Power setting", value: "1 W to 200 W in 1, 2, 5 W increment steps" },
    { label: "Treatment mode", value: "Continuous wave or pulsed (min 5 ms - up to 100 Hz)" },
    { label: "Beam delivery", value: "Wide range of flexible silica frontal and side-firing fibers" },
    { label: "Aiming beam", value: "Red (650nm) or green (532nm) on choice, (adjustable <5 mW) - Class 3R" },
    { label: "Cooling", value: "Air cooled (closed water-air cooling circuit)" },
    { label: "Noise level", value: "Less than 58 dBA" },
    { label: "Dimensions", value: "21.6 in/55 cm (W) x 29.5 in/75 cm (D) x 43.3 in/110 cm (H)" },
    { label: "Weight", value: "440 lbs. 200 kg" },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Cyber TM 200 Watt - Quanta System | Reinforce Healthcare Services"
        description="Explore the Cyber TM 200 Watt Thulium Surgical Laser System for precision open, laparoscopic, or endoscopic surgery."
        keywords="Cyber TM 200 Watt, Thulium Surgical Laser, Quanta System Cyber TM, BPH treatment laser, Urology laser"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Cyber TM 200 Watt Background"
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
                THULIUM SURGICAL LASER SYSTEM
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Cyber TM{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                200 Watt
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Cyber TM represents the family of Thulium:YAG laser manufactured by Quanta System and dedicated to applications practiced in open, laparoscopic or endoscopic surgery.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1080px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="High Precision"
              description="A laser scalpel that is fast, accurate, and safe."
              image={machineImage}
              position="left-4 top-16"
            />
            <FeatureCard
              number="02"
              title="2µm Wavelength"
              description="Strongly absorbed by water for constant cutting speed."
              image={fiberImg}
              position="bottom-16 left-4"
            />
            <FeatureCard
              number="03"
              title="Low Penetration"
              description="Penetrates only a fraction of a millimeter to reduce injury risk."
              image={recognitionImg}
              position="right-4 top-16"
            />
            <FeatureCard
              number="04"
              title="Double Footswitch"
              description="Dedicated power outputs for ablation and coagulation."
              image={footswitchImg}
              position="bottom-16 right-4"
            />

            {/* Desktop Arrows */}
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

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] xl:flex xl:h-[460px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="Cyber TM 200 Watt Laser System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] xl:h-[440px] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 xl:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="Cyber TM 200 Watt Laser System"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
              <MobileFeatureCard
                number="01"
                title="High Precision"
                description="A laser scalpel that is fast, accurate, and safe."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                title="2µm Wavelength"
                description="Strongly absorbed by water for constant cutting speed."
                image={fiberImg}
              />
              <MobileFeatureCard
                number="03"
                title="Low Penetration"
                description="Penetrates only a fraction of a millimeter to reduce injury risk."
                image={recognitionImg}
              />
              <MobileFeatureCard
                number="04"
                title="Double Footswitch"
                description="Dedicated power outputs for ablation and coagulation."
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
                Advanced Thulium Laser for{" "}
                <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                  Surgical Excellence
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
                Cyber TM emits with a wavelength of 2µm that is strongly absorbed by water which is highly present in all tissues. For this reason the speed of cutting and vaporization remains relatively constant during the procedures, regardless of tissue vascularization.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">
                The laser beam penetrates only a fraction of a millimeter in the tissue, providing the surgeon with a high degree of control and reducing substantially the risk of inadvertent injury.
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
                    Thulium 2010 nm
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    200W System
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
                          Thulium Efficiency
                        </div>
                        <div className="text-xs text-slate-500">
                          Very low coagulation depth (0.1-0.2 mm) for great haemostatic effects
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
                          Reduced Risks
                        </div>
                        <div className="text-xs text-slate-500">
                          Minor risks for patients with clotting problems or undergoing anticoagulation therapy
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
                          Advanced UI
                        </div>
                        <div className="text-xs text-slate-500">
                          12" wide color touch screen with interactive interface
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

      {/* Techniques for BPH */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">BPH - Benign Prostatic Hyperplasia</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Using the Cyber TM for BPH procedures, the surgeon can choose to perform:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#19A8E8] mb-3">ENUCLEATION (THuLEP)</h3>
              <p className="text-slate-600 text-sm">
                The enucleation technique involves the "detachment" of the prostatic obstructive lobes using the endoscopic instrument for the mechanical action, the laser beam to cut/ablate the resistant tissue components or for a quick hemostatic action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#19A8E8] mb-3">VAPO-ENUCLEATION (THuVEP)</h3>
              <p className="text-slate-600 text-sm">
                The Vapo-Enucleation technique uses mainly the laser cutting/vaporization effect instead of the mechanical action. Decreases irritative phenomena and offers advantages in patients with coagulative problems. Shorter learning curve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#19A8E8] mb-3">VAPO-RESECTION (THuVARP)</h3>
              <p className="text-slate-600 text-sm">
                The technique involves the reduction of blocking lobes into small pieces (removable endoscopically without the aid of a Morcellator) via laser resection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#19A8E8] mb-3">VAPORIZATION (THuVAP)</h3>
              <p className="text-slate-600 text-sm">
                Involves the reduction of prostate lobes by laser vaporization of blocking tissue. Preserves the characteristics of low-depth coagulation, a key factor for the reduction of dysuria and other postoperative problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CyberTmMachine />

      {/* Applications Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Applications & Intended Use</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F8FCFF] border border-blue-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-blue-200 pb-2">UROLOGY</h3>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> BPH (THuVAP - THuVARP - THuLEP - THuVEP)</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Tumors of the Upper Urinary Tract</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Bladder Tumors</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Strictures</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Partial Nephrectomy</li>
              </ul>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-blue-200 pb-2">MULTIDISCIPLINARY</h3>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Thoracic Surgery</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> ENT</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Neurology</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> General Surgery</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-[#19A8E8] h-5 w-5" /> Gastroenterology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber TM In Brief & Optionals */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Cyber TM In Brief</h2>
              <ul className="space-y-4 text-slate-700 text-sm leading-6">
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Power Output - 200W</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> High precision action without affecting the surrounding tissue</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Minimal post-operative catheterization time</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Reduction of time of hospitalization time and return to normal quality of life</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Minimal blood loss also for high-risk patients (ex. anticoagulant therapy)</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Multidisciplinary system for minimally invasive surgery</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Double footswitch with Ready/Standby element</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-[#19A8E8] shrink-0 h-5 w-5 mt-0.5" /> Conservation of Antegrade Ejaculation</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Optionals & Accessories</h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <ul className="space-y-4 text-slate-700 text-sm leading-6">
                  <li className="border-b border-slate-100 pb-3">
                    <strong>Optical fibers with frontal emission</strong><br />
                    Sterile - Single Use or Reusable<br />
                    Core diameter from 200 µm to 1000µm (3m long)
                  </li>
                  <li className="border-b border-slate-100 pb-3">
                    <strong>Optical fibers with lateral emission</strong><br />
                    Sterile - Single Use<br />
                    Core diameter 600µm (3m long)
                  </li>
                  <li className="pb-3">
                    <strong>Additional Accessories:</strong><br />
                    • Adjustable Stripper for Optical Fibers<br />
                    • Special Sterilizable Stripper for Optical Fibers<br />
                    • Ceramic Scissors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <Link to="/products/litho-35" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Litho 35 Watt</h3>
              <p className="text-sm text-slate-500 text-center">30W - 35W Holmium:YAG for Lithotripsy</p>
            </Link>
            <Link to="/products/litho-dk30" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Litho DK30</h3>
              <p className="text-sm text-slate-500 text-center">30W Desktop Holmium:YAG Laser</p>
            </Link>
            <Link to="/products/cyber-tm-150" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Cyber TM 150 Watt</h3>
              <p className="text-sm text-slate-500 text-center">150W Thulium Laser System</p>
            </Link>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="Cyber TM 200 Watt Laser System" productImage={machineImage} />
    </div>
  );
};

export default CyberTM200Watt;
