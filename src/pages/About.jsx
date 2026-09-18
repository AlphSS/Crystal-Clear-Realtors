import {
  Eye,
  ShieldCheck,
  Users,
  Target,
  Handshake,
  Building2,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear communication and straightforward information throughout the property journey.",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Helping clients make property decisions with clarity and confidence.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Understanding individual requirements before suggesting suitable opportunities.",
    },
    {
      icon: Target,
      title: "Right Guidance",
      description:
        "Providing practical guidance based on your property requirements and objectives.",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Buy",
      description:
        "Explore residential and commercial properties based on your requirements.",
    },
    {
      icon: Handshake,
      title: "Sell",
      description:
        "Connect with our team to discuss your property and selling requirements.",
    },
    {
      icon: Building2,
      title: "Rent",
      description:
        "Find rental opportunities that suit your location and lifestyle preferences.",
    },
    {
      icon: Target,
      title: "Invest",
      description:
        "Explore property opportunities for your investment objectives.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F4EC]">
      {/* Hero */}
      <section className="bg-[#063F2F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
            ABOUT US
          </p>

          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Built on Transparency
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            A property-focused approach built around clear communication,
            thoughtful guidance and understanding what matters to you.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
              CRYSTAL CLEAR REALTORS
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063F2F] sm:text-4xl">
              Your property journey, with clarity at every step.
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-[#68736F]">
              <p>
                Finding, selling or investing in property is an important
                decision. At Crystal Clear Realtors, our approach is centered
                around understanding your requirements and providing clear
                information throughout the process.
              </p>

              <p>
                From exploring properties to discussing your requirements, we
                aim to make the property journey more organized, transparent and
                easier to understand.
              </p>

              <p>
                Whether you are looking to buy, sell, rent or explore investment
                opportunities, our team is here to help you take the next step.
              </p>
            </div>
          </div>

          {/* Brand Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#063F2F] p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F47B20]/20" />

            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
                OUR APPROACH
              </p>

              <h3 className="mt-4 font-serif text-3xl font-bold text-white">
                Build with Transparency
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                We believe property decisions should be based on clear
                information, open communication and a proper understanding of
                your goals.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50">
                  Buy · Sell · Rent · Invest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
              WHAT MATTERS TO US
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#063F2F] sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-4 leading-7 text-[#68736F]">
              The principles that shape how we approach every property
              conversation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-stone-200 bg-[#F8F4EC] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063F2F] text-white transition-colors group-hover:bg-[#F47B20]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-[#063F2F]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68736F]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
              WHAT WE DO
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#063F2F] sm:text-4xl">
              Property Services
            </h2>

            <p className="mt-4 leading-7 text-[#68736F]">
              Explore our property services designed around different stages of
              your real-estate journey.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F47B20] text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-[#063F2F]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68736F]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl bg-[#063F2F] px-6 py-12 text-center sm:px-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
            LET'S TALK PROPERTY
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Have a property goal in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Tell us what you are looking for and let's start a conversation.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex rounded-lg bg-[#F47B20] px-6 py-3.5 font-semibold text-white transition hover:bg-[#D96512]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
