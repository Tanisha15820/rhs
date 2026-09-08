import { useState, useEffect } from "react";
import { Bookmark, Plus } from "lucide-react";
import blogBannerBg from "../assets/images/blogs.png";
import { getAllBlogs, getResolvedBlogImage } from "../utils/blogStorage";

/**
 * Blogs Page
 * Displays the list of healthcare articles and surgical innovation insights.
 * Dynamically synchronizes with the Admin Dashboard via browser events and localStorage.
 */
function Blogs() {
  // 1. Initialize blog posts from storage
  const [blogPosts, setBlogPosts] = useState(() => getAllBlogs());

  // 2. Keep blog list in sync if changed in admin
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
    };

    window.addEventListener("rhs_blogs_updated", handleUpdate);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("rhs_blogs_updated", handleUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Header */}
      <section
        className="relative h-[260px] w-full overflow-hidden md:h-[280px]"
        style={{
          backgroundImage: `url(${blogBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <div className="mt-3 h-[2px] w-10 bg-primary" />
            <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
              Insights, guides, and updates from the world of surgical equipment and hospital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards List */}
      <section className="bg-white px-4 py-12 sm:px-5 md:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="sticky mb-6"
              style={{
                top: `${90 + index * 22}px`,
                zIndex: index + 1,
              }}
            >
              {/* Blog Card Container */}
              <article className="group relative grid min-h-[340px] cursor-pointer overflow-hidden rounded-[22px] border border-[#e2edf4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl md:grid-cols-[46%_54%] lg:min-h-[360px]">
                {/* Left Side: Image & Category Badge */}
                <div className="relative h-[260px] overflow-hidden bg-slate-100 md:h-full">
                  <img
                    src={getResolvedBlogImage(post)}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm md:left-5 md:top-5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span>{post.tag}</span>
                  </div>
                </div>

                {/* Right Side: Article Details & Content */}
                <div className="relative flex min-h-[340px] flex-col justify-center px-6 py-8 md:min-h-[360px] md:px-9 lg:px-11 lg:py-9">
                  {/* Bookmark Icon Button */}
                  <button
                    type="button"
                    className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8fd] text-primary transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white md:right-6 md:top-6 cursor-pointer"
                  >
                    <Bookmark className="h-4 w-4" strokeWidth={1.8} />
                  </button>

                  {/* Article Title */}
                  <h2 className="relative z-10 mt-2 max-w-[500px] pr-10 text-xl font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-primary sm:text-2xl md:text-[24px]">
                    {post.title}
                  </h2>

                  {/* Accent Line */}
                  <div className="relative z-10 mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-primary to-primary-dark" />

                  {/* Excerpt Summary */}
                  <p className="relative z-10 mt-3 max-w-[520px] text-xs leading-relaxed text-slate-600 line-clamp-3 sm:text-[13px]">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
