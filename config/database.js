import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true); // fields not defined in schema will not be saved

  // If the database is already connected, return the existing connection
  if (connected) {
    console.log("Using existing database connection");
    return mongoose;
  }

  // Connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

export default connectDB;
