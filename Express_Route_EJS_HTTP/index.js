// // * 1. HTTP (HyperText Transfer Protocol)
// // * 2. Embedded JavaScript (EJS)
// // * 3. Routing Params.

// // ? 1. HTTP (HyperText Transfer Protocol)
// // * HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. It allows for the transfer of data between a client (like a web browser) and a server. When working with Express.js, a popular Node.js web application framework, understanding HTTP is essential.

// // ! #1. Requests and Response

// // * HTTP Request: Sent by the client to the server, asking for some action to be performed (e.g., fetching a webpage, submitting a form).

// // * HTTP Response: Sent by the server back to the client, providing the requested information or acknowledging an action.

// // ! #2. HTTP Methods:- (CRUD)

// // GET: Retrieve data from the server.
// // POST: Send data to the server (e.g., form submissions).
// // PUT: Update existing data on the server.
// // DELETE: Remove data from the server.
// // PATCH: Partially update existing data on the server.

// // ! #3. HTTP Status Code:-

// // 1. Success:- 200 - Ok, 201:- Created
// // 2. Client Error:- 404 - Not Found, 400 Bad Request.
// // 3. Server Error:- 500 Internal Server Error.

// // ! #4. HTTP Headers:-

// // Request Headers: Provide additional information about the request (e.g., Content-Type, Authorization).
// // Response Headers: Provide additional information about the response (e.g., Content-Type, Set-Cookie).

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port number 3000`);
// });

// app.post("/post", (req, res) => {
//   const data = req.body;
//   const result = JSON.stringify(data);
//   res.send(`Recieved a Data ${result}`);
// });

// app.use(express.json());

// app.post("/data", (req, res) => {
//   const receivedData = req.body;
//   res.send(`Received data: ${JSON.stringify(receivedData)}`);
// });

// // Basic Server: Set up with Express.js to handle various HTTP methods and parse data.

// ? EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It's commonly used with Node.js applications to render HTML on the server side.

const express = require("express");
const path = require("path");

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory where your EJS templates are located
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const data = {
    title: "Welcome to EJS",
    message: "Hello, EJS is running...",
  };
  res.render("index", data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT Number: ${PORT}`);
});
