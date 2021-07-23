import React, { useState } from "react";
import Question from "../../Question/Question";
import Type from "../../Type/Type";

function CreateSurvey() {
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
        .concat({
          name: newType.name,
          description: newType.description,
        })
        .concat(types.slice(index + 1, questions.length))
    );
  };

  const handleAddTypeClick = () => {
    setTypes(types.concat({ name: "", description: "" }));
  };

  const [fixedTypes, setFixedTypes] = useState([]);

  const handleFixTypes = () => {
    const typeToSave = types.map((type) => {
      return {
        name: type.name,
        description: type.description,
      };
    });
    setFixedTypes(typeToSave);
  };

  /* questions */
  const [questions, setQuestions] = useState([
    { text: "", description: "", options: {} },
  ]);

  //각 Question에 전달
  const handleSaveQuestion = (index) => (newQuestion) => {
    setQuestions(
      questions
        .slice(0, index)
        .concat({
          text: newQuestion.text,
          description: newQuestion.description,
          checkNum: newQuestion.checkNum,
          options: newQuestion.options,
        })
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleAddQuestionClick = (e) => {
    setQuestions(questions.concat({ text: "", description: "", options: {} }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitObj = {
      types,
      questions,
    };
    console.log(submitObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>CreateSurvey</h2>

      <h3>types</h3>
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
