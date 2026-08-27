import React from "react";
import { UserRound, Crosshair, Focus, Plug, ScanLine } from "lucide-react";

import hicanImg from "../../assets/images/hican_tech.png";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[330px] h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#20B7AE]/10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
              Technology That Empowers Precision
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Advanced Features &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Smart engineering for precise control, superior safety and
            <br className="hidden sm:block" />
            exceptional surgical outcomes.
          </p>
        </div>

        <div className="relative mx-auto min-h-[700px] max-w-6xl">
          <div className="absolute left-1/2 top-[80px] z-20 hidden w-[470px] -translate-x-1/2 md:block">
            {/* Decorative Circle */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#20B7AE]/15" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#20B7AE]/10" />

            {/* Machine Image */}
            <img
              src={hicanImg}
              alt="HiScan Surgical Technology"
              className="relative z-10 mx-auto w-[440px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/*  LEFT CARD 01  */}
          <FeatureCard
            number="01"
            title="Easy Control"
            icon={<UserRound size={22} />}
            position="left-0 -top-15"
            description="Operate without ever moving your eyes from the microscope."
            points={[
              "4 functions control by the exclusive microswitch joystick",
              "Scanning shape rotation (step-by-step and fast)",
              "Ablation figures dimension adjustment",
              "Scan-ON/Scan-OFF",
              "Laser beam Centering adjustment",
            ]}
          />

          {/* Connector Line - Card 01 */}
          <div className="absolute left-[285px] top-[32px] hidden h-px w-[170px] bg-[#20B7AE]/70 lg:block" />
          <div className="absolute left-[455px] top-[32px] hidden h-[95px] w-px bg-[#20B7AE]/70 lg:block" />
          <div className="absolute left-[455px] top-[127px] hidden w-[50px] border-t border-[#20B7AE]/70 lg:block" />

          {/*  LEFT CARD 02 */}
          <FeatureCard
            number="02"
            title="Easy Field"
            icon={<Crosshair size={22} />}
            position="left-0 top-[250px]"
            description="Mechanical control of the working area to precisely confine the laser beam within the operating field."
            points={["Easy and safe."]}
          />

          {/* Connector Line - Card 02 */}
          <div className="absolute left-[285px] top-[270px] hidden w-[150px] border-t border-[#20B7AE]/70 lg:block" />
          <div className="absolute left-[435px] top-[270px] hidden h-[80px] w-px bg-[#20B7AE]/70 lg:block" />

          {/*  RIGHT CARD 04 */}
          <FeatureCard
            number="04"
            title="Easy Plug"
            icon={<Plug size={22} />}
            position="right-0 top-[28px]"
            description="Fast connections and internal wiring."
            points={[]}
          />

          {/* Connector Line - Card 04 */}
          <div className="absolute right-[285px] top-[105px] hidden w-[120px] border-t border-[#20B7AE]/70 lg:block" />
          <div className="absolute right-[405px] top-[105px] hidden h-[95px] w-px bg-[#20B7AE]/70 lg:block" />

          {/*RIGHT CARD 05  */}
          <FeatureCard
            number="05"
            title="HiScan Surgical"
            icon={<ScanLine size={22} />}
            position="right-0 top-[245px]"
            description=""
            points={[
              "Ultra fast laser beam movement (100 millionths of a second), minimum dwell time.",
              "High-precision scanning shapes, with size of up to 6.3 mm for tissue cutting and ablation.",
            ]}
          />

          {/* Connector Line - Card 05 */}
          <div className="absolute right-[285px] top-[300px] hidden w-[100px] border-t border-[#20B7AE]/70 lg:block" />
          <div className="absolute right-[385px] top-[300px] hidden h-[55px] w-px bg-[#20B7AE]/70 lg:block" />

          {/*  CENTER BOTTOM CARD 03 */}
          <div className="absolute top-135 left-160 z-30 hidden w-[390px] -translate-x-1/2 md:block">
            <FeatureCard
              number="03"
              title="Easy Focus"
              icon={<Focus size={22} />}
              position=""
              description=""
              points={[
                "Hybrid technology focusing system (holographic lens and high-reflectance mirrors)",
                "Single-frame focus/defocus system with focal point memory.",
                "High depth focus with exact correspondence between the guide light and the CO₂ laser.",
              ]}
            />
          </div>

          {/* Connector to Card 03 */}
          <div className="absolute bottom-[130px] left-1/2 hidden h-[100px] w-px -translate-x-1/2 bg-[#20B7AE]/70 md:block" />

          {/* mobile */}
          <div className="space-y-5 md:hidden">
            <div className="flex justify-center py-5">
              <img
                src={hicanImg}
                alt="HiScan Surgical Technology"
                className="w-[90%] max-w-[430px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              />
            </div>

            <FeatureCard
              number="01"
              title="Easy Control"
              icon={<UserRound size={22} />}
              description="Operate without ever moving your eyes from the microscope."
              points={[
                "4 functions control by the exclusive microswitch joystick",
                "Scanning shape rotation",
                "Ablation figures dimension adjustment",
                "Scan-ON/Scan-OFF",
                "Laser beam Centering adjustment",
              ]}
            />

            <FeatureCard
              number="02"
              title="Easy Field"
              icon={<Crosshair size={22} />}
              description="Mechanical control of the working area to precisely confine the laser beam within the operating field."
              points={["Easy and safe."]}
            />

            <FeatureCard
              number="03"
              title="Easy Focus"
              icon={<Focus size={22} />}
              points={[
                "Hybrid technology focusing system",
                "Single-frame focus/defocus system with focal point memory.",
                "High depth focus with exact correspondence between the guide light and the CO₂ laser.",
              ]}
            />

            <FeatureCard
              number="04"
              title="Easy Plug"
              icon={<Plug size={22} />}
              description="Fast connections and internal wiring."
              points={[]}
            />

            <FeatureCard
              number="05"
              title="HiScan Surgical"
              icon={<ScanLine size={22} />}
              points={[
                "Ultra fast laser beam movement with minimum dwell time.",
                "High-precision scanning shapes, with size of up to 6.3 mm for tissue cutting and ablation.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// features cards

const FeatureCard = ({
  number,
  title,
  icon,
  position = "",
  description,
  points = [],
}) => {
  return (
    <div
      className={`absolute ${position} hidden w-[285px] rounded-2xl border border-white bg-white/95 p-4 shadow-[0_8px_30px_rgba(25,70,110,0.08)] backdrop-blur-sm md:block`}
    >
      {/* Card Header */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E8FAFA] to-[#EAF7FF] text-[#19A8E8]">
          {icon}
        </div>

        <div>
          {/* Number */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#20AFA7]">{number}</span>

            <span className="h-px w-7 bg-[#20B7AE]/40" />
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[#102A43]">{title}</h3>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-3 text-xs leading-5 text-[#66758A]">{description}</p>
      )}

      {/* Points */}
      {points.length > 0 && (
        <div className="mt-3 space-y-2">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              {/* Small Bullet */}
              <span className="mt-[4px] flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#20AFA7]">
                <span className="h-[3px] w-[3px] rounded-full bg-white" />
              </span>

              <p className="text-[11px] font-medium leading-4 text-[#526174]">
                {point}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
