import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import useSurvey from "../../../hooks/useSurvey";
import getTime from "../../../utils/getTime";
import DeleteSuveyButton from "../../Common/DeleteSuveyButton";
import LikeButton from "../../Common/LikeButton";
import { getResult } from "./getResult";
import Question from "./Sections/Question";

function Survey({ match, userObj }) {
  const { params } = match;
  const history = useHistory();
  // 해당 survey 가져오기
  const survey = useSurvey(params.id);
  return (
    <div>
      {params.id}
      {!survey ? null : (
        <div>
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
            {({ values }) => (
              <Form>
                <h3>Questions</h3>
                <FieldArray name={`checks`}>
                  <>
                    {survey.questions.map((question, qIndex) => (
                      <div key={question.id}>
                        <Question question={question} qIndex={qIndex} />
                      </div>
                    ))}
                  </>
                </FieldArray>
                <ErrorMessage name="checks" />
                <button type="submit">Result</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}

export default Survey;
