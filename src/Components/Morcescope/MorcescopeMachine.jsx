import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import morescope1 from "../../assets/images/morescope1.png";
import morescope2 from "../../assets/images/morescope2.png";
import morescope3 from "../../assets/images/morescope3.png";
import morescope4 from "../../assets/images/morescope4.png";

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
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
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

      <div
        className="
min-w-[150px]
rounded-[10px]
border
border-[#2F80ED]/60
bg-white
px-3
py-2
shadow-md
"
      >
        <div className="flex gap-2">
          <div
            className="
h-6
w-6
rounded-md
bg-[#1677FF]/10
flex
items-center
justify-center
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

          <div>
            <h4
              className="
text-[10px]
font-semibold
text-slate-900
"
            >
              {title}
            </h4>

            <p
              className="
text-[7px]
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
    </motion.div>
  );
};

const MorcescopeMachine = () => {
  const [isExploded, setIsExploded] = useState(false);

  const GAP = 25;

  const explode = (level) => ({
    transform: isExploded ? `translateY(${level * GAP}px)` : "translateY(0px)",
  });

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
max-w-[1100px]
min-h-[700px]
flex
justify-center
items-center
"
      >
        <div
          onClick={() => setIsExploded(!isExploded)}
          className="
relative
cursor-pointer
w-[900px]
h-[650px]
"
        >
          <AnimatePresence>
            {isExploded && (
              <>
                {/* LEFT */}

                <KeyPoint
                  title="Laser Console"
                  description="High Power Laser Source"
                  position="left-[70px] top-[180px]"
                  side="left"
                />

                <KeyPoint
                  title="Treatment Table"
                  description="Patient Positioning & Comfort"
                  position="left-[80px] bottom-[280px]"
                  side="left"
                />

                {/* RIGHT */}

                <KeyPoint
                  title="Robotic Arm"
                  description="High Precision & Stability"
                  position="right-[110px] top-[1px]"
                  side="right"
                />

                <KeyPoint
                  title="Robotic Base"
                  description="Smooth & Accurate Positioning"
                  position="right-[-50px] top-[180px]"
                  side="right"
                />

                <KeyPoint
                  title="Tracking System"
                  description="Real-Time Motion Tracking"
                  position="right-[30px] bottom-[210px]"
                  side="right"
                />

                <KeyPoint
                  title="Laser Delivery Head"
                  description="Precise Energy Delivery"
                  position="left-[210px] top-[40px]"
                  side="left"
                />
              </>
            )}
          </AnimatePresence>

          {/* ROBOTIC ARM */}

          <motion.img
            src={morescope1}
            alt="Robotic Arm"
            style={explode(-2)}
            className="
absolute
right-[150px]
top-[50px]
w-[350px]
object-contain
transition-transform
duration-500
"
          />

          {/* LASER CONSOLE */}

          <motion.img
            src={morescope2}
            alt="Laser Console"
            style={explode(-2)}
            className="
absolute
left-[260px]
top-[190px]
w-[230px]
object-contain
transition-transform
duration-500
"
          />

          {/* TRACKING PAD */}

          <motion.img
            src={morescope3}
            alt="Tracking System"
            style={explode(2)}
            className="
absolute
right-[210px]
bottom-[210px]
w-[180px]
object-contain
transition-transform
duration-500
"
          />

          {/* TABLE */}

          <motion.img
            src={morescope4}
            alt="Treatment Table"
            style={explode(1)}
            className="
absolute
left-[270px]
bottom-[200px]
w-[300px]
object-contain
transition-transform
duration-500
"
          />
        </div>
      </div>
    </section>
  );
};

export default MorcescopeMachine;
