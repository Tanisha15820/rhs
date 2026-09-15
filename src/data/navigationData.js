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
    "Urodynamic System & Uroflowmeters",
    "ESWL Lithotripsy",
    "Endo Urology UMD Endoscopy",
    "Morcellator System",
    "Roboflex Avicenna",
  ],
  Gastro: ["Gastro Products", "Gastro Endoscopy", "Gastro Laser"],
};

// Surgical Laser Subcategories (under Urology -> Surgical Laser)
export const SURGICAL_LASER_SUBCATEGORIES = [
  { name: "Holmium YAG Laser", path: "/urology-surgical-laser" },
  { name: "Thulium YAG Laser", path: "/urology-surgical-laser" },
  { name: "Thulium Fiber Laser", path: "/urology-surgical-laser" },
];

// Surgical Laser Products grouped by subcategory
export const SURGICAL_LASER_PRODUCTS_BY_SUBCATEGORY = {
  "Holmium YAG Laser": [
    { name: "DK 30 WATT", path: "/urology-surgical-laser" },
    { name: "LITHO 35 WATT", path: "/urology-surgical-laser" },
    { name: "LITHO EVO 35 WATT", path: "/urology-surgical-laser" },
    {
      name: "LATEST TECHNOLOGY MAGNETO 100 WATT",
      path: "/urology-surgical-laser",
    },
    { name: "CYBER HO 100 WATT", path: "/urology-surgical-laser" },
    {
      name: "LATEST TECHNOLOGY MAGNETO 150 WATT",
      path: "/urology-surgical-laser",
    },
    { name: "CYBER HO 150 WATT", path: "/urology-surgical-laser" },
  ],
  "Thulium YAG Laser": [
    { name: "Cyber TM 150 WATT", path: "/urology-surgical-laser" },
    { name: "Cyber TM 200 WATT", path: "/urology-surgical-laser" },
  ],
  "Thulium Fiber Laser": [
    { name: "Fiber Dust 60 WATT", path: "/urology-surgical-laser" },
    { name: "Vikrant - 30/45/70 WATT", path: "/urology-surgical-laser" },
  ],
};

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

// Urodynamic System & Uroflowmetry Subcategories
export const URODYNAMIC_SUBTYPES = [
  { name: "Urodynamic Systems", path: "/melody" },
  { name: "Uroflowmeters", path: "/danflow-wave" },
  { name: "Patient Couch", path: "/patient-couch" },
  { name: "Bladder Scanner", path: "/bladder-scanner" },
];

// Urodynamic Products grouped by subcategory
export const URODYNAMIC_PRODUCTS_BY_SUBCATEGORY = {
  "Urodynamic Systems": [
    { name: "UROMIC Harmony", path: "/harmony" },
    { name: "UROMIC Melody", path: "/melody" },
    { name: "UROMIC Symphony", path: "/symphony" },
  ],
  Uroflowmeters: [
    { name: "Danflow Wave", path: "/danflow-wave" },
    { name: "Danflow Cord", path: "/danflow-cord" },
  ],
  "Patient Couch": [{ name: "Patient Couch", path: "/patient-couch" }],
  "Bladder Scanner": [{ name: "Bladder Scanner", path: "/bladder-scanner" }],
};

// Roboflex Avicenna Subtype
export const ROBOFLEX_AVICENNA_SUBTYPE = [
  { name: "Roboflex Avicenna", path: "/avicenna" },
];
