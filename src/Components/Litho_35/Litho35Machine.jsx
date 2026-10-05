// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import l1 from "../../assets/images/litho1.png";
// import l2 from "../../assets/images/litho2.png";
// import l3 from "../../assets/images/litho3.png";
// import l4 from "../../assets/images/litho4.png";
// import l6 from "../../assets/images/litho5.png";

// // Desktop key point

// const KeyPoint = ({
//   title,
//   description,
//   position,
//   side = "left",
//   lineWidth = 55,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.96 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.96 }}
//       transition={{ duration: 0.25 }}
//       className={`
//         pointer-events-none
//         absolute
//         z-[100]
//         hidden
//         lg:flex
//         ${side === "bottom" ? "flex-col items-center" : "items-center"}
//         ${position}
//       `}
//     >
//       {/* Right connector */}
//       {side === "right" && (
//         <div className="flex items-center">
//           <div
//             className="h-[1px] bg-[#1677FF]"
//             style={{ width: `${lineWidth}px` }}
//           />

//           <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
//         </div>
//       )}

//       {/* Card */}
//       <div
//         className="
//           min-w-[145px]
//           rounded-[9px]
//           border
//           border-[#2F80ED]/60
//           bg-white
//           px-2.5
//           py-2
//           shadow-[0_6px_20px_rgba(15,23,42,0.07)]
//         "
//       >
//         <div className="flex items-start gap-2">
//           {/* Icon */}
//           <div
//             className="
//               mt-[1px]
//               flex
//               h-[24px]
//               w-[24px]
//               shrink-0
//               items-center
//               justify-center
//               rounded-md
//               bg-[#1677FF]/10
//             "
//           >
//             <div className="h-[11px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
//           </div>

//           {/* Text */}
//           <div>
//             <h4 className="text-[10px] font-semibold leading-tight text-slate-900">
//               {title}
//             </h4>

//             <p className="mt-[2px] whitespace-nowrap text-[7px] leading-[1.4] text-slate-400">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Left connector */}
//       {side === "left" && (
//         <div className="flex items-center">
//           <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />

//           <div
//             className="h-[1px] bg-[#1677FF]"
//             style={{ width: `${lineWidth}px` }}
//           />
//         </div>
//       )}

//       {/* Bottom connector */}
//       {side === "bottom" && (
//         <div className="flex flex-col items-center">
//           <div
//             className="w-[1px] bg-[#1677FF]"
//             style={{ height: `${lineWidth}px` }}
//           />

//           <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
//         </div>
//       )}
//     </motion.div>
//   );
// };

// // Mobile key point

