import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Brands Collection B.V. sales team for bulk wholesale inquiries, catalog requests, and B2B orders. Based in Amsterdam, Netherlands.",
  alternates: {
    canonical: "https://brandscollectionbv.com/contact",
  },
  openGraph: {
    title: "Contact Us | Brands Collection B.V. - B2B Wholesale Support",
    description: "Get in touch with Brands Collection B.V. sales team for bulk wholesale inquiries and B2B orders.",
    url: "https://brandscollectionbv.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}