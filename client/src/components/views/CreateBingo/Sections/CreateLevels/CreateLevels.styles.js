import { Form } from "formik";
import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

export const LevelList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const LevelItem = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  border: 1px solid ${PALLETE.PRIMARY_BLUE};
  border-radius: 10px;
  background: ${PALLETE.WHITE};
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
  }
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const LevelNameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 100%;
  }
`;
export const LevelMinLinesBox = styled.div`
  display: flex;
  gap: 5px;
  input {
    width: 50px;
  }
`;
