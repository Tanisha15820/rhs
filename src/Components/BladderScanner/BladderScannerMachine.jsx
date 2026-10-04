import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BladderScanner1 from "../../assets/images/BladderScanner1.png";
import BladderScanner2 from "../../assets/images/BladderScanner2.png";
import BladderScanner3 from "../../assets/images/BladderScanner3.png";
import BladderScanner4 from "../../assets/images/BladderScanner4.png";
import BladderScanner5 from "../../assets/images/BladderScanner5.png";


/* =========================================================
   DESKTOP KEY POINT
   SAME UI STYLE AS SMARTXIDE
   ========================================================= */

const KeyPoint = ({
    title,
    description,
    position,
    side = "left",
    lineWidth = 50,
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


            {/* LEFT CONNECTOR */}
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


            {/* BOTTOM / VERTICAL CONNECTOR */}
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
   BLADDER SCANNER KEYPOINTS
   ========================================================= */

const machinePoints = [
    {
        title: "Touchscreen Display",
        description: "High-Resolution Touch Interface",
    },

    {
        title: "Control Module",
        description: "Handheld Parameter & System Control",
    },

    {
        title: "Storage Basket",
        description: "Accessory & Cable Storage",
    },

    {
        title: "Support Pole",
        description: "Height-Adjustable Structural Support",
    },

    {
        title: "Caster Base",
        description: "Stable Five-Wheel Mobile Base",
    },
];


/* =========================================================
   MACHINE PART POSITION SETTINGS

   IMPORTANT:
   Change image positions/sizes ONLY from here.

   top
   left
   right
   bottom

   width
   height

   translateX
   translateY

   expandedX
   expandedY

   zIndex
   ========================================================= */

const machinePartPositions = {

    /* =====================================================
       PART 1
       TOUCHSCREEN
       BladderScanner1.png
       ===================================================== */

    part1: {
        top: "-70px",
        left: "20%",
        right: "auto",
        bottom: "auto",

        width: "72%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: -15,
        expandedY: -35,

        zIndex: 50,
    },


    /* =====================================================
       PART 2
       CONTROL MODULE
       BladderScanner2.png
       ===================================================== */

    part2: {
        top: "-10px",
        left: "50%",
        right: "auto",
        bottom: "auto",

        width: "78%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: 40,
        expandedY: -8,

        zIndex: 45,
    },


    /* =====================================================
       PART 3
       STORAGE BASKET
       BladderScanner3.png
       ===================================================== */

    part3: {
        top: "50px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "85%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: 0,
        expandedY: 18,

        zIndex: 35,
    },


    /* =====================================================
       PART 4
       SUPPORT POLE
       BladderScanner4.png
       ===================================================== */

    part4: {
        top: "225px",
        left: "10%",
        right: "auto",
        bottom: "auto",

        width: "70%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: 0,
        expandedY: 42,

        zIndex: 25,
    },


    /* =====================================================
       PART 5
       CASTER BASE
       BladderScanner5.png
       ===================================================== */

    part5: {
        top: "485px",
        left: "-5%",
        right: "auto",
        bottom: "auto",

        width: "115%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: 0,
        expandedY: 75,

        zIndex: 20,
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
                height: config.height,

                transform: `
                    translate(
                        ${config.translateX},
                        ${config.translateY}
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

const BladderScannerMachine = () => {

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

                    min-h-[760px]
                    sm:min-h-[780px]
                    lg:min-h-[800px]
                "
            >

                {/* BACKGROUND GLOW */}
                <div
                    className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-1/2

                        h-[190px]
                        w-[190px]

                        -translate-x-1/2
                        -translate-y-1/2

                        rounded-full

                        bg-[#1CAFED]/[0.06]

                        blur-[90px]

                        sm:h-[210px]
                        sm:w-[210px]
                    "
                />


                {/* =================================================
                    MACHINE WRAPPER
                   ================================================= */}

                <div
                    className="
                        absolute

                        left-1/2
                        top-1/2

                        -translate-x-1/2
                        -translate-y-1/2

                        cursor-pointer
                        outline-none

                        min-h-[700px]

                        w-[270px]

                        max-w-full
                    "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse Bladder Scanner details"
                            : "Expand Bladder Scanner details"
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

                    {/* =================================================
                        DESKTOP KEYPOINTS
                       ================================================= */}

                    <AnimatePresence>

                        {isExpanded && (

                            <>

                                {/* TOUCHSCREEN */}
                                <KeyPoint
                                    title="Touchscreen Display"
                                    description="High-Resolution Touch Interface"

                                    position="
                                        left-[-180px]
                                        top-[-30px]
                                    "

                                    side="left"

                                    lineWidth={60}
                                />


                                {/* CONTROL MODULE */}
                                <KeyPoint
                                    title="Control Module"
                                    description="Handheld Parameter & System Control"

                                    position="
                                        right-[-320px]
                                        top-[60px]
                                    "

                                    side="right"

                                    lineWidth={65}
                                />


                                {/* STORAGE BASKET */}
                                <KeyPoint
                                    title="Storage Basket"
                                    description="Accessory & Cable Storage"

                                    position="
                                        left-[-170px]
                                        top-[180px]
                                    "

                                    side="left"

                                    lineWidth={62}
                                />


                                {/* SUPPORT POLE */}
                                <KeyPoint
                                    title="Support Pole"
                                    description="Height-Adjustable Structural Support"

                                    position="
                                        left-[-140px]
                                        top-[410px]
                                    "

                                    side="left"

                                    lineWidth={60}
                                />


                                {/* CASTER BASE */}
                                <KeyPoint
                                    title="Caster Base"
                                    description="Stable Five-Wheel Mobile Base"

                                    position="
                                        right-[-205px]
                                        top-[670px]
                                    "

                                    side="right"

                                    lineWidth={62}
                                />

                            </>

                        )}

                    </AnimatePresence>


                    {/* =================================================
                        MACHINE IMAGES
                       ================================================= */}

                    <div
                        className="
                            relative

                            z-10

                            h-[700px]

                            w-full
                        "
                    >

                        {/* PART 1 */}
                        <MachinePart
                            src={BladderScanner1}

                            alt="Bladder Scanner Touchscreen Display"

                            config={
                                machinePartPositions.part1
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 2 */}
                        <MachinePart
                            src={BladderScanner2}

                            alt="Bladder Scanner Control Module"

                            config={
                                machinePartPositions.part2
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 3 */}
                        <MachinePart
                            src={BladderScanner3}

                            alt="Bladder Scanner Storage Basket"

                            config={
                                machinePartPositions.part3
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 4 */}
                        <MachinePart
                            src={BladderScanner4}

                            alt="Bladder Scanner Support Pole"

                            config={
                                machinePartPositions.part4
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* PART 5 */}
                        <MachinePart
                            src={BladderScanner5}

                            alt="Bladder Scanner Caster Base"

                            config={
                                machinePartPositions.part5
                            }

                            isExpanded={
                                isExpanded
                            }
                        />

                    </div>

                </div>

            </div>


            {/* =====================================================
                MOBILE
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

                {/* TOGGLE BUTTON */}
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


export default BladderScannerMachine;