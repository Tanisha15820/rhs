import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  RotateCw,
  Sparkles,
  Minimize2,
  Feather,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Hand,
} from "lucide-react";
import surgeonHandImg from "../../assets/images/hu30m_surgeon_hand.jpg";

const HU30MFeatures = () => {
  const [activeCallout, setActiveCallout] = useState(null);

  const callouts = [
    {
      id: "slender",
      title: "6.3Fr Ultra-Slim O.D.",
      subtitle: "World's First 6.3Fr Single-Use",
      description:
        "The ultra-thin 6.3Fr insertion tube challenges conventional URS limits, facilitating the 'no-touch' technique without pre-stenting.",
      icon: <Minimize2 className="h-4 w-4 text-primary" />,
      badge: "6.3Fr (2.1mm) O.D.",
    },
    {
      id: "knob",
      title: "Adjustable Angle Knob",
      subtitle: "120° Left & Right Rotation",
      description:
        "Ergonomic fluted blue collar provides 120° bidirectional axial rotation of the insertion tube without rotating the surgeon's wrist.",
      icon: <RotateCw className="h-4 w-4 text-primary" />,
      badge: "120° Axial Rotation",
    },
    {
      id: "deflection",
      title: "285° Bending Angle",
      subtitle: "Stainless Steel Articulation",
      description:
        "Medical-grade 316L stainless steel articulation section provides active 285° up/down deflection plus passive secondary bending.",
      icon: <Compass className="h-4 w-4 text-primary" />,
      badge: "285° Deflection",
    },
    {
      id: "weight",
      title: "Ultra-Lightweight < 300g",
      subtitle: "Surgeon Fatigue Relief",
      description:
        "Weighing less than 300g, the intuitive ergonomic handle drastically reduces muscle fatigue during prolonged complex procedures.",
      icon: <Feather className="h-4 w-4 text-primary" />,
      badge: "< 300g Featherweight",
    },
    {
      id: "imaging",
      title: "1080P Optimized Algorithm",
      subtitle: "Chip-on-Tip Sensor",
      description:
        "Advanced digital signal processing algorithm optimizes 1080P high-definition video feed on external surgical displays with zero haze.",
      icon: <Sliders className="h-4 w-4 text-primary" />,
      badge: "1080P Optimization",
    },
    {
      id: "singleuse",
      title: "100% Sterile & Single-Use",
      subtitle: "Always Optimal Condition",
      description:
        "Eliminates cross-contamination risks, disinfection delays, and mechanical degradation. Every case begins with a pristine scope.",
      icon: <ShieldCheck className="h-4 w-4 text-primary" />,
      badge: "Zero Cross-Infection",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-24 border-t border-slate-100">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>CLINICAL ERGONOMICS & ANATOMY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Engineered for Single-Handed{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Surgical Mastery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            The HU30M combines an ultra-slim 6.3Fr insertion profile with single-handed 120° rotation and 285° deflection, providing unmatched control in narrow ureters.
          </motion.p>
        </div>

        {/* Central Showcase Grid */}
        <div className="relative mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(30,58,138,0.06)] backdrop-blur-xl sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Left Column: Handheld Image from Screenshot */}
              <div className="relative flex justify-center lg:col-span-5">
                <div className="relative aspect-9/16 w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 p-2 shadow-lg shadow-blue-900/5">
                  <img
                    src={surgeonHandImg}
                    alt="HugeMed HU30M 6.3Fr Held in Surgeon Hands"
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-102"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/80 p-2.5 text-center text-xs font-semibold text-white backdrop-blur-md">
                    Single-Handed 120° Angle Knob Control
                  </div>
                </div>
              </div>

              {/* Right Column: 6 Interactive Feature Cards */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7">
                {callouts.map((c, i) => {
                  const isActive = activeCallout === c.id;
                  return (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      onMouseEnter={() => setActiveCallout(c.id)}
                      onMouseLeave={() => setActiveCallout(null)}
                      className={`group relative rounded-2xl border p-4 transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-blue-50/70 shadow-md ring-2 ring-primary/20"
                          : "border-slate-200/80 bg-white/90 hover:border-primary/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {c.icon}
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                          {c.badge}
                        </span>
                      </div>

                      <h3 className="mt-2.5 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {c.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HU30MFeatures;
