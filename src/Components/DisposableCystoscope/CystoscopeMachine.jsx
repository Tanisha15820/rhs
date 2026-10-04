import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import scopePart from "../../assets/images/Cystoscope1.png";
import machinePart from "../../assets/images/Cystoscope2.png";

/* =========================================================
   DESKTOP KEY POINT
========================================================= */

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

        ${side === "bottom"
                    ? "flex-col items-center"
                    : side === "top"
                        ? "flex-col items-center"
                        : "items-center"
                }

        ${position}
      `}
        >
            {/* RIGHT CONNECTOR */}

            {side === "right" && (
                <div className="flex items-center">
                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{ width: `${lineWidth}px` }}
                    />

                    <div className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#1677FF]" />
                </div>
            )}

            {/* TOP CONNECTOR */}

            {side === "top" && (
                <div className="flex flex-col items-center">
                    <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />

                    <div
                        className="w-[1px] bg-[#1677FF]"
                        style={{ height: `${lineWidth}px` }}
                    />
                </div>
            )}

            {/* CARD */}

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

            {/* LEFT CONNECTOR */}

            {side === "left" && (
                <div className="flex items-center">
                    <div className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#1677FF]" />

                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{ width: `${lineWidth}px` }}
                    />
                </div>
            )}

            {/* BOTTOM CONNECTOR */}

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

/* =========================================================
   MOBILE KEY POINT CARD
========================================================= */

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

/* =========================================================
   MACHINE POINTS
========================================================= */

const machinePoints = [
    {
        title: "Distal Tip",
        description: "Camera & LED Illumination",
    },
    {
        title: "Insertion Tube",
        description: "Flexible Patient Access",
    },
    {
        title: "Irrigation Port",
        description: "Fluid Irrigation Access",
    },
    {
        title: "Function Buttons",
        description: "Control Operation",
    },
    {
        title: "Instrument Handle",
        description: "Ergonomic Design",
    },
    {
        title: "Connector Cable",
        description: "Signal Transmission",
    },
    {
        title: "Connector Port",
        description: "Secure Connection",
    },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const CystoscopyMachine = () => {
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
            {/* =====================================================
          MACHINE AREA
      ====================================================== */}

            <div
                className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1050px]
          items-center
          justify-center
          px-4

          min-h-[340px]

          sm:min-h-[410px]
          sm:px-5

          lg:min-h-[520px]
        "
            >
                {/* BACKGROUND GLOW */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1CAFED]/[0.06]
            blur-[80px]

            lg:h-[380px]
            lg:w-[380px]
            lg:blur-[110px]
          "
                />

                {/* ===================================================
            CLICKABLE MACHINE AREA
        ==================================================== */}

                <div
                    className="
            relative
            flex
            cursor-pointer
            items-center
            justify-center
            outline-none

            h-[300px]
            w-full
            max-w-[650px]

            sm:h-[370px]

            lg:h-[460px]
            lg:max-w-[720px]
          "
                    onClick={toggleMachine}
                    role="button"
                    tabIndex={0}
                    aria-label={
                        isExpanded
                            ? "Collapse cystoscope details"
                            : "Expand cystoscope details"
                    }
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleMachine();
                        }
                    }}
                >
                    {/* =================================================
              DESKTOP KEY POINTS
          ================================================== */}

                    <AnimatePresence>
                        {isExpanded && (
                            <>
                                {/* 1 - DISTAL TIP */}

                                <KeyPoint
                                    title="Distal Tip"
                                    description="Camera & LED Illumination"
                                    position="
                    left-[-210px]
                    top-[80px]
                  "
                                    side="left"
                                    lineWidth={45}
                                />

                                {/* 2 - INSERTION TUBE */}

                                <KeyPoint
                                    title="Insertion Tube"
                                    description="Flexible Patient Access"
                                    position="
                    left-[115px]
                    top-[30px]
                  "
                                    side="bottom"
                                    lineWidth={48}
                                />

                                {/* 3 - IRRIGATION PORT */}

                                <KeyPoint
                                    title="Irrigation Port"
                                    description="Fluid Irrigation Access"
                                    position="
                    right-[50px]
                    top-[100px]
                  "
                                    side="bottom"
                                    lineWidth={42}
                                />

                                {/* 4 - FUNCTION BUTTONS */}

                                <KeyPoint
                                    title="Function Buttons"
                                    description="Control Operation"
                                    position="
                    right-[-210px]
                    top-[250px]
                  "
                                    side="right"
                                    lineWidth={48}
                                />

                                {/* 5 - INSTRUMENT HANDLE */}

                                <KeyPoint
                                    title="Instrument Handle"
                                    description="Ergonomic Design"
                                    position="
                    right-[-210px]
                    top-[320px]
                  "
                                    side="right"
                                    lineWidth={45}
                                />

                                {/* 6 - CONNECTOR CABLE */}

                                <KeyPoint
                                    title="Connector Cable"
                                    description="Signal Transmission"
                                    position="
                    left-[175px]
                    bottom-[-20px]
                  "
                                    side="top"
                                    lineWidth={42}
                                />

                                {/* 7 - CONNECTOR PORT */}

                                <KeyPoint
                                    title="Connector Port"
                                    description="Secure Connection"
                                    position="
                    right-[-30px]
                    bottom-[-1px]
                  "
                                    side="top"
                                    lineWidth={45}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* =================================================
              MACHINE IMAGES
          ================================================== */}

                    <div
                        className="
              relative
              z-10
              h-full
              w-full
            "
                    >
                        {/* =================================================
                PART 1
                BLACK INSERTION TUBE
            ================================================== */}

                        <motion.img
                            src={scopePart}
                            alt="Cystoscope insertion tube and distal tip"
                            draggable={false}
                            className="
                absolute
                z-20
                h-auto
                select-none
                object-contain

                left-[3%]
                top-[20%]
                w-[56%]

                sm:left-[2%]
                sm:top-[18%]
                sm:w-[58%]

                lg:left-[1%]
                lg:top-[6%]
                lg:w-[60%]
              "
                            animate={{
                                x: isExpanded ? -35 : 0,
                                y: isExpanded ? -38 : 0,
                                rotate: isExpanded ? -1 : 0,
                                scale: isExpanded ? 1.03 : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        />

                        {/* =================================================
                PART 2
                HANDLE + WHITE CONNECTOR CABLE
            ================================================== */}

                        <motion.img
                            src={machinePart}
                            alt="Cystoscope instrument handle and connector cable"
                            draggable={false}
                            className="
                absolute
                z-30
                h-auto
                select-none
                object-contain

                right-[1%]
                top-[27%]
                w-[64%]

                sm:right-[0%]
                sm:top-[25%]
                sm:w-[66%]

                lg:right-[-0%]
                lg:top-[12%]
                lg:w-[78%]
              "
                            animate={{
                                x: isExpanded ? 38 : 0,
                                y: isExpanded ? 35 : 0,
                                rotate: isExpanded ? 1 : 0,
                                scale: isExpanded ? 1.02 : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* =====================================================
          MOBILE FEATURES
      ====================================================== */}

            <div className="mx-auto mt-8 w-full max-w-[520px] px-4 lg:hidden">
                {/* TAP / EXPLORE BUTTON */}

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

                    {isExpanded
                        ? "Hide machine details"
                        : "Tap to explore machine"}
                </motion.button>

                {/* ===================================================
            MOBILE FEATURE CARDS
        ==================================================== */}

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

export default CystoscopyMachine;