import { PALLETE } from "constants/pallete";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProgressLine = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const QNode = styled.div`
  padding: 5px;
  border-radius: 50%;
  border: 3px solid
    ${(props) =>
      props.checked
        ? PALLETE.PRIMARY_BLUE_DARK
        : props.error
        ? PALLETE.RED
        : PALLETE.GRAY};
  background: ${(props) =>
    props.current
      ? PALLETE.GREEN
      : props.checked
      ? PALLETE.PRIMARY_BLUE
      : PALLETE.GRAY_LIGHT};
  z-index: 1;
`;

const MiddleLine = styled.div`
  height: 3px;
  background: ${(props) =>
    props.passed ? PALLETE.BORDER_BLUE : PALLETE.GRAY_LIGHT};
  flex-grow: 5;
`;

const PercentBox = styled.div`
  width: 10%;
`;

const ProgressBar = ({ current, total, progress, checks }) => {
  const currentNum = current + 1;
  // const [progress, setProgress] = useState(0);/
  // useEffect(() => {
  //   if (currentNum > progress) setProgress(currentNum);
  // }, [current]);
  const percent = Math.floor((progress / total) * 100);
  if (current >= -1)
    // current >= 0
    return (
      <ProgressBarContainer>
        <ProgressLine>
          {new Array(total).fill(0).map((qNode, index) => {
            return (
              <>
                <QNode
                  checked={checks[index]}
                  current={index === current}
                  error={index < progress && !checks[index] ? true : false}
                ></QNode>
                {index < total - 1 && <MiddleLine passed={index < progress} />}
              </>
            );
          })}
        </ProgressLine>
        {/* <PercentBox>{percent}</PercentBox> */}
      </ProgressBarContainer>
    );
  else return null;
};

export default ProgressBar;
