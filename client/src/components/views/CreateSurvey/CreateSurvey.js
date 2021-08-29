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
  const { edit, dataToEdit } = location.state
    ? location.state
    : { edit: false, dataToEdit: null };
  const [types, setTypes] = useState(edit ? dataToEdit.types : []);

  const { blocked, enablePrevent, disablePrevent } = usePreventCreatePageLeave([
    "block",
  ]);
  const history = useHistory();

  return (
    <Container>
      <Prompt
        when={blocked}
        message="나가시겠습니까? 작성 중인 테스트는 저장되지 않습니다."
      />
      <Formik
        initialValues={{
          userId: edit ? dataToEdit.userId : userObj._id,
          userName: edit ? dataToEdit.userName : userObj.name,
          createdAt: 0,
          types: edit ? dataToEdit.types : [],
          title: edit ? dataToEdit.title : "",
          description: edit ? dataToEdit.description : "",
          questions: edit ? dataToEdit.questions : [], //initQuestion(types)
        }}
        validationSchema={Yup.object({
          title: Yup.string().max(30, "too long title").required(),
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
                    .max(40, "too long option text")
                    .required("Required"),
                })
              ),
            })
          ),
        })}
        onSubmit={(values) => {
          values.types = types;
          values.createdAt = edit ? dataToEdit.createdAt : Date.now();
          // upload 성공 시 메뉴로 나갈 수 있게
          disablePrevent();
          if (edit) {
            surveyAPI
              .updateSurvey(dataToEdit._id, values)
              .then(() => history.push(`/survey/${dataToEdit._id}`))
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
              initialTypes={edit && dataToEdit.types}
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
