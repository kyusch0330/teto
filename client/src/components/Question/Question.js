import React, { useEffect, useState } from "react";

function Question({ types, onSaveQuestion }) {
  console.log("Question rendering...");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveQuestion = () => {
    onSaveQuestion({
      text,
      description,
    });
  };
  return (
    <li>
      <label>
        question
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleSaveQuestion}
        />
      </label>
      <label>
        description
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleSaveQuestion}
        />
      </label>
      {types.map((type) => (
        <h5>{type.name}</h5>
      ))}
      <label>option</label>
    </li>
  );
}
export default Question;
