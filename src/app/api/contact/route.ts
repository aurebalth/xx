import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, country, businessType, category, message, product_category } = body;

    const selectedCategory = category || product_category || "Not specified";
    const userMessage = message || "No additional message provided.";

    const emailContent = `
      <h2>New Lead / Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Phone / WhatsApp:</strong> ${phone || "N/A"}</p>
      <p><strong>Country:</strong> ${country || "N/A"}</p>
      <p><strong>Business Type:</strong> ${businessType || "N/A"}</p>
      <p><strong>Category Interest:</strong> ${selectedCategory}</p>
      <hr />
      <h3>Message / Details:</h3>
      <p>${userMessage.replace(/\n/g, "<br/>")}</p>
    `;

    const data = await resend.emails.send({
      from: `Brands Collection B.V. <${process.env.SENDER_EMAIL}>`,
      to: [process.env.RECIPIENT_EMAIL as string],
      replyTo: email,
      subject: `[NEW B2B LEAD] ${company || name || "Website Inquiry"}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}