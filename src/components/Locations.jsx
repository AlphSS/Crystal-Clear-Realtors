import { ArrowRight } from "lucide-react";
import LocationCard from "./LocationCard";
import locations from "../data/locations";

function Locations() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F47B20]">
              Explore Pune
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#063F2F] md:text-5xl">
              Explore Properties by Location
            </h2>

            <p className="mt-3 max-w-xl text-base text-stone-600 md:text-lg">
              Discover opportunities in Pune's most sought-after neighbourhoods.
            </p>
          </div>

          <button
            type="button"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#063F2F] transition-colors hover:text-[#F47B20]"
          >
            View All Locations
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Locations */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
