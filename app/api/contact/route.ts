import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/db";
import Contact from "@/app/models/contact";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON data from the frontend
    const body = await request.json();
    
    // Destructure standard fields to use in the email text
    // (If your form has different field names, adjust these to match)
    const { name, email, message, phone } = body;

    // 2. Connect to the database
    await connectToDatabase();

    // 3. Save the new contact message to MongoDB
    const newContact = await Contact.create(body);

    // 4. Configure the Titan Email Transporter (Team Lead's Config)
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: process.env.TITAN_EMAIL,
        pass: process.env.TITAN_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    
    // 5. Construct the Email Notification
    const mailOptions = {
      from: process.env.TITAN_EMAIL, // Must be the Titan email to prevent spam blocking
      to: process.env.TITAN_EMAIL,   // Sending the notification to the same inbox
      replyTo: email,                // Allows the team to hit "Reply" and email the user directly
      subject: `New Website Lead from ${name || 'a visitor'}`,
      text: `You have received a new contact form submission:\n\nName: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nMessage: ${message || 'N/A'}\n\n---\nFull Data: ${JSON.stringify(body, null, 2)}`,
    };

    // 6. Send the Email
    await transporter.sendMail(mailOptions);

    // 7. Send a success response back to the frontend
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });

  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}