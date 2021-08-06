import React, { useEffect, useRef } from "react";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { initQuestion } from "../../../../../utils/initObjs";
import CreateOptions from "../CreateOptions/CreateOptions";
import {
  QuestionList,
  QuestionItem,
  SurveyQuestionsForm,
  QuestionTextBox,
  QuestionMain,
  QuestionDescriptionBox,
  OptionList,
  CloseQuestionButton,
  AddQuestionButton,
  SubmitButton,
  ErorrSpan,
} from "./CreateQuestions.styles";
import { ReactComponent as CloseImg } from "../../../../../assets/close.svg";
import { ReactComponent as PlusSquareImg } from "../../../../../assets/plus_sq.svg";
import { PALLETE } from "../../../../../constants/pallete";
import useSlider from "../../../../../hooks/useSlider";
import SliderController from "../../../../Common/SliderController";

function CreateQuestions({ questions, types, errors }) {
  const {
    currentQuestion,
    setCurrentQuestion,
    prevQuestion,
    nextQuestion,
    moveToPrev,
    moveToNext,
  } = useSlider(0);

  const questionArea = useRef();

  useEffect(() => {
    if (!questionArea.current) return;
    questionArea.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [types]);
  useEffect(() => {
    if (currentQuestion + 1 === questions.length - 1) moveToNext();
  }, [questions.length]);

  return (
    <SurveyQuestionsForm autoComplete="off">
      <FieldArray
        name="questions"
        render={(arrayHelpers) => (
          <>
            <h3>Questions</h3>
            <QuestionList ref={questionArea}>
              {questions.length < 1
                ? arrayHelpers.push(initQuestion(types))
                : null}
              {questions.map((question, qIndex) => (
                <>
                  <QuestionItem
                    key={question.id}
                    ref={
                      currentQuestion + 1 === qIndex
                        ? nextQuestion
                        : currentQuestion - 1 === qIndex
                        ? prevQuestion
                        : null
                    }
                  >
                    {questions.length > 1 && (
                      <CloseQuestionButton>
                        <CloseImg
                          width={16}
                          height={16}
                          fill={PALLETE.RED}
                          onClick={() => {
                            if (questions.length === qIndex + 1)
                              setCurrentQuestion(qIndex - 1);
                            arrayHelpers.remove(qIndex);
                          }} // remove from the list
                        />
                      </CloseQuestionButton>
                    )}
                    <h5>Question {qIndex + 1}</h5>
                    <QuestionMain>
                      <QuestionTextBox>
                        <label>
                          text
                          <div>
                            <Field name={`questions[${qIndex}].text`} />
                            <ErorrSpan>
                              <ErrorMessage
                                name={`questions[${qIndex}].text`}
                              />
                            </ErorrSpan>
                          </div>
                        </label>
                      </QuestionTextBox>
                      <QuestionDescriptionBox>
                        <label>
                          description
                          <Field
                            as="textarea"
                            name={`questions[${qIndex}].description`}
                          />
                        </label>
                        <ErrorMessage
                          name={`questions[${qIndex}].description`}
                        />
                      </QuestionDescriptionBox>
                    </QuestionMain>
                    <OptionList>
                      <h4>options</h4>
                      <CreateOptions
                        qIndex={qIndex}
                        options={questions[qIndex].options}
                        types={types}
                      />
                    </OptionList>
                  </QuestionItem>
                  <AddQuestionButton>
                    <PlusSquareImg
                      width={30}
                      height={30}
                      fill={PALLETE.PRIMARY_BLUE_DARK}
                      onClick={() => {
                        if (questions.length < 30) {
                          arrayHelpers.insert(qIndex + 1, initQuestion(types));
                        }
                      }} // insert an initalValue at a position
                    />
                  </AddQuestionButton>
                </>
              ))}
            </QuestionList>
            <SliderController moveToPrev={moveToPrev} moveToNext={moveToNext} />
          </>
        )}
      />
      <div>
        {!errors.questions && !errors.title ? (
          <SubmitButton type="submit">Submit</SubmitButton>
        ) : (
          <ErorrSpan>fill out all required forms</ErorrSpan>
        )}
      </div>
    </SurveyQuestionsForm>
  );
}

export default CreateQuestions;
