import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import {
  BingoCover,
  BingoForm,
  CreateBingoContainer,
  CreateBingoPaper,
  ErorrSpan,
} from "./CreateBingo.styles";
import * as Yup from "yup";
import { Prompt, useHistory } from "react-router-dom";
import usePreventCreatePageLeave from "hooks/usePreventCreatePageLeave";
import CreateLevels from "./Sections/CreateLevels/CreateLevels";
import CreateBingoQuestions from "./Sections/CreateBingoQuestions/CreateBingoQuestions";
import { initLevel } from "utils/initObjs";

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
            levels: [initLevel(-1)],
            questions: Array(bingoSize * bingoSize)
              .fill(0)
              .map((q) => ({
                text: "",
              })),
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
            console.log(values);
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
          render={({ values, errors, touched }) => (
            <CreateBingoPaper>
              <BingoForm>
                <BingoCover autoComplete="off">
                  <h3>Title</h3>
                  <Field name="title" />
                  <ErorrSpan>
                    <ErrorMessage name="title" />
                  </ErorrSpan>
                  <h3>description</h3>
                  <Field as="textarea" name="description" />
                </BingoCover>

                <CreateLevels levels={values.levels} bingoSize={bingoSize} />
                <CreateBingoQuestions
                  questions={values.questions}
                  bingoSize={bingoSize}
                />

                {Object.keys(touched).length === 0 ||
                errors.title ||
                errors.levels ||
                errors.questions ? (
                  <>
                    <span>
                      {errors.title
                        ? "제목을"
                        : errors.levels
                        ? "모든 레벨을"
                        : "모든 질문을"}
                      입력해주세요.
                    </span>
                    <div>CANT</div>
                  </>
                ) : (
                  <button onClick={() => console.log(touched)}> submit</button>
                )}
              </BingoForm>
            </CreateBingoPaper>
          )}
        />
      )}
    </CreateBingoContainer>
  );
}

export default CreateBingo;
