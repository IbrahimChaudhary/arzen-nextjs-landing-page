import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectToDatabase from "@/app/lib/db";
import Contact from "@/app/models/contact"

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

function buildMessage(body: Record<string, unknown>): string {
  const { name, email, company, budget, service, features, subject, message, details } = body;

  const lines = [
    `Name: ${name ?? "N/A"}`,
    `Email: ${email ?? "N/A"}`,
    company ? `Company: ${company}` : "",
    budget ? `Budget: ${budget}` : "",
    service ? `Service: ${service}` : "",
    Array.isArray(features) && features.length ? `Features: ${features.join(", ")}` : "",
    subject ? `Subject: ${subject}` : "",
    `Message: ${details ?? message ?? "N/A"}`,
  ];

  return lines.filter(Boolean).join("\n");
}

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON data from the frontend
    const body = await request.json();

    // 2. Connect to the database (uses the cached connection we built)
    await connectToDatabase();

    // 3. Save the new contact message to MongoDB
    // Home-page form sends `message`; contact-page form sends `details`
    const payload = { ...body, details: body.details ?? body.message ?? "" };
    const newContact = await Contact.create(payload);

    // 4. Send an email notification to the Titan mailbox
    try {
      await transporter.sendMail({
        from: `"${body.name ?? "Website Form"}" <formsubmission@arzeninc.com>`,
        to: "contactus@arzeninc.com",
        replyTo: body.email ? String(body.email) : undefined,
        subject: body.subject
          ? `New message from ${body.name ?? "visitor"}`
          : `New contact request from ${body.name ?? "visitor"}`,
        text: buildMessage(body),
      });
    } catch (emailError) {
      console.error("Email Error:", emailError);
    }

    // 5. Send a success response back to the frontend
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}