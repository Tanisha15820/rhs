import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import machineImage from "../../assets/images/hu307.51.png";
import wireImage from "../../assets/images/hu307.52.png";

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
        ${side === "bottom" ? "flex-col items-center" : ""}
        ${side === "top" ? "flex-col-reverse items-center" : ""}
        ${side === "top-arrow" ? "flex-col items-center" : ""}
        ${side === "left" || side === "right"
                    ? "items-center"
                    : ""
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

            {/* TOP ARROW CONNECTOR */}
            {side === "top-arrow" && (
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
   MACHINE POINTS
========================================================= */

const machinePoints = [
    {
        title: "Eyepiece",
        description: "Direct Visual Observation",
    },
    {
        title: "Deflection Lever",
        description: "Controls Distal Tip Deflection",
    },
    {
        title: "Deflection Control Knob",
        description: "Precise Scope Angulation",
    },
    {
        title: "Working / Irrigation Port",
        description: "Fluid & Instrument Access",
    },
    {
        title: "Instrument Body",
        description: "Ergonomic Scope Operation",
    },
    {
        title: "Accessory Port",
        description: "Accessory Connection Channel",
    },
    {
        title: "Insertion Tube",
        description: "Flexible Patient Access Tube",
    },
    {
        title: "Distal Tip",
        description: "Visualization & Treatment End",
    },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const HU30SMachine = () => {
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
          min-h-[360px]
          w-full
          max-w-[980px]
          items-center
          justify-center
          px-4
          sm:min-h-[430px]
          sm:px-5
          lg:min-h-[560px]
        "
            >
                {/* BACKGROUND GLOW */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[240px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1CAFED]/[0.06]
            blur-[90px]
            lg:h-[380px]
            lg:w-[380px]
            lg:blur-[120px]
          "
                />

                {/* ===================================================
            MACHINE CLICK AREA
        ==================================================== */}

                <div
                    className="
            relative
            flex
            w-full
            max-w-[680px]
            cursor-pointer
            items-center
            justify-center
            outline-none
            lg:h-[470px]
          "
                    onClick={toggleMachine}
                    role="button"
                    tabIndex={0}
                    aria-label={
                        isExpanded
                            ? "Collapse HU30S machine details"
                            : "Expand HU30S machine details"
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
                                {/* 1 - EYEPIECE */}

                                <KeyPoint
                                    title="Eyepiece"
                                    description="Direct Visual Observation"
                                    position="
                    left-[-70px]
                    top-[35px]
                  "
                                    side="left"
                                    lineWidth={42}
                                />

                                {/* 2 - DEFLECTION LEVER */}

                                <KeyPoint
                                    title="Deflection Lever"
                                    description="Controls Distal Tip Deflection"
                                    position="
                    left-[190px]
                    top-[-60px]
                  "
                                    side="bottom"
                                    lineWidth={55}
                                />

                                {/* 3 - DEFLECTION CONTROL KNOB */}

                                <KeyPoint
                                    title="Deflection Control Knob"
                                    description="Precise Scope Angulation"
                                    position="
                    left-[170px]
                    top-[150px]
                  "
                                    side="top-arrow"
                                    lineWidth={48}
                                />

                                {/* 4 - WORKING / IRRIGATION PORT */}

                                <KeyPoint
                                    title="Working / Irrigation Port"
                                    description="Fluid & Instrument Access"
                                    position="
                    right-[-30px]
                    top-[110px]
                  "
                                    side="right"
                                    lineWidth={58}
                                />


                                {/* 6 - ACCESSORY PORT */}

                                <KeyPoint
                                    title="Accessory Port"
                                    description="Accessory Connection Channel"
                                    position="
                    left-[-60px]
                    top-[120px]
                  "
                                    side="left"
                                    lineWidth={55}
                                />

                                {/* 7 - INSERTION TUBE */}

                                <KeyPoint
                                    title="Insertion Tube"
                                    description="Flexible Patient Access Tube"
                                    position="
                    left-[120px]
                    bottom-[-50px]
                  "
                                    side="top-arrow"
                                    lineWidth={52}
                                />

                                {/* 8 - DISTAL TIP */}

                                <KeyPoint
                                    title="Distal Tip"
                                    description="Visualization & Treatment End"
                                    position="
                    right-[-50px]
                    bottom-[-45px]
                  "
                                    side="top-arrow"
                                    lineWidth={45}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* =================================================
              IMAGES
          ================================================== */}

                    <div
                        className="
              relative
              z-10
              flex
              h-[300px]
              w-full
              items-center
              justify-center
              sm:h-[370px]
              lg:h-[430px]
            "
                    >
                        {/* ------------------------------------------------
                WIRE / INSERTION TUBE
                hu307.52
            ------------------------------------------------- */}

                        <motion.img
                            src={wireImage}
                            alt="HU30S insertion tube"
                            draggable={false}
                            className="
                absolute
                left-1/2
                top-1/2
                z-10
                h-auto
                w-[95%]
                max-w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                select-none
                object-contain
              "
                            animate={{
                                x: isExpanded ? 0 : 0,

                                y: isExpanded ? 48 : 0,

                                scale: isExpanded ? 1.03 : 1,

                                rotate: isExpanded ? 0 : 0,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: "easeOut",
                            }}
                        />

                        {/* ------------------------------------------------
                HU30S HANDPIECE
                hu307.51
            ------------------------------------------------- */}

                        <motion.img
                            src={machineImage}
                            alt="HU30S Disposable Ureterorenoscope"
                            draggable={false}
                            className="
                absolute
                left-1/2
                top-[38%]
                z-20
                h-auto
                w-[62%]
                max-w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                select-none
                object-contain
              "
                            animate={{
                                x: isExpanded ? 0 : 0,

                                y: isExpanded ? -55 : 0,

                                scale: isExpanded ? 1.05 : 1,

                                rotate: isExpanded ? -2 : 0,
                            }}
                            transition={{
                                duration: 0.55,
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

export default HU30SMachine;