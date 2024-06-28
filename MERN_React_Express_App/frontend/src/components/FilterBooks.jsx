/* eslint-disable react/prop-types */
import { useState } from "react";

const FilterBooks = ({ filterBooks }) => {
  const [title, setTitle] = useState("");

  const handleFilter = (e) => {
    setTitle(e.target.value);
    filterBooks(e.target.value);
  };

  return (
    <div>
      <h2>Filter Books</h2>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleFilter}
      />
    </div>
  );
};

export default FilterBooks;
