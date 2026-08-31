import React from "react";
import { ScanLine, FileCheck, Network, Gem, Sparkles } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      title: "Strategy",
      description:
        "Delivering safe, precise and efficient care with advanced CO₂ laser and diode technology.",
      icon: ScanLine,
      bg: "bg-gradient-to-br from-[#63B5F6] to-[#3D9BEF]",
      iconColor: "text-[#1875C5]",
      dotColor: "bg-[#2385D9]",
      lineColor: "bg-white",
    },
    {
      title: "Scope",
      description: "Comprehensive solutions with wide treatment possibilities.",
      icon: FileCheck,
      bg: "bg-gradient-to-br from-[#7189F2] to-[#526EE0]",
      iconColor: "text-[#4058C5]",
      dotColor: "bg-[#526EDB]",
      lineColor: "bg-white",
    },
    {
      title: "Structure",
      description:
        "Precision-engineered platform for flexible & reliable performance.",
      icon: Network,
      bg: "bg-gradient-to-br from-[#50C4CC] to-[#27AEB8]",
      iconColor: "text-[#168E98]",
      dotColor: "bg-[#159DA6]",
      lineColor: "bg-white",
    },
    {
      title: "Excellence",
      description:
        "Superior results with innovative and evidence-based practice.",
      icon: Gem,
      bg: "bg-gradient-to-br from-[#FFBD55] to-[#F5A51C]",
      iconColor: "text-[#D88700]",
      dotColor: "bg-[#E89A18]",
      lineColor: "bg-white",
    },
    {
      title: "Surface",
      description:
        "Versatile handpieces with broad focal lengths for better outcomes.",
      icon: Sparkles,
      bg: "bg-gradient-to-br from-[#FF8274] to-[#F75C4B]",
      iconColor: "text-[#D94738]",
      dotColor: "bg-[#E95B4D]",
      lineColor: "bg-white",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-20">
      {/* BACKGROUND DECORATIONS*/}

      {/* Soft blue glow on left */}
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      {/* Soft blue glow on right */}
      <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      {/* Small dots on right */}
      <div className="absolute right-10 top-36 hidden opacity-30 lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-blue-300" />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mb-5 flex items-center justify-center gap-5">
          <span className="h-[1px] w-10 bg-[#3292F5]" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
            WHY SMARTXIDE² TRIO
          </p>
          <span className="h-[1px] w-10 bg-[#3292F5]" />
        </div>

        <h2 className="text-center text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
          SmartXide² TRIO{" "}
          <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
            Advantages
          </span>
        </h2>

        <p className="mt-3 text-center text-base text-[#7181A3] md:text-lg">
          Advanced features. Superior precision. Better patient outcomes.
        </p>

        <div className="relative mt-16">
          {/* Horizontal timeline */}
          <div className="absolute left-[10%] right-[10%] top-[16px] hidden h-[2px] bg-[#B8C9E5] lg:block" />

          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center"
                >
                  {/* TIMELINE DOT */}

                  <div className="relative z-20 hidden h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-white shadow-md lg:flex">
                    {/* Colored outer ring */}
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        index === 0
                          ? "border-2 border-[#2994F4]"
                          : index === 1
                            ? "border-2 border-[#2456E8]"
                            : index === 2
                              ? "border-2 border-[#13A9B8]"
                              : index === 3
                                ? "border-2 border-[#FF9800]"
                                : "border-2 border-[#FF4934]"
                      }`}
                    >
                      <span
                        className={`h-3 w-3 rounded-full ${
                          index === 0
                            ? "bg-[#2994F4]"
                            : index === 1
                              ? "bg-[#2456E8]"
                              : index === 2
                                ? "bg-[#13A9B8]"
                                : index === 3
                                  ? "bg-[#FF9800]"
                                  : "bg-[#FF4934]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Vertical connector */}
                  <div className="hidden h-16 w-[2px] lg:block">
                    <div
                      className={`h-full ${
                        index === 0
                          ? "bg-[#2994F4]"
                          : index === 1
                            ? "bg-[#2456E8]"
                            : index === 2
                              ? "bg-[#13A9B8]"
                              : index === 3
                                ? "bg-[#FF9800]"
                                : "bg-[#FF4934]"
                      }`}
                    />
                  </div>

                  <div className="relative z-20 -mb-7 flex h-[76px] w-[76px] items-center justify-center rounded-full border-[6px] border-white bg-white shadow-[0_5px_20px_rgba(30,70,130,0.15)]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F8FBFF]">
                      <Icon
                        size={34}
                        strokeWidth={1.7}
                        className={
                          index === 0
                            ? "text-[#2A7DE1]"
                            : index === 1
                              ? "text-[#244ED1]"
                              : index === 2
                                ? "text-[#1397A8]"
                                : index === 3
                                  ? "text-[#F39100]"
                                  : "text-[#EF4734]"
                        }
                      />
                    </div>
                  </div>

                  <div
                    className={`relative flex h-[188px] w-full flex-col items-center rounded-2xl px-5 pb-5 pt-14 text-center text-white shadow-[0_12px_30px_rgba(30,80,150,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(30,80,150,0.22)] ${item.bg}`}
                  >
                    {/* Card title */}
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                    {/* Card description */}
                    <p className="mb-3 text-sm leading-[1.35rem] text-white/95">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM WAVE DECORATION
      ========================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 180"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 115C170 175 300 160 450 105C620 42 735 70 880 105C1050 148 1170 155 1440 65V180H0V115Z"
            fill="#EEF5FF"
          />

          <path
            d="M0 92C180 155 320 145 470 88C625 30 755 58 900 95C1080 140 1210 135 1440 42"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
};

export default Advantages;
