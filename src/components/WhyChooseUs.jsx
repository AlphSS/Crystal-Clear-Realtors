import {
  BadgeCheck,
  FileCheck2,
  Handshake,
  Headphones,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparent Information",
    description:
      "Clear and honest information about every property, without unnecessary surprises.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Properties",
    description:
      "We focus on genuine properties and reliable opportunities for our clients.",
  },
  {
    icon: Handshake,
    title: "Personalized Guidance",
    description:
      "Property recommendations based on your requirements, budget and goals.",
  },
  {
    icon: FileCheck2,
    title: "Smooth Documentation",
    description:
      "Guidance throughout the documentation and property transaction process.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description:
      "Understand property opportunities and make informed investment decisions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team stays connected with you from property search to closing.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#063F2F] py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#F47B20]/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F47B20]">
              Why Crystal Clear
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
              Built on Transparency.
              <span className="mt-1 block text-[#E8D8B5]">
                Driven by Your Goals.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 md:text-lg">
              Buying, selling, renting or investing in property is a significant
              decision. We believe the process should be straightforward,
              informed and transparent.
            </p>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              At Crystal Clear Realtors, we combine local market knowledge with
              personalized guidance to help you move forward with confidence.
            </p>

            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F47B20] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D96512] hover:shadow-lg"
            >
              Learn More About Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/40 hover:bg-white/[0.09]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F47B20]/10 text-[#F47B20] transition-colors duration-300 group-hover:bg-[#F47B20] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
