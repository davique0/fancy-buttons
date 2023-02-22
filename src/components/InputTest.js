import React, { useState } from "react";

export default function InputTest() {
  const [word, setWord] = useState("");

  return (
    <main>
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Please enter a word"
      />
      <h1>Your word is: {word}.</h1>
    </main>
  );
}
