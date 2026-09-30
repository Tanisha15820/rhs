import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import dk301 from "../../assets/images/dk301.png";
import dk302 from "../../assets/images/dk302.png";


const MACHINE_PARTS = {
    console: {
        top: 0,
        left: 0,
        width: 320,
        expandY: -35,
    },
    cabinet: {
        top: 151,
        left: 37,
        width: 246,
        expandY: 55,
    },
};


const machinePoints = [
    {
        title: "RFID Recognition",
        description: "Accessory recognition interface",
        position: "left-[-172px] top-[36px]",
        side: "left",
        lineWidth: 42,
    },
    {
        title: "Fiber Connection",
        description: "Optical fiber connection port",
        position: "left-[-177px] top-[112px]",
        side: "left",
        lineWidth: 45,
    },
    {
        title: "Proximity Sensor",
        description: "Automatic aperture sensing",
        position: "left-[-181px] top-[190px]",
        side: "left",
        lineWidth: 48,
    },
    {
        title: "Footswitch Connector",
        description: "External footswitch connection",
        position: "left-[-174px] top-[268px]",
        side: "left",
        lineWidth: 42,
    },
    {
        title: "Touchscreen Display",
        description: "Laser settings and system status",
        position: "right-[-169px] top-[62px]",
        side: "right",
        lineWidth: 48,
    },
    {
        title: "Emergency Stop",
        description: "Accessible emergency stop control",
        position: "right-[-157px] top-[152px]",
        side: "right",
        lineWidth: 42,
    },
    {
        title: "Laser Console",
        description: "Compact upper control unit",
        position: "right-[-172px] top-[260px]",
        side: "right",
        lineWidth: 48,
    },
    {
        title: "Support Cabinet",
        description: "Stable lower machine housing",
        position: "right-[-177px] top-[375px]",
        side: "right",
        lineWidth: 44,
    },
];

/* Desktop Key Point — Surgico card style with optional top/bottom leader. */
const KeyPoint = ({
    title,
    description,
    position,
    side = "left",
    lineWidth = 50,
}) => {
    const vertical = side === "top" || side === "bottom";

    const connector = (orientation) => (
        <div
            className={
                orientation === "top" || orientation === "bottom"
                    ? "flex flex-col items-center"
                    : "flex items-center"
            }
        >
            {(orientation === "left" || orientation === "top") && (
                <div className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#1677FF]" />
            )}
            <div
                className={
                    vertical ? "w-[1px] bg-[#1677FF]" : "h-[1px] bg-[#1677FF]"
                }
                style={vertical ? { height: lineWidth } : { width: lineWidth }}
            />
            {(orientation === "right" || orientation === "bottom") && (
                <div className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#1677FF]" />
            )}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className={`pointer-events-none absolute z-[100] hidden lg:flex ${vertical ? "flex-col items-center" : "items-center"
                } ${position}`}
        >
            {(side === "right" || side === "bottom") && connector(side)}

            <div className="min-w-[150px] rounded-[10px] border border-[#2F80ED]/60 bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-2">
                    <div className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-md bg-[#1677FF]/10">
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

            {(side === "left" || side === "top") && connector(side)}
        </motion.div>
    );
};

/* Mobile Key Point — matches SurgicoMachine mobile cards. */
const MobileKeyPoint = ({ title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.3, delay: index * 0.04 }}
        className="flex min-h-[72px] items-start gap-3 rounded-xl border border-[#2F80ED]/20 bg-white p-3 shadow-[0_5px_18px_rgba(15,23,42,0.05)]"
    >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1677FF]/10">
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

const DK30Machine = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleMachine = () => setIsExpanded((prev) => !prev);

    return (
        <section className="relative overflow-hidden bg-white pt-[25px] pb-12 sm:pb-16 lg:pb-[100px]">
            {/* Machine Area — same outer layout as Surgico. */}
            <div className="relative mx-auto flex min-h-[440px] w-full max-w-[720px] items-start justify-center px-4 sm:min-h-[485px] lg:min-h-[520px]">
                <div
                    className="relative flex min-h-[440px] w-[220px] cursor-pointer justify-center outline-none sm:min-h-[485px] lg:min-h-[520px]"
                    onClick={toggleMachine}
                    role="button"
                    tabIndex={0}
                    aria-label={isExpanded ? "Collapse DK30 machine details" : "Expand DK30 machine details"}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleMachine();
                        }
                    }}
                >
                    {/* Desktop Key Points — absolute positions relative to machine. */}
                    <AnimatePresence>
                        {isExpanded &&
                            machinePoints.map((point) => (
                                <KeyPoint key={point.title} {...point} />
                            ))}
                    </AnimatePresence>

                    {/* Machine Scale Wrapper — Surgico's exact positioning approach. */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[320px] origin-top -translate-x-1/2 scale-[0.65] sm:scale-[0.72] lg:scale-[0.82]">
                        {/* Part 1 — top DK30 console. */}
                        <motion.img
                            src={dk301}
                            alt="DK30 upper laser console"
                            draggable={false}
                            animate={{ y: isExpanded ? MACHINE_PARTS.console.expandY : 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute z-20 h-auto select-none object-contain"
                            style={{
                                top: MACHINE_PARTS.console.top,
                                left: MACHINE_PARTS.console.left,
                                width: MACHINE_PARTS.console.width,
                            }}
                        />

                        {/* Part 2 — lower cabinet; appears attached when collapsed. */}
                        <motion.img
                            src={dk302}
                            alt="DK30 lower support cabinet"
                            draggable={false}
                            animate={{ y: isExpanded ? MACHINE_PARTS.cabinet.expandY : 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute z-10 h-auto select-none object-contain"
                            style={{
                                top: MACHINE_PARTS.cabinet.top,
                                left: MACHINE_PARTS.cabinet.left,
                                width: MACHINE_PARTS.cabinet.width,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile features — same interaction as Surgico. */}
            <div className="mx-auto mt-8 w-full max-w-[520px] px-4 lg:hidden">
                <motion.button
                    type="button"
                    onClick={toggleMachine}
                    whileTap={{ scale: 0.97 }}
                    className="mx-auto flex items-center gap-2 rounded-full border border-[#1677FF]/15 bg-[#1677FF]/[0.04] px-4 py-2 text-[11px] font-medium text-[#1677FF]"
                >
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full bg-[#1677FF] text-[14px] leading-none text-white transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>
                        +
                    </span>
                    {isExpanded ? "Hide machine details" : "Tap to explore machine"}
                </motion.button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <div className="mt-5 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2">
                                {machinePoints.map((point, index) => (
                                    <MobileKeyPoint key={point.title} {...point} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DK30Machine;
