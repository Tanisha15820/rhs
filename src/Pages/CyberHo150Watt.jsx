// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowLeft,
//   CheckCircle,
//   ShieldCheck,
//   Activity,
//   Layers,
//   Cpu,
//   Zap,
// } from "lucide-react";
// import SEO from "../Components/SEO";
// import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

// // Assets
// import bannerBg from "../assets/images/cyber_ho_150_banner.png";
// import machineImage from "../assets/images/cyber_ho_150_machine.png";
// import footswitchImg from "../assets/images/cyber_ho_150_footswitch.png";
// import vaporTunnelImg from "../assets/images/cyber_ho_150_vapor_tunnel.png";

// // Components
// import CyberHo150BPH from "../Components/Cyber_Ho_150/CyberHo150BPH";
// import CyberHo150VaporTunnel from "../Components/Cyber_Ho_150/CyberHo150VaporTunnel";
// import CyberHo150Lithotripsy from "../Components/Cyber_Ho_150/CyberHo150Lithotripsy";
// import CyberHo150MasterPulse from "../Components/Cyber_Ho_150/CyberHo150MasterPulse";
// import CyberHo150Fibers from "../Components/Cyber_Ho_150/CyberHo150Fibers";
// import CyberHo150FiberDetails from "../Components/Cyber_Ho_150/CyberHo150FiberDetails";
// import CyberHo150Applications from "../Components/Cyber_Ho_150/CyberHo150Applications";
// import CyberHo150Specs from "../Components/Cyber_Ho_150/CyberHo150Specs";

// const FeatureCard = ({ number, title, description, image, position }) => {
//   return (
//     <div
//       className={`absolute hidden xl:block w-[300px] h-[105px] rounded-[22px] border border-white/20 bg-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md ${position}`}
//     >
//       <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-blue-600">
//         <span className="text-lg font-bold text-white">{number}</span>
//       </div>

//       <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-blue-600"></div>
//       <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
//         <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-black/40 shadow-sm overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover opacity-90"
//           />
//         </div>

//         <div className="min-w-0 flex-1 pr-2">
//           <h4 className="text-[12px] font-bold text-white leading-tight">
//             {title}
//           </h4>
//           <p className="mt-1 text-[11px] leading-[15px] text-slate-300 line-clamp-2">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MobileFeatureCard = ({ number, title, description, image }) => {
//   return (
//     <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md">
//       <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-blue-600">
//         <span className="text-sm font-bold text-white">{number}</span>
//       </div>

//       <div className="flex items-center gap-3 pt-1 pl-8">
//         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-black/40 overflow-hidden">
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="min-w-0 flex-1">
//           <h4 className="text-xs font-bold text-white">{title}</h4>
//           <p className="mt-0.5 text-[11px] leading-4 text-slate-300 line-clamp-2">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CyberHo150Watt = () => {
//   const generalOverview = [
//     { title: "BPH Treatment", desc: "Gold standard HoLEP procedure." },
//     { title: "Effective Lithotripsy", desc: "Treats even the hardest stones." },
//     { title: "High Frequency Emission", desc: "Up to 100 Hz for extreme dusting." },
//     { title: "Minimized Retropulsion", desc: "Vapor Tunnel & Virtual Basket." },
//     { title: "Reduced Penetration", desc: "0.3 - 0.4 mm depth of penetration." },
//     { title: "Soft Tissue Surgery", desc: "Excellent cutting and hemostasis." },
//     { title: "High Versatility", desc: "Multispecialty platform." },
//   ];

//   return (
//     <div className="bg-slate-50">
//       <SEO
//         title="Cyber Ho 150 Watt - Quanta System Holmium:YAG Laser | Reinforce Healthcare Services"
//         description="Explore the Cyber Ho 150 Holmium laser system for superior BPH HoLEP and stone lithotripsy. Features Vapor Tunnel, Virtual Basket, and MasterPULSE."
//         keywords="Cyber Ho 150, Holmium laser, HoLEP, Vapor Tunnel, Virtual Basket, Lithotripsy"
//       />

