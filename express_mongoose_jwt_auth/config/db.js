const mongoose = require("mongoose");
require("dotenv").config()

const connnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Conneted!")
  } catch (error) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connnectDB