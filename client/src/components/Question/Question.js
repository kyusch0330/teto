import React, { useState } from "react";

function Question({ types, onSaveQuestion }) {
  console.log("Question rendering...");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [checkNum, setCheckNum] = useState(1);
  const [options, setOptions] = useState([
    { optionText: "", for: 0, weight: 1 },
  ]);
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    const nextText = e.target.value;
    if (nextText.length > 100) {
      setError("Text must be less than 100 letters.");
    } else {
      setError("");
      setText(nextText);
    }
  };

  const handleDescriptionChange = (e) => {
    const nextDescription = e.target.value;
    if (nextDescription.length > 50) {
      setError("Description must be less than 50 letters.");
    } else {
      setError("");
      setDescription(nextDescription);
    }
  };

  const handleCheckNumChange = (e) => {
    const nextCheckNum = Number(e.target.value);
    if (nextCheckNum <= 0) {
      setError("The number to check must be greater than zero.");
    } else if (nextCheckNum > options.length) {
      setError("The number to check must be less than the number of options.");
    } else {
      setError("");
      setCheckNum(nextCheckNum);
    }
  };

  /* option */
  const handleAddOptionClick = (e) => {
    setOptions(
      options.concat({
        optionText: "",
        for: 0,
        weight: 1,
      })
    );
  };

  const handleOptionTextChange = (index) => (e) => {
    const nextOptionText = e.target.value;
    if (nextOptionText.length > 100) {
      setError("Option text must be less than 100 letters.");
    } else {
      setError("");
      setOptions(
        options
          .slice(0, index)
          .concat({
            ...options[index],
            optionText: nextOptionText,
          })
          .concat(options.slice(index + 1, options.length))
      );
    }
  };

  const handleForTypeChange = (index) => (e) => {
    const nextForType = Number(e.target.value);
    console.log("ForType Change...");
    console.log(types[nextForType]);
    setOptions(
      options
        .slice(0, index)
        .concat({
          ...options[index],
          for: nextForType,
        })
        .concat(options.slice(index + 1, options.length))
    );
  };

  const handleOptionWeightChange = (index) => (e) => {
    const nextOptionWeight = Number(e.target.value);
    setOptions(
      options
        .slice(0, index)
        .concat({
          ...options[index],
          weight: nextOptionWeight,
        })
        .concat(options.slice(index + 1, options.length))
    );
  };

  const handleSaveQuestion = () => {
    onSaveQuestion({
      text,
      description,
      checkNum,
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
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <label>
        Number to check
        <input type="number" value={checkNum} onChange={handleCheckNumChange} />
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
            <select
              name="forType"
              value={options[index].for}
              onChange={handleForTypeChange(index)}
            >
              {types.map((type, index) => {
                return <option value={index}>{type.name}</option>;
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
      <h5>{error}</h5>
    </li>
  );
}
export default Question;
