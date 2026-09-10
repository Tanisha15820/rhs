import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import surgico1 from "../../assets/images/surgico1.png";
import surgico2 from "../../assets/images/surgico2.png";
import surgico3 from "../../assets/images/surgico3.png";
import surgico4 from "../../assets/images/surgico4.png";
import surgico5 from "../../assets/images/surgico5.png";

// ======================================================
// DESKTOP KEY POINT
// ======================================================

const KeyPoint = ({
  title,
  description,
  position,
  side = "left",
  lineWidth = 55,
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
        ${side === "bottom" ? "flex-col items-center" : "items-center"}
        ${position}
      `}
    >
      {/* Right Connector */}
      {side === "right" && (
        <div className="flex items-center">
          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />

          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}

      {/* Key Point Card */}
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
          {/* Blue icon */}
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

      {/* Left Connector */}
      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />

          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />
        </div>
      )}

      {/* Bottom Connector */}
      {side === "bottom" && (
        <div className="flex flex-col items-center">
          <div
            className="w-[1px] bg-[#1677FF]"
            style={{ height: `${lineWidth}px` }}
          />

          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}
    </motion.div>
  );
};

// ======================================================
// MOBILE KEY POINT
// ======================================================

const MobileKeyPoint = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
      }}
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
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#1677FF]/10
        "
      >
        <div className="h-[14px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
      </div>

      <div className="min-w-0">
        <h4 className="text-[12px] font-semibold leading-[1.3] text-slate-900">
          {title}
        </h4>

        <p className="mt-1 text-[10px] leading-[1.4] text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// ======================================================
// MACHINE POINTS
// ======================================================

const machinePoints = [
  {
    title: "Articulated Arm",
    description: "Flexible Laser Beam Delivery",
  },
  {
    title: "Laser Source Module",
    description: "Core Energy Delivery System",
  },
  {
    title: "Scanner Handpiece",
    description: "Precision Surgical Output",
  },
  {
    title: "Touchscreen Display",
    description: "Treatment Interface",
  },
  {
    title: "Emergency Stop",
    description: "Immediate Safety Shutdown",
  },
  {
    title: "Control Panel",
    description: "System Controls",
  },
  {
    title: "Mobile Base",
    description: "Stable & Easy Mobility",
  },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

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
        py-12
        sm:py-16
        lg:py-[90px]
      "
    >
      {/* ==================================================
          MACHINE AREA
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[390px]
          w-full
          max-w-[760px]
          items-start
          justify-center
          px-4

          sm:min-h-[450px]
          sm:px-5

          lg:min-h-[580px]
          lg:items-center
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[43%]
            h-[150px]
            w-[150px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1CAFED]/[0.07]
            blur-[75px]

            sm:h-[180px]
            sm:w-[180px]

            lg:top-1/2
            lg:h-[230px]
            lg:w-[230px]
            lg:blur-[100px]
          "
        />

        {/* ==================================================
            MACHINE
        ================================================== */}

        {/* MACHINE */}

        <div
          className="
    relative
    flex
    cursor-pointer
    justify-center
    outline-none

    min-h-[380px]
    w-[180px]

    sm:min-h-[420px]
    sm:w-[200px]

    lg:min-h-[430px]
    lg:w-[220px]
  "
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-label={
            isExpanded
              ? "Collapse SurgiCO machine details"
              : "Expand SurgiCO machine details"
          }
          aria-expanded={isExpanded}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMachine();
            }
          }}
        >
          {/* ======================================================
      DESKTOP KEY POINTS
  ====================================================== */}

          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Articulated Arm */}
                <KeyPoint
                  title="Articulated Arm"
                  description="Flexible Laser Beam Delivery"
                  position="left-[-160px] top-[10px]"
                  side="bottom"
                  lineWidth={30}
                />

                {/* Laser Source */}
                <KeyPoint
                  title="Laser Source Module"
                  description="Core Energy Delivery System"
                  position="left-[-285px] top-[145px]"
                  side="left"
                  lineWidth={50}
                />

                {/* Scanner */}
                <KeyPoint
                  title="Scanner Handpiece"
                  description="Precision Surgical Output"
                  position="right-[-260px] top-[95px]"
                  side="right"
                  lineWidth={55}
                />

                {/* Screen */}
                <KeyPoint
                  title="Touchscreen Display"
                  description="Treatment Interface"
                  position="right-[-245px] top-[210px]"
                  side="right"
                  lineWidth={48}
                />

                {/* Emergency */}
                <KeyPoint
                  title="Emergency Stop"
                  description="Immediate Safety Shutdown"
                  position="left-[-285px] top-[300px]"
                  side="left"
                  lineWidth={50}
                />

                {/* Controls */}
                <KeyPoint
                  title="Control Panel"
                  description="System Controls"
                  position="right-[-235px] top-[310px]"
                  side="right"
                  lineWidth={48}
                />

                {/* Base */}
                <KeyPoint
                  title="Mobile Base"
                  description="Stable & Easy Mobility"
                  position="left-[-265px] top-[410px]"
                  side="left"
                  lineWidth={45}
                />
              </>
            )}
          </AnimatePresence>

          {/* ======================================================
      MAIN MACHINE STACK
  ====================================================== */}

          <div
            className="
      relative
      z-10
      flex
      w-full
      flex-col
      items-center
    "
          >
            {/* ====================================================
        SURGICO 1
        ARTICULATED ARM + SCANNER
    ==================================================== */}

            <motion.img
              src={surgico1}
              alt="SurgiCO articulated arm and scanner"
              draggable={false}
              className="
        relative
        z-30
        block
        h-auto
        w-full
        select-none
        object-contain
      "
              animate={{
                x: isExpanded ? 0 : 0,
                y: isExpanded ? -25 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />

            {/* ====================================================
        SURGICO 3
        TOUCHSCREEN
    ==================================================== */}

            <motion.div
              className="
        relative
        z-20
        mt-[-26px]
        w-[52%]

        sm:mt-[-30px]

        lg:mt-[-34px]
      "
              animate={{
                x: isExpanded ? -8 : 0,
                y: isExpanded ? 35 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={surgico3}
                alt="SurgiCO touchscreen"
                draggable={false}
                className="
          block
          h-auto
          w-full
          select-none
          object-contain
        "
              />
            </motion.div>

            {/* ====================================================
        SURGICO 4
        CONTROL BODY
    ==================================================== */}

            <motion.div
              className="
        relative
        z-10
        mt-[-8px]
        w-[48%]

        sm:mt-[-9px]

        lg:mt-[-10px]
      "
              animate={{
                x: isExpanded ? 7 : 0,
                y: isExpanded ? 65 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={surgico4}
                alt="SurgiCO control panel body"
                draggable={false}
                className="
          block
          h-auto
          w-full
          select-none
          object-contain
        "
              />
            </motion.div>

            {/* ====================================================
        SURGICO 5
        MOBILE BASE
    ==================================================== */}

            <motion.div
              className="
        relative
        z-[5]
        mt-[-3px]
        w-[61%]
      "
              animate={{
                x: isExpanded ? -5 : 0,
                y: isExpanded ? 90 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img
                src={surgico5}
                alt="SurgiCO mobile base"
                draggable={false}
                className="
          block
          h-auto
          w-full
          select-none
          object-contain
        "
              />
            </motion.div>
          </div>

          {/* ======================================================
      SURGICO 2
      BLUE LASER SOURCE MODULE
  ====================================================== */}

          <motion.img
            src={surgico2}
            alt="SurgiCO laser source module"
            draggable={false}
            className="
      absolute
      z-40
      h-auto
      select-none
      object-contain

      left-[31px]
      top-[132px]
      w-[36px]

      sm:left-[35px]
      sm:top-[146px]
      sm:w-[40px]

      lg:left-[39px]
      lg:top-[159px]
      lg:w-[44px]
    "
            animate={{
              x: isExpanded ? -45 : 0,
              y: isExpanded ? 10 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </div>
      </div>

      {/* ==================================================
          MOBILE MACHINE DETAILS
      ================================================== */}

      <div className="mx-auto mt-10 w-full max-w-[520px] px-4 lg:hidden">
        {/* Explore Button */}

        <motion.button
          type="button"
          onClick={toggleMachine}
          whileTap={{ scale: 0.97 }}
          className="
            mx-auto
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#1677FF]/15
            bg-[#1677FF]/[0.04]
            px-4
            py-2
            text-[11px]
            font-medium
            text-[#1677FF]
          "
        >
          <span
            className={`
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#1677FF]
              text-[14px]
              leading-none
              text-white
              transition-transform
              duration-300

              ${isExpanded ? "rotate-45" : ""}
            `}
          >
            +
          </span>

          {isExpanded ? "Hide machine details" : "Tap to explore SurgiCO"}
        </motion.button>

        {/* Mobile Detail Cards */}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-2.5
                  min-[430px]:grid-cols-2
                "
              >
                {machinePoints.map((point, index) => (
                  <MobileKeyPoint
                    key={point.title}
                    title={point.title}
                    description={point.description}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurgicoMachine;
