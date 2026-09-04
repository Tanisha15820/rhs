import React, { useState } from "react";
import { Zap, Monitor, SlidersHorizontal, ShieldCheck, CheckCircle2 } from "lucide-react";

const VibrolithOrthoSpecs = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSpecs = [
    { parameter: "Çalışma Basıncı (Working Pressure)", value: "0.5 – 5 Bar sürekli ayarlanabilir (continuously adjustable)" },
    { parameter: "Cihaz Frekansı (Frequency Range)", value: "1 – 21 Hz, 60 – 1.260 vuruş/dk arasında dijital olarak seçilebilir" },
    { parameter: "Vuruş Modu (Impact Modes)", value: "Tek tek (single), Sürekli (burst) ve Otomatik mod seçimi" },
    { parameter: "Maksimum Enerji (Peak Acoustic Energy)", value: "18.5 MPa sürekli ayarlanabilir enerji yoğunluğu" },
    { parameter: "Güç Kaynağı (Power Supply)", value: "220 VAC / 50-60 Hz (±%10)" },
    { parameter: "Elektriksel İzolasyon (Isolation)", value: "Dahili medikal izolasyon trafosu (Built-in isolation transformer)" },
    { parameter: "Elektriksel Güvenlik (Safety Standard)", value: "Sınıf I Tip B (EN 60601-1 medikal standart)" },
    { parameter: "Şok Dalga Prensibi (Mechanism)", value: "Elektro-pnömatik balistik mermi çarpma sistemi (RSWT radial dalga)" },
  ];

  const softwareSpecs = [
    { parameter: "Kullanıcı Ekranı (Display Screen)", value: "7\" Dokunmatik renkli yüksek çözünürlüklü LCD ekran" },
    { parameter: "Uygulama Yazılımı (Software)", value: "Türkçe ve İngilizce menü seçenekleri" },
    { parameter: "Hazır Tedavi Protokolleri (Presets)", value: "Fizik tedavi, ortopedi ve spor hekimliği için 30 adet hazır program" },
    { parameter: "Kullanıcı Hafızası (Custom Memory)", value: "Kullanıcının kendi programlarını kaydedebileceği 10 adet boş hafıza" },
    { parameter: "Anatomik Atlas (Visual Atlas)", value: "Renkli resimli anatomik vücut haritası ve bölge seçim rehberi" },
    { parameter: "Tedavi Hafızası (Data Memory)", value: "50.000 hasta kaydı yapabilen geniş dahili veri tabanı" },
    { parameter: "Otomatik Veri Kaydı (Auto Logging)", value: "Uygulanan tedavi, basınç (bar), frekans, atış sayısı ve hasta bilgisi" },
    { parameter: "Arıza Teşhis Sistemi (Diagnostics)", value: "Açıklamalı arıza ve sistem durum bildirimleri" },
  ];

  const hardwareSpecs = [
    { parameter: "Ana Ünite Boyutları (Dimensions)", value: "315 x 200 x 368 mm" },
    { parameter: "Ana Ünite Ağırlığı (Weight)", value: "9.85 kg (klinikler arası kolay taşınabilir portatif tasarım)" },
    { parameter: "Aplikator / Elcek Boyutu (Handpiece)", value: "185 x 200 mm" },
    { parameter: "Elcek Garanti Ömrü (Shot Warranty)", value: "2.000.000 şok vuruş garantisi" },
    { parameter: "Geri Tepme Önleyici (Suspension)", value: "Yaylı süspansiyon sistemi ile sıfır geri tepme ve tam doku teması" },
    { parameter: "Tetikleme Seçenekleri (Dual Trigger)", value: "Dokunmatik ekrandan BAŞLA butonu veya elcek üzerinden parmak tetiği" },
    { parameter: "Temizlik & Dezenfeksiyon", value: "Alkol bazlı, renksiz ve kokusuz dezenfektan solüsyonu ile silinebilir" },
    { parameter: "Soğutma Sistemi (Cooling)", value: "Hava sirkülasyonlu akıllı termal havalandırma" },
  ];

  const transmitterSpecs = [
    { parameter: "Odak Başlık (Focus Tip)", value: "6 mm (akupunktur ve küçük tetik noktalar)" },
    { parameter: "Standart Başlık (Standard Tip)", value: "10 mm (epikondilit, aşil ve tendon tedavileri)" },
    { parameter: "Planar Başlık (Planar Tip)", value: "15 mm (omuz kalsifik tendinit ve eklem kapsülü)" },
    { parameter: "Geniş Radial Başlık (Radial Tip)", value: "20 mm (büyük kas grupları ve yaygın miyofasiyal alanlar)" },
    { parameter: "Derin Tetik Başlık (Deep Trigger)", value: "35 mm ekstra uzun (derin dokular, psödoartroz ve kemik kaynaması)" },
    { parameter: "Kompresör Donanımı (Compressor)", value: "10 bar yağsız tip harici sessiz hava kompresörü (sehpa içine monteli)" },
    { parameter: "Taşıyıcı Sehpa (Trolley Cart)", value: "Orijinal taşıyıcı araba (iki tekerlek kilitlenebilir, elcek yuvalı)" },
    { parameter: "Garanti & Sertifikasyon", value: "24 Ay Garanti (24-Month Warranty) • CE 1984 Onaylı" },
  ];

  const tabs = [
    { id: "technical", label: "Teknik Parametreler", icon: Zap, data: technicalSpecs },
    { id: "software", label: "Yazılım & 7\" Ekran", icon: Monitor, data: softwareSpecs },
    { id: "hardware", label: "Ölçüler & Elcek", icon: SlidersHorizontal, data: hardwareSpecs },
    { id: "transmitters", label: "Başlıklar & Donanım", icon: ShieldCheck, data: transmitterSpecs },
  ];

  const currentData = tabs.find((t) => t.id === activeTab)?.data || technicalSpecs;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#19A8E8] sm:text-sm">
              Teknik Özellikler & Veriler
            </p>
            <span className="h-[2px] w-8 bg-[#19A8E8]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            VIBROLITH ORTHO®{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#697A94] sm:text-base">
            Detailed engineering specifications for the electro-pneumatic ballistic generator,
            7-inch touchscreen software, ergonomic handpiece, and interchangeable applicator tips.
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
                    Özellik / Parametre
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm sm:w-2/3">
                    Teknik Değer / Açıklama
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

        {/* Standards & Warranty Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs text-slate-600 shadow-sm flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="font-bold text-slate-800">Kalite & Standartlar:</span>
          <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-primary">
            24 Ay Tam Garanti
          </span>
          <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
            CE 1984 Tıbbi Cihaz Sertifikası
          </span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
            EN 60601-1 Sınıf I Tip B Güvenlik
          </span>
          <span className="rounded-md bg-amber-50 px-2.5 py-1 font-medium text-amber-700">
            2.000.000 Şok Elcek Garantisi
          </span>
        </div>
      </div>
    </section>
  );
};

export default VibrolithOrthoSpecs;