// const MobileKeyPoint = ({ title, description, index }) => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 12,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       exit={{
//         opacity: 0,
//         y: 8,
//       }}
//       transition={{
//         duration: 0.3,
//         delay: index * 0.04,
//       }}
//       className="
//         flex
//         min-h-[58px]
//         items-start
//         gap-2.5
//         rounded-[10px]
//         border
//         border-[#2F80ED]/20
//         bg-white
//         p-2.5
//         shadow-[0_5px_18px_rgba(15,23,42,0.05)]
//       "
//     >
//       {/* Icon */}
//       <div
//         className="
//           flex
//           h-7
//           w-7
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           bg-[#1677FF]/10
//         "
//       >
//         <div className="h-[12px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
//       </div>

//       {/* Text */}
//       <div className="min-w-0">
//         <h4 className="text-[11px] font-semibold leading-[1.3] text-slate-900">
//           {title}
//         </h4>

//         <p className="mt-0.5 text-[9px] leading-[1.4] text-slate-400">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// // Mobile key point data

// const machinePoints = [
//   {
//     title: "Top Handle",
//     description: "Easy Mobility & Handling",
//   },
//   {
//     title: "Touchscreen Display",
//     description: "User Interface & Control",
//   },
//   {
//     title: "Emergency Stop",
//     description: "Instant Safety Shutdown",
//   },
//   {
//     title: "Focusing Optics",
//     description: "Precision Beam Alignment",
//   },
//   {
//     title: "Laser Port",
//     description: "Laser Delivery Output",
//   },
//   {
//     title: "Cooling Vent",
//     description: "Heat Dissipation & Airflow",
//   },
//   {
//     title: "Main Housing",
//     description: "Internal System Protection",
//   },
//   {
//     title: "Lower Support Base",
//     description: "Structural Stability & Support",
//   },
//   {
//     title: "Caster Wheels",
//     description: "Smooth Movement & Positioning",
//   },
// ];

// const Litho35Machine = () => {
//   const [isExploded, setIsExploded] = useState(false);

//   // Space added between machine parts
//   const GAP = 40;

//   const toggleMachine = () => {
//     setIsExploded((prev) => !prev);
//   };

//   const getExplodeStyle = (level) => ({
//     transform: isExploded ? `translateY(${level * GAP}px)` : "translateY(0px)",
//   });

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-[15px]
//       "
//     >
//       {/* Machine area */}
//       <div
//         className={`
//           relative
//           mx-auto
//           flex
//           w-full
//           max-w-[900px]
//           items-center
//           justify-center
//           px-4
//           transition-all
//           duration-500
//           ease-in-out

//           ${
//             isExploded
//               ? `
//                 min-h-[540px]
//                 sm:min-h-[590px]
//                 lg:min-h-[650px]
//               `
//               : `
//                 min-h-[450px]
//                 sm:min-h-[500px]
//                 lg:min-h-[560px]
//               `
//           }
//         `}
//       >
//         {/* Background glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-1/2
//             h-[200px]
//             w-[200px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-[#1677FF]/[0.04]
//             blur-[90px]
//           "
//         />

//         {/* Machine */}
//         <div
//           className={`
//             relative
//             z-20
//             flex
//             cursor-pointer
//             items-center
//             justify-center
//             outline-none

//             w-[190px]
//             sm:w-[210px]
//             lg:w-[220px]

//             transition-all
//             duration-500
//             ease-in-out

//             ${
//               isExploded
//                 ? `
//                   h-[520px]
//                   sm:h-[570px]
//                   lg:h-[630px]
//                 `
//                 : `
//                   h-[430px]
//                   sm:h-[480px]
//                   lg:h-[540px]
//                 `
//             }
//           `}
//           onClick={toggleMachine}
//           role="button"
//           tabIndex={0}
//           aria-label={
//             isExploded ? "Collapse Litho machine" : "Explore Litho machine"
//           }
//           aria-expanded={isExploded}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" || e.key === " ") {
//               e.preventDefault();
//               toggleMachine();
//             }
//           }}
//         >
//           {/* Desktop key points */}
//           <AnimatePresence>
//             {isExploded && (
//               <>
//                 {/* Top Handle */}
//                 <KeyPoint
//                   title="Top Handle"
//                   description="Easy Mobility & Handling"
//                   position="right-[-130px] top-[-3px]"
//                   side="right"
//                   lineWidth={32}
//                 />

//                 {/* Touchscreen Display */}
//                 <KeyPoint
//                   title="Touchscreen Display"
//                   description="User Interface & Control"
//                   position="left-[-150px] top-[70px]"
//                   side="left"
//                   lineWidth={52}
//                 />

//                 {/* Emergency Stop */}
//                 <KeyPoint
//                   title="Emergency Stop"
//                   description="Instant Safety Shutdown"
//                   position="right-[-120px] top-[255px]"
//                   side="right"
//                   lineWidth={55}
//                 />

//                 {/* Focusing Optics */}
//                 <KeyPoint
//                   title="Focusing Optics"
//                   description="Precision Beam Alignment"
//                   position="left-[-120px] top-[200px]"
//                   side="left"
//                   lineWidth={62}
//                 />

//                 {/* Laser Port */}
//                 <KeyPoint
//                   title="Laser Port"
//                   description="Laser Delivery Output"
//                   position="left-[-120px] top-[255px]"
//                   side="left"
//                   lineWidth={52}
//                 />

//                 {/* Cooling Vent */}
//                 <KeyPoint
//                   title="Cooling Vent"
//                   description="Heat Dissipation & Airflow"
//                   position="left-[-140px] top-[315px]"
//                   side="left"
//                   lineWidth={62}
//                 />

//                 {/* Main Housing */}
//                 <KeyPoint
//                   title="Front Panel"
//                   description="Internal System Protection"
//                   position="right-[-120px] top-[355px]"
//                   side="right"
//                   lineWidth={65}
//                 />

//                 {/* Caster Wheels */}
//                 <KeyPoint
//                   title="Caster Wheels"
//                   description="Smooth Movement & Positioning"
//                   position="right-[-150px] top-[550px]"
//                   side="right"
//                   lineWidth={60}
//                 />
//               </>
//             )}
//           </AnimatePresence>

//           {/* Machine scale wrapper */}
//           <div
//             className="
//               absolute
//               left-1/2
//               top-1/2
//               h-[760px]
//               w-[320px]
//               -translate-x-1/2
//               -translate-y-1/2
//               origin-center
//               scale-[0.58]
//               sm:scale-[0.64]
//               lg:scale-[0.72]
//             "
//           >
//             {/* Part 1 */}
//             <img
//               src={l1}
//               alt="Litho Top Control Unit"
//               draggable={false}
//               style={getExplodeStyle(-2)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-10
//                 left-[34px]
//                 top-[20px]
//                 h-auto
//                 w-[252px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />

//             {/* Part 2 */}
//             <img
//               src={l2}
//               alt="Litho Optical Unit"
//               draggable={false}
//               style={getExplodeStyle(-1)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-20
//                 left-[58px]
//                 top-[225px]
//                 h-auto
//                 w-[202px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />

//             {/* Part 3 */}
//             <img
//               src={l3}
//               alt="Litho Main Body"
//               draggable={false}
//               style={getExplodeStyle(0)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-30
//                 left-[46px]
//                 top-[370px]
//                 h-auto
//                 w-[228px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />

//             {/* Part 4 */}
//             <img
//               src={l4}
//               alt="Litho Lower Support Base"
//               draggable={false}
//               style={getExplodeStyle(1)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-40
//                 left-[60px]
//                 top-[520px]
//                 h-auto
//                 w-[200px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />

//             {/* Left wheel */}
//             <img
//               src={l6}
//               alt="Litho Left Caster Wheel"
//               draggable={false}
//               style={getExplodeStyle(2)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-50
//                 left-[78px]
//                 top-[625px]
//                 h-auto
//                 w-[74px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />

//             {/* Right wheel */}
//             <img
//               src={l6}
//               alt="Litho Right Caster Wheel"
//               draggable={false}
//               style={getExplodeStyle(2)}
//               className="
//                 pointer-events-none
//                 absolute
//                 z-50
//                 left-[168px]
//                 top-[625px]
//                 h-auto
//                 w-[74px]
//                 select-none
//                 object-contain
//                 transition-transform
//                 duration-500
//                 ease-in-out
//               "
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile features */}
//       <div className="mx-auto mt-2 w-full max-w-[520px] px-4 lg:hidden">
//         {/* Tap button */}
//         <motion.button
//           type="button"
//           onClick={toggleMachine}
//           whileTap={{ scale: 0.97 }}
//           className="
//             mx-auto
//             flex
//             items-center
//             gap-2
//             rounded-full
//             border
//             border-[#1677FF]/15
//             bg-[#1677FF]/[0.04]
//             px-3.5
//             py-2
//             text-[10px]
//             font-medium
//             text-[#1677FF]
//           "
//         >
//           <span
//             className={`
//               flex
//               h-5
//               w-5
//               items-center
//               justify-center
//               rounded-full
//               bg-[#1677FF]
//               text-[14px]
//               leading-none
//               text-white
//               transition-transform
//               duration-300

