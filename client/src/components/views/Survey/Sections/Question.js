import { Field } from "formik";
import React from "react";

const Question = ({ question, qIndex }) => (
  <>
    <h5>
      Q{qIndex + 1} {question.text}
    </h5>
    <h6>{question.description}</h6>
    <div role="group" aria-labelledby="my-radio-group">
      {question.options.map((option, oIndex) => (
        <label>
          <Field
            type="radio"
            name={`checks[${qIndex}]`}
            value={`${option.id}/${option.forType}/${option.weight}`}
          />
          {option.text}
        </label>
      ))}
    </div>
  </>
);

export default Question;
