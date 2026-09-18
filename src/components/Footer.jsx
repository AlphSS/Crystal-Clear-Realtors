import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "Buy", "Sell", "Rent", "Invest", "About Us"];

const services = [
  "Residential Properties",
  "Commercial Properties",
  "Investment Opportunities",
  "Property Consultation",
];

function Footer() {
  return (
    <footer className="bg-[#022E23] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1.1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <span className="font-serif text-xl font-bold text-[#063F2F]">
                  C
                </span>
              </div>

              <div>
                <div className="font-serif text-xl font-bold tracking-wide">
                  CRYSTAL CLEAR
                </div>

                <div className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-[#F47B20]">
                  REALTORS
                </div>
              </div>
            </a>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Build with Transparency. Discover trusted residential, commercial
              and investment opportunities with Crystal Clear Realtors.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-[#F47B20] hover:bg-[#F47B20] hover:text-white"
                >
                  IG
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-[#F47B20] hover:bg-[#F47B20] hover:text-white"
                >
                  FB
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-[#F47B20] hover:bg-[#F47B20] hover:text-white"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#E8D8B5]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-[#F47B20]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#E8D8B5]">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="group flex items-start gap-1 text-sm leading-5 text-white/60 transition-colors hover:text-[#F47B20]"
                  >
                    {service}

                    <ArrowUpRight
                      size={13}
                      className="mt-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#E8D8B5]">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="tel:9112009596"
                className="flex gap-3 text-sm text-white/60 transition-colors hover:text-[#F47B20]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#F47B20]" />

                <span>9112009596</span>
              </a>

              <a
                href="mailto:info@crystalclearrealtors.com"
                className="flex gap-3 text-sm text-white/60 transition-colors hover:text-[#F47B20]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#F47B20]" />

                <span className="break-all">info@crystalclearrealtors.com</span>
              </a>

              <div className="flex gap-3 text-sm leading-6 text-white/60">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#F47B20]" />

                <span>
                  Pune, Maharashtra
                  <br />
                  India
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F47B20] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D96512]"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-5 text-xs text-white/40 sm:px-10 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Crystal Clear Realtors. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
