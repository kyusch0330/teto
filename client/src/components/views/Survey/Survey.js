import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import useSlider from "../../../hooks/useSlider";
import useSurvey from "../../../hooks/useSurvey";
import getTime from "../../../utils/getTime";
import DeleteSuveyButton from "../../Common/DeleteSuveyButton";
import LikeButton from "../../Common/LikeButton";
import { getResult } from "./getResult";
import Question from "./Sections/Question";
import {
  Container,
  QuestionCard,
  QuestionSlider,
  StyledForm,
  SurveyPaper,
} from "./Survey.styles";
import SliderController from "../../Common/SliderController";

function Survey({ match, userObj }) {
  const { params } = match;
  const history = useHistory();
  // 해당 survey 가져오기
  const survey = useSurvey(params.id);
  const {
    currentQuestion,
    prevQuestion,
    nextQuestion,
    moveToPrev,
    moveToNext,
  } = useSlider();
  return (
    <Container>
      {!survey ? null : (
        <SurveyPaper>
          <DeleteSuveyButton
            testId={survey._id}
            creatorId={survey.userId}
            userObj={userObj}
          />
          <LikeButton
            initialLikes={survey.likes}
            userObj={userObj}
            testId={params.id}
          />
          <h3>{survey.title}</h3>
          <span>{getTime(survey.createdAt)}</span>
          <p>{survey.description}</p>
          <br />
          <Formik
            initialValues={{
              checks: [],
            }}
            validationSchema={Yup.object({
              checks: Yup.array().min(
                survey.questions.length,
                "please check all"
              ),
            })}
            onSubmit={(values) => {
              const result = getResult(survey.types, values.checks);
              history.push("/result", {
                result,
                testId: params.id,
                likes: survey.likes,
              });
            }}
          >
            {({ values, touched, errors }) => (
              <StyledForm>
                <h3>Questions</h3>
                <QuestionSlider>
                  <button type="button" onClick={() => moveToNext()}>
                    START
                  </button>
                  <FieldArray name={`checks`}>
                    <>
                      {survey.questions.map((question, qIndex) => (
                        <QuestionCard
                          ref={
                            currentQuestion + 1 === qIndex
                              ? nextQuestion
                              : currentQuestion - 1 === qIndex
                              ? prevQuestion
                              : null
                          }
                          key={question.id}
                          className="question"
                        >
                          <Question
                            moveToNext={moveToNext}
                            question={question}
                            qIndex={qIndex}
                          />
                        </QuestionCard>
                      ))}
                    </>
                  </FieldArray>
                </QuestionSlider>
                {currentQuestion >= 0 && (
                  <SliderController
                    moveToPrev={moveToPrev}
                    moveToNext={moveToNext}
                  />
                )}
                {!errors.checks && touched.checks ? (
                  <button type="submit">Result</button>
                ) : (
                  <>
                    <ErrorMessage name="checks" />
                    <button>Cant Submit</button>
                  </>
                )}
              </StyledForm>
            )}
          </Formik>
        </SurveyPaper>
      )}
    </Container>
  );
}

export default Survey;
