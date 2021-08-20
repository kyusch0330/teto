import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";
import styled from "styled-components";

export const CreateBingoQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${PALLETE.WHITE};
  padding: 100px 0;
  overflow: scroll;
  border-top: 1px solid ${PALLETE.BORDER_BLUE};
  border-bottom: 1px solid ${PALLETE.BORDER_BLUE};
`;

export const ModalInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  input {
    width: 100%;
    height: 30px;
  }
`;

export const BingoBoard = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    Array(props.bingoSize).fill("1fr").join(" ")};
  background: ${PALLETE.PRIMARY_BLUE};
  border: 2px solid ${PALLETE.PRIMARY_BLUE};
  border-radius: 10px;
  padding: 5px;
`;

export const BingoItem = styled.div`
  display: flex;
  border: 2px solid ${PALLETE.PRIMARY_BLUE};
  border-bottom: none;
  border-right: none;
  border-radius: 7px;
  background: ${PALLETE.WHITE};
  transition: background 400ms;
  width: 100px;
  height: 100px;
  padding: 5px;

  &.currentQuestion {
    border: 4px solid ${PALLETE.RED};
  }

  &:hover {
    cursor: pointer;
    background: ${PALLETE.GRAY_LIGHT};
  }

  @media (max-width: ${WIDTH.TABLET}px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 45px;
    height: 45px;
    font-size: 0.4em;
    padding: 2px;
  }
`;

export const BingoTextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.9em;
  word-break: break-all;
  overflow: hidden;

  width: 90%;
  height: 90%;
`;
