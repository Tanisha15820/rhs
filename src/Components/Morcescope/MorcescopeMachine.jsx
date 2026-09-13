import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import morescope1 from "../../assets/images/morescope1.png";
import morescope2 from "../../assets/images/morescope2.png";

// ================= MACHINE POINT DATA =================

const machinePoints = [
  {
    title: "Slim Resectoscope",
    description: "Compact design for minimally invasive access",
  },
  {
    title: "Laser Fiber Channel",
    description: "Dedicated channel for laser fiber delivery",
  },
  {
    title: "30° Telescope",
    description: "Angled view for clear visualization",
  },
  {
    title: "Optical Eyepiece",
    description: "Connects to camera system",
  },
  {
    title: "Irrigation Inlet",
    description: "Continuous irrigation for clear visibility",
  },
  {
    title: "Irrigation Outlet",
    description: "Controlled drainage of irrigation fluid",
  },
  {
    title: "Finger Ring Handle",
    description: "Ergonomic design for stable and precise control",
  },
  {
    title: "Rotatable Mechanism",
    description: "Allows controlled rotation of the working element",
  },
  {
    title: "Laser Delivery System",
    description: "Enables precise energy delivery",
  },
];

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
        <div className="h-[14px] w-[3px] rotate-45 rounded-full bg-[#1677FF]" />
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

        <p className="mt-1 text-[10px] leading-[1.4] text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Morcescope Machine Component
const MorcescopeMachine = () => {
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

          min-h-[240px]
          sm:min-h-[320px]
          md:min-h-[420px]
          lg:min-h-[620px]
        `}
      >
        {/* Soft Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
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
          aria-label={isExploded ? "Collapse Morcescope" : "Explore Morcescope"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMachine();
            }
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            h-[520px]
            w-[900px]
            cursor-pointer
            outline-none
            -translate-x-1/2
            -translate-y-1/2
            scale-[0.42]
            sm:scale-[0.58]
            md:scale-[0.72]
            lg:scale-100
          "
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Slim Resectoscope"
                  description="Compact design for minimally invasive access"
                  position="left-[35px] top-[110px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Laser Fiber Channel"
                  description="Dedicated channel for laser fiber delivery"
                  position="right-[340px] top-[20px]"
                  side="bottom"
                  lineWidth={55}
                />

                <KeyPoint
                  title="30° Telescope"
                  description="Angled view for clear visualization"
                  position="right-[170px] top-[50px]"
                  side="bottom"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Optical Eyepiece"
                  description="Connects to camera system"
                  position="right-[15px] top-[155px]"
                  side="right"
                  lineWidth={45}
                />

                <KeyPoint
                  title="Irrigation Inlet"
                  description="Continuous irrigation for clear visibility"
                  position="left-[200px] top-[320px]"
                  side="left"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Irrigation Outlet"
                  description="Controlled drainage of irrigation fluid"
                  position="left-[185px] top-[370px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Finger Ring Handle"
                  description="Ergonomic design for stable and precise control"
                  position="left-[200px] top-[430px]"
                  side="left"
                  lineWidth={50}
                />

                <KeyPoint
                  title="Rotatable Mechanism"
                  description="Allows controlled rotation of the working element"
                  position="right-[65px] top-[355px]"
                  side="right"
                  lineWidth={95}
                />

                <KeyPoint
                  title="Laser Delivery System"
                  description="Enables precise energy delivery"
                  position="right-[19px] top-[420px]"
                  side="right"
                  lineWidth={50}
                />
              </>
            )}
          </AnimatePresence>

          {/* Main Morcescope */}
          <motion.img
            src={morescope1}
            alt="Morcescope main instrument"
            draggable={false}
            animate={{
              x: isExploded ? -15 : 0,
              y: isExploded ? -25 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-40
              left-[105px]
              top-[10px]
              h-[360px]
              w-[680px]
              select-none
              object-contain
            "
          />

          {/* Secondary Morcescope Component */}
          <motion.img
            src={morescope2}
            alt="Morcescope secondary component"
            draggable={false}
            animate={{
              x: isExploded ? 25 : 0,
              y: isExploded ? 25 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              z-30
              left-[270px]
              top-[220px]
              h-[260px]
              w-[400px]
              select-none
              object-contain
            "
          />
        </div>
      </div>

      {/* Mobile Explore Section */}
      <div className="mx-auto mt-9 w-full max-w-[520px] px-4 lg:hidden">
        <motion.button
          type="button"
          whileTap={{
            scale: 0.96,
          }}
          onClick={toggleMachine}
          className="
            mx-auto
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
              text-[14px]
              leading-none
              text-white
              transition-transform
              duration-300
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
        ${side === "top" || side === "bottom" ? "flex-col items-center" : "items-center"}
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

      {side === "top" && (
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

            <p className="mt-[2px] text-[7px] leading-[1.4] text-slate-400">
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

      {side === "bottom" && (
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

export default MorcescopeMachine;
