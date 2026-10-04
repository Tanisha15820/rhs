import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
    Activity,
    CircleDot,
    Crosshair,
    Monitor,
    MousePointerClick,
    OctagonX,
    PlugZap,
    RotateCcw,
    Wind,
    Zap,
} from "lucide-react";

import dk30Img from "../../assets/images/dk30.png";


/* =========================================================
   EASY POSITION SETTINGS

   Edit mostly this array.

   CARD:
   left / right / top / bottom

   CONNECTOR:
   left / right / top / bottom
   width
   angle

   Dot is attached to connector automatically.
   ========================================================= */

const keyPoints = [
    {
        id: 1,

        title: "Laser Output Port",
        subtitle: "Holmium Laser Energy Delivery",

        icon: CircleDot,

        card: {
            left: "8%",
            right: "auto",
            top: "32%",
            bottom: "auto",
        },

        connector: {
            left: "21%",
            right: "auto",
            top: "37%",
            bottom: "auto",

            width: 120,
            angle: 35,

            dotAt: "end",
        },
    },


    {
        id: 2,

        title: "Energy Control",
        subtitle: "Adjustable Pulse Energy Setting",

        icon: Zap,

        card: {
            left: "7%",
            right: "auto",
            top: "45%",
            bottom: "auto",
        },

        connector: {
            left: "19%",
            right: "auto",
            top: "50%",
            bottom: "auto",

            width: 145,
            angle: 7,

            dotAt: "end",
        },
    },


    {
        id: 3,

        title: "Footswitch / Accessory Port",
        subtitle: "External Procedure Control",

        icon: PlugZap,

        card: {
            left: "4%",
            right: "auto",
            top: "57%",
            bottom: "auto",
        },

        connector: {
            left: "19%",
            right: "auto",
            top: "62%",
            bottom: "auto",

            width: 120,
            angle: 5,

            dotAt: "end",
        },
    },


    {
        id: 4,

        title: "Touchscreen Display",
        subtitle: "Treatment Parameters & System Status",

        icon: Monitor,

        card: {
            left: "43%",
            right: "auto",
            top: "8%",
            bottom: "auto",

            transform: "translateX(-50%)",
        },

        connector: {
            left: "50%",
            right: "auto",
            top: "17%",
            bottom: "auto",

            width: 95,

            vertical: true,
            verticalDirection: "down",

            dotAt: "end",
        },
    },


    {
        id: 5,

        title: "Frequency Control",
        subtitle: "Adjustable Pulse Rate Control",

        icon: Activity,

        card: {
            left: "auto",
            right: "6%",
            top: "27%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "21%",
            top: "34%",
            bottom: "auto",

            width: 330,
            angle: 145,

            dotAt: "end",
        },
    },


    {
        id: 6,

        title: "Aiming Beam Control",
        subtitle: "Precision Treatment Targeting",

        icon: Crosshair,

        card: {
            left: "auto",
            right: "7%",
            top: "40%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "22%",
            top: "44%",
            bottom: "auto",

            width: 350,
            angle: 165,

            dotAt: "end",
        },
    },


    {
        id: 7,

        title: "Cooling & Ventilation",
        subtitle: "Stable System Temperature Management",

        icon: Wind,

        card: {
            left: "auto",
            right: "5%",
            top: "60%",
            bottom: "auto",
        },

        connector: {
            left: "auto",
            right: "20%",
            top: "65%",
            bottom: "auto",

            width: 110,
            angle: 180,

            dotAt: "end",
        },
    },


    {
        id: 8,

        title: "Emergency Stop",
        subtitle: "Immediate Safety Shutdown",

        icon: OctagonX,

        card: {
            left: "45%",
            right: "auto",
            top: "auto",
            bottom: "3%",

            transform: "translateX(-50%)",
        },

        connector: {
            left: "53%",
            right: "auto",
            top: "auto",
            bottom: "12%",

            width: 110,

            vertical: true,
            verticalDirection: "up",

            dotAt: "end",
        },
    },
];


/* =========================================================
   MACHINE PARTS

   Current part positions kept as-is.
   ========================================================= */

const machineParts = [
    {
        id: "left-section",

        clipPath: "inset(14% 67% 10% 0%)",

        x: -38,
        y: 0,
    },

    {
        id: "display-section",

        clipPath: "inset(13% 29% 37% 29%)",

        x: 0,
        y: -30,
    },

    {
        id: "right-section",

        clipPath: "inset(12% 0% 12% 66%)",

        x: 52,
        y: 0,
    },

    {
        id: "control-section",

        clipPath: "inset(57% 26% 15% 27%)",

        x: 0,

        // Emergency stop section slightly lower
        y: 45,
    },

    {
        id: "base-section",

        clipPath: "inset(79% 12% 0% 12%)",

        x: 0,
        y: 38,
    },
];


