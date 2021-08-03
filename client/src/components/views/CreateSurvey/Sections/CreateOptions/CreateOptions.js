import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { initOption } from "../../../../../utils/initObjs";

function CreateOptions({ qIndex, options, types }) {
  return (
    <FieldArray
      name={`questions[${qIndex}].options`}
      render={(arrayHelpers) =>
        options.map((option, oIndex) => (
          <li key={option.id}>
            <label>
              option{oIndex}
              <Field name={`questions[${qIndex}].options[${oIndex}].text`} />
            </label>
            <ErrorMessage
              name={`questions[${qIndex}].options[${oIndex}].text`}
            />
            <Field
              as="select"
              name={`questions[${qIndex}].options[${oIndex}].forType`}
            >
              {types.map((type) => (
                <option value={type.id}>{type.name}</option>
              ))}
            </Field>
            <Field
              type="number"
              name={`questions[${qIndex}].options[${oIndex}].weight`}
            />
            {options.length > 1 && (
              <button
                type="button"
                onClick={() => arrayHelpers.remove(oIndex)} // remove from the list
              >
                remove
              </button>
            )}
            {options.length < 8 && (
              <button
                type="button"
                onClick={() =>
                  arrayHelpers.insert(oIndex + 1, initOption(types))
                } // insert an initalValue at a position
              >
                add
              </button>
            )}
          </li>
        ))
      }
    />
  );
}

export default CreateOptions;
