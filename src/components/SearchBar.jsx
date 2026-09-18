import { MapPin, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl rounded-2xl bg-white p-2 shadow-xl">
      <div className="flex flex-col md:flex-row gap-2">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#F47B20] px-5 py-4 font-medium text-white">
          <MapPin size={18} />
          Pune
        </button>

        <input
          type="text"
          placeholder="Search locality, project or builder"
          className="flex-1 rounded-xl border-none px-4 outline-none"
        />

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#063F2F] px-6 py-4 font-semibold text-white transition hover:bg-[#022E23]">
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
}
