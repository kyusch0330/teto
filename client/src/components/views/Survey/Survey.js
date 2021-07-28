import axios from "axios";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import useLike from "../../../hooks/useLike";
import getTime from "../../../utils/getTime";
import { getResult } from "./getResult";
import Question from "./Sections/Question";

function Survey({ match, userObj }) {
  const { params } = match;
  const [survey, setSurvey] = useState(null);
  const [likes, handleLikeClick] = useLike(userObj, params.id);

  const history = useHistory();
  // 해당 survey 가져오기
  useEffect(() => {
    const response = axios
      .post("/api/surveys/specific", { id: params.id })
      .then((res) => {
        if (!res.data.success) {
          alert(res.data.message);
          history.push("/survey");
        }
        setSurvey(res.data.survey);
        console.log(res.data);
      });
  }, []);
  // survey 삭제 (작성자, 어드민만)
  const handleDeleteSurvey = () => {
    const response = axios
      .delete("/api/surveys/delete", {
        data: { id: survey._id },
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .then(() => history.push("/survey"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {params.id}
      {!survey ? null : (
        <div>
          {userObj && (survey.userId === userObj._id || userObj.isAdmin) && (
            <button onClick={handleDeleteSurvey}>Delete Test</button>
          )}
          <h3>Like {likes}</h3>
          <button onClick={handleLikeClick}>Like</button>
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
              console.log("- RESULT -");
              const result = getResult(survey.types, values.checks);
              console.log(result);
              history.push("/result", { result, userObj, testId: params.id });
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
