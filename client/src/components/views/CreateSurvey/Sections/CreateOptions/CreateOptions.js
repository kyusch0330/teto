import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { initOption } from "utils/initObjs";
import {
  AddOptionButton,
  OptionItem,
  OptionTextBox,
  OptionWeightBox,
} from "./CreateOptions.styles";
import { ReactComponent as CloseImg } from "assets/close.svg";
import { ReactComponent as PlusSquareImg } from "assets/plus_sq.svg";
import { PALLETE } from "constants/pallete";

function CreateOptions({ qIndex, options, types }) {
  return (
    <FieldArray
      name={`questions[${qIndex}].options`}
      render={(arrayHelpers) =>
        options.map((option, oIndex) => (
          <>
            <OptionItem key={option.id}>
              {options.length > 1 && (
                <CloseImg
                  width={10}
                  height={10}
                  fill={PALLETE.RED}
                  className="closeBtn"
                  onClick={() => arrayHelpers.remove(oIndex)} // remove from the list
                />
              )}
              <OptionTextBox>
                <span className="optionNum">{oIndex + 1}&nbsp;</span>
                <Field name={`questions[${qIndex}].options[${oIndex}].text`} />
                <div>
                  <ErrorMessage
                    name={`questions[${qIndex}].options[${oIndex}].text`}
                  />
                </div>
              </OptionTextBox>
              <OptionWeightBox>
                <span>for Type</span>
                <Field
                  as="select"
                  name={`questions[${qIndex}].options[${oIndex}].forType`}
                >
                  {types.map((type) => (
                    <option value={type.id}>{type.name}</option>
                  ))}
                </Field>
                <span>weight</span>
                <Field
                  type="number"
                  name={`questions[${qIndex}].options[${oIndex}].weight`}
                />
              </OptionWeightBox>
              {options.length < 8 && (
                <AddOptionButton type="button">
                  <PlusSquareImg
                    fill={PALLETE.PRIMARY_BLUE_DARK}
                    width={20}
                    height={20}
                    onClick={() =>
                      arrayHelpers.insert(oIndex + 1, initOption(types))
                    } // insert an initalValue at a position
                  />
                </AddOptionButton>
              )}
            </OptionItem>
          </>
        ))
      }
    />
  );
}

export default CreateOptions;
