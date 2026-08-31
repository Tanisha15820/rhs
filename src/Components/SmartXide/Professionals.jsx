import { Quote, UserRound } from "lucide-react";
import professionalImage from "../../assets/images/professional-img.png";

const Professionals = () => {
  const testimonials = [
    {
      quote:
        "I've been using diode laser for stapedotomies since the end of the 1990s. It's very easy to use, safe and makes the surgical procedure faster. I started with 940 nm and switched to 980 nm which I prefer. The main characteristic of 980 nm is that it's partially absorbed by water, therefore the perilymph, although not in its margin, acts as a backstop and therefore does not produce any heating of the inner ear.",
      name: "Dr. Arturo Mario Poletti",
      role: "Consultant - Department of ENT Surgery",
      location: "American Hospital Dubai (UAE)",
    },

    {
      quote:
        "The DEKA CO₂ laser, with progressive scanning technology, makes surgery on delicate tissues, like vocal cords, easier and safer. This is a wonderful tool for selective reconstruction procedures of the airways, with a series of significant advantages that go from ablation depth control, to reduced thermal damage, to lower dependence on the imprecise movements of the surgeon's hand.",
      name: "Dr. Guillermo Campos",
      role: "Director - Instituto de Laryngology",
      location:
        "Consultant - Department of Surgery, Fundación Santa Fé de Bogotá, Colombia",
    },

    {
      quote:
        "Since 2007, with this technique, I have performed hundreds of procedures and most patients have a long follow-up with good results. The One Shot diode laser technique significantly simplifies the surgical procedure, especially when using contact tips. The main advantage is the use of manual perforation and microdrill which are not selective and precise on the delicate structures of the inner ear.",
      name: "Dr. Stefano Dallari",
      role: "Director of the ENT Surgery Unit",
      location: "Ospedale di Fermo, Italy",
    },

    {
      quote:
        "Thanks to the precision and reliability that only a scan-assisted CO₂ laser microsurgery can offer, the new HiScan Surgical system, along with the EasySpot Hybrid micromanipulator, has allowed me to achieve excellent results in the treatment of delicate and complex surgical procedures such as transoral larynx surgery and laser stapedotomy.",
      name: "Dr. Stefano Dallari",
      role: "Director of the ENT Surgery Unit",
      location: "Ospedale di Fermo, Italy",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFE] py-16 md:py-20 lg:py-24">
      {/* Left soft glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E6F7FA] opacity-50 blur-3xl" />

      {/* Right soft glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#EAF3FF] opacity-70 blur-3xl" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute right-[8%] top-20 hidden opacity-30 lg:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-[#53B9D0]" />
          ))}
        </div>
      </div>

      {/* <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#20AFA7]" />

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#20AFA7] sm:text-sm">
            Trusted by Experts. Proven by Experience
          </p>
        </div>

        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
          The Experience of{" "}
          <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
            Professionals
          </span>
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#7181A3] md:text-lg md:leading-8">
          Real insights from surgeons who use SmartXide² TRIO technology in
          their daily practice for better patient outcomes.
        </p> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#20AFA7] sm:text-xs">
              Trusted by Experts. Proven by Experience
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl md:text-5xl">
            The Experience of{" "}
            <span className="bg-gradient-to-r from-[#19A8E8] to-[#2525B8] bg-clip-text text-transparent">
              Professionals.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#7C879C]">
            Real insights from surgeons who use SmartXide² TRIO technology in
            <br className="hidden sm:block" />
            their daily practice for better patient outcomes.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:w-[76%]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#DFE8F2]
                  bg-white
                  shadow-[0_8px_30px_rgba(28,72,120,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#B8DDE8]
                  hover:shadow-[0_16px_40px_rgba(28,72,120,0.11)]
                "
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#18B6C1] via-[#27A7D9] to-[#5A8DEB]" />

                <div className="relative px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
                  {/* Large opening quote */}

                  <div className="absolute left-5 top-3">
                    <Quote
                      size={25}
                      strokeWidth={3}
                      className="fill-[#19A8B5] text-[#19A8B5]"
                    />
                  </div>

                  {/* Quote */}

                  <p className="min-h-[170px] pl-8 pr-4 text-xs leading-[22px] text-[#53637D] sm:text-[12px] sm:leading-6">
                    {testimonial.quote}
                  </p>

                  {/* Closing quote */}

                  <div className="absolute bottom-3 right-7">
                    <Quote
                      size={30}
                      strokeWidth={3}
                      className="rotate-180 fill-[#19A8B5] text-[#19A8B5]"
                    />
                  </div>
                </div>

                <div className="border-t border-[#E9EFF5] bg-[#FBFDFF] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    {/* Doctor icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#BDECEF]
                        bg-[#ECFAFB]
                      "
                    >
                      <UserRound
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#17A5B2]"
                      />
                    </div>

                    {/* Doctor information */}

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#1499A7] sm:text-base">
                        {testimonial.name}
                      </p>

                      <p className="mt-0.5 text-xs leading-4 text-[#687895] sm:text-[13px] sm:leading-5">
                        {testimonial.role}
                      </p>

                      <p className="text-xs leading-4 text-[#687895] sm:text-[13px] sm:leading-5">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* image */}

          <div
            className="
              pointer-events-none
              relative
              mt-10
              flex
              justify-center

              lg:pointer-events-auto
              lg:absolute
              lg:-right-0
              lg:bottom-0
              lg:mt-0
              lg:block
              lg:h-[500px]
              lg:w-[400px]
            "
          >
            {/* Soft glow behind image */}

            <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-[#D9F2F8] opacity-60 blur-3xl" />

            {/* Image */}

            <img
              src={professionalImage}
              alt="Medical professional"
              className="
                relative
                z-10
                h-auto
                w-[360px]
                max-w-none
                object-contain

                sm:w-[430px]

                lg:absolute
                lg:bottom-[-5px]
                lg:right-[-65px]
                lg:w-[510px]
              "
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-70">
        <svg
          viewBox="0 0 1440 140"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100C180 145 330 135 490 82C660 28 770 45 930 88C1100 133 1250 125 1440 45V140H0V100Z"
            fill="#EEF5FF"
          />

          <path
            d="M0 90C180 135 340 125 500 75C650 28 790 42 940 82C1100 125 1260 115 1440 40"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Professionals;
