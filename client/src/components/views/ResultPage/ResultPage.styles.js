import styled from "styled-components";
import { PALLETE } from "../../../constants/pallete";

export const ResultPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background: ${PALLETE.BACKGROUND_BLUE};
`;

export const ResultContainer = styled.div`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 10px;
  width: 70%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-bottom: 100px;
  background: ${PALLETE.WHITE};
  a {
    text-decoration: none;
    color: ${PALLETE.PRIMARY_BLUE};
    font-weight: 600;
  }
`;
