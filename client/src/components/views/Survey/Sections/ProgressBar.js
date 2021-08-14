import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";
import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const ProgressLine = styled.div`
  max-width: 90%;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  justify-items: baseline;
  align-items: center;
  gap: 10px 0;
  position: relative;
  @media (max-width: ${WIDTH.MOBILE}px) {
    max-width: 100%;
  }
`;
//justify-content: ${(props) => (props.total <= 8 ? "center" : "flex-start")};

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
  width: 20px;
  max-width: 20px;
  height: 3px;
  background: ${(props) =>
    props.passed ? PALLETE.BORDER_BLUE : PALLETE.GRAY_LIGHT};
  flex-grow: 5;
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 10px;
    max-width: 10px;
  }
`;

const PercentBox = styled.div`
  width: 10%;
`;

const ProgressBar = ({ current, total, progress, checks }) => {
  // const currentNum = current + 1;
  const percent = Math.floor((progress / total) * 100);
  if (current >= -1)
    // current >= 0
    return (
      <ProgressBarContainer>
        <ProgressLine total={total}>
          {new Array(total).fill(0).map((qNode, index) => {
            return (
              <>
                <QNode
                  checked={checks[index]}
                  current={index === current}
                  error={index < progress && !checks[index] ? true : false}
                ></QNode>
                {index < total - 1 && (
                  <MiddleLine
                    passed={index < progress}
                    lineWidth={300 / total}
                  />
                )}
                {(index + 1) % 8 === 0 && <br />}
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
