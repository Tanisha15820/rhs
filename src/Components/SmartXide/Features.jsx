import React from "react";
import { UserRound, Crosshair, Focus, Plug, ScanLine } from "lucide-react";
import hicanImg from "../../assets/images/hican_tech.png";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20 border-t border-slate-100">
      <div className="pointer-events-none absolute left-1/2 top-[330px] h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#20B7AE]/10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
              Technology That Empowers Precision
            </span>
            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Advanced Features &{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Smart engineering for precise control, superior safety and
            <br className="hidden sm:block" />
            exceptional surgical outcomes.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP INTERACTIVE INFOGRAPHIC STAGE (Fixed coordinates & SVG arrows)
            Shown on lg screens (>= 1024px)
        ========================================================================== */}
        <div className="relative mx-auto hidden h-[830px] w-full max-w-[1140px] lg:block">
          {/* Central Machine Graphic */}
          <div className="absolute left-1/2 top-[70px] z-20 w-[420px] -translate-x-1/2">
            {/* Background ambient glow */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#20B7AE]/15 via-[#19A8E8]/10 to-transparent blur-2xl" />

            {/* Concentric Tech Rings */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#20B7AE]/20" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#20B7AE]/25" />

            {/* Image */}
            <img
              src={hicanImg}
              alt="HiScan Surgical Technology"
              className="relative z-10 mx-auto w-[360px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* SVG Vector Connector Arrows */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox="0 0 1140 830"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrowhead-teal"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#20B7AE" />
              </marker>
            </defs>

            {/* --- Arrow 1: Easy Control (Top-Left) -> Joystick Module --- */}
            <circle cx="290" cy="75" r="4" fill="#20B7AE" />
            <path
              d="M 290 75 H 395 V 155 H 436"
              stroke="#20B7AE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-teal)"
            />
            <circle cx="442" cy="155" r="3.5" fill="#20B7AE" />
            <circle cx="442" cy="155" r="7" stroke="#20B7AE" strokeWidth="1" opacity="0.4" />

            {/* --- Arrow 2: Easy Field (Bottom-Left) -> Field Ring --- */}
            <circle cx="290" cy="420" r="4" fill="#20B7AE" />
            <path
              d="M 290 420 H 380 V 360 H 426"
              stroke="#20B7AE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-teal)"
            />
            <circle cx="432" cy="360" r="3.5" fill="#20B7AE" />
            <circle cx="432" cy="360" r="7" stroke="#20B7AE" strokeWidth="1" opacity="0.4" />

            {/* --- Arrow 4: Easy Plug (Top-Right) -> Connector Port --- */}
            <circle cx="850" cy="75" r="4" fill="#20B7AE" />
            <path
              d="M 850 75 H 745 V 155 H 704"
              stroke="#20B7AE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-teal)"
            />
            <circle cx="698" cy="155" r="3.5" fill="#20B7AE" />
            <circle cx="698" cy="155" r="7" stroke="#20B7AE" strokeWidth="1" opacity="0.4" />

            {/* --- Arrow 5: HiScan Surgical (Bottom-Right) -> Laser Scanner --- */}
            <circle cx="850" cy="350" r="4" fill="#20B7AE" />
            <path
              d="M 850 350 H 717"
              stroke="#20B7AE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-teal)"
            />
            <circle cx="711" cy="350" r="3.5" fill="#20B7AE" />
            <circle cx="711" cy="350" r="7" stroke="#20B7AE" strokeWidth="1" opacity="0.4" />

            {/* --- Arrow 3: Easy Focus (Bottom-Center) -> Optical Lens --- */}
            <circle cx="570" cy="565" r="4" fill="#20B7AE" />
            <path
              d="M 570 565 V 472"
              stroke="#20B7AE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-teal)"
            />
            <circle cx="570" cy="465" r="3.5" fill="#20B7AE" />
            <circle cx="570" cy="465" r="7" stroke="#20B7AE" strokeWidth="1" opacity="0.4" />
          </svg>

          {/* Fixed-Position Feature Cards */}
          {/* Card 01: Top-Left */}
          <div className="absolute left-0 top-[10px] z-30 w-[290px]">
            <FeatureCard
              number="01"
              title="Easy Control"
              icon={<UserRound size={22} />}
              description="Operate without ever moving your eyes from the microscope."
              points={[
                "4 functions control by the exclusive microswitch joystick",
                "Scanning shape rotation (step-by-step and fast)",
                "Ablation figures dimension adjustment",
                "Scan-ON/Scan-OFF",
                "Laser beam Centering adjustment",
              ]}
            />
          </div>

          {/* Card 02: Bottom-Left */}
          <div className="absolute left-0 top-[370px] z-30 w-[290px]">
            <FeatureCard
              number="02"
              title="Easy Field"
              icon={<Crosshair size={22} />}
              description="Mechanical control of the working area to precisely confine the laser beam within the operating field."
              points={["Easy and safe."]}
            />
          </div>

          {/* Card 04: Top-Right */}
          <div className="absolute right-0 top-[10px] z-30 w-[290px]">
            <FeatureCard
              number="04"
              title="Easy Plug"
              icon={<Plug size={22} />}
              description="Fast connections and internal wiring."
              points={[]}
            />
          </div>

          {/* Card 05: Bottom-Right */}
          <div className="absolute right-0 top-[280px] z-30 w-[290px]">
            <FeatureCard
              number="05"
              title="HiScan Surgical"
              icon={<ScanLine size={22} />}
              description="Ultra-fast precision scanning system."
              points={[
                "Ultra fast laser beam movement (100 millionths of a second), minimum dwell time.",
                "High-precision scanning shapes, with size of up to 6.3 mm for tissue cutting and ablation.",
              ]}
            />
          </div>

          {/* Card 03: Bottom-Center */}
          <div className="absolute left-1/2 top-[565px] z-30 w-[470px] max-w-[95%] -translate-x-1/2">
            <FeatureCard
              number="03"
              title="Easy Focus"
              icon={<Focus size={22} />}
              description="Hybrid technology focusing system."
              points={[
                "Hybrid technology focusing system (holographic lens and high-reflectance mirrors)",
                "Single-frame focus/defocus system with focal point memory.",
                "High depth focus with exact correspondence between the guide light and the CO₂ laser.",
              ]}
            />
          </div>
        </div>

        {/* =========================================================================
            RESPONSIVE MOBILE & TABLET LAYOUT
            Shown on screens < lg (< 1024px)
        ========================================================================== */}
        <div className="block lg:hidden">
          {/* Machine Graphic Showcase */}
          <div className="mb-10 flex flex-col items-center">
            <div className="relative flex justify-center py-4">
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#20B7AE]/20" />
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#20B7AE]/25" />
              <img
                src={hicanImg}
                alt="HiScan Surgical Technology"
                className="relative z-10 w-[85%] max-w-[340px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              />
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#20B7AE]/30 bg-[#20B7AE]/10 px-4 py-1 text-xs font-semibold text-[#102A43]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#20AFA7]"></span>
              HiScan Surgical Integrated Scanner & Micromanipulator
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <FeatureCard
              number="01"
              title="Easy Control"
              icon={<UserRound size={22} />}
              description="Operate without ever moving your eyes from the microscope."
              points={[
                "4 functions control by the exclusive microswitch joystick",
                "Scanning shape rotation (step-by-step and fast)",
                "Ablation figures dimension adjustment",
                "Scan-ON/Scan-OFF",
                "Laser beam Centering adjustment",
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
              number="02"
              title="Easy Field"
              icon={<Crosshair size={22} />}
              description="Mechanical control of the working area to precisely confine the laser beam within the operating field."
              points={["Easy and safe."]}
            />

            <FeatureCard
              number="05"
              title="HiScan Surgical"
              icon={<ScanLine size={22} />}
              description="Ultra-fast precision scanning system."
              points={[
                "Ultra fast laser beam movement (100 millionths of a second), minimum dwell time.",
                "High-precision scanning shapes, with size of up to 6.3 mm for tissue cutting and ablation.",
              ]}
            />

            <div className="md:col-span-2">
              <FeatureCard
                number="03"
                title="Easy Focus"
                icon={<Focus size={22} />}
                description="Hybrid technology focusing system."
                points={[
                  "Hybrid technology focusing system (holographic lens and high-reflectance mirrors)",
                  "Single-frame focus/defocus system with focal point memory.",
                  "High depth focus with exact correspondence between the guide light and the CO₂ laser.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({
  number,
  title,
  icon,
  description,
  points = [],
}) => {
  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-[0_8px_30px_rgba(25,70,110,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_35px_rgba(32,183,174,0.15)] hover:border-[#20B7AE]/30">
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
