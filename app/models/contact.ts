import mongoose, { Schema, Document } from "mongoose";

// 1. TypeScript Interface mapping directly to your frontend FormState
export interface IContact extends Document {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service: string;
  features: string[];
  details: string;
  createdAt: Date;
}

// 2. Mongoose Schema defining the database structure and rules
const ContactSchema = new Schema<IContact>({
  // Required fields based on your Zod validation
  name: { 
    type: String, 
    required: [true, "Name is required"] 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"] 
  },
  details: { 
    type: String, 
    required: [true, "Project details are required"] 
  },
  
  // Optional/Default fields
  company: { 
    type: String, 
    default: "" 
  },
  budget: { 
    type: String, 
    default: "" 
  },
  
  // Required because INITIAL state always sets a default service
  service: { 
    type: String, 
    required: false 
  },
  
  // Array of strings for the checkboxes
  features: { 
    type: [String], 
    default: [] 
  },
  
  // Auto-generated timestamp for when the form was submitted
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

// 3. Next.js Hot-Reloading protection
// Checks if the model already exists in the cache before compiling a new one
const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;