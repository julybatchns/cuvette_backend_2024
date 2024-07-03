const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    // Exit the process with a failure code (1) to indicate that something went wrong
    process.exit(1);
  }
};

module.exports = connectDB;
