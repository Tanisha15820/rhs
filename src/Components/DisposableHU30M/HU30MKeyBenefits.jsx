import React from "react";
import { motion } from "framer-motion";
import {
  Minimize2,
  RotateCw,
  Hand,
  Compass,
  Repeat,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const HU30MKeyBenefits = () => {
  const benefits = [
    {
      title: "6.3Fr O.D.",
      subtitle: "No-Touch Technique",
      description:
        "Clinical studies have proven its ability to facilitate the 'no-touch' technique, navigating challenging anatomies while maintaining optimal flow rates for clear visualization.",
      icon: <Minimize2 className="h-6 w-6 text-white" />,
      badge: "World's First 6.3Fr",
    },
    {
      title: "Adjustable Angle Knob",
      subtitle: "120° Axial Rotation",
      description:
        "120° left and right insertion tube rotation enables easy orientation adjustment and single-handed aiming without straining the surgeon's wrist.",
      icon: <RotateCw className="h-6 w-6 text-white" />,
      badge: "120° Rotation Knob",
    },
    {
      title: "User-friendly",
      subtitle: "Ergonomic Handling",
      description:
        "Simple and intuitive ergonomic handle, giving more comfort and preciseness on the examination while reducing physical fatigue in prolonged cases.",
      icon: <Hand className="h-6 w-6 text-white" />,
      badge: "< 300g Ergonomics",
    },
    {
      title: "285° Bending Angle",
      subtitle: "Full Caliceal Reach",
      description:
        "Bending section made by medical grade stainless steel, Up to 285° up and down bending angle for unrestricted access into the lower renal pole.",
      icon: <Compass className="h-6 w-6 text-white" />,
      badge: "285° Up & Down",
    },
    {
      title: "1:1 Torque Ratio",
      subtitle: "Direct Tactile Feedback",
      description:
        "The 1:1 torque ratio maximizes the replication of the medical staff's precise movements, ensuring smooth and predictable surgical procedures.",
      icon: <Repeat className="h-6 w-6 text-white" />,
      badge: "1:1 Real-Time Torque",
    },
    {
      title: "Stable Quality",
      subtitle: "Always Optimal Condition",
      description:
        "Single-use design ensures that imaging and bending angles always remain in optimal condition with zero degradation from prior cases or chemical cleaning.",
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      badge: "100% Single-Use Sterile",
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>KEY BENEFITS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Clinical Advantages of the{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              HU30M 6.3Fr
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            Clinically proven and trusted by global experts, the HU30M enhances safety, efficiency, and patient outcomes—making it the smart choice for modern urology.
          </motion.p>
        </div>

        {/* 6 Key Benefits Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    {b.icon}
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {b.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-primary/80">
                  {b.subtitle}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {b.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Clinically Proven
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HU30MKeyBenefits;
