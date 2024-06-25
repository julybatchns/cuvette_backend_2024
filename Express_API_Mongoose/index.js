const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://shubhamshrivastava600:PEWgw72atxXhBGUk@mongooseschema.gtpzvpm.mongodb.net/?retryWrites=true&w=majority&appName=MongooseSchema"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use("/api", userRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
