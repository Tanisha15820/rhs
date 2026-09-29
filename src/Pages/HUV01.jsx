import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/huv01.png";
import fhdMonitorImg from "../assets/images/huv02_fhd_monitor.jpg";
import keypadImg from "../assets/images/huv01_keypad.jpg";
import edgeConnectorImg from "../assets/images/huv02_edge_connector.jpg";
import HUV01Features from "../Components/HUV01/HUV01Features";
import HUV01Capabilities from "../Components/HUV01/HUV01Capabilities";
import HUV01Specs from "../Components/HUV01/HUV01Specs";
import HUV01Clinical from "../Components/HUV01/HUV01Clinical";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

const FeatureCard = ({ number, type, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[295px] h-[135px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      {/* Number Badge */}
      <div className="absolute left-0 top-0 z-20 flex h-[42px] w-[56px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      {/* Border Accent */}
      <div className="absolute left-0 top-[40px] h-[72px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        {/* Circular Image Container */}
        <div className="relative ml-6 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_15px_rgba(40,116,189,0.12)]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-blue-100 bg-white/80 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain p-1.5"
            />
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 pr-2">
          {type && (
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
                {type}
              </span>
            </div>
          )}
          <h4 className="text-[13px] font-bold leading-tight text-slate-900">
            {title}
          </h4>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Accent Dots */}
      <div className="absolute bottom-2.5 right-4 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

/* Mobile Feature Card */
const MobileFeatureCard = ({ number, type, title, description, image }) => {
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
          {type && (
            <span className="text-[9px] font-bold uppercase text-primary">
              {type}
            </span>
          )}
          <h4 className="mt-0.5 text-xs font-bold text-slate-900">{title}</h4>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* HUV01 Product Page Component */
const HUV01 = () => {
  return (
    <div className="bg-white">
      <SEO
        title="HugeMed HUV-01 Medical Image Processor | Reinforce Healthcare Services"
        description="HUV-01 is an image processor designed to connect endoscopes and displays. It is compatible with certain models of HugeMed flexible endoscopes, providing clear imaging and an intelligent operating experience."
        keywords="HUV-01, HUV01, HugeMed image processor, flexible endoscope processor, 1024x768 medical video processor, endoscopy equipment rental"
        canonical="/huv01"
      />

      {/* SECTION 1: Product Hero Banner (strictly matching SmartXide & Litho35Watt) */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="HUV-01 Medical Image Processor Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Soft Overlay */}
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Header Texts */}
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                MEDICAL IMAGE PROCESSOR • UROLOGY ENDOSCOPY
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Image Processor{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                HUV-01
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              HUV-01 is an image processor designed to connect endoscopes and displays. It is compatible with certain models of HugeMed flexible endoscopes, providing clear imaging and an intelligent operating experience for surgeries.
            </p>
          </div>

          {/* Product Center Area with Floating Feature Cards & Generous Spacing */}
          <div className="relative mx-auto mt-6 max-w-[1240px]">
            {/* Desktop Feature Card 01 - Top Left */}
            <FeatureCard
              number="01"
              type="HIGH-DEFINITION"
              title="1024 × 768 Visual Output"
              description="Output resolution of 1024 × 768 pixels provides clear, detailed imaging for enhanced procedural confidence."
              image={fhdMonitorImg}
              position="left-0 2xl:left-4 top-10"
            />

            {/* Desktop Feature Card 02 - Bottom Left */}
            <FeatureCard
              number="02"
              type="COMPACT FOOTPRINT"
              title="Compact Design to Save Space"
              description="The HUV-01’s compact footprint helps maximize space in busy operating rooms."
              image={machineImage}
              position="bottom-10 left-0 2xl:left-4"
            />

            {/* Desktop Feature Card 03 - Top Right */}
            <FeatureCard
              number="03"
              type="TACTILE KEYPAD"
              title="Dedicated Button Control"
              description="Front faceplate with freeze, photo capture, video recording & light adjustment."
              image={keypadImg}
              position="top-10 right-0 2xl:right-4"
            />

            {/* Desktop Feature Card 04 - Bottom Right */}
            <FeatureCard
              number="04"
              type="SCOPE COMPATIBILITY"
              title="Flexible Scope Connectivity"
              description="Compatible with certain models of HugeMed flexible endoscopes with secure signal coupling."
              image={edgeConnectorImg}
              position="bottom-10 right-0 2xl:right-4"
            />

            {/* Desktop Connecting Arrows with Comfortable Clearance */}
            <div className="absolute left-[295px] 2xl:left-[315px] top-[95px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[95px] left-[295px] 2xl:left-[315px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[295px] 2xl:right-[315px] top-[95px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[95px] right-[295px] 2xl:right-[315px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop (Scaled and Centered with Clean Clearance) */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[420px] items-center justify-center sm:h-[400px] xl:flex xl:h-[440px]">
              <div className="absolute left-1/2 top-1/2 h-36 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="HugeMed HUV-01 Medical Video Image Processor"
                className="relative z-10 w-full max-w-[380px] xl:max-w-[400px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(25,168,232,0.22)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile (with generous vertical margin) */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] sm:max-w-[340px] items-center justify-center my-6 sm:my-8 xl:hidden">
              <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="HugeMed HUV-01 Medical Video Image Processor"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-3.5 px-2 pb-8 sm:px-4 xl:hidden">
              <MobileFeatureCard
                number="01"
                type="HIGH-DEFINITION"
                title="1024 × 768 Visual Output"
                description="Output resolution of 1024 × 768 pixels for enhanced procedural confidence."
                image={fhdMonitorImg}
              />
              <MobileFeatureCard
                number="02"
                type="COMPACT FOOTPRINT"
                title="Space-Saving Compact Design"
                description="Compact footprint helps maximize space in busy operating rooms."
                image={machineImage}
              />
              <MobileFeatureCard
                number="03"
                type="TACTILE KEYPAD"
                title="Dedicated Button Control"
                description="Instant freeze, photo capture, video recording & light adjustment."
                image={keypadImg}
              />
              <MobileFeatureCard
                number="04"
                type="SCOPE COMPATIBILITY"
                title="Flexible Scope Connectivity"
                description="Compatible with certain models of HugeMed flexible endoscopes."
                image={edgeConnectorImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Features & Architecture */}
      <HUV01Features />

      {/* SECTION 3: Deep-Dive Core Capabilities */}
      <HUV01Capabilities />

      {/* SECTION 4: Technical Specifications */}
      <HUV01Specs />

      {/* SECTION 5: Clinical Applications & Endoscopy Workflow */}
      <HUV01Clinical />

      {/* SECTION 6: Inquire / Rental CTA */}
      <ProductInquireCTA
        title="Interested in the HUV-01 Medical Image Processor?"
        subtitle="Available for flexible hospital rental, demonstration, and procurement with full technical and clinical support."
        productName="HugeMed HUV-01 Medical Image Processor"
        productImage={machineImage}
      />
    </div>
  );
};

export default HUV01;
