import { Form, Formik } from "formik";
import React from "react";
import { initQuestion } from "../../utils/initObjs";
import CreateQuestions from "../CreateQuestions/CreateQuestions";

function CreateSurveyBody({ types }) {
  return (
    <div>
      <h1>Friends</h1>
      <Formik
        initialValues={{
          questions: [initQuestion(types)],
        }}
        onSubmit={(values) => {
          console.log(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          // }, 500);
        }}
        render={({ values }) => (
          <Form>
            <CreateQuestions questions={values.questions} types={types} />
          </Form>
        )}
      />
    </div>
  );
}

export default CreateSurveyBody;
