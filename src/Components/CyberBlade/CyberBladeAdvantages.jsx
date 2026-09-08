import React from "react";
import {
  DollarSign,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Truck,
  Wrench,
  Flame,
  Zap,
} from "lucide-react";

const CyberBladeAdvantages = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Limited Capital Investment",
      desc: "No need to purchase expensive standalone generator/vacuum consoles, preserving hospital capital.",
    },
    {
      icon: CheckCircle,
      title: "Fixed Cost Per Treatment",
      desc: "Transparent procedural cost per case makes hospital budget planning predictable and reliable.",
    },
    {
      icon: Clock,
      title: "No Costly Reprocessing",
      desc: "Eliminates technician labor, sterilization room turnover delays, and chemical cleaning cycles.",
    },
    {
      icon: Wrench,
      title: "No Maintenance & No Service",
      desc: "Zero downtime for routine preventive maintenance or costly third-party service contracts.",
    },
    {
      icon: Clock,
      title: "Instant Case-Ready Availability",
      desc: "No waiting for sterile reprocessing between back-to-back operating room procedures.",
    },
    {
      icon: Truck,
      title: "Easy Storage & Transport",
      desc: "Compact pre-packaged sterile box fits standard surgical shelves and moves easily between rooms.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Cross-Contamination",
      desc: "Single-use sterile fluid path completely eliminates infection risk between patients.",
    },
    {
      icon: Flame,
      title: "Always Factory-Sharp Blade",
      desc: "Never suffer dull cutting performance or tissue stalling from worn out reusable blades.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Clinical & Economic Superiority
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Advantages Over Traditional{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Prostate Morcellators
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Why leading urologists and hospital administrators choose the single-use
            cordless paradigm over heavy, high-maintenance legacy consoles.
          </p>
        </div>

        {/* 8 Advantages Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E3EDF7] bg-white p-6 shadow-[0_6px_25px_rgba(36,76,130,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all shadow-sm mb-4">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-sm font-extrabold text-[#102A43]">
                    {adv.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#20B7AE]">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Verified Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberBladeAdvantages;
