import React, { useState } from "react";
import { Zap, Radio, Move, Bot, ShieldCheck } from "lucide-react";

const MultimedSpecs = () => {
  const [activeTab, setActiveTab] = useState("generator");

  const generatorSpecs = [
    { parameter: "Energy Source", value: "Electro-Magnetic System (1,000,000 shock warranty)" },
    { parameter: "Focusing Mechanism", value: "Acoustic Lens" },
    { parameter: "Patient Coupling", value: "Silicone Membrane (Dry Coupling)" },
    { parameter: "Localization", value: "Fluoroscopy (X-Ray) and / or Ultrasound" },
    { parameter: "Focal Distance", value: "130 mm (expandable up to 160 mm)" },
    { parameter: "Focal Dimensions", value: "7 mm x 66 mm (50% isobar dimension)" },
    { parameter: "Focal Pressure", value: "Up to 70 MPa" },
    { parameter: "Operating Voltage", value: "Max 12 levels (Max 15 kV – 21 kV optional)" },
    { parameter: "Frequency", value: "Variable 40 to 150 shocks/minute" },
    { parameter: "Energy Density", value: "6 – 60 mJ" },
    { parameter: "Triggering Modes", value: "Automatic & Manual (EKG & Respiration synchronised)" },
    { parameter: "Water System", value: "Closed loop circuit, 8.5L with degassing, heated 30°C–36°C" },
    { parameter: "Dimensions & Weight", value: "1200 mm (H) x 930 mm (L) x 700 mm (W) — 200 kg" },
  ];

  const fluoroscopySpecs = [
    { parameter: "Generator Power", value: "3.5 kW (5 kW, 15 kW, 18 kW HF generator optional)" },
    { parameter: "Fluoroscopy Voltage", value: "40 – 110 kV automatic brightness control (40–120 kV opt.)" },
    { parameter: "Fluoroscopy Current", value: "0.5 – 3.5 mA (ABC automatic control)" },
    { parameter: "Image Intensifier", value: "9 inch (12 inch optional)" },
    { parameter: "X-Ray Tube", value: "Monoblock fixed anode dual focus (0.6–1.8 mm, rotating anode opt.)" },
    { parameter: "Anode Heat Capacity", value: "40 kHU (200 kHU rotating anode optional)" },
    { parameter: "TV Camera", value: "High-resolution CCD Camera (1024 x 1024)" },
    { parameter: "Medical Monitor", value: "19 inch high-contrast B/W (TFT, LCD, Color optional)" },
    { parameter: "Image Memory & Storage", value: "Last Image Hold (LIH), 4–128 image memory, DICOM 3.0" },
    { parameter: "Dimensions & Weight", value: "2010 mm (H) x 1380 mm (L) x 500 mm (W) — 225 kg" },
  ];

  const tableSpecs = [
    { parameter: "Height Range", value: "850 – 1150 mm motorized" },
    { parameter: "Patient Surface Area", value: "600 mm x 2430 mm (radiolucent carbon-fiber)" },
    { parameter: "Weight & Lifting Capacity", value: "155 kg tare / 200 kg lifting capacity" },
    { parameter: "Motorized Movement", value: "6-way electric motor in all dimensions" },
    { parameter: "Vertical Stroke", value: "300 mm" },
    { parameter: "Longitudinal Stroke", value: "150 mm" },
    { parameter: "Lateral Stroke", value: "150 mm" },
    { parameter: "Tilting Range", value: "Motorized Trendelenburg and lateral tilt" },
  ];

  const roboticSpecs = [
    { parameter: "Manipulator Type", value: "Revolute Type Articulated Robotic Arm" },
    { parameter: "End Effector", value: "Ultrasound Probe Holder" },
    { parameter: "Kinematic Parameters", value: "7 links, 6 joints, 5 angles" },
    { parameter: "Angle Sensors", value: "Precision resistive angle sensors" },
    { parameter: "Operating Software", value: "Windows-based computerized targeting" },
    { parameter: "Ultrasonography Probe", value: "Compatible with 3.5 MHz convex probe of any ultrasound" },
    { parameter: "Compatibility", value: "Can be adapted to all ESWL lithotripters" },
  ];

  const tabs = [
    { id: "generator", label: "Shockwave Generator", icon: Zap, data: generatorSpecs },
    { id: "fluoroscopy", label: "U-Arm Fluoroscopy", icon: Radio, data: fluoroscopySpecs },
    { id: "table", label: "Treatment Table", icon: Move, data: tableSpecs },
    { id: "robotics", label: "LITHOARM Robotics", icon: Bot, data: roboticSpecs },
  ];

  const currentData = tabs.find((t) => t.id === activeTab)?.data || generatorSpecs;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Comprehensive System Data
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            MULTIMED EM{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Detailed engineering specifications for the shock generator, fluoroscopy imaging,
            motorized treatment table, and robotic ultrasound localization.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Specs Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm sm:w-1/3">
                    Parameter
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm sm:w-2/3">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {currentData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-blue-50/30 odd:bg-slate-50/20"
                  >
                    <td className="py-3.5 px-6 font-semibold text-slate-800">
                      {item.parameter}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 font-medium">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Standards Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs text-slate-500 shadow-sm">
          <span className="font-bold text-slate-700">Standards & Compliance:</span>{" "}
          CE Marked (CE 1984) • IEC 60601-1 Class 1, Type B • 93/42/EEC Class IIb Medical Device Directive
        </div>
      </div>
    </section>
  );
};

export default MultimedSpecs;
