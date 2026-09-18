import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import properties from "../data/properties";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get("propertyId");
  const selectedProperty = properties.find(
    (property) => property.id === Number(propertyId),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiry = {
      ...formData,
      propertyId: selectedProperty?.id || null,
    };

    console.log("Contact Enquiry:", enquiry);

    alert("Thank you! Our team will contact you shortly.");
  };
  return (
    <div className="min-h-screen bg-[#F8F4EC]">
      {/* Hero */}
      <section className="bg-[#063F2F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1800px]">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#F47B20]">
            GET IN TOUCH
          </p>

          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Let's Talk Property
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Have a question about buying, selling, renting or investing? Send us
            a message and our team will get in touch with you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#F47B20]">
              CONTACT US
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#063F2F] sm:text-4xl">
              We're here to help
            </h2>

            <p className="mt-5 leading-7 text-[#68736F]">
              Whether you are looking for a property or want to discuss selling
              or investment opportunities, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-6">
              {/* Phone */}
              <a href="tel:9112009596" className="group flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white transition-colors group-hover:bg-[#F47B20]">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-sm text-[#68736F]">Phone</p>

                  <p className="mt-1 font-semibold text-[#17201D]">
                    9112009596
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@crystalclearrealtors.com"
                className="group flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white transition-colors group-hover:bg-[#F47B20]">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm text-[#68736F]">Email</p>

                  <p className="mt-1 font-semibold text-[#17201D]">
                    info@crystalclearrealtors.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063F2F] text-white">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-[#68736F]">Location</p>

                  <p className="mt-1 font-semibold text-[#17201D]">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F47B20] text-white">
                  <Clock size={21} />
                </div>

                <div>
                  <p className="text-sm text-[#68736F]">Working Hours</p>

                  <p className="mt-1 font-semibold text-[#17201D]">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-sm text-[#68736F]">
                    10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Message */}
            <div className="mt-10 rounded-2xl bg-[#063F2F] p-6">
              <p className="text-sm font-semibold tracking-[0.15em] text-[#F47B20]">
                CRYSTAL CLEAR REALTORS
              </p>

              <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                Build with Transparency
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Clear communication for every step of your property journey.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <h2 className="font-serif text-2xl font-bold text-[#063F2F]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-[#68736F]">
                Fill in your details and tell us how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedProperty && (
                <div className="rounded-xl border border-[#F47B20]/30 bg-[#F8F4EC] p-4">
                  <p className="text-xs font-semibold tracking-wide text-[#F47B20]">
                    PROPERTY YOU'RE ENQUIRING ABOUT
                  </p>

                  <div className="mt-3 flex gap-4">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="h-16 w-20 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-[#063F2F]">
                        {selectedProperty.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-xs text-[#68736F]">
                        <MapPin size={13} />
                        {selectedProperty.location}
                      </div>

                      <p className="mt-1 text-sm font-semibold text-[#F47B20]">
                        {selectedProperty.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  What can we help you with?
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                >
                  <option value="">Select an option</option>
                  <option value="Buy Property">Buy a Property</option>
                  <option value="Sell Property">Sell a Property</option>
                  <option value="Rent Property">Rent a Property</option>
                  <option value="Investment">Investment Opportunity</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17201D]">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full resize-none rounded-xl border border-stone-200 bg-[#F8F4EC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F47B20]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#F47B20] px-6 py-4 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D96512] hover:shadow-md"
              >
                Send Enquiry
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-stone-400">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
