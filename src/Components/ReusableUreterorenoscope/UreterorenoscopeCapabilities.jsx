import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Compass, Layers, ShieldCheck, Zap } from "lucide-react";
import tipImg from "../../assets/images/ureterorenoscope_tip.jpg";
import handleImg from "../../assets/images/ureterorenoscope_handle.jpg";
import fullScopeImg from "../../assets/images/reusable_ureterorenoscope.jpg";

const UreterorenoscopeCapabilities = () => {
  const deepDives = [
    {
      title: "Streamlined Bullet-Shaped Tip for Low Resistance and Comfort",
      category: "ATRAUMATIC ACCESS",
      description:
        "The bullet-shaped tip features a low-resistance design, allowing smoother insertion into the urethra. Combined with a soft Pebax-wrapped insertion tube, it minimizes urethral trauma, ensuring a safer and more comfortable experience for patients.",
      image: tipImg,
      highlights: [
        "Low-resistance bullet-shaped distal geometry",
        "Soft Pebax outer sheath prevents mucosal abrasion",
        "Integrated 160K CMOS chip-on-tip with dual LED illumination",
        "Gentle, atraumatic passage even through narrow or tortuous anatomy",
      ],
      tag: "Bullet-Shaped Tip",
      reverse: false,
    },
    {
      title: "285° Bending Angle for Better Access & Precision",
      category: "ANATOMICAL REACH",
      description:
        "With a bidirectional bending angle of up to 285° and double bending capability, the reusable ureterorenoscope reaches complex renal anatomy, eliminating blind spots for more accurate diagnosis and treatment.",
      image: fullScopeImg,
      highlights: [
        "Active bidirectional 285° up & down articulation",
        "Access to challenging acute-angle lower pole renal calyces",
        "Deflection maintained even with inserted laser fibers and baskets",
        "Eliminates diagnostic blind spots in upper urinary tract procedures",
      ],
      tag: "285° Bidirectional Deflection",
      reverse: true,
    },
    {
      title: "Superior Durability, Lower Maintenance Costs",
      category: "SURGICAL LONGEVITY",
      description:
        "316L stainless steel bending section enhanced with laser engraving and multi-point micro-welding for exceptional stability and longevity. And the integrated CMOS camera tip is more impact-resistant than fiber-optic endoscopes, significantly reducing repair costs.",
      image: handleImg,
      highlights: [
        "Medical-grade 316L stainless steel articulation framework",
        "Laser-engraved multi-point micro-welded bending segments",
        "Impact-resistant electronic CMOS sensor vs. fragile optical quartz fibers",
        "Full immersion disinfection compatibility lowers per-procedure costs",
      ],
      tag: "316L Stainless Steel",
      reverse: false,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            ENGINEERING EXCELLENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Built for Extreme Maneuverability &{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Enduring Reliability
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            The Reusable Ureterorenoscope can be reused after immersion disinfection, offering a cost-effective alternative to single-use devices while maintaining supreme optical and mechanical fidelity.
          </motion.p>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {deepDives.map((d) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                d.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-3 shadow-lg shadow-blue-900/5 sm:p-4">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute left-6 top-6 rounded-full bg-slate-900/80 px-3.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                    {d.tag}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                  {d.category}
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
                  {d.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6">
                  {d.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {d.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UreterorenoscopeCapabilities;
