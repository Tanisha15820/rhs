import React from "react";
import { ArrowUpRight, RefreshCw, SprayCan, Box } from "lucide-react";
import fiberRecognitionImage from "../../assets/images/fiber_recognition.png";

const FiberRecognition = () => {
  const features = [
    {
      icon: ArrowUpRight,
      title: "AVAILABLE DIAMETERS",
      description: "200, 272, 365, 550, 800 and 1000 μm",
    },
    {
      icon: RefreshCw,
      title: "REUSABILITY",
      description:
        "All fibers are available both as disposable and reusable (except Ball Tip mode)",
    },
    {
      icon: SprayCan,
      title: "CLEANING",
      description:
        "Reusable fibers can be sterilized by Sterrad® and steam sterilization",
    },
    {
      icon: Box,
      title: "STERILIZATION TRAY",
      description: "A dedicated fiber and tool sterilization tray is available",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#006DFF]/10
          blur-[90px]
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[120px]
          lg:left-[20%]
          lg:top-[55%]
          lg:h-[550px]
          lg:w-[550px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          flex-col
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:flex-row
          lg:items-center
          lg:px-12
          xl:px-16
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            lg:w-[50%]
          "
        >
          {/* Outer Blue Glow Circle */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[270px]
              w-[270px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#087BFF]/20
              shadow-[0_0_60px_rgba(0,109,255,0.12)]
              sm:h-[400px]
              sm:w-[400px]
              sm:shadow-[0_0_70px_rgba(0,109,255,0.12)]
              lg:h-[500px]
              lg:w-[500px]
              lg:shadow-[0_0_80px_rgba(0,109,255,0.12)]
            "
          />

          {/* Inner Blue Glow Circle */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#087BFF]/20
              sm:h-[330px]
              sm:w-[330px]
              lg:h-[420px]
              lg:w-[420px]
            "
          />

          {/* Image Wrapper */}
          <div
            className="
              relative
              z-10
              w-full
              max-w-[380px]
              sm:max-w-[520px]
              lg:max-w-[650px]
            "
          >
            {/* Machine Image */}
            <img
              src={fiberRecognitionImage}
              alt="Fiber recognition system"
              className="
                relative
                z-10
                w-full
                object-contain
                drop-shadow-[0_0_35px_rgba(0,120,255,0.28)]
              "
            />

            {/* Fiber Recognition Callout */}
            <div className="pointer-events-none absolute left-[47%] top-[54%] z-20 hidden lg:block">
              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-[8px]
                  w-[8px]
                  rounded-full
                  border
                  border-white
                  bg-transparent
                "
              />

              <span
                className="
                  absolute
                  left-[3px]
                  top-[7px]
                  h-[105px]
                  w-[1px]
                  bg-white
                "
              />

              <span
                className="
                  absolute
                  left-[3px]
                  top-[112px]
                  h-[1px]
                  w-[45px]
                  bg-white
                "
              />

              <div className="absolute left-[50px] top-[103px] w-[180px]">
                <h4 className="text-[11px] font-bold uppercase leading-none text-[#1682FF]">
                  FIBER RECOGNITION
                </h4>

                <p className="mt-[4px] text-[8px] leading-[12px] text-gray-300">
                  Litho EVO automatically
                  <br />
                  adjusts emission settings based
                  <br />
                  on the connected fiber diameter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            relative
            z-20
            mt-8
            flex
            w-full
            flex-col
            lg:mt-0
            lg:w-[50%]
            lg:pl-6
            xl:pl-10
          "
        >
          {/* Small Top Heading */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
              sm:gap-4
              lg:justify-start
            "
          >
            <span className="h-[1px] w-8 bg-[#087BFF] sm:w-12 lg:w-14" />

            <p
              className="
                text-center
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                sm:text-[10px]
                sm:tracking-[0.3em]
                sm:text-xs
                lg:text-left
              "
            >
              Smart Fiber Management
            </p>

            <span className="h-[1px] w-8 bg-[#087BFF] sm:w-12 lg:w-14" />
          </div>

          {/* Main Heading */}

          <h1
            className="
              mb-4
              text-center
              text-4xl
              font-black
              uppercase
              leading-[0.9]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-left
              lg:text-7xl
              xl:text-[64px]
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-[#0755FF]
                via-[#147BFF]
                to-[#21C8F6]
                bg-clip-text
                text-transparent
              "
            >
              Fiber Recognition
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              relative
              z-20
              mx-auto
              mb-7
              max-w-[500px]
              text-center
              text-sm
              leading-6
              text-gray-300
              sm:text-base
              lg:mx-0
              lg:text-left
            "
          >
            Litho EVO automatically adjusts emission settings based on the
            connected fiber diameter.
          </p>

          {/* FEATURE CARDS */}

          <div className="space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    group
                    relative
                    flex
                    min-h-[92px]
                    items-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#087BFF]/70
                    bg-[#050A11]
                    px-3
                    transition-all
                    duration-300
                    hover:border-[#00AFFF]
                    hover:bg-[#07111D]
                    hover:shadow-[0_0_30px_rgba(0,130,255,0.15)]
                    sm:min-h-[105px]
                    sm:px-4
                    lg:min-h-[112px]
                    lg:px-5
                  "
                >
                  {/* Icon Circle */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#009DFF]
                      bg-black
                      text-[#00AFFF]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:shadow-[0_0_20px_rgba(0,160,255,0.35)]
                      sm:h-14
                      sm:w-14
                      lg:h-16
                      lg:w-16
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        sm:h-[25px]
                        sm:w-[25px]
                        lg:h-[27px]
                        lg:w-[27px]
                      "
                    />
                  </div>

                  {/* Card Content */}

                  <div
                    className="
                      ml-3
                      flex-1
                      py-3
                      pr-2
                      sm:ml-4
                      sm:py-4
                      sm:pr-4
                      lg:ml-5
                    "
                  >
                    <h3
                      className="
                        mb-1
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-[#1682FF]
                        sm:text-xs
                        lg:text-sm
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        max-w-[310px]
                        text-[11px]
                        leading-5
                        text-gray-300
                        sm:text-xs
                        lg:text-sm
                      "
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Hover Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      w-0
                      bg-[#00AFFF]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Left Hover Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-1/2
                      h-16
                      w-1
                      -translate-y-1/2
                      rounded-full
                      bg-[#087BFF]/0
                      blur-md
                      transition-all
                      duration-300
                      group-hover:bg-[#087BFF]/70
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiberRecognition;
