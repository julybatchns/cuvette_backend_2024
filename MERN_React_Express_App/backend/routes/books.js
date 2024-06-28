const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");

// Get all the Books - API - Get
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a New Book
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });

  try {
    const newBook = await book.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Search the Books
router.get("/search", async (req, res) => {
  try {
    const { title } = req.query;
    const books = await Book.find({ title: newReg(title, "i") });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
