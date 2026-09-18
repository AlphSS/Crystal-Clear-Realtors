import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  TrendingUp,
  ShieldCheck,
  Target,
} from "lucide-react";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Invest() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    location: "all",
    propertyType: "all",
    bedrooms: "all",
  });

  const investmentProperties = properties.filter((property) => {
    const matchesInvestment = property.investmentReady === true;

    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      filters.location === "all" ||
      property.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesType =
      filters.propertyType === "all" ||
      property.propertyType === filters.propertyType;

    const matchesBedrooms =
      filters.bedrooms === "all" ||
      property.bedrooms === Number(filters.bedrooms);

    return (
      matchesInvestment &&
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesBedrooms
    );
  });

  const updateFilter = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "all",
      propertyType: "all",
      bedrooms: "all",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC]">
      {/* Hero */}
      <section className="bg-[#063F2F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
            INVEST WITH CLARITY
          </p>

          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Investment Opportunities
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explore selected properties that may align with your investment
            objectives and long-term plans.
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="border-b border-stone-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-[#F8F4EC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white">
              <TrendingUp size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-[#063F2F]">Growth Potential</h3>
              <p className="mt-1 text-sm text-[#68736F]">
                Explore properties selected for investment consideration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-[#F8F4EC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-[#063F2F]">
                Informed Decisions
              </h3>
              <p className="mt-1 text-sm text-[#68736F]">
                Understand the property before making a decision.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-[#F8F4EC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F47B20] text-white">
              <Target size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-[#063F2F]">Goal Focused</h3>
              <p className="mt-1 text-sm text-[#68736F]">
                Find opportunities that fit your investment objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="border-b border-stone-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search investment properties..."
                className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-4 pl-12 pr-4 text-[#17201D] outline-none transition focus:border-[#F47B20]"
              />
            </div>

            {/* Filter Button */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-4 font-medium text-[#063F2F] transition hover:border-[#F47B20] hover:text-[#F47B20]"
            >
              <SlidersHorizontal size={19} />
              Filters
              {showFilters && <X size={18} />}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-5 rounded-2xl border border-stone-200 bg-[#F8F4EC] p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#063F2F]">
                    Location
                  </label>

                  <select
                    value={filters.location}
                    onChange={(e) => updateFilter("location", e.target.value)}
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#17201D] outline-none focus:border-[#F47B20]"
                  >
                    <option value="all">All Locations</option>
                    <option value="Kharadi">Kharadi</option>
                    <option value="Mahalunge">Mahalunge</option>
                    <option value="Baner">Baner</option>
                    <option value="Wakad">Wakad</option>
                    <option value="Hinjewadi">Hinjewadi</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#063F2F]">
                    Property Type
                  </label>

                  <select
                    value={filters.propertyType}
                    onChange={(e) =>
                      updateFilter("propertyType", e.target.value)
                    }
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#17201D] outline-none focus:border-[#F47B20]"
                  >
                    <option value="all">All Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Plot">Plot</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#063F2F]">
                    Bedrooms
                  </label>

                  <select
                    value={filters.bedrooms}
                    onChange={(e) => updateFilter("bedrooms", e.target.value)}
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#17201D] outline-none focus:border-[#F47B20]"
                  >
                    <option value="all">Any BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-semibold text-[#F47B20] transition hover:text-[#D96512]"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Investment Properties */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
                SELECTED OPPORTUNITIES
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#063F2F] sm:text-4xl">
                Properties to Explore
              </h2>
            </div>

            <p className="hidden text-sm text-stone-500 sm:block">
              {investmentProperties.length} properties found
            </p>
          </div>

          {investmentProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {investmentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200 bg-white px-6 py-16 text-center">
              <h3 className="font-serif text-2xl font-bold text-[#063F2F]">
                No investment properties found
              </h3>

              <p className="mt-2 text-stone-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  clearFilters();
                }}
                className="mt-5 rounded-lg bg-[#F47B20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D96512]"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Invest;
