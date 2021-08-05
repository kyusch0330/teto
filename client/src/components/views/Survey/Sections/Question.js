import { Field } from "formik";
import React from "react";
import {
  OptionContainer,
  QuestionMain,
  StyledRadioContainer,
} from "./Question.styles";

const Question = ({ question, qIndex, moveToNext }) => {
  return (
    <>
      <QuestionMain>
        <h5>
          Q{qIndex + 1}. {question.text}
        </h5>
        <h6>{question.description ? question.description : " "}</h6>
      </QuestionMain>
      <StyledRadioContainer>
        <OptionContainer
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
              &nbsp;{option.text}
            </label>
          ))}
        </OptionContainer>
      </StyledRadioContainer>
    </>
  );
};

export default Question;
