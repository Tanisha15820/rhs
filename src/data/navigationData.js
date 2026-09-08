/**
 * Navigation Data for Reinforce Healthcare Services
 * Contains all menu links, specialties, categories, and medical product links.
 */

// Top-level navigation items
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  // { label: "Machine", path: "/machine" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

// Medical Specialties list
export const SPECIALTIES = [
  {
    name: "ENT",
    path: "/ent",
    defaultCategory: "ENT Laser",
  },
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
  ENT: ["ENT Laser", "ENT Endoscopy", "Elmed"],
  Urology: [
    "Surgical Laser",
    "Urodynamic System & Uroflowmetry",
    "ESWL Lithotripsy",
    "Endo Urology UMD Endoscopy",
  ],
  Gastro: ["Gastro Products", "Gastro Endoscopy", "Gastro Laser"],
};

// Surgical Laser Products (under Urology -> Surgical Laser)
export const SURGICAL_LASER_PRODUCTS = [
  "DK 30 WATT",
  "THULIUM FIBER LASER 60 WATT",
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

// Elmed Subtypes
export const ELMED_SUBTYPES = [
  { name: "Multimed", path: "/multimed" },
  { name: "Vibrolith", path: "/vibrolith" },
  { name: "Vibrolith Ortho", path: "/vibrolith-ortho" },
  { name: "Vibrolith Plus", path: "/vibrolith-plus" },
];

// Endo Urology Subtypes
export const ENDO_UROLOGY_SUBTYPES = [
  { name: "High Definition Cystoscopy", path: "/cystoscopy" },
  { name: "Slim Laser Enucleation (Morcescope)", path: "/morcescope" },
  { name: "Cyber BLADE™ Morcellator", path: "/cyber-blade" },
  { name: "Raykeen Morcellator System", path: "/raykeen-morcellator" },
  { name: "Roboflex Avicenna", path: "/avicenna" },
];
