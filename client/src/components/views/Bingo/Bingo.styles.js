import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";
import { Form } from "formik";
import styled from "styled-components";

export const BingoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 0;
`;
export const BingoPaper = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const AuthorMenu = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 10px;
  .editLink {
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
  .deleteBtn {
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
`;
export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const BingoBoard = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    Array(props.bingoSize).fill(`calc(40vw/${props.bingoSize})`).join(" ")};
  grid-template-rows: ${(props) =>
    Array(props.bingoSize).fill(`calc(40vw/${props.bingoSize})`).join(" ")};
  background: ${PALLETE.PRIMARY_BLUE};
  border: 2px solid ${PALLETE.PRIMARY_BLUE};
  border-radius: 10px;
  padding: 5px;
  font-size: 0.9em;
  @media (max-width: ${WIDTH.TABLET}px) {
    grid-template-columns: ${(props) =>
      Array(props.bingoSize).fill(`calc(90vw/${props.bingoSize})`).join(" ")};
    grid-template-rows: ${(props) =>
      Array(props.bingoSize).fill(`calc(90vw/${props.bingoSize})`).join(" ")};
  }
`;

export const BingoQuestion = styled.div`
  display: flex;
  border: 2px solid ${PALLETE.PRIMARY_BLUE};
  border-bottom: none;
  border-right: none;
  border-radius: 7px;
  background: ${(props) =>
    props.checked ? PALLETE.GREEN_LIGHT : PALLETE.WHITE};
  transition: background 400ms;
  padding: 5px;
  overflow: scroll;

  &:hover {
    cursor: pointer;
    background: ${PALLETE.GRAY_LIGHT};
  }

  @media (max-width: ${WIDTH.TABLET}px) {
    &:hover {
      background: ${PALLETE.GREEN_LIGHT};
    }
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    font-size: 0.4em;
    padding: 2px;
  }
`;

export const ResultButton = styled.button`
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  background: ${PALLETE.PRIMARY_BLUE_DARK};
  color: ${PALLETE.WHITE};
  padding: 20px 30px;
  transition: background 300ms;
  &:hover {
    cursor: pointer;
    background: ${PALLETE.PRIMARY_BLUE};
  }
`;
