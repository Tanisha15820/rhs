import blogImg1 from "../assets/images/blog_3.png";
import blogImg2 from "../assets/images/blog_2.png";
import blogImg3 from "../assets/images/blog_1.png";
import blogImg4 from "../assets/images/blog_4.png";
import laserTechImg from "../assets/images/newsletter_laser_tech.jpg";
import roboticImg from "../assets/images/newsletter_robotic_surgery.jpg";

export const BLOGS_STORAGE_KEY = "rhs_blogs_v1";
export const BLOGS_SAVED_KEY = "rhs_blogs_saved_v1";

export const BLOG_PRESET_MAP = {
  blog_3: blogImg1,
  blog_2: blogImg2,
  blog_1: blogImg3,
  blog_4: blogImg4,
  laser_tech: laserTechImg,
  robotic_surgery: roboticImg,
};

export const DEFAULT_BLOGS = [
  {
    id: "blog-1",
    tag: "Surgical Innovation",
    title: "The Rise of Bipolar Plasma Technology in Modern OTs",
    date: "12 Aug 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Arvind Mehta",
      role: "Sr. Laparoscopic Surgeon",
      initials: "AM",
    },
    excerpt:
      "How bipolar plasma generators are reducing thermal spread and improving precision across general surgery procedures, and what it means for hospitals upgrading their OT setups.",
    presetKey: "blog_3",
    image: "",
    featured: true,
    views: "2.4k",
  },
  {
    id: "blog-2",
    tag: "Product Guide",
    title: "Diode Laser vs Traditional Systems: What Surgeons Should Know",
    date: "28 Jul 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Priya Nair",
      role: "Head of Laser Endourology",
      initials: "PN",
    },
    excerpt:
      "A practical comparison of diode laser systems against conventional equipment, covering cost of ownership, safety margins, and day-to-day usability in the OT.",
    presetKey: "blog_2",
    image: "",
    views: "1.8k",
  },
  {
    id: "blog-3",
    tag: "Hospital Insights",
    title: "Building an Equipment Procurement Checklist for General Surgery",
    date: "10 Jul 2026",
    readTime: "4 min read",
    author: {
      name: "Rajeshwar Rao",
      role: "Biomedical Director, Apex Healthcare",
      initials: "RR",
    },
    excerpt:
      "From compliance to after-sales support, here is a checklist hospital administrators can use before finalizing any surgical equipment vendor.",
    presetKey: "blog_1",
    image: "",
    views: "1.2k",
  },
  {
    id: "blog-4",
    tag: "Case Study",
    title: "Reducing OT Turnaround Time with Smarter Equipment Choices",
    date: "02 Jul 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Sandeep Kulkarni",
      role: "Clinical OT Director",
      initials: "SK",
    },
    excerpt:
      "A look at how one multi-speciality hospital cut average OT turnaround time by rethinking their general surgery instrument stack.",
    presetKey: "blog_4",
    image: "",
    views: "3.1k",
  },
  {
    id: "blog-5",
    tag: "Surgical Innovation",
    title: "Next-Gen Thulium Fiber Laser (TFL) vs Holmium in Lithotripsy",
    date: "18 Jun 2026",
    readTime: "8 min read",
    author: {
      name: "Dr. Vikram Sethi",
      role: "Consultant Endourologist",
      initials: "VS",
    },
    excerpt:
      "Exploring sub-millimeter dusting, ultra-low retropulsion, and fiber flexibility that make Thulium Fiber Laser systems a game changer for calculus fragmentation.",
    presetKey: "laser_tech",
    image: "",
    views: "2.9k",
  },
  {
    id: "blog-6",
    tag: "Product Guide",
    title: "Single-Use vs Reusable Flexible Video URS: Cost & Clinical Tradeoffs",
    date: "04 Jun 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Ananya Sen",
      role: "Urology Department Lead",
      initials: "AS",
    },
    excerpt:
      "Evaluating maintenance cycles, optical clarity breakdown, sterilization turnaround, and infection control to determine the ideal ureterorenoscope deployment.",
    presetKey: "robotic_surgery",
    image: "",
    views: "1.5k",
  },
];

export const getResolvedBlogImage = (blog) => {
  if (blog?.image && typeof blog.image === "string" && blog.image.trim() !== "") {
    return blog.image;
  }
  if (blog?.presetKey && BLOG_PRESET_MAP[blog.presetKey]) {
    return BLOG_PRESET_MAP[blog.presetKey];
  }
  return blogImg1;
};

export const getAllBlogs = () => {
  try {
    const raw = localStorage.getItem(BLOGS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(DEFAULT_BLOGS));
      return DEFAULT_BLOGS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(DEFAULT_BLOGS));
      return DEFAULT_BLOGS;
    }
    // Merge any missing fields gracefully from DEFAULT_BLOGS if matching id
    return parsed.map((item) => {
      const defaultMatch = DEFAULT_BLOGS.find((d) => d.id === item.id);
      return {
        ...defaultMatch,
        ...item,
        author: item.author || defaultMatch?.author || {
          name: "Reinforce Clinical Team",
          role: "Surgical Equipment Specialist",
          initials: "RC",
        },
      };
    });
  } catch (err) {
    console.warn("Failed reading blogs from localStorage, falling back to defaults:", err);
    return DEFAULT_BLOGS;
  }
};

export const getBookmarkedBlogs = () => {
  try {
    const raw = localStorage.getItem(BLOGS_SAVED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Error reading saved blogs:", err);
    return [];
  }
};

export const toggleBookmarkBlog = (blogId) => {
  try {
    const current = getBookmarkedBlogs();
    let updated;
    if (current.includes(blogId)) {
      updated = current.filter((id) => id !== blogId);
    } else {
      updated = [...current, blogId];
    }
    localStorage.setItem(BLOGS_SAVED_KEY, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent("rhs_blogs_saved_updated", { detail: updated })
    );
    return updated;
  } catch (err) {
    console.warn("Error toggling blog bookmark:", err);
    return [];
  }
};