//               ${isExploded ? "rotate-45" : ""}
//             `}
//           >
//             +
//           </span>

//           {isExploded ? "Hide machine details" : "Tap to explore machine"}
//         </motion.button>

//         {/* Mobile detail cards */}
//         <AnimatePresence>
//           {isExploded && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 height: 0,
//               }}
//               animate={{
//                 opacity: 1,
//                 height: "auto",
//               }}
//               exit={{
//                 opacity: 0,
//                 height: 0,
//               }}
//               transition={{
//                 duration: 0.4,
//                 ease: "easeOut",
//               }}
//               className="overflow-hidden"
//             >
//               <div
//                 className="
//                   mt-4
//                   grid
//                   grid-cols-1
//                   gap-2
//                   min-[430px]:grid-cols-2
//                 "
//               >
//                 {machinePoints.map((point, index) => (
//                   <MobileKeyPoint
//                     key={point.title}
//                     title={point.title}
//                     description={point.description}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Litho35Machine;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import assembled from "../../assets/images/litho-pdf/transparent/assembled.png";
import control from "../../assets/images/litho-pdf/transparent/part-control.png";
import optics from "../../assets/images/litho-pdf/transparent/part-optics.png";
import body from "../../assets/images/litho-pdf/transparent/part-body-support.png";
import wheelLeft from "../../assets/images/litho-pdf/transparent/wheelLeft.png";
import wheelRight from "../../assets/images/litho-pdf/transparent/wheelRight.png";
import MachineViewport from "./MachineViewport.jsx";
import useMachineAssembly from "./useMachineAssembly.js";

