import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = 2023;

  const catalogueLinks = [
    { slug: "beverages", name: "Beverages" },
    { slug: "food-products", name: "Food Products" },
    { slug: "personal-care-beauty", name: "Personal Care & Beauty" },
    { slug: "household-care", name: "Household Care" },
    { slug: "baby-care", name: "Baby Care" },
    { slug: "pet-care", name: "Pet Care" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1">Ready to partner with us?</h2>
              <p className="text-white/60 text-sm md:text-base">Contact our sales team to discuss your supply needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/3197010225955" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#20bd5a] transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Link href="/contact" className="group flex items-center justify-center space-x-2 bg-white text-[#003366] px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-bold">Brands Collection</span>
              <span className="text-xs text-white/50 ml-1">B.V.</span>
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-4">Your trusted partner for wholesale FMCG distribution worldwide.</p>
            <div className="space-y-2">
              <div className="text-white/60 text-xs font-medium">
                <span>Company No.: 55305563</span>
              </div>
              <a href="mailto:contact@brandscollectionbv.com" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-xs">
                <Mail className="w-3 h-3" />
                <span>contact@brandscollectionbv.com</span>
              </a>
              <a href="tel:+3197010225955" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-xs">
                <Phone className="w-3 h-3" />
                <span>+31 970 102 25955</span>
              </a>
              <div className="flex items-start space-x-2 text-white/60 text-xs mt-2">
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Danzigerkade 73, 1013 AP<br />Amsterdam, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {catalogueLinks.map((link) => (
                <li key={link.slug}>
                  <Link href={`/products/${link.slug}`} className="text-white/60 hover:text-white text-xs transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation (Avec Brands ajouté et Products corrigé) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-white text-xs transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white text-xs transition-colors">About Us</Link></li>
              <li><Link href="/products/beverages" className="text-white/60 hover:text-white text-xs transition-colors">Products</Link></li>
              <li><Link href="/brands" className="text-white/60 hover:text-white text-xs transition-colors">Brands</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white text-xs transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal-notice" className="text-white/60 hover:text-white text-xs transition-colors">Legal Notice</Link></li>
              <li><Link href="/privacy-policy" className="text-white/60 hover:text-white text-xs transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white text-xs transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-white/40 text-xs text-center">© {currentYear} Brands Collection B.V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}