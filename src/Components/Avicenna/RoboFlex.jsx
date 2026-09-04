import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Network,
  Armchair,
  ArrowUpRight,
} from "lucide-react";
import roboFlexMachine from "../../assets/images/avicenna.png";

const features = [
  {
    icon: Armchair,
    title: "Ergonomic Surgeon Position",
    description:
      "Comfortable seated operation designed to reduce fatigue and support longer procedures.",
  },
  {
    icon: Target,
    title: "Precise Robotic Control",
    description:
      "Accurate forward, backward, rotation and deflection control for confident maneuverability.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Radiation Exposure",
    description:
      "Robotic assistance improves safety by minimizing fluoroscopy time during complex procedures.",
  },
  {
    icon: Network,
    title: "Integrated Workflow",
    description:
      "Irrigation, imaging and fibre control managed seamlessly from the surgeon console.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const RoboFlex = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F8FF] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-[#19A8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#2525B8]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* ================= TOP HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-12"
        >
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[1px] w-10 bg-[#3292F5]" />
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
              Robotic Ureterorenoscopy System
            </p>
            <span className="h-[1px] w-10 bg-[#3292F5]" />
          </div>

          <h1 className="text-center text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            RoboFlex{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Avicenna
            </span>
          </h1>

          <p className="text-center mt-3 text-base text-[#7181A3] md:text-lg">
            Robotic Flexible Ureterorenoscopy
          </p>
        </motion.div>

        {/* MAIN CONTENT*/}
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Content Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_40px_rgba(30,58,138,0.08)] sm:p-9"
          >
            {/* Top accent bar */}
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#19A8E8] via-[#20B7AE] to-[#2525B8]" />

            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#19A8E8] to-[#2525B8] shadow-md shadow-blue-500/20">
                <Target className="h-5 w-5 text-white" />
              </span>

              <h2 className="text-2xl font-bold text-[#102A43] sm:text-3xl">
                Why RoboFlex?
              </h2>
            </div>

            <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#19A8E8] to-[#20B7AE]" />

            <p className="text-sm leading-6 text-[#4D5E7B] sm:text-base">
              fURS or RIRS is rapidly evolving in the last decade. RoboFlex
              Avicenna offers a viable robotic alternative that enhances
              precision and procedural efficiency.
            </p>

            <p className="mt-5 text-sm leading-6 text-[#4D5E7B] sm:text-base">
              Engineered for comfort and control, the system allows surgeons to
              operate in an ergonomic seated position while advanced robotics
              deliver precise instrument maneuverability—even for complex cases.
            </p>

            {/* Bottom Question Box */}
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Armchair className="h-8 w-8 text-primary" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-base font-bold text-[#102A43]">
                  Why do it manually
                </p>

                <p className="text-sm text-[#263B68]">
                  when you can operate with{" "}
                  <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text font-bold text-transparent">
                    precision?
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Machine Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex min-h-[360px] items-center justify-center lg:min-h-[520px]"
          >
            {/* Soft Background Glow */}
            <div className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-tr from-[#19A8E8]/25 to-[#2525B8]/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

            {/* Circular rings */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-white/70 sm:h-[440px] sm:w-[440px]" />

            <div className="absolute h-[240px] w-[240px] rounded-full border border-white/70 sm:h-[360px] sm:w-[360px]" />

            {/* Rotating dashed ring */}
            <div className="pointer-events-none absolute h-[280px] w-[280px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-[#19A8E8]/40 sm:h-[400px] sm:w-[400px]" />

            {/* Machine */}
            <img
              src={roboFlexMachine}
              alt="RoboFlex Avicenna Robotic System"
              className="relative z-10 w-full max-w-[720px] object-contain drop-shadow-[0_25px_35px_rgba(37,37,184,0.18)]"
            />
          </motion.div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_25px_rgba(30,58,138,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(25,168,232,0.15)]"
              >
                {/* Top gradient accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#19A8E8] to-[#2525B8] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19A8E8]/10 to-[#2525B8]/10 text-primary transition-all duration-300 group-hover:from-[#19A8E8] group-hover:to-[#2525B8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold leading-6 text-[#102A43]">
                    {feature.title}
                  </h3>

                  <div className="my-4 h-[2px] w-10 rounded-full bg-[#20B7AE]" />

                  <p className="text-sm leading-5 text-[#64738D]">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom arrow on hover */}
                <div className="pointer-events-none mt-5 flex items-center gap-1 text-[#102A43]/0 transition-all duration-300 group-hover:text-primary">
                  <span className="text-xs font-semibold">Learn more</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoboFlex;
