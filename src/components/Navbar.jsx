import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Sell", path: "/sell" },
    { name: "Rent", path: "/rent" },
    { name: "Invest", path: "/invest" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#F8F4EC]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Crystal Clear Realtors"
            className="h-12 w-auto object-contain"
          />

          <div className="leading-none">
            <div className="font-serif text-xl font-bold tracking-wide text-[#063F2F]">
              CRYSTAL CLEAR
            </div>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#F47B20]">
                REALTORS
              </span>
            </div>

            <div className="mt-1 text-[9px] tracking-wide text-stone-500">
              Build with Transparency
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative py-2 text-sm font-medium text-[#17201D] transition-colors duration-300 hover:text-[#F47B20]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Phone */}
          <a
            href="tel:9112009596"
            className="flex items-center gap-2 text-sm font-semibold text-[#063F2F] transition-colors hover:text-[#F47B20]"
          >
            <Phone size={16} strokeWidth={2} />
            <span>9112009596</span>
          </a>

          {/* CTA */}
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-lg bg-[#F47B20] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D96512] hover:shadow-md"
          >
            Enquire Now
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#063F2F] transition hover:bg-stone-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-stone-200 bg-[#F8F4EC] lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-stone-200 py-4 text-base font-medium text-[#17201D] transition-colors hover:text-[#F47B20]"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:9112009596"
              className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#063F2F]"
            >
              <Phone size={17} />
              9112009596
            </a>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#F47B20] px-5 py-3 font-semibold text-white"
            >
              Enquire Now
              <ArrowRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
