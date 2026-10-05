import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import part1 from "../../assets/images/Cystonephroscope1.png";
import part2 from "../../assets/images/Cystonephroscope2.png";
import part3 from "../../assets/images/Cystonephroscope3.png";

/* =========================================================
   MOBILE DETECTION HOOK
   Returns true when viewport is below lg (1024px)
   ========================================================= */

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");

        const handleChange = (e) => {
            setIsMobile(e.matches);
        };

        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile;
};

/* =========================================================
   MOBILE MACHINE PART POSITION SETTINGS
   CHANGE MOBILE POSITION / SIZE FROM HERE ONLY
   Desktop styles are defined inline in each image below.
   ========================================================= */

const mobilePartPositions = {
    /* PART 1 — UPPER INSERTION TUBE */
    part1: {
        top: "2%",
        left: "30%",
        width: "58%",
        maxWidth: "390px",
    },

    /* PART 2 — CONTROL HANDLE */
    part2: {
        top: "8%",
        left: "-6%",
        width: "65%",
        maxWidth: "225px",
    },

    /* PART 3 — LOWER CONNECTOR CABLE */
    part3: {
        bottom: "14%",
        left: "2%",
        width: "67%",
        maxWidth: "450px",
    },
};

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
   MOBILE KEY POINT
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
   MACHINE KEY POINT DATA
========================================================= */

