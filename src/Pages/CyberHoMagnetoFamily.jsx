import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

// Assets
import magnetoBannerBg from "../assets/images/smartxide_banner.png";
import magnetoMachineImg from "../assets/images/magneto.png";
import magnetoAllInOneImg from "../assets/images/magneto_all_in_one.png";
import magnetoLithotripsyImg from "../assets/images/magneto_lithotripsy.png";
import litho35FiberImg from "../assets/images/litho35_fiber.png";

// Components
import MagnetoInnovation from "../Components/Cyber_Ho_Magneto/MagnetoInnovation";
import MagnetoLithotripsy from "../Components/Cyber_Ho_Magneto/MagnetoLithotripsy";
import MagnetoAllInOne from "../Components/Cyber_Ho_Magneto/MagnetoAllInOne";
import MagnetoFibers from "../Components/Cyber_Ho_Magneto/MagnetoFibers";
import MagnetoSpecs from "../Components/Cyber_Ho_Magneto/MagnetoSpecs";

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
            className="h-full w-full object-contain p-1.5"
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

const CyberHoMagnetoFamily = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Cyber Ho Magneto Family - Quanta System | Reinforce Healthcare Services"
        description="Experience the Cyber Ho Magneto Family by Quanta System. Combining the power of Holmium with the dusting of TFL for superior lithotripsy and BPH management."
        keywords="Cyber Ho Magneto, Holmium laser, TFL dusting, Quanta System, Lithotripsy, BPH"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={magnetoBannerBg}
            alt="Cyber Ho Magneto Background"
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
                Holmium Yag Laser
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Cyber Ho{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Magneto
              </span>{" "}
              Family
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Cyber Ho with Quanta Magneto Technology is the latest breakthrough
              in urology, which combines the power of Holmium with the great
              dusting capability of the TFL in an "all-in-one" laser system,
              offering outstanding efficiency and flexibility.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1040px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Magneto Technology"
              description="Holmium power turned into longer TFL-like pulses for efficient dusting."
              image={magnetoAllInOneImg}
              position="left-4 top-16"
            />
            <FeatureCard
              number="02"
              title="All-in-One System"
              description="Lithotripsy, BPH management and soft tissue surgery in one device."
              image={magnetoLithotripsyImg}
              position="bottom-16 left-4"
            />
            <FeatureCard
              number="03"
              title="Low Retropulsion"
              description="Magneto emission significantly reduces stone retropulsion."
              image={litho35FiberImg}
              position="right-4 top-16"
            />
            <FeatureCard
              number="04"
              title="High Versatility"
              description="Retains Holmium peak power for HoLEP, PCNL and hard stones."
              image={magnetoMachineImg}
              position="bottom-16 right-4"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[315px] top-[116px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[44px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[116px] left-[315px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[44px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[315px] top-[116px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[44px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[116px] right-[315px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[44px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] xl:flex xl:h-[470px]">
              <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={magnetoMachineImg}
                alt="Cyber Ho Magneto System"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] xl:h-[450px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 xl:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={magnetoMachineImg}
                alt="Cyber Ho Magneto System"
                className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
              <MobileFeatureCard
                number="01"
                title="Magneto Technology"
                description="Holmium power turned into TFL-like dusting pulses."
                image={magnetoAllInOneImg}
              />
              <MobileFeatureCard
                number="02"
                title="All-in-One System"
                description="Lithotripsy, BPH and soft tissue in one device."
                image={magnetoLithotripsyImg}
              />
              <MobileFeatureCard
                number="03"
                title="Low Retropulsion"
                description="Significantly reduces stone retropulsion."
                image={litho35FiberImg}
              />
              <MobileFeatureCard
                number="04"
                title="High Versatility"
                description="Peak power retained for HoLEP & PCNL."
                image={magnetoMachineImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <MagnetoInnovation />
      <MagnetoLithotripsy />
      <MagnetoAllInOne />
      <MagnetoFibers />
      <MagnetoSpecs />

      {/* Contact CTA */}
      <ProductInquireCTA
        productName="Cyber Ho Magneto Family"
        productImage={magnetoMachineImg}
      />
    </div>
  );
};

export default CyberHoMagnetoFamily;