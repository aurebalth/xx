'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, ChevronRight } from "lucide-react";

const MOCK_CATEGORIES = [
  { id: "beverages", name: "Beverages & Drinks" },
  { id: "confectionery", name: "Confectionery & Snacks" },
  { id: "dairy", name: "Dairy & Grocery" },
  { id: "cosmetics", name: "Cosmetics & Personal Care" },
  { id: "household", name: "Household & Cleaning" },
];

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product_category: "",
    message: "",
    request_callback: false,
    request_quote: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.product_category) newErrors.product_category = "Please select a category";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setErrorMessage("Please correct the form errors.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18082638058/34DQCPuVyKccEOrRvK5D',
        });
      }
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center max-w-lg px-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-[#0A0A0A] mb-3">Message Sent!</h1>
          <p className="text-gray-600 text-sm mb-6">
            Thank you for your message. Our sales team will contact you shortly.
          </p>
          <Link
            href="/"
            className="bg-[#003366] text-white px-5 py-2.5 text-sm font-semibold inline-block rounded-sm hover:bg-[#002244] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-16">
      {/* Hero */}
      <section className="pt-10 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#003366] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 font-medium">Contact Us</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Contact Us</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
              Let's Talk Business
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Our sales team is available to answer your questions and support you with your supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#003366]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] text-sm mb-1">Email</h3>
                <a href="mailto:contact@brandscollectionbv.com" className="text-gray-600 hover:text-[#003366] transition-colors text-xs">
                  contact@brandscollectionbv.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#003366]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] text-sm mb-1">Phone</h3>
                <a href="tel:+3197010225955" className="text-gray-600 hover:text-[#003366] transition-colors text-xs">
                  +31 970 102 25955
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#25D366]/10 border border-[#25D366]/20">
              <div className="w-10 h-10 bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] text-sm mb-1">WhatsApp</h3>
                <a href="https://wa.me/3197010225955" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors text-xs">
                  +31 970 102 25955
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#003366]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] text-sm mb-1">Hours</h3>
                <p className="text-gray-600 text-xs">Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-6">Send us a message</h2>

              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-gray-700 mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="text-xs font-semibold text-gray-700 mb-1.5 block">Company *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.company ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="text-red-500 text-[10px] mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-gray-700 mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-700 mb-1.5 block">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="country" className="text-xs font-semibold text-gray-700 mb-1.5 block">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.country ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="Your country"
                    />
                    {errors.country && <p className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                  </div>
                  <div>
                    <label htmlFor="product_category" className="text-xs font-semibold text-gray-700 mb-1.5 block">Product Category *</label>
                    <select
                      id="product_category"
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.product_category ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="">Select a category</option>
                      {MOCK_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                      <option value="other">Other / Multiple</option>
                    </select>
                    {errors.product_category && <p className="text-red-500 text-[10px] mt-1">{errors.product_category}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-gray-700 mb-1.5 block">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2.5 border rounded-sm text-xs text-gray-900 bg-white focus:outline-none focus:border-[#003366] ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Describe your supply needs, desired volumes, order frequency..."
                  />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                </div>

                <div className="space-y-3 pt-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="request_callback"
                      checked={formData.request_callback}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#003366] border-gray-300 rounded focus:ring-[#003366]"
                    />
                    <span className="text-xs text-gray-700">I would like to be called back</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="request_quote"
                      checked={formData.request_quote}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#003366] border-gray-300 rounded focus:ring-[#003366]"
                    />
                    <span className="text-xs text-gray-700">I request a personalized quote</span>
                  </label>
                </div>

                <p className="text-[11px] text-gray-500">
                  By submitting this form, you agree that your data will be processed in accordance with our privacy policy.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#003366] hover:bg-[#002244] text-white px-6 py-3 text-xs font-semibold rounded-sm w-full md:w-auto flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0A0A0A] text-sm mb-4">Our Address</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
                    <div className="text-xs">
                      <p className="text-gray-700 font-medium">Brands Collection B.V.</p>
                      <p className="text-gray-600 mt-1">Danzigerkade 73<br />1013 AP Amsterdam<br />Netherlands</p>
                      <p className="text-gray-500 mt-2">Company No. 55305563</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#25D366] text-white p-6">
                  <MessageCircle className="w-6 h-6 mb-3" />
                  <h3 className="font-bold text-base mb-2">Prefer WhatsApp?</h3>
                  <p className="text-white/90 text-xs mb-4">Get instant answers from our team via WhatsApp.</p>
                  <a
                    href="https://wa.me/3197010225955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#25D366] px-4 py-2.5 text-xs font-semibold block text-center hover:bg-gray-100 transition-colors rounded-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}