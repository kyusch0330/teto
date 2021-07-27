// import React from "react";
// import useCreateSingleSurveyQuestion from "../../Hooks/useCreateSingleSurveyQuestion";
// import CreateOption from "../CreateOption/CreateOption";

// function CreateQuestion({ types, onSaveQuestion, onDeleteQuestion }) {
//   const {
//     text,
//     handleTextChange,
//     description,
//     handleDescriptionChange,
//     checkNum,
//     handleCheckNumChange,
//     options,
//     optionMethods,
//     error,
//     setError,
//   } = useCreateSingleSurveyQuestion(types);

//   const handleSaveQuestion = () => {
//     const newQuestion = {
//       text,
//       description,
//       checkNum,
//       options,
//     };
//     onSaveQuestion(newQuestion);
//   };

//   return (
//     <div onBlur={handleSaveQuestion}>
//       <label>
//         question
//         <input type="text" value={text} onChange={handleTextChange} />
//       </label>
//       <label>
//         description
//         <textarea value={description} onChange={handleDescriptionChange} />
//       </label>
//       <label>
//         Number to check
//         <input type="number" value={checkNum} onChange={handleCheckNumChange} />
//       </label>
//       <button type="button" onClick={onDeleteQuestion}>
//         delete
//       </button>
//       <ol>
//         {options.map((option, index) => (
//           <li key={option.id}>
//             <CreateOption
//               option={option}
//               types={types}
//               onSaveOption={optionMethods.handleSaveObj(index)}
//               onDeleteOption={optionMethods.handleDeleteObj(index)}
//               sendError={setError}
//             />
//           </li>
//         ))}
//       </ol>
//       <button type="button" onClick={optionMethods.handleAddObjClick}>
//         Add option
//       </button>
//       <h5>{error}</h5>
//     </div>
//   );
// }
// export default CreateQuestion;

import { Field, FieldArray } from "formik";
import React from "react";
import { initQuestion } from "../../utils/initObjs";
import CreateOptions from "../CreateOptions/CreateOptions";

function CreateQuestions({ questions, types }) {
  return (
    <FieldArray
      name="questions"
      render={(arrayHelpers) => (
        <div>
          {questions.map((question, qIndex) => (
            <div key={question.id}>
              <h5>Question {qIndex}</h5>
              <div>
                <label>
                  text
                  <Field name={`questions[${qIndex}].text`} />
                </label>
                <label>
                  description
                  <Field
                    as="textarea"
                    name={`questions[${qIndex}].description`}
                  />
                </label>
              </div>
              <div>
                options
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
