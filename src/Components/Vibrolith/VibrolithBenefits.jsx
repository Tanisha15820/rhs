import React from "react";
import {
  ShieldCheck,
  Target,
  Sliders,
  CheckCircle2,
  DollarSign,
  Wind,
} from "lucide-react";

const VibrolithBenefits = () => {
  const benefits = [
    {
      title: "SAFE & TISSUE FRIENDLY",
      tagline: "Zero Thermal Injury",
      description:
        "Works on the ballistic principle of compressed air accelerating a projectile against a steel probe. Disintegrates calculi without affecting tissue. No heating effect, eliminating risks of thermal injury or optic damage to endoscopes.",
      icon: ShieldCheck,
      color: "#20AFA7",
    },
    {
      title: "HIGHLY EFFECTIVE",
      tagline: "Rapid Disintegration",
      description:
        "Direct contact electro-pneumatic energy delivers maximum fragmentation efficiency regardless of calculus composition or location. Exceptional success for staghorn, renal pelvic, ureteral, and bladder calculi.",
      icon: Target,
      color: "#19A8E8",
    },
    {
      title: "SIMPLE OPERATION",
      tagline: "Intuitive Digital Control",
      description:
        "Single or continuous pulse mode selected at the touch-key panel. Digital pulse counter, independent pressure regulator knob (0-4 Bar), and hands-free pneumatic foot switch.",
      icon: Sliders,
      color: "#2525B8",
    },
    {
      title: "VERSATILE COMPATIBILITY",
      tagline: "Universal Endoscopy",
      description:
        "Operates with central hospital air supply or dedicated silent mobile compressor. Compatible with all standard rigid and semi-rigid ureteroscopes, nephroscopes, and cystoscopes.",
      icon: CheckCircle2,
      color: "#7259D6",
    },
    {
      title: "ECONOMICAL & LOW MAINTENANCE",
      tagline: "Zero Consumables",
      description:
        "Features fully reusable, autoclavable steel probes with zero disposable consumables required. Extremely low operational cost and virtually maintenance-free durability.",
      icon: DollarSign,
      color: "#F59E0B",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-24">
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#3292F5]" />

            <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              WHY VIBROLITH® PNEUMATIC?
            </p>

            <span className="h-[1px] w-12 bg-[#3292F5]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Tissue Friendly, Safe,{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Powerful & Quiet
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#7181A3] sm:text-base">
            Engineered by ELMED Medical Systems to provide gold-standard
            intracorporeal ballistic stone disintegration with unmatched safety
            and zero thermal impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="
          group
          relative
          flex
          flex-col
          justify-between
          overflow-hidden
          rounded-3xl
          border
          border-slate-200/80
          bg-white
          p-7
          shadow-sm
          transition-all
          duration-300

          hover:-translate-y-1.5
          hover:border-blue-200
          hover:bg-gradient-to-br
          hover:from-[#0F172A]
          hover:via-[#1E293B]
          hover:to-[#0F172A]
          hover:shadow-xl
        "
              >
                <div>
                  {/* Icon + Number */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="
                flex
                h-13
                w-13
                items-center
                justify-center
                rounded-2xl
                p-3
                shadow-sm
                transition-all
                duration-300
                group-hover:scale-110
              "
                      style={{
                        backgroundColor: `${item.color}18`,
                        color: item.color,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span
                      className="
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-slate-400
                transition-colors
                duration-300
                group-hover:text-slate-300
              "
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Tagline */}
                  <span
                    className="
              mb-2
              inline-block
              rounded-full
              px-2.5
              py-0.5
              text-[10px]
              font-bold
              uppercase
              tracking-wider
            "
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.tagline}
                  </span>

                  {/* Title */}
                  <h3
                    className="
              text-base
              font-bold
              text-[#102A43]
              transition-colors
              duration-300
              group-hover:text-white
              sm:text-lg
            "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
              mt-2.5
              text-xs
              leading-5
              text-[#697A94]
              transition-colors
              duration-300
              group-hover:text-slate-300
              sm:text-sm
              sm:leading-6
            "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div
                  className="
            mt-6
            h-[2px]
            w-full
            rounded-full
            transition-all
            duration-500
            group-hover:bg-[#38BDF8]
          "
                  style={{
                    backgroundColor: `${item.color}30`,
                  }}
                />
              </div>
            );
          })}

          {/* Quick Summary Card */}
          <div
            className="
      group
      flex
      flex-col
      justify-between
      rounded-3xl
      border
      border-slate-200/80
      bg-white
      p-7
      text-[#102A43]
      shadow-sm
      transition-all
      duration-300

      hover:-translate-y-1.5
      hover:border-blue-200
      hover:bg-gradient-to-br
      hover:from-[#0F172A]
      hover:via-[#1E293B]
      hover:to-[#0F172A]
      hover:text-white
      hover:shadow-xl
    "
          >
            <div>
              {/* Icon */}
              <div
                className="
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-[#E8F4FD]
          text-[#19A8E8]
          transition-all
          duration-300
          group-hover:bg-white/10
          group-hover:text-[#38BDF8]
          group-hover:scale-110
        "
              >
                <Wind size={24} />
              </div>

              {/* Label */}
              <span
                className="
          text-[11px]
          font-bold
          uppercase
          tracking-widest
          text-[#19A8E8]
          transition-colors
          duration-300
          group-hover:text-[#38BDF8]
        "
              >
                CLINICAL HIGHLIGHT
              </span>

              {/* Title */}
              <h3
                className="
          mt-2
          text-xl
          font-extrabold
          text-[#102A43]
          transition-colors
          duration-300
          group-hover:text-white
        "
              >
                Electrical & Thermal Isolation
              </h3>

              {/* Description */}
              <p
                className="
          mt-3
          text-xs
          leading-5
          text-[#697A94]
          transition-colors
          duration-300
          group-hover:text-slate-300
          sm:text-sm
        "
              >
                No electrical current travels to the patient or operator.
                Handpiece and foot pedal are driven entirely by compressed air,
                eliminating shock and thermal hazards.
              </p>
            </div>

            {/* Bottom Highlight */}
            <div
              className="
        mt-6
        rounded-xl
        border
        border-slate-200
        bg-[#F8FAFE]
        p-3
        text-center
        text-xs
        font-semibold
        text-[#19A8E8]
        transition-all
        duration-300

        group-hover:border-white/10
        group-hover:bg-white/5
        group-hover:text-[#38BDF8]
      "
            >
              Simple • Powerful • Mobile • Maintenance Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithBenefits;
