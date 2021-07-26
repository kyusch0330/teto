import React, { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import axios from "axios";
import CreateType from "../../CreateType/CreateType";
import CreateQuestion from "../../CreateQuestion/CreateQuestion";
import useCreateTypes from "../../../Hooks/useCreateTypes";
import useCreateSurveyHeader from "../../../Hooks/useCreateSurveyHeader";
import useCreateSurveyQuestions from "../../../Hooks/useCreateSurveyQuestions";
import usePreventCreatePageLeave from "../../../Hooks/usePreventCreatePageLeave";

function CreateSurvey({ userObj }) {
  const [error, setError] = useState("");

  const {
    title,
    description,
    handleTitleChange,
    handleDescriptionChange,
    headerError,
  } = useCreateSurveyHeader();

  const { types, typeMethods, fixedTypes, handleFixTypes, fixTypesError } =
    useCreateTypes();

  const { questions, questionMethods } = useCreateSurveyQuestions();

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
    // 게시판으로 나갈 수 있게
    disablePrevent();
    const dataToSubmit = {
      userId: userObj._id,
      createdAt: Date.now(),
      title,
      description,
      types,
      questions,
    };
    console.log(dataToSubmit);
    // const response = axios
    //   .post("/api/surveys/upload", dataToSubmit)
    //   .then((response) => console.log(response.data))
    //   .then(() => history.push("/survey"))
    //   .catch((err) => setError("Upload Fail" + err));
  };

  // 작성 중인 페이지 실수로 벗어나는 것 방지
  const { blocked, disablePrevent } = usePreventCreatePageLeave([
    title,
    description,
    types[0].name,
  ]);

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
      <h5>{headerError}</h5>
      <h3>Types</h3>
      <ol>
        {types.map((type, index) => {
          return (
            <li key={type.id}>
              <CreateType
                onSaveType={typeMethods.handleSaveObj(index)}
                onDeleteType={typeMethods.handleDeleteObj(index)}
              />
            </li>
          );
        })}
      </ol>
      <button type="button" onClick={typeMethods.handleAddObjClick}>
        Add Type
      </button>
      <h5>{fixTypesError}</h5>
      <button type="button" onClick={handleFixTypes}>
        Save Types
      </button>
      {fixedTypes.length > 0 && (
        <div>
          <h3>Questions</h3>
          <ol>
            {questions.map((question, index) => {
              return (
                <li key={question.id}>
                  <CreateQuestion
                    onSaveQuestion={questionMethods.handleSaveObj(index)}
                    onDeleteQuestion={questionMethods.handleDeleteObj(index)}
                    types={fixedTypes}
                  />
                </li>
              );
            })}
          </ol>
          <button type="button" onClick={questionMethods.handleAddObjClick}>
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
