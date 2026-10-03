import React from "react";
import { motion } from "framer-motion";
import { Activity, Scissors, Droplets } from "lucide-react";
import magnetoAllInOneImg from "../../assets/images/magneto_all_in_one.jpg";

const MagnetoAllInOne = () => {
  const features = [
    {
      title: "LITHOTRIPSY",
      desc: "Thanks to the Quanta Magneto Technology stones treatments have never been so complete. Choose between dusting and fragmentation with the maximum efficiency from both the techniques.",
      icon: Activity,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "BPH MANAGEMENT",
      desc: "Efficient treatment with precise tissue removal and minimal bleeding, improving patient recovery and outcomes.",
      icon: Scissors,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
    },
    {
      title: "OTHER SOFT TISSUES",
      desc: "Holmium technology allows precise and smooth ablation, resection and incision in Soft Tissues.",
      icon: Droplets,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Pinnacle Laser System
              </p>
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6">
              All-in-one <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Device</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-10">
              <p>
                The Cyber Ho with <strong>Quanta Magneto Technology</strong> represents a pinnacle in laser system world, combining the hallmark features of Holmium lasers with the revolutionary Magneto Technology. This all-in-one device is tailored to meet the diverse needs of modern urology.
              </p>
              <p>
                It combines the <strong>well-known power of Holmium</strong> laser for the best fragmentation capabilities, together with the <strong>finest dusting</strong> previously achievable only with TFL lasers. Its full featured system ensures that surgeons can perform a wide array of endourological procedures without needing multiple systems or technologies.
              </p>
              <p>
                Surgeons can optimize parameters based on the specific requirements of each procedure, thereby enhancing surgical precision and patient outcomes. This adaptability not only streamlines operational efficiency but also underscores Quanta’s commitment to <strong>innovation-driven solutions in the field of medical technology.</strong>
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-50/50 rounded-3xl blur-3xl transform rotate-3"></div>

            {/* Visual Image */}
            <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={magnetoAllInOneImg}
                alt="All in one device"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Comprehensive Treatments</h3>
              </div>
            </div>

            <div className="grid gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${feature.bg} ${feature.color}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MagnetoAllInOne;
