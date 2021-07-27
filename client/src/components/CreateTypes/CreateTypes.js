import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { initType } from "../../utils/initObjs";

function CreateTypes({ onFixTypes }) {
  return (
    <Formik
      initialValues={{
        types: [initType()],
      }}
      validationSchema={Yup.object({
        types: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .max(20, "too long type name")
              .required("Required"),
          })
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("SUBMIT");
        onFixTypes(values.types);
        setSubmitting(false);
      }}
      render={({ values }) => (
        <Form>
          <h3>Types</h3>
          <FieldArray
            name={`types`}
            render={(arrayHelpers) =>
              values.types.map((type, index) => (
                <div key={type.id}>
                  <Field name={`types[${index}].name`} />
                  <ErrorMessage name={`types[${index}].name`} />
                  <Field name={`types[${index}].description`} />
                  {values.types.length > 1 && (
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)} // remove from the list
                    >
                      Remove Type
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.insert(index + 1, initType())} // insert an initalValue at a position
                  >
                    Add Type
                  </button>
                </div>
              ))
            }
          />
          <button type="submit">Fix Types</button>
        </Form>
      )}
    />
  );
}

export default CreateTypes;
