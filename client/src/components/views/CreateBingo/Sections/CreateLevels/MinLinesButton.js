import { PALLETE } from "constants/pallete";
import React from "react";
import styled from "styled-components";

const MinLinesBtn = styled.button`
  border: none;
  background: ${PALLETE.PRIMARY_BLUE_DARK};
  color: ${PALLETE.WHITE};
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background: ${PALLETE.PRIMARY_BLUE};
  }
`;

function MinLinesButton({ plus, index, levels, maxLines, replace }) {
  const handleChangeMinLines = () => {
    const newNum = levels[index].minLines + (plus ? 1 : -1);
    if (
      (plus &&
        (newNum > maxLines ||
          (index + 1 < levels.length &&
            newNum >= levels[index + 1].minLines))) ||
      (!plus && newNum <= levels[index - 1].minLines)
    )
      return;
    replace(index, {
      ...levels[index],
      minLines: newNum,
    });
  };
  return (
    <MinLinesBtn type="button" onClick={handleChangeMinLines}>
      {plus ? "+" : "-"}
    </MinLinesBtn>
  );
}

export default MinLinesButton;
