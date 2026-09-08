// LocalStorage manager for Homepage Clients (RHS Frontend & Admin Sync)

export const CLIENTS_STORAGE_KEY = "rhs_clients_v1";

export const DEFAULT_CLIENTS = [
  {
    id: "client-1",
    name: "MAX Hospital",
    subtitle: "HOSPITALS",
    description: "Advanced medical care with patient-first excellence.",
    accent: "bg-[#F3F7FF]",
    presetKey: "max",
    logo: "",
  },
  {
    id: "client-2",
    name: "Fortis Healthcare",
    subtitle: "HOSPITALS",
    description: "Specialized tertiary healthcare and surgical centers.",
    accent: "bg-[#F0FAFF]",
    presetKey: "fortis",
    logo: "",
  },
  {
    id: "client-3",
    name: "Siemens Healthineers",
    subtitle: "PARTNERS",
    description: "Innovative imaging and diagnostic clinical technology.",
    accent: "bg-[#F0FBF6]",
    presetKey: "siemens",
    logo: "",
  },
  {
    id: "client-4",
    name: "MAX Healthcare Group",
    subtitle: "HOSPITALS",
    description: "Multi-specialty healthcare and robotic surgical facilities.",
    accent: "bg-[#F7F4FF]",
    presetKey: "max",
    logo: "",
  },
  {
    id: "client-5",
    name: "Siemens Medical Systems",
    subtitle: "DIAGNOSTICS",
    description: "Next-generation healthcare engineering and precision instruments.",
    accent: "bg-[#F0F8FF]",
    presetKey: "siemens",
    logo: "",
  },
  {
    id: "client-6",
    name: "Fortis Memorial Research",
    subtitle: "RESEARCH",
    description: "Leading medical innovation and patient-centered clinical care.",
    accent: "bg-[#F0FBFA]",
    presetKey: "fortis",
    logo: "",
  },
];

/**
 * Retrieve all clients from localStorage
 * @returns {Array}
 */
export const getAllClients = () => {
  try {
    const raw = localStorage.getItem(CLIENTS_STORAGE_KEY);
    if (!raw) {
      return DEFAULT_CLIENTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_CLIENTS;
  } catch (error) {
    console.error("Failed to read clients from localStorage:", error);
    return DEFAULT_CLIENTS;
  }
};
