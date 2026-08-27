// import { hicanImg } from "../../assets/images/hican_tech.png";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              TECHNOLOGY THAT EMPOWERS PRECISION
            </span>
            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Advanced Features &{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Smart engineering for precise control, superior safety and
            <br className="hidden sm:block" />
            exceptional surgical outcomes.
          </p>
        </div>

        <div className=""></div>
      </div>
    </section>
  );
};

export default Features;
