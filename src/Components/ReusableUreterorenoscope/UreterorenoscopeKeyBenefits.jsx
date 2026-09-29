import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Layers,
  Camera,
  Hand,
  RotateCw,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const UreterorenoscopeKeyBenefits = () => {
  const benefits = [
    {
      title: "Streamlined Bullet-shaped Tip",
      description:
        "The bullet-shaped low-resistance design for tip allows the insertion tube to enter the urethra more easily, significantly reducing mucosal friction and tissue resistance.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12h16M14 6l6 6-6 6" />
          <path d="M4 8c4 0 7-4 12-4M4 16c4 0 7 4 12 4" />
        </svg>
      ),
      badge: "Low Resistance",
    },
    {
      title: "Medical-grade Material",
      description:
        "The insertion tube is wrapped in medical-grade composite material Pebax, providing a balanced experience of rigidity and flexibility for smooth advancement.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      badge: "Pebax Composite",
    },
    {
      title: "Optimized Imaging",
      description:
        "160K CMOS sensor chip on tip design; Optimized algorithm improves image quality, delivering high-contrast visualization directly from the distal tip.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      badge: "160K CMOS Sensor",
    },
    {
      title: "User-friendly",
      description:
        "Simple and intuitive ergonomic handle, giving more comfort and preciseness on the examination while reducing physical strain for the operator.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
      badge: "< 500g Ergonomics",
    },
    {
      title: "285° Bending Angle",
      description:
        "Bending section made by medical grade stainless steel, Up to 285° up and down bending angle for full access to the lower renal pole and calyces.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5V11a1 1 0 0 0-2 0v5.5a2.5 2.5 0 0 0 5 0V7" />
        </svg>
      ),
      badge: "Bidirectional Deflection",
    },
    {
      title: "1:1 Torque Ratio",
      description:
        "The 1:1 torque ratio maximizes the replication of the medical staff's precise movements, ensuring smooth surgical procedures with zero rotational play.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
      badge: "1:1 Real-time Torque",
    },
  ];

  return (
    <section className="bg-slate-50/70 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (matching Screenshot 1: KEY BENEFITS) */}
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
            Core Clinical & Engineering{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Advantages
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            Optimized for maximum procedural control, patient safety, and consistent endoscopic visualization.
          </motion.p>
        </div>

        {/* 6 Key Benefits Cards (Screenshot 1 Layout) */}
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
                {/* Circular Icon (Matching Blue Circular Badge from Screenshot 1) */}
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    {b.icon}
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {b.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {b.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {b.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Clinical Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UreterorenoscopeKeyBenefits;
