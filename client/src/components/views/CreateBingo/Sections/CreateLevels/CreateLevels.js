import { ErrorMessage, Field, FieldArray } from "formik";
import React, { useEffect } from "react";
import { ReactComponent as PlusImg } from "assets/plus.svg";
import { ReactComponent as CloseImg } from "assets/close.svg";
import { PALLETE } from "constants/pallete";
import {
  CloseButton,
  LevelItem,
  LevelList,
  LevelMinLinesBox,
  LevelNameBox,
} from "./CreateLevels.styles";
import { initLevel } from "utils/initObjs";
import { getBingoMaxLines } from "utils/getBingoMaxLines";
import MinLinesButton from "./MinLinesButton";

function CreateLevels({ levels, bingoSize }) {
  return (
    <FieldArray
      name={`levels`}
      render={(arrayHelpers) => (
        <LevelList>
          {levels.map((level, index) => (
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
                <Field
                  name={`levels[${index}].name`}
                  placeholder="Level Name"
                />
                <ErrorMessage name={`levels[${index}].name`} />
              </LevelNameBox>
              <Field as="textarea" name={`levels[${index}].description`} />
              <ErrorMessage name={`levels[${index}].description`} />
              <LevelMinLinesBox>
                {index > 0 && (
                  <MinLinesButton
                    plus={false}
                    index={index}
                    levels={levels}
                    maxLines={getBingoMaxLines(bingoSize)}
                    replace={arrayHelpers.replace}
                  />
                )}
                <Field
                  type="text"
                  readOnly={true}
                  name={`levels[${index}].minLines`}
                />
                {index > 0 && (
                  <MinLinesButton
                    plus={true}
                    index={index}
                    levels={levels}
                    maxLines={getBingoMaxLines(bingoSize)}
                    replace={arrayHelpers.replace}
                  />
                )}
                <span> 빙고 이상</span>
              </LevelMinLinesBox>
              <ErrorMessage name={`levels[${index}].minLines`} />
            </LevelItem>
          ))}
          {levels[levels.length - 1].minLines < getBingoMaxLines(bingoSize) && (
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
                  levels[levels.length - 1].minLines <
                    getBingoMaxLines(bingoSize)
                )
                  arrayHelpers.insert(
                    levels.length,
                    initLevel(levels[levels.length - 1].minLines)
                  );
              }}
            />
          )}
        </LevelList>
      )}
    />
  );
}

export default CreateLevels;
