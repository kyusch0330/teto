import React, { useState } from "react";

function Question({ types, onSaveQuestion }) {
  console.log("Question rendering...");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [checkLimit, setCheckLimit] = useState({ min: 1, max: 1 });
  const [options, setOptions] = useState([
    { optionText: "", for: types[0].name, weight: 1 },
  ]);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddOptionClick = (e) => {
    setOptions(
      options.concat({
        optionText: "",
        for: types[0].name,
        weight: 1,
      })
    );
  };

  const handleOptionTextChange = (index) => (e) => {
    setOptions(
      options
        .slice(0, index)
        .concat({
          optionText: e.target.value,
          for: options[index].for,
          weight: options[index].weight,
        })
        .concat(options.slice(index + 1, options.length))
    );
  };
  const handleOptionWeightChange = (index) => (e) => {
    setOptions(
      options
        .slice(0, index)
        .concat({
          optionText: options[index].optionText,
          for: options[index].for,
          weight: Number(e.target.value),
        })
        .concat(options.slice(index + 1, options.length))
    );
  };

  const handleSaveQuestion = () => {
    onSaveQuestion({
      text,
      description,
      options,
    });
  };
  return (
    <li onBlur={handleSaveQuestion}>
      <label>
        question
        <input type="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        description
        <textarea
          value={description}
          rows="3"
          onChange={handleDescriptionChange}
        />
      </label>

      <ol>
        {options.map((option, index) => (
          <li>
            <label>
              optionText
              <input
                type="text"
                value={options[index].optionText}
                onChange={handleOptionTextChange(index)}
              />
            </label>
            <select name="forType">
              {types.map((type) => {
                return <option value={type.name}>{type.name}</option>;
              })}
            </select>
            <input
              type="number"
              value={options[index].weight}
              onChange={handleOptionWeightChange(index)}
            />
          </li>
        ))}
      </ol>
      <button type="button" onClick={handleAddOptionClick}>
        Add option
      </button>
    </li>
  );
}
export default Question;
