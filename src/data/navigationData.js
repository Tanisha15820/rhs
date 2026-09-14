// Top-level navigation items
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

// Medical Specialties list
export const SPECIALTIES = [
  {
    name: "ENT, Head & Neck Oncology",
    path: "/ent",
    defaultCategory: "CO2 Surgical Laser",
  },
  // {
  //   name: "ENT Head & Neck Oncology",
  //   path: "/ent-head",
  //   defaultCategory: "",
  // },
  {
    name: "Urology",
    path: "/urology",
    defaultCategory: "Surgical Laser",
  },
  {
    name: "Gastro",
    path: "/gastro",
    defaultCategory: "Gastro Products",
  },
];

// Categories under each specialty
export const CATEGORIES = {
  "ENT, Head & Neck Oncology": ["CO2 Surgical Laser"],
  Urology: [
    "Surgical Laser",
    "Urodynamic System & Uroflowmetry",
    "ESWL Lithotripsy",
    "Endo Urology UMD Endoscopy",
    "Morcellator",
    "Roboflex Avicenna",
  ],
  Gastro: ["Gastro Products", "Gastro Endoscopy", "Gastro Laser"],
};

// Surgical Laser Products (under Urology -> Surgical Laser)
export const SURGICAL_LASER_PRODUCTS = [
  "DK 30 WATT",
  "TFL 60 WATT",
  "Vikrant TFL 30/45/70 WATT",
  "LITHO 35 WATT",
  "CYBER TM 150 WATT",
  "LITHO EVO 35 WATT",
  "CYBER TM 200 WATT",
  "LITHO EVO 60 WATT",
  "LATEST TECHNOLOGY MAGNETO 100 WATT",
  "CYBER HO 100 WATT",
  "LATEST TECHNOLOGY MAGNETO 150 WATT",
  "CYBER HO 150 WATT",
];

export const ESWL_LITHOTRIPSY_SUBTYPES = [
  { name: "Multimed", path: "/multimed" },
  { name: "Vibrolith", path: "/vibrolith" },
  { name: "Vibrolith Ortho", path: "/vibrolith-ortho" },
  { name: "Vibrolith Plus", path: "/vibrolith-plus" },
];

// ENT Laser Subtypes
export const ENT_LASER_SUBTYPES = [
  { name: "SmartXide² Unique TRIO", path: "/smartxide" },
  { name: "SmartXide Touch SurgiCO", path: "/smartxide-touch" },
];

// Gastro Laser Subtypes
export const GASTRO_LASER_SUBTYPES = [
  { name: "LITHO 35 WATT", path: "/litho35watt" },
  { name: "LITHO EVO 35 WATT", path: "/lithoevo35watt" },
];

// ENDO Subtypes
export const ENDO_UROLOGY_UMD_ENDOSCOPY_SUBTYPES = [
  { name: "RZ Medizintechnik Cystoscopy", path: "/cystoscopy" },
  { name: "RZ Slim Laser Enucleation System", path: "/morcescope" },
];

export const MORCELLATOR_SUBTYPES = [
  { name: "Cyber BLADE™ Morcellator", path: "/cyber-blade" },
  { name: "Raykeen Morcellator System", path: "/raykeen-morcellator" },
];

// Urodynamic System & Uroflowmetry Subtypes
export const URODYNAMIC_SUBTYPES = [
  { name: "UROMIC Melody", path: "/melody" },
  { name: "UROMIC Symphony", path: "/symphony" },
  { name: "UROMIC Harmony", path: "/harmony" },
  { name: "Danflow Wave", path: "/danflow-wave" },
  { name: "Danflow Cord", path: "/danflow-cord" },
  { name: "Bladder Scanner", path: "/bladder-scanner" },
];

// Roboflex Avicenna Subtype
export const ROBOFLEX_AVICENNA_SUBTYPE = [
  { name: "Roboflex Avicenna", path: "/avicenna" },
];
