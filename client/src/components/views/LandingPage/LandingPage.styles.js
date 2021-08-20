import { Link } from "react-router-dom";
import styled from "styled-components";
import { PALLETE } from "constants/pallete";
import { WIDTH } from "constants/mediaWidth";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
  background: ${PALLETE.BACKGROUND_BLUE};
  color: ${PALLETE.BLACK};
  @media (max-width: ${WIDTH.TABLET}px) {
    flex-direction: column-reverse;
  }
`;

export const PopularTestContainer = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: ${PALLETE.WHITE};
  @media (max-width: ${WIDTH.TABLET}px) {
    background: ${PALLETE.BACKGROUND_BLUE};
    padding: 0 10px;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const MainContainer = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 20px;
`;
