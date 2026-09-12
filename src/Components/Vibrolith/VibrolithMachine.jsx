import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import vibrolith1 from "../../assets/images/vibrolith1.png";
import vibrolith2 from "../../assets/images/vibrolith2.png";

const KeyPoint = ({
  title,
  description,
  position,
  side = "left",
  lineWidth = 50,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        absolute
        z-[100]
        hidden
        lg:flex
        ${side === "bottom" || side === "top" ? "flex-col items-center" : "items-center"}
        ${position}
      `}
    >
      {side === "right" && (
        <div className="flex items-center">
          <div className="h-[1px] bg-[#1677FF]" style={{ width: lineWidth }} />
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
        </div>
      )}

      {side === "top" && (
        <div className="flex flex-col items-center">
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
          <div className="w-[1px] bg-[#1677FF]" style={{ height: lineWidth }} />
        </div>
      )}

      <div
        className="
          rounded-[10px]
          border
          border-[#2F80ED]/60
          bg-white
          px-3
          py-2
          shadow-md
          min-w-[150px]
        "
      >
        <div className="flex gap-2">
          <div
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-md
              bg-[#1677FF]/10
            "
          >
            <div
              className="
              h-3
              w-[3px]
              rotate-45
              rounded-full
              bg-[#1677FF]
            "
            />
          </div>

          <div>
            <h4
              className="
              text-[11px]
              font-semibold
              text-slate-900
            "
            >
              {title}
            </h4>

            <p
              className="
              text-[8px]
              text-slate-400
            "
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {side === "left" && (
        <div className="flex items-center">
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />

          <div className="h-[1px] bg-[#1677FF]" style={{ width: lineWidth }} />
        </div>
      )}

      {side === "bottom" && (
        <div className="flex flex-col items-center">
          <div className="w-[1px] bg-[#1677FF]" style={{ height: lineWidth }} />
          <div className="h-[7px] w-[7px] rounded-full bg-[#1677FF]" />
        </div>
      )}
    </motion.div>
  );
};

const VibrolithMachine = () => {
  const [isExploded, setIsExploded] = useState(false);

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
        className="
relative
mx-auto
flex
max-w-[900px]
justify-center
min-h-[520px]
"
      >
        <div
          onClick={() => setIsExploded(!isExploded)}
          className="
relative
cursor-pointer
flex
items-center
justify-center
w-[420px]
h-[450px]
"
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Main Control Unit"
                  description="System Interface"
                  position="left-[-160px] top-[90px]"
                  side="left"
                  lineWidth={45}
                />

                <KeyPoint
                  title="Digital Pulse Display"
                  description="Treatment Monitoring"
                  position="left-1/2 -translate-x-1/2 top-[17px]"
                  side="bottom"
                  lineWidth={45}
                />

                <KeyPoint
                  title="ON/OFF Switch"
                  description="Treatment Monitoring"
                  position="right-[-180px] top-[120px]"
                  side="right"
                  lineWidth={95}
                />

                <KeyPoint
                  title="Pressure Gauge"
                  description="Pressure Control"
                  position="left-[140px] top-[250px]"
                  side="top"
                  lineWidth={35}
                />

                <KeyPoint
                  title="Frequency Control Knob"
                  description="Frequency Adjustment"
                  position="left-[-190px] top-[200px]"
                  side="left"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Cable Connection"
                  description="Energy Regulation"
                  position="left-[-120px] top-[290px]"
                  side="left"
                  lineWidth={65}
                />

                <KeyPoint
                  title="Probe Connector"
                  description="Treatment Interface"
                  position="right-[-150px] top-[200px]"
                  side="right"
                  lineWidth={55}
                />

                <KeyPoint
                  title="Foot Switch"
                  description="Hands-Free Control"
                  position="right-[-120px] top-[430px]"
                  side="right"
                  lineWidth={45}
                />
              </>
            )}
          </AnimatePresence>

          {/* Main Box */}

          <motion.img
            src={vibrolith1}
            alt="Vibrolith Control Unit"
            className="
absolute
w-[390px]
object-contain
select-none
"
            animate={{
              y: isExploded ? -35 : 0,
            }}
            transition={{
              duration: 0.6,
            }}
          />

          {/* Foot Pedal */}

          <motion.img
            src={vibrolith2}
            alt="Foot Switch"
            className="
absolute
w-[250px]
object-contain
select-none
top-[320px]
left-[75px]
"
            animate={{
              x: isExploded ? 50 : 0,
              y: isExploded ? 50 : 0,
            }}
            transition={{
              duration: 0.6,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VibrolithMachine;
