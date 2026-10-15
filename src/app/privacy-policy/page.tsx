import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy of Brands Collection B.V. Learn how we collect, use, store, and protect your personal data in full compliance with GDPR regulations.",
  alternates: {
    canonical: "https://brandscollectionbv.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Brands Collection B.V.",
    description: "Learn how Brands Collection B.V. protects and handles your personal data in accordance with GDPR.",
    url: "https://brandscollectionbv.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: April 2025</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm space-y-10 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">1. Introduction</h2>
              <p>
                Brands Collection B.V. is committed to protecting the privacy of its website users. 
                This privacy policy explains how we collect, use, store and protect your personal data 
                in accordance with the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">2. Data Controller</h2>
              <p className="mb-3">The data controller is:</p>
              <ul className="space-y-1.5 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100">
                <li><strong>Brands Collection B.V.</strong></li>
                <li>Danzigerkade 73, 1013 AP Amsterdam, Netherlands</li>
                <li>Email: contact@brandscollectionbv.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">3. Data Collected</h2>
              <p className="mb-3">We collect the following data:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>Identification data:</strong> name, company</li>
                <li><strong>Contact details:</strong> email address, phone number, country</li>
                <li><strong>Browsing data:</strong> IP address, cookies, pages visited</li>
                <li><strong>Commercial data:</strong> quote requests, contact messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">4. Purpose of Processing</h2>
              <p className="mb-3">Your data is processed for the following purposes:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li>Responding to your contact and quote requests</li>
                <li>Managing B2B commercial relationships</li>
                <li>Improving our services and website</li>
                <li>Sending commercial communications (with your consent)</li>
                <li>Complying with our legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">5. Legal Basis</h2>
              <p className="mb-3">The processing of your data is based on:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>Your consent</strong> for cookies and marketing communications</li>
                <li><strong>Contract performance</strong> for commercial requests</li>
                <li><strong>Legitimate interest</strong> for improving our services</li>
                <li><strong>Legal obligation</strong> for accounting data retention</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">6. Data Retention</h2>
              <p className="mb-3">Your data is retained for:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>Contact data:</strong> 3 years after last contact</li>
                <li><strong>Customer data:</strong> duration of commercial relationship + 5 years</li>
                <li><strong>Cookies:</strong> maximum 13 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">7. Your Rights</h2>
              <p className="mb-3">Under GDPR, you have the following rights:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>Right of access:</strong> obtain a copy of your data</li>
                <li><strong>Right of rectification:</strong> correct inaccurate data</li>
                <li><strong>Right to erasure:</strong> request deletion of your data</li>
                <li><strong>Right to portability:</strong> receive your data in a structured format</li>
                <li><strong>Right to object:</strong> object to processing</li>
                <li><strong>Right to withdraw consent:</strong> at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at: <a href="mailto:contact@brandscollectionbv.com" className="text-[#003366] font-semibold hover:underline">contact@brandscollectionbv.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">8. Cookies</h2>
              <p className="mb-3">Our website uses cookies for:</p>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>Essential cookies:</strong> website functionality</li>
                <li><strong>Analytics cookies:</strong> audience measurement</li>
                <li><strong>Preference cookies:</strong> remembering your choices</li>
              </ul>
              <p className="mt-4">
                You can manage your cookie preferences via our consent banner.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">9. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your data 
                against unauthorized access, modification, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">10. Contact</h2>
              <p className="mb-3">
                For any questions regarding this policy or your personal data, contact our 
                Data Protection Officer: <a href="mailto:contact@brandscollectionbv.com" className="text-[#003366] font-semibold hover:underline">contact@brandscollectionbv.com</a>
              </p>
              <p>
                You also have the right to lodge a complaint with the competent supervisory authority 
                (Autoriteit Persoonsgegevens in the Netherlands).
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}