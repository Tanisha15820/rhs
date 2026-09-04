import React from "react";
import { Globe, MapPin, UserCheck, Calendar, Sliders } from "lucide-react";
import wireframeBack from "../../assets/images/litho35_wireframe_back.png";

const Litho35Reliability = () => {
  const stats = [
    {
      icon: Globe,
      number: "1000+",
      title: "Installations Worldwide",
      description: "Trusted by surgical teams across operating rooms globally.",
      color: "#19A8E8",
    },
    {
      icon: MapPin,
      number: "25+",
      title: "Countries Where Installed",
      description: "Delivering clinical precision across 25+ countries.",
      color: "#2525B8",
    },
    {
      icon: UserCheck,
      number: "200+",
      title: "Doctors Trained",
      description: "Trained at dedicated reference centers for optimal surgical outcomes.",
      color: "#20AFA7",
    },
    {
      icon: Calendar,
      number: "2008",
      title: "First Litho Model",
      description: "Over 18 years of pioneering leadership in laser lithotripsy.",
      color: "#7259D6",
    },
    {
      icon: Sliders,
      number: "150+",
      title: "Available Combinations",
      description: "Energy, frequency, and pulse width presets for exact customization.",
      color: "#F59E0B",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-50 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 hidden w-72 opacity-15 lg:block">
        <img
          src={wireframeBack}
          alt="Litho Frame"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#20B7AE] sm:text-sm">
              Global Reputation
            </p>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Reliability{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              You Can Count On
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Litho device is a well-established laser technology in the worldwide
            market. These are the numbers of its enduring success:
          </p>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-center shadow-[0_6px_25px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(25,168,232,0.12)]"
              >
                <div className="relative mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} style={{ color: stat.color }} strokeWidth={1.8} />
                </div>

                <p
                  className="text-3xl font-extrabold tracking-tight sm:text-4xl"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </p>

                <div
                  className="mx-auto my-3 h-[2px] w-8 rounded-full"
                  style={{ backgroundColor: `${stat.color}40` }}
                />

                <h3 className="text-xs font-bold uppercase tracking-wide text-[#102A43] sm:text-sm">
                  {stat.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#697A94]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Litho35Reliability;
