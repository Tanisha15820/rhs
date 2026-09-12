import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import multimedia1 from "../../assets/images/multimedia1.png";
import multimedia2 from "../../assets/images/multimedia2.png";
import multimedia3 from "../../assets/images/multimedia3.png";
import multimedia4 from "../../assets/images/multimedia4.png";
import multimedia5 from "../../assets/images/multimedia5.png";

// ================= DESKTOP KEY POINT =================

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
        items-center
        ${position}
      `}
    >
      {/* LEFT CONNECTOR */}

      {side === "left" && (
        <div className="flex items-center">
          <div
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#1677FF]
            "
          />

          <div
            className="
              h-[1px]
              bg-[#1677FF]
            "
            style={{
              width: `${lineWidth}px`,
            }}
          />
        </div>
      )}

      {/* CARD */}

      <div
        className="
          min-w-[145px]
          rounded-[9px]
          border
          border-[#2F80ED]/60
          bg-white
          px-2.5
          py-2
          shadow-[0_6px_20px_rgba(15,23,42,0.07)]
        "
      >
        <div className="flex items-start gap-2">
          {/* ICON */}

          <div
            className="
              mt-[1px]
              flex
              h-[24px]
              w-[24px]
              shrink-0
              items-center
              justify-center
              rounded-md
              bg-[#1677FF]/10
            "
          >
            <div
              className="
                h-[11px]
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
                text-[10px]
                font-semibold
                leading-tight
                text-slate-900
              "
            >
              {title}
            </h4>

            <p
              className="
                mt-[2px]
                whitespace-nowrap
                text-[7px]
                leading-[1.4]
                text-slate-400
              "
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT CONNECTOR */}

      {side === "right" && (
        <div className="flex items-center">
          <div
            className="
              h-[1px]
              bg-[#1677FF]
            "
            style={{
              width: `${lineWidth}px`,
            }}
          />

          <div
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#1677FF]
            "
          />
        </div>
      )}
    </motion.div>
  );
};

// ================= MOBILE KEY POINT =================

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
        min-h-[58px]
        items-start
        gap-2.5
        rounded-[10px]
        border
        border-[#2F80ED]/20
        bg-white
        p-2.5
        shadow-[0_5px_18px_rgba(15,23,42,0.05)]
      "
    >
      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#1677FF]/10
        "
      >
        <div
          className="
            h-[12px]
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
            text-[11px]
            font-semibold
            leading-[1.3]
            text-slate-900
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-0.5
            text-[9px]
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

// ================= MACHINE POINT DATA =================

const machinePoints = [
  {
    title: "Articulated Arm",
    description: "Flexible Laser Movement",
  },

  {
    title: "Optical Treatment Head",
    description: "Precision Laser Output",
  },

  {
    title: "Control Unit",
    description: "System Interface",
  },

  {
    title: "Hose Assembly",
    description: "Laser Delivery System",
  },

  {
    title: "Mobile Base",
    description: "Equipment Mobility",
  },
];

// ================= MAIN COMPONENT =================

const MultimedMachine = () => {
  const [isExploded, setIsExploded] = useState(false);

  const toggleMachine = () => {
    setIsExploded((prev) => !prev);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-[20px]
      "
    >
      {/* ================= HEADING ================= */}

      <div className="mb-14 text-center">
        <div className="mb-1.5 flex items-center justify-center gap-1">
          <span className="h-[2px] w-8 bg-[#19A8E8]" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
            BUILT FOR PRECISION
          </p>
          <span className="h-[2px] w-8 bg-[#19A8E8]" />
        </div>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
          System{" "}
          <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
            Overview
          </span>
        </h2>

        <p className="mx-auto mt-1.5 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
          Explore the key components that work together for safe and effective
          treatments.
        </p>
      </div>

      {/* ================= MACHINE AREA ================= */}

      <div
        className={`
          relative
          mx-auto
          flex
          w-full
          max-w-[900px]
          items-center
          justify-center
          px-4

          transition-all
          duration-500

          ${
            isExploded
              ? `
            min-h-[650px]
            `
              : `
            min-h-[550px]
            `
          }

        `}
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1677FF]/[0.05]
            blur-[90px]
          "
        />

        {/* MACHINE CLICK AREA */}

        <div
          onClick={toggleMachine}
          className={`
            relative
            cursor-pointer
            flex
            items-center
            justify-center

            w-[260px]

            transition-all
            duration-500
          `}
        >
          {/* ================= KEY POINTS ================= */}

          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Articulated Arm"
                  description="Flexible Laser Movement"
                  position="left-[260px] top-[-290px]"
                  side="left"
                  lineWidth={45}
                />

                <KeyPoint
                  title="Optical Treatment Head"
                  description="Precision Laser Output"
                  position="right-[-240px] top-[-150px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Mobile Base"
                  description="Stable and smooth movement"
                  position="right-[-160px] top-[200px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Control Unit"
                  description="System Interface"
                  position="left-[-100px] top-[-120px]"
                  side="right"
                  lineWidth={45}
                />

                <KeyPoint
                  title="Hose Assembly"
                  description="Laser Delivery System"
                  position="left-[-280px] top-[20px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Mobile Base"
                  description="Equipment Mobility"
                  position="right-[-200px] top-[520px]"
                  side="right"
                  lineWidth={50}
                />
              </>
            )}
          </AnimatePresence>

          {/* ================= IMAGE SCALE WRAPPER ================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[760px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              origin-center
              scale-[0.75]
              lg:scale-[0.85]
            "
          >
            {/* ================= MULTIMEDIA 1 ================= */}

            <motion.img
              src={multimedia1}
              alt="Multimed Main Unit"
              draggable={false}
              className="
                pointer-events-none
                absolute
                z-30
                left-[120px]
                top-[60px]
                w-[250px]
                select-none
                object-contain
                transition-transform
                duration-500
                ease-in-out
              "
              animate={{
                y: isExploded ? -40 : 0,
              }}
            />

            {/* ================= MULTIMEDIA 2 ================= */}

            <motion.img
              src={multimedia2}
              alt="Multimed Arm"
              draggable={false}
              className="
                pointer-events-none
                absolute
                z-50
                left-[-90px]
                top-[320px]
                w-[180px]
                select-none
                object-contain
                transition-transform
                duration-500
                ease-in-out
              "
              animate={{
                x: isExploded ? -35 : 0,

                y: isExploded ? -20 : 0,
              }}
            />

            {/* ================= MULTIMEDIA 3 ================= */}

            <motion.img
              src={multimedia3}
              alt="Multimed Control Panel"
              draggable={false}
              className="
                pointer-events-none
                absolute
                z-40
                left-[55px]
                top-[230px]
                w-[220px]
                select-none
                object-contain
                transition-transform
                duration-500
                ease-in-out
              "
              animate={{
                y: isExploded ? 20 : 0,
              }}
            />

            {/* ================= MULTIMEDIA 4 ================= */}

            <motion.img
              src={multimedia4}
              alt="Multimed Optical Head"
              draggable={false}
              className="
    pointer-events-none
    absolute
    z-60
    left-[200px]
    top-[200px]
    w-[170px]
    select-none
    object-contain
    transition-transform
    duration-500
    ease-in-out
  "
              animate={{
                x: isExploded ? 45 : 0, // moves right
                y: isExploded ? -60 : 0, // moves upward
              }}
            />

            {/* ================= MULTIMEDIA 5 ================= */}

            <motion.img
              src={multimedia5}
              alt="Multimed Base"
              draggable={false}
              className="
                pointer-events-none
                absolute
                z-10
                left-[45px]
                top-[460px]
                w-[250px]
                select-none
                object-contain
                transition-transform
                duration-500
                ease-in-out
              "
              animate={{
                y: isExploded ? 70 : 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE SECTION ================= */}

      <div className="mx-auto mt-4 w-full max-w-[520px] px-4 lg:hidden">
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
            border-[#1677FF]/20
            bg-[#1677FF]/5
            px-4
            py-2
            text-[11px]
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
              text-white
              ${isExploded ? "rotate-45" : ""}
            `}
          >
            +
          </span>

          {isExploded ? "Hide machine details" : "Tap to explore machine"}
        </motion.button>

        <AnimatePresence>
          {isExploded && (
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
              className="overflow-hidden"
            >
              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-2
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

export default MultimedMachine;
