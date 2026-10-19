import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check,
  CheckCircle2,
  Sparkles,
  X,
  Eye,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import SEO from "../Components/SEO";
import blogBannerBg from "../assets/images/blogs-banner.png";
import {
  getAllBlogs,
  getResolvedBlogImage,
  getBookmarkedBlogs,
  toggleBookmarkBlog,
} from "../utils/blogStorage";
import { saveSubscription } from "../utils/newsletterStorage";

// Predefined detailed content for full-reader modal
const BLOG_ARTICLE_DETAILS = {
  "blog-1": {
    subtitle:
      "A deep dive into sub-millimeter thermal margin control, rapid hemostasis, and OT instrument standardization.",
    keyTakeaways: [
      "Thermal spread is restricted to <0.8mm compared to 3-5mm with standard monopolar electrosurgery.",
      "Plasma corona layer enables simultaneous vaporized tissue resection and rapid capillary sealing.",
      "Reduces postoperative tissue edema, promoting faster patient discharge and lower pain scores.",
      "Seamless integration with modern laparoscopic and open surgery generator consoles.",
    ],
    sections: [
      {
        heading: "The Shift from Electrosurgery to Plasma Precision",
        paragraphs: [
          "In contemporary operating theaters, surgical safety and post-op healing velocity are heavily influenced by the extent of collateral thermal damage. Conventional monopolar and standard bipolar units carry a non-trivial risk of lateral heat transmission into adjacent delicate anatomical structures such as nerves, ureters, and mesenteric vessels.",
          "Bipolar plasma technology addresses this dilemma by utilizing high-frequency energy passed through conductive saline media. This generates a localized, highly controlled plasma field composed of ionized particles that disintegrate organic molecular bonds at significantly lower core temperatures (typically 40°C to 70°C).",
        ],
      },
      {
        heading: "Clinical Efficacy & OT Turnaround",
        paragraphs: [
          "Surgical teams utilizing bipolar plasma systems report up to a 22% reduction in intraoperative bleeding control time. Because the cut and coagulation modalities function in unified synergy, instrument exchanges are dramatically minimized.",
          "For hospital administrators, this translates to predictable OT scheduling, fewer secondary interventions for post-op hematomas, and enhanced patient throughput across general and specialized surgical departments.",
        ],
      },
    ],
    specs: [
      { label: "Operating Frequency", value: "350 kHz – 420 kHz" },
      { label: "Thermal Spread Radius", value: "< 0.8 mm" },
      { label: "Conductive Medium", value: "Isotonic Saline (0.9% NaCl)" },
      { label: "Compatible Procedures", value: "General, Urological & Gynecological Laparoscopy" },
    ],
  },
  "blog-2": {
    subtitle:
      "Balancing wavelength absorption, hemoperfusion safety, and capital expenditure across surgical disciplines.",
    keyTakeaways: [
      "Dual 980nm and 1470nm wavelengths offer high water and hemoglobin absorption coefficients.",
      "Compact solid-state diode construction eliminates frequent flashlamp replacements.",
      "Substantially reduced fiber degradation during high-angle laser deflection.",
      "Faster recovery curves in outpatient proctology, vascular, and ENT interventions.",
    ],
    sections: [
      {
        heading: "Wavelength Dynamics in Soft Tissue Ablation",
        paragraphs: [
          "Diode lasers have transformed outpatient surgical procedures by optimizing absorption at both 980nm (targeting hemoglobin) and 1470nm (targeting intracellular water). This dual-action profile enables surgeons to achieve clean incision and instant coagulation without the high collateral thermal zones characteristic of older radiofrequency or Nd:YAG systems.",
          "In proctology and ENT clinics, this precision allows procedures to be conducted in day-care environments, cutting hospital admission costs while preserving delicate sphincteric and mucosal integrity.",
        ],
      },
      {
        heading: "Maintenance & Total Cost of Ownership",
        paragraphs: [
          "Unlike bulky, water-cooled laser systems that require periodic resonator alignment and high maintenance overhead, solid-state diode units operate on air-cooled semiconductor architecture. Hospitals experience 99.4% operational uptime and minimal per-procedure consumable costs.",
        ],
      },
    ],
    specs: [
      { label: "Primary Wavelengths", value: "980 nm / 1470 nm Dual Output" },
      { label: "Max Optical Output", value: "15W – 30W Continual / Pulsed" },
      { label: "Cooling Method", value: "Internal Solid-State Air Cooling" },
      { label: "Sterilization", value: "Autoclavable Handpieces + Bare Fibers" },
    ],
  },
  "blog-3": {
    subtitle:
      "A pragmatic framework for hospital C-suites, biomedical engineers, and OT committees.",
    keyTakeaways: [
      "Mandate guaranteed on-site response SLAs within 4 hours for emergency surgical units.",
      "Verify comprehensive optical and fiber warranty terms against accidental operator damage.",
      "Audit software upgrade pathways and DICOM / PACS connectivity compliance upfront.",
      "Assess total lifecycle cost including preventative maintenance and preventive calibration.",
    ],
    sections: [
      {
        heading: "Beyond the Initial Capital Outlay",
        paragraphs: [
          "Acquiring high-end surgical machinery is one of the most critical capital expenditures a healthcare institution undertakes. However, procurement teams frequently focus disproportionately on the initial invoice price, underestimating post-warranty service agreements, consumable costs, and vendor downtime penalties.",
          "A comprehensive checklist ensures that every proposal is weighted by clinical ergonomics, uptime assurances, availability of loaner equipment during major service overhauls, and surgeon satisfaction.",
        ],
      },
      {
        heading: "Crucial Vendor Evaluation Criteria",
        paragraphs: [
          "Always demand certified biomedical engineer presence in your region, genuine OEM spare parts availability within 24 hours, and structured clinical training for OT nursing staff upon commissioning. Equipment that sits idle due to operator hesitancy quickly erodes hospital ROI.",
        ],
      },
    ],
    specs: [
      { label: "Recommended SLA", value: "< 4 Hours Critical Response" },
      { label: "Preventative Maintenance", value: "Quarterly Calibration Checks" },
      { label: "Loaner Machine Provision", value: "Guaranteed within 12 Hours" },
      { label: "Staff Certification", value: "Structured Hands-On OT Training" },
    ],
  },
  "blog-4": {
    subtitle:
      "Operational blueprints from high-volume OT suites achieving peak procedural velocity.",
    keyTakeaways: [
      "Standardizing universal sterile trays reduced pre-incision setup delays by 18 minutes.",
      "Dedicated quick-dock mobile laser trolleys eliminated cross-theater cable transit bottlenecks.",
      "Synchronized biomedical handoffs increased surgical slots by 2 to 4 procedures daily.",
      "Real-time digital equipment logging minimized pre-procedure missing-component delays.",
    ],
    sections: [
      {
        heading: "Identifying the True OT Bottlenecks",
        paragraphs: [
          "While surgeon operating speed is often scrutinized, empirical time-motion studies indicate that OT turnaround delays stem primarily from sterile processing lag, delayed instrument tray verification, and cumbersome equipment repositioning.",
          "By implementing modular instrument stacks and purpose-built quick-connect laser and endoscopy carts, the surgical suite transitions seamlessly from one procedure to the next with minimal friction.",
        ],
      },
      {
        heading: "Measurable Financial & Clinical Outcomes",
        paragraphs: [
          "In a 450-bed multi-speciality pilot, optimizing OT turnover unlocked over 110 additional surgical hours per quarter. Beyond revenue growth, surgeons and nursing teams reported lower fatigue levels and improved patient satisfaction scores.",
        ],
      },
    ],
    specs: [
      { label: "Average Time Saved", value: "18 Minutes Per Changeover" },
      { label: "Daily Slot Increase", value: "+2 to +4 Surgical Slots" },
      { label: "Tray Error Reduction", value: "94% Drop in Missing Items" },
      { label: "Staff Morale Score", value: "+35% Improvement" },
    ],
  },
  "blog-5": {
    subtitle:
      "Why Thulium Fiber Laser (TFL) is replacing legacy Holmium in high-complexity endourology.",
    keyTakeaways: [
      "Wavelength of 1940nm closely aligns with the peak absorption of liquid water at 37°C.",
      "Generates ultra-fine 'dust' particles (<0.5mm), eliminating tedious stone basket retrieval.",
      "Near-zero retropulsion maintains stone position in renal calyces without chase-back.",
      "Enables ultra-thin 150μm-200μm fibers with full scope deflection and high irrigation flow.",
    ],
    sections: [
      {
        heading: "The Physics Behind the Dusting Revolution",
        paragraphs: [
          "The 1940nm wavelength of Thulium Fiber Lasers matches the natural water absorption peak nearly four times more closely than the 2100nm of traditional Holmium:YAG. The result is rapid micro-bubble collapse that disintegrates urinary calculi into microscopic dust rather than jagged fragments.",
          "Surgeons can maintain steady vision throughout the procedure, confident that retropulsion will not push fragments back into unreachable calyces.",
        ],
      },
      {
        heading: "Scope Longevity and Irrigation Flow",
        paragraphs: [
          "Because TFL operates efficiently through narrow 150μm fibers, the working channel of flexible video ureterorenoscopes retains superior saline flow and unimpeded 270° bidirectional deflection, protecting expensive digital scopes from thermal and mechanical stress.",
        ],
      },
    ],
    specs: [
      { label: "Laser Wavelength", value: "1940 nm (TFL Peak Water Absorption)" },
      { label: "Repetition Rate", value: "Up to 2400 Hz High-Frequency" },
      { label: "Fiber Diameters", value: "150 μm, 200 μm, 272 μm" },
      { label: "Retropulsion Profile", value: "Minimal to Zero Displacement" },
    ],
  },
  "blog-6": {
    subtitle:
      "Evaluating repair vulnerability, sterilizer cycles, and cross-infection protocols.",
    keyTakeaways: [
      "Reusable scopes average 8 to 15 cases before needing costly optical or deflection repairs.",
      "Single-use digital ureterorenoscopes guarantee pristine optical clarity and zero prior damage.",
      "Eliminates ethylene oxide (EtO) / low-temp hydrogen peroxide turnaround waiting time.",
      "Hybrid hospital strategy: single-use for difficult lower pole stones, reusable for routine cases.",
    ],
    sections: [
      {
        heading: "The True Cost of Reusable Scope Ownership",
        paragraphs: [
          "Flexible video ureterorenoscopes are among the most fragile and heavily utilized instruments in any urology suite. Accidental laser strike inside the working channel, excessive deflection during lower-pole stone access, and harsh automated chemical reprocessing lead to frequent repair bills ranging into thousands of dollars.",
          "Single-use flexible scopes provide guaranteed brand-new optics, full deflection, and zero infection cross-transmission risk, allowing surgeons to operate with complete freedom in difficult anatomies.",
        ],
      },
      {
        heading: "Formulating a Pragmatic Hospital Strategy",
        paragraphs: [
          "Modern tertiary healthcare centers are increasingly deploying a dual strategy: preserving high-end reusable scopes for diagnostic and straightforward mid-ureteral cases, while reserving single-use scopes for high-risk, complex lower-pole lithotripsy where laser deflection poses extreme risk.",
        ],
      },
    ],
    specs: [
      { label: "Deflection Angle", value: "275° Up / 275° Down" },
      { label: "Outer Diameter", value: "7.5 Fr / 8.5 Fr Tapered Tip" },
      { label: "Working Channel", value: "3.6 Fr for High-Flow Irrigation" },
      { label: "Camera Sensor", value: "Digital CMOS with Dual LED illumination" },
    ],
  },
};

