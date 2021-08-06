import React, { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CreateTypes from "./Sections/CreateTypes/CreateTypes";
import CreateQuestions from "./Sections/CreateQuestions/CreateQuestions";
import usePreventCreatePageLeave from "../../../hooks/usePreventCreatePageLeave";
import {
  Container,
  CreateSurveyPaper,
  SurveyCoverForm,
} from "./CreateSurvey.styles";
import { ErorrSpan } from "./Sections/CreateQuestions/CreateQuestions.styles";

const CreateSurvey = ({ userObj }) => {
  const [types, setTypes] = useState([]);

  const { blocked, enablePrevent, disablePrevent } = usePreventCreatePageLeave([
    "block",
  ]);
  const history = useHistory();

  return (
    <Container>
      <Prompt
        when={blocked}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <Formik
        initialValues={{
          userId: userObj._id,
          createdAt: 0,
          types: [],
          title: "",
          description: "",
          questions: [], //initQuestion(types)
        }}
        validationSchema={Yup.object({
          title: Yup.string().max(20, "too long title").required(),
          description: Yup.string().max(200, "too long description"),
          questions: Yup.array().of(
            Yup.object().shape({
              text: Yup.string()
                .max(50, "too long question text")
                .required("Required"),
              description: Yup.string().max(
                50,
                "too long question description"
              ),
              options: Yup.array().of(
                Yup.object().shape({
                  text: Yup.string()
                    .max(30, "too long option text")
                    .required("Required"),
                })
              ),
            })
          ),
        })}
        onSubmit={(values) => {
          values.types = types;
          values.createdAt = Date.now();
          // upload 성공 시 메뉴로 나갈 수 있게
          disablePrevent();
          console.log(values);
          const response = axios
            .post("/api/surveys/upload", values)
            .then((response) => console.log(response.data))
            .then(() => history.push("/survey"))
            .catch((err) => {
              console.log(err);
              enablePrevent();
            });
        }}
        render={({ values, errors }) => (
          <CreateSurveyPaper>
            <SurveyCoverForm>
              <h3>Title</h3>
              <Field name="title" />
              <ErorrSpan>
                <ErrorMessage name="title" />
              </ErorrSpan>
              <h3>description</h3>
              <Field as="textarea" name="description" />
            </SurveyCoverForm>
            <CreateTypes onFixTypes={setTypes} />

            {types.length > 0 && (
              <CreateQuestions
                questions={values.questions}
                types={types}
                errors={errors}
              />
            )}
          </CreateSurveyPaper>
        )}
      />
    </Container>
  );
};
export default CreateSurvey;
