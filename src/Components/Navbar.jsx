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
const INACTIVE_LINK = "text-gray-700 hover:bg-primary/5 hover:text-primary-dark";
const MOBILE_INACTIVE = "text-gray-700 hover:bg-primary/5";

/**
 * Navbar Component
 * Simple, human-readable navigation header with responsive desktop mega-menu and mobile drawer.
 */
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

  // Helper to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  // Helper to get products or sub-items for the chosen category
  const getCategoryProducts = (category) => {
    if (category === "Surgical Laser") {
      return SURGICAL_LASER_PRODUCTS.map((name) => ({ name, path: "/urology" }));
    }
    if (category === "ENT Laser") return ENT_LASER_SUBTYPES;
    if (category === "Gastro Laser") return GASTRO_LASER_SUBTYPES;
    if (category === "Elmed") return ELMED_SUBTYPES;
    if (category === "Endo Urology UMD Endoscopy") return ENDO_UROLOGY_SUBTYPES;
    return [];
  };

  const currentProducts = getCategoryProducts(selectedCategory);

  return (
    <header className="relative z-50 w-full bg-background px-3 py-4 md:px-5">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
        {/* 1. Website Logo */}
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

        {/* 2. Desktop Navigation Menu */}
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

          {/* Products Mega-Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
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

            {/* Desktop Mega Menu Dropdown Window */}
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.13)] ring-1 ring-gray-100">
                  <div className="grid grid-cols-[1fr_1.15fr_1.7fr]">
                    {/* Column 1: Specialties List */}
                    <div className="border-r border-gray-100 pr-5 space-y-1">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <MedicalServicesIcon sx={{ fontSize: 18 }} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">Specialties</h3>
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
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] transition-all cursor-pointer ${
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

                    {/* Column 2: Categories for selected specialty */}
                    <div className="border-r border-gray-100 px-5 space-y-1">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <AirIcon sx={{ fontSize: 18 }} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">
                          {selectedSpecialty}
                        </h3>
                      </div>

                      {(CATEGORIES[selectedSpecialty] || []).map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onMouseEnter={() => setSelectedCategory(cat)}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[12px] transition-all cursor-pointer ${
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

                    {/* Column 3: Products for chosen category */}
                    <div className="pl-5 space-y-1 max-h-[360px] overflow-y-auto">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-base text-sky-600">✦</span>
                        <h3 className="text-sm font-bold text-gray-800 truncate">
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
                              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] text-gray-600 hover:bg-sky-50 hover:text-blue-600 transition"
                            >
                              <ChevronRightIcon
                                sx={{ fontSize: 14 }}
                                className="text-blue-500 shrink-0"
                              />
                              <span className="truncate">{prod.name}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400 py-3">
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

        {/* 4. Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary/10 lg:hidden cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <CloseIcon sx={{ fontSize: 22 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 22 }} />
          )}
        </button>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary/10 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-1 text-sm font-medium">
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
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 cursor-pointer ${
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
                <div className="ml-4 mt-1 space-y-2 border-l-2 border-primary/20 pl-3">
                  {SPECIALTIES.map((spec) => (
                    <Link
                      key={spec.name}
                      to={spec.path}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary"
                    >
                      {spec.name} Products
                    </Link>
                  ))}
                  {/* <Link
                    to="/machine"
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-xs font-semibold text-primary"
                  >
                    View All Machinery →
                  </Link> */}
                </div>
              )}
            </div>

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

            {/* <Link
              to="/machine"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2.5 rounded-xl px-4 py-3 ${
                pathname === "/machine" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <HealthAndSafetyIcon sx={{ fontSize: 18 }} />
              <span>Machine</span>
            </Link> */}

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
