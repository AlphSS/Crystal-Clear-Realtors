import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  IndianRupee,
  Ruler,
  MessageSquare,
  Send,
} from "lucide-react";

function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    location: "",
    bedrooms: "",
    area: "",
    expectedPrice: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sell Property Enquiry:", formData);

    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC]">
      {/* Hero */}
      <section className="bg-[#063F2F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
            SELL WITH CONFIDENCE
          </p>

          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Sell Your Property
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Tell us about your property and our team will connect with you to
            understand your requirements.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Information */}
          <div className="lg:pt-8">
            <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
              SELL YOUR PROPERTY WITH US
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#063F2F] sm:text-4xl">
              Let's connect you with the right buyer
            </h2>

            <p className="mt-5 leading-7 text-[#68736F]">
              Whether you're selling a home, apartment, villa, plot or
              commercial property, share your details with us and our team will
              get in touch with you.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white">
                  <Home size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#17201D]">
                    Share Your Property
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#68736F]">
                    Provide basic information about your property.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#17201D]">
                    Get a Callback
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#68736F]">
                    Our team will contact you to discuss your property.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F47B20] text-white">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#17201D]">
                    Discuss Your Requirements
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#68736F]">
                    We can understand your expectations and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <h2 className="font-serif text-2xl font-bold text-[#063F2F]">
                Property Details
              </h2>

              <p className="mt-2 text-sm text-[#68736F]">
                Fill in the details below and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                  />
                </div>
              </div>

              {/* Property Type + Location */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Property Type
                  </label>

                  <div className="relative">
                    <Home
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                    >
                      <option value="">Select type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Plot">Plot</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Independent House">
                        Independent House
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Property Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Kharadi, Pune"
                      required
                      className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                    />
                  </div>
                </div>
              </div>

              {/* BHK + Area */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Bedrooms / BHK
                  </label>

                  <select
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                  >
                    <option value="">Select BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5+">5+ BHK</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Area
                  </label>

                  <div className="relative">
                    <Ruler
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="e.g. 1200 sq.ft"
                      className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                    />
                  </div>
                </div>
              </div>

              {/* Expected Price */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  Expected Price
                </label>

                <div className="relative">
                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                  />

                  <input
                    type="text"
                    name="expectedPrice"
                    value={formData.expectedPrice}
                    onChange={handleChange}
                    placeholder="e.g. ₹1.25 Cr"
                    className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#F47B20]"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  Additional Information
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us anything else about your property..."
                  className="w-full resize-none rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#F47B20] px-6 py-4 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D96512] hover:shadow-md"
              >
                Submit Property Enquiry
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-stone-400">
                By submitting this form, you agree to be contacted regarding
                your property enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sell;