const machinePoints = [
    {
        title: "Deflection Lever",
        description: "Controls Tip Angulation",
    },
    {
        title: "Deflection Control Knob",
        description: "Precise Angulation Adjustment",
    },
    {
        title: "Function Buttons",
        description: "Photo / Video / Freeze Controls",
    },
    {
        title: "Instrument Handle",
        description: "Ergonomic Scope Operation",
    },
    {
        title: "Insertion Tube",
        description: "Flexible Patient Access",
    },
    {
        title: "Distal Tip",
        description: "Camera & LED Illumination",
    },
    {
        title: "Connector Cable",
        description: "Signal & Power Transmission",
    },
    {
        title: "Connector Plug",
        description: "Secure System Connection",
    },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const CystonephroscopeMachine = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const isMobile = useIsMobile();

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
          min-h-[430px]
          w-full
          max-w-[1050px]
          items-center
          justify-center
          px-4
          sm:min-h-[500px]
          sm:px-5
          lg:min-h-[650px]
        "
            >
                {/* BACKGROUND GLOW */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1CAFED]/[0.06]
            blur-[90px]
            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[120px]
          "
                />

                {/* ===================================================
            CLICKABLE MACHINE
        ==================================================== */}

                <div
                    className="
            relative
            flex
            h-[390px]
            w-full
            max-w-[650px]
            cursor-pointer
            items-center
            justify-center
            outline-none
            sm:h-[460px]
            lg:h-[560px]
          "
                    onClick={toggleMachine}
                    role="button"
                    tabIndex={0}
                    aria-label={
                        isExpanded
                            ? "Collapse Cystonephroscope details"
                            : "Expand Cystonephroscope details"
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
                                {/* 1 */}
                                <KeyPoint
                                    title="Deflection Lever"
                                    description="Controls Tip Angulation"
                                    position="
                    left-[-100px]
                    top-[130px]
                  "
                                    side="left"
                                    lineWidth={48}
                                />

                                {/* 2 */}
                                <KeyPoint
                                    title="Deflection Control Knob"
                                    description="Precise Angulation Adjustment"
                                    position="
                    left-[-100px]
                    top-[72px]
                  "
                                    side="left"
                                    lineWidth={55}
                                />

                                {/* 3 */}
                                <KeyPoint
                                    title="Function Buttons"
                                    description="Photo / Video / Freeze Controls"
                                    position="
                    right-[250px]
                    top-[200px]
                  "
                                    side="right"
                                    lineWidth={55}
                                />

                                {/* 4 */}
                                <KeyPoint
                                    title="Instrument Handle"
                                    description="Ergonomic Scope Operation"
                                    position="
                    left-[-130px]
                    top-[250px]
                  "
                                    side="left"
                                    lineWidth={50}
                                />

                                {/* 5 */}
                                <KeyPoint
                                    title="Insertion Tube"
                                    description="Flexible Patient Access"
                                    position="
                    right-[-60px]
                    top-[30px]
                  "
                                    side="right"
                                    lineWidth={50}
                                />

                                {/* 6 */}
                                <KeyPoint
                                    title="Distal Tip"
                                    description="Camera & LED Illumination"
                                    position="
                    right-[-110px]
                    top-[200px]
                  "
                                    side="right"
                                    lineWidth={55}
                                />

                                {/* 7 */}
                                <KeyPoint
                                    title="Connector Cable"
                                    description="Signal & Power Transmission"
                                    position="
                    left-[30px]
                    bottom-[-82px]
                  "
                                    side="top"
                                    lineWidth={48}
                                />

                                {/* 8 */}
                                <KeyPoint
                                    title="Connector Plug"
                                    description="Secure System Connection"
                                    position="
                    right-[120px]
                    bottom-[-62px]
                  "
                                    side="top"
                                    lineWidth={45}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* =================================================
              MACHINE PARTS
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
                PART 1 — UPPER INSERTION TUBE
            ================================================== */}

                        <motion.img
                            src={part1}
                            alt="Cystonephroscope insertion tube and distal camera tip"
                            draggable={false}
                            className="
                absolute
                left-[32%]
                top-[0%]
                z-20
                h-auto
                w-[58%]
                max-w-[390px]
                select-none
                object-contain
              "
                            style={
                                isMobile
                                    ? {
                                        top: mobilePartPositions.part1.top,
                                        left: mobilePartPositions.part1.left,
                                        width: mobilePartPositions.part1.width,
                                        maxWidth: mobilePartPositions.part1.maxWidth,
                                    }
                                    : undefined
                            }
                            animate={{
                                x: isExpanded ? 32 : 0,
                                y: isExpanded ? -35 : 0,
                                rotate: isExpanded ? 2 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        />

                        {/* =================================================
                PART 2 — CONTROL HANDLE
            ================================================== */}

                        <motion.img
                            src={part2}
                            alt="Cystonephroscope control handle"
                            draggable={false}
                            className="
                absolute
                left-[-6%]
                top-[8%]
                z-30
                h-auto
                w-[65%]
                max-w-[225px]
                select-none
                object-contain
              "
                            style={
                                isMobile
                                    ? {
                                        top: mobilePartPositions.part2.top,
                                        left: mobilePartPositions.part2.left,
                                        width: mobilePartPositions.part2.width,
                                        maxWidth: mobilePartPositions.part2.maxWidth,
                                    }
                                    : undefined
                            }
                            animate={{
                                x: isExpanded ? -35 : 0,
                                y: isExpanded ? 5 : 0,
                                rotate: isExpanded ? -2 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        />

                        {/* =================================================
                PART 3 — LOWER CONNECTOR CABLE
            ================================================== */}

                        <motion.img
                            src={part3}
                            alt="Cystonephroscope connector cable and plug"
                            draggable={false}
                            className="
                absolute
                bottom-[-5%]
                left-[4%]
                z-10
                h-auto
                w-[67%]
                max-w-[450px]
                select-none
                object-contain
              "
                            style={
                                isMobile
                                    ? {
                                        top: mobilePartPositions.part3.top,
                                        bottom: mobilePartPositions.part3.bottom,
                                        left: mobilePartPositions.part3.left,
                                        width: mobilePartPositions.part3.width,
                                        maxWidth: mobilePartPositions.part3.maxWidth,
                                    }
                                    : undefined
                            }
                            animate={{
                                x: isExpanded ? 10 : 0,
                                y: isExpanded ? 50 : 0,
                                rotate: isExpanded ? 1 : 0,
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
                {/* TAP BUTTON */}

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

                {/* MOBILE DETAIL CARDS */}

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

export default CystonephroscopeMachine;