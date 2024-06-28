const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookRoutes = require("./routes/books");

const app = express();
const port = 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connect to Server - MongoDB
mongoose.connect(
  "mongodb+srv://shubhamshrivastava600:MpVr8LOe04blVxGn@mernapp.kdexeoo.mongodb.net/?retryWrites=true&w=majority&appName=MERNApp"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MERN App MongoDB - BookList API");
});

app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
