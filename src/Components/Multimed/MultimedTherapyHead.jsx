import React from "react";
import shockheadImg from "../../assets/images/multimed_therapy_head.jpg";
import { Cpu, Target, Layers, Zap, CheckCircle2 } from "lucide-react";

const MultimedTherapyHead = () => {
  const specs = [
    { label: "Energy Source", value: "Electro-Magnetic System (1,000,000 shock warranty)" },
    { label: "Focusing Technology", value: "High-precision Acoustic Lens" },
    { label: "Patient Coupling", value: "Silicone Membrane (Dry Coupling)" },
    { label: "Focal Peak Pressure", value: "Up to 70 MPa" },
    { label: "Focal Distance", value: "130 mm (expandable up to 160 mm)" },
    { label: "Focal Dimensions", value: "7 mm x 66 mm (50% isobar zone)" },
    { label: "Frequency Range", value: "Variable 40 to 150 shocks/minute" },
    { label: "Energy Density", value: "6 – 60 mJ" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFE] to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Therapy Head Details */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#20B7AE]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#20B7AE] sm:text-sm">
                Acoustic Shockwave Generator
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
              Electromagnetic Head &{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                LITHOARM™ Robotics
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#697A94] sm:text-base">
              At the core of MULTIMED EM is an advanced electromagnetic cylinder with
              acoustic lens focusing, delivering up to 70 MPa of localized pressure.
              Coupled with the computer-controlled LITHOARM articulated robotic positioning arm
              (7 links, 6 joints, 5 angles), the stone coordinates are automatically brought
              to the focal point for precise disintegration.
            </p>

            {/* Parameter List */}
            <div className="mt-6 space-y-2.5">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-primary sm:text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Shockhead Image */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
              <img
                src={shockheadImg}
                alt="Multimed EM Shockwave Therapy Head and Lithoarm"
                className="w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="mt-4 rounded-xl bg-blue-50/70 p-3 text-center text-xs font-semibold text-primary">
                LITHOARM™ Robotic Arm with 3.5 MHz Ultrasound Automatic Positioning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimedTherapyHead;
