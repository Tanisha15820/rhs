import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import footswitchImg from "../../assets/images/litho35_footswitch.png";
import screenImg from "../../assets/images/litho35_screen.jpg";

const Litho35Specs = () => {
  const [activeTab, setActiveTab] = useState("compare");

  const specs = [
    { label: "Average Power", model30: "30 W", model35: "35 W", highlight: true },
    { label: "Repetition Rate", model30: "3 ÷ 25 Hz", model35: "3 ÷ 30 Hz", highlight: true },
    { label: "Energy per Pulse", model30: "0.2 ÷ 4 J", model35: "0.1 ÷ 5 J", highlight: true },
    { label: "Wavelength", model30: "2.1 µm (2100 nm)", model35: "2.1 µm (2100 nm)" },
    { label: "Pulse Duration", model30: "95 ÷ 1500 µs", model35: "95 ÷ 1500 µs", highlight: true },
    { label: "Beam Delivery", model30: "Wide range of flexible silica fibers", model35: "Wide range of flexible silica fibers" },
    { label: "Recognition Fiber", model30: "RFID System", model35: "RFID System" },
    { label: "Activation", model30: "Double Footswitch", model35: "Double Footswitch" },
    { label: "Aiming Beam", model30: "532 nm (adjustable <5 mW) - Class 3R", model35: "532 nm (adjustable <5 mW) - Class 3R" },
    {
      label: "Electrical Requirements",
      model30: "230 Vac, 1-ph, 50/60 Hz, 10 A / 115 Vac, 20 A",
      model35: "230 Vac, 1-ph, 50/60 Hz, 10 A / 115 Vac, 20 A",
    },
    { label: "Cooling", model30: "Closed water-air cooling circuit", model35: "Closed water-air cooling circuit" },
    { label: "Operating Temperature", model30: "10°C ÷ 30°C", model35: "10°C ÷ 30°C" },
    {
      label: "Dimensions & Weight",
      model30: "26 cm (W) x 84 cm (D) x 92 cm (H) - 86 kg",
      model35: "26 cm (W) x 84 cm (D) x 92 cm (H) - 86 kg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Technical Data
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Comprehensive system specifications for both the 30 W and 35 W Litho
            Holmium laser configurations.
          </p>
        </div>

        {/* Specs Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm sm:w-1/3">
                    Parameter
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-700 sm:text-sm sm:w-1/3">
                    30 W Model
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm sm:w-1/3 bg-blue-50/50">
                    <div className="flex items-center gap-2">
                      <span>35 W Model</span>
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                        Featured
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {specs.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-blue-50/30 ${
                      row.highlight ? "bg-slate-50/30 font-medium" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-slate-800">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.model30}
                    </td>
                    <td className="py-4 px-6 font-semibold text-primary bg-blue-50/30">
                      {row.model35}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accessories Callout: Footswitch & Screen */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Footswitch */}
          <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f7fbff] p-5 shadow-sm">
            <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2 border border-slate-100 shadow-sm">
              <img
                src={footswitchImg}
                alt="Litho Double Footswitch"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Ergonomic Double Footswitch
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Dedicated Ready / Standby toggle and emission pedal for intuitive, hands-free surgical control.
              </p>
            </div>
          </div>

          {/* Screen GUI */}
          <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f7fbff] p-5 shadow-sm">
            <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-1 border border-slate-100 shadow-sm overflow-hidden">
              <img
                src={screenImg}
                alt="Litho Touch GUI"
                className="max-h-full max-w-full object-cover rounded"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                High-Contrast Intuitive GUI
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Clear parameter readouts of Joules, Hertz, Watts, and quick Dusting or Fragmentation mode selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litho35Specs;
