import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { ReactComponent as PlusImg } from "assets/plus.svg";
import { ReactComponent as CloseImg } from "assets/close.svg";
import { PALLETE } from "constants/pallete";
import { CloseButton, LevelItem, LevelNameBox } from "./CreateLevels.styles";
import { initLevel } from "utils/initObjs";

function CreateLevels({ levels, bingoSize }) {
  console.log(levels);
  return (
    <FieldArray
      name={`levels`}
      render={(arrayHelpers) =>
        levels.map((level, index) => (
          <LevelItem key={level.id}>
            <h5>Level {index + 1}</h5>
            {true && (
              <CloseButton type="button">
                <CloseImg
                  width={12}
                  height={12}
                  fill={PALLETE.RED}
                  onClick={() => arrayHelpers.remove(index)} // remove from the list
                />
              </CloseButton>
            )}
            <LevelNameBox>
              <Field name={`levels[${index}].name`} placeholder="Level Name" />
              <ErrorMessage name={`levels[${index}].name`} />
            </LevelNameBox>
            <Field as="textarea" name={`levels[${index}].description`} />
            <ErrorMessage name={`levels[${index}].description`} />
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  const newNum = levels[index].minLines - 1;
                  if (newNum <= levels[index - 1].minLines) return;
                  else {
                    arrayHelpers.replace(index, {
                      ...levels[index],
                      minLines: newNum,
                    });
                  }
                }}
              >
                -
              </button>
            )}
            <Field
              type="text"
              readOnly={index === 0 ? true : false}
              name={`levels[${index}].minLines`}
              onChange={(e) => {
                const newNum = Number(e.target.value);
                if (
                  Number.isNaN(newNum) ||
                  newNum <= levels[index - 1].minLines ||
                  (index + 1 < levels.length - 1 &&
                    newNum >= levels[index + 1].minLines)
                )
                  return;
                else {
                  arrayHelpers.replace(index, {
                    ...levels[index],
                    minLines: newNum,
                  });
                }
              }}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  const newNum = levels[index].minLines + 1;
                  if (
                    index + 1 < levels.length &&
                    newNum >= levels[index + 1].minLines
                  )
                    return;
                  else {
                    arrayHelpers.replace(index, {
                      ...levels[index],
                      minLines: newNum,
                    });
                  }
                }}
              >
                +
              </button>
            )}
            <ErrorMessage name={`levels[${index}].minLines`} />
            {index === levels.length - 1 && (
              <PlusImg
                className="addTypeBtn"
                width={30}
                height={30}
                fill={
                  levels.length < 8 ? PALLETE.PRIMARY_BLUE_DARK : PALLETE.GRAY
                }
                onClick={() => {
                  if (
                    levels.length < 8 &&
                    levels[levels.length - 1].minLines < bingoSize * 2 + 2
                  )
                    arrayHelpers.insert(
                      index + 1,
                      initLevel(levels[levels.length - 1].minLines)
                      // 연속으로 누르면 해결 오류남***
                    );
                }} // insert an initalValue at a position
              />
            )}
          </LevelItem>
        ))
      }
    />
  );
}

export default CreateLevels;
