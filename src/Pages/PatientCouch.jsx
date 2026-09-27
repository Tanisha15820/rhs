import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Activity,
  Layers,
  Sparkles,
  MoveVertical,
  Shield,
} from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import couchImage from "../assets/images/trytable_patient_coach.jpg";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";

const FeatureCard = ({ number, title, description, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[300px] h-[108px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>
      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="min-w-0 flex-1 pl-16 pr-2">
          <h4 className="text-[13px] font-bold text-slate-800 leading-tight">
            {title}
          </h4>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileFeatureCard = ({ number, title, description }) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        <div className="min-w-0 flex-1 pl-6">
          <h4 className="text-xs font-bold text-slate-800">{title}</h4>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const PatientCouch = () => {
  const clinicalPractiseHighlights = [
    {
      title: "Easy back / seat setup",
      desc: "Intuitive motorized positioning providing effortless adjustments for doctors and maximum comfort for patients.",
    },
    {
      title: "automatic Trendelenburg position",
      desc: "One-touch motorized Trendelenburg tilt to immediately optimize pelvic and abdominal cavity visualization.",
    },
    {
      title: "emergency resuscitation position",
      desc: "Instant safety leveling function to ensure immediate patient support during clinical emergencies.",
    },
  ];

  const uroflowmetryHighlights = [
    {
      title: "Smart integration of DANFLOW flow meter",
      desc: "Direct mounting and positioning of DANFLOW uroflowmeters beneath the seat for seamless, private diagnostic flow studies.",
    },
    {
      title: "Easy setup for uroflowmetry",
      desc: "Ready-to-use funnel receptacle and bracket ergonomics ensure speedy preparation without extra technician overhead.",
    },
    {
      title: "No delays in work flow",
      desc: "Eliminates patient transfers between exam tables and flow chairs, dramatically shortening total exam duration.",
    },
  ];

  const chairCapabilities = [
    {
      icon: <MoveVertical className="h-6 w-6 text-primary" />,
      title: "Multi-Axis Motorized Positioning",
      desc: "Synchronized height, backrest, and pelvic tilt adjustments adapt easily to routine exams and specialized procedures.",
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: "Urology & Gynecology",
      desc: "Engineered specifically for lithotomy positions, cystoscopy, pelvic exams, and urodynamic evaluations.",
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "USG & X-Ray Radiopaque Access",
      desc: "Unobstructed access for ultrasound probes, C-arm imaging, and pelvic scanning without transferring the patient.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Hygienic Medical Upholstery",
      desc: "Seamless, antibacterial, and disinfectant-resistant premium medical grade upholstery in signature clinical teal.",
    },
  ];

  const accessoriesList = [
    "Integrated DANFLOW Uroflowmetry funnel and container holder",
    "Ergonomic adjustable leg stirrups and knee crutches with secure clamps",
    "Retractable stainless steel rinse bowl / fluid collection basin",
    "Multi-position patient hand grips and side armrests",
    "Paper roll holder attached directly behind the backrest",
    "Smooth castor wheels with independent central locking mechanism",
    "Ergonomic medical foot control and hand pendant switches",
    "Removable head pillow and adjustable pelvic extensions",
  ];

  return (
    <div className="bg-white">
      <SEO
        title="TRYTABLE Patient Coach - Urology & Gynecology Examination Chair | Reinforce Healthcare Services"
        description="TRYTABLE Patient Coach examination chair offers optimal setup for Urology, Gynecology, USG Scanning, X-Ray images, and seamless DANFLOW uroflowmetry integration."
        keywords="Patient Coach, Patient Couch, TRYTABLE examination chair, Urology chair, Gynecology couch, Uroflowmetry chair, DANFLOW flow meter, Reinforce Healthcare"
      />

      {/* Product Banner */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="TRYTABLE Patient Coach Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        {/* Main Banner Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                ADVANCED EXAMINATION & URODYNAMIC CHAIR
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              TRYTABLE{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Patient Coach
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              The premier all-in-one examination and urodynamics chair for Urology, Gynecology, USG Scanning, and X-Ray imaging.
            </p>
          </div>

          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            {/* Desktop Feature Cards */}
            <FeatureCard
              number="01"
              title="Easy Back / Seat Setup"
              description="Flexible electric adjustments designed to meet the needs of clinical daily practice."
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Trendelenburg Position"
              description="Automated Trendelenburg and rapid emergency resuscitation leveling."
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="Smart DANFLOW Integration"
              description="Seamless combination with DANFLOW uroflowmetry for simultaneous flow tests."
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="No Delays in Work Flow"
              description="Optimized design eliminates unnecessary patient transfers during examinations."
              position="bottom-14 right-6"
            />

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[400px] w-full max-w-[540px] items-end justify-center sm:h-[440px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={couchImage}
                alt="TRYTABLE Patient Coach Examination Chair"
                className="relative z-10 max-h-[460px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[300px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={couchImage}
                alt="TRYTABLE Patient Coach Examination Chair"
                className="relative z-10 max-h-[280px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)] rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title="Easy Back / Seat Setup"
                description="Flexible electric adjustments designed to meet the needs of clinical daily practice."
              />
              <MobileFeatureCard
                number="02"
                title="Trendelenburg Position"
                description="Automated Trendelenburg and rapid emergency resuscitation leveling."
              />
              <MobileFeatureCard
                number="03"
                title="Smart DANFLOW Integration"
                description="Seamless combination with DANFLOW uroflowmetry for simultaneous flow tests."
              />
              <MobileFeatureCard
                number="04"
                title="No Delays in Work Flow"
                description="Optimized design eliminates unnecessary patient transfers during examinations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Solution Showcase Section (Matches Screenshot Content & Layout) */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Image Column matching the screenshot frame */}
            <motion.div
              className="relative lg:col-span-6 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full max-w-[520px] rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-[#F8FCFF] p-6 sm:p-8 shadow-[0_20px_50px_rgba(25,168,232,0.12)]">
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-blue-50/80 px-3 py-1 border border-blue-100">
                  <span className="h-2 w-2 rounded-full bg-[#19A8E8] animate-pulse"></span>
                  <span className="text-[11px] font-semibold text-[#102A43]">TRYTABLE System</span>
                </div>
                <img
                  src={couchImage}
                  alt="TRYTABLE Solution for Urology and Gynecology"
                  className="mx-auto h-[320px] sm:h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-105 pt-4"
                />
              </div>
            </motion.div>

            {/* Right Content Column directly from the Screenshot */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#19A8E8]" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                  Clinical Examination & Diagnostics
                </p>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#102A43] sm:text-3xl md:text-4xl leading-tight">
                Solution for Urology and Gynecology, USG Scanning, X-Ray Images
              </h2>

              {/* Subsection 1 */}
              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-bold text-[#19A8E8]">
                  TRYTABLE offers optimal setup to meet the needs of clinical daily practise.
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {clinicalPractiseHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-800 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-slate-700 capitalize">{item.title}.</span>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subsection 2 */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="text-base sm:text-lg font-bold text-[#19A8E8]">
                  TRYTABLE examination chair offers unique solution in combination with uroflowmetry study.
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {uroflowmetryHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-800 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-slate-700">{item.title}.</span>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50/80 to-cyan-50/50 p-4 border border-blue-100/80">
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  <span className="text-[#102A43] font-bold">TRYTABLE</span> comes with wide range of accessories, such as supports for urology & gynecology examinations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Grid */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Engineered for Modern Clinics
              </p>
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Why Doctors Choose TRYTABLE
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              A versatile platform created to bridge high patient comfort with unrestricted procedural access for doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chairCapabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">{cap.title}</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Range of Accessories */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Comprehensive Accessories & Configurations
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-primary"></div>
            </div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Customize TRYTABLE to fulfill the exact clinical requirements of your urology or gynecology practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {accessoriesList.map((accessory, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#F8FCFF] p-4 rounded-xl shadow-xs border border-blue-100/70"
              >
                <CheckCircle className="text-[#19A8E8] h-5 w-5 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{accessory}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry and Rental CTA */}
      <ProductInquireCTA
        productName="TRYTABLE Patient Coach"
        productImage={couchImage}
        subtitle="Available for clinical purchase and flexible healthcare rental with certified technical support and seamless Danflow flowmeter pairing."
      />
    </div>
  );
};

export default PatientCouch;