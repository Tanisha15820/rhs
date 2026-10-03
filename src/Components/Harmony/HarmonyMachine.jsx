import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
    Monitor,
    CircleDot,
    Power,
    BatteryMedium,
    Radio,
    MousePointerClick,
    Cable,
    Layers3,
} from "lucide-react";

import harmonyImg from "../../assets/images/harmony.png";


/* =========================================================
   HARMONY KEY POINTS

   CARD POSITION:
   left / right / top / bottom

   CONNECTOR POSITION:
   left / right / top / bottom
   width
   angle

   For vertical line:
   vertical: true
   verticalDirection: "down" / "up"

   Dot remains attached automatically.
   ========================================================= */

const keyPoints = [
    {
        id: 1,

        title: "Digital Display",
        subtitle: "Channel & System Status Interface",

        icon: Monitor,

        card: {
            left: "50%",
            right: "auto",
            top: "4%",
            bottom: "auto",

            transform: "translateX(-50%)",
        },

        connector: {
            left: "50%",
            right: "auto",
            top: "14%",
            bottom: "auto",

            width: 95,

            vertical: true,
            verticalDirection: "down",

            dotAt: "end",
        },
    },


    {
        id: 2,

        title: "Central Control Button",
        subtitle: "Primary User Control",

        icon: Power,

        card: {
            left: "5%",
            right: "auto",
            top: "31%",
            bottom: "auto",
        },

        connector: {
            left: "21%",
            right: "auto",
            top: "36%",
            bottom: "auto",

            width: 165,
            angle: 12,

            dotAt: "end",
        },
    },


    {
        id: 3,

        title: "Channel 1 Input",
        subtitle: "CH1 Sensor Connection",

        icon: CircleDot,

        card: {
            left: "4%",
            right: "auto",
            top: "48%",
            bottom: "auto",
        },

        connector: {
            left: "20%",
            right: "auto",
            top: "53%",
            bottom: "auto",

            width: 135,
            angle: 8,

            dotAt: "end",
        },
    },


    {
        id: 4,

        title: "Channel 2 Input",
        subtitle: "CH2 Sensor Connection",

        icon: Cable,

        card: {
            left: "4%",
            right: "auto",
            top: "64%",
            bottom: "auto",
        },

        connector: {
            left: "20%",
            right: "auto",
            top: "69%",
            bottom: "auto",

            width: 165,
            angle: -8,

            dotAt: "end",
        },
    },


    {
        id: 5,

        title: "Channel 3 Input",
        subtitle: "CH3 Sensor Connection",

        icon: Layers3,

        card: {
            left: "auto",
            right: "4%",
            top: "48%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "20%",
            top: "53%",
            bottom: "auto",

            width: 145,
            angle: 172,

            dotAt: "end",
        },
    },


    {
        id: 6,

        title: "Channel 4 Input",
        subtitle: "CH4 Sensor Connection",

        icon: CircleDot,

        card: {
            left: "auto",
            right: "4%",
            top: "64%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "20%",
            top: "69%",
            bottom: "auto",

            width: 150,
            angle: 188,

            dotAt: "end",
        },
    },


    {
        id: 7,

        title: "Channel 5 Input",
        subtitle: "CH5 Sensor Connection",

        icon: Cable,

        card: {
            left: "auto",
            right: "4%",
            top: "80%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "20%",
            top: "84%",
            bottom: "auto",

            width: 135,
            angle: 185,

            dotAt: "end",
        },
    },


    {
        id: 8,

        title: "Battery Indicator",
        subtitle: "Portable Power Status",

        icon: BatteryMedium,

        card: {
            left: "auto",
            right: "5%",
            top: "30%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "21%",
            top: "35%",
            bottom: "auto",

            width: 170,
            angle: 165,

            dotAt: "end",
        },
    },


    {
        id: 9,

        title: "Wireless Status",
        subtitle: "Communication Status Indicator",

        icon: Radio,

        card: {
            left: "5%",
            right: "auto",
            top: "16%",
            bottom: "auto",
        },

        connector: {
            left: "21%",
            right: "auto",
            top: "21%",
            bottom: "auto",

            width: 175,
            angle: 12,

            dotAt: "end",
        },
    },
];


