import React from "react";
import useCreateSingleSurveyQuestion from "../../Hooks/useCreateSingleSurveyQuestion";
import CreateOption from "../CreateOption/CreateOption";

function CreateQuestion({ types, onSaveQuestion, onDeleteQuestion }) {
  const {
    text,
    handleTextChange,
    description,
    handleDescriptionChange,
    checkNum,
    handleCheckNumChange,
    options,
    optionMethods,
    error,
    setError,
  } = useCreateSingleSurveyQuestion(types);

  const handleSaveQuestion = () => {
    const newQuestion = {
      text,
      description,
      checkNum,
      options,
    };
    onSaveQuestion(newQuestion);
  };

  return (
    <div onBlur={handleSaveQuestion}>
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
      <button type="button" onClick={onDeleteQuestion}>
        delete
      </button>
      <ol>
        {options.map((option, index) => (
          <li key={option.id}>
            <CreateOption
              option={option}
              types={types}
              onSaveOption={optionMethods.handleSaveOption(index)}
              onDeleteOption={optionMethods.handleDeleteOption(index)}
              sendError={setError}
            />
          </li>
        ))}
      </ol>
      <button type="button" onClick={optionMethods.handleAddOptionClick}>
        Add option
      </button>
      <h5>{error}</h5>
    </div>
  );
}
export default CreateQuestion;
