import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the General Terms and Conditions of Sale for Brands Collection B.V. Learn about our B2B wholesale ordering, pricing, delivery, and payment terms.",
  alternates: {
    canonical: "https://brandscollectionbv.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Brands Collection B.V.",
    description: "General Terms and Conditions of Sale for B2B wholesale orders at Brands Collection B.V.",
    url: "https://brandscollectionbv.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm">Last updated: April 2025</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm space-y-10 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 1 - Purpose and Scope</h2>
              <p className="mb-3">
                These General Terms and Conditions govern the commercial relationships between 
                Brands Collection B.V. (hereinafter "the Seller") and any professional customer 
                (hereinafter "the Buyer") ordering FMCG products.
              </p>
              <p>
                Any order implies unreserved acceptance of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 2 - Orders</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>2.1.</strong> Orders are placed exclusively between professionals (B2B).</li>
                <li><strong>2.2.</strong> All orders must be confirmed in writing (email or purchase order).</li>
                <li><strong>2.3.</strong> The Seller reserves the right to refuse any order for legitimate reasons.</li>
                <li><strong>2.4.</strong> Minimum order quantities may apply depending on products and destinations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 3 - Prices</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>3.1.</strong> Prices are communicated upon quotation and are expressed in Euros excluding VAT.</li>
                <li><strong>3.2.</strong> Prices may be revised according to market conditions.</li>
                <li><strong>3.3.</strong> Transport and insurance costs are invoiced separately according to agreed terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 4 - Payment</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>4.1.</strong> Unless otherwise agreed, invoices are payable within 30 days from invoice date.</li>
                <li><strong>4.2.</strong> Any late payment will result in the application of late payment interest at the legal rate plus margin.</li>
                <li><strong>4.3.</strong> The Seller reserves the right to suspend any delivery in case of payment default.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 5 - Delivery</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>5.1.</strong> Delivery times are given as an indication only.</li>
                <li><strong>5.2.</strong> Transfer of risk is effected according to the agreed Incoterms.</li>
                <li><strong>5.3.</strong> The Buyer must verify the conformity of goods upon receipt and report any anomaly within 48 hours.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 6 - Retention of Title</h2>
              <p>
                The Seller retains ownership of the goods sold until full payment of the price. 
                The Buyer agrees not to resell unpaid goods.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 7 - Warranties</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>7.1.</strong> Products are guaranteed to comply with the standards in force in their country of origin.</li>
                <li><strong>7.2.</strong> The Seller's liability is limited to the replacement of defective products.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 8 - Force Majeure</h2>
              <p>
                The Seller shall not be held liable for failure to perform its obligations in case of 
                force majeure (natural disasters, wars, epidemics, strikes, raw material shortages, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 9 - Claims</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>9.1.</strong> Any claim must be made in writing within 8 days following delivery.</li>
                <li><strong>9.2.</strong> Claims must be accompanied by all necessary supporting documents.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 10 - Applicable Law and Jurisdiction</h2>
              <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-disc list-inside">
                <li><strong>10.1.</strong> These Terms and Conditions are governed by Dutch law.</li>
                <li><strong>10.2.</strong> In case of dispute, and after failure of any amicable settlement attempt, exclusive jurisdiction is attributed to the courts of Amsterdam.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#003366] mb-3">Article 11 - Personal Data</h2>
              <p>
                Personal data collected is processed in accordance with our Privacy Policy and GDPR. 
                The Buyer has the right to access, rectify and delete their data.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}