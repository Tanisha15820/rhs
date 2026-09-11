import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import evo1 from "../../assets/images/evo1.png";
import evo2 from "../../assets/images/evo2.png";
import evo3 from "../../assets/images/evo3.png";
import evo4 from "../../assets/images/evo4.png";
import evo5 from "../../assets/images/evo5.png";

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
      {/* Right connector */}
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

      {/* Card */}
      <div
        className="
          min-w-[150px]
          rounded-[10px]
          border
          border-[#2F80ED]/60
          bg-white
          px-3
          py-2
          shadow-[0_6px_20px_rgba(15,23,42,0.07)]
        "
      >
        <div className="flex items-start gap-2">
          {/* Icon */}
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

          {/* Text */}
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

      {/* Left connector */}
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
        <div className="h-[12px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
      </div>

      <div className="min-w-0">
        <h4 className="text-[11px] font-semibold leading-[1.3] text-slate-900">
          {title}
        </h4>

        <p className="mt-0.5 text-[9px] leading-[1.4] text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// ================= MACHINE DATA =================

const machinePoints = [
  {
    title: "Top Handle",
    description: "Easy Mobility & Handling",
  },

  {
    title: "Touchscreen Display",
    description: "User Interface & Control",
  },

  {
    title: "Focusing Optics",
    description: "Precision Beam Output",
  },

  {
    title: "Laser Port",
    description: "Laser Delivery Output",
  },

  {
    title: "Emergency Stop",
    description: "Safety Shutdown",
  },

  {
    title: "Cooling Vent",
    description: "Heat Dissipation & Airflow",
  },

  {
    title: "Front Panel",
    description: "Main Housing Access",
  },

  {
    title: "Lower Support Base",
    description: "Structural Stability",
  },

  {
    title: "Caster Wheels",
    description: "Smooth Movement & Stability",
  },
];

// ================= MAIN COMPONENT =================

const EvoMachine = () => {
  const [isExploded, setIsExploded] = useState(false);

  const GAP = 30;

  const toggleMachine = () => {
    setIsExploded((prev) => !prev);
  };

  const getExplodeStyle = (level) => ({
    transform: isExploded ? `translateY(${level * GAP}px)` : "translateY(0px)",
  });

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-[15px]
      "
    >
      <div
        className={`
          relative
          mx-auto
          flex
          w-full
          max-w-[1000px]
          items-center
          justify-center
          px-4

          transition-all
          duration-500

          ${isExploded ? "min-h-[950px]" : "min-h-[850px]"}

        `}
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1677FF]/[0.05]
            blur-[100px]
          "
        />

        {/* MACHINE CONTAINER */}

        <div
          className="
            relative
            z-20
            flex
            h-[850px]
            w-[480px]
            cursor-pointer
            items-center
            justify-center
          "
          onClick={toggleMachine}
        >
          {/* DESKTOP KEY POINTS */}

          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Top Handle"
                  description="Easy Mobility & Handling"
                  position="right-[20px] top-[20px]"
                  side="right"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Touchscreen Display"
                  description="User Interface & Control"
                  position="left-[-100px] top-[120px]"
                  side="left"
                  lineWidth={70}
                />

                <KeyPoint
                  title="Focusing Optics"
                  description="Precision Beam Output"
                  position="left-[-70px] top-[260px]"
                  side="left"
                  lineWidth={70}
                />

                <KeyPoint
                  title="Laser Port"
                  description="Laser Delivery Output"
                  position="right-[20px] top-[260px]"
                  side="right"
                  lineWidth={70}
                />

                <KeyPoint
                  title="Emergency Stop"
                  description="Safety Shutdown"
                  position="right-[40px] top-[380px]"
                  side="right"
                  lineWidth={65}
                />

                <KeyPoint
                  title="Cooling Vent"
                  description="Heat Dissipation & Airflow"
                  position="left-[-80px] top-[420px]"
                  side="left"
                  lineWidth={75}
                />

                <KeyPoint
                  title="Front Panel"
                  description="Main Housing Access"
                  position="right-[10px] top-[520px]"
                  side="right"
                  lineWidth={70}
                />

                <KeyPoint
                  title="Caster Wheels"
                  description="Smooth Movement & Stability"
                  position="right-[-200px] top-[820px]"
                  side="right"
                  lineWidth={75}
                />
              </>
            )}
          </AnimatePresence>

          {/* IMAGE WRAPPER */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[1050px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              scale-[0.85]
              origin-center
            "
          >
            {/* PART 1 */}

            <img
              src={evo1}
              alt="Evo Top Handle Display"
              draggable={false}
              style={getExplodeStyle(-2)}
              className="
                pointer-events-none
                absolute
                left-[-10px]
                top-[20px]
                z-10
                w-[440px]
                h-[270px]
                select-none
                object-contain
                transition-transform
                duration-500
              "
            />

            {/* PART 2 */}

            <img
              src={evo2}
              alt="Evo Optical Section"
              draggable={false}
              style={getExplodeStyle(-1)}
              className="
                pointer-events-none
                absolute
                left-[-10px]
                top-[120px]
                z-20
                w-[440px]
                h-[270px]
                select-none
                object-contain
                transition-transform
                duration-500
              "
            />

            {/* PART 3 */}

            <img
              src={evo3}
              alt="Evo Main Body"
              draggable={false}
              style={getExplodeStyle(0)}
              className="
                pointer-events-none
                absolute
                left-[55px]
                top-[265px]
                z-30
                w-[300px]
                h-[185px]
                select-none
                object-contain
                transition-transform
                duration-500
              "
            />

            {/* PART 4 */}

            <img
              src={evo4}
              alt="Evo Lower Base"
              draggable={false}
              style={getExplodeStyle(1)}
              className="
                pointer-events-none
                absolute
                left-[55px]
                top-[375px]
                z-40
                w-[300px]
                h-[350px]
                select-none
                object-contain
                transition-transform
                duration-500
              "
            />

            {/* PART 5 - ONLY ONE TIME */}

            <img
              src={evo5}
              alt="Evo Caster Wheels"
              draggable={false}
              style={getExplodeStyle(2)}
              className="
                pointer-events-none
                absolute
                left-[-7px]
                top-[615px]
                z-60
                w-[420px]
                h-[240px]
                select-none
                object-contain
                transition-transform
                duration-500
              "
            />
          </div>
        </div>
      </div>

      {/* MOBILE SECTION */}

      <div className="mx-auto mt-2 w-full max-w-[520px] px-4 lg:hidden">
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
            text-[10px]
            font-medium
            text-[#1677FF]
          "
        >
          <span
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#1677FF]
              text-white
            "
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
              transition={{
                duration: 0.4,
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

export default EvoMachine;
