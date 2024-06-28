import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import FilterBooks from "./components/FilterBooks";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  // const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      setBooks(response.data);
      // setFilteredBooks(response.data);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post("http://localhost:5000/books", book);
      setBooks([...books, response.data]);
      // setFilteredBooks([...books, response.data]);
    } catch (error) {
      console.log("Error adding book:", error);
    }
  };

  const filterBooks = async (title) => {
    if (title === "") {
      setBooks(books);
    } else {
      setBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <div className="App">
        <h1>Book Manager</h1>
        <AddBook addBook={addBook} />
        <FilterBooks filterBooks={filterBooks} />
        <BookList books={books} />
      </div>
    </>
  );
};

export default App;
