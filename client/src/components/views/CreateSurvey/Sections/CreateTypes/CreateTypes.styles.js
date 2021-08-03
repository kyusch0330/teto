import { Form } from "formik";
import styled from "styled-components";
import { PALLETE } from "../../../../../constants/pallete";

export const SurveyTypesForm = styled(Form)`
  margin-top: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  button {
    margin: 10px;
  }
  .fixTypesBtn {
    margin-top: 50px;
  }
`;

export const TypeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 3px;
  background: ${PALLETE.BACKGROUND_BLUE};
  padding: 20px;
  textarea {
    margin-top: 5px;
    width: 90%;
    height: 80px;
  }
  input,
  textarea {
    border: 1px solid ${PALLETE.BORDER_BLUE};
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
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
  }
`;
