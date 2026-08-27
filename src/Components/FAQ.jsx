import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import faqImage from "../assets/images/faq_image.png";

// MUI Icons
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import PublicIcon from "@mui/icons-material/Public";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // ANIMATION VARIANTS

  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 70 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  // FAQ DATA

  const faqs = [
    {
      question: "What types of healthcare products do you offer?",
      answer:
        "We offer a wide range of advanced medical devices and equipment including Bipolar Plasma Generators, Diode Lasers, Endoscopy Systems, Flexible Video URS and more.",
      icon: <MedicalServicesIcon />,
    },

    {
      question: "Are your products certified and safe to use?",
      answer:
        "Yes, our healthcare products are manufactured according to quality and safety standards. We focus on providing reliable and safe medical equipment.",
      icon: <VerifiedUserIcon />,
    },

    {
      question: "Do you provide installation and training?",
      answer:
        "Yes. Our team provides installation assistance and product training to help healthcare professionals use the equipment correctly and efficiently.",
      icon: <PersonIcon />,
    },

    {
      question: "What kind of after-sales support do you provide?",
      answer:
        "We provide reliable after-sales support including technical assistance, troubleshooting and maintenance guidance whenever required.",
      icon: <BuildIcon />,
    },

    {
      question: "Do you offer warranty on your products?",
      answer:
        "Yes, warranty coverage is available for selected products. The warranty period and terms may vary depending on the product.",
      icon: <DescriptionIcon />,
    },

    {
      question: "Do you supply products internationally?",
      answer:
        "Yes, we work with healthcare organizations and customers across different regions and can support international product requirements.",
      icon: <PublicIcon />,
    },
  ];

  // FAQ OPEN / CLOSE

  const handleFAQClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND DECORATIONS */}

      <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#E7F5FF]/70 blur-3xl" />

      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#EEF0FF]/70 blur-3xl" />

      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#E8F8F5]/70 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Small Heading */}

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              FAQS
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Find answers to common questions about our products
            <br className="hidden sm:block" />
            services and support.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FAQ CONTENT
        ====================================================== */}

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.2fr] lg:gap-6">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            className="
              group
              relative
              min-h-[390px]
              overflow-hidden
              rounded-2xl
              border
              border-white/80
              bg-gradient-to-br
              from-[#EEF8FF]
              via-white
              to-[#F2F0FF]
              p-5
              shadow-[0_8px_30px_rgba(55,75,110,0.07)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_18px_45px_rgba(55,75,110,0.12)]
              sm:p-6
            "
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Soft Background Glow */}

            <div
              className="
                absolute
                -bottom-24
                -left-16
                h-64
                w-64
                rounded-full
                bg-[#DDF3FF]
                opacity-70
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            {/* =================================================
                CUTOUT IMAGE
            ================================================== */}

            <div className="absolute bottom-0 left-1/2 w-[88%] max-w-[340px] -translate-x-1/2">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={faqImage}
                  alt="Healthcare Equipment"
                  className="
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:-translate-y-5
                    group-hover:scale-110
                  "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FAQ LIST
          ================================================== */}

          <motion.div
            className="flex flex-col gap-2.5"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div key={index} variants={itemVariants}>
                  <div
                    className={`
                      group
                      overflow-hidden
                      rounded-xl
                      border
                      bg-white

                      ${
                        isOpen
                          ? "border-primary/20 shadow-[0_8px_25px_rgba(25,168,232,0.10)]"
                          : "border-[#E6ECF4] shadow-[0_4px_15px_rgba(55,75,110,0.05)]"
                      }

                      transition-all
                      duration-300

                      hover:-translate-x-1
                      hover:border-primary/20
                      hover:shadow-[0_10px_25px_rgba(25,168,232,0.10)]
                    `}
                  >
                    {/* =================================================
                      QUESTION BUTTON
                  ================================================== */}

                    <button
                      type="button"
                      onClick={() => handleFAQClick(index)}
                      className="
                      flex
                      w-full
                      items-center
                      gap-3
                      px-4
                      py-3
                      text-left
                    "
                    >
                      {/* Icon */}

                      <div
                        className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-[#EDF7FF] text-primary"
                        }

                        group-hover:scale-105
                      `}
                      >
                        {React.cloneElement(faq.icon, {
                          fontSize: "small",
                        })}
                      </div>

                      {/* Question */}

                      <span
                        className="
                        flex-1
                        text-xs
                        font-semibold
                        text-[#253653]
                        transition-colors
                        duration-300
                        group-hover:text-primary
                        sm:text-sm
                      "
                      >
                        {faq.question}
                      </span>

                      {/* Arrow */}

                      <KeyboardArrowDownIcon
                        fontSize="small"
                        className={`
                        text-[#7C879C]
                        transition-all
                        duration-300

                        group-hover:text-primary

                        ${isOpen ? "rotate-180 text-primary" : ""}
                      `}
                      />
                    </button>

                    {/* =================================================
                      ANSWER
                  ================================================== */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 pl-[64px] pr-5">
                            <p className="text-xs leading-5 text-[#7C879C] sm:text-sm sm:leading-6">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