//       {/* Product Banner */}
//       <section className="relative min-h-[500px] overflow-hidden bg-slate-900 sm:min-h-[600px] lg:min-h-[680px]">
//         <div className="absolute inset-0 z-0">
//           <img
//             src={bannerBg}
//             alt="Cyber Ho 150 Background"
//             className="h-full w-full object-cover opacity-60"
//           />
//           <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
//         </div>

//         <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-slate-900/90"></div>

//         {/* Main Banner Content */}
//         <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//           <div className="pt-8 text-center sm:pt-10 lg:pt-14">
//             <div className="mb-3 flex items-center justify-center gap-4">
//               <span className="hidden h-[1px] w-9 bg-blue-500 sm:block"></span>
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
//                 THE REVOLUTION IN HOLMIUM SURGERY
//               </span>
//               <span className="hidden h-[1px] w-9 bg-blue-500 sm:block"></span>
//             </div>

//             <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//               Cyber Ho <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">150</span>
//             </h1>

//             <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
//               Cyber Ho Holmium laser (2.1 µm) meets the increasing demand of efficacy and flexibility with a unique multi-application laser platform able to perform both Lithotripsy and HoLEP. Reaches up to 152 W power.
//             </p>
//           </div>

//           <div className="relative mx-auto mt-6 max-w-[1200px] sm:mt-8">
//             {/* Desktop Feature Cards */}
//             <FeatureCard
//               number="01"
//               title="Vapor Tunnel™"
//               description="Direct connection between fiber tip and stone."
//               image={vaporTunnelImg}
//               position="left-6 top-10"
//             />
//             <FeatureCard
//               number="02"
//               title="Virtual Basket™"
//               description="Fragment suction effect reducing retropulsion."
//               image={vaporTunnelImg}
//               position="bottom-14 left-6"
//             />
//             <FeatureCard
//               number="03"
//               title="MasterPULSE"
//               description="Visual feedback driven setting adjustment."
//               image={footswitchImg}
//               position="top-10 right-6"
//             />
//             <FeatureCard
//               number="04"
//               title="Double Footswitch"
//               description="Immediate switch from one emission mode to another."
//               image={footswitchImg}
//               position="bottom-14 right-6"
//             />

//             {/* Central Machine - Desktop */}
//             <div className="relative mx-auto hidden h-[420px] w-full max-w-[500px] items-end justify-center sm:h-[460px] lg:flex lg:h-[520px]">
//               <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
//               <motion.img
//                 src={machineImage}
//                 alt="Cyber Ho 150 Laser System"
//                 className="relative z-10 h-[400px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] lg:h-[480px]"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               />
//             </div>

//             {/* Central Machine - Mobile */}
//             <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-6 lg:hidden">
//               <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl"></div>
//               <motion.img
//                 src={machineImage}
//                 alt="Cyber Ho 150 Laser System"
//                 className="relative z-10 h-[280px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               />
//             </div>

//             {/* Mobile Cards */}
//             <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-3 px-2 pb-8 sm:px-4 lg:hidden">
//               <MobileFeatureCard
//                 number="01"
//                 title="Vapor Tunnel™"
//                 description="Direct connection between fiber tip and stone."
//                 image={vaporTunnelImg}
//               />
//               <MobileFeatureCard
//                 number="02"
//                 title="Virtual Basket™"
//                 description="Fragment suction effect reducing retropulsion."
//                 image={vaporTunnelImg}
//               />
//               <MobileFeatureCard
//                 number="03"
//                 title="MasterPULSE"
//                 description="Visual feedback driven setting adjustment."
//                 image={footswitchImg}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* General Overview Section */}
//       <section className="bg-white py-16 md:py-20 border-b border-slate-100">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid items-center gap-12 lg:grid-cols-12">
//             <div className="lg:col-span-6">
//               <div className="mb-3 flex items-center gap-3">
//                 <span className="h-[2px] w-8 bg-blue-600" />
//                 <p className="text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
//                   General Overview
//                 </p>
//               </div>

