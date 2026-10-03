import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import fiberDust1 from "../../assets/images/fiber-dust1.png";
import fiberDust2 from "../../assets/images/fiber-dust2.png";
import fiberDust3 from "../../assets/images/fiber-dust3.png";


/* =========================================================
   DESKTOP KEY POINT
   SAME STYLE AS SMARTXIDE
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
   MOBILE KEYPOINT
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
   FIBER DUST KEYPOINT DATA
   ========================================================= */

const machinePoints = [
    {
        title: "Touchscreen Display",
        description: "Treatment Interface & System Status",
    },

    {
        title: "Treatment Output Port",
        description: "Laser Energy Delivery Connection",
    },

    {
        title: "Emergency Stop",
        description: "Immediate Safety Shutdown",
    },

    {
        title: "Control Panel",
        description: "Main Operating Controls",
    },

    {
        title: "Main Treatment Module",
        description: "Core Fiber Laser Treatment System",
    },

    {
        title: "Support Column & Basket",
        description: "Accessory Storage & Structural Support",
    },

    {
        title: "Access Shelf",
        description: "Working & Equipment Support Platform",
    },

    {
        title: "Mobile Base / Caster Wheels",
        description: "Stable Equipment Movement & Positioning",
    },
];


/* =========================================================
   MACHINE PART POSITION SETTINGS

   IMPORTANT:
   Change positions only from here.

   top
   left
   right
   bottom
   width

   expandedX
   expandedY

   assembled position and separated position are independent.
   ========================================================= */

const machinePartPositions = {

    /* =====================================================
       PART 1
       FIBER LASER MACHINE UNIT
       fiber-dust1.png
       ===================================================== */

    part1: {
        top: "80px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "95%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -30,

        zIndex: 40,
    },


    /* =====================================================
       PART 2
       WHITE TROLLEY / COLUMN / BASKET / SHELF
       fiber-dust2.png
       ===================================================== */

    part2: {
        top: "170px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "95%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 18,

        zIndex: 20,
    },


    /* =====================================================
       PART 3
       BLACK BASE / WHEELS
       fiber-dust3.png
       ===================================================== */

    part3: {
        top: "370px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "115%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 50,

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

const FiberDustMachine = () => {

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
          MACHINE AREA
         ===================================================== */}

            <div
                className="
          relative

          left-1/2
          -translate-x-1/2

          w-screen
          max-w-none

          min-h-[680px]
          sm:min-h-[700px]
          lg:min-h-[720px]
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

            min-h-[610px]

            w-[180px]
            xs:w-[195px]
            sm:w-[215px]
            lg:w-[245px]

            max-w-full
          "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse Fiber Dust machine details"
                            : "Expand Fiber Dust machine details"
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
              DESKTOP KEYPOINTS
             =================================================== */}

                    <AnimatePresence>

                        {isExpanded && (

                            <>

                                {/* =================================================
                    TOUCHSCREEN
                   ================================================= */}

                                <KeyPoint
                                    title="Touchscreen Display"
                                    description="Treatment Interface & System Status"

                                    position="
                    right-[-215px]
                    top-[50px]
                  "

                                    side="right"

                                    lineWidth={62}
                                />


                                {/* =================================================
                    OUTPUT PORT
                   ================================================= */}

                                <KeyPoint
                                    title="Treatment Output Port"
                                    description="Laser Energy Delivery Connection"

                                    position="
                    left-[-190px]
                    top-[65px]
                  "

                                    side="left"

                                    lineWidth={68}
                                />


                                {/* =================================================
                    EMERGENCY STOP
                   ================================================= */}

                                <KeyPoint
                                    title="Emergency Stop"
                                    description="Immediate Safety Shutdown"

                                    position="
                    left-[-170px]
                    top-[130px]
                  "

                                    side="left"

                                    lineWidth={102}
                                />


                                {/* =================================================
                    CONTROL PANEL
                   ================================================= */}

                                <KeyPoint
                                    title="Control Panel"
                                    description="Main Operating Controls"

                                    position="
                    right-[-190px]
                    top-[105px]
                  "

                                    side="right"

                                    lineWidth={60}
                                />


                                {/* =================================================
                    MAIN TREATMENT MODULE
                   ================================================= */}

                                <KeyPoint
                                    title="Main Treatment Module"
                                    description="Core Fiber Laser Treatment System"

                                    position="
                    right-[-250px]
                    top-[205px]
                  "

                                    side="right"

                                    lineWidth={68}
                                />


                                {/* =================================================
                    SUPPORT COLUMN / BASKET
                   ================================================= */}

                                <KeyPoint
                                    title="Support Column & Basket"
                                    description="Accessory Storage & Structural Support"

                                    position="
                    right-[-220px]
                    top-[300px]
                  "

                                    side="right"

                                    lineWidth={76}
                                />


                                {/* =================================================
                    ACCESS SHELF
                   ================================================= */}

                                <KeyPoint
                                    title="Access Shelf"
                                    description="Working & Equipment Support Platform"

                                    position="
                    left-[-200px]
                    top-[370px]
                  "

                                    side="left"

                                    lineWidth={60}
                                />


                                {/* =================================================
                    BASE & WHEELS
                   ================================================= */}

                                <KeyPoint
                                    title="Mobile Base / Caster Wheels"
                                    description="Stable Equipment Movement & Positioning"

                                    position="
                    right-[-290px]
                    top-[490px]
                  "

                                    side="right"

                                    lineWidth={75}
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

              h-[610px]
              w-full
            "
                    >

                        {/* =================================================
                PART 1
                FIBER LASER MACHINE
               ================================================= */}

                        <MachinePart
                            src={fiberDust1}

                            alt="Fiber Dust laser control unit"

                            config={
                                machinePartPositions.part1
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* =================================================
                PART 2
                WHITE TROLLEY
               ================================================= */}

                        <MachinePart
                            src={fiberDust2}

                            alt="Fiber Dust support trolley"

                            config={
                                machinePartPositions.part2
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* =================================================
                PART 3
                BLACK BASE
               ================================================= */}

                        <MachinePart
                            src={fiberDust3}

                            alt="Fiber Dust mobile caster base"

                            config={
                                machinePartPositions.part3
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

                {/* =====================================================
            MOBILE TOGGLE
           ===================================================== */}

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
            MOBILE KEYPOINT CARDS
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


export default FiberDustMachine;