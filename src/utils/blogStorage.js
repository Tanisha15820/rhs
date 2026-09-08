// LocalStorage manager for Blogs CRUD (RHS Frontend)
import blogImg1 from "../assets/images/blog_3.png";
import blogImg2 from "../assets/images/blog_2.png";
import blogImg3 from "../assets/images/blog_1.png";
import blogImg4 from "../assets/images/blog_4.png";

export const BLOGS_STORAGE_KEY = "rhs_blogs_v1";

export const BLOG_PRESET_MAP = {
  blog_3: blogImg1,
  blog_2: blogImg2,
  blog_1: blogImg3,
  blog_4: blogImg4,
};

export const DEFAULT_BLOGS = [
  {
    id: "blog-1",
    tag: "Surgical Innovation",
    title: "The Rise of Bipolar Plasma Technology in Modern OTs",
    date: "12 Aug 2026",
    readTime: "5 min read",
    excerpt:
      "How bipolar plasma generators are reducing thermal spread and improving precision across general surgery procedures, and what it means for hospitals upgrading their OT setups.",
    presetKey: "blog_3",
    image: "",
  },
  {
    id: "blog-2",
    tag: "Product Guide",
    title: "Diode Laser vs Traditional Systems: What Surgeons Should Know",
    date: "28 Jul 2026",
    readTime: "6 min read",
    excerpt:
      "A practical comparison of diode laser systems against conventional equipment, covering cost of ownership, safety margins, and day-to-day usability in the OT.",
    presetKey: "blog_2",
    image: "",
  },
  {
    id: "blog-3",
    tag: "Hospital Insights",
    title: "Building an Equipment Procurement Checklist for General Surgery",
    date: "10 Jul 2026",
    readTime: "4 min read",
    excerpt:
      "From compliance to after-sales support, here is a checklist hospital administrators can use before finalizing any surgical equipment vendor.",
    presetKey: "blog_1",
    image: "",
  },
  {
    id: "blog-4",
    tag: "Case Study",
    title: "Reducing OT Turnaround Time with Smarter Equipment Choices",
    date: "02 Jul 2026",
    readTime: "7 min read",
    excerpt:
      "A look at how one multi-speciality hospital cut average OT turnaround time by rethinking their general surgery instrument stack.",
    presetKey: "blog_4",
    image: "",
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
    return parsed;
  } catch (err) {
    console.warn("Failed reading blogs from localStorage, falling back to defaults:", err);
    return DEFAULT_BLOGS;
  }
};
