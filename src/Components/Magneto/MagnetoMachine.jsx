import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import magneto1 from "../../assets/images/magneto1.png";
import magneto2 from "../../assets/images/magneto2.png";
import magneto3 from "../../assets/images/magneto3.png";
import magneto4 from "../../assets/images/magneto4.png";


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
                    <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />

                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    />
                </div>
            )}


            {/* BOTTOM CONNECTOR */}
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
   MAGNETO KEY POINT DATA
   ========================================================= */

const machinePoints = [
    {
        title: "Touchscreen Display",
        description: "Treatment Settings & System Control",
    },

    {
        title: "Emergency Stop",
        description: "Immediate Safety Shutdown",
    },

    {
        title: "Power / System Control",
        description: "System Power & Control Interface",
    },

    {
        title: "Treatment Output Port",
        description: "Connection for Laser Delivery",
    },

    {
        title: "Main Front Access Panel",
        description: "Service & Maintenance Access",
    },

    {
        title: "Main Treatment Module",
        description: "High-Performance Laser System",
    },

    {
        title: "Lower Vent / Service Opening",
        description: "Ventilation & Service Access",
    },

    {
        title: "Caster Wheels",
        description: "Smooth & Stable Mobility",
    },
];


/* =========================================================
   MACHINE PART POSITION SETTINGS

   ONLY EDIT THIS SECTION FOR MACHINE PARTS

   top
   left
   right
   bottom
   width

   expandedX
   expandedY

   You can change all positions from here.
   ========================================================= */

const machinePartPositions = {

    /* =====================================================
       PART 1 - TOUCHSCREEN
       ===================================================== */

    part1: {
        top: "0px",
        left: "15%",
        right: "auto",
        bottom: "auto",

        width: "70%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -30,

        zIndex: 40,
    },


    /* =====================================================
       PART 2 - UPPER CONTROL PANEL
       ===================================================== */

    part2: {
        top: "100px",
        left: "5%",
        right: "auto",
        bottom: "auto",

        width: "92%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -8,

        zIndex: 30,
    },


    /* =====================================================
       PART 3 - MAIN BODY
       ===================================================== */

    part3: {
        top: "165px",
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
       PART 4 - BASE / WHEELS
       ===================================================== */

    part4: {
        top: "410px",
        left: "1%",
        right: "auto",
        bottom: "auto",

        width: "105%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 86,

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

const MagnetoMachine = () => {

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
          FULL SCREEN MACHINE AREA
         ===================================================== */}

            <div
                className="
          relative

          left-1/2
          -translate-x-1/2

          w-screen
          max-w-none

          min-h-[620px]
          sm:min-h-[640px]
          lg:min-h-[670px]
        "
            >

                {/* =====================================================
            BACKGROUND GLOW
           ===================================================== */}

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

            min-h-[560px]

            w-[190px]

            xs:w-[205px]
            sm:w-[220px]
            lg:w-[250px]

            max-w-full
          "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse Magneto machine details"
                            : "Expand Magneto machine details"
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
                                    description="Treatment Settings & System Control"

                                    position="
                    left-[45px]
                    top-[-100px]
                  "

                                    side="bottom"

                                    lineWidth={45}
                                />


                                {/* EMERGENCY STOP */}
                                <KeyPoint
                                    title="Emergency Stop"
                                    description="Immediate Safety Shutdown"

                                    position="
                    left-[-180px]
                    top-[105px]
                  "

                                    side="left"

                                    lineWidth={78}
                                />




                                {/* MAIN MODULE */}
                                <KeyPoint
                                    title="Main Treatment Module"
                                    description="High-Performance Laser System"

                                    position="
                    left-[-200px]
                    top-[320px]
                  "

                                    side="left"

                                    lineWidth={72}
                                />


                                {/* WHEELS */}
                                <KeyPoint
                                    title="Caster Wheels"
                                    description="Smooth & Stable Mobility"

                                    position="
                    left-[-200px]
                    top-[520px]
                  "

                                    side="left"

                                    lineWidth={52}
                                />


                                {/* OUTPUT PORT */}
                                <KeyPoint
                                    title="Treatment Output Port"
                                    description="Connection for Laser Delivery"

                                    position="
                    right-[-205px]
                    top-[120px]
                  "

                                    side="right"

                                    lineWidth={78}
                                />


                                {/* FRONT ACCESS */}
                                <KeyPoint
                                    title="Main Front Access Panel"
                                    description="Service & Maintenance Access"

                                    position="
                    right-[-240px]
                    top-[300px]
                  "

                                    side="right"

                                    lineWidth={72}
                                />


                                {/* LOWER VENT */}
                                <KeyPoint
                                    title="Lower Vent / Service Opening"
                                    description="Ventilation & Service Access"

                                    position="
                    right-[-225px]
                    top-[425px]
                  "

                                    side="right"

                                    lineWidth={108}
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

              h-[560px]
              w-full
            "
                    >

                        {/* PART 1 */}
                        <MachinePart
                            src={magneto1}

                            alt="Magneto touchscreen display"

                            config={
                                machinePartPositions.part1
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 2 */}
                        <MachinePart
                            src={magneto2}

                            alt="Magneto upper control panel"

                            config={
                                machinePartPositions.part2
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 3 */}
                        <MachinePart
                            src={magneto3}

                            alt="Magneto main front body"

                            config={
                                machinePartPositions.part3
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 4 */}
                        <MachinePart
                            src={magneto4}

                            alt="Magneto caster base"

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


                {/* MOBILE DETAILS */}
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


export default MagnetoMachine;