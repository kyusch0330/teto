import styled from "styled-components";
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
  }
  span.optionNum {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.3em;
    font-weight: 500;
    color: ${PALLETE.PRIMARY_BLUE_DARK};
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
    border: 1px solid ${PALLETE.BORDER_BLUE};
    min-width: 50px;
  }
  input {
    width: 35px;
    text-align: center;
    padding-left: 8px;
    border: 1px solid ${PALLETE.BORDER_BLUE};
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
