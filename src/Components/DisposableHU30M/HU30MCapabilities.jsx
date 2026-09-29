import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, Minimize2, Sparkles, UserCheck } from "lucide-react";
import fullScopeImg from "../../assets/images/hu30m_full_scope.jpg";
import surgeonHandImg from "../../assets/images/hu30m_surgeon_hand.jpg";
import tipImg from "../../assets/images/ureterorenoscope_tip.jpg";

const HU30MCapabilities = () => {
  const deepDives = [
    {
      title: "Challenging the Limits of URS",
      question: "How can a smaller diameter benefit ureteral surgery?",
      category: "INNOVATIVE PROFILE",
      description:
        "The 6.3Fr insertion tube diameter of the HU30M challenges the conventional limits of ureterorenoscope (URS) design. This innovation provides a surgical solution for congenital or pathological ureteral strictures previously deemed inoperable, expanding treatment options for complex cases. Clinical studies have proven its ability to facilitate the 'no-touch' technique, navigating challenging anatomies while maintaining optimal flow rates for clear visualization.",
      image: fullScopeImg,
      highlights: [
        "First 6.3Fr single-use ureterorenoscope approved for surgery",
        "Facilitates the 'no-touch' technique in narrow ureters",
        "Provides access to tight strictures previously considered inoperable",
        "Preserves high irrigation flow rates for clear operative visualization",
      ],
      tag: "6.3Fr Ultra-Thin",
      reverse: false,
    },
    {
      title: "Enhanced Patient Comfort and Safety",
      question: "Stentless & Atraumatic Endourology",
      category: "PATIENT OUTCOMES",
      description:
        "The ultra-thin insertion tube makes it possible to perform procedures without pre-placed double-J stents, sheaths, or guidewires, significantly enhancing patient comfort before and after surgery and accelerating postoperative recovery. Additionally, it provides greater infusion space, helping reduce temperature rise caused by laser lithotripsy, relieving renal pressure, improving the stone-clearance rate in soft-scope RIRS surgeries, and reducing the likelihood of 'stone street' formation postoperatively.",
      image: tipImg,
      highlights: [
        "Stentless & sheathless procedures without pre-placed double-J stents",
        "Significantly minimizes postoperative ureteral pain and spasms",
        "Expands infusion space to reduce laser-induced thermal elevation",
        "Relieves pelvic renal pressure and prevents 'stone street' obstruction",
      ],
      tag: "Stentless & Safe",
      reverse: true,
    },
    {
      title: "Optimized Usability and Surgical Efficiency",
      question: "Engineered for Prolonged Procedures",
      category: "OPERATOR EXPERIENCE",
      description:
        "Weighing less than 300g, the HU30M effectively alleviates surgeon fatigue during long procedures. Its standard features, including an adjustable angle knob, 285° bending range, 1080P optimization algorithm, and passive bending function, support doctors in easily tackling even the most challenging surgeries.",
      image: surgeonHandImg,
      highlights: [
        "Ultralight chassis weighing less than 300 grams",
        "120° Left & Right adjustable angle knob for wrist strain relief",
        "285° active articulation plus secondary passive bending",
        "High-definition 1080P algorithmic optimization on external monitors",
      ],
      tag: "< 300g & 120° Knob",
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
            DEEP CLINICAL VALUE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Redefining Modern Ureteroscopy with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Ultra-Slim Engineering
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            The world's first 6.3Fr single-use ureterorenoscope approved for surgery—combining atraumatic access with surgical precision.
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

                <p className="mt-2 text-xs font-semibold text-primary">
                  {d.question}
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
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

export default HU30MCapabilities;
