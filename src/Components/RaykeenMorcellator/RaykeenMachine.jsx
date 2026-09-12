import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import raykeen1 from "../../assets/images/raykeen1.png";
import raykeen2 from "../../assets/images/raykeen2.png";
import raykeen3 from "../../assets/images/raykeen3.png";
import raykeen4 from "../../assets/images/raykeen4.png";

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
        items-center
        ${position}
      `}
    >
      {side === "right" && (
        <div className="flex items-center">
          <div
            className="h-[1px] bg-[#1677FF]"
            style={{
              width: `${lineWidth}px`,
            }}
          />

          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
        </div>
      )}

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
            <div className="h-[11px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
          </div>

          <div>
            <h4 className="text-[10px] font-semibold leading-tight text-slate-900">
              {title}
            </h4>

            <p className="mt-[2px] whitespace-nowrap text-[7px] leading-[1.4] text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />

          <div
            className="h-[1px] bg-[#1677FF]"
            style={{
              width: `${lineWidth}px`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

const RaykeenMachine = () => {
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
      <div
        className={`
          relative
          mx-auto
          flex
          w-full
          max-w-[1050px]
          items-center
          justify-center
          px-4
          transition-all
          duration-500
          ease-in-out

          ${
            isExploded
              ? `
                  min-h-[720px]
                  lg:min-h-[760px]
                `
              : `
                  min-h-[620px]
                  lg:min-h-[680px]
                `
          }
        `}
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1677FF]/[0.035]
            blur-[100px]
          "
        />

        <div
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-expanded={isExploded}
          aria-label={
            isExploded ? "Collapse Raykeen machine" : "Explore Raykeen machine"
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMachine();
            }
          }}
          className="
            relative
            z-20
            h-[690px]
            w-[720px]
            cursor-pointer
            outline-none
          "
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Main Console"
                  description="Touch Screen Interface"
                  position="left-[-55px] top-[70px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Top Tray"
                  description="Instrument Placement"
                  position="right-[-55px] top-[175px]"
                  side="right"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Morcellator Handpiece"
                  description="High Speed Rotation"
                  position="left-[-85px] top-[265px]"
                  side="left"
                  lineWidth={60}
                />

                <KeyPoint
                  title="Irrigation / Suction Line"
                  description="Fluid Delivery & Suction"
                  position="right-[-85px] top-[275px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Instrument Holder"
                  description="Secure Storage & Quick Access"
                  position="left-[-65px] top-[370px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Irrigation Filter"
                  description="Prevents Blockage"
                  position="left-[-60px] top-[475px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Suction Canister"
                  description="Efficient Fluid Collection"
                  position="left-[-75px] bottom-[95px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Irrigation Canister"
                  description="Continuous Fluid Supply"
                  position="right-[-70px] bottom-[115px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Mobile Trolley Base"
                  description="Stable & Smooth Mobility"
                  position="right-[-55px] bottom-[35px]"
                  side="right"
                  lineWidth={50}
                />
              </>
            )}
          </AnimatePresence>

          <motion.img
            src={raykeen2}
            alt="Raykeen Main Console"
            draggable={false}
            animate={{
              y: isExploded ? -45 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-40
              left-[240px]
              top-[260px]
              w-[250px]
              select-none
              object-contain
            "
          />

          <motion.img
            src={raykeen1}
            alt="Raykeen Morcellator Handpiece and Irrigation Line"
            draggable={false}
            animate={{
              x: isExploded ? 20 : 0,
              y: isExploded ? -5 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-50
              left-[105px]
              top-[290px]
              w-[515px]
              select-none
              object-contain
            "
          />

          <motion.img
            src={raykeen3}
            alt="Raykeen Instrument Tray"
            draggable={false}
            animate={{
              y: isExploded ? 35 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-30
              left-[205px]
              top-[285px]
              w-[315px]
              select-none
              object-contain
            "
          />

          <motion.img
            src={raykeen4}
            alt="Raykeen Mobile Trolley and Canisters"
            draggable={false}
            animate={{
              y: isExploded ? 70 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-20
              left-[200px]
              top-[390px]
              w-[325px]
              select-none
              object-contain
            "
          />
        </div>
      </div>

      <div className="mx-auto mt-1 flex justify-center lg:hidden">
        <motion.button
          type="button"
          whileTap={{
            scale: 0.96,
          }}
          onClick={toggleMachine}
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#1677FF]/20
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
              text-white
              transition-transform
              duration-300
              ${isExploded ? "rotate-45" : ""}
            `}
          >
            +
          </span>

          {isExploded ? "Hide details" : "Tap to explore machine"}
        </motion.button>
      </div>
    </section>
  );
};

export default RaykeenMachine;
