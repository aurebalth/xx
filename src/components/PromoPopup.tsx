"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Building2, User, Mail, Phone, Globe, Briefcase, MessageCircle } from "lucide-react";

const PROMO_DISMISSED_KEY = "bc_promo_dismissed";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    category: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLocalhost =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
         window.location.hostname === "127.0.0.1");

      const isDismissed = localStorage.getItem(PROMO_DISMISSED_KEY);

      if (isLocalhost || !isDismissed) {
        setVisible(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(PROMO_DISMISSED_KEY, "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          businessType: formData.businessType,
          category: formData.category,
          request_callback: true,
          request_quote: true,
          message: `[QUALIFIED VIP LEAD]
Business Type: ${formData.businessType}
Requested Catalog: ${formData.category}
Source: Wholesale Access Popup`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send popup lead");
      }

      setSubmitted(true);
      setTimeout(handleClose, 4000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 bg-gray-100 hover:bg-gray-200 md:bg-transparent rounded-full text-gray-500 hover:text-[#003366] z-20 transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Côté gauche - Branding */}
        <div className="bg-gradient-to-br from-[#003366] to-[#001f3f] md:w-5/12 p-6 sm:p-8 text-white flex flex-col justify-center relative">
          <div className="relative z-10">
            <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-blue-400 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
              B2B TRADE <br />
              <span className="text-blue-400">ACCESS</span>
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mb-5 opacity-90 leading-relaxed">
              Apply for an exclusive wholesale account to access our price list and full FMCG catalog.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-200">
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> 500+ Global Brands</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> Dedicated Account Manager</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> Worldwide Shipping</p>
            </div>
          </div>
        </div>

        {/* Côté droit - Formulaire */}
        <div className="p-6 sm:p-8 md:w-7/12 bg-gray-50">
          {!submitted ? (
            <>
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Wholesale Application</h3>
                <p className="text-xs text-gray-500 mt-1">Strictly for registered businesses. MOQ applies.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input required type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm outline-none focus:border-[#003366] bg-white text-gray-800" />
                  </div>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input required type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm outline-none focus:border-[#003366] bg-white text-gray-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input required type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm outline-none focus:border-[#003366] bg-white text-gray-800" />
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input required type="tel" name="phone" placeholder="Phone / WhatsApp" value={formData.phone} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm outline-none focus:border-[#003366] bg-white text-gray-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input required type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm outline-none focus:border-[#003366] bg-white text-gray-800" />
                  </div>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select required name="businessType" value={formData.businessType} onChange={handleChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm bg-white outline-none focus:border-[#003366] text-gray-700">
                      <option value="" disabled>Business Type</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Wholesaler">Wholesaler</option>
                      <option value="Retailer">Retailer / Supermarket</option>
                      <option value="Importer">Importer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm bg-white outline-none focus:border-[#003366] text-gray-700">
                  <option value="" disabled>Main Category of Interest</option>
                  <option value="Beverages">Beverages (Soft drinks, Energy, etc.)</option>
                  <option value="Food Products">Food & Confectionery</option>
                  <option value="Hygiene & Beauty">Hygiene & Beauty</option>
                  <option value="Household">Household Care</option>
                  <option value="Full Catalog">Full Catalog</option>
                </select>

                <div className="flex gap-2 pt-2">
                  <button type="submit" disabled={loading} className="flex-1 bg-[#003366] hover:bg-[#002244] text-white font-bold py-3 rounded-lg transition-all shadow-md text-xs sm:text-sm disabled:opacity-50">
                    {loading ? "Processing..." : "Submit Application"}
                  </button>
                  <a
                    href={`https://wa.me/3197010225955?text=${encodeURIComponent("Hello Brands Collection B.V., I would like to apply for a B2B wholesale trade account.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 rounded-lg flex items-center justify-center transition-colors shrink-0"
                    title="Contact via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received</h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-sm">
                Our sales team will review your details and contact you shortly at:
              </p>
              <strong className="text-gray-800 bg-gray-200 px-3 py-1.5 rounded-lg inline-block text-xs sm:text-sm break-all">
                {formData.email}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}