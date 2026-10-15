import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Read the official legal notice, company registration details, and regulatory information for Brands Collection B.V., based in Amsterdam, Netherlands.",
  alternates: {
    canonical: "https://brandscollectionbv.com/legal-notice",
  },
  openGraph: {
    title: "Legal Notice | Brands Collection B.V.",
    description: "Official legal notice and company registration details of Brands Collection B.V.",
    url: "https://brandscollectionbv.com/legal-notice",
    type: "website",
  },
};

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Legal Notice
          </h1>
          <p className="text-gray-500 text-sm">Last updated: April 2025</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm space-y-10 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">1. Website Publisher</h2>
              <p className="mb-3">This website is published by:</p>
              <ul className="space-y-1.5 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100">
                <li><strong>Company Name:</strong> Brands Collection B.V.</li>
                <li><strong>Legal Form:</strong> Private Limited Company (B.V.)</li>
                <li><strong>Registered Office:</strong> Danzigerkade 73, 1013 AP Amsterdam, Netherlands</li>
                <li><strong>Company Number:</strong> 55305563</li>
                <li><strong>VAT Number:</strong> NL855305563B01</li>
                <li><strong>Email:</strong> contact@brandscollectionbv.com</li>
                <li><strong>Phone:</strong> +31 970 102 25955</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">2. Publication Director</h2>
              <p>
                The publication director is the legal representative of Brands Collection B.V.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">3. Hosting</h2>
              <p className="mb-3">This website is hosted by:</p>
              <ul className="space-y-1.5 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100">
                <li><strong>Provider:</strong> Cloud Services</li>
                <li><strong>Location:</strong> European Union</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">4. Intellectual Property</h2>
              <p className="mb-3">
                All content on this website (texts, images, videos, logos, graphics, etc.) is the exclusive 
                property of Brands Collection B.V. or its partners, and is protected by intellectual 
                property laws.
              </p>
              <p>
                Any reproduction, representation, modification, publication, or adaptation of all or part 
                of the website elements, by any means or process, is prohibited without prior written 
                authorization from Brands Collection B.V.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">5. Limitation of Liability</h2>
              <p>
                Brands Collection B.V. strives to provide accurate information on the website. However, 
                it cannot be held responsible for omissions, inaccuracies, or failures in updating, 
                whether due to its own actions or those of third-party partners providing this information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">6. Hyperlinks</h2>
              <p>
                The website may contain hyperlinks to other sites. Brands Collection B.V. has no control 
                over these sites and disclaims any responsibility for their content.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">7. Applicable Law</h2>
              <p>
                This legal notice is governed by Dutch law. In case of dispute, the courts of Amsterdam 
                shall have exclusive jurisdiction.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}