//               <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//                 Advanced Power &{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Innovation
//                 </span>
//               </h2>

//                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
//                   General Overview
//                 </p>
//               </div>

//               <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//                 Advanced Power &{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Innovation
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
//                 Cyber Ho 150 can reach up to <strong>152 W power</strong> and brings outstanding innovation by offering the exclusive 
//                 <strong> Vapor Tunnel™</strong>, <strong>Virtual Basket™</strong> and <strong>MasterPULSE</strong> technologies for advanced retropulsion control.
//               </p>


//               <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 {generalOverview.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <CheckCircle className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
//                         {item.title}
//                       </h4>
//                       <p className="mt-0.5 text-xs text-slate-500 leading-snug">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative flex items-center justify-center lg:col-span-6">
//               <div className="relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl">
//                 <div className="mb-6 flex items-center justify-between">
//                   <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
//                     Machine Features
//                   </span>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="rounded-2xl bg-white p-4 shadow-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                         <Activity size={20} />
//                       </div>
//                       <div>
//                         <div className="text-sm font-bold text-slate-900">12" Touchscreen</div>
//                         <div className="text-xs text-slate-500">270° Screen Rotation with Intuitive GUI</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl bg-white p-4 shadow-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
//                         <ShieldCheck size={20} />
//                       </div>
//                       <div>
//                         <div className="text-sm font-bold text-slate-900">RFID Recognition System</div>
//                         <div className="text-xs text-slate-500">Automatic adjustments based on fiber</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl bg-white p-4 shadow-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                         <Zap size={20} />
//                       </div>
//                       <div>
//                         <div className="text-sm font-bold text-slate-900">Quiet Performances</div>
//                         <div className="text-xs text-slate-500">Built-in automatic aperture sensor</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Sections */}
//       <CyberHo150BPH />
//       <CyberHo150VaporTunnel />
//       <CyberHo150Lithotripsy />
//       <CyberHo150MasterPulse />
//       <CyberHo150Fibers />
//       <CyberHo150FiberDetails />
//       <CyberHo150Applications />
//       <CyberHo150Specs />
//       <ProductInquireCTA productName="Cyber Ho 150 Watt Laser System" productImage={machineImage} />
//     </div>
//   );
// };

// export default CyberHo150Watt;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/cyber-ho-150.png";
import articulatedArm from "../assets/images/articulate_arm.png";
import diodeImage from "../assets/images/diode.png";
import hollowFiber from "../assets/images/hollow_fiber.png";
import CyberHo150BPH from "../Components/Cyber_Ho_150/CyberHo150BPH";
import CyberHo150VaporTunnel from "../Components/Cyber_Ho_150/CyberHo150VaporTunnel";
import CyberHo150Lithotripsy from "../Components/Cyber_Ho_150/CyberHo150Lithotripsy";
import CyberHo150MasterPulse from "../Components/Cyber_Ho_150/CyberHo150MasterPulse";
import CyberHo150Fibers from "../Components/Cyber_Ho_150/CyberHo150Fibers";
import CyberHo150FiberDetails from "../Components/Cyber_Ho_150/CyberHo150FiberDetails";
import CyberHo150Applications from "../Components/Cyber_Ho_150/CyberHo150Applications";
import CyberHo150Specs from "../Components/Cyber_Ho_150/CyberHo150Specs";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

