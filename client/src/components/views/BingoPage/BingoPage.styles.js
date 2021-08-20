import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

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
  padding: 5px;
  font-size: 1rem;
`;

export const CreateButton = styled(Link)`
  top: 20px;
  text-decoration: none;
  color: ${PALLETE.WHITE};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5em;
  padding: 12px;
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
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 100%;
    padding: 10px;
  }
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
    background: ${PALLETE.PRIMARY_BLUE_DARK};
  }
`;

export const TestList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  margin-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: ${WIDTH.MOBILE}px) {
    display: flex;
    flex-direction: column;
  }
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
  padding: 15px;

  position: relative;

  transition:background 0.5s;
  transition-delay : 0.1s;
  & div.bingo_title {
    font-weight: 700;
    font-size: 1.1em;
    margin: 5px 0;
  }
  & div.bingo_userName {
    width:100%;
    text-align: end;
    font-weight:500;
    color:${PALLETE.BLACK_LIGHT};
  }
  & div.bingo_createdAt {
    font-weight: 500;
    color: ${PALLETE.GRAY};
    margin-bottom:5px;
  }
  & p.bingo_description {
    font-weight: 400;
    color: ${PALLETE.BLACK_LIGHT}
    font-size: 0.9em;
  }
  &:hover{
    background:${PALLETE.GRAY_LIGHT};
  }
  & .likeInfo {
    position: absolute;
    bottom:10px;
    left:10px;
  }
  p{
    font-size:0.9em;
    @media (max-width: ${WIDTH.TABLET}px) {
      font-size:0.8em;
    }
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    height: 190px;
  }
`;

export const BingoSizeInfo = styled.div`
  background: ${(props) =>
    ["orange", "green", "blue", "brown"][props.bingoSize - 4]};
  color: ${PALLETE.WHITE};
  padding: 3px 6px;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 3px;
  width: 40px;
  text-align: center;
  margin-bottom: 8px;
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