const SOURCE_HEIGHT = 457;
const MACHINE = { x: 315, y: 52, width: 170, height: 492 };
const SCALE = MACHINE.height / SOURCE_HEIGHT;

// The slices are taken from the same front-view render as `assembled`, so at
// their home positions they reproduce that image exactly, without ghost parts.
const PARTS = [
  { id: "control", name: "Top control unit", y: 0, end: 103, offset: -38, image: control },
  { id: "optics", name: "Optical head", y: 103, end: 209, offset: -12, image: optics },
  { id: "body", name: "Main housing & support", y: 209, end: 416, offset: 18, image: body },
  { id: "wheels", name: "Caster wheels", offset: 54, separate: true },
];
const LABELS = [
  { id: "handle", x: 554, y: 13, side: "right", title: "Top Handle", note: "Easy mobility & handling", part: "control", width: 188 },
  { id: "display", x: 74, y: 48, side: "left", title: "Touchscreen Display", note: "User interface & control", part: "control", width: 195 },
  { id: "focus", x: 74, y: 166, side: "left", title: "Focusing Optics", note: "Precision beam alignment", part: "optics", width: 188 },
  { id: "laser", x: 74, y: 222, side: "left", title: "Laser Port", note: "Laser delivery output", part: "optics", width: 168 },
  { id: "emergency", x: 550, y: 222, side: "right", title: "Emergency Stop", note: "Quick safety shutdown", part: "optics", width: 170 },
  { id: "vent", x: 84, y: 284, side: "left", title: "Cooling Vent", note: "Heat dissipation & airflow", part: "body", width: 188 },
  { id: "panel", x: 550, y: 361, side: "right", title: "Front Panel", note: "Protects internal systems", part: "body", width: 170 },
  { id: "wheels", x: 570, y: 562, side: "right", title: "Caster Wheels", note: "Smooth movement & positioning", part: "wheels", width: 188 },
];

function Callout({ item }) {
  const height = 44;
  const lineY = item.y + height / 2;
  const edgeX = item.side === "left" ? MACHINE.x : MACHINE.x + MACHINE.width;
  const boxEdge = item.side === "left" ? item.x + item.width : item.x;
  return (
    <g aria-label={`${item.title}: ${item.note}`} className="hidden lg:inline">
      <path d={`M ${edgeX} ${lineY} H ${boxEdge}`} className="fill-none stroke-[#2189ff] [stroke-width:1]" />
      <circle cx={edgeX} cy={lineY} r="3.3" className="fill-[#2189ff]" />
      <rect x={item.x} y={item.y} width={item.width} height={height} rx="10" className="fill-white stroke-[#a4c9ff] [stroke-width:1.1] [filter:drop-shadow(0_5px_10px_#183b4b12)]" />
      <rect x={item.x + 10} y={item.y + 10} width="24" height="24" rx="7" className="fill-[#e8f2ff]" />
      <path d={`M ${item.x + 17} ${item.y + 27} l 8 -8`} className="fill-none stroke-[#2189ff] [stroke-width:2.5] [stroke-linecap:round]" />
      <text x={item.x + 42} y={item.y + 18} className="fill-[#192f3a] text-[10px] font-bold">{item.title}</text>
      <text x={item.x + 42} y={item.y + 32} className="fill-[#8395a0] text-[7.5px]">{item.note}</text>
    </g>
  );
}

