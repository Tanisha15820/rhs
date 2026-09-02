import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AirIcon from "@mui/icons-material/Air";
import HearingIcon from "@mui/icons-material/Hearing";
import SpaIcon from "@mui/icons-material/Spa";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../assets/images/compressed_rhs_logo.png";

const ACTIVE_LINK = "bg-primary/10 text-primary-dark";

const INACTIVE_LINK =
  "text-gray-700 hover:bg-primary/5 hover:text-primary-dark";

const MOBILE_INACTIVE = "text-gray-700 hover:bg-primary/5";

const SPECIALTIES = [
  {
    name: "ENT",
    icon: HearingIcon,
    defaultCategory: "ENT Products",
    path: "/ent",
  },
  {
    name: "Urology",
    icon: AirIcon,
    defaultCategory: "Surgical Laser",
    path: "/urology",
  },
  { name: "Gastro", icon: SpaIcon, defaultCategory: "Gastro Products", path: "/gastro" },
];

const CATEGORIES = {
  ENT: ["ENT Products", "ENT Endoscopy"],
  Urology: [
    "Surgical Laser",
    "Urodynamic System & Uroflowmetry",
    "ESWL Lithotripsy",
    "Endo Urology UMD Endoscopy",
  ],
  Gastro: ["Gastro Products", "Gastro Endoscopy", "Gastro Laser"],
};

const SURGICAL_LASER_PRODUCTS = [
  "DK 30 WATT",
  "THULIUM FIBER LASER 60 WATT",
  "LITHO 35 WATT",
  "CYBER TM 150 WATT",
  "LITHO EVO 35 WATT",
  "CYBER TM 200 WATT",
  "LITHO EVO 60 WATT",
  "LATEST TECHNOLOGY MAGNETO 100 WATT",
  "CYBER HO 100 WATT",
  "LATEST TECHNOLOGY MAGNETO 150 WATT",
  "CYBER HO 150 WATT",
];

const ENT_LASER_SUBTYPES = [
  {
    name: "Smartxide2 Trio",
    path: "/smartxide",
  },
  {
    name: "SmartXide Touch SurgiCO",
    path: "/smartxide-touch",
  },
];

const GASTRO_LASER_SUBTYPES = [
  {
    name: "LITHO 35 WATT",
    path: "/litho35watt",
  },
  {
    name: "LITHO EVO 35 WATT",
    path: "/lithoevo35watt",
  },
];

