import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, Activity, Gauge, Wind, Settings2, Sliders } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import suctionPumpImg from "../assets/images/suction_pump.jpg";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

const FeatureCard = ({ number, type, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[295px] h-[135px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[42px] w-[56px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>
      <div className="absolute left-0 top-[40px] h-[72px] w-[1px] bg-primary"></div>
      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="relative ml-6 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_5px_15px_rgba(40,116,189,0.12)]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-blue-100 bg-white/80 overflow-hidden">
            <img src={image} alt={title} className="h-full w-full object-cover p-1" />
          </div>
        </div>
        <div className="min-w-0 flex-1 pr-2">
          {type && (
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
                {type}
              </span>
            </div>
          )}
          <h4 className="text-[13px] font-bold leading-tight text-slate-900">{title}</h4>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-2.5 right-4 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

const SuctionPump = () => {
  const specs = [
    { label: "Flow Rate Range", value: "10 – 1000 mL/min continuously adjustable" },
    { label: "Suction Pressure Range", value: "-10 to -70 kPa (-75 to -525 mmHg)" },
    { label: "Irrigation Pressure", value: "Automatic pressure-regulated peristaltic drive" },
    { label: "Display Interface", value: "Digital LED flow & vacuum pressure indicators" },
    { label: "Tubing Compatibility", value: "Standard medical silicone & disposable tubing sets" },
    { label: "Noise Level", value: "< 50 dB ultra-quiet brushless motor operation" },
    { label: "Safety Protections", value: "Overpressure auto-relief, fluid overflow shutoff" },
    { label: "Power Supply", value: "100–240 VAC, 50/60 Hz universal power" },
  ];

  const features = [
    {
      icon: Gauge,
      title: "Real-Time Pressure Sensing",
      desc: "Intelligent microcomputer regulation continuously monitors intraluminal irrigation pressure to prevent renal pelvic overpressure.",
    },
    {
      icon: Wind,
      title: "High-Efficiency Dual Suction",
      desc: "Instant evacuation of stone dust, blood clots, and tissue fragments keeps the surgical optical field completely clear.",
    },
    {
      icon: Settings2,
      title: "One-Touch Flow Modulation",
      desc: "Ergonomic control buttons and rotary knob allow surgical teams to adapt flow rates and suction levels seamlessly mid-procedure.",
    },
    {
      icon: ShieldCheck,
      title: "Patient Safety Interlocks",
      desc: "Integrated overflow detection and auto-cutoff valves protect surgical equipment and safeguard patient safety during long lithotripsy sessions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Endourology Suction & Irrigation Pump Rental | Reinforce Healthcare Services"
        description="High-performance medical endoscopic irrigation and suction pump console providing continuous clear visualization and pressure control during flexible ureterorenoscopy."
        keywords="suction pump rental, irrigation pump, endourology suction pump, URS irrigation pump, medical pump rental"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF5FB] via-[#F4F9FD] to-white py-14 lg:py-20">
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#19A8E8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Endourology Accessory Series
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Endourological <span className="text-primary">Suction Pump</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Medical-grade dual-action peristaltic irrigation and vacuum suction pump designed for crystal-clear endoscopic visualization and controlled intrarenal pressure.
            </p>
          </div>

          {/* Product Showcase */}
          <div className="relative mx-auto max-w-4xl flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            <FeatureCard
              number="01"
              type="Control"
              title="Dual Action"
              description="Independent digital control over irrigation flow and suction vacuum."
              image={suctionPumpImg}
              position="-left-12 top-6"
            />
            <FeatureCard
              number="02"
              type="Accuracy"
              title="Digital LED Gauges"
              description="Continuous real-time flow rate and pressure monitoring."
              image={suctionPumpImg}
              position="-right-12 top-10"
            />
            <FeatureCard
              number="03"
              type="Safety"
              title="Pressure Regulated"
              description="Prevents renal pelvic pressure spikes with auto-relief valves."
              image={suctionPumpImg}
              position="-left-8 bottom-4"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 w-full max-w-md bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(25,168,232,0.12)] border border-blue-100 flex items-center justify-center"
            >
              <img
                src={suctionPumpImg}
                alt="Endourological Suction Pump"
                className="w-full h-auto object-contain max-h-[360px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key Features & Benefits
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Designed for reliability, surgical clarity, and maximum safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technical Specifications
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Operational parameters of the Medical Suction & Irrigation Pump
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-100">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-2 px-6 py-4 text-sm ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <span className="font-semibold text-slate-700">{item.label}</span>
                  <span className="text-slate-600 sm:text-right font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <ProductInquireCTA
        productTitle="Endourological Suction Pump"
        categoryName="Disposable Ureterorenoscope"
      />
    </div>
  );
};

export default SuctionPump;
