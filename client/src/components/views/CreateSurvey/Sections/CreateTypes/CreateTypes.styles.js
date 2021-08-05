import { Form } from "formik";
import styled, { keyframes } from "styled-components";
import { PALLETE } from "../../../../../constants/pallete";

export const SurveyTypesForm = styled(Form)`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const TypeList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  .addTypeBtn {
    transition-delay: 200ms;
    transition: all 500ms;
    margin: 10px auto;
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
    &.limit {
      &:hover {
      }
    }
  }
`;

export const TypeItem = styled.div`
  width: 35%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px ridge ${PALLETE.BORDER_BLUE};
  border-radius: 3px;
  background: ${PALLETE.BACKGROUND_BLUE};
  padding: 15px;
  margin-top: 20px;
  h5 {
    margin: 0;
    margin-bottom: 10px;
    color: ${PALLETE.PRIMARY_BLUE_DARK};
  }
  textarea {
    margin-top: 5px;
    width: 90%;
    height: 120px;
    border: 1px solid ${PALLETE.BORDER_BLUE};
    border-radius: 5px;
    padding: 6px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const TypeNameBox = styled.div`
  color: ${PALLETE.RED};
  input {
    margin-right: 6px;
    color: ${PALLETE.BLACK};
    font-size: 1.1em;
    padding: 6px;
    font-weight: 600;
    width: 90%;
    border: 2px solid ${PALLETE.BORDER_BLUE};
    border-radius: 5px;
  }
`;

export const FixTypesButton = styled.button`
  border: 1px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.PRIMARY_BLUE};
  color: ${PALLETE.WHITE};
  font-size: 1.4em;
  padding: 10px 20px;
  transition: all 400ms;
  transition-delay: 100ms;
  margin: 50px 50px;
  &:hover {
    background: ${PALLETE.PRIMARY_BLUE_DARK};
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;
