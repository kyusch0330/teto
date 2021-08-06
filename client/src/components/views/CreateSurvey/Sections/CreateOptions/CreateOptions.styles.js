import styled from "styled-components";
import { WIDTH } from "../../../../../constants/mediaWidth";
import { PALLETE } from "../../../../../constants/pallete";

export const OptionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 15px;
  background: ${PALLETE.WHITE};
  width: 100%;
  position: relative;
  padding: 10px 3px;
  color: ${PALLETE.BLACK_LIGHT};
  svg.closeBtn {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 16px;

    @media (max-width: ${WIDTH.MOBILE}px) {
      right: 10px;
    }
  }
  span.optionNum {
    position: absolute;
    top: -10px;
    left: -15px;
    font-size: 1.3em;
    font-weight: 500;
    color: ${PALLETE.PRIMARY_BLUE_DARK};
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    padding: 20px 10px;
  }
`;

export const OptionTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  input {
    width: 90%;
    border: 2px solid ${PALLETE.BORDER_BLUE};
    padding: 5px;
    margin-right: 5px;
  }
  div {
    color: ${PALLETE.RED};
    font-size: 0.8em;
  }
`;
export const OptionWeightBox = styled.div`
  width: 90%;
  display: flex;
  font-size: 0.9em;
  select {
    border: 2px solid ${PALLETE.BORDER_BLUE};
    min-width: 50px;
  }
  input {
    width: 35px;
    text-align: center;
    padding-left: 8px;
    border: 2px solid ${PALLETE.BORDER_BLUE};
  }
  span {
    margin: 10px;
    @media (max-width: ${WIDTH.MOBILE}px) {
      margin: 5px 0;
    }
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    flex-direction: column;
  }
`;
export const AddOptionButton = styled.button`
  border: none;
  position: absolute;
  background: transparent;
  bottom: -20px;
  right: -30px;
  cursor: pointer;
  svg {
    background: ${PALLETE.WHITE};
    border-radius: 4px;
  }
`;
