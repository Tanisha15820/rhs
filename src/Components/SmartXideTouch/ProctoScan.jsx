import {
  Circle,
  Hexagon,
  Waves,
  Layers3,
  Zap,
  Gauge,
  ScanLine,
  Clock3,
  Radio,
} from "lucide-react";
import proctoscanImage from "../../assets/images/Proctoscan.png";
import circleImg from "../../assets/images/circle.png";
import hexagonImg from "../../assets/images/hexagon.png";
import dothexagonImg from "../../assets/images/dot-hexagon.png";
import coilImg from "../../assets/images/coil.png";

const ProctoScan = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7FAFE] py-14 md:py-20">
      {/* Soft blue glow - left */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-[#DFF4FF] opacity-60 blur-3xl" />

      {/* Soft blue glow - right */}
      <div className="pointer-events-none absolute right-[-150px] top-20 h-[500px] w-[500px] rounded-full bg-[#E7F0FF] opacity-70 blur-3xl" />

      {/* Decorative hexagons */}
      {/* <div className="pointer-events-none absolute right-5 top-0 hidden opacity-40 lg:block">
        <div className="flex gap-1">
          <Hexagon size={50} strokeWidth={0.7} className="text-[#D5E5F5]" />
          <Hexagon
            size={50}
            strokeWidth={0.7}
            className="mt-7 text-[#D5E5F5]"
          />
        </div>
      </div> */}

      <div className="pointer-events-none absolute bottom-0 left-0 hidden opacity-40 lg:block">
        <Hexagon size={70} strokeWidth={0.7} className="text-[#D5E5F5]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative">
            <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[480px]">
              {/* Decorative scanning circles */}

              <div className="absolute left-[8%] top-[20%] h-[270px] w-[270px] rounded-full border border-[#BFE7F7]" />
              <div className="absolute left-[13%] top-[25%] h-[220px] w-[220px] rounded-full border border-[#D4EFF8]" />

              {/* Blue glow behind product */}

              <div className="absolute left-[18%] top-[34%] h-44 w-64 rounded-full bg-[#BCEBFA] opacity-50 blur-3xl" />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[310px]
                  w-[90%]
                  max-w-[570px]
                  items-center
                  justify-center
                  sm:h-[360px]
                "
              >
                <img
                  src={proctoscanImage}
                  alt="ProctoScan laser scanning system"
                  className="h-full w-full object-contain"
                />
              </div>

              <div
                className="
                  absolute
                  right-[2%]
                  top-[47%]
                  z-20
                  flex
                  w-[210px]
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#E0EAF3]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_10px_30px_rgba(38,100,150,0.10)]
                  sm:right-[5%]
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DDF5FF]">
                  <Radio size={20} className="text-[#28A9D5]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#263A56]">
                    Multifunction Button
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-[#8190A7]">
                    Scan-ON / Scan-OFF
                    <br />
                    and centering
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                mx-auto
                w-full
                max-w-[570px]
                overflow-hidden
                rounded-2xl
                border
                border-[#DDE9F3]
                bg-white/90
                shadow-[0_10px_30px_rgba(35,90,140,0.07)]
                backdrop-blur-sm
                mb-19
              "
            >
              {/* Scanning Area */}

              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#E9F0F6] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <ScanLine size={18} className="text-[#2389E8]" />
                  <span className="text-xs font-semibold text-[#1979D4]">
                    Scanning Area
                  </span>
                </div>
                <span className="text-xs text-[#63738B]">6.3 mm × 6.3 mm</span>
              </div>

              {/* Emission Modes */}

              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#E9F0F6] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Waves size={18} className="text-[#2389E8]" />

                  <span className="text-xs font-semibold text-[#1979D4]">
                    Emission Modes
                  </span>
                </div>

                <span className="text-xs text-[#63738B]">
                  CW, UP, HP, DP, SP
                </span>
              </div>

              {/* Scanning Modes */}

              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#E9F0F6] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <ScanLine size={18} className="text-[#2389E8]" />

                  <span className="text-xs font-semibold text-[#1979D4]">
                    Scanning Modes
                  </span>
                </div>

                <span className="text-xs text-[#63738B]">
                  Normal, Interlaced, SmartTrack
                </span>
              </div>

              {/* Dwell Time */}

              <div className="grid grid-cols-[180px_1fr] items-center px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Clock3 size={18} className="text-[#2389E8]" />

                  <span className="text-xs font-semibold text-[#1979D4]">
                    Dwell Time
                  </span>
                </div>

                <span className="text-xs text-[#63738B]">100 μs – 45 ms</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#1CA7E9]" />

              <p className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
                Advanced Delivery & Scanner Solutions
              </p>
              <span className="h-px w-7 bg-[#20B7AE]" />
            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              Procto
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                Scan
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-lg text-base leading-7 text-[#697A94] sm:text-sm sm:leading-5">
              This compact scanning system features versatile shapes like
              circles, coils, hexagons
              <br className="hidden sm:block" />
              and DOT hexagons for tissue stimulation, adapting seamlessly to a
              wide range of clinical scenarios.
            </p>

            <div
              className="
                mt-5
                rounded-xl
                border
                border-[#E1EAF3]
                bg-white
                p-4
                shadow-[0_8px_25px_rgba(35,85,130,0.06)]
              "
            >
              <h3 className="text-base font-bold text-[#183A63]">
                Scanning Shapes
              </h3>

              <div className="mt-5 grid grid-cols-4 gap-3">
                {/* Circle */}

                <div className="flex flex-col items-center">
                  <img
                    src={circleImg}
                    alt="ProctoScan laser scanning system"
                    className="h-14 w-14 object-contain"
                  />

                  <span className="mt-2 text-xs text-[#63738B]">Circle</span>
                </div>

                {/* Hexagon */}

                <div className="flex flex-col items-center">
                  <img
                    src={hexagonImg}
                    alt="ProctoScan laser scanning system"
                    className="h-14 w-14 object-contain"
                  />

                  <span className="mt-2 text-xs text-[#63738B]">Hexagon</span>
                </div>

                {/* DOT Hexagon */}

                <div className="flex flex-col items-center">
                  <img
                    src={dothexagonImg}
                    alt="ProctoScan laser scanning system"
                    className="h-14 w-14 object-contain"
                  />

                  <span className="mt-2 text-xs text-[#63738B]">
                    DOT Hexagon
                  </span>
                </div>

                {/* Coil */}

                <div className="flex flex-col items-center">
                  <img
                    src={coilImg}
                    alt="ProctoScan laser scanning system"
                    className="h-14 w-14 object-contain"
                  />
                  <span className="mt-2 text-xs text-[#63738B]">Coil</span>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {/* 3-D Ablation */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-[#E1EAF3]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_6px_20px_rgba(35,85,130,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(35,85,130,0.09)]
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F4FF]">
                  <Layers3 size={20} className="text-[#2787F0]" />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#263A56]">
                    3-D Ablation
                  </h4>

                  <p className="mt-1 text-xs leading-4 text-[#7A899F]">
                    Accurate area management
                    <br />
                    with reliable depth control
                  </p>
                </div>

                <span className="text-lg text-[#B5C4D6] transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </div>

              {/* Fast Ablation */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-[#E1EAF3]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_6px_20px_rgba(35,85,130,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(35,85,130,0.09)]
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F4FF]">
                  <Gauge size={20} className="text-[#2787F0]" />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#263A56]">
                    Fast Ablation
                  </h4>

                  <p className="mt-1 text-xs leading-4 text-[#7A899F]">
                    Achieve unparalleled cutting
                    <br />
                    speed and performance
                  </p>
                </div>

                <span className="text-lg text-[#B5C4D6] transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </div>

              {/* Turbo Cut */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-[#E1EAF3]
                  bg-white
                  px-4
                  py-3
                  shadow-[0_6px_20px_rgba(35,85,130,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(35,85,130,0.09)]
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F4FF]">
                  <Zap size={20} className="text-[#2787F0]" />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#263A56]">
                    Turbo Cut
                  </h4>

                  <p className="mt-1 text-xs leading-4 text-[#7A899F]">
                    Speed of cutting performance
                  </p>
                </div>

                <span className="text-lg text-[#B5C4D6] transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProctoScan;
