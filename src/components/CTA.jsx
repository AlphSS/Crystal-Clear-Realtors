import { ArrowRight, Phone } from "lucide-react";

function CTA() {
  return (
    <section className="bg-[#F8F4EC] px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl bg-[#063F2F] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-20">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#F47B20]/20" />

          {/* Small decorative dot */}
          <div className="absolute right-20 top-20 hidden h-2 w-2 rounded-full bg-[#F47B20] md:block" />

          <div className="relative mx-auto max-w-3xl">
            {/* Label */}
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F47B20]">
              Your Property Journey Starts Here
            </p>

            {/* Heading */}
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Find Your
              <span className="block text-[#E8D8B5]">Next Property</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Whether you're buying, selling, renting or investing, our team is
              ready to help you find the right opportunity with complete
              transparency.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#F47B20] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D96512] hover:shadow-lg sm:w-auto"
              >
                Talk to an Expert
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:9112009596"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
