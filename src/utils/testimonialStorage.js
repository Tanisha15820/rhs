// LocalStorage manager for Homepage Testimonials CRUD (RHS Frontend & Admin Sync)

export const TESTIMONIALS_STORAGE_KEY = "rhs_testimonials_v1";

export const DEFAULT_TESTIMONIALS = [
  {
    id: "test-1",
    name: "Dr. Sarah Mitchell",
    role: "Orthopedic Surgeon, Riverdale Health",
    text: "The quality of these medical devices is outstanding. They're reliable, easy to use, and significantly improve patient outcomes in our surgical suites.",
    image: "https://i.pravatar.cc/100?img=47",
    bg: "bg-[#EDE9FE]",
  },
  {
    id: "test-2",
    name: "Dr. Alexander Hayes",
    role: "Chief of Urology, Metro Specialty Hospital",
    text: "Reinforce Healthcare provided top-tier laser technology that revolutionized our minimally invasive urological procedures. The technical support is unmatched.",
    image: "https://i.pravatar.cc/100?img=12",
    bg: "bg-[#E0F2FE]",
  },
  {
    id: "test-3",
    name: "Dr. Elena Rostova",
    role: "Clinical Director, Apex Surgery Center",
    text: "Remarkable precision and intuitive controls. Our surgical staff adapted instantly to the equipment, and the maintenance service is prompt and dependable.",
    image: "https://i.pravatar.cc/100?img=32",
    bg: "bg-[#FEE2E2]",
  },
  {
    id: "test-4",
    name: "Dr. Marcus Vance",
    role: "Endoscopy Specialist, St. Jude Medical",
    text: "The clarity of the vision systems and ergonomic design of the instruments allow for prolonged procedures with zero surgeon fatigue. Truly world-class.",
    image: "https://i.pravatar.cc/100?img=60",
    bg: "bg-white",
  },
  {
    id: "test-5",
    name: "Dr. Priya Sharma",
    role: "Head of General Surgery, Lifeline Hospital",
    text: "Their rental and procurement process was effortless. Having dependable, cutting-edge machinery with comprehensive training made all the difference.",
    image: "https://i.pravatar.cc/100?img=49",
    bg: "bg-[#FAE8FF]",
  },
  {
    id: "test-6",
    name: "Dr. David Sterling",
    role: "Biomedical Director, Horizon Health Systems",
    text: "From quality calibration to after-sales support, Reinforce Healthcare has consistently exceeded expectations for our multi-facility medical network.",
    image: "https://i.pravatar.cc/100?img=68",
    bg: "bg-[#EDE9FE]",
  },
];

/**
 * Retrieve all testimonials from localStorage
 * @returns {Array}
 */
export const getAllTestimonials = () => {
  try {
    const raw = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
    if (!raw) {
      return DEFAULT_TESTIMONIALS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_TESTIMONIALS;
  } catch (error) {
    console.error("Failed to read testimonials from localStorage:", error);
    return DEFAULT_TESTIMONIALS;
  }
};
