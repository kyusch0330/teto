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
  top: 20px;
  text-decoration: none;
  color: ${PALLETE.WHITE};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.8em;
  padding: 20px;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 2px;
  background: ${PALLETE.BLACK_LIGHT};
  transition: all 300ms ease-in-out;
  transition-delay: 100ms;
  &:hover {
    background: ${PALLETE.BLACK};
    transform: scale(1.05, 1.05);
  }
`;

export const TestBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 700px;
  min-height: 800px;
  box-sizing: border-box;
  background: ${PALLETE.WHITE};
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  padding: 30px;
  margin: 30px 0;
`;

export const OrderByButtonContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-content: flex-start;
  margin-bottom: 20px;

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
`;

export const TestList = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const TestLinkItem = styled(Link)`
  list-style: none;
  border: 1px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  margin: 5px;
  font-size: 0.9em;
  background:${PALLETE.WHITE};

  height: 200px;

  display: block;
  text-decoration: none;
  color: ${PALLETE.BLACK};
  padding: 20px;

  position: relative;

  transition:background 0.5s;
  transition-delay : 0.1s;
  & div.survey_title {
    font-weight: 700;
    font-size: 1.1em;
    margin: 5px 0;
  }
  & div.survey_createdAt {
    font-weight: 500;
    color: ${PALLETE.GRAY};
    margin-bottom:5px;
  }
  & p.survey_description {
    font-weight: 400;
    color: ${PALLETE.BLACK_LIGHT}
    font-size: 0.8em;
  }
  &:hover{
    background:${PALLETE.GRAY_LIGHT};
  }
  & .likeInfo {
    position: absolute;
    bottom:10px;
    left:10px;
  }
`;

export const LoadMoreButton = styled.button`
  background: ${PALLETE.PRIMARY_BLUE};
  border: 2px solid ${PALLETE.BACKGROUND_BLUE};
  border-radius: 4px;
  padding: 10px;
  color: ${PALLETE.WHITE};
  &:hover {
    cursor: pointer;
  }
`;
