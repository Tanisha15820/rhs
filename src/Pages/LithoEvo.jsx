import React from "react";

import { motion } from "framer-motion";

import { ArrowRight, ArrowLeft } from "lucide-react";

import SEO from "../Components/SEO";

import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

import bannerBg from "../assets/images/smartxide_banner.png";

import machineImage from "../assets/images/Litho_evo.png";
import LithoEvo1 from "../assets/images/LithoEvo1.png";
import LithoEvo2 from "../assets/images/LithoEvo2.png";
import LithoEvo3 from "../assets/images/LithoEvo3.png";
import LithoEvo4 from "../assets/images/LithoEvo4.png";




import Fragmentation from "../Components/Gastro_Laser/Fragmentation";

import DustingEffect from "../Components/Gastro_Laser/DustingEffect";

import HoliumSection from "../Components/Gastro_Laser/HoliumSection";

import Reliability from "../Components/Gastro_Laser/Reliability";

import Fibers from "../Components/Gastro_Laser/Fibers";

import Fiber_Recognition from "../Components/Gastro_Laser/Fiber_Recognition";

import Applications from "../Components/Gastro_Laser/Applications";

import Litho35Excellence from "../Components/Litho_35/Litho35Excellence";

import Litho35Reliability from "../Components/Litho_35/Litho35Reliability";

import EvoMachine from "../Components/Gastro_Laser/EvoMachine";



const FeatureCard = ({ number, title, description, image, position }) => (
  <div className={`absolute hidden xl:block w-[330px] min-h-[118px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}>
    <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
      <span className="text-xl font-bold text-white">{number}</span>
    </div>
    <div className="absolute left-0 top-[42px] h-[55px] w-px bg-primary" />
    <div className="flex min-h-[118px] items-center gap-3 px-3 py-3">
      <img src={image} alt={title} className="ml-3 h-[78px] w-[78px] shrink-0 rounded-full object-contain" />
      <div className="min-w-0 flex-1 pr-1">
        <h4 className="text-[12px] font-bold leading-[16px] text-[#102A43]">{title}</h4>
        <p className="mt-1 text-[11px] leading-[16px] text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const MobileFeatureCard = ({ number, title, description, image }) => (
  <div className="relative min-h-[110px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.14)] backdrop-blur-md">
    <div className="absolute left-0 top-0 flex h-9 w-[50px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
      <span className="text-base font-bold text-white">{number}</span>
    </div>
    <div className="flex items-center gap-3 pt-1 pl-6">
      <img src={image} alt={title} className="h-[68px] w-[68px] shrink-0 rounded-full object-contain" />
      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-bold leading-4 text-[#102A43]">{title}</h4>
        <p className="mt-1 text-[11px] leading-4 text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const keypoints = [
  { number: "01", title: "Touchscreen Control Panel", description: "Angled touchscreen for selecting treatment modes and monitoring system status.", image: LithoEvo1, position: "left-0 top-16" },
  { number: "02", title: "Control Buttons & Emergency Stop", description: "Front operating controls and emergency stop for safe system operation.", image: LithoEvo2, position: "bottom-16 left-0" },
  { number: "03", title: "Laser Fiber Connector Port", description: "Front connector interface for securely attaching the treatment fiber.", image: LithoEvo3, position: "right-0 top-16" },
  { number: "04", title: "Caster Wheels", description: "Swiveling caster wheels for easy movement and positioning of the unit.", image: LithoEvo4, position: "bottom-16 right-0" },
];

const LithoEvo = () => {

  return (

    <div className="bg-white">

      <SEO

        title="Litho EVO 35W Holmium Laser | Rental Health Services"

        description="Explore the Litho EVO 35W Holmium Laser System for advanced lithotripsy and soft tissue surgery with innovative Dusting effect."

        keywords="Litho EVO, Holmium laser, 35W laser, lithotripsy, urology rental"

      />

      {/* Product Banner */}

      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">

        <div className="absolute inset-0 z-0">

          <img

            src={bannerBg}

            alt="Litho 35 Watt background"

            className="h-full w-full object-cover"

          />

        </div>



        {/* Soft Overlay */}

        <div className="absolute inset-0 z-[1] bg-white/5"></div>



        {/* Main Content */}

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          {/* Heading */}

          <div className="pt-6 text-center sm:pt-8 lg:pt-12">

            <div className="mb-3 flex items-center justify-center gap-4">

              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">

                GASTRO LASER{" "}

              </span>

              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>

            </div>



            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">

              Litho EVO 35{" "}

              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">

                Watt

              </span>

            </h2>



            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">

              Powerful 35 W lithotripsy performance for precise stone

              fragmentation

              <br className="hidden sm:block" />

              with controlled energy delivery and efficient clinical workflow.

            </p>

          </div>



          {/* Product Area */}

          <div className="relative mx-auto mt-2 max-w-[1040px] sm:mt-3">

            {/* Desktop Feature Cards */}
            {keypoints.map((point) => <FeatureCard key={point.number} {...point} />)}

            {/* Desktop Arrows */}



            {/* LEFT TOP */}

            <div className="absolute left-[345px] top-[116px] hidden items-center xl:flex">

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

              <div className="h-[1px] w-[36px] bg-primary"></div>

              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />

            </div>



            {/* LEFT BOTTOM */}

            <div className="absolute bottom-[116px] left-[345px] hidden items-center xl:flex">

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

              <div className="h-[1px] w-[36px] bg-primary"></div>

              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />

            </div>



            {/* RIGHT TOP */}

            <div className="absolute right-[345px] top-[116px] hidden items-center xl:flex">

              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />

              <div className="h-[1px] w-[36px] bg-primary"></div>

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

            </div>



            {/* RIGHT BOTTOM */}

            <div className="absolute bottom-[116px] right-[345px] hidden items-center xl:flex">

              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />

              <div className="h-[1px] w-[36px] bg-primary"></div>

              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>

            </div>



            {/* Central Machine - Desktop */}

            <div className="relative mx-auto hidden h-[380px] w-full max-w-[550px] items-end justify-center sm:h-[420px] xl:flex xl:h-[480px]">

              <div className="absolute bottom-14 left-1/2 h-36 w-60 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>

              <motion.img

                src={machineImage}

                alt="Quanta System Litho Evo Holmium Laser System"

                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(39,96,150,0.18)] xl:h-[480px]"

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8, ease: "easeOut" }}

              />

            </div>



            {/* Central Machine - Mobile */}

            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 xl:hidden sm:max-w-[350px]">

              <div className="absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>

              <motion.img

                src={machineImage}

                alt="Quanta System Litho Evo Holmium Laser System"

                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[300px]"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8, ease: "easeOut" }}

              />

            </div>



            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 pb-6 sm:px-4 xl:hidden">
              {keypoints.map(({ number, title, description, image }) => (
                <MobileFeatureCard key={number} number={number} title={title} description={description} image={image} />
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* <Litho35Fragmentation />

      <Litho35DustingEffect /> */}

      <Litho35Excellence />

      <Litho35Reliability />

      {/* <Litho35Fibers />

      <Litho35Recognition /> */}

      <Fragmentation />

      <DustingEffect />

      <EvoMachine />

      <HoliumSection />

      <Reliability />

      <Fibers />

      <Fiber_Recognition />

      <Applications />

      <ProductInquireCTA

        title="Ready to Elevate Your Surgical Suite?"

        subtitle="Upgrade your OR capabilities with the Litho EVO 35W Holmium Laser system on flexible rental or purchase terms."

        productName="Litho EVO 35 Watt Laser System"

        productImage={machineImage}

      />

    </div>

  );

};



export default LithoEvo;
