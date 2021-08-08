import { Form } from "formik";
import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
  background: ${PALLETE.BACKGROUND_BLUE};
  color: ${PALLETE.BLACK};
`;

export const CreateSurveyPaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 600px;
  background: ${PALLETE.WHITE};
  padding: 30px;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: ${WIDTH.MOBILE}px) {
    padding: 15px;
  }
`;

export const SurveyCoverForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px 20px 10px;
  border: 2px solid ${PALLETE.PRIMARY_BLUE_DARK};
  border-radius: 5px;
  background: ${PALLETE.CONTAINER_BLUE};
  input {
    width: 90%;
    font-weight: 600;
    font-size: 1.2em;
    border: 2px solid ${PALLETE.PRIMARY_BLUE_DARK};
    border-radius: 5px;
    padding: 10px;
  }
  textarea {
    width: 90%;
    height: 200px;
    padding: 15px 10px;
    border: 1px solid ${PALLETE.PRIMARY_BLUE_DARK};
    border-radius: 5px;
  }
`;

export const ErorrSpan = styled.span`
  color: ${PALLETE.RED};
`;
