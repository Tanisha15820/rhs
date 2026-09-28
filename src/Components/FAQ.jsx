import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import faqImage from "../assets/images/faq_image.png";

// Material Icons
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import PublicIcon from "@mui/icons-material/Public";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { getAllFaqs } from "../utils/faqStorage";

// =========================
// FAQ Icon Mapping
// =========================
const ICON_MAP = {
  medical: <MedicalServicesIcon fontSize="small" />,
  verified: <VerifiedUserIcon fontSize="small" />,
  person: <PersonIcon fontSize="small" />,
  build: <BuildIcon fontSize="small" />,
  description: <DescriptionIcon fontSize="small" />,
  public: <PublicIcon fontSize="small" />,
  support: <ContactSupportIcon fontSize="small" />,
  hospital: <LocalHospitalIcon fontSize="small" />,
};

// =========================
// Get FAQ Icon
// =========================
const getFaqIcon = (faq) => {
  if (faq.iconKey && ICON_MAP[faq.iconKey]) {
    return ICON_MAP[faq.iconKey];
  }

  return <MedicalServicesIcon fontSize="small" />;
};

// =========================
// FAQ Component
// =========================
function FAQ() {
  // Currently opened FAQ
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ data
  const [faqs, setFaqs] = useState(getAllFaqs);

  // =========================
  // Sync FAQ Updates
  // =========================
  useEffect(() => {
    const handleUpdate = () => {
      setFaqs(getAllFaqs());
    };

    window.addEventListener("rhs_faqs_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_faqs_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // =========================
  // FAQ Toggle
  // =========================
  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* =========================
          Background Decorations
      ========================== */}
      <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#E7F5FF]/70 blur-3xl" />

      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#EEF0FF]/70 blur-3xl" />

      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#E8F8F5]/70 blur-3xl" />

      {/* =========================
          Main Content
      ========================== */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =========================
            Section Heading
        ========================== */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              FAQS
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Find answers to common questions about our products, services, and
            technical support.
          </p>
        </div>

        {/* =========================
            FAQ Main Grid
        ========================== */}
        <div className="grid w-full items-stretch gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:gap-8">
          {/* =========================
              LEFT IMAGE BOX
          ========================== */}
          <div
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-100
              bg-gradient-to-br
              from-[#EEF8FF]
              via-white
              to-[#F2F0FF]
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:shadow-md
              sm:min-h-[420px]
            "
          >
            {/* Decorative Glow */}
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#DDF3FF] opacity-70 blur-3xl" />

            {/* Product Image */}
            <div className="absolute bottom-0 left-1/2 w-[85%] max-w-[320px] -translate-x-1/2 sm:max-w-[360px]">
              <img
                src={faqImage}
                alt="Healthcare Equipment"
                className="
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>

          {/* =========================
              RIGHT FAQ ACCORDION
          ========================== */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id || index}
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    bg-white
                    transition-all
                    duration-200
                    ${
                      isOpen
                        ? "border-primary/30 shadow-md ring-1 ring-primary/10"
                        : "border-slate-200/80 shadow-xs hover:border-slate-300"
                    }
                  `}
                >
                  {/* =========================
                      QUESTION HEADER
                  ========================== */}
                  <button
                    type="button"
                    onClick={() => handleFAQClick(index)}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      gap-3.5
                      px-4
                      py-3.5
                      text-left
                    "
                  >
                    {/* FAQ Icon */}
                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-colors
                        ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-[#EDF7FF] text-primary"
                        }
                      `}
                    >
                      {getFaqIcon(faq)}
                    </div>

                    {/* Question */}
                    <span className="flex-1 text-xs font-semibold text-slate-800 transition-colors sm:text-sm">
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      className={`
                        text-slate-400
                        transition-transform
                        duration-200
                        ${
                          isOpen
                            ? "rotate-180 text-primary"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {/* =========================
                      ANSWER
                  ========================== */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            border-t
                            border-slate-100
                            px-5
                            py-3
                            pl-[58px]
                            text-xs
                            leading-relaxed
                            text-slate-600
                            sm:text-sm
                          "
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;