export default function Blogs() {
  // 1. Blog posts & bookmark state
  const [blogPosts, setBlogPosts] = useState(() => getAllBlogs());
  const [bookmarkedIds, setBookmarkedIds] = useState(() => getBookmarkedBlogs());
  const [activeModalBlog, setActiveModalBlog] = useState(null);

  // 2. Carousel scroll ref & state
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollIndex, setScrollIndex] = useState(0);

  // 3. Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterRole, setNewsletterRole] = useState("Surgeon / Consultant");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");

  // 4. Toast notification state
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? "" : current));
    }, 3000);
  };

  // Keep blog list and bookmarks in sync
  useEffect(() => {
    const handleUpdate = (e) => {
      if (e?.detail?.blogs) {
        setBlogPosts(e.detail.blogs);
      } else {
        setBlogPosts(getAllBlogs());
      }
    };

    const handleStorage = (e) => {
      if (e.key === "rhs_blogs_v1") {
        setBlogPosts(getAllBlogs());
      }
      if (e.key === "rhs_blogs_saved_v1") {
        setBookmarkedIds(getBookmarkedBlogs());
      }
    };

    const handleSavedUpdate = (e) => {
      if (e?.detail) {
        setBookmarkedIds(e.detail);
      } else {
        setBookmarkedIds(getBookmarkedBlogs());
      }
    };

    window.addEventListener("rhs_blogs_updated", handleUpdate);
    window.addEventListener("rhs_blogs_saved_updated", handleSavedUpdate);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("rhs_blogs_updated", handleUpdate);
      window.removeEventListener("rhs_blogs_saved_updated", handleSavedUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // Update carousel scroll button availability
  const checkScrollBounds = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Compute approximate active card index for indicators
    const firstCard = el.querySelector("[data-blog-card]");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24; // width + gap
      const idx = Math.round(scrollLeft / cardWidth);
      setScrollIndex(Math.max(0, Math.min(idx, blogPosts.length - 1)));
    }
  }, [blogPosts.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);

    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, [checkScrollBounds]);

  // Scroll prev (left) by 1 card step
  const handleScrollLeft = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-blog-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  // Scroll next (right) by 1 card step
  const handleScrollRight = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-blog-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  // Scroll directly to a specific card index
  const scrollToCardIndex = (index) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-blog-card]");
    if (firstCard) {
      const step = firstCard.offsetWidth + 24;
      el.scrollTo({ left: index * step, behavior: "smooth" });
    }
  };

  // Handle bookmark toggle
  const handleToggleBookmark = (e, blog) => {
    e.stopPropagation();
    const updated = toggleBookmarkBlog(blog.id);
    setBookmarkedIds(updated);
    if (updated.includes(blog.id)) {
      showToast(`Saved "${blog.title.slice(0, 28)}..." to your reading list`);
    } else {
      showToast("Removed from reading list");
    }
  };

  // Handle share
  const handleShare = (e, blog) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blogs#${blog.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast(`Link for "${blog.title.slice(0, 24)}..." copied!`);
      });
    } else {
      showToast("Link copied to clipboard!");
    }
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      showToast("Please enter a valid email address");
      return;
    }

    setNewsletterStatus("loading");

    setTimeout(() => {
      const res = saveSubscription({
        email: newsletterEmail.trim(),
        role: newsletterRole,
        source: "blog_page_newsletter",
      });

      if (res.success) {
        setNewsletterStatus("success");
        showToast("Subscribed! Welcome to MedTech Intelligence.");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
        showToast("Subscription could not be saved. Please retry.");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-primary/20 selection:text-primary-dark">
      <SEO
        title="Our Blog | Reinforce Healthcare Services"
        description="Insights, guides, and updates from the world of surgical equipment and hospital innovation."
        keywords="surgical equipment blog, medical lasers, hospital machinery, Reinforce Healthcare Services"
      />

      {/* =========================================================================
          HERO BANNER HEADER (ORIGINAL STRUCTURE PRESERVED)
      ========================================================================= */}
      <section className="relative h-[200px] w-full overflow-hidden sm:h-[240px] md:h-[280px] lg:h-[320px]">
        <img
          src={blogBannerBg}
          alt="Our Blogs banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-10 flex h-full w-full items-center px-5 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-primary sm:text-xs">
              Reinforce Healthcare
            </p>
            <h1 className="text-2xl font-black uppercase tracking-[1px] text-slate-800 sm:text-3xl md:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-3 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
              Insights, guides, and updates from the world of surgical equipment
              and hospital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL SCROLLING CARDS SECTION (EXACTLY 3 CARDS PER DESKTOP VIEW)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-primary border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>LATEST ARTICLES & CLINICAL GUIDES</span>
            </div>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-lg">
              Explore recent breakthroughs in surgical lasers, endourology devices, and OT operational workflows.
            </p>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline-block">
              Swipe or use controls
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleScrollLeft}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer ${canScrollLeft
                    ? "border-slate-300 bg-white text-slate-700 hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white shadow-sm hover:shadow-md hover:shadow-primary/25"
                    : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
                  }`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleScrollRight}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer ${canScrollRight
                    ? "border-slate-300 bg-white text-slate-700 hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white shadow-sm hover:shadow-md hover:shadow-primary/25"
                    : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
                  }`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
            HORIZONTAL SCROLLING ROW CONTAINER
            Viewport Constraint:
            - Mobile: w-[86%] min-w-[86%] max-w-[86%] (single card peek)
            - Tablet: sm:w-[calc((100%-24px)/2)] (exactly 2 cards visible)
            - Desktop: lg:w-[calc((100%-48px)/3)] (EXACTLY 3 cards visible)
        */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {blogPosts.map((post) => {
              const isSaved = bookmarkedIds.includes(post.id);

              return (
                <div
                  key={post.id}
                  data-blog-card
                  onClick={() => setActiveModalBlog(post)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e2edf4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-slate-200/80 cursor-pointer shrink-0 snap-start
                    w-[86%] min-w-[86%] max-w-[86%]
                    sm:w-[calc((100%-24px)/2)] sm:min-w-[calc((100%-24px)/2)] sm:max-w-[calc((100%-24px)/2)]
                    lg:w-[calc((100%-48px)/3)] lg:min-w-[calc((100%-48px)/3)] lg:max-w-[calc((100%-48px)/3)]"
                >
                  {/* Top Image Preview & Badges */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={getResolvedBlogImage(post)}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

                      {/* Category Pill with Glowing Dot */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-primary shadow-sm backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <span>{post.tag}</span>
                      </div>

                      {/* Bookmark Icon Button */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleBookmark(e, post)}
                        title={isSaved ? "Remove bookmark" : "Save article"}
                        className={`absolute top-3.5 right-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer ${isSaved
                            ? "bg-primary text-white shadow-md shadow-primary/30"
                            : "bg-white/90 text-slate-700 hover:bg-white hover:text-primary shadow-sm"
                          }`}
                      >
                        <Bookmark
                          className="h-4 w-4"
                          fill={isSaved ? "currentColor" : "none"}
                          strokeWidth={2}
                        />
                      </button>

                      {/* Reading time overlay pill */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                        <Clock className="h-3 w-3 text-sky-300" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6">
                      {/* Date & Views */}
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-slate-400" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <Eye className="h-3.5 w-3.5 text-slate-400" />
                          {post.views || "1.6k"} reads
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-base sm:text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-primary line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Author & Read More Link */}
                  <div className="border-t border-slate-100 p-5 pt-4 sm:px-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-primary-dark">
                          {post.author?.initials || "RH"}
                        </div>
                        <div className="truncate">
                          <p className="truncate text-xs font-bold text-slate-800">
                            {post.author?.name || "Reinforce Clinical Team"}
                          </p>
                          <p className="truncate text-[10px] text-slate-500">
                            {post.author?.role || "Specialist"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-primary transition-all duration-200 group-hover:text-primary-dark shrink-0">
                        <span>Read</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle Bottom Navigation Indicator Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {blogPosts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCardIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${scrollIndex === idx
                    ? "w-8 bg-gradient-to-r from-primary to-primary-dark shadow-sm shadow-primary/30"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================================
          FULL ARTICLE MODAL / QUICK READER
      ========================================================================= */}
      <AnimatePresence>
        {activeModalBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalBlog(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalBlog(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Top Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gradient-to-r from-primary to-primary-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {activeModalBlog.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {activeModalBlog.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5" />
                  {activeModalBlog.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl leading-tight">
                {activeModalBlog.title}
              </h2>

              {/* Author & Header Actions */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark font-bold text-white shadow-sm shadow-primary/20">
                    {activeModalBlog.author?.initials || "RH"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {activeModalBlog.author?.name || "Reinforce Clinical Team"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {activeModalBlog.author?.role || "Surgical Equipment Specialist"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleToggleBookmark(e, activeModalBlog)}
                    className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all ${bookmarkedIds.includes(activeModalBlog.id)
                        ? "border-primary bg-primary text-white shadow-sm shadow-primary/25"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
                      }`}
                  >
                    <Bookmark
                      className="h-4 w-4"
                      fill={bookmarkedIds.includes(activeModalBlog.id) ? "currentColor" : "none"}
                    />
                    <span>
                      {bookmarkedIds.includes(activeModalBlog.id) ? "Saved" : "Save Article"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleShare(e, activeModalBlog)}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition-all hover:border-primary hover:text-primary"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Hero Image in Modal */}
              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                <img
                  src={getResolvedBlogImage(activeModalBlog)}
                  alt={activeModalBlog.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Key Takeaways Box */}
              {BLOG_ARTICLE_DETAILS[activeModalBlog.id]?.keyTakeaways && (
                <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/70 p-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span>Key Clinical Takeaways</span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {BLOG_ARTICLE_DETAILS[activeModalBlog.id].keyTakeaways.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content Paragraphs */}
              <div className="mt-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
                {BLOG_ARTICLE_DETAILS[activeModalBlog.id]?.sections ? (
                  BLOG_ARTICLE_DETAILS[activeModalBlog.id].sections.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-primary pl-3">
                        {sec.heading}
                      </h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-slate-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))
                ) : (
                  <p className="text-slate-600 leading-relaxed">
                    {activeModalBlog.excerpt}
                  </p>
                )}
              </div>

              {/* Equipment Technical Specifications Table if available */}
              {BLOG_ARTICLE_DETAILS[activeModalBlog.id]?.specs && (
                <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                      Technical Benchmark & Operating Parameters
                    </h4>
                  </div>
                  <div className="divide-y divide-slate-100 bg-white">
                    {BLOG_ARTICLE_DETAILS[activeModalBlog.id].specs.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-2 px-5 py-3 text-xs sm:text-sm">
                        <span className="font-semibold text-slate-600">{item.label}</span>
                        <span className="text-slate-900 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Equipment Recommendation CTA Banner */}
              <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 via-sky-50 to-primary-dark/10 p-6 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    Need hospital trial demonstrations or machine rental quotes?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Reinforce Healthcare Services provides turnkey leasing and clinical support across India.
                  </p>
                </div>
                <Link
                  to="/product-enquiry"
                  onClick={() => setActiveModalBlog(null)}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/25 hover:scale-105 transition-all"
                >
                  <span>Request OT Demo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          TOAST FEEDBACK NOTIFICATION
      ========================================================================= */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-primary/30 bg-slate-900/95 px-5 py-3.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
