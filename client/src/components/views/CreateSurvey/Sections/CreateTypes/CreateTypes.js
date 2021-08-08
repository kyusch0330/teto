import React from "react";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import * as Yup from "yup";
import { initType } from "utils/initObjs";
import {
  CloseButton,
  FixTypesButton,
  SurveyTypesForm,
  TypeItem,
  TypeList,
  TypeNameBox,
} from "./CreateTypes.styles";
import { ReactComponent as PlusImg } from "assets/plus.svg";
import { ReactComponent as CloseImg } from "assets/close.svg";
import { PALLETE } from "constants/pallete";

function CreateTypes({ onFixTypes, initialTypes = null }) {
  return (
    <Formik
      initialValues={{
        types: initialTypes ? initialTypes : [initType()],
      }}
      validationSchema={Yup.object({
        types: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .max(20, "too long type name")
              .required("Required"),
            description: Yup.string().max(1000, "too long type description"),
          })
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("SUBMIT");
        onFixTypes(values.types);
        setSubmitting(false);
      }}
      render={({ values, errors }) => (
        <>
          <SurveyTypesForm autoComplete="off">
            <h3>Types</h3>
            <TypeList>
              <FieldArray
                name={`types`}
                render={(arrayHelpers) =>
                  values.types.map((type, index) => (
                    <>
                      <TypeItem key={type.id}>
                        <h5>Type {index + 1}</h5>
                        {values.types.length > 1 && (
                          <CloseButton type="button">
                            <CloseImg
                              width={12}
                              height={12}
                              fill={PALLETE.RED}
                              onClick={() => arrayHelpers.remove(index)} // remove from the list
                            />
                          </CloseButton>
                        )}
                        <TypeNameBox>
                          <Field
                            name={`types[${index}].name`}
                            placeholder="Type Name"
                          />
                          <ErrorMessage name={`types[${index}].name`} />
                        </TypeNameBox>
                        <Field
                          as="textarea"
                          name={`types[${index}].description`}
                        />
                        <ErrorMessage name={`types[${index}].description`} />
                      </TypeItem>
                      <PlusImg
                        className="addTypeBtn"
                        width={30}
                        height={30}
                        fill={
                          values.types.length < 8
                            ? PALLETE.PRIMARY_BLUE_DARK
                            : PALLETE.GRAY
                        }
                        onClick={() => {
                          if (values.types.length < 8)
                            arrayHelpers.insert(index + 1, initType());
                        }} // insert an initalValue at a position
                      />
                    </>
                  ))
                }
              />
            </TypeList>
            {errors.types || values.types[0].name === "" ? (
              <>
                <FixTypesButton className="fixTypesBtn">
                  Can't Fix
                </FixTypesButton>
                <span>please fill out all requirement</span>
              </>
            ) : (
              <FixTypesButton className="fixTypesBtn" type="submit">
                Fix Types
              </FixTypesButton>
            )}
          </SurveyTypesForm>
        </>
      )}
    />
  );
}

export default CreateTypes;
