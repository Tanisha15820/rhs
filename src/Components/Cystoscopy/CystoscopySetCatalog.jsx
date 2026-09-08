import React, { useState } from "react";
import {
  Package,
  CheckCircle2,
  PhoneCall,
  Search,
  Filter,
  FileText,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const CystoscopySetCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const setItems = [
    {
      itemNo: 1,
      artNo: "253-804-030",
      description: "RZ Cystoscope 4.0mm ⌀, 30° direction of view",
      category: "Optical Telescope",
      qty: "1 pc.",
      isQuoted: true,
    },
    {
      itemNo: 2,
      artNo: "253-300-017",
      description: "Cysto-Urethroscope Sheath 17 Charr.",
      category: "Sheaths & Obturators",
      qty: "1 pc.",
    },
    {
      itemNo: 3,
      artNo: "253-300-022",
      description: "Cysto-Urethroscope Sheath 22 Charr.",
      category: "Sheaths & Obturators",
      qty: "1 pc.",
    },
    {
      itemNo: 4,
      artNo: "253-000-102",
      description: "Bridge with 2 channels for 1 instrument max 12 Charr. or 2 instruments max 8 Charr.",
      category: "Bridges",
      qty: "1 pc.",
    },
    {
      itemNo: 5,
      artNo: "253-000-105",
      description: "Albarran deflecting mechanism with 2 working channels and ratchet",
      category: "Deflecting Mechanisms",
      qty: "1 pc.",
    },
    {
      itemNo: 6,
      artNo: "351-114-107",
      description: "Flexible Grasping Forceps, serrated jaws, double action",
      category: "Endoscopic Instruments",
      qty: "1 pc.",
    },
    {
      itemNo: 7,
      artNo: "351-120-107",
      description: "Biopsy Forceps, oval cup, serrated jaws, double action",
      category: "Endoscopic Instruments",
      qty: "1 pc.",
    },
    {
      itemNo: 8,
      artNo: "351-100-105",
      description: "Scissors, single action",
      category: "Endoscopic Instruments",
      qty: "1 pc.",
    },
    {
      itemNo: 9,
      artNo: "253-420-100",
      description: "Spoon Biopsy Forceps with round cup, double action",
      category: "Endoscopic Instruments",
      qty: "1 pc.",
    },
    {
      itemNo: 10,
      artNo: "253-585-005",
      description: "Dormia Metal Stone Basket, flexible, 4 wires, 600mm working length, 5 Charr.",
      category: "Lithotripsy & Retrieval",
      qty: "1 pc.",
    },
    {
      itemNo: 11,
      artNo: "253-370-005",
      description: "Ball Electrode 530mm working length, 5 Charr.",
      category: "Electrodes & Cables",
      qty: "1 pc.",
    },
    {
      itemNo: 12,
      artNo: "253-370-007",
      description: "Ball Electrode 530mm working length, 7 Charr.",
      category: "Electrodes & Cables",
      qty: "1 pc.",
    },
    {
      itemNo: 13,
      artNo: "253-610-003",
      description: "Monopolar Cable with 8 mm plug for Valleylab HF-unit",
      category: "Electrodes & Cables",
      qty: "1 pc.",
    },
    {
      itemNo: 14,
      artNo: "253-500-000",
      description: "Ellik Evacuator with turn lock connection",
      category: "Evacuators & Irrigation",
      qty: "1 pc.",
    },
    {
      itemNo: 15,
      artNo: "253-000-950",
      description: "Bladder Syringe, 150cc",
      category: "Evacuators & Irrigation",
      qty: "1 pc.",
    },
  ];

  const categories = [
    "All",
    "Optical Telescope",
    "Sheaths & Obturators",
    "Bridges",
    "Deflecting Mechanisms",
    "Endoscopic Instruments",
    "Lithotripsy & Retrieval",
    "Electrodes & Cables",
    "Evacuators & Irrigation",
  ];

  const filteredItems = setItems.filter((item) => {
    const matchesCat = filterCategory === "All" || item.category === filterCategory;
    const matchesSearch =
      item.artNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Complete Adult Instrumentation System
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Cystoscope Set{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              for Adults
            </span>
          </h2>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-mono font-bold text-slate-700">
            <Package className="h-4 w-4 text-primary" />
            <span>Complete Set Article No: 253-900-900</span>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Comprehensive all-in-one surgical cystoscopy tray engineered to support routine
            diagnostic examination, tissue biopsy, stone extraction, and electrocoagulation.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all duration-200 ${
                  filterCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search Article or Description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Catalog Table */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-[#DCE8F4] bg-white shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#102A43] text-white font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-6 w-12 text-center">Item</th>
                  <th className="py-4 px-4 sm:px-6 w-36">Article No.</th>
                  <th className="py-4 px-4 sm:px-6">Description</th>
                  <th className="py-4 px-4 sm:px-6 hidden md:table-cell">Category</th>
                  <th className="py-4 px-4 sm:px-6 text-center w-20">Qty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((row) => (
                  <tr
                    key={row.itemNo}
                    className={`hover:bg-blue-50/40 transition-colors ${
                      row.isQuoted ? "bg-amber-50/40 font-medium" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6 text-center">
                      <span className="flex h-6 w-6 mx-auto items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-bold text-[11px]">
                        {row.itemNo}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-primary">
                      {row.artNo}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                      <div className="flex items-center gap-2">
                        <span>{row.description}</span>
                        {row.isQuoted && (
                          <span className="rounded-full bg-amber-500/10 text-amber-700 border border-amber-300 px-2 py-0.5 text-[9px] font-bold uppercase">
                            Quoted Telescope
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500 hidden md:table-cell">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-center font-bold text-[#102A43]">
                      {row.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Set Summary Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102A43]">
                Full Set Availability for Hospitals & Surgical Centers
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Available for flexible daily, monthly, and per-procedure rental with prompt delivery.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:opacity-95"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CystoscopySetCatalog;
