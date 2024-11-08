import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // Log to make sure the URI is being loaded properly
  if (!process.env.MONGODB_URI) {
    console.error("MongoDB URI is not defined in environment variables.");
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to database");
  }
}

export default dbConnect;
