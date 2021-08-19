import React from "react";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import useSlider from "../../../hooks/useSlider";
import useSurvey from "../../../hooks/useSurvey";
import getTime from "../../../utils/getTime";
import DeleteTestButton from "../../Common/DeleteTestButton";
import EditTestButton from "components/Common/EditTestButton";
import LikeButton from "../../Common/LikeButton";
import { getResult } from "./getResult";
import Question from "./Sections/Question";
import {
  AuthorMenu,
  Container,
  QuestionCard,
  QuestionSlider,
  ResultButton,
  ResultButtonBox,
  StartButton,
  StyledForm,
  SurveyPaper,
} from "./Survey.styles";
import SliderController from "components/Common/SliderController";
import { useEffect } from "react";
import ProgressBar from "./Sections/ProgressBar";

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
  } = useSlider(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      {!survey ? null : (
        <SurveyPaper>
          <AuthorMenu>
            <EditTestButton
              testData={survey}
              creatorId={survey.userId}
              userObj={userObj}
              testType={"survey"}
            />
            <DeleteTestButton
              testId={survey._id}
              creatorId={survey.userId}
              userObj={userObj}
              testType={"survey"}
            />
          </AuthorMenu>
          <LikeButton
            initialLikes={survey.likes}
            userObj={userObj}
            testId={params.id}
            testType={"survey"}
          />
          <h3>{survey.title}</h3>
          <span className="authorName">{survey.userName}</span>
          <span className="createdAt">{getTime(survey.createdAt)}</span>
          <p>{survey.description}</p>
          <br />
          <Formik
            initialValues={{
              checks: [],
            }}
            validationSchema={Yup.object({
              checks: Yup.array()
                .min(survey.questions.length, "please check all")
                .of(Yup.string().required()),
            })}
            onSubmit={(values) => {
              const result = getResult(survey.types, values.checks);
              history.push("/survey-result", {
                result,
                testId: params.id,
              });
            }}
          >
            {({ values, touched, errors }) => (
              <StyledForm>
                <h3>Questions</h3>
                <ProgressBar
                  current={currentQuestion}
                  total={survey.questions.length}
                  progress={values.checks.length}
                  checks={values.checks}
                />
                <QuestionSlider>
                  <StartButton type="button" onClick={moveToNext}>
                    START
                  </StartButton>
                  <FieldArray name={`checks`}>
                    <>
                      {survey.questions.map((question, qIndex) => (
                        <>
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
                          <h1> </h1>
                          {/*slider 버그 해결 용도*/}
                        </>
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
                <ResultButtonBox
                  ref={
                    currentQuestion === survey.questions.length - 1
                      ? nextQuestion
                      : null
                  }
                >
                  {values.checks.length < survey.questions.length ||
                  errors.checks ? (
                    <>
                      {errors.checks &&
                        values.checks[survey.questions.length - 1] &&
                        "모든 질문에 체크해주세요"}
                      <ResultButton type="submit" className="notComplete">
                        Result
                      </ResultButton>
                    </>
                  ) : (
                    <ResultButton type="submit">Result</ResultButton>
                  )}
                </ResultButtonBox>
              </StyledForm>
            )}
          </Formik>
        </SurveyPaper>
      )}
    </Container>
  );
}

export default Survey;
