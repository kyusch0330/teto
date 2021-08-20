import React from "react";
import { ReactComponent as WriteImg } from "assets/write.svg";
import { ReactComponent as BingoImg } from "assets/bingo.svg";
import { PALLETE } from "constants/pallete";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";

export const IntroductionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  border-bottom: 1px solid ${PALLETE.GRAY_LIGHT};
  p {
    font-size: 1.2em;
    font-weight: bold;
  }
  @media (max-width: ${WIDTH.TABLET}px) {
    align-items: center;
    p {
      font-size: 1em;
    }
  }
`;

export const CreatButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (max-width: ${WIDTH.MOBILE}px) {
    flex-direction: column;
  }
`;

export const CreateButton = styled(Link)`
  text-decoration: none;
  color: ${PALLETE.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 200px;
  font-size: 1.5em;
  padding: 12px;
  border-radius: 2px;
  background: ${PALLETE.BLACK};
  transition: all 300ms ease-in-out;
  transition-delay: 100ms;
  &:hover {
    background: ${PALLETE.PRIMARY_BLUE};
    transform: scale(1.05, 1.05);
  }
  margin-bottom: 10px;
`;

function Introduction() {
  return (
    <IntroductionContainer>
      <p>나만의 테스트를 만들어 보세요</p>
      <CreatButtonContainer>
        <CreateButton to="/survey/create">
          <WriteImg width={24} height={24} fill={PALLETE.WHITE} />
          <span>Create Test</span>
        </CreateButton>
        <CreateButton to="/bingo/create">
          <BingoImg width={24} height={24} fill={PALLETE.WHITE} />
          <span>Create Bingo</span>
        </CreateButton>
      </CreatButtonContainer>
    </IntroductionContainer>
  );
}

export default Introduction;
