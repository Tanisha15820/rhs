import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import cystoscopy1 from "../../assets/images/cystoscopy1.png";
import cystoscopy2 from "../../assets/images/cystoscopy2.png";
import cystoscopy3 from "../../assets/images/cystoscopy3.png";
import cystoscopy4 from "../../assets/images/cystoscopy4.png";

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

const CystoscopyMachine = () => {
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
max-w-[1000px]
min-h-[650px]
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
w-[700px]
h-[600px]
"
        >
          <AnimatePresence>
            {isExploded && (
              <>
                <KeyPoint
                  title="Sterile Packaging"
                  description="Single Use • Sterile"
                  position="left-[-30px] top-[150px]"
                  side="left"
                />

                <KeyPoint
                  title="Monitor Display"
                  description="Live View & Control"
                  position="right-[-90px] top-[40px]"
                  side="right"
                />

                <KeyPoint
                  title="Handpiece"
                  description="Ergonomic Control"
                  position="left-[60px] top-[240px]"
                  side="left"
                />

                <KeyPoint
                  title="Video Cable"
                  description="Signal Transmission"
                  position="right-[-160px] top-[260px]"
                  side="right"
                />

                <KeyPoint
                  title="Flexible Insertion Tube"
                  description="Smooth Navigation"
                  position="left-[10px] top-[340px]"
                  side="left"
                />

                <KeyPoint
                  title="Distal Tip"
                  description="HD Camera & LED Light"
                  position="right-[-120px] bottom-[130px]"
                  side="right"
                />

                <KeyPoint
                  title="Irrigation Port"
                  description="Fluid Supply"
                  position="right-[-50px] top-[330px]"
                  side="right"
                />
              </>
            )}
          </AnimatePresence>

          {/* PACKAGE */}

          <motion.img
            src={cystoscopy4}
            alt="Sterile Packaging"
            style={explode(-2)}
            className="
absolute
left-[150px]
top-[120px]
w-[150px]
object-contain
transition-transform
duration-500
"
          />

          {/* MONITOR */}

          <motion.img
            src={cystoscopy1}
            alt="Monitor"
            style={explode(-1)}
            className="
absolute
right-[80px]
top-[40px]
w-[280px]
object-contain
transition-transform
duration-500
"
          />

          {/* HANDPIECE */}

          <motion.img
            src={cystoscopy3}
            alt="Handpiece"
            style={explode(1)}
            className="
absolute
left-[200px]
top-[200px]
w-[430px]
object-contain
transition-transform
duration-500
"
          />

          {/* CABLE + IRRIGATION */}

          <motion.img
            src={cystoscopy2}
            alt="Cable"
            style={explode(1)}
            className="
absolute
left-[460px]
bottom-[250px]
w-[220px]
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

export default CystoscopyMachine;
