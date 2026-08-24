import React, { useState } from "react";

const ProductsPage = ({
  categoryName,
  bannerImage,
  description,
  products = [],
  subCategories = products.map((product) => product.name),
  otherCategories = ["Ortho"],
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* BANNER  */}

      <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[260px]">
        <img
          src={bannerImage}
          alt={`${categoryName} banner`}
          className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {categoryName}
            </h1>

            <div className="mt-3 h-[2px] w-10 bg-primary" />

            <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="w-full bg-white px-4 py-7 sm:px-5 md:px-8 md:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* ================= TOP BAR ================= */}

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Product Count */}

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                ☷
              </div>

              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-medium text-slate-700">
                  1–{products.length}
                </span>{" "}
                of{" "}
                <span className="font-medium text-slate-700">
                  {products.length}
                </span>{" "}
                products
              </p>
            </div>

            {/* Sort + Filter */}

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-slate-200
                  bg-white px-4 py-2.5
                  text-xs font-medium text-slate-600
                  transition hover:border-primary hover:text-primary
                  sm:flex-none
                "
              >
                <span>☷</span>
                Sort by
                <span className="text-slate-400">⌄</span>
              </button>

              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-lg border border-slate-200
                  bg-white px-4 py-2.5
                  text-xs font-medium text-slate-600
                  transition hover:border-primary hover:text-primary
                  sm:flex-none
                "
              >
                <span>▽</span>
                Filter
              </button>
            </div>
          </div>

          {/* ================= SIDEBAR + PRODUCTS ================= */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
            {/* ================= SIDEBAR ================= */}

            <aside className="w-full">
              <div
                className="
                  rounded-xl border border-slate-100
                  bg-white p-4
                  shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                "
              >
                <h2 className="mb-4 text-base font-bold text-slate-800">
                  Categories
                </h2>

                {/* Current Category */}

                <div className="relative mb-2">
                  <div className="absolute -left-4 top-1 h-6 w-[2px] bg-primary" />

                  <button
                    type="button"
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="
                      flex w-full items-center justify-between
                      rounded-md bg-primary/10
                      px-3 py-2 text-left
                    "
                  >
                    <p className="text-[15px] font-semibold text-primary">
                      {categoryName}
                    </p>

                    <span className="text-sm text-primary">
                      {categoryOpen ? "⌃" : "⌄"}
                    </span>
                  </button>
                </div>

                {/* Sub Categories */}

                {categoryOpen && subCategories.length > 0 && (
                  <div className="space-y-1">
                    {subCategories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        onClick={() =>
                          setActiveSubCategory(
                            activeSubCategory === category ? null : category,
                          )
                        }
                        className={`
                          w-full rounded-md px-3 py-2
                          text-left text-sm
                          transition
                          ${
                            activeSubCategory === category
                              ? "bg-primary/10 font-medium text-primary"
                              : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                          }
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}

                {/* Other Categories */}

                <div className="mt-4 space-y-1">
                  {otherCategories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      className="
                        flex w-full items-center justify-between
                        rounded-md px-2 py-2
                        text-left text-sm font-medium
                        text-slate-600
                        transition hover:bg-slate-50 hover:text-primary
                      "
                    >
                      <span>{category}</span>

                      <span className="text-slate-400">›</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ================= PRODUCTS ================= */}

            <div className="min-w-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <div
                    key={`${product.name}-${index}`}
                    className={`
                      group relative min-w-0 overflow-hidden
                      rounded-xl bg-white p-3 sm:p-4
                      shadow-[0_3px_15px_rgba(15,23,42,0.04)]
                      transition duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:shadow-[0_10px_30px_rgba(25,168,232,0.10)]
                      ${
                        activeSubCategory === product.name
                          ? "border border-primary/40 shadow-[0_10px_30px_rgba(25,168,232,0.10)]"
                          : "border border-slate-100"
                      }
                    `}
                  >
                    {/* Product Image */}

                    <div
                      className="
                        flex h-40 items-center justify-center
                        overflow-hidden rounded-lg
                        bg-gradient-to-br
                        from-primary/5 to-primary/10
                        sm:h-52
                        md:h-64
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`
                          h-full w-full object-contain
                          p-2 sm:p-4
                          transition duration-500
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
                        mt-3 line-clamp-2 text-center
                        text-xs font-semibold leading-5
                        text-slate-800
                        sm:mt-4 sm:text-sm
                        md:text-base
                      "
                    >
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* ================= PAGINATION ================= */}

              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-400
                    transition hover:border-primary hover:text-primary
                  "
                >
                  ‹
                </button>

                {[1, 2, 3, 4].map((page) => (
                  <button
                    type="button"
                    key={page}
                    className={`
                      flex h-8 w-8 items-center justify-center
                      rounded-lg border text-xs
                      transition
                      ${
                        page === 1
                          ? "border-primary bg-primary/10 font-semibold text-primary"
                          : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-500
                    transition hover:border-primary hover:text-primary
                  "
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
