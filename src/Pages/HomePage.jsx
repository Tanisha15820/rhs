import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import homeBanner from "../assets/images/home.png";
import homeBg1 from "../assets/images/home_bg1.png";
import Products from "../Components/Products";
import WhyChooseUs from "../Components/WhyChooseUs";
import TestimonialSection from "../Components/TestimonialSection";
import FAQ from "../Components/FAQ";
import Clients from "../Components/Clients";
import SEO from "../Components/SEO";
import { getAllBanners } from "../utils/bannerStorage";

import { ORGANIZATION_SCHEMA } from "../config/seo";

const defaultSlideImages = [homeBanner, homeBg1];

const HomePage = () => {
  const navigate = useNavigate();
  // Dynamic banner slides from localStorage
  const [slidesData, setSlidesData] = useState(getAllBanners);

  // Sync banner data dynamically when updated in Admin Dashboard
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
    image: slide.image || defaultSlideImages[idx % defaultSlideImages.length],
    smallHeading: slide.smallHeading || "Trusted Healthcare Services",
    headingLine1: slide.headingLine1 || "Quality Equipment.",
    headingHighlight: slide.headingHighlight || "Better Healthcare.",
    singleLine: slide.singleLine || false,
    description:
      slide.description ||
      "Reinforce Healthcare Services delivers quality medical equipment and innovative solutions.",
    primaryBtnText: slide.primaryBtnText || "Book an Appointment",
    primaryBtnLink: slide.primaryBtnLink || "/contact",
    secondaryBtnText: slide.secondaryBtnText || "Explore Products",
    secondaryBtnLink: slide.secondaryBtnLink || "/machine",
  }));

  // Numbers for the four statistics cards
  const [counts, setCounts] = useState({
    categories: 0,
    specialties: 0,
    products: 0,
    support: 0,
  });

  // Active slide of the hero banner slider
  const [activeSlide, setActiveSlide] = useState(0);

  // Keep activeSlide in bounds
  useEffect(() => {
    if (activeSlide >= bannerSlides.length) {
      setActiveSlide(0);
    }
  }, [bannerSlides.length, activeSlide]);

  // Auto-rotate the banner slides
  useEffect(() => {
    if (bannerSlides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Start number animation when the page loads
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        categories: prev.categories < 50 ? prev.categories + 1 : 50,
        specialties: prev.specialties < 10 ? prev.specialties + 1 : 10,
        products: prev.products < 100 ? prev.products + 1 : 100,
        support: prev.support < 24 ? prev.support + 1 : 24,
      }));
    }, 30);

    // Stop the timer when the component is removed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <SEO
        title="Medical Equipment & Machine Rental for Hospitals & Doctors"
        description="Reinforce Healthcare Services provides high-grade medical equipment, urology devices, and hospital machinery on rent for healthcare professionals and medical centers."
        keywords="medical machine rental for hospitals, medical equipment rental for doctors, urology equipment leasing, healthcare machinery rental, hospital equipment provider"
        canonical="/"
        jsonLd={ORGANIZATION_SCHEMA}
      />

      {/* HERO SECTION  */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-primary/5">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === activeSlide
                ? "z-0 opacity-100 animate-zoom-slow"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-white/5"></div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-10 sm:px-6 md:min-h-[620px] md:py-16 lg:px-10">
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[540px] md:-mt-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <ShieldOutlinedIcon
                className="text-primary"
                style={{ fontSize: 18 }}
              />

              <span className="text-sm font-medium text-slate-600">
                {bannerSlides[activeSlide].smallHeading || "Trusted Healthcare Services"}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${activeSlide}`}
              className="animate-fade-in-up text-4xl font-bold leading-[1.15] text-slate-900 sm:text-5xl lg:text-[52px]"
            >
              {bannerSlides[activeSlide].headingLine1}
              {bannerSlides[activeSlide].singleLine ? (
                " "
              ) : (
                <br />
              )}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {bannerSlides[activeSlide].headingHighlight}
              </span>
            </h1>

            {/* Description */}
            <p
              key={`description-${activeSlide}`}
              className="animate-fade-in-up mt-5 max-w-[500px] text-base leading-7 text-slate-600"
            >
              {bannerSlides[activeSlide].description}
            </p>

            {/* FEATURES */}
            <div className="mt-7 grid max-w-[500px] grid-cols-2 gap-3 sm:grid-cols-4">
              {/* Feature 1 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Specialized Equipment
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CategoryOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Multiple Specialties
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-dark/10">
                  <LocalHospitalOutlinedIcon
                    className="text-primary-dark"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Quality <br /> Products
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <PersonOutlineOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Expert <br /> Support
                </span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {/* Appointment Button */}
              <button
                type="button"
                onClick={() => {
                  const link = bannerSlides[activeSlide].primaryBtnLink || "/contact";
                  if (link.startsWith("http://") || link.startsWith("https://")) {
                    window.open(link, "_blank", "noopener,noreferrer");
                  } else {
                    navigate(link);
                  }
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto cursor-pointer"
              >
                {bannerSlides[activeSlide].primaryBtnText || "Book an Appointment"}
                <ArrowForwardIcon style={{ fontSize: 18 }} />
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                onClick={() => {
                  const link = bannerSlides[activeSlide].secondaryBtnLink || "/machine";
                  if (link.startsWith("http://") || link.startsWith("https://")) {
                    window.open(link, "_blank", "noopener,noreferrer");
                  } else {
                    navigate(link);
                  }
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white/80 px-5 py-3 text-sm font-semibold text-primary-dark backdrop-blur-sm transition-all duration-300 hover:bg-white sm:w-auto cursor-pointer"
              >
                <ArrowForwardIcon style={{ fontSize: 18 }} />
                {bannerSlides[activeSlide].secondaryBtnText || "Explore Products"}
              </button>
            </div>
          </div>
        </div>

        {/* ================= STATS CARD ================= */}
        <div className="relative z-20 mx-auto mt-6 w-[92%] max-w-4xl md:absolute md:bottom-3 md:left-1/2 md:mt-0 md:-translate-x-1/2">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-md md:grid-cols-4">
            {/* Product Categories */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 md:border-b-0 md:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.categories}+
                </p>

                <p className="text-xs text-slate-500">Product Categories</p>
              </div>
            </div>

            {/* Medical Specialties */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 md:border-b-0 md:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <LocalHospitalOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.specialties}+
                </p>

                <p className="text-xs text-slate-500">Medical Specialties</p>
              </div>
            </div>

            {/* Quality Products */}
            <div className="flex items-center gap-3 border-r border-slate-200 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.products}+
                </p>

                <p className="text-xs text-slate-500">Quality Products</p>
              </div>
            </div>

            {/* Expert Support */}
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <CategoryOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">
                  {counts.support}/7
                </p>

                <p className="text-xs text-slate-500">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Products />

      <WhyChooseUs />

      <TestimonialSection />

      <FAQ />

      <Clients />
    </div>
  );
};

export default HomePage;
