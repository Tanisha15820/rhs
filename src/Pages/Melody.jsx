import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Radio, Activity, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImage from "../assets/images/melody.png";
import melody1 from "../assets/images/Melody1.png";
import melody2 from "../assets/images/Melody2.png";
import melody3 from "../assets/images/Melody3.png";
import melody4 from "../assets/images/Melody4.png";
import pullerImg from "../assets/images/mmt_profilometry_puller.jpg";
import pumpImg from "../assets/images/mmt_cystometry_pump.jpg";
import emgImg from "../assets/images/mmt_emg_sensor.jpg";
import uroflowImg from "../assets/images/danflow_wave_machine.jpg";
import scannerImg from "../assets/images/bladder_scanner.png";
import commodeImg from "../assets/images/danflow_stands_commode.jpg";
import ProductInquireCTA from "../Components/Common/ProductInquireCTA";
import MelodyMachine from "../Components/Melody/MelodyMachine";

const keypoints = [
  {
    number: "01",
    title: "Compact Housing",
    description: "Small, space-saving body designed for easy placement in urodynamic setups.",
    image: melody4,
    position: "left-6 top-16",
  },
  {
    number: "02",
    title: "Integrated Front Module",
    description: "Front-mounted module supports compact system functionality and streamlined operation.",
    image: melody3,
    position: "bottom-14 left-6",
  },
  {
    number: "03",
    title: "Color-Coded Measuring Ports",
    description: "Multiple channel ports enable connection of pressure, EMG and accessory inputs.",
    image: melody2,
    position: "right-6 top-16",
  },
  {
    number: "04",
    title: "Wireless & USB Connectivity",
    description: "Connect to a laptop or PC via 868/915 MHz wireless or USB.",
    image: melody1,
    position: "bottom-14 right-6",
  },
];

const FeatureImage = ({ image, title, mobile = false }) => (
  <div className={`shrink-0 overflow-hidden rounded-full border-2 border-sky-300 bg-gradient-to-br from-white via-sky-50 to-sky-100 shadow-sm ${mobile ? "h-[54px] w-[54px]" : "h-[66px] w-[66px]"}`}>
    <img src={image} alt={title} className="h-full w-full rounded-full object-cover" />
  </div>
);

