// ? Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// ! These functions can perform various tasks such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function.

const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to another middleware
};

// use the logger middleware
app.use(logger);

// Authentication Middleware
const authenticate = (req, res, next) => {
  const { user } = req.query;

  if (user === "admin") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

app.get("/secure", authenticate, (req, res) => {
  res.send("This is a secure area.");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log(`Server is running on Port 3000`);
});
