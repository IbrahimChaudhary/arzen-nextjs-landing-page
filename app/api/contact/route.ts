import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/db";
import Contact from "@/app/models/contact"

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON data from the frontend
    const body = await request.json();

    // 2. Connect to the database (uses the cached connection we built)
    await connectToDatabase();

    // 3. Save the new contact message to MongoDB
    const newContact = await Contact.create(body);

    // 4. Send a success response back to the frontend
    return NextResponse.json({ success: true, data: newContact }, { status: 201 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}