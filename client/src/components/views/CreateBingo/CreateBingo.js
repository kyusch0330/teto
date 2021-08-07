import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import {
  BingoCoverForm,
  CreateBingoContainer,
  CreateBingoPaper,
  ErorrSpan,
} from "./CreateBingo.styles";
import * as Yup from "yup";
import { Prompt, useHistory } from "react-router-dom";
import usePreventCreatePageLeave from "../../../hooks/usePreventCreatePageLeave";
import CreateLevels from "./Sections/CreateLevels/CreateLevels";

function CreateBingo({ userObj }) {
  const [bingoSize, setBingoSize] = useState(0);

  const { blocked, enablePrevent, disablePrevent } = usePreventCreatePageLeave([
    "block",
  ]);
  const history = useHistory();

  return (
    <CreateBingoContainer>
      <Prompt
        when={blocked}
        message="You have unsaved changes, are you sure you want to leave?"
      />

      {bingoSize === 0 ? (
        <div>
          <button type="button" onClick={() => setBingoSize(4)}>
            4 x 4
          </button>
          <button type="button" onClick={() => setBingoSize(5)}>
            5 x 5
          </button>
          <button type="button" onClick={() => setBingoSize(6)}>
            6 x 6
          </button>
          <button type="button" onClick={() => setBingoSize(7)}>
            7 x 7
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{
            userId: userObj._id,
            userName: userObj.name,
            createdAt: 0,
            title: "",
            description: "",
            levels: [
              { name: "base", description: "description example", minLines: 0 },
            ],
            questions: [],
          }}
          validationSchema={Yup.object({
            title: Yup.string().max(20, "too long title").required(),
            description: Yup.string().max(200, "too long description"),
            levels: Yup.array().of(
              Yup.object().shape({
                name: Yup.string()
                  .max(20, "too long type name")
                  .required("Required"),
                description: Yup.string().max(
                  1000,
                  "too long type description"
                ),
                minLines: Yup.number().required("Required"),
              })
            ),
            questions: Yup.array().of(
              Yup.object().shape({
                text: Yup.string()
                  .max(50, "too long question text")
                  .required("Required"),
              })
            ),
          })}
          onSubmit={(values) => {
            // values.types = types;
            // values.createdAt = Date.now();
            // // upload 성공 시 메뉴로 나갈 수 있게
            // disablePrevent();
            // console.log(values);
            // const response = axios
            //   .post("/api/surveys/upload", values)
            //   .then((response) => console.log(response.data))
            //   .then(() => history.push("/survey"))
            //   .catch((err) => {
            //     console.log(err);
            //     enablePrevent();
            //   });
          }}
          render={({ values, errors }) => (
            <CreateBingoPaper>
              <BingoCoverForm autoComplete="off">
                <h3>Title</h3>
                <Field name="title" />
                <ErorrSpan>
                  <ErrorMessage name="title" />
                </ErorrSpan>
                <h3>description</h3>
                <Field as="textarea" name="description" />
              </BingoCoverForm>
              <CreateLevels levels={values.levels} bingoSize={bingoSize} />

              {/* {types.length > 0 && (
                <CreateQuestions
                  questions={values.questions}
                  types={types}
                  errors={errors}
                />
              )} */}
            </CreateBingoPaper>
          )}
        />
      )}
    </CreateBingoContainer>
  );
}

export default CreateBingo;
