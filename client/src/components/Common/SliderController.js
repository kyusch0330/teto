import React from "react";
import styled from "styled-components";
import { PALLETE } from "../../constants/pallete";
import { ReactComponent as ArrowImg } from "../../assets/direction.svg";
const SlideController = styled.div`
  position: fixed;
  right: 20%;
  top: 50%;
  display: flex;
  flex-direction: column;
  svg {
    transition-delay: 200ms;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
    }
  }
  svg:nth-child(2) {
    transform: rotate(180deg);
    margin-top: 1px;
    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2) rotate(180deg);
    }
  }
`;
const SliderController = ({ moveToPrev, moveToNext }) => {
  return (
    <SlideController>
      <ArrowImg
        onClick={() => moveToPrev()}
        width={50}
        height={50}
        fill={PALLETE.PRIMARY_BLUE_DARK}
      />
      <ArrowImg
        onClick={() => moveToNext()}
        width={50}
        height={50}
        fill={PALLETE.PRIMARY_BLUE_DARK}
      />
    </SlideController>
  );
};

export default SliderController;
