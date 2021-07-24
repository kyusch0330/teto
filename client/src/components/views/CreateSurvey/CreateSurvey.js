import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateQuestion from "../../CreateQuestion/CreateQuestion";
import CreateType from "../../CreateType/CreateType";
import usePreventLeave from "../../../Hooks/usePreventLeave";
import { Prompt, useHistory } from "react-router-dom";

function CreateSurvey({ userObj }) {
  const [error, setError] = useState("");
  const [typeError, setTypeError] = useState("");

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

  //각 CreateType에 전달
  const handleSaveType = (index) => (newType) => {
    setTypes(
      types
        .slice(0, index)
        .concat({
          id: types[index].id,
          ...newType,
        })
        .concat(types.slice(index + 1, types.length))
    );
  };

  const handleDeleteType = (index) => () => {
    console.log(
      types.slice(0, index).concat(types.slice(index + 1, types.length))
    );
    setTypes(
      types.slice(0, index).concat(types.slice(index + 1, types.length))
    );
  };

  const handleAddTypeClick = () => {
    setTypes(types.concat({ id: Date.now(), name: "", description: "" }));
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
      setTypeError(`Type #${errorType} is error`);
    } else {
      setFixedTypes(typeToSave);
    }
  };

  /* questions */
  const [questions, setQuestions] = useState([
    { text: "", description: "", options: {} },
  ]);

  //각 CreateQuestion에 전달
  const handleSaveQuestion = (index) => (newQuestion) => {
    setQuestions(
      questions
        .slice(0, index)
        .concat({
          id: questions[index].id,
          ...newQuestion,
        })
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleDeleteQuestion = (index) => () => {
    setQuestions(
      questions
        .slice(0, index)
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleAddQuestionClick = (e) => {
    setQuestions(
      questions.concat({
        id: Date.now(),
        text: "",
        description: "",
        options: {},
      })
    );
  };

  /* submit*/
  const submitValidator = () => {
    let willSubmit = true;
    questions.map((question, qIndex) => {
      if (question.text === "") {
        setError(`Question #${qIndex}'s text is empty.`);
        willSubmit = false;
      } else {
        question.options.map((option, oIndex) => {
          if (option.optionText === "") {
            setError(`Question #${qIndex}'s option #${oIndex} is empty.`);
            willSubmit = false;
          }
        });
      }
    });
    return willSubmit;
  };

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
      Question 유효성 검사
      모든 Question text, Option text 1글자 이상
    */
    let willSubmit = submitValidator();
    if (!willSubmit) {
      return;
    } else {
      setError("");
    }

    disablePrevent();
    const dataToSubmit = {
      userId: userObj._id,
      createdAt: Date.now(),
      title,
      types,
      questions,
    };
    console.log(dataToSubmit);
    const response = axios
      .post("/api/surveys/upload", dataToSubmit)
      .then((response) => console.log(response.data))
      .then(() => history.push("/survey"))
      .catch((err) => setError("upload fail"));
  };

  const { blocked, enablePrevent, disablePrevent } = usePreventLeave();
  useEffect(() => {
    if (title !== "" || description !== "" || types[0].name !== "") {
      enablePrevent();
    } else {
      disablePrevent();
    }
    return function cleanUp() {
      disablePrevent();
    };
  }, [title, description, types]);

  return (
    <form onSubmit={handleSubmit}>
      {/* 작성 중 라우트 이동 시 띄우기 */}
      <Prompt
        when={blocked}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <h2>CreateSurvey</h2>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder={"write title"}
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder={"write description"}
        ></textarea>
      </label>
      <h3>Types</h3>
      <ol>
        {types.map((type, index) => {
          return (
            <CreateType
              key={type.id}
              onSaveType={handleSaveType(index)}
              onDeleteType={handleDeleteType(index)}
            />
          );
        })}
      </ol>
      <button type="button" onClick={handleAddTypeClick}>
        Add Type
      </button>
      <h5>{typeError}</h5>
      <button type="button" onClick={handleFixTypes}>
        Save Types
      </button>
      {fixedTypes.length > 0 && (
        <div>
          <h3>Questions</h3>
          <ol>
            {questions.map((question, index) => {
              return (
                <CreateQuestion
                  key={question.id}
                  onSaveQuestion={handleSaveQuestion(index)}
                  onDeleteQuestion={handleDeleteQuestion(index)}
                  types={fixedTypes}
                />
              );
            })}
          </ol>
          <button type="button" onClick={handleAddQuestionClick}>
            Add Question
          </button>
          <h5>{error}</h5>
          <button>Submit</button>
        </div>
      )}
    </form>
  );
}

export default CreateSurvey;
