import { Globe, MapPin, UserCheck, Calendar } from "lucide-react";

const Reliability = () => {
  const stats = [
    {
      icon: Globe,
      number: "1000+",
      title: "Installations Worldwide",
      description:
        "Over 1000+ installations trusted by urologists across the globe.",
      color: "#19A8E8",
      bgColor: "from-[#e8f4fd] to-[#f0f8ff]",
    },
    {
      icon: MapPin,
      number: "25+",
      title: "Countries Served",
      description:
        "Proudly serving healthcare professionals across 25+ countries worldwide.",
      color: "#2525B8",
      bgColor: "from-[#eaeaFe] to-[#f4f4ff]",
    },
    {
      icon: UserCheck,
      number: "200+",
      title: "Doctors Trained",
      description:
        "More than 200+ doctors trained at our reference centers for confident system use.",
      color: "#20AFA7",
      bgColor: "from-[#e6f8f6] to-[#f2fcfb]",
    },
    {
      icon: Calendar,
      number: "2008",
      title: "First Litho Model",
      description:
        "Pioneering innovation in laser lithotripsy since 2008.",
      color: "#7259D6",
      bgColor: "from-[#f0eefe] to-[#f8f7ff]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#e8f4fd] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#f0f0ff] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7] sm:text-sm">
              Proven Track Record
            </p>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Reliability{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              you can count on
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base sm:leading-7">
            Trusted by healthcare professionals worldwide, our laser systems
            deliver consistent, dependable performance year after year.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                {/* Background glow */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.14]"
                  style={{ backgroundColor: stat.color }}
                />
                <div
                  className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full opacity-[0.05] blur-2xl"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon with ring */}
                <div className="relative mx-auto mb-5">
                  <div
                    className="absolute inset-0 m-auto h-16 w-16 rounded-full opacity-20 blur-sm transition-all duration-300 group-hover:h-18 group-hover:w-18"
                    style={{ backgroundColor: stat.color }}
                  />
                  <div
                    className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:scale-110"
                    style={{ borderColor: `${stat.color}30` }}
                  >
                    <Icon size={24} style={{ color: stat.color }} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Number */}
                <p
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </p>

                {/* Divider line */}
                <div className="mx-auto mt-3 mb-3 h-[2px] w-10 rounded-full" style={{ backgroundColor: `${stat.color}30` }} />

                {/* Title */}
                <h3 className="text-sm font-bold text-[#102A43] sm:text-base">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-5 text-[#697A94] sm:text-sm sm:leading-6">
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

export default Reliability;
