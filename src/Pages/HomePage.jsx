import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import homeBanner from "../assets/images/home-banner.png";
import homeBg1 from "../assets/images/home-banner2.png";
import cyberBanner from "../assets/images/home-banner3.png";

import Products from "../Components/Products";
import WhyChooseUs from "../Components/WhyChooseUs";
import TestimonialSection from "../Components/TestimonialSection";
import FAQ from "../Components/FAQ";
import Clients from "../Components/Clients";
import SEO from "../Components/SEO";

import {
  getAllBanners,
  saveAllBanners,
  DEFAULT_BANNER_SLIDES,
} from "../utils/bannerStorage";

import { ORGANIZATION_SCHEMA } from "../config/seo";

const defaultSlideImages = [homeBanner, cyberBanner, homeBg1];

const HomePage = () => {
  const navigate = useNavigate();

  const [slidesData, setSlidesData] = useState(() => {
    const savedSlides = getAllBanners();

    if (savedSlides.length === 2) {
      const updatedSlides = [
        savedSlides[0],
        DEFAULT_BANNER_SLIDES[1],
        {
          ...savedSlides[1],
          id: "slide-3",
          contentSide: "left",
        },
      ];

      saveAllBanners(updatedSlides);

      return updatedSlides;
    }

    return savedSlides;
  });

  useEffect(() => {
    const handleUpdate = () => {
      const fresh = getAllBanners();
      setSlidesData(fresh);
    };

    window.addEventListener("rhs_banner_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_banner_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const bannerSlides = slidesData.map((slide, idx) => ({
    ...slide,

    image:
      slide.image || defaultSlideImages[idx % defaultSlideImages.length],

    contentSide: slide.contentSide || "left",

    smallHeading:
      slide.smallHeading || "Trusted Healthcare Services",

    headingLine1:
      slide.headingLine1 || "Quality Equipment.",

    headingHighlight:
      slide.headingHighlight || "Better Healthcare.",

    singleLine: slide.singleLine || false,

    description:
      slide.description ||
      "Reinforce Healthcare Services delivers quality medical equipment and innovative solutions.",

    primaryBtnText:
      slide.primaryBtnText || "Book an Appointment",

    primaryBtnLink:
      slide.primaryBtnLink || "/contact",

    secondaryBtnText:
      slide.secondaryBtnText || "Explore Products",

    secondaryBtnLink:
      slide.secondaryBtnLink || "/machine",
  }));

  const [counts, setCounts] = useState({
    categories: 0,
    specialties: 0,
    products: 0,
    support: 0,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (activeSlide >= bannerSlides.length) {
      setActiveSlide(0);
    }
  }, [bannerSlides.length, activeSlide]);

  useEffect(() => {
    if (bannerSlides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % bannerSlides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        categories:
          prev.categories < 50 ? prev.categories + 1 : 50,

        specialties:
          prev.specialties < 10 ? prev.specialties + 1 : 10,

        products:
          prev.products < 100 ? prev.products + 1 : 100,

        support:
          prev.support < 24 ? prev.support + 1 : 24,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const activeBanner = bannerSlides[activeSlide];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <SEO
        title="Medical Equipment & Machine Rental for Hospitals & Doctors"
        description="Reinforce Healthcare Services provides high-grade medical equipment, urology devices, and hospital machinery on rent for healthcare professionals and medical centers."
        keywords="medical machine rental for hospitals, medical equipment rental for doctors, urology equipment leasing, healthcare machinery rental, hospital equipment provider"
        canonical="/"
        jsonLd={ORGANIZATION_SCHEMA}
      />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-primary/5 pb-5 sm:h-[530px] sm:pb-0 lg:h-[540px]">
        {/* Banner Images - Full Width */}
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === activeSlide
                ? "z-0 opacity-100 animate-zoom-slow"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/5" />

        {/* =================================================
            HERO CONTENT
        ================================================= */}
        <div
          className={`relative z-10 flex h-full w-full items-center px-5 pb-4 pt-8 sm:px-8 sm:pb-20 lg:px-12 xl:px-16 ${
            activeBanner?.contentSide === "right"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`w-full max-w-[540px] ${
              activeBanner?.contentSide === "right"
                ? "text-right"
                : "text-left"
            }`}
          >
            {/* Small Heading */}
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm ${
                activeBanner?.contentSide === "right"
                  ? "ml-auto"
                  : ""
              }`}
            >
              <ShieldOutlinedIcon
                className="text-primary"
                style={{ fontSize: 18 }}
              />

              <span className="text-sm font-medium text-slate-600">
                {activeBanner?.smallHeading ||
                  "Trusted Healthcare Services"}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${activeSlide}`}
              className="animate-fade-in-up text-3xl font-bold leading-[1.12] text-slate-900 sm:text-4xl md:text-5xl lg:text-[50px]"
            >
              {activeBanner?.headingLine1}

              {activeBanner?.singleLine ? " " : <br />}

              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {activeBanner?.headingHighlight}
              </span>
            </h1>

            {/* Description */}
            <p
              key={`description-${activeSlide}`}
              className={`animate-fade-in-up mt-4 max-w-[500px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 ${
                activeBanner?.contentSide === "right"
                  ? "ml-auto"
                  : ""
              }`}
            >
              {activeBanner?.description}
            </p>

            {/* Feature Cards */}
            <div
              className={`mt-5 grid max-w-[500px] grid-cols-2 gap-2.5 sm:grid-cols-4 ${
                activeBanner?.contentSide === "right"
                  ? "ml-auto"
                  : ""
              }`}
            >
              <div className="flex min-h-[82px] flex-col items-center justify-center rounded-xl bg-white/80 px-2 py-2.5 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 20 }}
                  />
                </div>

                <span className="text-[11px] font-medium leading-4 text-slate-600 sm:text-xs">
                  Specialized Equipment
                </span>
              </div>

              <div className="flex min-h-[82px] flex-col items-center justify-center rounded-xl bg-white/80 px-2 py-2.5 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <CategoryOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 20 }}
                  />
                </div>

                <span className="text-[11px] font-medium leading-4 text-slate-600 sm:text-xs">
                  Multiple Specialties
                </span>
              </div>

              <div className="flex min-h-[82px] flex-col items-center justify-center rounded-xl bg-white/80 px-2 py-2.5 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-dark/10">
                  <LocalHospitalOutlinedIcon
                    className="text-primary-dark"
                    style={{ fontSize: 20 }}
                  />
                </div>

                <span className="text-[11px] font-medium leading-4 text-slate-600 sm:text-xs">
                  Quality Products
                </span>
              </div>

              <div className="flex min-h-[82px] flex-col items-center justify-center rounded-xl bg-white/80 px-2 py-2.5 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <PersonOutlineOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 20 }}
                  />
                </div>

                <span className="text-[11px] font-medium leading-4 text-slate-600 sm:text-xs">
                  Expert Support
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              className={`mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 ${
                activeBanner?.contentSide === "right"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  const link =
                    activeBanner?.primaryBtnLink ||
                    "/contact";

                  if (
                    link.startsWith("http://") ||
                    link.startsWith("https://")
                  ) {
                    window.open(
                      link,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } else {
                    navigate(link);
                  }
                }}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                {activeBanner?.primaryBtnText ||
                  "Book an Appointment"}

                <ArrowForwardIcon
                  style={{ fontSize: 18 }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            STATS CARD
        ================================================= */}
        {/* <div className="relative z-20 mx-auto mb-3 mt-5 w-[calc(100%-2rem)] max-w-5xl sm:absolute sm:bottom-3 sm:left-1/2 sm:m-0 sm:-translate-x-1/2">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-md md:grid-cols-4">

            <div className="flex items-center gap-2.5 border-b border-slate-200 px-4 py-3.5 sm:px-5 md:border-b-0 md:border-r">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.categories}+
                </p>

                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Product Categories
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 border-b border-slate-200 px-4 py-3.5 sm:px-5 md:border-b-0 md:border-r">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <LocalHospitalOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.specialties}+
                </p>

                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Medical Specialties
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 border-r border-slate-200 px-4 py-3.5 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.products}+
                </p>

                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Quality Products
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-3.5 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <CategoryOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.support}/7
                </p>

                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Expert Support
                </p>
              </div>
            </div>
          </div>
          </div> */}
      </section>

      {/*  HOMEPAGE SECTIONS */}

      <Products />
      <WhyChooseUs />
      <TestimonialSection />
      <FAQ />
      <Clients />
    </div>
  );
};

export default HomePage;