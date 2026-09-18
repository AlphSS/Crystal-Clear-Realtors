import { Link } from "react-router-dom"
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize,
  ArrowUpRight,
} from "lucide-react";

function PropertyCard({ property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

        {/* Property type */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold text-white ${
            property.type === "For Rent" ? "bg-[#F47B20]" : "bg-[#063F2F]"
          }`}
        >
          {property.type}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to shortlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#063F2F] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[#F47B20] hover:text-white"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="truncate text-xl font-bold text-[#063F2F]">
          {property.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-sm text-stone-500">
          <MapPin size={15} className="shrink-0 text-[#F47B20]" />

          <span>{property.location}</span>
        </div>

        {/* Property information */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-b border-stone-200 pb-5">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <BedDouble size={17} className="text-[#063F2F]" />
            <span>{property.bedrooms} BHK</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Maximize size={16} className="text-[#063F2F]" />
            <span>{property.area}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Bath size={16} className="text-[#063F2F]" />
            <span>{property.bathrooms} Baths</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-stone-500">Starting from</p>

            <p className="mt-1 text-xl font-bold text-[#F47B20]">
              {property.price}
            </p>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="group/button flex items-center gap-2 text-sm font-semibold text-[#063F2F] transition-colors hover:text-[#F47B20]"
          >
            View Details
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#063F2F] text-white transition-all duration-300 group-hover/button:bg-[#F47B20]">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;