const Navbar = () => {
  // Mobile menu open/close
  const [mobileMenu, setMobileMenu] = useState(false);

  // Products mega menu open/close
  const [productsOpen, setProductsOpen] = useState(false);

  // Which speciality is selected
  const [selectedSpecialty, setSelectedSpecialty] = useState("ENT");

  // Which category is selected
  const [selectedCategory, setSelectedCategory] = useState("ENT Laser");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // check active page

  const isProducts =
    pathname === "/urology" || pathname.startsWith("/products");

  // close mobile menu

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setProductsOpen(false);
  };

  return (
    <header className="w-full bg-background px-3 py-4 md:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
        {/* LOGO*/}

        <a href="/" className="flex items-center gap-3">
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
        </a>

        {/* DESKTOP NAVIGATION*/}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* HOME */}

          <a
            href="/"
            className={`flex items-center gap-1.5 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            <span>Home</span>
          </a>

          {/*  PRODUCTS */}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            {/* Products Button */}

            <button
              type="button"
              onClick={() => setProductsOpen((previous) => !previous)}
              className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
                isProducts ? ACTIVE_LINK : INACTIVE_LINK
              }`}
            >
              <span>Products</span>

              <KeyboardArrowDownIcon
                sx={{ fontSize: 15 }}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* PRODUCTS MEGA MENU*/}

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.13)] ring-1 ring-gray-100">
                  <div className="grid grid-cols-[1fr_1.15fr_1.7fr]">
                    {/* COLUMN 1  SPECIALITIES */}

                    <div className="border-r border-gray-100 pr-5">
                      {/* Heading */}

                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                          <MedicalServicesIcon sx={{ fontSize: 20 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          Specialities
                        </h3>
                      </div>

                      {/*  ENT */}

                      <button
                        type="button"
                        onMouseEnter={() => {
                          setSelectedSpecialty("ENT");
                          setSelectedCategory("ENT Products");
                        }}
                        onClick={() => navigate("/ent")}
                        className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[13px] transition-all ${
                          selectedSpecialty === "ENT"
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <HearingIcon
                            sx={{ fontSize: 19 }}
                            className={
                              selectedSpecialty === "ENT"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }
                          />
                          ENT
                        </span>

                        <ChevronRightIcon sx={{ fontSize: 17 }} />
                      </button>

                      {/*  UROLOGY  */}

                      <button
                        type="button"
                        onMouseEnter={() => {
                          setSelectedSpecialty("Urology");
                          setSelectedCategory("Surgical Laser");
                        }}
                        onClick={() => navigate("/urology")}
                        className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[13px] transition-all ${
                          selectedSpecialty === "Urology"
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <AirIcon
                            sx={{ fontSize: 19 }}
                            className={
                              selectedSpecialty === "Urology"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }
                          />
                          Urology
                        </span>

                        <ChevronRightIcon
                          sx={{ fontSize: 17 }}
                          className="text-blue-500"
                        />
                      </button>

                      {/*GASTRO*/}

                      <button
                        type="button"
                        onMouseEnter={() => {
                          setSelectedSpecialty("Gastro");
                          setSelectedCategory("Gastro Products");
                        }}
                        onClick={() => navigate("/gastro")}
                        className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[13px] transition-all ${
                          selectedSpecialty === "Gastro"
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <SpaIcon
                            sx={{ fontSize: 19 }}
                            className={
                              selectedSpecialty === "Gastro"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }
                          />
                          Gastro
                        </span>

                        <ChevronRightIcon sx={{ fontSize: 17 }} />
                      </button>
                    </div>

                    {/* COLUMN 2  CATEGORIES */}

                    <div className="border-r border-gray-100 px-5">
                      {/* Heading */}

                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                          <AirIcon sx={{ fontSize: 20 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          {selectedSpecialty}
                        </h3>
                      </div>

                      {/* ENT CATEGORIES */}

                      {selectedSpecialty === "ENT" && (
                        <>
                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("ENT Laser")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "ENT Laser"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>ENT Laser</span>

                            <ChevronRightIcon
                              sx={{ fontSize: 17 }}
                              className={
                                selectedCategory === "ENT Laser"
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }
                            />
                          </button>

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("ENT Endoscopy")
                            }
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] text-gray-600 hover:bg-gray-50"
                          >
                            <span>ENT HEAD & NECK ONCOLOGY</span>

                            <ChevronRightIcon sx={{ fontSize: 17 }} />
                          </button>
                        </>
                      )}

                      {/*  UROLOGY CATEGORIES */}

                      {selectedSpecialty === "Urology" && (
                        <>
                          {/* Surgical Laser */}

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("Surgical Laser")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "Surgical Laser"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>Surgical Laser</span>

                            <ChevronRightIcon
                              sx={{ fontSize: 17 }}
                              className={
                                selectedCategory === "Surgical Laser"
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }
                            />
                          </button>

                          {/* Urodynamic */}

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory(
                                "Urodynamic System & Uroflowmetry",
                              )
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory ===
                              "Urodynamic System & Uroflowmetry"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>Urodynamic System & Uroflowmetry</span>

                            <ChevronRightIcon sx={{ fontSize: 17 }} />
                          </button>

                          {/* ESWL */}

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("ESWL Lithotripsy")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "ESWL Lithotripsy"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>ESWL Lithotripsy</span>
                            <ChevronRightIcon sx={{ fontSize: 17 }} />
                          </button>

                          {/* Endo Urology */}

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("Endo Urology UMD Endoscopy")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "Endo Urology UMD Endoscopy"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>Endo Urology UMD Endoscopy</span>

                            <ChevronRightIcon sx={{ fontSize: 17 }} />
                          </button>
                        </>
                      )}

                      {/*  GASTRO CATEGORIES */}

                      {selectedSpecialty === "Gastro" && (
                        <>
                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("Gastro Products")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "Gastro Products"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>Gastro Products</span>

                            <ChevronRightIcon
                              sx={{ fontSize: 17 }}
                              className={
                                selectedCategory === "Gastro Products"
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }
                            />
                          </button>

                          <button
                            type="button"
                            onMouseEnter={() =>
                              setSelectedCategory("Gastro Laser")
                            }
                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[12px] transition-all ${
                              selectedCategory === "Gastro Laser"
                                ? "bg-blue-50 font-semibold text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <span>Gastro Laser</span>

                            <ChevronRightIcon
                              sx={{ fontSize: 17 }}
                              className={
                                selectedCategory === "Gastro Laser"
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }
                            />
                          </button>
                        </>
                      )}
                    </div>

                    {/*  COLUMN 3  PRODUCTS */}

                    <div className="pl-5">
                      {/* Heading */}

                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                          <span className="text-lg">✦</span>
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          {selectedCategory}
                        </h3>
                      </div>

                      {/* SURGICAL LASER PRODUCTS */}

                      {selectedCategory === "Surgical Laser" && (
                        <div className="grid grid-cols-1 gap-x-4">
                          {/* Product 1 */}

                          <a
                            href=""
                            className="group flex items-start gap-1 py-2 text-[11px] leading-4 text-gray-600 transition-colors hover:text-blue-600"
                          >
                            <ChevronRightIcon
                              sx={{ fontSize: 15 }}
                              className="mt-0.5 shrink-0 text-blue-500"
                            />
                            DK 30 WATT
                          </a>

                          {/* Product 2 */}

                          <a
                            href=""
                            className="group flex items-start gap-1 py-2 text-[11px] leading-4 text-gray-600 transition-colors hover:text-blue-600"
                          >
                            <ChevronRightIcon
                              sx={{ fontSize: 15 }}
                              className="mt-0.5 shrink-0 text-blue-500"
                            />
                            THULIUM FIBER LASER 60 WATT
                          </a>
                        </div>
                      )}

                      {/* ENT LASER SUBTYPES */}

                      {selectedCategory === "ENT Laser" && (
                        <div className="grid grid-cols-1 gap-x-4">
                          {ENT_LASER_SUBTYPES.map((subtype) => (
                            <a
                              key={subtype.name}
                              href={subtype.path}
                              className="group flex items-start gap-1 py-2 text-[12px] leading-4 text-gray-600 transition-colors hover:text-blue-600"
                            >
                              <ChevronRightIcon
                                sx={{ fontSize: 15 }}
                                className="mt-0.5 shrink-0 text-blue-500"
                              />
                              {subtype.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* GASTRO LASER SUBTYPES */}

                      {selectedCategory === "Gastro Products" && (
                        <div className="grid grid-cols-1 gap-x-4">
                          <a
                            href="/gastro"
                            className="group flex items-start gap-1 py-2 text-[12px] leading-4 text-gray-600 transition-colors hover:text-blue-600"
                          >
                            <ChevronRightIcon
                              sx={{ fontSize: 15 }}
                              className="mt-0.5 shrink-0 text-blue-500"
                            />
                            View All Gastro Products
                          </a>
                        </div>
                      )}

                      {selectedCategory === "Gastro Laser" && (
                        <div className="grid grid-cols-1 gap-x-4">
                          {GASTRO_LASER_SUBTYPES.map((subtype) => (
                            <a
                              key={subtype.name}
                              href={subtype.path}
                              className="group flex items-start gap-1 py-2 text-[12px] leading-4 text-gray-600 transition-colors hover:text-blue-600"
                            >
                              <ChevronRightIcon
                                sx={{ fontSize: 15 }}
                                className="mt-0.5 shrink-0 text-blue-500"
                              />
                              {subtype.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*  BLOGS */}

          <a
            href="/blogs"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/blogs" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            <span>Blogs</span>
          </a>

          {/*  SERVICES */}

          <a
            href="/services"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            <span>Services</span>

            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* CLIENTS */}

          <a
            href="/patients"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            <span>Clients</span>

            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/*  CONTACT */}

          <a
            href="/contact"
            className={`rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            Contact Us
          </a>
        </nav>

        {/*  DESKTOP RIGHT SIDE*/}

        <div className="hidden items-center gap-2.5 lg:flex">
          {/* GET A QUOTE */}

          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <CalendarMonthIcon sx={{ fontSize: 16 }} />

            <span>Get a Quote</span>
          </button>

          {/* SEARCH */}

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
            aria-label="Search"
          >
            <SearchIcon sx={{ fontSize: 22 }} />
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setMobileMenu((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10 lg:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? (
            <CloseIcon sx={{ fontSize: 24 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 24 }} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary/10 lg:hidden">
          <nav className="flex flex-col gap-1">
            {/* -------------------------------------------------
                HOME
            ------------------------------------------------- */}

            <a
              href="/"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-semibold ${
                pathname === "/" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              Home
            </a>

            {/* -------------------------------------------------
                PRODUCTS
            ------------------------------------------------- */}

            <div>
              <button
                type="button"
                onClick={() => setProductsOpen((previous) => !previous)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                  isProducts ? ACTIVE_LINK : MOBILE_INACTIVE
                }`}
              >
                <span className="flex items-center gap-2">
                  <MedicalServicesIcon sx={{ fontSize: 20 }} />
                  Products
                </span>

                <KeyboardArrowDownIcon
                  sx={{ fontSize: 20 }}
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MOBILE PRODUCT SUBMENU */}

              {productsOpen && (
                <div className="ml-4 mt-1 space-y-2 border-l-2 border-primary/10 pl-3">
                  {/* SPECIALITIES */}

                  <div className="rounded-xl bg-gray-50/70 py-2">
                    {SPECIALTIES.map(
                      ({ name, icon: Icon, defaultCategory, path }) => (
                        <button
                          key={name}
                          type="button"
                          onClick={() => {
                            setSelectedSpecialty(name);
                            setSelectedCategory(defaultCategory);

                            if (path) {
                              navigate(path);
                              closeMobileMenu();
                            }
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                            selectedSpecialty === name
                              ? "bg-primary/10 text-primary"
                              : "text-gray-800 hover:text-primary"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Icon
                              sx={{ fontSize: 18 }}
                              className={
                                selectedSpecialty === name
                                  ? "text-primary"
                                  : "text-gray-500"
                              }
                            />
                            {name}
                          </span>

                          <ChevronRightIcon
                            sx={{ fontSize: 16 }}
                            className={
                              selectedSpecialty === name
                                ? "text-primary"
                                : "text-gray-400"
                            }
                          />
                        </button>
                      ),
                    )}
                  </div>

                  {/* CATEGORIES */}

                  <div className="rounded-xl bg-gray-50/70 py-2">
                    <p className="mb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {selectedSpecialty}
                    </p>

                    {(CATEGORIES[selectedSpecialty] || []).map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-gray-600 hover:text-primary"
                        }`}
                      >
                        {category}

                        <ChevronRightIcon
                          sx={{ fontSize: 16 }}
                          className={
                            selectedCategory === category
                              ? "text-primary"
                              : "text-gray-400"
                          }
                        />
                      </button>
                    ))}
                  </div>

                  {/* PRODUCTS */}

                  <div className="rounded-xl bg-gray-50/70 py-2">
                    <p className="mb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {selectedCategory}
                    </p>

                    {selectedCategory === "Surgical Laser" &&
                      SURGICAL_LASER_PRODUCTS.map((product) => (
                        <a
                          key={product}
                          href="/urology"
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                        >
                          {product}
                        </a>
                      ))}

                    {selectedCategory === "ENT Laser" &&
                      ENT_LASER_SUBTYPES.map((subtype) => (
                        <a
                          key={subtype.name}
                          href={subtype.path}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                        >
                          {subtype.name}
                        </a>
                      ))}

                    {selectedCategory === "Gastro Laser" &&
                      GASTRO_LASER_SUBTYPES.map((subtype) => (
                        <a
                          key={subtype.name}
                          href={subtype.path}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                        >
                          {subtype.name}
                        </a>
                      ))}

                    {selectedCategory !== "Surgical Laser" &&
                      selectedCategory !== "ENT Laser" &&
                      selectedCategory !== "Gastro Laser" && (
                        <>
                          <a
                            href="/urology"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                          >
                            View {selectedCategory}
                          </a>

                          <a
                            href="/urology"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                          >
                            Explore Products
                          </a>
                        </>
                      )}
                  </div>
                </div>
              )}
            </div>

            {/* -------------------------------------------------
                BLOGS
            ------------------------------------------------- */}

            <a
              href="/blogs"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium ${
                pathname === "/blogs" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <ArticleIcon sx={{ fontSize: 20 }} />
              Blogs
            </a>

            {/* -------------------------------------------------
                SERVICES
            ------------------------------------------------- */}

            <a
              href="/services"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <HealthAndSafetyIcon sx={{ fontSize: 20 }} />
              Services
            </a>

            {/* -------------------------------------------------
                CLIENTS
            ------------------------------------------------- */}

            <a
              href="/patients"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <PeopleIcon sx={{ fontSize: 20 }} />
              Clients
            </a>

            {/* -------------------------------------------------
                CATALOGUES
            ------------------------------------------------- */}

            <a
              href="/resources"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ArticleIcon sx={{ fontSize: 20 }} />
              Catalogues
            </a>

            {/* -------------------------------------------------
                CONTACT
            ------------------------------------------------- */}

            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ContactPhoneIcon sx={{ fontSize: 20 }} />
              Contact Us
            </a>

            {/* -------------------------------------------------
                GET A QUOTE
            ------------------------------------------------- */}

            <button
              type="button"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/30"
            >
              <CalendarMonthIcon sx={{ fontSize: 20 }} />
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
