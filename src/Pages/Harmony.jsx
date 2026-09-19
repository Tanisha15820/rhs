import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Activity,
  Layers,
  Wifi,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/uromic_harmony.jpg";
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

const Harmony = () => {
  const softwareFeatures = [
    "Easy to install",
    "Predefined protocols",
    "Methods conform to ICS standards",
    "Multiple nomograms",
    "Configurable examination methods and test reports",
    "PVR value automatically saved into test reports",
    "Configurable languages",
    "Wireless connection with hospital network (DICOM/HL7)",
    "Voice or remote control",
    "Online remote service support",
  ];

  return (
    <div className="bg-white">
      <SEO
        title="UROMIC Harmony - Urodynamic System | Reinforce Healthcare Services"
        description="Explore the UROMIC Harmony, the smallest mobile unit for basic urodynamic examinations with wireless connectivity."
        keywords="UROMIC Harmony, Urodynamic system, Uroflowmetry, MMT Urodynamics, Medical equipment"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="UROMIC Harmony Background"
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
                GET INTO THE FLOW WITH MMT URODYNAMICS
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              UROMIC{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Harmony
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              The smallest mobile unit for basic urodynamic examinations with wireless connectivity. Can work as a standalone measuring system or as a wireless extension.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Unique Wireless Connection"
              description="868/915 MHz ensures stability and no signal dropout."
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Cost Effective System"
              description="Covering all standard urodynamic examinations."
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="5 Measuring Channels"
              description="Inputs for recording pressures, EMG and optional infusion weight."
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Broad Compatibility"
              description="Compatible with different types of pressure measuring systems."
              position="bottom-14 right-6"
            />

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="UROMIC Harmony Unit"
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
                alt="UROMIC Harmony Unit"
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
                title="Unique Wireless Connection"
                description="868/915 MHz ensures stability and no signal dropout."
              />
              <MobileFeatureCard
                number="02"
                title="Cost Effective System"
                description="Covering all standard urodynamic examinations."
              />
              <MobileFeatureCard
                number="03"
                title="5 Measuring Channels"
                description="Inputs for recording pressures, EMG and optional infusion weight."
              />
              <MobileFeatureCard
                number="04"
                title="Broad Compatibility"
                description="Compatible with different types of pressure measuring systems."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">User Friendly Software UDMvision</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Advanced software capabilities that streamline your urodynamic workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {softwareFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">Compatible Accessories</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Uroflowmetry</h3>
              <p className="text-sm text-slate-600">
                Waterproof flow meter allows easy cleaning. Lithium battery for truly wireless experience. Different types of stands available including folding and height-adjustable versions.
              </p>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Cystometry</h3>
              <p className="text-sm text-slate-600">
                MMT infusion weight ensures precise volume filling.
              </p>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">EMG / Biofeedback</h3>
              <p className="text-sm text-slate-600">
                EMG curve is smooth and precise thanks to an external preamplifier.
              </p>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Valsalva Leak Point Pressure</h3>
              <p className="text-sm text-slate-600">
                Flexible camera allows easy visualisation of urethral leaks.
              </p>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">3D Bladder Scanner</h3>
              <p className="text-sm text-slate-600">
                Portable, intuitive, and accurate. Provides real-time PVR information saved into test reports automatically.
              </p>
            </div>
            <div className="bg-[#F8FCFF] border border-blue-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Commode Chair</h3>
              <p className="text-sm text-slate-600">
                Lightweight and easy to clean chair for seated voiding, suitable for videourodynamics procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900">Other Urodynamic Systems</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-16 rounded bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/melody" className="w-full max-w-[300px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">UROMIC Melody</h3>
              <p className="text-sm text-slate-500 text-center">Compact Complete Urodynamic System</p>
            </Link>
            <Link to="/symphony" className="w-full max-w-[300px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">UROMIC Symphony</h3>
              <p className="text-sm text-slate-500 text-center">Premium Urodynamic System</p>
            </Link>
          </div>
        </div>
      </section>

      <ProductInquireCTA productName="UROMIC Harmony" productImage={machineImage} />
    </div>
  );
};

export default Harmony;
