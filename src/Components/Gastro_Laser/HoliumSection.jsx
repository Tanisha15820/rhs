import React from "react";
import {
  ArrowRight,
  Zap,
  Users,
  Settings,
  Target,
  ShieldCheck,
  Hand,
  Atom,
  CircleDot,
} from "lucide-react";

import holmiumMachine from "../../assets/images/holium_machine.png";

const HolmiumSection = () => {
  const features = [
    {
      icon: CircleDot,
      title: "Double Footswitch",
    },
    {
      icon: Zap,
      title: "High Performance Even With Small Fibers",
    },
    {
      icon: Users,
      title: "Saving of Settings",
    },
    {
      icon: Settings,
      title: "MasterPulse",
      smallText: "7 steps pulse duration adjustment",
    },
    {
      icon: Target,
      title: "Guide Settings Selection",
      smallText: "(set only for urology)",
    },
  ];

  const specifications = [
    ["Laser Type", "Holmium:YAG"],
    ["Application", "Urology / Clinical Use"],
    ["Pulse Modes", "MasterPulse"],
    ["Fiber Support", "Small Fiber Compatible"],
    ["Control", "Dual Footswitch"],
    ["Settings", "Memory Save"],
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precise Control",
      text: "Accurate energy delivery for optimal clinical outcomes.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Performance",
      text: "Consistent output and advanced safety.",
    },
    {
      icon: Hand,
      title: "User Friendly",
      text: "Intuitive interface designed for easy use.",
    },
    {
      icon: Atom,
      title: "Clinical Versatility",
      text: "Designed for a wide range of urological applications.",
    },
  ];

  return (
    <section className="bg-[#f4f8ff] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center">
            {/* Machine image */}
            <div className="flex w-full justify-center">
              <img
                src={holmiumMachine}
                alt="Holmium Laser System"
                className="h-[415px] w-full max-w-[520px] object-contain"
              />
            </div>

            {/* Specification box */}
            <div className="mt-5 w-full max-w-[500px] overflow-hidden rounded-xl border border-[#dce6f5] bg-white shadow-md">
              {specifications.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-b border-[#edf1f7] px-5 py-3 last:border-b-0"
                >
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#64748b] sm:text-base">
                    <span className="text-[#5797ed]">
                      <CircleDot size={14} />
                    </span>
                    {item[0]}
                  </div>

                  <p className="text-sm text-[#334155] sm:text-base">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#1CA7E9]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7] sm:text-sm">
                Advanced Holmium Laser System
              </p>
              <span className="h-px w-8 bg-[#20B7AE]" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Beyond standard{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                low power.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-[#697A94] sm:text-base sm:leading-7">
              Engineered for precision and efficiency, our low power Holmium
              laser
              <br className="hidden sm:block" />
              delivers reliable performance for a wide range of clinical
              applications.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-2.5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-[#e2eafa] bg-white px-4 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Icon */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef5ff] text-[#4285ed]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#263b5a] sm:text-base">
                          {feature.title}
                        </p>

                        {feature.smallText && (
                          <p className="mt-0.5 text-xs text-[#94a3b8] sm:text-sm">
                            {feature.smallText}
                          </p>
                        )}
                      </div>
                    </div>

                    <ArrowRight size={16} className="text-[#4285ed]" />
                  </div>
                );
              })}
            </div>

            {/* Bottom benefits */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-[#dce7f7] bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#d8e6fb] bg-[#f1f6ff] text-[#4285ed]">
                      <Icon size={17} />
                    </div>

                    <h3 className="mt-2.5 text-xs font-bold text-[#29405f] sm:text-sm">
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-4 text-[#94a3b8] sm:text-xs">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolmiumSection;
