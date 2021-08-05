import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "../../Common/LikeButton";
import { ResultContainer, ResultPageContainer } from "./ResultPage.styles";

function ResultPage({ location }) {
  const userObj = useSelector((state) => state.user.userData);
  const history = useHistory();
  if (!location.state) {
    alert("잘못된 경로입니다.");
    history.push("/");
    location = {
      state: { result: null, testId: null, likes: null },
    };
  }
  const {
    state: { result, testId, likes },
  } = location;
  return (
    <ResultPageContainer>
      {result && (
        <ResultContainer>
          <h1>Result</h1>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <LikeButton initialLikes={likes} userObj={userObj} testId={testId} />
          <br />
          <Link to="/survey">다른 테스트하러 가기</Link>
        </ResultContainer>
      )}
    </ResultPageContainer>
  );
}

export default ResultPage;
