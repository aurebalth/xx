"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products", hasDropdown: true },
    { path: "/brands", label: "Brands" },
    { path: "/contact", label: "Contact" },
  ];

  const catalogueLinks = [
    { slug: "beverages", name: "Beverages" },
    { slug: "food-products", name: "Food Products" },
    { slug: "personal-care-beauty", name: "Personal Care & Beauty" },
    { slug: "household-care", name: "Household Care" },
    { slug: "baby-care", name: "Baby Care" },
    { slug: "pet-care", name: "Pet Care" },
  ];

  return (
    // On englobe le tout dans un header fixé en haut
    <header className="fixed w-full top-0 z-50 flex flex-col shadow-sm">
      
      {/* --- TOP BAR NOIRE --- */}
      <div className="bg-[#0A0A0A] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-gray-300 font-medium text-center sm:text-left">
            B2B enquiries only · International supply
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:space-x-6">
            <a 
              href="mailto:contact@brandscollectionbv.com" 
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#4fa3ff]" />
              <span>contact@brandscollectionbv.com</span>
            </a>
            <a 
              href="tel:+3197010225955" 
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4fa3ff]" />
              <span>+31 970 102 25955</span>
            </a>
          </div>
        </div>
      </div>
      {/* --- FIN TOP BAR --- */}

      {/* --- MENU BLANC PRINCIPAL --- */}
      <nav className="bg-white h-16 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold text-[#003366]">Brands Collection</span>
          </Link>

          {/* Menu Desktop (avec Dropdown au survol) */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div className={`py-2 ${pathname.includes(link.path) ? "text-[#003366]" : "text-gray-600"}`}>
                    <Link href={link.path} className="flex items-center space-x-1 text-sm font-medium hover:text-[#003366]">
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>
                    
                    {/* Menu déroulant PC (au survol) */}
                    <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-56">
                      <div className="bg-white shadow-lg border border-gray-100 rounded-sm py-2">
                        {catalogueLinks.map((cat) => (
                          <Link key={cat.slug} href={`/products/${cat.slug}`} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#003366]">
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={link.path} className={`text-sm font-medium ${pathname === link.path ? "text-[#003366]" : "text-gray-600 hover:text-[#003366]"}`}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-3 border-l pl-6 border-gray-200">
              <a href="https://wa.me/3197010225955" target="_blank" className="text-[#25D366] hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </a>
              <Link href="/contact" className="bg-[#003366] text-white px-4 py-2 text-sm font-bold hover:bg-[#002244] transition-colors rounded-sm">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Bouton Burger */}
          <button className="lg:hidden p-2 text-[#003366]" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* --- MENU MOBILE PLEIN ÉCRAN --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-[#003366]">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-[#003366]" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasDropdown ? (
                  <div>
                    <div 
                      className="flex justify-between items-center cursor-pointer py-1"
                      onClick={() => setProductsOpen(!productsOpen)}
                    >
                      <span className="text-2xl font-bold text-gray-800">{link.label}</span>
                      <div className="p-2 bg-gray-100 rounded-full">
                        {productsOpen ? <ChevronUp className="w-6 h-6 text-[#003366]" /> : <ChevronDown className="w-6 h-6 text-[#003366]" />}
                      </div>
                    </div>

                    {productsOpen && (
                      <div className="mt-3 bg-gray-50 p-4 rounded-xl space-y-3">
                        <Link 
                          href="/products" 
                          className="block text-base text-[#003366] font-bold pb-2 border-b border-gray-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          → View All Products
                        </Link>
                        {catalogueLinks.map((cat) => (
                          <Link 
                            key={cat.slug} 
                            href={`/products/${cat.slug}`} 
                            className="block text-base text-gray-700 font-medium hover:text-[#003366] py-1" 
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            • {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.path} 
                    className="text-2xl font-bold text-gray-800 block py-1" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-8 border-t flex flex-col space-y-4">
              <a href="https://wa.me/3197010225955" target="_blank" className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 rounded-lg font-bold">
                <MessageCircle className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>
              <Link href="/contact" className="bg-[#003366] text-white py-4 rounded-lg text-center font-bold" onClick={() => setMobileMenuOpen(false)}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}