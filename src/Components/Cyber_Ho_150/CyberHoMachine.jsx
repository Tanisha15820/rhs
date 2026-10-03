import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import cyberho1 from "../../assets/images/cyberho1.png";
import cyberho2 from "../../assets/images/cyberho2.png";
import cyberho3 from "../../assets/images/cyberho3.png";
import cyberho4 from "../../assets/images/cyberho4.png";


/* =========================================================
   DESKTOP KEY POINT
   Same UI structure as SmartXide
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

            {/* =====================================================
          RIGHT CONNECTOR
         ===================================================== */}

            {side === "right" && (
                <div className="flex items-center">

                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    />

                    <div
                        className="
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#1677FF]
            "
                    />

                </div>
            )}


            {/* =====================================================
          CARD
         ===================================================== */}

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
                        <div
                            className="
                h-[13px]
                w-[3px]
                rotate-45
                rounded-full
                bg-[#1677FF]
              "
                        />
                    </div>


                    {/* TEXT */}
                    <div>

                        <h4
                            className="
                text-[11px]
                font-semibold
                leading-tight
                text-slate-900
              "
                        >
                            {title}
                        </h4>


                        <p
                            className="
                mt-[3px]
                text-[8px]
                leading-[1.4]
                text-slate-400
              "
                        >
                            {description}
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================================
          LEFT CONNECTOR
         ===================================================== */}

            {side === "left" && (
                <div className="flex items-center">

                    <div
                        className="
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#1677FF]
            "
                    />

                    <div
                        className="h-[1px] bg-[#1677FF]"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    />

                </div>
            )}


            {/* =====================================================
          BOTTOM / VERTICAL CONNECTOR
         ===================================================== */}

            {side === "bottom" && (
                <div className="flex flex-col items-center">

                    <div
                        className="w-[1px] bg-[#1677FF]"
                        style={{
                            height: `${lineWidth}px`,
                        }}
                    />

                    <div
                        className="
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#1677FF]
            "
                    />

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

            {/* ICON */}
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
                <div
                    className="
            h-[14px]
            w-[3px]
            rotate-45
            rounded-full
            bg-[#1677FF]
          "
                />
            </div>


            {/* TEXT */}
            <div className="min-w-0">

                <h4
                    className="
            text-[12px]
            font-semibold
            leading-[1.3]
            text-slate-900
          "
                >
                    {title}
                </h4>


                <p
                    className="
            mt-1
            text-[10px]
            leading-[1.4]
            text-slate-400
          "
                >
                    {description}
                </p>

            </div>

        </motion.div>
    );
};


/* =========================================================
   CYBER HO MACHINE POINT DATA
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
        description: "Main System Activation",
    },

    {
        title: "Treatment Output Port",
        description: "Laser Energy Delivery Connection",
    },

    {
        title: "Main Front Access Panel",
        description: "Internal Component & Service Access",
    },

    {
        title: "Cyber Ho Treatment Module",
        description: "Integrated Treatment System Housing",
    },

    {
        title: "Lower Vent / Service Opening",
        description: "Cooling & Maintenance Access",
    },

    {
        title: "Caster Wheels",
        description: "Smooth Clinical Mobility",
    },
];


/* =========================================================
   MACHINE PART POSITION SETTINGS

   ONLY EDIT THIS SECTION TO MOVE MACHINE PARTS.

   top / right / bottom / left
   = normal assembled position

   width
   = image size

   expandedX / expandedY
   = movement after clicking machine
   ========================================================= */

const machinePartPositions = {

    /* =====================================================
       PART 1 - TOUCHSCREEN
       ===================================================== */

    part1: {
        top: "0px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "72%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -30,

        zIndex: 40,
    },


    /* =====================================================
       PART 2 - UPPER CONTROL PANEL
       ===================================================== */

    part2: {
        top: "105px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "75%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: -8,

        zIndex: 30,
    },


    /* =====================================================
       PART 3 - MAIN FRONT BODY
       ===================================================== */

    part3: {
        top: "191px",
        left: "-3%",
        right: "auto",
        bottom: "auto",

        width: "120%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 20,

        zIndex: 20,
    },


    /* =====================================================
       PART 4 - CASTER WHEELS
       ===================================================== */

    part4: {
        top: "395px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "78%",

        translateX: "-50%",

        expandedX: 0,
        expandedY: 38,

        zIndex: 10,
    },
};


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const CyberHoMachine = () => {

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

          IMPORTANT:
          This container represents full page machine area.

          Machine itself is centered with:
          left-1/2
          top-1/2
          translate
         ===================================================== */}

            <div
                className="
          relative

          mx-auto

          w-full

          max-w-[1200px]

          min-h-[560px]
          sm:min-h-[580px]
          lg:min-h-[620px]

          px-4
          sm:px-5
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

            h-[170px]
            w-[170px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#1CAFED]/[0.06]

            blur-[80px]

            sm:h-[190px]
            sm:w-[190px]

            lg:blur-[95px]
          "
                />


                {/* =====================================================
            MACHINE WRAPPER

            WHOLE MACHINE IS NOW EXACTLY CENTERED HERE.
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

            min-h-[500px]

            w-[190px]

            xs:w-[205px]
            sm:w-[220px]

            lg:min-h-[500px]

            lg:w-[240px]

            max-w-full
          "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse Cyber Ho machine details"
                            : "Expand Cyber Ho machine details"
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

                                {/* =================================================
                    TOUCHSCREEN
                   ================================================= */}

                                <KeyPoint
                                    title="Touchscreen Display"
                                    description="Treatment Settings & System Control"

                                    position="
                    left-[30px]
                    top-[-100px]
                  "

                                    side="bottom"

                                    lineWidth={42}
                                />


                                {/* =================================================
                    EMERGENCY STOP
                   ================================================= */}

                                <KeyPoint
                                    title="Emergency Stop"
                                    description="Immediate Safety Shutdown"

                                    position="
                    left-[-190px]
                    top-[110px]
                  "

                                    side="left"

                                    lineWidth={82}
                                />



                                {/* =================================================
                    FRONT ACCESS PANEL
                   ================================================= */}

                                <KeyPoint
                                    title="Main Front Access Panel"
                                    description="Internal Component & Service Access"

                                    position="
                    left-[-235px]
                    top-[280px]
                  "

                                    side="left"

                                    lineWidth={72}
                                />


                                {/* =================================================
                    TREATMENT OUTPUT
                   ================================================= */}

                                <KeyPoint
                                    title="Treatment Output Port"
                                    description="Laser Energy Delivery Connection"

                                    position="
                    right-[-200px]
                    top-[115px]
                  "

                                    side="right"

                                    lineWidth={90}
                                />


                                {/* =================================================
                    TREATMENT MODULE
                   ================================================= */}

                                <KeyPoint
                                    title="Cyber Ho Treatment Module"
                                    description="Integrated Treatment System Housing"

                                    position="
                    right-[-210px]
                    top-[255px]
                  "

                                    side="right"

                                    lineWidth={92}
                                />


                                {/* =================================================
                    LOWER VENT
                   ================================================= */}

                                <KeyPoint
                                    title="Lower Vent / Service Opening"
                                    description="Cooling & Maintenance Access"

                                    position="
                    right-[-200px]
                    top-[395px]
                  "

                                    side="right"

                                    lineWidth={95}
                                />


                                {/* =================================================
                    CASTER WHEELS
                   ================================================= */}

                                <KeyPoint
                                    title="Caster Wheels"
                                    description="Smooth Clinical Mobility"

                                    position="
                    left-[-160px]
                    top-[450px]
                  "

                                    side="left"

                                    lineWidth={48}
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

              h-[500px]

              w-full
            "
                    >

                        {/* =================================================
                PART 1
                TOUCHSCREEN
               ================================================= */}

                        <motion.img

                            src={cyberho1}

                            alt="Cyber Ho touchscreen display"

                            draggable={false}

                            style={{
                                position: "absolute",

                                top:
                                    machinePartPositions.part1.top,

                                left:
                                    machinePartPositions.part1.left,

                                right:
                                    machinePartPositions.part1.right,

                                bottom:
                                    machinePartPositions.part1.bottom,

                                width:
                                    machinePartPositions.part1.width,

                                transform: `
                  translateX(
                    ${machinePartPositions.part1.translateX}
                  )
                `,

                                zIndex:
                                    machinePartPositions.part1.zIndex,
                            }}

                            animate={{

                                x:
                                    isExpanded
                                        ? machinePartPositions.part1.expandedX
                                        : 0,

                                y:
                                    isExpanded
                                        ? machinePartPositions.part1.expandedY
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


                        {/* =================================================
                PART 2
                UPPER CONTROL PANEL
               ================================================= */}

                        <motion.img

                            src={cyberho2}

                            alt="Cyber Ho upper control section"

                            draggable={false}

                            style={{
                                position: "absolute",

                                top:
                                    machinePartPositions.part2.top,

                                left:
                                    machinePartPositions.part2.left,

                                right:
                                    machinePartPositions.part2.right,

                                bottom:
                                    machinePartPositions.part2.bottom,

                                width:
                                    machinePartPositions.part2.width,

                                transform: `
                  translateX(
                    ${machinePartPositions.part2.translateX}
                  )
                `,

                                zIndex:
                                    machinePartPositions.part2.zIndex,
                            }}

                            animate={{

                                x:
                                    isExpanded
                                        ? machinePartPositions.part2.expandedX
                                        : 0,

                                y:
                                    isExpanded
                                        ? machinePartPositions.part2.expandedY
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


                        {/* =================================================
                PART 3
                MAIN FRONT BODY
               ================================================= */}

                        <motion.img

                            src={cyberho3}

                            alt="Cyber Ho front access body"

                            draggable={false}

                            style={{
                                position: "absolute",

                                top:
                                    machinePartPositions.part3.top,

                                left:
                                    machinePartPositions.part3.left,

                                right:
                                    machinePartPositions.part3.right,

                                bottom:
                                    machinePartPositions.part3.bottom,

                                width:
                                    machinePartPositions.part3.width,

                                transform: `
                  translateX(
                    ${machinePartPositions.part3.translateX}
                  )
                `,

                                zIndex:
                                    machinePartPositions.part3.zIndex,
                            }}

                            animate={{

                                x:
                                    isExpanded
                                        ? machinePartPositions.part3.expandedX
                                        : 0,

                                y:
                                    isExpanded
                                        ? machinePartPositions.part3.expandedY
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


                        {/* =================================================
                PART 4
                CASTER WHEELS
               ================================================= */}

                        <motion.img

                            src={cyberho4}

                            alt="Cyber Ho caster wheels"

                            draggable={false}

                            style={{
                                position: "absolute",

                                top:
                                    machinePartPositions.part4.top,

                                left:
                                    machinePartPositions.part4.left,

                                right:
                                    machinePartPositions.part4.right,

                                bottom:
                                    machinePartPositions.part4.bottom,

                                width:
                                    machinePartPositions.part4.width,

                                transform: `
                  translateX(
                    ${machinePartPositions.part4.translateX}
                  )
                `,

                                zIndex:
                                    machinePartPositions.part4.zIndex,
                            }}

                            animate={{

                                x:
                                    isExpanded
                                        ? machinePartPositions.part4.expandedX
                                        : 0,

                                y:
                                    isExpanded
                                        ? machinePartPositions.part4.expandedY
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
            TAP BUTTON
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


export default CyberHoMachine;