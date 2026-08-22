import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectToDatabase from "@/app/lib/db";
import Contact from "@/app/models/contact"

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "becu@quickshipcars.com",
    pass: "e$Yxe-JC?|odg|L",
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
    const newContact = await Contact.create(body);

    // 4. Send an email notification to the Titan mailbox
    try {
      await transporter.sendMail({
        from: `"${body.name ?? "Website Form"}" <becu@quickshipcars.com>`,
        to: "becu@quickshipcars.com",
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