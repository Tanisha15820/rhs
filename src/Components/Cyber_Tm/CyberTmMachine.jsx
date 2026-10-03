import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import cybertm1 from "../../assets/images/cybertm1.png";
import cybertm2 from "../../assets/images/cybertm2.png";
import cybertm3 from "../../assets/images/cybertm3.png";
import cybertm4 from "../../assets/images/cybertm4.png";


/* =========================================================
   DESKTOP KEY POINT
   SAME UI STYLE AS SMARTXIDE
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
            initial={{
                opacity: 0,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.96,
            }}
            transition={{
                duration: 0.25,
            }}
            className={`
        pointer-events-none
        absolute
        z-[100]
        hidden
        lg:flex

        ${side === "bottom"
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
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    />

                    <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
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

                    {/* ICON */}
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


                    {/* TEXT */}
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
                    <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />

                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    />
                </div>
            )}


            {/* BOTTOM / VERTICAL CONNECTOR */}
            {side === "bottom" && (
                <div className="flex flex-col items-center">
                    <div
                        className="w-[1px] bg-[#1677FF]"
                        style={{
                            height: `${lineWidth}px`,
                        }}
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

const MobileKeyPoint = ({
    title,
    description,
    index,
}) => {
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
   CYBER TM KEY POINT DATA
   ========================================================= */

const machinePoints = [
    {
        title: "Touchscreen Display",
        description: "Intuitive User Interface & System Control",
    },

    {
        title: "Treatment Output Port",
        description: "Laser Treatment Output Connection",
    },

    {
        title: "Emergency Stop",
        description: "Immediate System Safety Shutdown",
    },

    {
        title: "Power / System Control",
        description: "Main Power & Operating Control",
    },

    {
        title: "Main Treatment Module",
        description: "Integrated 200 W Laser System",
    },

    {
        title: "Main Front Access Panel",
        description: "Maintenance & Internal Module Access",
    },

    {
        title: "Lower Vent / Service Opening",
        description: "Ventilation & Service Access",
    },

    {
        title: "Caster Wheels",
        description: "Smooth & Stable Equipment Mobility",
    },
];


/* =========================================================
   MACHINE PART POSITION SETTINGS

   CHANGE THESE VALUES ONLY

   top
   left
   right
   bottom
   width

   expandedX
   expandedY

   assembled position and exploded position are separate
   ========================================================= */

const machinePartPositions = {

    /* =====================================================
       PART 1 - TOUCHSCREEN
       cybertm1.png
       ===================================================== */

    part1: {
        top: "0px",
        left: "15%",
        right: "auto",
        bottom: "auto",

        width: "68%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -32,

        zIndex: 40,
    },


    /* =====================================================
       PART 2 - CONTROL / OUTPUT PANEL
       cybertm2.png
       ===================================================== */

    part2: {
        top: "112px",
        left: "1%",
        right: "auto",
        bottom: "auto",

        width: "94%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -8,

        zIndex: 30,
    },


    /* =====================================================
       PART 3 - MAIN CYBER TM BODY
       cybertm3.png
       ===================================================== */

    part3: {
        top: "175px",
        left: "1%",
        right: "auto",
        bottom: "auto",

        width: "105%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 22,

        zIndex: 20,
    },


    /* =====================================================
       PART 4 - WHEELS
       cybertm4.png
       ===================================================== */

    part4: {
        top: "510px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "82%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 48,

        zIndex: 10,
    },
};


/* =========================================================
   REUSABLE MACHINE PART
   ========================================================= */

const MachinePart = ({
    src,
    alt,
    config,
    isExpanded,
}) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            draggable={false}

            style={{
                position: "absolute",

                top: config.top,
                left: config.left,
                right: config.right,
                bottom: config.bottom,

                width: config.width,

                transform: `
          translateX(
            ${config.translateX}
          )
        `,

                zIndex: config.zIndex,
            }}

            animate={{
                x:
                    isExpanded
                        ? config.expandedX
                        : 0,

                y:
                    isExpanded
                        ? config.expandedY
                        : 0,
            }}

            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}

            className="
        h-auto
        max-w-none
        select-none
        object-contain
      "
        />
    );
};


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const CyberTmMachine = () => {

    const [
        isExpanded,
        setIsExpanded,
    ] = useState(false);


    const toggleMachine = () => {
        setIsExpanded(
            (prev) => !prev
        );
    };


    return (
        <section
            className="
        relative
        overflow-hidden
        bg-white

        py-12
        sm:py-16
        lg:py-[70px]
      "
        >

            {/* =====================================================
          FULL WIDTH MACHINE AREA
         ===================================================== */}

            <div
                className="
          relative

          left-1/2
          -translate-x-1/2

          w-screen
          max-w-none

          min-h-[650px]
          sm:min-h-[670px]
          lg:min-h-[700px]
        "
            >

                {/* BACKGROUND GLOW */}
                <div
                    className="
            pointer-events-none

            absolute

            left-1/2
            top-1/2

            h-[180px]
            w-[180px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#1CAFED]/[0.06]

            blur-[85px]

            sm:h-[200px]
            sm:w-[200px]

            lg:blur-[95px]
          "
                />


                {/* =====================================================
            MACHINE WRAPPER
           ===================================================== */}

                <div
                    className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            cursor-pointer
            outline-none

            min-h-[590px]

            w-[190px]
            xs:w-[205px]
            sm:w-[225px]

            lg:w-[255px]

            max-w-full
          "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse Cyber TM machine details"
                            : "Expand Cyber TM machine details"
                    }

                    aria-expanded={isExpanded}

                    onKeyDown={(e) => {

                        if (
                            e.key === "Enter" ||
                            e.key === " "
                        ) {

                            e.preventDefault();

                            toggleMachine();

                        }

                    }}
                >

                    {/* ===================================================
              DESKTOP KEY POINTS
             =================================================== */}

                    <AnimatePresence>

                        {isExpanded && (

                            <>

                                {/* TOUCHSCREEN */}
                                <KeyPoint
                                    title="Touchscreen Display"
                                    description="Intuitive User Interface & System Control"

                                    position="
                    left-[25px]
                    top-[-90px]
                  "

                                    side="bottom"
                                    lineWidth={44}
                                />


                                {/* OUTPUT PORT */}
                                <KeyPoint
                                    title="Treatment Output Port"
                                    description="Laser Treatment Output Connection"

                                    position="
                    left-[-200px]
                    top-[125px]
                  "

                                    side="left"
                                    lineWidth={65}
                                />


                                {/* MAIN TREATMENT MODULE */}
                                <KeyPoint
                                    title="Main Treatment Module"
                                    description="Integrated 200 W Laser System"

                                    position="
                    left-[-215px]
                    top-[330px]
                  "

                                    side="left"
                                    lineWidth={70}
                                />



                                {/* EMERGENCY STOP */}
                                <KeyPoint
                                    title="Emergency Stop"
                                    description="Immediate System Safety Shutdown"

                                    position="
                    right-[-195px]
                    top-[112px]
                  "

                                    side="right"
                                    lineWidth={58}
                                />



                                {/* FRONT ACCESS */}
                                <KeyPoint
                                    title="Main Front Access Panel"
                                    description="Maintenance & Internal Module Access"

                                    position="
                    right-[-255px]
                    top-[325px]
                  "

                                    side="right"
                                    lineWidth={72}
                                />


                                {/* CASTER WHEELS */}
                                <KeyPoint
                                    title="Caster Wheels"
                                    description="Smooth & Stable Equipment Mobility"

                                    position="
                    right-[-225px]
                    top-[560px]
                  "

                                    side="right"
                                    lineWidth={58}
                                />

                            </>

                        )}

                    </AnimatePresence>


                    {/* ===================================================
              MACHINE PARTS
             =================================================== */}

                    <div
                        className="
              relative
              z-10

              h-[590px]
              w-full
            "
                    >

                        {/* =================================================
                PART 1
                TOUCHSCREEN
               ================================================= */}

                        <MachinePart
                            src={cybertm1}

                            alt="Cyber TM touchscreen display"

                            config={
                                machinePartPositions.part1
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* =================================================
                PART 2
                CONTROL PANEL
               ================================================= */}

                        <MachinePart
                            src={cybertm2}

                            alt="Cyber TM treatment control panel"

                            config={
                                machinePartPositions.part2
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* =================================================
                PART 3
                MAIN BODY
               ================================================= */}

                        <MachinePart
                            src={cybertm3}

                            alt="Cyber TM main treatment body"

                            config={
                                machinePartPositions.part3
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* =================================================
                PART 4
                WHEELS
               ================================================= */}

                        <MachinePart
                            src={cybertm4}

                            alt="Cyber TM caster wheels"

                            config={
                                machinePartPositions.part4
                            }

                            isExpanded={
                                isExpanded
                            }
                        />

                    </div>

                </div>

            </div>


            {/* =====================================================
          MOBILE FEATURES
         ===================================================== */}

            <div
                className="
          mx-auto
          mt-6
          w-full
          max-w-[520px]
          px-4
          lg:hidden
        "
            >

                {/* MOBILE TOGGLE */}
                <motion.button
                    type="button"

                    onClick={toggleMachine}

                    whileTap={{
                        scale: 0.97,
                    }}

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

              ${isExpanded
                                ? "rotate-45"
                                : ""
                            }
            `}
                    >
                        +
                    </span>


                    {isExpanded
                        ? "Hide machine details"
                        : "Tap to explore machine"}

                </motion.button>


                {/* ===================================================
            MOBILE DETAIL CARDS
           =================================================== */}

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

                                {machinePoints.map(
                                    (
                                        point,
                                        index
                                    ) => (

                                        <MobileKeyPoint
                                            key={
                                                point.title
                                            }

                                            title={
                                                point.title
                                            }

                                            description={
                                                point.description
                                            }

                                            index={
                                                index
                                            }
                                        />

                                    )
                                )}

                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

        </section>
    );
};


export default CyberTmMachine;