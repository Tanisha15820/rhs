import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import urodynamicsBg from "../../assets/images/urodynamics_banner.jpg";
import melodyImg from "../../assets/images/melody.png";
import danflowWaveImg from "../../assets/images/danflow_wave_machine.jpg";
import SEO from "../SEO";

const UrodynamicSystem = () => {
  const categories = [
    {
      title: "Urodynamic Systems",
      description:
        "Comprehensive diagnostic workstations (UROMIC Symphony, Harmony, Melody) offering automated calibration, multi-channel cystometry, and video-urodynamics.",
      image: melodyImg,
      link: "/urodynamic-systems",
    },
    {
      title: "Uroflowmeters",
      description:
        "High-precision wireless digital uroflowmeters (Danflow Wave & Cord) with automatic flow curve recording, built-in thermal printers, and real-time reports.",
      image: danflowWaveImg,
      link: "/uroflowmeters",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <SEO
        title="Urodynamic Systems & Uroflowmeters Equipment Rental | Reinforce Healthcare Services"
        description="Explore our comprehensive urodynamic product lineup including UROMIC workstations and Danflow wireless uroflowmeters."
        keywords="urodynamics rental, uroflowmeter rental, UROMIC workstations, Danflow Wave, urology diagnostic equipment"
      />

      {/* Banner */}
      <div className="relative w-full overflow-hidden">
        <img
          src={urodynamicsBg}
          alt="Urodynamic System & Uroflowmeters"
          className="
            h-[200px]
            w-full
            object-cover
            sm:h-[240px]
            md:h-[280px]
            lg:h-[320px]
          "
        />

        <div className="absolute inset-0 flex w-full items-center px-5 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-primary sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Urology · Diagnostic Solutions
            </motion.p>

            <motion.h1
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Urodynamic System & Uroflowmeters
            </motion.h1>

            <motion.p
              className="mt-3 max-w-md text-xs leading-5 text-slate-600 sm:text-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Explore our modular diagnostic urodynamic workstations and wireless digital uroflowmeters.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-8 sm:px-6 lg:px-12 xl:px-16">
        {/* Heading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="
              text-[24px]
              font-bold
              leading-tight
              text-[#092B5F]
              sm:text-[28px]
              md:text-[32px]
            "
          >
            Explore Our Urodynamics & Uroflowmetry{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Categories
            </span>
          </h1>

          <p className="mt-2 max-w-[650px] text-[13px] leading-[1.6] text-gray-500 sm:text-[15px]">
            Comprehensive clinical diagnostic solutions for accurate lower urinary tract assessments, cystometry, and non-invasive uroflowmetry.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={category.link}
                className="
                  group
                  relative
                  flex
                  min-h-[210px]
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-primary/20
                  bg-gradient-to-br
                  from-white
                  via-[#f6fbff]
                  to-[#eef7ff]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-primary/50
                  hover:shadow-[0_14px_35px_rgba(25,168,232,0.18)]
                "
              >
                {/* Top Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image */}
                <div
                  className="
                    flex
                    w-[44%]
                    items-center
                    justify-center
                    p-4
                    sm:w-[42%]
                    md:w-[44%]
                  "
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="
                      h-[145px]
                      w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:h-[160px]
                      md:h-[175px]
                    "
                  />
                </div>

                {/* Content */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    justify-center
                    px-4
                    py-5
                    pr-5
                    sm:px-5
                    sm:pr-6
                  "
                >
                  <h2
                    className="
                      max-w-[240px]
                      text-[16px]
                      font-bold
                      leading-[1.25]
                      text-[#092B5F]
                      transition-colors
                      duration-300
                      group-hover:text-primary-dark
                      sm:text-[18px]
                      md:text-[20px]
                    "
                  >
                    {category.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-[240px]
                      text-[12px]
                      leading-[1.55]
                      text-gray-500
                      sm:text-[13px]
                    "
                  >
                    {category.description}
                  </p>

                  {/* Arrow Button */}
                  <div
                    className="
                      mt-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-primary
                      to-primary-dark
                      text-white
                      shadow-md
                      shadow-blue-500/25
                      transition-all
                      duration-300
                      group-hover:translate-x-1.5
                      group-hover:scale-105
                      group-hover:shadow-lg
                      group-hover:shadow-blue-500/30
                    "
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 19,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrodynamicSystem;
