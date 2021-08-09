import React, { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import surveyAPI from "api/surveys";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import CreateTypes from "./Sections/CreateTypes/CreateTypes";
import CreateQuestions from "./Sections/CreateQuestions/CreateQuestions";
import usePreventCreatePageLeave from "hooks/usePreventCreatePageLeave";
import {
  Container,
  CreateSurveyPaper,
  SurveyCoverForm,
} from "./CreateSurvey.styles";
import { ErorrSpan } from "./Sections/CreateQuestions/CreateQuestions.styles";

const CreateSurvey = ({ userObj, location }) => {
  const { edit, surveyToEdit } = location.state
    ? location.state
    : { edit: false, surveyToEdit: null };
  const [types, setTypes] = useState(edit ? surveyToEdit.types : []);

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
          userId: edit ? surveyToEdit.userId : userObj._id,
          userName: edit ? surveyToEdit.userName : userObj.name,
          createdAt: 0,
          types: edit ? surveyToEdit.types : [],
          title: edit ? surveyToEdit.title : "",
          description: edit ? surveyToEdit.description : "",
          questions: edit ? surveyToEdit.questions : [], //initQuestion(types)
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
          values.createdAt = edit ? surveyToEdit.createdAt : Date.now();
          // upload 성공 시 메뉴로 나갈 수 있게
          disablePrevent();
          if (edit) {
            surveyAPI
              .updateSurvey(surveyToEdit._id, values)
              .then(() => history.push(`/survey/${surveyToEdit._id}`))
              .catch((err) => {
                console.log(err);
                enablePrevent();
              });
          } else {
            surveyAPI
              .uploadSurvey(values)
              .then(() => history.push("/survey"))
              .catch((err) => {
                console.log(err);
                enablePrevent();
              });
          }
        }}
        render={({ values, errors }) => (
          <CreateSurveyPaper>
            <SurveyCoverForm autoComplete="off">
              <h3>Title</h3>
              <Field name="title" />
              <ErorrSpan>
                <ErrorMessage name="title" />
              </ErorrSpan>
              <h3>description</h3>
              <Field as="textarea" name="description" />
            </SurveyCoverForm>
            <CreateTypes
              onFixTypes={setTypes}
              initialTypes={edit && surveyToEdit.types}
            />

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
