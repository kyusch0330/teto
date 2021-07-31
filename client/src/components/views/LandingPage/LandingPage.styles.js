import { Link } from "react-router-dom";
import styled from "styled-components";
import { PALLETE } from "../../../constants/pallete";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  background: ${PALLETE.BACKGROUND_BLUE};
  color: ${PALLETE.BLACK};
`;

export const PopularSurveyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  algin-items: center;
  width: 50%;
  max-width: 400px;
  background: ${PALLETE.WHITE};
  border: 1px solid ${PALLETE.GRAY_LIGHT};
  padding: 30px;
  border-radius: 15px;
  margin-top: 10px;
`;

export const TestLinkItem = styled(Link)`
  list-style: none;
  border: 1px solid ${PALLETE.GRAY_LIGHT};
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 0.8em;
  font-weight: 600;

  display: block;
  text-decoration: none;
  color: ${PALLETE.BLACK};
  padding: 10px;
  & span.survey_createdAt {
    font-weight: 500;
    color: ${PALLETE.GRAY};
  }
`;
