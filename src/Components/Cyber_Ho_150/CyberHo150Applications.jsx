import React from "react";
import { motion } from "framer-motion";

const CyberHo150Applications = () => {
  const applications = [
    { name: "ENT", position: "top-[15%] left-[10%]" },
    { name: "GASTROENTEROLOGY", position: "top-[40%] left-[5%]" },
    { name: "GENERAL SURGERY", position: "top-[65%] left-[5%]" },
    { name: "ARTHROSCOPY", position: "bottom-[5%] left-[10%]" },
    { name: "DISCECTOMY", position: "top-[40%] right-[10%]" },
  ];

  const urologyDetails = [
    "LITHOTRIPSY",
    "BPH",
    "TUMORS (e.g. Bladder)",
    "STRICTURES",
    "BNI",
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Applications
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Cyber Ho 150 can be used to perform incision, excision, resection, ablation, vaporization, coagulation and hemostasis of soft tissue and in lithotripsy of stones in various medical specialties, for example:
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[600px] flex items-center justify-center">
          
          {/* Central Body Placeholder (We use a highly styled central core instead of complex anatomy map for clean design) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-48 h-full bg-gradient-to-b from-blue-100 via-cyan-100 to-blue-50 opacity-40 blur-3xl rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
            
            {/* Left side standard applications */}
            <div className="space-y-4">
              {applications.slice(0,4).map((app, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <span className="font-bold text-slate-700 tracking-wide">{app.name}</span>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </motion.div>
              ))}
            </div>

            {/* Right side applications and Urology Focus */}
            <div className="space-y-4 flex flex-col justify-end">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="font-bold text-slate-700 tracking-wide">{applications[4].name}</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 rounded-2xl p-6 shadow-sm border border-blue-200 mt-4 relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-black text-blue-600 mb-4 tracking-wide text-center">UROLOGY</h3>
                <ul className="space-y-2 text-center">
                  {urologyDetails.map((detail, idx) => (
                    <li key={idx} className="text-sm font-semibold text-slate-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberHo150Applications;
