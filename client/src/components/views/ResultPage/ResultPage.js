import React from "react";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "../../Commons/LikeButton";

function ResultPage({ location }) {
  const history = useHistory();
  if (!location.state) {
    alert("잘못된 경로입니다.");
    history.push("/");
    location = {
      state: { result: null, userObj: null, testId: null, likes: null },
    };
  }
  const {
    state: { result, userObj, testId, likes },
  } = location;
  console.log(likes);
  return (
    <div>
      {result && (
        <>
          Result
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <LikeButton initialLikes={likes} userObj={userObj} testId={testId} />
          <br />
          <Link to="/survey">다른 테스트하러 가기</Link>
        </>
      )}
    </div>
  );
}

export default ResultPage;
