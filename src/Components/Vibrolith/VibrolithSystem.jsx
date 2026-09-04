import React from "react";
import cartImage from "../../assets/images/vibrolith_cart.jpg";
import { Gauge, Sliders, Briefcase, VolumeX, CheckCircle2 } from "lucide-react";

const VibrolithSystem = () => {
  const specs = [
    {
      icon: Gauge,
      title: "Dual Pressure Management",
      desc: "Operates with 3.5–6.5 Bar supply air, with smooth independent output regulation continuously variable from 0 to 4 Bar.",
    },
    {
      icon: Sliders,
      title: "Pulse Mode Flexibility",
      desc: "Digitally switch between single impact or multi-pulse continuous frequencies from 50 to 600 pulses/minute.",
    },
    {
      icon: VolumeX,
      title: "Silent Compressor Option",
      desc: "Custom heavy-duty silent compressor tank designed for quiet operating theater environments without vibration.",
    },
    {
      icon: Briefcase,
      title: "Mobile Carrying Case",
      desc: "Weighing just 6.3 kg, the console fits into a rugged carrying case for effortless transit between surgical centers.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFE] to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Cart Image */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
              <img
                src={cartImage}
                alt="Vibrolith Mobile Cart and Air Compressor System"
                className="h-auto w-full max-w-[420px] rounded-2xl object-contain shadow-sm"
              />
              <div className="mt-4 rounded-xl bg-slate-50 p-3 text-center text-xs font-semibold text-slate-700">
                Complete Mobile Workstation with Silent Medical Air Compressor
              </div>
            </div>
          </div>

          {/* Right Column: System Capabilities */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A8E8]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
                Versatile System Architecture
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
              Engineered for Maximum{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Mobility & Clinical Freedom
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
              VIBROLITH is compatible with both central hospital pipeline air supplies
              and dedicated standalone compressors. The optional heavy-duty trolley cart
              keeps all accessories, compressor, foot pedals, and handpiece neatly organized
              for rapid room turnaround.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed text-[#697A94]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibrolithSystem;
