import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "../../Common/LikeButton";
import {
  ResultContainer,
  ResultPageContainer,
  ShareForm,
} from "./ResultPage.styles";
import useSurvey from "../../../hooks/useSurvey";
import { ReactComponent as CopyImg } from "../../../assets/copy.svg";
import { PALLETE } from "../../../constants/pallete";

function ResultPage({ location }) {
  const userObj = useSelector((state) => state.user.userData);
  const history = useHistory();
  const testURL = useRef();
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
          <span>이 테스트 공유하기</span>
          {testId && (
            <ShareForm>
              <input
                ref={testURL}
                value={`http://localhost:3000/survey/${testId}`}
              />
              <CopyImg
                width={24}
                height={24}
                fill={PALLETE.PRIMARY_BLUE_DARK}
                onClick={() => {
                  if (testURL.current) {
                    testURL.current.select();
                    document.execCommand("copy");
                  }
                }}
              >
                공유
              </CopyImg>
            </ShareForm>
          )}
        </ResultContainer>
      )}
    </ResultPageContainer>
  );
}

export default ResultPage;
