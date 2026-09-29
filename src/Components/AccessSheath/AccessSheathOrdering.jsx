import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileSpreadsheet,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
} from "lucide-react";
import sizesImg from "../../assets/images/access_sheath_sizes.png";

const AccessSheathOrdering = () => {
  const [filterDiameter, setFilterDiameter] = useState("all");

  const orderingTable = [
    {
      model: "Y-09-40",
      itemCode: "2407B-PA027",
      sheathInner: "9Fr",
      outerDiameter: "11Fr",
      length: "40cm",
      category: "Slim Access",
    },
    {
      model: "Y-09-50",
      itemCode: "2407B-PA028",
      sheathInner: "9Fr",
      outerDiameter: "11Fr",
      length: "50cm",
      category: "Slim Access",
    },
    {
      model: "Y-10-40",
      itemCode: "2407B-PA006",
      sheathInner: "10Fr",
      outerDiameter: "12Fr",
      length: "40cm",
      category: "Standard RIRS",
    },
    {
      model: "Y-10-50",
      itemCode: "2407B-PA012",
      sheathInner: "10Fr",
      outerDiameter: "12Fr",
      length: "50cm",
      category: "Standard RIRS",
    },
    {
      model: "Y-11-40",
      itemCode: "2407B-PA003",
      sheathInner: "11Fr",
      outerDiameter: "13Fr",
      length: "40cm",
      category: "High Aspiration",
    },
    {
      model: "Y-11-50",
      itemCode: "2407B-PA002",
      sheathInner: "11Fr",
      outerDiameter: "13Fr",
      length: "50cm",
      category: "High Aspiration",
    },
    {
      model: "Y-12-40",
      itemCode: "2407B-PA010",
      sheathInner: "12Fr",
      outerDiameter: "14Fr",
      length: "40cm",
      category: "Mega Clearance",
    },
    {
      model: "Y-12-50",
      itemCode: "2407B-PA001",
      sheathInner: "12Fr",
      outerDiameter: "14Fr",
      length: "50cm",
      category: "Mega Clearance",
    },
  ];

  const filtered =
    filterDiameter === "all"
      ? orderingTable
      : orderingTable.filter((item) =>
          item.sheathInner.includes(filterDiameter)
        );

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>ORDERING & PRODUCT MATRIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Ordering{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Information
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6"
          >
            Available in working lengths of 40/45/50/55 cm and diameters of 8.5/10.5, 9/11, 10/12, 11/13, and 12/14 Fr, yielding 20 flexible clinical combinations.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["all", "9Fr", "10Fr", "11Fr", "12Fr"].map((val) => (
            <button
              key={val}
              onClick={() => setFilterDiameter(val)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                filterDiameter === val
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {val === "all" ? "All Diameters" : `Inner ${val}`}
            </button>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Table Container */}
          <div className="overflow-hidden rounded-2xl border border-blue-200/80 bg-white shadow-lg shadow-blue-900/5 lg:col-span-8">
            {/* Table Header Bar */}
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#2563EB] px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                    SINGLE-USE URETERAL ACCESS SHEATH
                  </span>
                  <h3 className="text-lg font-bold tracking-wide">
                    Ordering Specifications
                  </h3>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  {filtered.length} Items Listed
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-blue-100 bg-blue-50/60 text-slate-700">
                    <th className="py-3 px-4 font-bold">Model</th>
                    <th className="py-3 px-4 font-bold">Item Code</th>
                    <th className="py-3 px-4 font-bold">Sheath Inner (I.D.)</th>
                    <th className="py-3 px-4 font-bold">Outer Diameter (O.D.)</th>
                    <th className="py-3 px-4 font-bold">Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {filtered.map((item, idx) => (
                    <tr
                      key={item.model}
                      className={`transition-colors hover:bg-blue-50/40 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="py-3.5 px-4 font-bold text-primary">
                        {item.model}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-600">
                        {item.itemCode}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {item.sheathInner}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {item.outerDiameter}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {item.length}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-slate-50/90 px-5 py-3 text-xs text-slate-500 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>* Additional custom lengths (45cm & 55cm) and ultra-slim 8.5/10.5Fr available upon request.</span>
              <span className="font-semibold text-primary">RESD ≤ 0.85 compliant</span>
            </div>
          </div>

          {/* Right Card: Available in Multiple Sizes Graphic */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 p-5 shadow-md text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary mb-3">
                <Package className="h-3.5 w-3.5" />
                <span>CROSS-SECTION DIAMETERS</span>
              </div>

              <h4 className="text-base font-extrabold text-slate-900">
                Multiple Caliber Profiles
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Optimized inner-to-outer diameter ratio
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-inner">
                <img
                  src={sizesImg}
                  alt="Ureteral Access Sheath Multiple Sizes 9/11F 10/12F 11/13F 12/14F"
                  className="w-full h-auto object-contain select-none"
                />
              </div>

              <div className="mt-4 space-y-2 text-left text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
                  <span className="font-bold text-slate-700">9/11 Fr</span>
                  <span className="text-slate-500">Ultra-slim pediatric / narrow ureter</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
                  <span className="font-bold text-slate-700">10/12 Fr</span>
                  <span className="text-slate-500">Standard adult diagnostic & dust</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
                  <span className="font-bold text-slate-700">11/13 Fr</span>
                  <span className="text-slate-500">Active aspiration & large calculi</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
                  <span className="font-bold text-slate-700">12/14 Fr</span>
                  <span className="text-slate-500">High-volume negative pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSheathOrdering;
