import React from "react";
import { Rocket, Zap, FastForward, Clock, SlidersHorizontal } from "lucide-react";
import wireframeImage from "../../assets/images/litho35_wireframe_front.png";

const Litho35Excellence = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "HIGH POWER",
      value: "Up to 35 W",
      detail: "For faster, smoother tissue incision and resection.",
      color: "from-[#FF4D4D] to-[#F97316]",
    },
    {
      icon: Zap,
      title: "HIGH PULSE ENERGY",
      value: "Up to 5 J",
      detail: "For the fragmentation of even the hardest stones.",
      color: "from-[#EAB308] to-[#F59E0B]",
    },
    {
      icon: FastForward,
      title: "HIGH FREQUENCY",
      value: "Up to 30 Hz",
      detail: "For rapid low-energy ablation and quick dusting.",
      color: "from-[#06B6D4] to-[#3B82F6]",
    },
    {
      icon: Clock,
      title: "LARGE PULSE WIDTH RANGE",
      value: "Up to 1500 µs",
      detail: "For superior, smooth dusting lithotripsy.",
      color: "from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      icon: SlidersHorizontal,
      title: "FLEXIBILITY",
      value: "Small Fibers",
      detail: "High power emission maintained even with small diameter fibers.",
      color: "from-[#10B981] to-[#059669]",
    },
  ];

  const metrics = [
    { label: "Models", count: "2" },
    { label: "Emission Modes", count: "4" },
    { label: "Fiber Diameters", count: "6" },
    { label: "Fiber Types", count: "4" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Clinical Superiority
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            The Excellence in{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              its Category
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Engineered with a versatile holmium laser cavity delivering up to 35 W of
            power, 5 J pulse energy, and pulse durations reaching 1500 µs.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: 5 Highlights */}
          <div className="space-y-4 lg:col-span-7">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_25px_rgba(25,168,232,0.12)] sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xs font-bold tracking-wide text-slate-800 sm:text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#697A94] sm:text-[13px]">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <span className="ml-3 shrink-0 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-primary sm:text-sm">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Wireframe Schematic */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5">
            <div className="relative flex h-[460px] w-full items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-b from-white to-[#f1f7fe] p-6 shadow-[0_15px_40px_rgba(25,168,232,0.08)]">
              <img
                src={wireframeImage}
                alt="Litho Technical Architecture"
                className="h-full w-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute top-4 right-4 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-sm">
                Litho 35 Architecture
              </div>
            </div>
          </div>
        </div>

        {/* Numbers of Versatility Banner */}
        <div className="mt-14 rounded-3xl border border-blue-200/60 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 text-white shadow-xl sm:p-8">
          <div className="mb-6 text-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8] sm:text-sm">
              Numbers of Versatility
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Maximum procedural flexibility tailored to any surgical challenge
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="text-3xl font-extrabold text-[#38BDF8] sm:text-4xl">
                  {metric.count}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litho35Excellence;