const FeatureCard = ({ number, title, description, image, position }) => (
  <div className={`absolute hidden xl:block h-[118px] w-[320px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}>
    <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
      <span className="text-lg font-bold text-white">{number}</span>
    </div>
    <div className="absolute left-0 top-[42px] h-[52px] w-[1px] bg-primary" />
    <div className="flex h-full items-center gap-3 pl-10 pr-3">
      <FeatureImage image={image} title={title} />
      <div className="min-w-0 flex-1">
        <h4 className="text-[12px] font-bold leading-tight text-slate-800">{title}</h4>
        <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-3">{description}</p>
      </div>
    </div>
  </div>
);

const MobileFeatureCard = ({ number, title, description, image }) => (
  <div className="relative min-h-[105px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
    <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
      <span className="text-sm font-bold text-white">{number}</span>
    </div>
    <div className="flex items-center gap-3 pl-7 pt-2">
      <FeatureImage image={image} title={title} mobile />
      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-bold text-slate-800">{title}</h4>
        <p className="mt-1 text-[11px] leading-4 text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const generalOverview = [
  { title: "5 Precision Channels", desc: "Simultaneous recording of vesical, abdominal, detrusor, urethral pressure and EMG activity." },
  { title: "Integrated Peristaltic Pump", desc: "Inbuilt cystometric infusion pump with fine-calibrated flow rate regulation." },
  { title: "Profilometric Puller Output", desc: "Dedicated output socket for automated magnetic urethral pressure profile (UPP) pullers." },
  { title: "Dual RF & USB Interface", desc: "Effortless wireless connection at 868/915 MHz with no cable clutter, plus USB fallback." },
  { title: "Videourodynamics Ready", desc: "Synchronized radiographic or ultrasound video frame capture with digital urodynamic curves." },
  { title: "Hospital Network (DICOM/HL7)", desc: "Full bidirectional electronic medical record integration for direct hospital workflow." },
];

const softwareFeatures = [
  "Easy to install and intuitive interface",
  "Predefined examination protocols",
  "Methods conform to ICS standards",
  "Multiple standardized nomograms (Siroky, Liverpool)",
  "Configurable examination methods and test reports",
  "Videourodynamics & Anorectal Manometry",
  "PVR value automatically saved into test reports",
  "Configurable multi-language support",
  "Wireless connection with hospital network (DICOM/HL7)",
  "Voice or remote handheld control",
  "Online remote service and diagnostics support",
  "Automatic artifact suppression and curve editing",
];

const accessories = [
  { title: "Cystometry Infusion Pump", desc: "MMT precision peristaltic pump and digital hanging weight ensure precise filling volume control.", image: pumpImg, badge: "Filling Control" },
  { title: "Magnetic Profilometry Puller", desc: "Unique magnetic catheter puller with customizable withdrawal speed and resterilizable catheter holder.", image: pullerImg, badge: "UPP Studies" },
  { title: "EMG / Biofeedback Unit", desc: "Smooth, precise electromyography curves powered by an external medical-grade preamplifier.", image: emgImg, badge: "Pelvic Floor" },
  { title: "DanFlow Wireless Uroflowmeter", desc: "Waterproof weight cell flow meter with 866/915 MHz wireless link and 2-year battery life.", image: uroflowImg, badge: "Wireless Flow" },
  { title: "3D Bladder Scanner", desc: "Portable, real-time post-void residual (PVR) calculation automatically saved directly into test protocols.", image: scannerImg, badge: "PVR Diagnostic" },
  { title: "Commode Chair & Stands", desc: "Lightweight, easy-to-sanitize examination chair suitable for videourodynamics and pediatric cases.", image: commodeImg, badge: "Ergonomics" },
];

const Melody = () => (
  <div className="bg-white">
    <SEO
      title="UROMIC Melody - Complete Compact Urodynamic System | Reinforce Healthcare Services"
      description="MMT UROMIC Melody is a compact system for complete urodynamic examinations. Features 5 measuring channels, inbuilt pump, profilometric puller, and wireless DICOM/HL7."
      keywords="UROMIC Melody, Urodynamic system, Uroflowmetry, MMT Urodynamics, Medical equipment, Videourodynamics, Reinforce Healthcare"
      canonical="/melody"
    />

    {/* 1st Section: Product Banner */}
    <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
      <div className="absolute inset-0 z-0">
        <img src={bannerBg} alt="UROMIC Melody Background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="pt-6 text-center sm:pt-8 lg:pt-12">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="hidden h-[1px] w-9 bg-primary sm:block" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">GET INTO THE FLOW WITH MMT URODYNAMICS</span>
            <span className="hidden h-[1px] w-9 bg-primary sm:block" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            UROMIC{" "}<span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">Melody</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
            A small compact system for complete urodynamic examinations. Equipped with 5 measuring channels, profilometric puller output and inbuilt pump.
          </p>
        </div>

        <div className="relative mx-auto mt-4 max-w-[1100px] sm:mt-6">
          {/* Desktop Feature Cards */}
          {keypoints.map((point) => <FeatureCard key={point.number} {...point} />)}
          {/* Desktop Connector Arrows */}
          <div className="absolute left-[338px] top-[118px] hidden items-center xl:flex">
            <div className="h-2 w-2 rounded-full border border-primary bg-white" /><div className="h-px w-[30px] bg-primary" /><ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
          </div>
          <div className="absolute bottom-[111px] left-[338px] hidden items-center xl:flex">
            <div className="h-2 w-2 rounded-full border border-primary bg-white" /><div className="h-px w-[30px] bg-primary" /><ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
          </div>
          <div className="absolute right-[338px] top-[118px] hidden items-center xl:flex">
            <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} /><div className="h-px w-[30px] bg-primary" /><div className="h-2 w-2 rounded-full border border-primary bg-white" />
          </div>
          <div className="absolute bottom-[111px] right-[338px] hidden items-center xl:flex">
            <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} /><div className="h-px w-[30px] bg-primary" /><div className="h-2 w-2 rounded-full border border-primary bg-white" />
          </div>
          {/* Central Machine - Desktop */}
          <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] items-end justify-center sm:h-[440px] xl:flex xl:h-[490px]">
            <div className="absolute bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
            <motion.img src={machineImage} alt="UROMIC Melody Unit" className="relative z-10 h-[380px] w-auto rounded-2xl object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.25)] xl:h-[460px]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
          {/* Central Machine - Mobile */}
          <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 xl:hidden">
            <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl" />
            <motion.img src={machineImage} alt="UROMIC Melody Unit" className="relative z-10 h-[260px] w-auto rounded-xl object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
          {/* Mobile Cards */}
          <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 xl:hidden">
            {keypoints.map((point) => <MobileFeatureCard key={point.number} {...point} />)}
          </div>
        </div>
      </div>
    </section>


    {/* 2nd Section: General Clinical Overview */}
    <section className="border-b border-slate-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3"><span className="h-[2px] w-8 bg-[#19A8E8]" /><p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">Clinical Overview</p></div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">Comprehensive Diagnostic Power in a{" "}<span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">Compact Body</span></h2>
            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">The UROMIC Melody is engineered specifically for clinics requiring top-tier urodynamic diagnostics without allocating permanent large-format carts. Its versatile form factor easily mounts on standard infusion poles or table stands.</p>
            <p className="mt-3 text-sm leading-6 text-[#697A94] sm:text-base">Equipped with an integrated cystometric pump and dedicated output socket for magnetic urethral pullers, Melody offers true all-in-one execution from filling cystometry to pressure-flow and profilometry studies.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {generalOverview.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FCFF] p-3.5 shadow-sm"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#19A8E8]" /><div><h4 className="text-xs font-bold text-slate-900 sm:text-sm">{item.title}</h4><p className="mt-0.5 text-xs leading-snug text-slate-500">{item.desc}</p></div></div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#EBF5FE] to-[#F7FAFC] p-8 shadow-xl">
              <div className="mb-4 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-primary">MMT Architecture</span><span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">5-Channel System</span></div>
              <div className="space-y-4">
                {[
                  { Icon: Radio, title: "Dual Link Architecture", description: "868/915 MHz medical RF frequency + fast USB link", style: "bg-blue-50 text-primary" },
                  { Icon: Activity, title: "Inbuilt Cystometric Pump", description: "Smooth infusion control with digital infusion weight", style: "bg-emerald-50 text-emerald-600" },
                  { Icon: Monitor, title: "Videourodynamics & Manometry", description: "Integrated video frames, EMG and anorectal assessments", style: "bg-purple-50 text-purple-600" },
                ].map(({ Icon, title, description, style }) => (
                  <div key={title} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><div className="flex items-center gap-3"><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style}`}><Icon size={20} /></div><div><div className="text-sm font-bold text-slate-900">{title}</div><div className="text-xs text-slate-500">{description}</div></div></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Machine Interactive View */}
    <MelodyMachine />

    {/* 3rd Section: Software Showcase (UDMvision) */}
    <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">CLINICAL WORKFLOW EFFICIENCY</span><h2 className="mt-1 text-3xl font-extrabold text-[#102A43] sm:text-4xl">User Friendly Software UDMvision</h2><p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">The flagship MMT software suite that conforms rigorously to ICS standards, delivering automated calculations and seamless hospital network communication.</p></div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softwareFeatures.map((feature) => <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:border-blue-200"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary"><CheckCircle className="h-4 w-4" /></div><span className="text-xs font-semibold text-slate-700 sm:text-sm">{feature}</span></div>)}
        </div>
      </div>
    </section>

    {/* 4th Section: Visual Accessories Showcase */}
    <section className="border-b border-slate-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">ACCESSORY ECOSYSTEM</span><h2 className="mt-1 text-3xl font-extrabold text-[#102A43] sm:text-4xl">Compatible Diagnostic Accessories</h2><p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">MMT precision attachments meet the highest sterility standards of modern hospital operating rooms and consultation suites.</p></div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((acc) => <div key={acc.title} className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-shadow hover:shadow-md"><div className="relative h-48 w-full overflow-hidden bg-slate-100"><span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-primary shadow-xs backdrop-blur-md">{acc.badge}</span><img src={acc.image} alt={acc.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" /></div><div className="flex flex-1 flex-col justify-between p-6"><div><h3 className="mb-2 text-base font-bold text-slate-900">{acc.title}</h3><p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{acc.desc}</p></div></div></div>)}
        </div>
      </div>
    </section>

    {/* 5th Section: Related Urodynamic Models */}
    <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">MMT URODYNAMIC FAMILY</span><h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">Explore Sister Systems</h2><p className="mt-2 text-xs text-slate-500 sm:text-sm">Select the optimal hardware configuration tailored to your department's case volume.</p></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Link to="/harmony" className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:border-primary/40 hover:shadow-md"><span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary">ULTRA-PORTABLE</span><h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">UROMIC Harmony</h3><p className="mt-1 text-xs text-slate-500">Small mobile urodynamic unit with 868/915 MHz wireless patient unit.</p></Link>
          <Link to="/symphony" className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:border-primary/40 hover:shadow-md"><span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary">PREMIUM WORKSTATION</span><h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">UROMIC Symphony</h3><p className="mt-1 text-xs text-slate-500">Flagship ergonomic cart with up to 16 channels, dual touch monitors, and video.</p></Link>
        </div>
      </div>
    </section>

    {/* Inquiry & Rental CTA */}
    <ProductInquireCTA productName="UROMIC Melody Urodynamic System" productImage={machineImage} subtitle="MMT UROMIC Melody complete compact urodynamics system with 5 channels, integrated pump, profilometer, and disposables. Available for rental or practice purchase." />
  </div>
);

export default Melody;
