import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [word, setWord] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(word);
        }}
        className="flex items-center justify-center mt-5"
      >
        <input
          type="text"
          className="border-2 bg-white border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Type a word..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Search <FaSearch className="inline-flex" />
        </button>
      </form>
    </>
  );
}
