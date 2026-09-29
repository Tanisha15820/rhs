import React from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  Feather,
  TrendingUp,
  Clock,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Shield,
  Zap,
} from "lucide-react";

const CystoscopeKeyBenefits = () => {
  const benefits = [
    {
      number: "01",
      title: "Streamlined Bullet-shaped Tip",
      subtitle: "Low-Resistance Urethral Entry",
      description:
        "The bullet-shaped low-resistance design for tip allows the insertion tube to enter the urethra more easily, drastically minimizing patient pain and mucosal trauma.",
      icon: <Crosshair className="h-6 w-6 text-primary" />,
      color: "from-blue-500/10 to-primary/5",
      badge: "Low Resistance",
      highlight: "Atraumatic Entry",
    },
    {
      number: "02",
      title: "Lightweight & Easily Maneuverable",
      subtitle: "Compact < 300g Ergonomics",
      description:
        "Compact and lightweight design, ensuring ease of handling and portability. The ergonomic handle relieves clinician wrist strain during high-volume outpatient sessions.",
      icon: <Feather className="h-6 w-6 text-primary" />,
      color: "from-cyan-500/10 to-blue-500/5",
      badge: "< 300g Weight",
      highlight: "Featherweight Balance",
    },
    {
      number: "03",
      title: "Cost-Effective Operation",
      subtitle: "Zero Maintenance & Sterilization",
      description:
        "Raise cash flow ratio; No maintenance & disinfection cost. Eliminates expensive per-procedure reprocessing, sterilization downtime, and optical degradation repairs.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      color: "from-emerald-500/10 to-teal-500/5",
      badge: "Max ROI",
      highlight: "100% Reprocessing Free",
    },
    {
      number: "04",
      title: "Improved Efficiency",
      subtitle: "Instant 'Always Ready-to-Use'",
      description:
        "“Always Ready-to-use” with no waiting time, accelerating hospital turnover rate. Enables smooth outpatient cystoscopy without delays from CSSD reprocessing queues.",
      icon: <Clock className="h-6 w-6 text-primary" />,
      color: "from-amber-500/10 to-orange-500/5",
      badge: "Zero Latency",
      highlight: "High Clinic Turnover",
    },
    {
      number: "05",
      title: "Stable Quality",
      subtitle: "Optimal Optics & Bending Angle",
      description:
        "Single-use design ensures that imaging and bending angles always remain in optimal condition. Every procedure benefits from pristine optics and consistent 210° deflection.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      color: "from-indigo-500/10 to-blue-500/5",
      badge: "Factory Calibrated",
      highlight: "100% Deflection Integrity",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-100">
      {/* Decorative blurred backgrounds */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>DISPOSABLE CYSTOSCOPE ADVANTAGES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            KEY{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              BENEFITS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Engineered to overcome the clinical bottlenecks and economic costs of traditional reusable flexible cystoscopes while enhancing patient comfort.
          </motion.p>
        </div>

        {/* 5 Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_30px_rgba(25,168,232,0.12)] ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Subtle top gradient bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Top Row: Number, Icon, Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors">
                      {item.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                      {React.cloneElement(item.icon, {
                        className:
                          "h-6 w-6 text-primary group-hover:text-white transition-colors",
                      })}
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {item.subtitle}
                </div>

                {/* Title */}
                <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CystoscopeKeyBenefits;
