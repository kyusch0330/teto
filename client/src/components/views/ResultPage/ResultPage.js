import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "../../Common/LikeButton";
import { ResultContainer, ResultPageContainer } from "./ResultPage.styles";
import useSurvey from "../../../hooks/useSurvey";

function ResultPage({ location }) {
  const userObj = useSelector((state) => state.user.userData);
  const history = useHistory();
  if (!location.state) {
    alert("잘못된 경로입니다.");
    history.push("/");
    location = {
      state: { result: null, testId: null },
    };
  }
  const {
    state: { result, testId },
  } = location;
  console.log(userObj, testId, result);
  const survey = useSurvey(testId);
  return (
    <ResultPageContainer>
      {result && survey && userObj && (
        <ResultContainer>
          <h1>Result</h1>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <LikeButton
            initialLikes={survey.likes}
            userObj={userObj}
            testId={testId}
          />
          <br />
          <Link to="/survey">다른 테스트하러 가기</Link>
          <a>이 테스트 공유하기</a>
        </ResultContainer>
      )}
    </ResultPageContainer>
  );
}

export default ResultPage;
