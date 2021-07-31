import { ReactComponent as LikeImg } from "../../assets/like.svg";
import React from "react";
import styled from "styled-components";

const LikeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const LikeInfo = ({ likes }) => {
  return (
    <LikeInfoContainer>
      <LikeImg width={15} height={15} />
      <span>&nbsp;{likes}</span>
    </LikeInfoContainer>
  );
};

export default LikeInfo;
