import React, { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CreateTypes from "./Sections/CreateTypes/CreateTypes";
import CreateQuestions from "./Sections/CreateQuestions/CreateQuestions";
import usePreventCreatePageLeave from "../../../hooks/usePreventCreatePageLeave";

const CreateSurvey = ({ userObj }) => {
  const [types, setTypes] = useState([]);

  const { blocked, enablePrevent, disablePrevent } = usePreventCreatePageLeave([
    "block",
  ]);
  const history = useHistory();

  return (
    <div>
      <Prompt
        when={blocked}
        message="You have unsaved changes, are you sure you want to leave?"
      />

      <div>
        <h3>Questions</h3>
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
                  .max(30, "too long question text")
                  .required("Required"),
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
          render={({ values }) => (
            <>
              <Form>
                <label>
                  title
                  <Field name="title" />
                </label>
                <label>
                  description
                  <Field as="textarea" name="description" />
                </label>
              </Form>
              <CreateTypes onFixTypes={setTypes} />
              <Form>
                {types.length > 0 && (
                  <CreateQuestions questions={values.questions} types={types} />
                )}
              </Form>
            </>
          )}
        />
      </div>
    </div>
  );
};
export default CreateSurvey;
