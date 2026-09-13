import React from "react";
import { Clock3, Anchor, ShoppingBasket } from "lucide-react";
import dustingEffectImage from "../../assets/images/dusting.png";

const DustingEffect = () => {
  const features = [
    {
      icon: Clock3,
      title: "LONG PULSE WIDTH",
      description: "Up to 1100 μs, for smooth and controlled ablation.",
    },
    {
      icon: Anchor,
      title: "LIMITED RETROPULSION",
      description: "Easy ablation with no need to chase the stone.",
    },
    {
      icon: ShoppingBasket,
      title: "NO NEED FOR BASKET",
      description: "The obtained fine dust eliminates the retrieval phase.",
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
          top-[45%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#006DFF]/10
          blur-[100px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[130px]
          lg:left-[28%]
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
            z-10
            flex
            w-full
            flex-col
            lg:w-[58%]
            xl:w-[60%]
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
              Advanced Ablation Technology
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
              Dusting Effect
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              relative
              z-20
              mx-auto
              mb-3
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
            Vapor Tunnel technology creates a fine dust effect that efficiently
            disintegrates stones into microscopic particles for easier clearance
            and improved outcomes.
          </p>

          {/* IMAGE SECTION */}
          <div
            className="
              relative
              mt-2
              flex
              min-h-[280px]
              w-full
              items-center
              justify-center
              sm:mt-4
              sm:min-h-[380px]
              lg:mt-[-20px]
              lg:min-h-[500px]
              lg:items-end
              lg:justify-start
            "
          >
            {/* Image Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#006DFF]/10
                blur-[80px]
                sm:h-[400px]
                sm:w-[420px]
                sm:blur-[100px]
                lg:bottom-4
                lg:left-[18%]
                lg:top-auto
                lg:h-[500px]
                lg:w-[500px]
                lg:translate-x-0
                lg:translate-y-0
              "
            />

            {/* Main Dusting Image */}
            <img
              src={dustingEffectImage}
              alt="Laser dusting effect"
              className="
                relative
                z-10
                w-full
                max-w-[380px]
                object-contain
                drop-shadow-[0_0_35px_rgba(0,120,255,0.28)]
                sm:max-w-[500px]
                lg:max-w-[700px]
                lg:translate-x-[-5%]
                lg:translate-y-4
                xl:max-w-[740px]
              "
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            relative
            z-20
            mt-5
            flex
            w-full
            flex-col
            justify-center
            gap-3
            sm:mt-8
            lg:mt-16
            lg:w-[42%]
            lg:pl-5
            xl:w-[50%]
            xl:pl-8
          "
        >
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
                    size={23}
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
                    sm:pr-6
                    lg:ml-5
                    lg:pr-10
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

                {/* Left Glow */}
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
    </section>
  );
};

export default DustingEffect;
