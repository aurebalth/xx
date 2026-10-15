import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Award, Users, Globe, TrendingUp, MessageCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover Brands Collection B.V., your trusted B2B FMCG distribution partner based in Amsterdam. Serving international markets with 500+ brands and 15,000+ references.",
  alternates: {
    canonical: "https://brandscollectionbv.com/about",
  },
  openGraph: {
    title: "About Us | Brands Collection B.V. - FMCG Wholesale Partner Since 2012",
    description: "Discover Brands Collection B.V., your trusted B2B FMCG distribution partner based in Amsterdam. Serving international markets with 500+ brands.",
    url: "https://brandscollectionbv.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to providing reliable products and impeccable wholesale service."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term business relationships based on trust and full transparency."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our distribution network covers international markets to meet your supply needs."
    },
    {
      icon: TrendingUp,
      title: "Reliability",
      description: "We continuously optimize our logistics and supply chain processes for professional buyers."
    }
  ];

  const milestones = [
    { year: "2012", event: "Foundation of Brands Collection B.V. in Amsterdam, Netherlands" },
    { year: "2014", event: "Expansion of our professional distribution network across Europe" },
    { year: "2016", event: "Scaling partnerships with major international FMCG brands" },
    { year: "2020", event: "Modernization of logistics capabilities and supply operations" },
    { year: "2024+", event: "Scaling up to 15,000+ product references available for global B2B clients" }
  ];

  return (
    <main className="bg-white pt-16">
      {/* Hero Section */}
      <section className="pt-12 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#003366] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 font-medium">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">About Us</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
              A Leading B2B FMCG Distributor
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Since 2012, Brands Collection B.V. has established itself as a trusted partner for professional buyers, importers, and retailers seeking dependable fast-moving consumer goods supply solutions from Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-[#003366] flex items-center justify-center rounded">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#0A0A0A]">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                To provide professional buyers with simplified, secure, and reliable access to major fast-moving consumer goods brands, ensuring full traceability and high-standard logistics.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We act as a direct bridge between world-renowned manufacturers and professional distribution networks worldwide.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-[#0F4C81] flex items-center justify-center rounded">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#0A0A0A]">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                To be recognized globally as a benchmark B2B wholesale distributor, trusted for operational excellence, transparent execution, and long-term commercial relationships.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We aim to continuously expand our portfolio and capabilities to match the evolving demands of international retail and wholesale markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1768796373360-95d80c5830fb?w=1920&q=80"
          alt="Brands Collection logistics and warehouse operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003366]/40"></div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Our Principles</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A]">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-[#003366]/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                  <value.icon className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Our Journey</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A]">
              Company History
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-[#003366]">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-[#003366] rounded-full ring-4 ring-white"></div>
                  <p className="text-gray-700 text-sm font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Overview */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?w=800&q=80"
                alt="Brands Collection professional team"
                className="w-full h-auto rounded shadow-sm"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Headquarters</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-4">
                Get in Touch with Our Team
              </h2>
              <div className="space-y-3 text-gray-600 text-sm mb-8">
                <p><strong>Company Name:</strong> Brands Collection B.V.</p>
                <p><strong>Address:</strong> Danzigerkade 73, 1013 AP, Amsterdam, Netherlands</p>
                <p><strong>Company No.:</strong> 55305563</p>
                <p><strong>Phone / WhatsApp:</strong> +31 970 102 25955</p>
                <p><strong>Email:</strong> contact@brandscollectionbv.com</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/3197010225955?text=${encodeURIComponent("Hello Brands Collection B.V., I am visiting your About page and would like to get in touch regarding wholesale supply.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-5 py-3 text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#003366] text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Source Quality FMCG Products?
          </h2>
          <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8">
            Contact our commercial department today to discuss your stock requirements, volume, and destination specifications.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#003366] px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Request Pricing & Availability</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}