import {
  House,
  Building2,
  TrendingUp,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Residential Properties",
    description:
      "Find your dream home from premium apartments, villas and more.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Office spaces, retail shops and commercial investments in prime locations.",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description:
      "Explore high-potential properties for a secure and prosperous future.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "From property search to registration, we're with you every step of the way.",
  },
];

function Services() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F47B20]">
            Our Services
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#063F2F] md:text-5xl">
            What We Help You With
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">
            Comprehensive real estate solutions tailored to your property needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-[#F8F4EC] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F47B20]/40 hover:shadow-xl"
              >
                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#063F2F]/5 transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#F47B20] shadow-sm transition-all duration-300 group-hover:bg-[#063F2F] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-xl font-bold text-[#17201D]">
                  {service.title}
                </h3>

                <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-stone-600">
                  {service.description}
                </p>

                {/* Explore */}
                <button className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-[#F47B20] transition-all duration-300 group-hover:gap-3">
                  Explore
                  <ArrowUpRight size={17} />
                </button>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F47B20] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
