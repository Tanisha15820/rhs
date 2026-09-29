import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/huv02.png";
import fhdMonitorImg from "../assets/images/huv02_fhd_monitor.jpg";
import touchscreenImg from "../assets/images/huv02_touchscreen.jpg";
import edgeConnectorImg from "../assets/images/huv02_edge_connector.jpg";
import HUV02Features from "../Components/HUV02/HUV02Features";
import HUV02Capabilities from "../Components/HUV02/HUV02Capabilities";
import HUV02Specs from "../Components/HUV02/HUV02Specs";
import HUV02Clinical from "../Components/HUV02/HUV02Clinical";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

/* Desktop Floating Feature Card (matching SmartXide & Litho35Watt) */
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
              className="h-full w-full object-cover p-1"
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
            className="h-full w-full object-cover p-1"
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

/* HUV02 Product Page Component */
const HUV02 = () => {
  return (
    <div className="bg-white">
      <SEO
        title="HugeMed HUV-02 Medical Image Processor | Reinforce Healthcare Services"
        description="The Image Processor HUV-02 captures and processes images from endoscopes, delivering up to 1080P FHD output to external displays with intuitive LCD touchscreen control."
        keywords="HUV-02, HUV02, HugeMed image processor, endoscopy image processor, medical video processor, flexible ureterorenoscopy processor, 1080P FHD surgical processor rental"
        canonical="/huv02"
      />

      {/* SECTION 1: Product Hero Banner (strictly matching SmartXide & Litho35Watt) */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="HUV-02 Medical Image Processor Background"
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
                HUV-02
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              The Image Processor HUV-02 captures and processes images from endoscopes, delivering output to external displays. It provides clear, high-quality imaging and an intuitive operating experience for surgical procedures.
            </p>
          </div>

          {/* Product Center Area with Floating Feature Cards */}
          <div className="relative mx-auto mt-4 max-w-[1040px] sm:mt-6">
            {/* Desktop Feature Card 01 - Top Left */}
            <FeatureCard
              number="01"
              type="COMPACT DESIGN"
              title="Space-Saving Compact"
              description="Small footprint (82×281×377mm) easy to place in space-constrained operating rooms."
              image={machineImage}
              position="left-4 top-16"
            />

            {/* Desktop Feature Card 02 - Bottom Left */}
            <FeatureCard
              number="02"
              type="HIGH RESOLUTION"
              title="Maximum 1080P FHD"
              description="Delivers high-quality imaging with up to 1920×1080 px resolution on external monitors."
              image={fhdMonitorImg}
              position="bottom-16 left-4"
            />

            {/* Desktop Feature Card 03 - Top Right */}
            <FeatureCard
              number="03"
              type="OPERATOR PANEL"
              title="Intuitive LCD Touchscreen"
              description="Quick access to settings, photo capture, video recording, and white balance."
              image={touchscreenImg}
              position="top-16 right-4"
            />

            {/* Desktop Feature Card 04 - Bottom Right */}
            <FeatureCard
              number="04"
              type="SIGNAL INTEGRITY"
              title="Goldfinger Edge Connector"
              description="Adapts goldfinger plugs to enhance stability of high-speed datum transfer."
              image={edgeConnectorImg}
              position="bottom-16 right-4"
            />

            {/* Desktop Connecting Arrows */}
            <div className="absolute left-[310px] top-[115px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[115px] left-[310px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[310px] top-[115px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[115px] right-[310px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[35px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[500px] items-end justify-center sm:h-[420px] xl:flex xl:h-[460px]">
              <div className="absolute bottom-10 left-1/2 h-36 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="HugeMed HUV-02 Medical Video Image Processor"
                className="relative z-10 h-[360px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.22)] xl:h-[420px] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[290px] items-end justify-center pb-4 xl:hidden sm:max-w-[340px]">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="HugeMed HUV-02 Medical Video Image Processor"
                className="relative z-10 h-[220px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] sm:h-[260px] rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
              <MobileFeatureCard
                number="01"
                type="COMPACT DESIGN"
                title="Space-Saving Design"
                description="Small footprint (82×281×377mm) saving space in busy surgical theaters."
                image={machineImage}
              />
              <MobileFeatureCard
                number="02"
                type="HIGH RESOLUTION"
                title="Maximum 1080P FHD Output"
                description="High-quality imaging up to 1920×1080 px resolution on external monitors."
                image={fhdMonitorImg}
              />
              <MobileFeatureCard
                number="03"
                type="TOUCH INTERFACE"
                title="Intuitive LCD Touchscreen"
                description="Built-in touchscreen for quick access to settings, capture, and recording."
                image={touchscreenImg}
              />
              <MobileFeatureCard
                number="04"
                type="SIGNAL INTEGRITY"
                title="Edge Connector"
                description="Goldfinger plugs enhance stability of high-speed endoscopic datum transfer."
                image={edgeConnectorImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Features & Architecture with Dimension Lines (Screenshot 2) */}
      <HUV02Features />

      {/* SECTION 3: Deep-Dive Core Capabilities (Screenshot 1) */}
      <HUV02Capabilities />

      {/* SECTION 4: Technical Specifications */}
      <HUV02Specs />

      {/* SECTION 5: Clinical Applications & Endoscopy Workflow */}
      <HUV02Clinical />

      {/* SECTION 6: Inquire / Rental CTA */}
      <ProductInquireCTA
        title="Interested in the HUV-02 Medical Image Processor?"
        subtitle="Available for flexible hospital rental, demonstration, and procurement with full technical and clinical support."
        productName="HugeMed HUV-02 Medical Image Processor"
        productImage={machineImage}
      />
    </div>
  );
};

export default HUV02;