/* =========================================================
   KEY POINT CARD
   Smaller / compact design
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
                        transform: card.transform || "none",
                    }}
                    className="absolute z-40 hidden xl:block"
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
   CONNECTOR LINE + DOT

   Line + dot stay attached.

   Move connector using:
   left/right/top/bottom

   Dot will move automatically.
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

                        /* Normal connectors remain unchanged */
                        ...(
                            !isVertical
                                ? {
                                    width: connector.width,
                                    transform: `rotate(${connector.angle}deg)`,
                                    transformOrigin:
                                        dotIsStart
                                            ? "left center"
                                            : "right center",
                                }
                                : {
                                    width: "1.5px",
                                    height: connector.width,

                                    transformOrigin:
                                        verticalUp
                                            ? "center bottom"
                                            : "center top",
                                }
                        ),
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

                    {/* =====================================
                        NORMAL HORIZONTAL / DIAGONAL DOTS
                       ===================================== */}

                    {!isVertical && dotIsStart && (

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


                    {!isVertical && !dotIsStart && (

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


                    {/* =====================================
                        VERTICAL DOWN
                        Touchscreen
                       ===================================== */}

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


                    {/* =====================================
                        VERTICAL UP
                        Emergency Stop
                       ===================================== */}

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
   MOBILE KEY POINT
   ========================================================= */

const MobileKeyPoint = ({
    item,
    index,
    show,
}) => {

    const Icon = item.icon;


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
                        delay: index * 0.04,
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
   MAIN DK30 COMPONENT
   ========================================================= */

const DK30Machine = () => {

    const [exploded, setExploded] =
        useState(false);


    const toggleMachine = () => {
        setExploded((prev) => !prev);
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
                            exploded
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
                                exploded
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

                        {exploded ? (

                            <>
                                <RotateCcw size={15} />
                                Click machine to assemble
                            </>

                        ) : (

                            <>
                                <MousePointerClick size={15} />
                                Click machine to explore
                            </>

                        )}

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
            h-[700px]
            max-w-[1200px]
            xl:block
          "
                >

                    {/* Key point cards */}
                    {keyPoints.map(
                        (item, index) => (

                            <KeyPointCard
                                key={item.id}
                                {...item}
                                show={exploded}
                                delay={index * 0.04}
                            />

                        )
                    )}


                    {/* Connector lines */}
                    {keyPoints.map(
                        (item, index) => (

                            <FloatingConnector
                                key={`connector-${item.id}`}
                                connector={item.connector}
                                show={exploded}
                                delay={
                                    index * 0.04 + 0.05
                                }
                            />

                        )
                    )}


                    {/* =================================================
              MACHINE
             ================================================= */}

                    <motion.div
                        onClick={toggleMachine}
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

              h-[430px]
              w-[560px]

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
                                    exploded
                                        ? 0.24
                                        : 0.14,

                                scale:
                                    exploded
                                        ? 1.08
                                        : 1,
                            }}
                            className="
                absolute
                left-1/2
                top-1/2
                h-[270px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-300/25
                blur-[65px]
              "
                        />


                        {/* Original faint machine */}
                        <motion.img
                            src={dk30Img}
                            alt="Litho DK30 Holmium Laser System"
                            draggable={false}
                            animate={{
                                opacity:
                                    exploded ? 0 : 1,

                                scale:
                                    exploded
                                        ? 0.99
                                        : 1,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                drop-shadow-[0_22px_28px_rgba(15,23,42,0.16)]
              "
                        />


                        {/* 5 exploded parts */}
                        {machineParts.map(
                            (part, index) => (

                                <motion.div
                                    key={part.id}
                                    initial={false}
                                    animate={{
                                        x:
                                            exploded
                                                ? part.x
                                                : 0,

                                        y:
                                            exploded
                                                ? part.y
                                                : 0,

                                        opacity:
                                            exploded
                                                ? 1
                                                : 0,
                                    }}
                                    transition={{
                                        duration: 0.5,

                                        delay:
                                            exploded
                                                ? index * 0.035
                                                : 0,

                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    style={{
                                        clipPath:
                                            part.clipPath,
                                    }}
                                    className="
                    absolute
                    inset-0
                    h-full
                    w-full
                  "
                                >

                                    <img
                                        src={dk30Img}
                                        alt=""
                                        draggable={false}
                                        className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-contain
                    "
                                    />

                                </motion.div>

                            )
                        )}

                    </motion.div>

                </div>


                {/* =================================================
            MOBILE / TABLET
           ================================================= */}

                <div className="xl:hidden">

                    <div
                        onClick={toggleMachine}
                        className="
              relative
              mx-auto
              flex
              min-h-[260px]
              max-w-[560px]
              cursor-pointer
              items-center
              justify-center
              sm:min-h-[330px]
            "
                    >

                        <div
                            className="
                absolute
                left-1/2
                top-1/2
                h-44
                w-60
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-300/20
                blur-3xl
              "
                        />


                        <motion.img
                            src={dk30Img}
                            alt="DK30 Holmium Laser Machine"
                            draggable={false}
                            animate={{
                                scale:
                                    exploded
                                        ? 1.01
                                        : 1,
                            }}
                            className="
                relative
                z-10
                max-h-[290px]
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
                            (item, index) => (

                                <MobileKeyPoint
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    show={exploded}
                                />

                            )
                        )}

                    </div>

                </div>


                {/* =================================================
            ASSEMBLE BUTTON
           ================================================= */}

                <AnimatePresence>

                    {exploded && (

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
                            className="
                mt-3
                flex
                justify-center
              "
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    setExploded(false)
                                }
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-200
                  bg-white
                  px-4
                  py-2
                  text-[11px]
                  font-bold
                  text-[#1681FF]
                  shadow-sm
                  transition
                  hover:bg-blue-50
                "
                            >

                                <RotateCcw size={14} />

                                Assemble DK30

                            </button>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

        </section>

    );
};


export default DK30Machine;