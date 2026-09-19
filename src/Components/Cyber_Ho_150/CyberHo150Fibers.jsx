import React from "react";
import { Cable, CircleDot, Activity, ArrowRightLeft } from "lucide-react";
import fibersImage from "../../assets/images/cyber_ho_150_vapor_tunnel.png"; // We can reuse a fiber image here or fiber.png

const CyberHo150Fibers = () => {
  const features = [
    {
      icon: Cable,
      title: "STANDARD FIBERS",
      description: "For general use in stone and soft tissue treatments.",
    },
    {
      icon: CircleDot,
      title: "BALL TIP FIBERS",
      description: "Strongly simplify the insertion in already bent scopes.",
    },
    {
      icon: ArrowRightLeft,
      title: "SIDE FIBERS",
      description: "The lateral emission is ideal for side tissue ablation, as in HoLAP.",
    },
    {
      icon: Activity,
      title: "GASTRO FIBERS",
      description: "Specifically designed for the fragmentation of gallstones.",
    },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-900 text-white flex items-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-16 lg:flex-row lg:items-center lg:px-8">
        
        {/* LEFT SIDE */}
        <div className="relative z-10 flex w-full flex-col lg:w-7/12">
          
          <div className="mb-4 flex items-center justify-start gap-4">
            <span className="h-[2px] w-12 bg-blue-500" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Advanced Delivery
            </p>
          </div>

          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Fibers
            </span>
          </h2>

          <p className="mb-12 max-w-xl text-base leading-relaxed text-slate-300">
            Cyber Ho device can be operated with a large range of fibers, depending on the application, flexibility and settings required.
          </p>

          {/* FIBER FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-center rounded-2xl border border-slate-700 bg-slate-800/50 p-5 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 mt-16 flex w-full justify-center lg:mt-0 lg:w-5/12">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            
            {/* Visual representation of fiber layers instead of an exact image since we don't have the layer cutout image */}
            <div className="relative h-full w-full border border-slate-700 rounded-3xl bg-slate-800/30 p-8 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-2 bg-blue-300 rounded-full shadow-[0_0_15px_rgba(147,197,253,0.5)]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-300 uppercase">Jacket</h4>
                      <p className="text-xs text-slate-400">Helps in recognizing fiber position and improves probe stiffness</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-cyan-400 uppercase">Buffer</h4>
                      <p className="text-xs text-slate-400">Protective Coating Layer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-500 uppercase">Cladding</h4>
                      <p className="text-xs text-slate-400">Maintains radiation energy within the core</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">Fiber Core</h4>
                      <p className="text-xs text-slate-400">Delivers energy to the target</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberHo150Fibers;
