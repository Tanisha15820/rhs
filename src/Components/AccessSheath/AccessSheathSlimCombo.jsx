import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingDown,
  Maximize2,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";
import sizesImg from "../../assets/images/access_sheath_sizes.png";

const AccessSheathSlimCombo = () => {
  const combos = [
    {
      title: "World's First Slim Combo",
      subtitle: "Ultra-Slim URS + Ultra-Slim Suction UAS",
      description:
        "The combination of HugeMed's 6.3Fr URS (HU30M) and the 8.5/10.5Fr Single-use Ureteral Access Sheath achieves an exceptional RESD of 0.741, allowing safe entry into narrow, tortuous ureters without dilation.",
      badge: "RESD = 0.741",
      resdValue: "0.741",
      resdLimit: "≤ 0.85 with Suction",
      status: "Safest Clearance Ratio",
    },
    {
      title: "Suction Safety Ceiling: RESD ≤ 0.85",
      subtitle: "Rewriting Endourology Rules",
      description:
        "For traditional non-suction UAS, the recommended clinical safety threshold is RESD ≤ 0.75. Active continuous suction drastically improves outflow and lowers intrarenal pressure, expanding the safe clinical envelope up to RESD ≤ 0.85.",
      badge: "RESD ≤ 0.85",
      resdValue: "0.850",
      resdLimit: "vs 0.75 (Non-Suction)",
      status: "+13.3% Safety Headroom",
    },
    {
      title: "20 Flexible Clinical Combinations",
      subtitle: "Universal Anatomical Customization",
      description:
        "Available in 4 working lengths (40, 45, 50, 55 cm) across 5 diameter sizes (8.5/10.5, 9/11, 10/12, 11/13, 12/14 Fr) to match pediatric, adult female, and tall male renal anatomies.",
      badge: "20 Combinations",
      resdValue: "20 Options",
      resdLimit: "4 Lengths × 5 Diameters",
      status: "Universal Coverage",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>RESD SCIENCE & SLIM COMBINATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Slimmer for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Smoother Access & Lower Pressure
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Specifications: the Single-use Ureteral Access Sheath is available in working lengths of 40/45/50/55 cm and diameters of 8.5/10.5, 9/11, 10/12, 11/13, and 12/14 Fr, yielding 20 flexible combinations that cover needs from ultra-slim access to general negative-pressure aspiration.
          </motion.p>
        </div>

        {/* Feature Grid with Visual Graphic */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: 3 Detailed Science Cards */}
          <div className="space-y-5 lg:col-span-8">
            {combos.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-slate-200/90 bg-gradient-to-r from-white via-slate-50/50 to-blue-50/20 p-5 sm:p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex self-start sm:self-center rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary border border-primary/20">
                    {item.badge}
                  </span>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-3 border-t border-slate-100/80">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{item.status}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="text-slate-500">
                    Parameter: <span className="font-bold text-slate-800">{item.resdLimit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Sizes Visual Graphic from Screenshot */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 p-6 shadow-xl shadow-blue-900/5 text-center"
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary mb-3">
                <Layers className="h-3.5 w-3.5" />
                <span>SHEATH CROSS-SECTIONS</span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900">
                Available in Multiple Sizes
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                From ultra-slim 8.5/10.5Fr up to 12/14Fr
              </p>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-inner">
                <img
                  src={sizesImg}
                  alt="Ureteral Access Sheath Sizes 9/11F, 10/12F, 11/13F, 12/14F"
                  className="w-full h-auto object-contain select-none"
                />
              </div>

              <div className="mt-4 rounded-xl bg-slate-900/90 p-3 text-xs text-white">
                <div className="font-bold text-primary-light">The Slim Combo</div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  6.3Fr URS + 8.5/10.5Fr UAS = Reaches narrowest lower calyces
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSheathSlimCombo;