/* =========================================================
   KEY POINT CARD
   ========================================================= */

const KeyPointCard = ({
    title,
    subtitle,
    icon: Icon,
    card,
    show,
    delay,
}) => {
    return (
        <AnimatePresence>
            {show && (

                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.94,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    exit={{
                        opacity: 0,
                        scale: 0.94,
                    }}

                    transition={{
                        duration: 0.3,
                        delay,
                    }}

                    style={{
                        left: card.left,
                        right: card.right,
                        top: card.top,
                        bottom: card.bottom,

                        transform:
                            card.transform ||
                            "none",
                    }}

                    className="
            absolute
            z-40
            hidden
            xl:block
          "
                >

                    <div
                        className="
              flex
              min-h-[62px]
              w-[210px]
              items-center
              gap-2.5
              rounded-[13px]
              border
              border-[#2684FF]
              bg-white/95
              px-3
              py-2.5
              shadow-[0_8px_24px_rgba(38,132,255,0.10)]
              backdrop-blur-md
            "
                    >

                        {/* Icon */}
                        <div
                            className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-[9px]
                bg-[#EDF5FF]
                text-[#1681FF]
              "
                        >

                            <Icon
                                size={16}
                                strokeWidth={2.3}
                            />

                        </div>


                        {/* Text */}
                        <div className="min-w-0">

                            <h4
                                className="
                  text-[12px]
                  font-bold
                  leading-tight
                  text-[#071B44]
                "
                            >
                                {title}
                            </h4>


                            <p
                                className="
                  mt-0.5
                  text-[8.5px]
                  leading-[12px]
                  text-[#8291B2]
                "
                            >
                                {subtitle}
                            </p>

                        </div>

                    </div>

                </motion.div>

            )}
        </AnimatePresence>
    );
};


/* =========================================================
   CONNECTOR LINE + ATTACHED DOT
   ========================================================= */

const FloatingConnector = ({
    connector,
    show,
    delay,
}) => {

    const dotIsStart =
        connector.dotAt === "start";

    const isVertical =
        connector.vertical === true;

    const verticalUp =
        connector.verticalDirection === "up";


    return (
        <AnimatePresence>

            {show && (

                <motion.div

                    initial={{
                        opacity: 0,

                        ...(isVertical
                            ? { scaleY: 0 }
                            : { scaleX: 0 }),
                    }}

                    animate={{
                        opacity: 1,

                        ...(isVertical
                            ? { scaleY: 1 }
                            : { scaleX: 1 }),
                    }}

                    exit={{
                        opacity: 0,

                        ...(isVertical
                            ? { scaleY: 0 }
                            : { scaleX: 0 }),
                    }}

                    transition={{
                        duration: 0.35,
                        delay,
                    }}

                    style={{
                        left: connector.left,
                        right: connector.right,
                        top: connector.top,
                        bottom: connector.bottom,


                        ...(isVertical
                            ? {
                                width: "1.5px",
                                height: connector.width,

                                transformOrigin:
                                    verticalUp
                                        ? "center bottom"
                                        : "center top",
                            }

                            : {
                                width: connector.width,

                                transform:
                                    `rotate(${connector.angle}deg)`,

                                transformOrigin:
                                    dotIsStart
                                        ? "left center"
                                        : "right center",
                            }),
                    }}

                    className={`
            pointer-events-none
            absolute
            z-30
            hidden
            bg-[#1681FF]
            xl:block

            ${isVertical
                            ? "w-[1.5px]"
                            : "h-[1.5px] origin-left"
                        }
          `}
                >

                    {/* Horizontal Start Dot */}
                    {!isVertical &&
                        dotIsStart && (

                            <div
                                className="
                  absolute
                  -left-[4px]
                  top-1/2
                  h-[8px]
                  w-[8px]
                  -translate-y-1/2
                  rounded-full
                  border-[1.5px]
                  border-white
                  bg-[#1681FF]
                  shadow-sm
                "
                            />

                        )}


                    {/* Horizontal End Dot */}
                    {!isVertical &&
                        !dotIsStart && (

                            <div
                                className="
                  absolute
                  -right-[4px]
                  top-1/2
                  h-[8px]
                  w-[8px]
                  -translate-y-1/2
                  rounded-full
                  border-[1.5px]
                  border-white
                  bg-[#1681FF]
                  shadow-sm
                "
                            />

                        )}


                    {/* Vertical Down Dot */}
                    {isVertical &&
                        !verticalUp &&
                        !dotIsStart && (

                            <div
                                className="
                  absolute
                  -bottom-[4px]
                  left-1/2
                  h-[8px]
                  w-[8px]
                  -translate-x-1/2
                  rounded-full
                  border-[1.5px]
                  border-white
                  bg-[#1681FF]
                  shadow-sm
                "
                            />

                        )}


                    {/* Vertical Up Dot */}
                    {isVertical &&
                        verticalUp &&
                        !dotIsStart && (

                            <div
                                className="
                  absolute
                  -top-[4px]
                  left-1/2
                  h-[8px]
                  w-[8px]
                  -translate-x-1/2
                  rounded-full
                  border-[1.5px]
                  border-white
                  bg-[#1681FF]
                  shadow-sm
                "
                            />

                        )}

                </motion.div>

            )}

        </AnimatePresence>
    );
};


/* =========================================================
   MOBILE KEYPOINT
   ========================================================= */

const MobileKeyPoint = ({
    item,
    index,
    show,
}) => {

    const Icon =
        item.icon;


    return (
        <AnimatePresence>

            {show && (

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 10,
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
                        delay:
                            index * 0.04,
                    }}

                    className="
            flex
            items-center
            gap-2.5
            rounded-xl
            border
            border-blue-100
            bg-white
            p-2.5
            shadow-sm
          "
                >

                    <div
                        className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-blue-50
              text-[#1681FF]
            "
                    >

                        <Icon size={16} />

                    </div>


                    <div>

                        <h4
                            className="
                text-[11px]
                font-bold
                text-slate-900
              "
                        >
                            {item.title}
                        </h4>


                        <p
                            className="
                mt-0.5
                text-[9px]
                leading-3.5
                text-slate-500
              "
                        >
                            {item.subtitle}
                        </p>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>
    );
};


/* =========================================================
   MAIN HARMONY COMPONENT
   ========================================================= */

const HarmonyMachine = () => {

    const [
        showKeyPoints,
        setShowKeyPoints,
    ] = useState(false);


    const toggleKeyPoints = () => {

        setShowKeyPoints(
            (prev) => !prev
        );

    };


    return (

        <section
            className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-8
        md:py-12
      "
        >

            <div
                className="
          mx-auto
          max-w-[1400px]
          px-4
          sm:px-6
          lg:px-8
        "
            >

                {/* =================================================
            CLICK HINT
           ================================================= */}

                <div className="mb-2 text-center">

                    <motion.div

                        animate={
                            showKeyPoints

                                ? {}

                                : {
                                    scale: [
                                        1,
                                        1.03,
                                        1,
                                    ],
                                }
                        }

                        transition={{
                            duration: 2,

                            repeat:
                                showKeyPoints
                                    ? 0
                                    : Infinity,
                        }}

                        className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50/80
              px-4
              py-2
              text-xs
              font-semibold
              text-[#1681FF]
            "
                    >

                        <MousePointerClick
                            size={15}
                        />

                        {showKeyPoints
                            ? "Click machine to hide key points"
                            : "Click machine to view key points"}

                    </motion.div>

                </div>


                {/* =================================================
            DESKTOP AREA
           ================================================= */}

                <div
                    className="
            relative
            mx-auto
            hidden
            h-[650px]
            max-w-[1200px]
            xl:block
          "
                >

                    {/* Key point cards */}
                    {keyPoints.map(
                        (
                            item,
                            index
                        ) => (

                            <KeyPointCard
                                key={
                                    item.id
                                }
                                {...item}
                                show={
                                    showKeyPoints
                                }
                                delay={
                                    index *
                                    0.04
                                }
                            />

                        )
                    )}


                    {/* Connectors */}
                    {keyPoints.map(
                        (
                            item,
                            index
                        ) => (

                            <FloatingConnector
                                key={`connector-${item.id}`}
                                connector={
                                    item.connector
                                }
                                show={
                                    showKeyPoints
                                }
                                delay={
                                    index *
                                    0.04 +
                                    0.05
                                }
                            />

                        )
                    )}


                    {/* =================================================
              MACHINE
             ================================================= */}

                    <motion.div

                        onClick={
                            toggleKeyPoints
                        }

                        whileHover={{
                            scale: 1.01,
                        }}

                        whileTap={{
                            scale: 0.995,
                        }}

                        className="
              absolute
              left-1/2
              top-1/2
              z-20

              h-[390px]
              w-[500px]

              -translate-x-1/2
              -translate-y-1/2

              cursor-pointer
              select-none
            "
                    >

                        {/* Glow */}
                        <motion.div
                            animate={{
                                opacity:
                                    showKeyPoints
                                        ? 0.23
                                        : 0.13,
                            }}
                            className="
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-300/25
                blur-[60px]
              "
                        />


                        {/* Machine */}
                        <motion.img
                            src={
                                harmonyImg
                            }

                            alt="MMT Harmony System"

                            draggable={
                                false
                            }

                            animate={{
                                scale:
                                    showKeyPoints
                                        ? 1.01
                                        : 1,
                            }}

                            transition={{
                                duration: 0.3,
                            }}

                            className="
                relative
                z-20
                h-full
                w-full
                object-contain
                drop-shadow-[0_18px_24px_rgba(15,23,42,0.16)]
              "
                        />

                    </motion.div>

                </div>


                {/* =================================================
            MOBILE / TABLET
           ================================================= */}

                <div className="xl:hidden">

                    <div
                        onClick={
                            toggleKeyPoints
                        }

                        className="
              relative
              mx-auto
              flex
              min-h-[280px]
              max-w-[520px]
              cursor-pointer
              items-center
              justify-center
            "
                    >

                        <div
                            className="
                absolute
                left-1/2
                top-1/2
                h-44
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-300/20
                blur-3xl
              "
                        />


                        <motion.img
                            src={
                                harmonyImg
                            }

                            alt="MMT Harmony System"

                            draggable={
                                false
                            }

                            animate={{
                                scale:
                                    showKeyPoints
                                        ? 1.01
                                        : 1,
                            }}

                            transition={{
                                duration: 0.3,
                            }}

                            className="
                relative
                z-10
                max-h-[300px]
                w-full
                object-contain
                drop-shadow-[0_16px_22px_rgba(15,23,42,0.17)]
              "
                        />

                    </div>


                    {/* Mobile keypoints */}
                    <div
                        className="
              mx-auto
              mt-5
              grid
              max-w-2xl
              grid-cols-1
              gap-2.5
              sm:grid-cols-2
            "
                    >

                        {keyPoints.map(
                            (
                                item,
                                index
                            ) => (

                                <MobileKeyPoint
                                    key={
                                        item.id
                                    }
                                    item={
                                        item
                                    }
                                    index={
                                        index
                                    }
                                    show={
                                        showKeyPoints
                                    }
                                />

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>

    );
};


export default HarmonyMachine;