import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import { getAllTestimonials } from "../utils/testimonialStorage";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(getAllTestimonials);

  useEffect(() => {
    const handleUpdate = () => {
      setTestimonials(getAllTestimonials());
    };

    window.addEventListener("rhs_testimonials_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("rhs_testimonials_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              Testimonials
            </span>
            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our Trusted{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Hear from healthcare professionals and customers
            <br className="hidden sm:block" />
            who trust us for quality products
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const animIdx = index % 6;
            return (
              <motion.div
                key={testimonial.id || index}
                initial={{
                  opacity: 0,
                  x:
                    animIdx === 0
                      ? -180
                      : animIdx === 1
                        ? 20
                        : animIdx === 2
                          ? 180
                          : animIdx === 3
                            ? -120
                            : animIdx === 4
                              ? 100
                              : 180,
                  y:
                    animIdx === 0
                      ? 30
                      : animIdx === 1
                        ? -100
                        : animIdx === 2
                          ? 30
                          : animIdx === 3
                            ? 100
                            : animIdx === 4
                              ? -50
                              : 80,
                  rotate:
                    animIdx === 0
                      ? -8
                      : animIdx === 1
                        ? 6
                        : animIdx === 2
                          ? 10
                          : animIdx === 3
                            ? -5
                            : animIdx === 4
                              ? 8
                              : -7,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.5,
                  delay: (index % 3) * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-xl border border-slate-100 p-5 shadow-sm ${testimonial.bg || "bg-[#EDE9FE]"}`}
              >

              {/* Quote */}
              {/* <div className="mb-2 text-4xl font-bold leading-none text-slate-800">
                “
              </div> */}

              {/* Text */}
              <p className="min-h-[90px] text-sm leading-5 text-slate-700">
                {testimonial.text}
              </p>

              {/* User */}
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {testimonial.name}
                  </h4>

                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
