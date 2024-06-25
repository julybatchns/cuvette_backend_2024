const express = require("express");
const mongoose = require("mongoose");
const Product = require("./schemas/product.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello feb Batch 2024 - Expressssss");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // res.send(`Data Recieved via Server ${JSON.stringify(req.body)}`);
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://shubhamshrivastava600:9VQgFg6CS1nvC8qB@backend.wmzkngm.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected with MongoDB Database");
    app.listen(3000, () => {
      console.log("Server running on PORT 3000");
    });
  })
  .catch((error) => {
    console.log("Connection Failed");
  });

//
