import axios from "axios";
import React, { useState } from "react";
import Question from "../../Question/Question";
import Type from "../../Type/Type";

function CreateSurvey() {
  const [error, setError] = useState("");

  /* title */
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    const nextTitle = e.target.value;
    if (nextTitle.length > 100) {
      setError("too long title");
    } else {
      setError("");
      setTitle(nextTitle);
    }
  };

  /* description */
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e) => {
    const nextDescription = e.target.value;
    if (nextDescription.length > 1000) {
      setError("too long description");
    } else {
      setError("");
      setDescription(e.target.value);
    }
  };

  /* types */
  const [types, setTypes] = useState([
    {
      name: "",
      description: "",
    },
  ]);

  //각 Type에 전달
  const handleSaveType = (index) => (newType) => {
    setTypes(
      types
        .slice(0, index)
        .concat(newType)
        .concat(types.slice(index + 1, types.length))
    );
  };

  const handleAddTypeClick = () => {
    setTypes(types.concat({ name: "", description: "" }));
  };

  const [fixedTypes, setFixedTypes] = useState([]);

  const handleFixTypes = () => {
    let willFix = true;
    let errorType = 0;
    const typeToSave = types.map((type, index) => {
      if (!type.name) {
        willFix = false;
        errorType = index;
      }
      return { ...type };
    });
    if (!willFix) {
      setError(`Type #${errorType} is error`);
    } else {
      setFixedTypes(typeToSave);
    }
  };

  /* questions */
  const [questions, setQuestions] = useState([
    { text: "", description: "", options: {} },
  ]);

  //각 Question에 전달
  const handleSaveQuestion = (index) => (newQuestion) => {
    console.log(newQuestion);
    setQuestions(
      questions
        .slice(0, index)
        .concat(newQuestion)
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleAddQuestionClick = (e) => {
    setQuestions(questions.concat({ text: "", description: "", options: {} }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      title,
      types,
      questions,
    };
    console.log(dataToSubmit);
    const response = axios
      .post("/api/surveys/upload", dataToSubmit)
      .then((response) => console.log(response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>CreateSurvey</h2>
      <label>
        Title{" "}
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder={"write title"}
        />
      </label>
      <label>
        Description{" "}
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder={"write description"}
        ></textarea>
      </label>
      <h5>{error}</h5>
      <h3>Types</h3>
      <ol>
        {types.map((type, index) => {
          return <Type key={index} onSaveType={handleSaveType(index)} />;
        })}
      </ol>
      <button type="button" onClick={handleAddTypeClick}>
        Add Type
      </button>
      <button type="button" onClick={handleFixTypes}>
        Save Types
      </button>
      {fixedTypes.length > 0 && (
        <div>
          <h3>Questions</h3>
          <ol>
            {questions.map((question, index) => {
              return (
                <Question
                  key={index}
                  onSaveQuestion={handleSaveQuestion(index)}
                  types={fixedTypes}
                />
              );
            })}
          </ol>
          <button type="button" onClick={handleAddQuestionClick}>
            Add Question
          </button>
          <button>Submit</button>
        </div>
      )}
    </form>
  );
}

export default CreateSurvey;
