import { PALLETE } from "constants/pallete";
import styled from "styled-components";

export const CreateBingoQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  &:hover {
    cursor: pointer;
    background: ${PALLETE.GRAY_LIGHT};
  }
`;

export const CreateQuestionModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background: rgba(30, 30, 30, 0.5);
`;
