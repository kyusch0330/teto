import styled from "styled-components";
import { PALLETE } from "constants/pallete";

export const ResultPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${PALLETE.BACKGROUND_BLUE};
`;

export const ResultContainer = styled.div`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-bottom: 100px;
  background: ${PALLETE.WHITE};
  p {
    padding: 20px;
    font-size: 0.9em;
  }
  a,
  span {
    text-decoration: none;
    color: ${PALLETE.PRIMARY_BLUE};
    font-weight: 600;
    margin-top: 20px;
  }
`;

export const ShareForm = styled.form`
  display: flex;
  gap: 10px;
  padding: 5px;
  width: 90%;
  max-width: 300px;
  input {
    color: ${PALLETE.GRAY};
    width: 90%;
    border: 1px solid ${PALLETE.BORDER_BLUE};
  }
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
