import { ArrowUpRight } from "lucide-react";

function LocationCard({ location }) {
  return (
    <article className="group relative h-[320px] overflow-hidden rounded-2xl">
      {/* Image */}
      <img
        src={location.image}
        alt={location.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-2xl font-bold">{location.name}</h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-white/80">{location.description}</span>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F47B20] transition-all duration-300 group-hover:bg-white group-hover:text-[#063F2F]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default LocationCard;