/* Feature Card */
const FeatureCard = ({ number, type, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[285px] h-[140px] rounded-[22px] border border-white bg-white/90 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      {/* Blue Number Tab */}
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>

      {/* Blue Border Accent */}
      <div className="absolute left-0 top-[42px] h-[76px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-3">
        {/* Circular Image */}
        <div className="relative ml-2 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_20px_rgba(40,116,189,0.16)]">
          <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-blue-100 bg-white/70">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain p-2"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="min-w-0 flex-1 pr-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
              {type}
            </span>
          </div>
          <h3 className="text-[15px] font-bold leading-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-1 text-[11px] leading-[17px] text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

/* Mobile Feature Card */
const MobileFeatureCard = ({ number, type, title, description, image }) => {
  return (
    <div className="relative min-h-[110px] overflow-hidden rounded-2xl border border-white bg-white/90 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.14)] backdrop-blur-md">
      {/* Number */}
      <div className="absolute left-0 top-0 flex h-9 w-[50px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-base font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1">
        {/* Image */}
        <div className="ml-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 shadow-sm">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-1.5"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-bold uppercase text-primary">
            {type}
          </span>
          <h3 className="mt-0.5 text-sm font-bold text-slate-900">{title}</h3>
          <p className="mt-0.5 text-xs leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2.5 right-3 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

/* SmartXide Page */
const CyberHo150Watt = () => {
  return (
    <div className="bg-white">
      <SEO
        title="SmartXide2 Unique TRIO - CO2 & Diode Laser System"
        description="The accuracy of scanner-assisted CO2 laser and the flexibility of CO2 and diode laser. Advanced ENT laser technology by Reinforce Healthcare Services."
        keywords="SmartXide2 Trio, CO2 laser, diode laser, ENT laser, surgical laser system"
        canonical="/smartxide"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="SmartXide background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Soft Overlay */}
        <div className="absolute inset-0 z-[1] bg-white/5"></div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            {/* Small Heading */}
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
                Holmium Yag Laser{" "}
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
              Cyber HO{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                150 WATT
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-base">
              Cyber Ho 150 can reach up to 152 W power and brings outstanding innovation by offering the 
              <br className="hidden sm:block" />
                exclusive  Vapor Tunnel™, Virtual Basket™ and MasterPULSE technologies.
            </p>

          </div>

          {/* Product Area */}
          <div className="relative mx-auto mt-2 max-w-[1200px] sm:mt-3">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              type="CO₂ LASER"
              title="Articulated Arm"
              description="Precision targeting with maximum flexibility."
              image={articulatedArm}
              position="left-8 top-20"
            />
            <FeatureCard
              number="02"
              type="CO₂ LASER"
              title="Hollow Fiber"
              description="Advanced delivery with hollow fiber technology."
              image={hollowFiber}
              position="bottom-16 left-8"
            />
            <FeatureCard
              number="03"
              type="DIODE LASER"
              title="Module (Fibre)"
              description="Versatile treatment with diode laser module."
              image={diodeImage}
              position="bottom-40 right-8"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[305px] top-[125px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-[120px] left-[305px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-[210px] right-[305px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[380px] w-full max-w-[550px] items-end justify-center sm:h-[420px] lg:flex lg:h-[500px]">
              <div className="absolute bottom-14 left-1/2 h-36 w-60 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"></div>
              <motion.img
                src={machineImage}
                alt="SmartXide2 Unique TRIO laser system"
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(39,96,150,0.18)] lg:h-[500px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden sm:max-w-[350px]">
              <div className="absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImage}
                alt="SmartXide2 Unique TRIO laser system"
                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_15px_rgba(39,96,150,0.18)] sm:h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Feature Cards */}
            <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-3 px-2 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                type="CO₂ LASER"
                title="Articulated Arm"
                description="Precision targeting with maximum flexibility."
                image={articulatedArm}
              />
              <MobileFeatureCard
                number="02"
                type="CO₂ LASER"
                title="Hollow Fiber"
                description="Advanced delivery with hollow fiber technology."
                image={hollowFiber}
              />
              <MobileFeatureCard
                number="03"
                type="DIODE LASER"
                title="Module (Fibre)"
                description="Versatile treatment with diode laser module."
                image={diodeImage}
              />
            </div>
          </div>
        </div>
      </section>
    //       <CyberHo150BPH />
//       <CyberHo150VaporTunnel />
//       <CyberHo150Lithotripsy />
//       <CyberHo150MasterPulse />
       <CyberHo150Fibers />
       <CyberHo150FiberDetails />
       <CyberHo150Applications />
       <CyberHo150Specs />
       <ProductInquireCTA productName="Cyber Ho 150 Watt Laser System" productImage={machineImage} />
    </div>
  );
};

export default CyberHo150Watt;

