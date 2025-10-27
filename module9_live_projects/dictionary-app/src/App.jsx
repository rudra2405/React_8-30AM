import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const getMeaning = async (word) => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await axios.get(url);
      setData(response.data[0]);
    } catch (error) {
      alert("No word found");
      setData(null);
    }
  };
  return (
    <>
      <div className="min-h-screen text-center p-6 bg-gray-200 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mt-10">
          Live Dictionary App!
        </h1>
        <SearchBar onSearch={getMeaning} />
        <WordDetails data={data} />
      </div>
    </>
  );
}

export default App;