function LithoIllustration({ assembly }) {
  const { phase, showParts, machineOpacity, showCallouts, getPartStyle } = assembly;
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 680" preserveAspectRatio="xMidYMin slice" role="img" aria-label="Interactive Litho 35 Watt machine assembly view">
      <image href={assembled} data-machine-part="" className="cursor-pointer" x={MACHINE.x} y={MACHINE.y} width={MACHINE.width} height={MACHINE.height} preserveAspectRatio="none" style={{ opacity: machineOpacity, transition: "opacity 150ms ease" }} />
      {showParts && PARTS.map((part, rank) => {
        const motionStyle = getPartStyle(rank, `translateY(${part.offset}px)`);
        if (part.separate) {
          const wheelScale = SCALE * 0.52;
          const wheelWidth = 52 * wheelScale;
          const wheelHeight = 66 * wheelScale;
          const wheelTop = MACHINE.y + 418 * SCALE;
          return (
            <g key={part.id} data-machine-part="" className="cursor-pointer" style={motionStyle}>
              <image href={wheelLeft} x={MACHINE.x + 30 * SCALE - wheelWidth / 2} y={wheelTop} width={wheelWidth} height={wheelHeight} preserveAspectRatio="none" />
              <image href={wheelRight} x={MACHINE.x + 128 * SCALE - wheelWidth / 2} y={wheelTop} width={wheelWidth} height={wheelHeight} preserveAspectRatio="none" />
            </g>
          );
        }
        return (
          <image
            key={part.id}
            href={part.image}
            data-machine-part=""
            x={MACHINE.x}
            y={MACHINE.y + part.y * SCALE}
            width={MACHINE.width}
            height={(part.end - part.y) * SCALE}
            preserveAspectRatio="none"
            className="cursor-pointer"
            style={motionStyle}
          />
        );
      })}
      {showCallouts && LABELS.map((item) => <Callout key={item.id} item={item} />)}
    </svg>
  );
}

function getStatus(assembly) {
  const { phase } = assembly;
  if (phase === "assembled") return "Click the machine to explore its components.";
  if (phase === "preparingOut") return "Revealing the machine components…";
  if (phase === "exploding") return "Components are separating in sequence…";
  if (phase === "exploded") return "Click the machine or Reassemble to put it back together.";
  if (phase === "handoffIn") return "Restoring the assembled machine…";
  return "Components are reassembling in reverse order…";
}

// Mobile Key Point Card

const MobileKeyPoint = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="
        flex
        min-h-[72px]
        items-start
        gap-3
        rounded-xl
        border
        border-[#2F80ED]/20
        bg-white
        p-3
        shadow-[0_5px_18px_rgba(15,23,42,0.05)]
      "
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1677FF]/10">
        <div className="h-[14px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
      </div>

      <div className="min-w-0">
        <h4 className="text-[12px] font-semibold leading-[1.3] text-slate-900">{title}</h4>
        <p className="mt-1 text-[10px] leading-[1.4] text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Litho35Machine() {
  const assembly = useMachineAssembly(PARTS.length);
  const isExpanded = assembly.phase !== "assembled" && assembly.phase !== "handoffIn";
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[90px]">
      {/* Machine area */}

      <div className="relative mx-auto flex w-full max-w-[760px] items-start justify-center px-4 sm:px-5 min-h-[460px] sm:min-h-[440px] lg:min-h-[620px] lg:items-center">
        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-[42%] h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1CAFED]/[0.06] blur-[75px] sm:h-[150px] sm:w-[150px] lg:top-1/2 lg:blur-[90px]" />

        {/* Machine */}

        <div className="relative w-[600px] max-w-none shrink-0 sm:w-full sm:max-w-[480px] lg:max-w-[680px]">
          <MachineViewport onMachineClick={assembly.toggle}>
            <LithoIllustration assembly={assembly} />
          </MachineViewport>
        </div>
      </div>

      {/* Status */}

      <div className="mx-auto mt-4 w-full max-w-xl px-4 text-center" aria-live="polite">
        <p className="text-xs font-semibold text-slate-700">{getStatus(assembly)}</p>
        {assembly.phase === "exploded" && (
          <button
            type="button"
            onClick={assembly.assemble}
            className="mt-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Reassemble
          </button>
        )}
      </div>

      {/* Mobile features */}

      <div className="mx-auto mt-9 w-full max-w-[520px] px-4 lg:hidden">
        {/* Tap hint */}

        <motion.button
          type="button"
          onClick={assembly.toggle}
          whileTap={{ scale: 0.97 }}
          className="mx-auto flex items-center gap-2 rounded-full border border-[#1677FF]/15 bg-[#1677FF]/[0.04] px-4 py-2 text-[11px] font-medium text-[#1677FF]"
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-[#1677FF] text-[14px] leading-none text-white transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
          >
            +
          </span>

          {isExpanded ? "Hide machine details" : "Tap to explore machine"}
        </motion.button>

        {/* Mobile detail cards */}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2">
                {LABELS.map((item, index) => (
                  <MobileKeyPoint key={item.id} title={item.title} description={item.note} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

