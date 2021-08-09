import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

export const LoginContainer = styled.div`
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

export const LoginForm = styled.form`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  padding: 50px 100px;
  background: ${PALLETE.WHITE};
  margin: 30px 0;
  svg {
    margin-bottom: 20px;
  }
  label {
    align-self: flex-start;
  }
  input {
    width: 100%;
    padding: 5px;
    border: 2px solid ${PALLETE.BORDER_BLUE};
    font-size: 0.9em;
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    padding: 50px 30px;
  }
`;

export const LoginButton = styled.button`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.PRIMARY_BLUE};
  color: ${PALLETE.WHITE};
  width: 100%;
  padding: 10px 30px;
  &:hover {
    cursor: pointer;
    background: ${PALLETE.PRIMARY_BLUE_DARK};
  }
`;

export const RegisterLinkButton = styled.button`
  background: ${PALLETE.BLACK};
  width: 180px;
  padding: 10px 30px;
  margin-bottom: 20px;
  box-shadow: ${PALLETE.BLACK_LIGHT} 1px 3px 4px 0px;
  a {
    text-decoration: none;
    color: ${PALLETE.WHITE};
  }
  &:hover {
    cursor: pointer;
  }
`;
