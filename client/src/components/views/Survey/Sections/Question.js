import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { PALLETE } from "../../../../constants/pallete";

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Question = ({ question, qIndex, moveToNext }) => {
  return (
    <>
      <h5>
        Q{qIndex + 1} {question.text}
      </h5>
      <h6>{question.description}</h6>
      <OptionContainer
        role="group"
        aria-labelledby="my-radio-group"
        onChange={() => moveToNext()}
      >
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
      </OptionContainer>
    </>
  );
};

export default Question;
