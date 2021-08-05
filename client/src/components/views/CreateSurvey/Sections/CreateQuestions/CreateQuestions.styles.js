import { Form } from "formik";
import styled from "styled-components";
import { PALLETE } from "../../../../../constants/pallete";

export const SurveyQuestionsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
  width: 100%;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  background: ${PALLETE.WHITE};
  width: 100%;
  min-height: 700px;
  max-height: 700px;
  padding: 20px;
  gap: 30px;
  overflow: hidden;
`;

export const QuestionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border: 3px ridge ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  background: ${PALLETE.CONTAINER_BLUE};
  box-sizing: border-box;
  padding: 30px 50px;
  width: 95%;
  min-height: 500px;
  max-height: 500px;
  overflow-y: scroll;
  box-sizing: border-box;
  h5 {
    margin-top: 0;
  }
  &:nth-child(1) {
    margin-top: 80px;
  }
`;

export const CloseQuestionButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const QuestionMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const QuestionTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3em;
  label {
    color: ${PALLETE.BLACK};
    width: 100%;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${PALLETE.RED};
    input {
      width: 100%;
      color: ${PALLETE.BLACK};
      font-size: 1.1em;
      border: 2px solid ${PALLETE.BORDER_BLUE};
      background: ${PALLETE.WHITE};
      border-radius: 5px;
      margin-right: 5px;
    }
  }
`;

export const QuestionDescriptionBox = styled.div`
  margin-top: 15px;
  width: 100%;
  label {
    color: ${PALLETE.BLACK};
  }
  textarea {
    width: 100%;
    color: ${PALLETE.BLACK};
    border: 1px solid ${PALLETE.BORDER_BLUE};
    border-radius: 5px;
  }
`;

export const OptionList = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AddQuestionButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 30px 0;
  transition: all 500ms;
  transition-delay: 50ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  border: 3px groove ${PALLETE.WHITE};
  background: ${PALLETE.PRIMARY_BLUE};
  padding: 20px 70px;
  font-weight: 700;
  font-size: 1.2em;
  color: ${PALLETE.WHITE};
  &:hover {
    cursor: pointer;
  }
`;
