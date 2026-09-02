import {
  ArrowRight,
  Globe,
  MapPin,
  UserCheck,
  Calendar,
} from "lucide-react";
import holmiumMachine from "../../assets/images/holium_machine.png";

const Reliability = () => {
  const features = [
    {
      icon: Globe,
      title: "1000+",
      subtitle: "Installations Worldwide",
      description: "Over 1000+ installations trusted by urologists across the globe.",
    },
    {
      icon: MapPin,
      title: "25+",
      subtitle: "Countries Where Installed",
      description: "Proudly serving healthcare professionals across 25+ countries worldwide.",
    },
    {
      icon: UserCheck,
      title: "200+",
      subtitle: "Doctors Trained at Our Reference Centers",
      description: "More than 200+ doctors trained to support better clinical outcomes and confident system use.",
    },
    {
      icon: Calendar,
      title: "2008",
      subtitle: "Introduction of the First Litho Model",
      description: "Pioneering innovation in laser lithotripsy since 2008.",
    },
  ];

  return (
    <section className="bg-[#f4f8ff] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT SIDE - Text content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#1CA7E9]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20AFA7] sm:text-sm">
                Advanced Holmium Laser System
              </p>
              <span className="h-px w-8 bg-[#20B7AE]" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Reliability{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                {/* low power. */}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-[#697A94] sm:text-base sm:leading-7">
              Engineered for precision and efficiency, our low power Holmium
              laser delivers
              <br className="hidden sm:block" />
              reliable performance for a wide range of clinical applications.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-2.5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-[#e2eafa] bg-white px-5 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eef5ff] text-[#4285ed]">
                        <Icon size={20} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <p className="text-lg font-bold text-[#102A43] sm:text-xl">
                            {feature.title}
                          </p>
                          <span className="text-sm font-medium text-[#20AFA7]">
                            — {feature.subtitle}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-[#697A94] sm:text-sm sm:leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - Image and specs */}
          <div className="flex flex-col items-center">
            {/* Machine image */}
            <div className="flex w-full justify-center">
              <img
                src={holmiumMachine}
                alt="Holmium Laser System"
                className="h-[415px] w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reliability;
