import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useInput from "../../../Hooks/useInput";
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
    setTypes((types) => {
      const newTypes = types.map((type) => {
        return {
          name: type.name,
          description: type.description,
        };
      });
      newTypes[index] = {
        name: newType.name,
        description: newType.description,
      };
      return newTypes;
    });
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
    setQuestions((questions) => {
      const newQuestions = questions.map((question) => {
        return {
          text: question.text,
          description: question.description,
        };
      });
      newQuestions[index] = {
        text: newQuestion.text,
        description: newQuestion.description,
      };
      return newQuestions;
    });
  };

  const handleAddQuestionClick = (e) => {
    setQuestions(questions.concat({ text: "", description: "", options: {} }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(types);
    console.log(questions);
  };

  return (
    <form onSubmit={handleSubmit}>
      CreateSurvey
      {types.map((type, index) => {
        return <Type key={index} onSaveType={handleSaveType(index)} />;
      })}
      <button type="button" onClick={handleAddTypeClick}>
        Add Type
      </button>
      <button type="button" onClick={handleFixTypes}>
        Save Types
      </button>
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
    </form>
  );
}

export default CreateSurvey;
