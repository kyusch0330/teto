import { Form } from "formik";
import styled from "styled-components";
import { PALLETE } from "../../../constants/pallete";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background: ${PALLETE.BACKGROUND_BLUE};
`;

export const SurveyPaper = styled.div`
  width: 70%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.WHITE};
  border-radius: 10px;
  padding: 20px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const QuestionSlider = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const QuestionCard = styled.div`
  width: 50%;
  max-width: 500px;
  padding: 20px;
  margin: 400px 200px;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
