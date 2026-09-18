import SearchBar from "./SearchBar";
import hero from "../assets/images/hero.png";
import { Building2, ShieldCheck, Star, Users } from "lucide-react";

const locations = ["Baner", "Wakad", "Kharadi", "Hinjewadi", "Viman Nagar"];

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC]/95 via-[#F8F4EC]/80 to-[#063F2F]/55" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-[1400px] items-center px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F47B20]">
            Build with Transparency
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#063F2F] md:text-7xl">
            Find the Right Property for a
            <span className="block text-[#F47B20]">Better Tomorrow</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-stone-700">
            Discover residential and commercial properties with trusted guidance
            and complete transparency.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>

          {/* Popular Locations */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-stone-700">
              Popular:
            </span>

            {locations.map((loc) => (
              <button
                key={loc}
                className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm transition hover:border-[#F47B20] hover:text-[#F47B20]"
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-stone-300 pt-8 md:grid-cols-4">
            <Stat
              icon={<Users size={22} />}
              value="150+"
              label="Happy Clients"
            />

            <Stat
              icon={<Building2 size={22} />}
              value="500+"
              label="Properties"
            />

            <Stat
              icon={<ShieldCheck size={22} />}
              value="100%"
              label="Transparent"
            />

            <Stat icon={<Star size={22} />} value="4.7" label="Google Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div>
      <div className="mb-3 text-[#F47B20]">{icon}</div>

      <div className="text-3xl font-bold text-[#063F2F]">{value}</div>

      <div className="mt-1 text-sm text-stone-600">{label}</div>
    </div>
  );
}
