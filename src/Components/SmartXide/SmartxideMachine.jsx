import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import part1 from "../../assets/images/part1.png";
import part2 from "../../assets/images/part2.png";
import part3 from "../../assets/images/part3.png";
import part4 from "../../assets/images/part4.png";
import part5 from "../../assets/images/part5.png";

const KeyPoint = ({
  title,
  description,
  position,
  side = "left",
  lineWidth = 55,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`
        pointer-events-none
        absolute
        z-[100]
        hidden
        lg:flex
        ${side === "bottom" ? "flex-col items-center" : "items-center"}
        ${position}
      `}
    >
      {side === "right" && (
        <div className="flex items-center">
          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}

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

      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
          <div
            className="h-[1px] bg-[#1677FF]"
            style={{ width: `${lineWidth}px` }}
          />
        </div>
      )}

      {side === "bottom" && (
        <div className="flex flex-col items-center">
          <div
            className="w-[1px] bg-[#1677FF]"
            style={{ height: `${lineWidth}px` }}
          />
          <div className="h-[8px] w-[8px] rounded-full bg-[#1677FF]" />
        </div>
      )}
    </motion.div>
  );
};

const SmartxideMachine = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMachine = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="relative overflow-hidden bg-white py-[90px]">
      {/* Machine area */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[280px]
          w-full
          max-w-[720px]
          items-center
          justify-center
          px-5
        "
      >
        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[150px]
            w-[150px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1CAFED]/[0.06]
            blur-[90px]
          "
        />

        {/* Machine */}

        <div
          className="
            relative
            flex
            min-h-[300px]
            w-[210px]
            max-w-full
            cursor-pointer
            justify-center
          "
          onClick={toggleMachine}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleMachine();
            }
          }}
        >
          {/* All key points together on tap */}

          <AnimatePresence>
            {isExpanded && (
              <>
                <KeyPoint
                  title="Articulated Arm"
                  description="Laser Beam Delivery"
                  position="left-[-60px] top-[15px]"
                  side="bottom"
                  lineWidth={30}
                />

                <KeyPoint
                  title="Diode Laser Module"
                  description="Additional Laser Power"
                  position="left-[-280px] top-[60px]"
                  side="left"
                  lineWidth={48}
                />

                <KeyPoint
                  title="Scanner Handpiece"
                  description="Precision Treatment Output"
                  position="right-[-200px] top-[80px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Touchscreen Display"
                  description="Treatment Interface"
                  position="right-[-135px] top-[205px]"
                  side="right"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Emergency Stop"
                  description="Safety Shutdown"
                  position="right-[-110px] top-[330px]"
                  side="right"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Control Panel"
                  description="System Controls"
                  position="right-[-115px] top-[440px]"
                  side="right"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Mobile Base"
                  description="Safe Equipment Movement"
                  position="left-[-210px] top-[310px]"
                  side="left"
                  lineWidth={42}
                />
              </>
            )}
          </AnimatePresence>

          {/* Center parts */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-center
              gap-0
            "
          >
            {/* Part 1 */}

            <motion.img
              src={part1}
              alt="SmartXide machine upper section"
              className="
                block
                h-auto
                max-w-full
                object-contain
              "
              animate={{
                x: isExpanded ? 4 : 0,
                y: isExpanded ? -25 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />

            {/* Part 3 */}

            <div className="w-[78%] max-w-full -translate-x-[25px]">
              <motion.img
                src={part3}
                alt="SmartXide machine middle upper section"
                className="block h-auto w-full object-contain"
                animate={{
                  x: isExpanded ? -4 : 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Part 4 */}

            <div className="w-[63%] max-w-full -translate-x-[55px]">
              <motion.img
                src={part4}
                alt="SmartXide machine middle lower section"
                className="block h-auto w-full object-contain"
                animate={{
                  x: isExpanded ? 5 : 0,
                  y: isExpanded ? 25 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Part 5 */}

            <div className="w-[95%] max-w-full -translate-x-[55px]">
              <motion.img
                src={part5}
                alt="SmartXide machine bottom section"
                className="block h-auto w-full object-contain"
                animate={{
                  x: isExpanded ? 4 : 0,
                  y: isExpanded ? 50 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>

          {/* Part 2 */}

          <motion.img
            src={part2}
            alt="SmartXide machine left section"
            className="
              absolute
              left-[-130px]
              top-[66px]
              z-20
              h-auto
              max-w-full
              object-contain
            "
            animate={{
              x: isExpanded ? -12 : 0,
              y: isExpanded ? -3 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SmartxideMachine;
