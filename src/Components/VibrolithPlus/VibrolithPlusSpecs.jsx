import React, { useState } from "react";
import { Wind, Zap, Droplets, ShieldCheck, CheckCircle2 } from "lucide-react";

const VibrolithPlusSpecs = () => {
  const [activeTab, setActiveTab] = useState("pneumatic");

  const pneumaticSpecs = [
    { parameter: "Supply Pressure", value: "3.5 – 6.5 bar (hospital central line or silent compressor)" },
    { parameter: "Pulse Mode", value: "Single pulse or continuous multiple pulses" },
    { parameter: "Pulse Frequency", value: "1 – 12 Hz gradual adjustment" },
    { parameter: "Applied Energy", value: "Fully adjustable pneumatic impact intensity" },
    { parameter: "Energy Transmission", value: "Direct mechanical ballistic wave transmission" },
    { parameter: "Probe Calibers", value: "Manufactured in variable diameters and lengths for endoscopes" },
    { parameter: "Scope Compatibility", value: "Rigid, semi-rigid, and flexible endoscopes" },
    { parameter: "Sterilization", value: "Suitable for Autoclave, Chemical, and Gas sterilization" },
  ];

  const ultrasonicSpecs = [
    { parameter: "Max Ultrasonic Power", value: "150 Watts" },
    { parameter: "Operating Frequency", value: "15 – 24 kHz acoustic vibration" },
    { parameter: "Applied Energy", value: "Continuous micro-adjustable power levels" },
    { parameter: "Thermal Management", value: "Multi-microprocessor real-time anti-overheating feedback" },
    { parameter: "Operating Voltage", value: "220V / 50 Hz (±10%)" },
    { parameter: "Probe Dimensions", value: "Various calibers & lengths matching scope channels" },
    { parameter: "Sterilization", value: "Suitable for Autoclave, Chemical, and Gas sterilization" },
    { parameter: "Coupling Alignment", value: "Instant multi-mode lock with zero probe length calibration" },
  ];

  const suctionSpecs = [
    { parameter: "Suction Pump Mechanism", value: "Integrated peristaltic continuous vacuum pump" },
    { parameter: "Actuation Control", value: "Hands-free 3-mode ergonomic medical foot pedal" },
    { parameter: "Clamping Requirement", value: "Zero manual clamping or unclamping of tubing required" },
    { parameter: "Stone Fragment Reservoir", value: "Specially designed transparent sterile stone collector" },
    { parameter: "Sample Retrieval", value: "Intact fragment harvesting for biochemical and stone analysis" },
    { parameter: "Field Visibility", value: "Continuous endoscopic visualization during high-volume fragmentation" },
    { parameter: "Clinical Target", value: "PCNL, Mini-PCNL, URS, and bladder cystolithotripsy" },
  ];

  const systemSpecs = [
    { parameter: "Regulatory Approvals", value: "FDA Cleared (510k) • CE Marked (CE 1984)" },
    { parameter: "Manufacturer", value: "ELMED Elektronik ve Medikal San. ve Tic. A.Ş. (Turkey & USA)" },
    { parameter: "User Interface", value: "Hi-tech graphical LCD screen with intuitive soft-touch keys" },
    { parameter: "Foot Switch", value: "Heavy-duty 3-pedal unit with color-coded controls & safety bar" },
    { parameter: "Operating Modes", value: "3 Modes: Pneumatic, Ultrasonic, and Simultaneous Combined" },
    { parameter: "Cart Configuration", value: "Mobile trolley with anti-static locking castors & accessory mounts" },
    { parameter: "Maintenance Profile", value: "Maintenance-free solid-state transducers and durable components" },
  ];

  const tabs = [
    { id: "pneumatic", label: "Pneumatic Section", icon: Wind, data: pneumaticSpecs },
    { id: "ultrasonic", label: "Ultrasonic Section", icon: Zap, data: ultrasonicSpecs },
    { id: "suction", label: "Suction & Pump System", icon: Droplets, data: suctionSpecs },
    { id: "system", label: "System & Regulatory", icon: ShieldCheck, data: systemSpecs },
  ];

  const currentData = tabs.find((t) => t.id === activeTab)?.data || pneumaticSpecs;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Technical Data & Standards
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            VIBROLITH PLUS®{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Official engineering specifications for the pneumatic ballistic engine, ultrasonic transducer,
            peristaltic suction system, and clinical compliance data.
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
                    Specification / Value
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
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs text-slate-600 shadow-sm flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="font-bold text-slate-800">Compliance & Registrations:</span>
          <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-primary">
            FDA Cleared (510k)
          </span>
          <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
            CE Marked (CE 1984)
          </span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
            IEC 60601-1 Medical Electrical Safety
          </span>
        </div>
      </div>
    </section>
  );
};

export default VibrolithPlusSpecs;
