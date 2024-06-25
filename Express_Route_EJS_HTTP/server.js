// // ? EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It's commonly used with Node.js applications to render HTML on the server side.

// const express = require("express");
// const path = require("path");

// const app = express();

// // Set the view engine to EJS
// app.set("view engine", "ejs");

// // Set the directory where your EJS templates are located
// app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//   const data = {
//     title: "Welcome to EJS",
//     message: "Hello, EJS is running...",
//   };
//   res.render("server", data);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on PORT Number: ${PORT}`);
// });

// ! Routing parameters in Express.js allow you to capture values in the URL and use them in your request handling logic.

// 1. Route
// 2. Query
// 3. Body

const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:userId/post/:postId", (req, res) => {
  const userId = req.params.userId
  const postId = req.params.postId
  res.send(`UserId: ${userId}, PostId: ${postId}`);
});

app.listen(port, () => {
  console.log(` Server running on Port numbr  ${port}`);
});
