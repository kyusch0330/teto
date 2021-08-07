import { Form } from "formik";
import styled from "styled-components";
import { WIDTH } from "../../../../../constants/mediaWidth";
import { PALLETE } from "../../../../../constants/pallete";

export const CreateBingoContainer = styled.div`
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

export const LevelItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const LevelNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
