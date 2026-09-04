import React from "react";
import couplingImg from "../../assets/images/vibrolith_plus_coupling.jpg";
import { Cpu, Target, Layers, Zap, CheckCircle2, ShieldAlert } from "lucide-react";

const VibrolithPlusCoupling = () => {
  const specs = [
    { label: "Ultrasonic Energy Power", value: "Max 150W (15 – 24 kHz variable frequency)" },
    { label: "Pneumatic Pulse Frequency", value: "1 – 12 Hz gradual control" },
    { label: "Pneumatic Mode", value: "Single pulse or continuous multi-pulse" },
    { label: "Operating Modes", value: "3 Modes: Pneumatic, Ultrasonic & Combined" },
    { label: "Coupling Alignment", value: "Instant lock — Zero probe length calibration required" },
    { label: "Thermal Protection", value: "Real-time microprocessor anti-overheating feedback" },
    { label: "Pneumatic Supply Pressure", value: "3.5 – 6.5 bar (central hospital line or compressor)" },
    { label: "Sterilization Methods", value: "Autoclave, Chemical & Gas sterilization" },
  ];

  const modes = [
    {
      title: "1. Pneumatic Ballistic Mode",
      desc: "Delivers powerful kinetic shock impulses to fracture large, high-density calculi instantly.",
      badge: "Ballistic Impact",
    },
    {
      title: "2. Ultrasonic Micro-Mode",
      desc: "Emits 15–24 kHz acoustic vibrations to pulverize stones into microscopic, easily aspirable dust.",
      badge: "Thermal-Safe Dusting",
    },
    {
      title: "3. Combined Dual Action",
      desc: "Simultaneously engages ballistic cracking and ultrasonic disintegration without adjusting probe length.",
      badge: "Maximum Speed",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFE] to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Coupling Details */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#20B7AE]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20B7AE] sm:text-sm">
                Next-Generation Transducer Engineering
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
              Unique Multi-Mode{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Coupling Device
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
              The Vibrolith Plus features an industry-leading coupling device that fuses both
              ultrasonic and pneumatic handpieces into an ergonomic single-operator instrument.
              Unlike competing lithotripters, the patented coupling mechanism eliminates the cumbersome
              requirement of adjusting probe lengths before switching into combined mode.
            </p>

            {/* 3 Modes Mini Grid */}
            <div className="mt-6 space-y-3">
              {modes.map((mode, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      {mode.title}
                    </h4>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      {mode.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#697A94] sm:text-xs">
                    {mode.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Parameter List */}
            <div className="mt-6 space-y-2">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-primary sm:text-sm text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stone Fragmentation Image Showcase */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-6">
            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={couplingImg}
                  alt="Vibrolith Plus Intracorporeal Lithotripsy Handpiece Fragmenting Stone with Suction"
                  className="w-full object-cover shadow-sm transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                  Endoscopic View • PCNL Stone Fragmentation
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 sm:text-sm">
                      Intelligent Real-Time Anti-Overheating Feedback
                    </h5>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                      The multi-microprocessor constantly monitors acoustic impedance and thermal dissipation,
                      automatically tuning output energy so surgeons can work safely near delicate mucosa without
                      heat risk to tissue or endoscope optics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithPlusCoupling;
