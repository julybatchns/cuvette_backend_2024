const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  const data = req.body;
  res.send(`Data recieved: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port number`);
});

// // ! In Express.js, GET and POST are two of the most commonly used HTTP request methods. These methods are part of the HTTP protocol, which is the foundation of data communication on the web.

// // * Idempotent: Multiple identical GET requests should have the same effect as a single request.
// // * Safe: GET requests do not alter the state of the server (they are read-only).
// // * Cacheable: Responses to GET requests can be cached by the browser.
// * Query Parameters: Data is sent in the URL as query parameters.

const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const userId = req.query.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log("Sever is running on Port Number: 3000");
});
