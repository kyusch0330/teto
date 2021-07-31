import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { PALLETE } from "../../../constants/pallete";

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
  padding: 15px;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const CreateButton = styled(Link)`
  display: inline;
  text-align: center;
  text-decoration: none;
  color: ${PALLETE.WHITE};
  border: 1px solid ${PALLETE.WHITE};
  border-radius: 2px;
  background: ${PALLETE.BLACK};
  padding: 30px;
  width: 30%;
  max-width: 300px;
  &:hover {
    color: ${PALLETE.GRAY_LIGHT};
    background: ${PALLETE.BLACK_LIGHT};
  }
`;

export const OrderByButtonContainer = styled.div`
  display: flex;
  align-content: flex-start;
  button {
    border: 2px solid ${PALLETE.BLACK};
    border-radius: 3px;
    background: ${PALLETE.BLACK_LIGHT};
    color: ${PALLETE.WHITE};
    padding: 5px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  button.selected {
    background: green;
  }
  margin-bottom: 30px;
`;

export const TestList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${PALLETE.WHITE};
  width: 50%;
  max-width: 800px;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  padding: 30px;
  margin: 30px;
  ${(props) =>
    props.active &&
    `
   animation: ${fadeIn} 2s 1s infinite linear alternate;
  `};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }`;

export const TestLinkItem = styled(Link)`
  list-style: none;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 0.9em;
  font-weight: 700;
  background:${PALLETE.WHITE};

  display: block;
  text-decoration: none;
  color: ${PALLETE.BLACK};
  padding: 30px;

  transition:background 0.5s;
  transition-delay : 0.1s;
  & span.survey_createdAt {
    font-weight: 500;
    color: ${PALLETE.GRAY};
  }
  & p.survey_description {
    font-weight: 400;
    color: ${PALLETE.BLACK_LIGHT}
    font-size: 0.8em;
  }
  &:hover{
    background:${PALLETE.GRAY_LIGHT};
  }
`;
