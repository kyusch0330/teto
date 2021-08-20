import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PopularTestListContainer = styled.div`
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  algin-items: center;
  width: 100%;
  background: ${PALLETE.WHITE};
  border: 1px solid ${PALLETE.GRAY_LIGHT};
  padding: 20px;
`;

export const MoreLink = styled(Link)`
  align-self: flex-end;
  color: ${PALLETE.GRAY};
  font-size: 0.8em;
  margin-bottom: 10px;
`;

export const TestLinkItem = styled(Link)`
  list-style: none;
  border: 1px solid ${PALLETE.GRAY_LIGHT};
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 0.8em;
  font-weight: 600;

  display: block;
  text-decoration: none;
  color: ${PALLETE.BLACK};
  padding: 10px;
  div.test_title {
    font-weight: 500;
    color: ${PALLETE.BLACK};
    height: 3em;
  }
`;
