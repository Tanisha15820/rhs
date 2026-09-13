import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import cystoscopy1 from "../../assets/images/cystoscopy1.png";
import cystoscopy2 from "../../assets/images/cystoscopy2.png";
import cystoscopy3 from "../../assets/images/cystoscopy3.png";
import cystoscopy4 from "../../assets/images/cystoscopy4.png";
import cystoscopy5 from "../../assets/images/cystoscopy5.png";

// Cystoscopy Machine Component
const CystoscopyMachine = () => {
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
          max-w-[1100px]
          items-center
          justify-center
          px-4
          transition-all
          duration-500
          ease-in-out

          ${
            isExploded
              ? `
                min-h-[730px]
                lg:min-h-[760px]
              `
              : `
                min-h-[650px]
                lg:min-h-[700px]
              `
          }
        `}
      >
        {/* Soft Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[330px]
            w-[330px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1677FF]/[0.035]
            blur-[100px]
          "
        />

        {/* Machine Container */}
        <div
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          aria-expanded={isExploded}
          aria-label={
            isExploded
              ? "Collapse Cystoscopy machine"
              : "Explore Cystoscopy machine"
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
            h-[720px]
            w-[760px]
            cursor-pointer
            outline-none
          "
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Cystoscopy System"
                  description="Complete Endoscopic System"
                  position="left-[-75px] top-[160px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Monitor Display"
                  description="High Resolution Visualisation"
                  position="right-[65px] top-[100px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Camera Control Unit"
                  description="Image Processing & Control"
                  position="right-[95px] top-[280px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Camera Control Unit"
                  description="Image Processing & Control"
                  position="right-[95px] top-[280px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="LED Light source"
                  description="High Intensity Illuminations"
                  position="right-[95px] top-[350px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Irrigation / Suction Line"
                  description="Fluid Delivery & Suction"
                  position="left-[-35px] top-[230px]"
                  side="left"
                  lineWidth={60}
                />

                <KeyPoint
                  title="Irrigation Canister"
                  description="Fluid Collection"
                  position="left-[-35px] top-[320px]"
                  side="left"
                  lineWidth={60}
                />

                <KeyPoint
                  title="Irrigation Pump"
                  description="Controlled Fluid Flow"
                  position="right-[95px] top-[420px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Foot Switch"
                  description="Hands-free Operation"
                  position="right-[-105px] top-[580px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Mobile Trolley Base"
                  description="Stable & Smooth Mobility"
                  position="left-[70px] top-[540px]"
                  side="left"
                  lineWidth={60}
                />
              </>
            )}
          </AnimatePresence>

          {/* Image 2 Left Side Component */}
          <motion.img
            src={cystoscopy2}
            alt="Cystoscopy left component"
            draggable={false}
            animate={{
              x: isExploded ? -35 : 0,
              y: isExploded ? -10 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-30
              left-[105px]
              top-[130px]
              h-[290px]
              w-[180px]
              select-none
              object-contain
            "
          />

          {/* Image 1 Top Main Component */}
          <motion.img
            src={cystoscopy1}
            alt="Cystoscopy main machine component"
            draggable={false}
            animate={{
              y: isExploded ? -35 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-50
              left-[250px]
              top-[45px]
              h-[245px]
              w-[260px]
              select-none
              object-contain
            "
          />

          {/* Image 3 Middle Component */}
          <motion.img
            src={cystoscopy3}
            alt="Cystoscopy middle machine component"
            draggable={false}
            animate={{
              y: isExploded ? 8 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-40
              left-[255px]
              top-[230px]
              h-[230px]
              w-[250px]
              select-none
              object-contain
            "
          />

          {/* Image 4 Bottom Component */}
          <motion.img
            src={cystoscopy4}
            alt="Cystoscopy lower machine component"
            draggable={false}
            animate={{
              y: isExploded ? 45 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-30
              left-[250px]
              top-[410px]
              h-[235px]
              w-[260px]
              select-none
              object-contain
            "
          />

          {/* Image 5 Right Side Component */}
          <motion.img
            src={cystoscopy5}
            alt="Cystoscopy right component"
            draggable={false}
            animate={{
              x: isExploded ? 35 : 0,
              y: isExploded ? 40 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-30
              left-[480px]
              top-[460px]
              h-[180px]
              w-[180px]
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

// Key Point Component
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
          min-w-[150px]
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

export default CystoscopyMachine;
