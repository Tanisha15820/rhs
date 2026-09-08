import React from "react";
import {
  Quote,
  Award,
  BookOpen,
  UserCheck,
  Building,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const MorcescopeClinical = () => {
  const citations = [
    {
      quote:
        "HoLEP has proven itself to be the new gold standard in surgical treatment for LUTS secondary to BPH with the ability to endoscopically treat prostates independent of size, with durable long term outcomes.",
      author: "Das K. Akhil, Han M. Timothy, Hardacker J. Thomas",
      institution: "Department of Urology, Thomas Jefferson University, Philadelphia, USA",
      journal: "Canadian Journal of Urology (Can J Urol) 2020; 27(43): 44–50",
    },
    {
      quote:
        "Holmium laser enucleation of the prostate (HoLEP) is a minimally invasive and size-independent treatment for benign prostatic hyperplasia with excellent long-term surgical outcome.",
      author: "Felipe C. A. de Figueiredo, Cecilia Maria Cracco, Rodrigo L. Marins, Cesare M. Scoffone",
      institution: "Enlarged Prostate Institute, Caxias do Sul / Pompéia Hospital, Brazil",
      journal: "Andrologia 2020; 52(8): e13582. doi: 10.1111/and.13582",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BA5B1] sm:text-xs">
              Clinical Evidence & Surgeon Endorsement
            </span>
            <span className="h-[2px] w-8 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            The Size-Independent{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] via-[#2088DF] to-[#2525B8] bg-clip-text text-transparent">
              Gold Standard for BPH
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#697A94] sm:text-base">
            Endoscopic laser enucleation is recognized worldwide as the primary treatment for
            enlarged prostate glands {">"} 80g, offering rapid symptom relief and permanent volume reduction.
          </p>
        </div>

        {/* Lead Surgeon Co-Developer Profile */}
        <div className="mt-12 rounded-3xl border border-[#DCE9F6] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(36,76,130,0.06)]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-blue-500/25">
              <UserCheck className="h-10 w-10" />
            </div>

            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Co-Developer & Clinical Lead
              </div>

              <h3 className="text-2xl font-extrabold text-[#102A43]">
                Dr. Felipe C. A. de Figueiredo
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Director of Enlarged Prostate Institute in Caxias do Sul – Brazil
                <br className="hidden sm:block" />
                Head of Endourology of Pompéia Hospital
              </p>

              <p className="text-xs text-slate-500 pt-1 leading-relaxed max-w-3xl">
                Designed the Slim HoLEP instrument series in partnership with RZ Medizintechnik to
                overcome the limitation of bulky resectoscopes and protect patient continence.
              </p>
            </div>
          </div>
        </div>

        {/* Citations Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {citations.map((cite, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl border border-[#E3EDF7] bg-white p-6 sm:p-8 shadow-[0_6px_25px_rgba(36,76,130,0.04)] transition-all duration-300 hover:shadow-md hover:border-blue-200"
            >
              <div>
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700 font-medium">
                  "{cite.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-1">
                <h4 className="text-xs font-bold text-[#102A43]">{cite.author}</h4>
                <p className="text-[11px] text-slate-500">{cite.institution}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#20B7AE] pt-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{cite.journal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MorcescopeClinical;
