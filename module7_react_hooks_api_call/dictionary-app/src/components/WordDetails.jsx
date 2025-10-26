import React from "react";

export default function WordDetails({ data }) {
  if (!data) return null;

  const playAudio = () => {
    if (data.phonetics[0]?.audio) {
      new Audio(data.phonetics[0].audio).play();
    } else {
      alert("No audio available");
    }
  };

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold text-blue-600">{data.word}</h2>
      <button
        onClick={playAudio}
        className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Play Audio 🔊
      </button>

      {data.meanings.map((meaning, index) => (
        <div key={index} className="mt-6 border-t border-gray-300 pt-4">
          <h4 className="font-semibold text-lg text-gray-800">
            Part of Speech
          </h4>
          <p className="text-gray-700">{meaning.partOfSpeech}</p>

          <h4 className="mt-2 font-semibold text-lg text-gray-800">
            Definition
          </h4>
          <p className="text-gray-700">{meaning.definitions[0].definition}</p>

          {meaning.definitions[0].example && (
            <>
              <h4 className="mt-2 font-semibold text-lg text-gray-800">
                Example
              </h4>
              <p className="text-gray-700 italic">
                {meaning.definitions[0].example}
              </p>
            </>
          )}

          {meaning.synonyms?.length > 0 && (
            <>
              <h4 className="mt-2 font-semibold text-lg text-gray-800">
                Synonyms
              </h4>
              <p className="text-gray-700">{meaning.synonyms.join(", ")}</p>
            </>
          )}

          {meaning.antonyms?.length > 0 && (
            <>
              <h4 className="mt-2 font-semibold text-lg text-gray-800">
                Antonyms
              </h4>
              <p className="text-gray-700">{meaning.antonyms.join(", ")}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
