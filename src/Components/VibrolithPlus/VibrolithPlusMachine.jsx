import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import machineImg from "../../assets/images/vibrolith_plus_hero.png";

const KeyPoint = ({ title, description, position, side = "left", lineWidth = 55 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`pointer-events-none absolute z-[100] hidden lg:flex ${side === "bottom" ? "flex-col items-center" : "items-center"} ${position}`}
    >
      {side === "right" && (
        <div className="flex items-center">
          <div className="h-[1px] bg-[#1677FF]" style={{ width: `${lineWidth}px` }} />
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}

      <div className="min-w-[150px] rounded-[10px] border border-[#2F80ED]/60 bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="flex items-start gap-2">
          <div className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md bg-[#1677FF]/10">
            <div className="h-[13px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
          </div>
          <div>
            <h4 className="text-[11px] font-semibold leading-tight text-slate-900">{title}</h4>
            <p className="mt-[3px] text-[8px] leading-[1.4] text-slate-400">{description}</p>
          </div>
        </div>
      </div>

      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
          <div className="h-[1px] bg-[#1677FF]" style={{ width: `${lineWidth}px` }} />
        </div>
      )}

      {side === "bottom" && (
        <div className="flex flex-col items-center">
          <div className="w-[1px] bg-[#1677FF]" style={{ height: `${lineWidth}px` }} />
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}
    </motion.div>
  );
};

const MobileKeyPoint = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex min-h-[72px] items-start gap-3 rounded-xl border border-[#2F80ED]/20 bg-white p-3 shadow-[0_5px_18px_rgba(15,23,42,0.05)]"
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

const machinePoints = [
  { title: "Ultrasonic Handpiece", description: "Fine Fragmentation" },
  { title: "Pneumatic Handpiece", description: "Coarse Fragmentation" },
  { title: "Combined Control Unit", description: "Dual System Control" },
  { title: "Suction System", description: "Stone Evacuation" },
  { title: "Foot Switch", description: "Hands-free Operation" },
];

const VibrolithPlusMachine = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMachine = () => setIsExpanded((prev) => !prev);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[90px]">
      <div className="relative mx-auto flex w-full max-w-[720px] items-start justify-center px-4 sm:px-5 min-h-[340px] sm:min-h-[390px] lg:min-h-[280px] lg:items-center">
        
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-[42%] h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1CAFED]/[0.06] blur-[75px] sm:h-[150px] sm:w-[150px] lg:top-1/2 lg:blur-[90px]" />

        <div
          className="relative flex cursor-pointer justify-center outline-none min-h-[400px] w-[220px] xs:w-[240px] sm:w-[280px] lg:min-h-[450px] lg:w-[340px] lg:max-w-full"
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-label={isExpanded ? "Collapse machine details" : "Expand machine details"}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMachine(); } }}
        >
          <AnimatePresence>
            {isExpanded && (
              <>
                <KeyPoint title="Ultrasonic Handpiece" description="Fine Fragmentation" position="left-[-180px] top-[40px]" side="left" lineWidth={40} />
                <KeyPoint title="Pneumatic Handpiece" description="Coarse Fragmentation" position="right-[-180px] top-[80px]" side="right" lineWidth={50} />
                <KeyPoint title="Combined Control Unit" description="Dual System Control" position="left-[-190px] top-[150px]" side="left" lineWidth={45} />
                <KeyPoint title="Suction System" description="Stone Evacuation" position="right-[-160px] top-[220px]" side="right" lineWidth={45} />
                <KeyPoint title="Foot Switch" description="Hands-free Operation" position="left-[-160px] top-[260px]" side="left" lineWidth={40} />
              </>
            )}
          </AnimatePresence>

          <div className="relative z-10 flex h-[450px] w-full items-center justify-center">
            {/* Top Part */}
            <motion.img
              src={machineImg}
              alt="Vibrolith Plus Machine Top"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}
              animate={{ y: isExpanded ? -50 : 0, x: isExpanded ? 20 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Mid Top Part */}
            <motion.img
              src={machineImg}
              alt="Vibrolith Plus Machine Mid Top"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
              style={{ clipPath: "polygon(0 30%, 100% 30%, 100% 55%, 0 55%)" }}
              animate={{ y: isExpanded ? -15 : 0, x: isExpanded ? -25 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Mid Bottom Part */}
            <motion.img
              src={machineImg}
              alt="Vibrolith Plus Machine Mid Bottom"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
              style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 80%, 0 80%)" }}
              animate={{ y: isExpanded ? 20 : 0, x: isExpanded ? 20 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Bottom Part */}
            <motion.img
              src={machineImg}
              alt="Vibrolith Plus Machine Bottom"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-contain mix-blend-multiply"
              style={{ clipPath: "polygon(0 80%, 100% 80%, 100% 100%, 0 100%)" }}
              animate={{ y: isExpanded ? 55 : 0, x: isExpanded ? -15 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 w-full max-w-[520px] px-4 lg:hidden">
        <motion.button
          type="button"
          onClick={toggleMachine}
          whileTap={{ scale: 0.97 }}
          className="mx-auto flex items-center gap-2 rounded-full border border-[#1677FF]/15 bg-[#1677FF]/[0.04] px-4 py-2 text-[11px] font-medium text-[#1677FF]"
        >
          <span className={`flex h-5 w-5 items-center justify-center rounded-full bg-[#1677FF] text-[14px] leading-none text-white transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>
            +
          </span>
          {isExpanded ? "Hide machine details" : "Tap to explore machine"}
        </motion.button>

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
                {machinePoints.map((point, index) => (
                  <MobileKeyPoint key={point.title} title={point.title} description={point.description} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VibrolithPlusMachine;
