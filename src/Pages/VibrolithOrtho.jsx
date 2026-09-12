import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../Components/SEO";
import bannerBg from "../assets/images/smartxide_banner.png";
import machineImg from "../assets/images/vibrolith_ortho_hero.png";
import atlasImg from "../assets/images/vibrolith_ortho_atlas.png";
import transmittersImg from "../assets/images/vibrolith_ortho_transmitters.png";
import clinicalImg from "../assets/images/vibrolith_ortho_clinical.png";

import VibrolithOrthoMachine from "../Components/VibrolithOrtho/VibrolithOrthoMachine";
import VibrolithOrthoAbout from "../Components/VibrolithOrtho/VibrolithOrthoAbout";
import VibrolithOrthoTransmitters from "../Components/VibrolithOrtho/VibrolithOrthoTransmitters";
import VibrolithOrthoClinical from "../Components/VibrolithOrtho/VibrolithOrthoClinical";
import VibrolithOrthoSpecs from "../Components/VibrolithOrtho/VibrolithOrthoSpecs";

const FeatureCard = ({ number, title, description, image, position }) => {
  return (
    <div
      className={`absolute hidden xl:block w-[300px] h-[105px] rounded-[22px] border border-white bg-white/95 shadow-[0_12px_35px_rgba(70,130,190,0.16)] backdrop-blur-md ${position}`}
    >
      <div className="absolute left-0 top-0 z-20 flex h-[44px] w-[58px] items-center justify-center rounded-br-[22px] rounded-tl-[22px] bg-primary">
        <span className="text-lg font-bold text-white">{number}</span>
      </div>

      <div className="absolute left-0 top-[42px] h-[45px] w-[1px] bg-primary"></div>

      <div className="flex h-full items-center gap-3 px-3 py-2 pl-4">
        <div className="relative ml-8 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-sm overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover p-0.5"
          />
        </div>

        <div className="min-w-0 flex-1 pr-2">
          <h4 className="text-[12px] font-bold text-slate-800 leading-tight">
            {title}
          </h4>
          <p className="mt-1 text-[11px] leading-[15px] text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileFeatureCard = ({ number, title, description, image }) => {
  return (
    <div className="relative min-h-[95px] overflow-hidden rounded-2xl border border-white bg-white/95 p-3 shadow-[0_10px_30px_rgba(70,130,190,0.12)] backdrop-blur-md">
      <div className="absolute left-0 top-0 flex h-8 w-[45px] items-center justify-center rounded-br-2xl rounded-tl-2xl bg-primary">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      <div className="flex items-center gap-3 pt-1 pl-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover p-0.5"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-xs font-bold text-slate-800">{title}</h4>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const VibrolithOrtho = () => {
  return (
    <div className="bg-white">
      <SEO
        title="VIBROLITH ORTHO® Extracorporeal Shock Wave Therapy (ESWT/RSWT) - ELMED | Reinforce Healthcare Services"
        description="Discover the ELMED Vibrolith Ortho radial shockwave therapy system (ESWT/RSWT) with 7-inch color touch anatomical atlas, 18.5 MPa energy, and 5 interchangeable transmitters for orthopedic and physical therapy."
        keywords="Vibrolith Ortho, ELMED Vibrolith Ortho, ESWT shockwave therapy, RSWT radial shock wave, physical therapy equipment rental, orthopedic shock wave, calcific tendinitis, plantar fasciitis"
      />

      {/* Hero Banner (Multimed style) */}
      <section className="relative min-h-[500px] overflow-hidden bg-background sm:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Vibrolith Ortho Background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-[0.5px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pt-6 text-center sm:pt-8 lg:pt-12">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                ELMED MEDİKAL SİSTEMLER • RADIAL ŞOK DALGA TERAPİSİ (ESWT - RSWT)
              </span>
              <span className="hidden h-[1px] w-9 bg-primary sm:block"></span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
              VIBROLITH{" "}
              <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
                ORTHO®
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">
              Vücut Dışından Şok Dalga Terapi Sistemi (ESWT / RSWT).
              Yüksek etkili elektro-pnömatik balistik teknoloji ve 7" dokunmatik renkli anatomik atlas ile ağrısız tedavi.
            </p>
          </div>

          {/* Product Area with Floating Feature Cards */}
          <div className="relative mx-auto mt-4 max-w-[1200px] sm:mt-6">
            <FeatureCard
              number="01"
              title={'7" Dokunmatik Atlas'}
              description="30 hazır klinik protokol ve renkli resimli anatomik vücut haritası."
              image={atlasImg}
              position="left-6 top-16"
            />
            <FeatureCard
              number="02"
              title="Geri Tepmesiz Süspansiyon"
              description="Yaylı süspansiyonlu elcek ile sıfır operatör yorulması & 2M şok garantisi."
              image={machineImg}
              position="bottom-14 left-6"
            />
            <FeatureCard
              number="03"
              title="5 Değiştirilebilir Başlık"
              description="6mm, 10mm, 15mm, 20mm & 35mm derin odaklı medikal paslanmaz çelik uçlar."
              image={transmittersImg}
              position="top-16 right-6"
            />
            <FeatureCard
              number="04"
              title="Doğal Analjezik Etki"
              description="Akustik dalgaların etkisiyle ilk 30 saniye sonrası uygulama tamamen ağrısızdır."
              image={clinicalImg}
              position="bottom-14 right-6"
            />

            {/* Desktop Arrows */}
            <div className="absolute left-[305px] top-[105px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute bottom-[105px] left-[305px] hidden items-center xl:flex">
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[305px] top-[105px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            <div className="absolute bottom-[105px] right-[305px] hidden items-center xl:flex">
              <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <div className="h-[1px] w-[50px] bg-primary"></div>
              <div className="h-2 w-2 rounded-full border border-primary bg-white"></div>
            </div>

            {/* Central Machine - Desktop */}
            <div className="relative mx-auto hidden h-[390px] w-full max-w-[520px] items-end justify-center sm:h-[430px] lg:flex lg:h-[490px]">
              <div className="absolute bottom-10 left-1/2 h-36 w-60 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"></div>
              <motion.img
                src={machineImg}
                alt="Vibrolith Ortho Extracorporeal Radial Shockwave Therapy Machine on Cart"
                className="relative z-10 h-[370px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(25,168,232,0.22)] lg:h-[450px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Central Machine - Mobile */}
            <div className="relative mx-auto flex h-auto w-full max-w-[280px] items-end justify-center pb-4 lg:hidden">
              <div className="absolute bottom-6 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"></div>
              <motion.img
                src={machineImg}
                alt="Vibrolith Ortho Extracorporeal Radial Shockwave Therapy Machine on Cart"
                className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[0_15px_20px_rgba(25,168,232,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Mobile Cards */}
            <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-2.5 px-2 pb-6 sm:px-4 lg:hidden">
              <MobileFeatureCard
                number="01"
                title={'7" Dokunmatik Atlas'}
                description="30 hazır protokol ve renkli resimli anatomik atlas."
                image={atlasImg}
              />
              <MobileFeatureCard
                number="02"
                title="Geri Tepmesiz Süspansiyon"
                description="Yaylı süspansiyonlu elcek ve 2.000.000 şok garantisi."
                image={machineImg}
              />
              <MobileFeatureCard
                number="03"
                title="5 Değiştirilebilir Başlık"
                description="6mm, 10mm, 15mm, 20mm & 35mm derin odaklı çelik uçlar."
                image={transmittersImg}
              />
              <MobileFeatureCard
                number="04"
                title="Doğal Analjezik Etki"
                description="İlk 30 saniye sonrası uygulama genellikle ağrısızdır."
                image={clinicalImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <VibrolithOrthoMachine />
      <VibrolithOrthoAbout />
      <VibrolithOrthoTransmitters />
      <VibrolithOrthoClinical />
      <VibrolithOrthoSpecs />
    </div>
  );
};

export default VibrolithOrtho;
