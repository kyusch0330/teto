import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "../../Common/LikeButton";

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
