import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";
import styled from "styled-components";

export const CreateBingoQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${PALLETE.GREEN_LIGHT};
  padding: 100px 0;
  overflow: scroll;
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
  background: ${PALLETE.GRAY};
  border-right: 1px solid ${PALLETE.PRIMARY_BLUE};
  border-bottom: 1px solid ${PALLETE.PRIMARY_BLUE};
`;

export const BingoItem = styled.div`
  display: flex;
  border: 1px solid ${PALLETE.PRIMARY_BLUE};
  border-bottom: none;
  border-right: none;
  background: ${PALLETE.WHITE};
  transition: background 400ms;
  width: 100px;
  height: 100px;
  padding: 5px;

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
