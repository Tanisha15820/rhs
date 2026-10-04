import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Reusable1 from "../../assets/images/Reusable1.png";
import Reusable2 from "../../assets/images/Reusable2.png";

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

                ${side === "bottom" || side === "top"
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


            {/* TOP CONNECTOR */}
            {side === "top" && (
                <div className="flex flex-col items-center">

                    <div
                        className="
                            h-[8px]
                            w-[8px]

                            rounded-full

                            bg-[#1677FF]
                        "
                    />

                    <div
                        className="w-[1px] bg-[#1677FF]"
                        style={{
                            height: `${lineWidth}px`,
                        }}
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


            {/* BOTTOM CONNECTOR */}
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
   URETERORENOSCOPE KEYPOINT DATA
   ========================================================= */

const machinePoints = [
    {
        title: "Control Knobs",
        description: "Scope Movement & Direction Control",
    },

    {
        title: "Accessory Port",
        description: "Instrument / Accessory Connection",
    },

    {
        title: "Control Handle",
        description: "Main Ergonomic Scope Operation",
    },

    {
        title: "Proximal Connector",
        description: "Visualization System Connection",
    },

    {
        title: "Flexible Insertion Tube",
        description: "Smooth Controlled Navigation",
    },

    {
        title: "Depth Markers",
        description: "Insertion Position Reference",
    },

    {
        title: "Distal Tip",
        description: "Examination / Treatment End",
    },
];


/* =========================================================
   MACHINE IMAGE POSITION SETTINGS

   CHANGE POSITION / SIZE FROM HERE ONLY

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
       CONTROL HANDLE
       Reusable1.png
       ===================================================== */

    part1: {
        top: "60px",
        left: "-20%",
        right: "auto",
        bottom: "auto",

        width: "100%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: -45,
        expandedY: -10,

        zIndex: 30,

        /* ---------- MOBILE POSITION ---------- */
        mobile: {
            top: "60px",
            left: "-10%",
            right: "auto",
            bottom: "auto",

            width: "80%",
            height: "auto",

            translateX: "-50%",
            translateY: "0px",

            expandedX: -45,
            expandedY: -10,

            zIndex: 30,
        },
    },


    /* =====================================================
       PART 2
       FLEXIBLE TUBE
       Reusable2.png
       ===================================================== */

    part2: {
        top: "190px",
        left: "53%",
        right: "auto",
        bottom: "auto",

        width: "80%",
        height: "auto",

        translateX: "-50%",
        translateY: "0px",

        expandedX: 45,
        expandedY: 15,

        zIndex: 20,

        /* ---------- MOBILE POSITION ---------- */
        mobile: {
            top: "115px",
            left: "45%",
            right: "auto",
            bottom: "auto",

            width: "78%",
            height: "auto",

            translateX: "-50%",
            translateY: "0px",

            expandedX: 45,
            expandedY: 15,

            zIndex: 20,
        },
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

const UreterorenoscopeMachine = () => {

    const [
        isExpanded,
        setIsExpanded,
    ] = useState(false);

    const isMobile = useIsMobile();


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

                    min-h-[520px]
                    sm:min-h-[560px]
                    lg:min-h-[600px]
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

                        blur-[90px]
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

                        min-h-[500px]

                        w-[280px]
                        xs:w-[320px]
                        sm:w-[380px]
                        lg:w-[480px]

                        max-w-full
                    "

                    onClick={toggleMachine}

                    role="button"

                    tabIndex={0}

                    aria-label={
                        isExpanded
                            ? "Collapse ureterorenoscope details"
                            : "Expand ureterorenoscope details"
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

                                {/* CONTROL KNOBS */}
                                <KeyPoint
                                    title="Control Knobs"
                                    description="Scope Movement & Direction Control"

                                    position="
                                        left-[-320px]
                                        top-[160px]
                                    "

                                    side="left"

                                    lineWidth={55}
                                />


                                {/* ACCESSORY PORT */}
                                <KeyPoint
                                    title="Accessory Port"
                                    description="Instrument / Accessory Connection"

                                    position="
                                        left-[30px]
                                        top-[30px]
                                    "

                                    side="bottom"

                                    lineWidth={45}
                                />


                                {/* PROXIMAL CONNECTOR */}
                                <KeyPoint
                                    title="Proximal Connector"
                                    description="Visualization System Connection"

                                    position="
                                        left-[-370px]
                                        top-[230px]
                                    "

                                    side="left"

                                    lineWidth={65}
                                />


                                {/* CONTROL HANDLE */}
                                <KeyPoint
                                    title="Control Handle"
                                    description="Main Ergonomic Scope Operation"

                                    position="
                                        left-[-50px]
                                        top-[280px]
                                    "

                                    side="top"

                                    lineWidth={45}
                                />


                                {/* FLEXIBLE TUBE */}
                                <KeyPoint
                                    title="Flexible Insertion Tube"
                                    description="Smooth Controlled Navigation"

                                    position="
                                        right-[-300px]
                                        top-[220px]
                                    "

                                    side="right"

                                    lineWidth={65}
                                />


                                {/* DEPTH MARKERS */}
                                <KeyPoint
                                    title="Depth Markers"
                                    description="Insertion Position Reference"

                                    position="
                                        right-[-235px]
                                        top-[350px]
                                    "

                                    side="right"

                                    lineWidth={60}
                                />


                                {/* DISTAL TIP */}
                                <KeyPoint
                                    title="Distal Tip"
                                    description="Examination / Treatment End"

                                    position="
                                        right-[50px]
                                        top-[380px]
                                    "

                                    side="top"

                                    lineWidth={50}
                                />

                            </>

                        )}

                    </AnimatePresence>


                    {/* =================================================
                        MACHINE PARTS
                       ================================================= */}

                    <div
                        className="
                            relative

                            z-10

                            h-[500px]

                            w-full
                        "
                    >

                        {/* CONTROL HANDLE */}
                        <MachinePart
                            src={Reusable1}

                            alt="Reusable Ureterorenoscope Control Handle"

                            config={
                                isMobile
                                    ? machinePartPositions.part1.mobile
                                    : machinePartPositions.part1
                            }

                            isExpanded={
                                isExpanded
                            }
                        />


                        {/* FLEXIBLE INSERTION TUBE */}
                        <MachinePart
                            src={Reusable2}

                            alt="Reusable Ureterorenoscope Flexible Tube"

                            config={
                                isMobile
                                    ? machinePartPositions.part2.mobile
                                    : machinePartPositions.part2
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


export default UreterorenoscopeMachine;