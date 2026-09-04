import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Monitor,
  Settings2,
  Package,
  Move,
  ArrowRight,
  Sparkles,
  Shield,
  Activity,
} from "lucide-react";

import defaultMachineImage from "../assets/images/machine.png";
import { getInteractiveMachineData } from "../utils/machineStorage";

const ICON_MAP = {
  Monitor,
  Settings2,
  Package,
  Move,
  Sparkles,
  Shield,
  Activity,
};

const InteractiveMachine = () => {
  const [activePart, setActivePart] = useState(null);
  const [machineData, setMachineData] = useState(getInteractiveMachineData);

  useEffect(() => {
    const handleUpdate = () => {
      setMachineData(getInteractiveMachineData());
    };

    window.addEventListener("rhs_machines_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_machines_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const parts = (machineData.parts || []).map((p) => ({
    ...p,
    icon: typeof p.icon === "string" ? ICON_MAP[p.icon] || Sparkles : p.icon || Sparkles,
  }));

  const currentImage = machineData.machineImage || defaultMachineImage;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />

        {/* Decorative circles */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-primary/10
          "
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-primary/5
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Machine Area */}

      <div className="relative z-10 mx-auto h-[650px] max-w-7xl px-5 md:h-[750px]">
        {/* Machine */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            md:h-[720px]
            md:w-[500px]
          "
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={currentImage}
            alt="Medical Machine"
            className="
              h-full
              w-full
              object-contain
              drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)]
            "
          />
        </motion.div>

        {/* Hotspots */}

        {parts.map((part) => {
          const Icon = part.icon;

          const isActive = activePart === part.id;

          return (
            <div
              key={part.id}
              className="absolute z-30"
              style={{
                top: part.top,
                left: part.left,
              }}
              onMouseEnter={() => setActivePart(part.id)}
              onMouseLeave={() => setActivePart(null)}
            >
              {/* Pulsing ring */}

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-primary/40
                "
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              {/* Hotspot button */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.25,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`
                  relative
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  shadow-lg
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-primary shadow-primary/40"
                      : "bg-white text-primary"
                  }
                `}
              >
                <span
                  className={`
                    h-2
                    w-2
                    rounded-full
                    transition-all
                    ${isActive ? "bg-white" : "bg-primary"}
                  `}
                />
              </motion.button>

              {/* -------------------------------- */}
              {/* Information Card */}
              {/* -------------------------------- */}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: part.cardPosition === "right" ? -15 : 15,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: part.cardPosition === "right" ? -15 : 15,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      absolute
                      top-1/2
                      w-[260px]
                      -translate-y-1/2
                      rounded-2xl
                      border
                      border-primary/10
                      bg-white/95
                      p-5
                      shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                      backdrop-blur-xl
                      ${part.cardPosition === "right" ? "left-12" : "right-12"}
                    `}
                  >
                    {/* Connector line */}

                    <div
                      className={`
                        absolute
                        top-1/2
                        h-px
                        w-12
                        bg-gradient-to-r
                        from-primary/60
                        to-transparent
                        ${
                          part.cardPosition === "right"
                            ? "right-full"
                            : "left-full rotate-180"
                        }
                      `}
                    />

                    {/* Icon */}

                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-primary">
                          Machine Feature
                        </p>

                        <h3 className="text-sm font-bold text-slate-800">
                          {part.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}

                    <p className="text-xs leading-5 text-slate-500">
                      {part.description}
                    </p>

                    {/* CTA */}

                    <button
                      type="button"
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        text-primary
                        transition-all
                        hover:gap-3
                      "
                    >
                      View specifications
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* -------------------------------- */}
        {/* Bottom Instruction */}
        {/* -------------------------------- */}

        <motion.div
          className="
            absolute
            bottom-2
            left-1/2
            -translate-x-1/2
            rounded-full
            border
            border-primary/10
            bg-white/80
            px-5
            py-2.5
            text-[10px]
            font-semibold
            text-slate-500
            shadow-sm
            backdrop-blur-md
          "
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Hover over the points to explore the machine
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMachine;
