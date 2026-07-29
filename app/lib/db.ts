import dns from "dns";



import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  const db = mongoose.connection;

  if (db.readyState === 1) {
    connection.isConnected = db.readyState;
    console.log("Already connected to database");
    return;
  }

  if (db.readyState === 2) {
    console.log("Database connection already in progress");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  try {
    const connected = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      family: 4, // Forces Mongoose to connect over IPv4
    });

    connection.isConnected = connected.connections[0].readyState;
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export default dbConnect;