import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

// Material Icons
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AirIcon from "@mui/icons-material/Air";
import HearingIcon from "@mui/icons-material/Hearing";
import SpaIcon from "@mui/icons-material/Spa";

// Logo image
import logo from "../assets/images/compressed_rhs_logo.png";

// Navigation Data
import {
  SPECIALTIES,
  CATEGORIES,
  SURGICAL_LASER_PRODUCTS,
  ENT_LASER_SUBTYPES,
  GASTRO_LASER_SUBTYPES,
  ELMED_SUBTYPES,
  ENDO_UROLOGY_SUBTYPES,
} from "../data/navigationData";

// Icon mapping for specialties
const SPECIALTY_ICONS = {
  ENT: <HearingIcon sx={{ fontSize: 19 }} />,
  Urology: <AirIcon sx={{ fontSize: 19 }} />,
  Gastro: <SpaIcon sx={{ fontSize: 19 }} />,
};

// Styling helper classes
const ACTIVE_LINK = "bg-primary/10 text-primary-dark";
const INACTIVE_LINK =
  "text-gray-700 hover:bg-primary/5 hover:text-primary-dark";
const MOBILE_INACTIVE = "text-gray-700 hover:bg-primary/5";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("ENT");
  const [selectedCategory, setSelectedCategory] = useState("ENT Laser");

  const isProductsActive =
    pathname === "/urology" ||
    pathname === "/ent" ||
    pathname === "/gastro" ||
    pathname.startsWith("/products");

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  // Get products or sub-items for the selected category
  const getCategoryProducts = (category) => {
    if (category === "Surgical Laser") {
      return SURGICAL_LASER_PRODUCTS.map((name) => ({
        name,
        path: "/urology",
      }));
    }

    if (category === "ENT Laser") {
      return ENT_LASER_SUBTYPES;
    }

    if (category === "Gastro Laser") {
      return GASTRO_LASER_SUBTYPES;
    }

    if (category === "Elmed") {
      return ELMED_SUBTYPES;
    }

    if (category === "Endo Urology UMD Endoscopy") {
      return ENDO_UROLOGY_SUBTYPES;
    }

    return [];
  };

  // Hide selected categories from Gastro
  const getVisibleCategories = (specialty) => {
    const categories = CATEGORIES[specialty] || [];

    if (specialty === "Gastro") {
      return categories.filter(
        (cat) =>
          cat !== "Gastro Products" &&
          cat !== "Gastro Enscopy" &&
          cat !== "Gastro Endoscopy",
      );
    }

    return categories;
  };

  const currentProducts = getCategoryProducts(selectedCategory);

  return (
    <header className="relative z-50 w-full bg-background px-3 py-4 md:px-5">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
        {/* Website Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Reinforce Healthcare Services"
            className="h-14 w-auto object-contain md:h-16"
          />

          <div className="leading-tight">
            <h1 className="text-[13px] font-extrabold tracking-tight text-primary-dark sm:text-[16px]">
              REINFORCE
            </h1>

            <p className="text-[8px] font-bold tracking-widest text-primary sm:text-[10px]">
              HEALTHCARE SERVICES
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden items-center gap-1 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {/* Home Link */}
          <Link
            to="/"
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            Home
          </Link>

          {/* Products Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                isProductsActive ? ACTIVE_LINK : INACTIVE_LINK
              }`}
            >
              <span>Products</span>

              <KeyboardArrowDownIcon
                sx={{ fontSize: 16 }}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Desktop Mega Menu Dropdown */}
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.13)] ring-1 ring-gray-100">
                  <div className="grid grid-cols-[1fr_1.15fr_1.7fr]">
                    {/* Specialties List */}
                    <div className="space-y-1 border-r border-gray-100 pr-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <MedicalServicesIcon sx={{ fontSize: 18 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          Specialties
                        </h3>
                      </div>

                      {SPECIALTIES.map((spec) => {
                        const isSelected = selectedSpecialty === spec.name;

                        return (
                          <button
                            key={spec.name}
                            type="button"
                            onMouseEnter={() => {
                              setSelectedSpecialty(spec.name);
                              setSelectedCategory(spec.defaultCategory);
                            }}
                            onClick={() => {
                              navigate(spec.path);
                              setProductsOpen(false);
                            }}
                            className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] transition-all ${
                              isSelected
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              {SPECIALTY_ICONS[spec.name]}
                              {spec.name}
                            </span>

                            <ChevronRightIcon sx={{ fontSize: 16 }} />
                          </button>
                        );
                      })}
                    </div>

                    {/* Categories for Selected Specialty */}
                    <div className="space-y-1 border-r border-gray-100 px-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <AirIcon sx={{ fontSize: 18 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          {selectedSpecialty}
                        </h3>
                      </div>

                      {getVisibleCategories(selectedSpecialty).map((cat) => {
                        const isSelected = selectedCategory === cat;

                        return (
                          <button
                            key={cat}
                            type="button"
                            onMouseEnter={() => setSelectedCategory(cat)}
                            className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-[12px] transition-all ${
                              isSelected
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span className="truncate">{cat}</span>

                            <ChevronRightIcon sx={{ fontSize: 15 }} />
                          </button>
                        );
                      })}
                    </div>

                    {/* Products for Selected Category */}
                    <div className="max-h-[360px] space-y-1 overflow-y-auto pl-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-base text-sky-600">✦</span>

                        <h3 className="truncate text-sm font-bold text-gray-800">
                          {selectedCategory}
                        </h3>
                      </div>

                      {currentProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-1">
                          {currentProducts.map((prod) => (
                            <Link
                              key={prod.name}
                              to={prod.path}
                              onClick={() => setProductsOpen(false)}
                              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] text-gray-600 transition hover:bg-sky-50 hover:text-blue-600"
                            >
                              <ChevronRightIcon
                                sx={{ fontSize: 14 }}
                                className="shrink-0 text-blue-500"
                              />

                              <span className="truncate">{prod.name}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="py-3 text-xs text-gray-400">
                          Select a category to view items
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Blogs Link */}
          <Link
            to="/blogs"
            className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/blogs" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            Blogs
          </Link>

          {/* Machine Link */}
          {/* <Link
            to="/machine"
            className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/machine" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            Machine
          </Link> */}

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/contact" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary/10 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <CloseIcon sx={{ fontSize: 22 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 22 }} />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl animate-fade-in rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary/10 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            {/* Home */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 ${
                pathname === "/" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <HomeIcon sx={{ fontSize: 18 }} />
              <span>Home</span>
            </Link>

            {/* Products Accordion in Mobile */}
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 ${
                  isProductsActive ? ACTIVE_LINK : MOBILE_INACTIVE
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <MedicalServicesIcon sx={{ fontSize: 18 }} />
                  <span>Products & Specialties</span>
                </span>

                <KeyboardArrowDownIcon
                  sx={{ fontSize: 18 }}
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                  {SPECIALTIES.map((spec) => {
                    const isSpecSelected = selectedSpecialty === spec.name;

                    return (
                      <div key={spec.name}>
                        {/* Specialty */}
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSpecialty(spec.name);
                            setSelectedCategory(spec.defaultCategory);
                          }}
                          className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold hover:bg-primary/5 ${
                            isSpecSelected
                              ? "text-primary"
                              : "text-slate-700 hover:text-primary"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {SPECIALTY_ICONS[spec.name]}
                            {spec.name}
                          </span>

                          <ChevronRightIcon
                            sx={{ fontSize: 16 }}
                            className={`transition-transform duration-200 ${
                              isSpecSelected ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {/* Categories */}
                        {isSpecSelected && (
                          <div className="ml-3 mt-1 space-y-1 border-l border-primary/20 pb-2 pl-3">
                            {getVisibleCategories(spec.name).map((cat) => {
                              const catProducts = getCategoryProducts(cat);

                              const isCatSelected = selectedCategory === cat;

                              return (
                                <div key={cat}>
                                  {/* Category */}
                                  <button
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold hover:bg-primary/5 ${
                                      isCatSelected
                                        ? "text-primary"
                                        : "text-slate-600 hover:text-primary"
                                    }`}
                                  >
                                    <span className="truncate">{cat}</span>

                                    <ChevronRightIcon
                                      sx={{ fontSize: 15 }}
                                      className={`shrink-0 transition-transform duration-200 ${
                                        isCatSelected ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>

                                  {/* Products */}
                                  {isCatSelected && (
                                    <div className="ml-3 mt-1 space-y-1 border-l border-primary/20 pb-2 pl-3">
                                      {catProducts.length > 0 ? (
                                        catProducts.map((prod) => (
                                          <Link
                                            key={prod.name}
                                            to={prod.path}
                                            onClick={closeMobileMenu}
                                            className="block rounded-lg px-3 py-2 text-xs text-slate-500 hover:bg-sky-50 hover:text-blue-600"
                                          >
                                            {prod.name}
                                          </Link>
                                        ))
                                      ) : (
                                        <p className="px-3 py-2 text-xs text-gray-400">
                                          Select a category to view items
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link
              to="/blogs"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 ${
                pathname === "/blogs" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <ArticleIcon sx={{ fontSize: 18 }} />
              <span>Blogs</span>
            </Link>

            {/* Machine Link */}
            {/* <Link
              to="/machine"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 ${
                pathname === "/machine"
                  ? ACTIVE_LINK
                  : MOBILE_INACTIVE
              }`}
            >
              <HealthAndSafetyIcon sx={{ fontSize: 18 }} />
              <span>Machine</span>
            </Link> */}

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 ${
                pathname === "/contact" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <ContactPhoneIcon sx={{ fontSize: 18 }} />
              <span>Contact Us</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
