import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  Package,
} from "lucide-react";

const CATEGORY_ROUTES = {
  "CO2 Surgical Laser": "/ent-laser",
  "ENT, Head & Neck Oncology": "/ent",
  ELMED: "/elmed",
  RZ: "/rz",
  Morcellator: "/morcellator",
  "Gastro Laser": "/gastro-laser",
  "Gastro Endoscopy": "/gastro-endoscopy",
  "Surgical Laser": "/urology-surgical-laser",
  "Urodynamic System & Uroflowmetry": "/urology-urodynamic",
  "ESWL Lithotripsy": "/urology-eswl",
  "Endo Urology UMD Endoscopy": "/urology-endo",
};

const ProductsPage = ({
  categoryName,
  bannerImage,
  description,
  products = [],
  subCategories = products.map((product) => product.name),
  otherCategories = ["ENT, Urology, Gastro"],
}) => {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* ================= BANNER ================= */}

      <section className="relative h-[200px] w-full overflow-hidden sm:h-[240px] md:h-[280px] lg:h-[320px]">
        <img
          src={bannerImage}
          alt={`${categoryName} banner`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
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
              Reinforce Healthcare
            </motion.p>

            <motion.h1
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {categoryName}
            </motion.h1>

            <motion.div
              className="mt-3 h-[2px] w-10 bg-gradient-to-r from-primary to-primary-dark"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />

            <motion.p
              className="mt-4 max-w-md text-xs leading-5 text-slate-600 sm:text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="w-full bg-white px-4 py-7 sm:px-5 md:px-8 md:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* ================= TOP BAR ================= */}

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Package className="h-4 w-4" />
              </div>

              <p className="text-sm text-slate-500">
                {products.length > 0 ? "Showing" : "Categories"}{" "}
                {products.length > 0 && (
                  <>
                    <span className="font-semibold text-slate-700">
                      1–{products.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-700">
                      {products.length}
                    </span>{" "}
                  </>
                )}
                {products.length > 0 ? "products" : "available"}
              </p>
            </motion.div>

            <motion.div
              className="flex w-full items-center gap-3 sm:w-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-slate-200
                  bg-white px-4 py-2.5
                  text-xs font-medium text-slate-600
                  transition
                  hover:border-primary hover:bg-primary/5 hover:text-primary
                  sm:flex-none
                "
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Sort by
              </button>

              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-slate-200
                  bg-white px-4 py-2.5
                  text-xs font-medium text-slate-600
                  transition
                  hover:border-primary hover:bg-primary/5 hover:text-primary
                  sm:flex-none
                "
              >
                <Search className="h-3.5 w-3.5" />
                Filter
              </button>
            </motion.div>
          </div>

          {/* ================= SIDEBAR + PRODUCTS ================= */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
            {/* ================= SIDEBAR ================= */}

            <aside className="w-full">
              <motion.div
                className="
                  sticky top-24
                  rounded-2xl border border-slate-100
                  bg-white p-5
                  shadow-[0_4px_24px_rgba(15,23,42,0.05)]
                "
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mb-4 text-base font-bold text-slate-800">
                  Categories
                </h2>

                {/* Current Category (Active) */}

                <div className="relative mb-3">
                  <div className="absolute -left-5 top-1 h-6 w-[3px] rounded-full bg-gradient-to-b from-primary to-primary-dark" />

                  <button
                    type="button"
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="
                      flex w-full items-center justify-between
                      rounded-xl bg-gradient-to-r from-primary/10 to-primary/5
                      px-4 py-2.5 text-left
                      transition-all duration-200
                      hover:from-primary/15 hover:to-primary/10
                    "
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
                        <LayoutGrid className="h-3.5 w-3.5" />
                      </div>

                      <p className="text-sm font-semibold text-primary">
                        {categoryName}
                      </p>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 text-primary transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Sub Categories */}

                {categoryOpen && subCategories.length > 0 && (
                  <motion.div
                    className="mb-3 space-y-1 pl-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    {subCategories.map((category) => {
                      const productLink = products.find(
                        (product) => product.name === category,
                      )?.link;

                      const buttonContent = (
                        <>
                          {category}
                        </>
                      );

                      const buttonClasses = `
                        w-full rounded-lg px-3 py-2
                        text-left text-[13px]
                        transition-all duration-200
                        ${
                          activeSubCategory === category
                            ? "bg-primary/10 font-semibold text-primary shadow-sm"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                        }
                      `;

                      return productLink ? (
                        <Link
                          key={category}
                          to={productLink}
                          className={buttonClasses}
                        >
                          {buttonContent}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          key={category}
                          onClick={() =>
                            setActiveSubCategory(
                              activeSubCategory === category ? null : category,
                            )
                          }
                          className={buttonClasses}
                        >
                          {buttonContent}
                        </button>
                      );
                    })}
                  </motion.div>
                )}

                {/* Divider */}

                <div className="my-3 border-t border-slate-100" />

                {/* Other Categories */}

                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Other Categories
                </p>

                <div className="space-y-1">
                  {otherCategories.map((category) => {
                    const categoryLink = CATEGORY_ROUTES[category];

                    const linkClasses = `
                      flex w-full items-center justify-between
                      rounded-lg px-3 py-2.5
                      text-left text-sm font-medium
                      text-slate-600
                      transition-all duration-200
                      hover:bg-slate-50 hover:text-primary
                    `;

                    return categoryLink ? (
                      <Link
                        key={category}
                        to={categoryLink}
                        className={linkClasses}
                      >
                        <span>{category}</span>

                        <ChevronRight className="h-4 w-4 text-slate-300 transition-colors hover:text-primary" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        key={category}
                        className={linkClasses}
                      >
                        <span>{category}</span>

                        <ChevronRight className="h-4 w-4 text-slate-300" />
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </aside>

            {/* ================= PRODUCTS ================= */}

            <div className="min-w-0">
              {products.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <motion.div
                    key={`${product.name}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`
                      group relative min-w-0 overflow-hidden
                      rounded-2xl bg-white p-4
                      shadow-[0_3px_18px_rgba(15,23,42,0.05)]
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_14px_40px_rgba(25,168,232,0.14)]
                      ${
                        activeSubCategory === product.name
                          ? "border-2 border-primary/40 shadow-[0_14px_40px_rgba(25,168,232,0.14)]"
                          : "border border-slate-100"
                      }
                    `}
                  >
                    <Link to={product.link} className="block">
                      {/* Hover Accent Line */}

                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Product Image */}

                      <div
                        className="
                          flex h-44 items-center justify-center
                          overflow-hidden rounded-xl
                          bg-gradient-to-br
                          from-primary/5 via-white to-primary/10
                          sm:h-52
                          md:h-64
                        "
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`
                            h-full w-full object-contain
                            p-3 sm:p-5
                            transition-transform duration-500
                            group-hover:scale-110
                            ${
                              activeSubCategory === product.name
                                ? "scale-110"
                                : ""
                            }
                          `}
                        />
                      </div>

                      {/* Product Name */}

                      <h3
                        className="
                          mt-4 line-clamp-2 text-center
                          text-sm font-semibold leading-5
                          text-slate-800
                          transition-colors duration-300
                          group-hover:text-primary-dark
                          sm:mt-5
                          md:text-base
                        "
                      >
                        {product.name}
                      </h3>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* ================= PAGINATION ================= */}

              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-400
                    transition
                    hover:border-primary hover:bg-primary/5 hover:text-primary
                  "
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {[1, 2, 3, 4].map((page) => (
                  <button
                    type="button"
                    key={page}
                    className={`
                      flex h-9 w-9 items-center justify-center
                      rounded-lg border text-xs font-medium
                      transition-all duration-200
                      ${
                        page === 1
                          ? "border-primary bg-gradient-to-br from-primary to-primary-dark text-white shadow-sm shadow-primary/25"
                          : "border-slate-200 text-slate-600 hover:border-primary hover:bg-primary/5 hover:text-primary"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-500
                    transition
                    hover:border-primary hover:bg-primary/5 hover:text-primary
                  "
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
                </>
              ) : (
                <motion.div
                  className="
                    flex flex-col items-center justify-center
                    rounded-2xl border border-dashed border-primary/25
                    bg-gradient-to-br from-primary/5 via-white to-primary/5
                    px-6 py-20 text-center
                  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Package className="h-7 w-7" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-800">
                    No products listed yet
                  </h3>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
                    Explore related categories from the sidebar to discover more
                    equipment available for rental.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;