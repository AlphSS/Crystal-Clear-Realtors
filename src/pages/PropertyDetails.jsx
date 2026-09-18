import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Phone,
  Mail,
  Car,
  Building2,
  Sofa,
  CalendarDays,
  Compass,
  Layers3,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Heart,
} from "lucide-react";

import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((property) => property.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F8F4EC] px-4 py-32 text-center">
        <h1 className="font-serif text-4xl font-bold text-[#063F2F]">
          Property Not Found
        </h1>

        <p className="mt-4 text-[#68736F]">
          The property you're looking for doesn't exist.
        </p>

        <Link
          to="/buy"
          className="mt-7 inline-flex rounded-lg bg-[#F47B20] px-6 py-3 font-semibold text-white transition hover:bg-[#D96512]"
        >
          Browse Properties
        </Link>
      </div>
    );
  }

  const backPath = property.purpose === "rent" ? "/rent" : "/buy";

  return (
    <div className="min-h-screen bg-[#F8F4EC]">
      {/* ================= IMAGE SECTION ================= */}
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Back */}
          <div className="mb-5 flex items-center justify-between">
            <Link
              to={backPath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#063F2F] transition hover:text-[#F47B20]"
            >
              <ArrowLeft size={17} />
              Back to Properties
            </Link>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-[#063F2F] transition hover:border-[#F47B20] hover:text-[#F47B20]"
              >
                <Share2 size={17} />
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-[#063F2F] transition hover:border-[#F47B20] hover:text-[#F47B20]"
              >
                <Heart size={17} />
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={property.image}
              alt={property.title}
              className="h-[330px] w-full object-cover sm:h-[480px] lg:h-[600px]"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Status */}
            <div className="absolute left-5 top-5 rounded-lg bg-[#F47B20] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              {property.purpose === "rent" ? "For Rent" : "For Sale"}
            </div>

            {/* Bottom Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/80">
                    {property.propertyType}
                  </p>

                  <h1 className="mt-1 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {property.title}
                  </h1>

                  <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={16} />
                    {property.location}
                  </div>
                </div>

                <div className="rounded-xl bg-white px-5 py-3 shadow-lg">
                  <p className="text-xs text-stone-500">
                    {property.purpose === "rent" ? "Monthly Rent" : "Price"}
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#063F2F]">
                    {property.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[1fr_370px]">
          {/* LEFT */}
          <div>
            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <SpecCard
                icon={<BedDouble size={20} />}
                label="Bedrooms"
                value={`${property.bedrooms} BHK`}
              />

              <SpecCard
                icon={<Bath size={20} />}
                label="Bathrooms"
                value={`${property.bathrooms} Baths`}
              />

              <SpecCard
                icon={<Maximize size={20} />}
                label="Area"
                value={property.area}
              />

              <SpecCard
                icon={<Car size={20} />}
                label="Parking"
                value={property.parking || "Available"}
              />
            </div>

            {/* Overview */}
            <div className="mt-12">
              <SectionTitle
                eyebrow="PROPERTY OVERVIEW"
                title="Everything You Need to Know"
              />

              <p className="mt-5 leading-7 text-[#68736F]">
                {property.title} is a {property.bedrooms} BHK{" "}
                {property.propertyType.toLowerCase()} located in{" "}
                {property.location}. The property offers approximately{" "}
                {property.area} of space and is available{" "}
                {property.purpose === "rent" ? "for rent" : "for sale"}.
              </p>
            </div>

            {/* Highlights */}
            {property.highlights?.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-2xl font-bold text-[#063F2F]">
                  Property Highlights
                </h3>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {property.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-[#F47B20]"
                      />

                      <span className="text-sm text-[#17201D]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {property.amenities?.length > 0 && (
              <div className="mt-12">
                <SectionTitle
                  eyebrow="AMENITIES"
                  title="Designed for Comfortable Living"
                />

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 transition hover:border-[#F47B20]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F8F4EC] text-[#F47B20]">
                        <CheckCircle2 size={17} />
                      </div>

                      <span className="text-sm font-medium text-[#17201D]">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Property Details */}
            <div className="mt-12">
              <SectionTitle eyebrow="PROPERTY DETAILS" title="Specifications" />

              <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <DetailRow
                  icon={<Building2 size={18} />}
                  label="Property Type"
                  value={property.propertyType}
                />

                <DetailRow
                  icon={<Layers3 size={18} />}
                  label="Floor"
                  value={property.floor || "Not specified"}
                />

                <DetailRow
                  icon={<Building2 size={18} />}
                  label="Total Floors"
                  value={property.totalFloors || "Not specified"}
                />

                <DetailRow
                  icon={<Sofa size={18} />}
                  label="Furnishing"
                  value={property.furnishing || "Not specified"}
                />

                <DetailRow
                  icon={<Compass size={18} />}
                  label="Facing"
                  value={property.facing || "Not specified"}
                />

                <DetailRow
                  icon={<CalendarDays size={18} />}
                  label="Possession"
                  value={property.possession || "Not specified"}
                />

                <DetailRow
                  icon={<Building2 size={18} />}
                  label="Developer"
                  value={property.developer || "Not specified"}
                />
              </div>
            </div>

            {/* Location */}
            <div className="mt-12">
              <SectionTitle eyebrow="LOCATION" title="Property Location" />

              <div className="mt-5 flex min-h-[220px] items-center justify-center rounded-2xl border border-stone-200 bg-white">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F4EC] text-[#F47B20]">
                    <MapPin size={25} />
                  </div>

                  <h3 className="mt-4 font-semibold text-[#063F2F]">
                    {property.location}
                  </h3>

                  <p className="mt-2 text-sm text-[#68736F]">
                    Exact location can be shared during the enquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparency */}
            <div className="mt-12 rounded-2xl bg-[#063F2F] p-6 sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F47B20] text-white">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Built with Transparency
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Have questions about this property? Connect with our team to
                    understand availability, pricing, specifications and other
                    property-related information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ENQUIRY CARD ================= */}
          <aside>
            <div className="sticky top-28 rounded-2xl border border-stone-200 bg-white p-6 shadow-lg">
              {/* Header */}
              <div className="border-b border-stone-200 pb-5">
                <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
                  INTERESTED IN THIS PROPERTY?
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-[#063F2F]">
                  Let's Talk
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#68736F]">
                  Get in touch with our team for more information about this
                  property.
                </p>
              </div>

              {/* Property Mini Info */}
              <div className="flex gap-3 border-b border-stone-200 py-5">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-16 w-20 rounded-lg object-cover"
                />

                <div>
                  <p className="font-semibold text-[#063F2F]">
                    {property.title}
                  </p>

                  <p className="mt-1 text-xs text-[#68736F]">
                    {property.location}
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#F47B20]">
                    {property.price}
                  </p>
                </div>
              </div>

              {/* Trust */}
              <div className="space-y-3 py-5">
                <div className="flex items-center gap-3 text-sm text-[#17201D]">
                  <CheckCircle2 size={18} className="text-[#F47B20]" />
                  Property information assistance
                </div>

                <div className="flex items-center gap-3 text-sm text-[#17201D]">
                  <CheckCircle2 size={18} className="text-[#F47B20]" />
                  Direct enquiry support
                </div>

                <div className="flex items-center gap-3 text-sm text-[#17201D]">
                  <CheckCircle2 size={18} className="text-[#F47B20]" />
                  Clear communication
                </div>
              </div>

              {/* Buttons */}
              <Link
                to={`/contact?propertyId=${property.id}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F47B20] px-5 py-4 font-semibold text-white transition hover:bg-[#D96512]"
              >
                Enquire Now
              </Link>

              <a
                href="tel:9112009596"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#063F2F] px-5 py-4 font-semibold text-[#063F2F] transition hover:bg-[#063F2F] hover:text-white"
              >
                <Phone size={18} />
                Call Us
              </a>

              <a
                href="mailto:info@crystalclearrealtors.com"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 px-5 py-4 text-sm font-semibold text-[#063F2F] transition hover:border-[#F47B20] hover:text-[#F47B20]"
              >
                <Mail size={18} />
                Email Us
              </a>

              <p className="mt-5 text-center text-xs leading-5 text-stone-400">
                Property availability and pricing should be confirmed with our
                team.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SpecCard({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4">
      <div className="text-[#F47B20]">{icon}</div>

      <p className="mt-3 text-xs text-[#68736F]">{label}</p>

      <p className="mt-1 text-sm font-semibold text-[#17201D]">{value}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
        {eyebrow}
      </p>

      <h2 className="mt-2 font-serif text-2xl font-bold text-[#063F2F] sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-stone-100 px-5 py-4 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="text-[#F47B20]">{icon}</div>

        <span className="text-sm text-[#68736F]">{label}</span>
      </div>

      <span className="text-right text-sm font-semibold text-[#17201D]">
        {value}
      </span>
    </div>
  );
}

export default PropertyDetails;
