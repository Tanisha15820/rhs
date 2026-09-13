import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import cyberblade1 from "../../assets/images/cyberblade1.png";
import cyberblade2 from "../../assets/images/cyberblade2.png";
import cyberblade3 from "../../assets/images/cyberblade3.png";

// CyberBlade Machine Component
const CyberBladeMachine = () => {
  const [isExploded, setIsExploded] = useState(false);

  const toggleMachine = () => {
    setIsExploded((prev) => !prev);
  };

  return (
    <section className="relative overflow-hidden bg-white py-[20px]">
      <div
        className={`
          relative
          mx-auto
          flex
          w-full
          max-w-[1200px]
          items-center
          justify-center
          px-4
          transition-all
          duration-500
          ease-in-out

          ${
            isExploded
              ? `
                min-h-[650px]
                lg:min-h-[680px]
              `
              : `
                min-h-[500px]
                lg:min-h-[540px]
              `
          }
        `}
      >
        {/* Machine Container */}
        <div
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-expanded={isExploded}
          aria-label={isExploded ? "Collapse CyberBlade" : "Explore CyberBlade"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMachine();
            }
          }}
          className="
            relative
            z-20
            h-[520px]
            w-[1100px]
            cursor-pointer
            outline-none
          "
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Distal Tip"
                  description="Precision cutting with high accuracy"
                  position="left-[-90px] top-[110px]"
                  side="left"
                  lineWidth={45}
                  arrow="bottom"
                />

                <KeyPoint
                  title="Shaft"
                  description="Slim and rigid design for optimal control"
                  position="left-[90px] top-[110px]"
                  side="left"
                  lineWidth={45}
                  arrow="bottom"
                />

                <KeyPoint
                  title="Locking Collet"
                  description="Secure shaft fixation"
                  position="left-[300px] top-[100px]"
                  side="left"
                  lineWidth={45}
                  arrow="bottom"
                />

                <KeyPoint
                  title="Ergonomic Handle"
                  description="Lightweight and comfortable grip"
                  position="left-[520px] top-[95px]"
                  side="left"
                  lineWidth={45}
                  arrow="bottom"
                />

                <KeyPoint
                  title="Drive Unit"
                  description="High performance motor for consistent power"
                  position="right-[145px] top-[125px]"
                  side="right"
                  lineWidth={45}
                  arrow="bottom"
                />

                <KeyPoint
                  title="Cable Interface"
                  description="Reliable connection for power and control"
                  position="right-[35px] top-[320px]"
                  side="right"
                  lineWidth={45}
                  arrow="top"
                />

                <KeyPoint
                  title="CyberBlade Tip"
                  description="Advanced blade design for precise dissection"
                  position="left-[-115px] top-[200px]"
                  side="left"
                  lineWidth={40}
                  arrow="top"
                />
              </>
            )}
          </AnimatePresence>

          {/* Main Shaft and Tip */}
          <motion.img
            src={cyberblade1}
            alt="CyberBlade shaft and distal tip"
            draggable={false}
            animate={{
              x: isExploded ? -15 : 0,
              y: isExploded ? -15 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-40
              left-[-30px]
              top-[130px]
              h-[180px]
              w-[480px]
              select-none
              object-contain
            "
          />

          {/* Ergonomic Handle */}
          <motion.img
            src={cyberblade2}
            alt="CyberBlade ergonomic handle"
            draggable={false}
            animate={{
              x: isExploded ? 5 : 0,
              y: isExploded ? 0 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-50
              left-[420px]
              top-[115px]
              h-[220px]
              w-[390px]
              select-none
              object-contain
            "
          />

          {/* Drive Unit */}
          <motion.img
            src={cyberblade3}
            alt="CyberBlade drive unit"
            draggable={false}
            animate={{
              x: isExploded ? 20 : 0,
              y: isExploded ? 15 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-40
              left-[750px]
              top-[165px]
              h-[190px]
              w-[300px]
              select-none
              object-contain
            "
          />
        </div>
      </div>

      {/* Mobile Explore Button */}
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
            border-[#1677FF]/30
            bg-[#1677FF]/10
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

// Key Point Component
const KeyPoint = ({
  title,
  description,
  position,
  side = "left",
  lineWidth = 50,
  arrow = "side",
}) => {
  const isBottomArrow = arrow === "bottom";
  const isTopArrow = arrow === "top";
  const isVerticalArrow = isBottomArrow || isTopArrow;
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
        ${isVerticalArrow ? "flex-col items-center" : "flex items-center"}
        ${position}
      `}
    >
      {isTopArrow && (
        <div className="flex flex-col items-center">
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />

          <div
            className="w-[1px] bg-[#1677FF]"
            style={{
              height: `${lineWidth}px`,
            }}
          />
        </div>
      )}

      {side === "right" && !isVerticalArrow && (
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
          max-w-[180px]
          rounded-[9px]
          border
          border-[#2F80ED]/60
          bg-white
          px-2.5
          py-2
          shadow-[0_6px_20px_rgba(15,23,42,0.15)]
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

            <p className="mt-[2px] text-[7px] leading-[1.4] text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      {side === "left" && !isVerticalArrow && (
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

      {isBottomArrow && (
        <div className="flex flex-col items-center">
          <div
            className="w-[1px] bg-[#1677FF]"
            style={{
              height: `${lineWidth}px`,
            }}
          />

          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
        </div>
      )}
    </motion.div>
  );
};

export default CyberBladeMachine;
