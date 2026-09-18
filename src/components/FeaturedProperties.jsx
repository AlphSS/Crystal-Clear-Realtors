import { ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

function FeaturedProperties() {
  return (
    <section className="bg-[#F8F4EC] py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F47B20]">
              Handpicked For You
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#063F2F] md:text-5xl">
              Featured Properties
            </h2>

            <p className="mt-3 max-w-xl text-base text-stone-600 md:text-lg">
              Explore some of the properties currently available through Crystal
              Clear Realtors.
            </p>
          </div>

          {/* View all */}
          <button
            type="button"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#063F2F] transition-colors hover:text-[#F47B20]"
          >
            View All Properties
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Property Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
