import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { initQuestion } from "../../../../../utils/initObjs";
import CreateOptions from "../CreateOptions/CreateOptions";

function CreateQuestions({ questions, types }) {
  return (
    <FieldArray
      name="questions"
      render={(arrayHelpers) => (
        <div>
          {questions.length < 1 ? arrayHelpers.push(initQuestion(types)) : null}
          {questions.map((question, qIndex) => (
            <div key={question.id}>
              <h5>Question {qIndex}</h5>
              <div>
                <label>
                  text
                  <Field name={`questions[${qIndex}].text`} />
                </label>
                <ErrorMessage name={`questions[${qIndex}].text`} />
                <label>
                  description
                  <Field
                    as="textarea"
                    name={`questions[${qIndex}].description`}
                  />
                </label>
              </div>
              <div>
                <h4>options</h4>
                <CreateOptions
                  qIndex={qIndex}
                  options={questions[qIndex].options}
                  types={types}
                />
              </div>
              {questions.length > 1 && (
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(qIndex)} // remove from the list
                >
                  Remove Question
                </button>
              )}
              <button
                type="button"
                onClick={() =>
                  arrayHelpers.insert(qIndex + 1, initQuestion(types))
                } // insert an initalValue at a position
              >
                Add Question
              </button>
            </div>
          ))}
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      )}
    />
  );
}

export default CreateQuestions;
