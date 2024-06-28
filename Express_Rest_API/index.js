const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");

const app = express();

app.use(bodyParser.json());

app.use("/posts", postRoutes);
app.use("/posts/:postId/comments", commentRoutes);

mongoose.connect(
  "mongodb+srv://shubhamshrivastava600:ekpTzghuxgMkp7gv@restapi.yngtggd.mongodb.net/?retryWrites=true&w=majority&appName=RESTAPI"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Server");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
