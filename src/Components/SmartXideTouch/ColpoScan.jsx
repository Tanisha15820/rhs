import {
  ShieldCheck,
  CircleDot,
  Ruler,
  Activity,
  Monitor,
  Plug,
  Crosshair,
  Settings2,
} from "lucide-react";

import colpoScanImage from "../../assets/images/colposcan.png";

const ColpoScan = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Minimal thermal damage",
      description: "No temperature rises in the tissue.",
    },
    {
      icon: CircleDot,
      title: "Absence of carbonization",
      description: "With clean cutting.",
    },
    {
      icon: Ruler,
      title: "Control of cutting length",
      description: "Ablation area, depth and wavelength.",
    },
    {
      icon: Activity,
      title: "Two operative modes",
      description: "Depth and Power.",
    },
    {
      icon: Monitor,
      title: "Software-guided procedure",
      description: "For focusing and centering the laser beam.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] py-14 md:py-20 lg:py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#E5F5FB] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-180px] top-10 h-[550px] w-[550px] rounded-full bg-[#EAF2FF] opacity-70 blur-3xl" />

      {/* Scanning rings behind machine */}

      <div className="pointer-events-none absolute right-[15%] top-[25%] hidden h-[420px] w-[420px] rounded-full border border-[#DCECF7] lg:block" />
      <div className="pointer-events-none absolute right-[17%] top-[28%] hidden h-[350px] w-[350px] rounded-full border border-[#E6F2F9] lg:block" />
      <div className="pointer-events-none absolute right-[20%] top-[32%] hidden h-[270px] w-[270px] rounded-full border border-[#EDF6FA] lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-5">
          <div className="relative z-20">
            {/* Eyebrow */}

            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#20AFA7]" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
                Advanced Delivery & Scanner Solutions
              </p>
              <span className="h-[2px] w-6 bg-[#20AFA7]" />
            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Colpo
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                SCAN
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-lg text-base leading-7 text-[#697A94] sm:text-sm sm:leading-5">
              An advanced accessory that combines a scanning system and
              micromanipulator, expanding the applications of SmartXide Touch
              <br className="hidden sm:block" />
              SurgiCO₂ for scanner-assisted laser proctology and gynecology.
            </p>

            <div className="mt-8 space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-[#DFEAF2]
                      bg-white/80
                      px-4
                      py-3.5
                      shadow-[0_5px_18px_rgba(30,90,130,0.04)]
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#B9DFEA]
                      hover:shadow-[0_8px_22px_rgba(30,90,130,0.08)]
                    "
                  >
                    {/* Icon */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDF8FC]">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[#249BC0]"
                      />
                    </div>

                    {/* Text */}

                    <div>
                      <h3 className="text-sm font-bold text-[#294362] sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-4 text-[#7B8BA1] sm:text-[13px] sm:leading-5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[570px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[360px]
                  w-[520px]
                  max-w-full
                  items-center
                  justify-center
                  sm:h-[430px]
                "
              >
                <img
                  src={colpoScanImage}
                  alt="ColpoScan"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div
              className="
                absolute
                right-0
                top-6
                z-30
                flex
                w-[180px]
                items-center
                gap-3
                rounded-xl
                border
                border-[#DFE9F2]
                bg-white
                px-3.5
                py-3
                shadow-[0_10px_28px_rgba(40,90,130,0.09)]
                sm:right-4
                sm:w-[205px]
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF8FC]">
                <Plug size={20} className="text-[#299BC3]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#304562]">Easy Plug</h3>

                <p className="mt-1 text-xs leading-4 text-[#8291A6]">
                  Quick connections
                  <br />
                  and intuitive fitting
                </p>
              </div>
            </div>

            {/* Connector line */}

            <div className="absolute right-[190px] top-16 hidden h-px w-16 bg-[#8DD6EA] sm:block" />

            <div
              className="
                absolute
                 left-[5%]
                 top-[38%]
                z-30
                w-[185px]
                rounded-xl
                border
                border-[#DFE9F2]
                bg-white
                p-3.5
                shadow-[0_10px_28px_rgba(40,90,130,0.08)]
                sm:left-[15%]
                sm:w-[210px]
              "
            >
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFF9FC]">
                  <Settings2 size={18} className="text-[#279DC4]" />
                </div>

                <h3 className="text-sm font-bold text-[#304562]">
                  Easy Control
                </h3>
              </div>

              <ul className="mt-3 space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-[#71839A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A4C8]" />
                  Rotation of scanning shapes
                </li>

                <li className="flex items-center gap-2 text-xs text-[#71839A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A4C8]" />
                  Adjustment of scanning sizes
                </li>

                <li className="flex items-center gap-2 text-xs text-[#71839A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A4C8]" />
                  Scan-ON / Scan-OFF
                </li>

                <li className="flex items-center gap-2 text-xs text-[#71839A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A4C8]" />
                  Changing scanning shapes
                </li>
              </ul>
            </div>

            <div
              className="
                absolute
                bottom-[1%]
                left-[2%]
                z-30
                flex
                w-[190px]
                items-center
                gap-3
                rounded-xl
                border
                border-[#DFE9F2]
                bg-white
                px-3.5
                py-3
                shadow-[0_10px_28px_rgba(40,90,130,0.08)]
                sm:left-[28%]
                sm:w-[215px]
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF8FC]">
                <Crosshair size={20} className="text-[#299BC3]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#304562]">Easy Field</h3>

                <p className="mt-1 text-xs leading-4 text-[#8291A6]">
                  Mechanical adjustment
                  <br />
                  of the working area to
                  <br />
                  confirm the laser beam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-70">
        <svg
          viewBox="0 0 1440 100"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 75C180 110 340 105 500 65C680 20 790 30 950 65C1110 100 1270 95 1440 40V100H0V75Z"
            fill="#EDF6FF"
          />
        </svg>
      </div>
    </section>
  );
};

export default ColpoScan;
