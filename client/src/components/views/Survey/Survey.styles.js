import { Form } from "formik";
import styled from "styled-components";
import { WIDTH } from "../../../constants/mediaWidth";
import { PALLETE } from "../../../constants/pallete";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background: ${PALLETE.BACKGROUND_BLUE};
`;

export const SurveyPaper = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.WHITE};
  border-radius: 10px;
  padding: 20px 30px;
  .deleteBtn {
    align-self: flex-end;
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
  p {
    padding: 30px;
    font-size: 0.9em;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StartButton = styled.button`
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 4px;
  background: ${PALLETE.GREEN_LIGHT};
  padding: 20px 50px;
  color: ${PALLETE.WHITE};
  margin: 100px 0 200px 0;
  font-size: 1.5em;
  transition: all 300ms ease-in;
  &:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
    background: ${PALLETE.GREEN};
    border: 1px solid ${PALLETE.PRIMARY_BLUE_DARK};
  }
`;

export const QuestionSlider = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const QuestionCard = styled.div`
  width: 70%;
  max-width: 500px;
  padding: 0px;
  margin: 500px 200px;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 100%;
  }
`;

export const ResultButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${PALLETE.RED};
`;

export const ResultButton = styled.button`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.PRIMARY_BLUE_DARK};
  padding: 20px 50px;
  color: ${PALLETE.WHITE};
  font-size: 1.5em;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
  &.notComplete {
    background: ${PALLETE.GRAY};
  }
`;
