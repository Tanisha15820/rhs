import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import surgico1 from "../../assets/images/surgico1.png";
import surgico2 from "../../assets/images/surgico2.png";
import surgico3 from "../../assets/images/surgico3.png";
import surgico4 from "../../assets/images/surgico4.png";
import surgico5 from "../../assets/images/surgico5.png";

/* Desktop Key Point */

const KeyPoint = ({
  title,
  description,
  position,
  side = "left",
  lineWidth = 50,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`
        pointer-events-none
        absolute
        z-[100]
        hidden
        lg:flex
        items-center
        ${position}
      `}
    >
      {/* Right connector */}

      {side === "right" && (
        <div className="flex items-center">
          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />

          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}

      {/* Card */}

      <div
        className="
          min-w-[150px]
          rounded-[10px]
          border
          border-[#2F80ED]/60
          bg-white
          px-3
          py-2.5
          shadow-[0_8px_24px_rgba(15,23,42,0.08)]
        "
      >
        <div className="flex items-start gap-2">
          {/* Icon */}

          <div
            className="
              mt-[2px]
              flex
              h-[26px]
              w-[26px]
              shrink-0
              items-center
              justify-center
              rounded-md
              bg-[#1677FF]/10
            "
          >
            <div className="h-[13px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
          </div>

          {/* Content */}

          <div>
            <h4 className="text-[11px] font-semibold leading-tight text-slate-900">
              {title}
            </h4>

            <p className="mt-[3px] text-[8px] leading-[1.4] text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Left connector */}

      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />

          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />
        </div>
      )}
    </motion.div>
  );
};

/* Main Component */

const SurgicoMachine = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMachine = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-[25px]
pb-[100px]
        lg:block
      "
    >
      {/* Machine Area */}

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[720px]
          items-start
          justify-center
          px-4
          min-h-[520px]
          lg:items-start
        "
      >
        {/* Machine */}

        <div
          className="
            relative
            flex
            min-h-[500px]
            w-[220px]
            cursor-pointer
            justify-center
            outline-none
          "
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-label={
            isExpanded ? "Collapse machine details" : "Expand machine details"
          }
          aria-expanded={isExpanded}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMachine();
            }
          }}
        >
          {/* Desktop Key Points */}

          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Articulated Arm */}

                <KeyPoint
                  title="Articulated Arm"
                  description="Flexible laser beam delivery"
                  position="left-[-115px] top-[25px]"
                  side="left"
                  lineWidth={45}
                />

                {/* Scanner Handpiece */}

                <KeyPoint
                  title="Scanner Handpiece"
                  description="Precision surgical output"
                  position="right-[-150px] top-[120px]"
                  side="right"
                  lineWidth={45}
                />

                {/* Main Laser Unit */}

                <KeyPoint
                  title="Main Laser Unit"
                  description="Core laser generation module"
                  position="left-[-150px] top-[220px]"
                  side="left"
                  lineWidth={50}
                />

                {/* Touchscreen Display */}

                <KeyPoint
                  title="Touchscreen Display"
                  description="Treatment interface"
                  position="right-[-160px] top-[290px]"
                  side="right"
                  lineWidth={50}
                />

                {/* Emergency Stop */}

                <KeyPoint
                  title="Emergency Stop"
                  description="Immediate safety shutdown"
                  position="left-[-145px] top-[380px]"
                  side="left"
                  lineWidth={48}
                />

                {/* Control Panel */}

                <KeyPoint
                  title="Control Panel"
                  description="System controls"
                  position="right-[-130px] top-[405px]"
                  side="right"
                  lineWidth={48}
                />

                {/* Mobile Base */}

                <KeyPoint
                  title="Mobile Base"
                  description="Stable movement and support"
                  position="left-[-165px] top-[530px]"
                  side="left"
                  lineWidth={45}
                />

                {/* Caster Wheels */}

                <KeyPoint
                  title="Caster Wheels"
                  description="Easy mobility"
                  position="right-[-160px] top-[570px]"
                  side="right"
                  lineWidth={45}
                />
              </>
            )}
          </AnimatePresence>

          {/* Machine Scale Wrapper */}

          <motion.div
            className="
              absolute
              left-1/2
              top-0
              h-[680px]
              w-[300px]
              -translate-x-1/2
            "
            animate={{
              scale: 0.8,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "top center",
            }}
          >
            {/* SURGICO 1 - TOP ARTICULATED ARM */}

            <motion.img
              src={surgico1}
              alt="SurgiCO Articulated Arm"
              draggable={false}
              animate={{
                y: isExpanded ? -20 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                z-10
                top-[0px]
                left-[32px]
                h-auto
                w-[235px]
                select-none
                object-contain
              "
            />

            {/* SURGICO 2 - SCANNER HANDPIECE */}

            <motion.img
              src={surgico2}
              alt="SurgiCO Scanner Handpiece"
              draggable={false}
              animate={{
                y: isExpanded ? 20 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                z-20
                top-[223px]
                left-[55px]
                h-auto
                w-[115px]
                select-none
                object-contain
              "
            />

            {/* SURGICO 3 - DISPLAY / UPPER BODY */}

            <motion.img
              src={surgico3}
              alt="SurgiCO Touchscreen Display"
              draggable={false}
              animate={{
                y: isExpanded ? 50 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                z-10
                top-[297px]
                left-[65px]
                h-auto
                w-[169px]
                select-none
                object-contain
              "
            />

            {/* SURGICO 4 - MAIN MACHINE BODY */}

            <motion.img
              src={surgico4}
              alt="SurgiCO Main Laser Unit"
              draggable={false}
              animate={{
                y: isExpanded ? 80 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                z-10
                top-[386px]
                left-[67px]
                h-auto
                w-[165px]
                select-none
                object-contain
              "
            />

            {/* SURGICO 5 - BOTTOM MOBILE BASE */}

            <motion.img
              src={surgico5}
              alt="SurgiCO Mobile Base"
              draggable={false}
              animate={{
                y: isExpanded ? 110 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                z-10
                top-[532px]
                left-[44px]
                h-auto
                w-[211px]
                select-none
                object-contain
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SurgicoMachine;
