import styled from "styled-components";
import { PALLETE } from "../../../constants/pallete";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: ${PALLETE.BACKGROUND_BLUE};
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
`;
export const RegisterForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  padding: 50px;
  background: ${PALLETE.WHITE};
  margin: 30px 0;
  input {
    border: 2px solid ${PALLETE.BORDER_BLUE};
    font-size: 1em;
  }
`;

export const RegisterButton = styled.button`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.PRIMARY_BLUE_DARK};
  color: ${PALLETE.WHITE};
  width: 100%;
  padding: 10px 30px;
  &:hover {
    cursor: pointer;
  }
`;
