import React from "react";
import consoleImg from "../../assets/images/vibrolith_plus_screen.jpg";
import { CheckCircle2, Zap, ShieldCheck, Waves, Wind, Activity, Award } from "lucide-react";

const VibrolithPlusAbout = () => {
  const highlights = [
    {
      icon: Zap,
      title: "New Gen Ultrasonic Handpiece",
      desc: "Multi-microprocessor design controls ultrasonic energy with intelligent real-time feedback, completely preventing overheating of handpiece and probe.",
    },
    {
      icon: Wind,
      title: "Powerful Pneumatic Force",
      desc: "Ballistic electro-pneumatic impact engine delivering 1–12 Hz gradual frequency with adjustable energy, easily shattering the hardest urinary calculi.",
    },
    {
      icon: Waves,
      title: "Integrated Peristaltic Suction",
      desc: "Industry-pioneer suction pump delivers clear visualization during endoscopic procedures with instant evacuation of stone dust and fragments.",
    },
    {
      icon: Activity,
      title: "Hands-Free 3-Pedal Control",
      desc: "User-controlled 3-mode foot switch eliminates repeatedly clamping/unclamping suction lines, seamlessly toggling pneumatic, ultrasonic, or combined modes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              The World's Most Powerful Intracorporeal Lithotripter
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            VIBROLITH PLUS®{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Dual Lithotripter
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#697A94] sm:text-base">
            The Vibrolith Plus is a state-of-the-art, high-performance ultrasonic / pneumatic
            combined lithotripter technologically light years ahead of the competition. Engineered by
            ELMED Medical Systems with integrated peristaltic suction pump for superior stone
            fragmentation and continuous clear visualization.
          </p>
        </div>

        {/* Console Showcase Banner */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-[#F8FCFF] p-4 shadow-xl sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-md">
                <img
                  src={consoleImg}
                  alt="ELMED Vibrolith Plus Graphical Console and Soft Touch Controls"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
                  <Award size={14} /> FDA Cleared (510k)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <ShieldCheck size={14} /> CE 1984 Certified
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#102A43] sm:text-2xl">
                Easy to Use Soft Keys & Hi-Tech Graphical Display
              </h3>
              <p className="text-xs leading-relaxed text-[#697A94] sm:text-sm">
                Vibrolith Plus incorporates an intuitive blue graphical LCD interface and soft keys
                instead of bulky switches and mechanical knobs that are cumbersome to operate and difficult
                to sanitize after procedures. Instant digital monitoring of power, pulse frequency, and
                treatment duration with one-touch resets.
              </p>
              <div className="rounded-xl bg-blue-50/60 p-3.5 text-xs font-semibold text-primary">
                Powerful • User-Friendly • Maintenance-Free • Cost-Effective
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-600 px-2">
            <span className="font-semibold text-primary">
              Effective for renal, ureteral, and bladder calculi disintegration
            </span>
            <span className="font-medium text-slate-500">
              ELMED Elektronik ve Medikal San. ve Tic. A.Ş. • Turkey & USA
            </span>
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFE] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#697A94]">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                  <CheckCircle2 size={14} />
                  <span>ELMED Advanced Engineering</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VibrolithPlusAbout;
