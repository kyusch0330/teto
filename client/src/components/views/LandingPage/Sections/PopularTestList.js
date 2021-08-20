import LikeInfo from "components/Common/LikeInfo";
import React from "react";
import {
  MoreLink,
  PopularTestListContainer,
  TestLinkItem,
} from "./PopularTestList.styles";

function PopularTestList({ testArray, testType }) {
  const testName = {
    survey: "테스트",
    bingo: "빙고",
  };
  console.log(testArray);
  return (
    <PopularTestListContainer>
      <h3>인기 {testName[testType]}</h3>
      <MoreLink to={`/${testType}`}>더보기</MoreLink>
      {testArray.length > 0 &&
        testArray.map((test) => (
          <TestLinkItem key={test._id} to={`/survey/${test._id}`}>
            <div className="test_title">{test.title}</div>
            <LikeInfo likes={test.likes} />
          </TestLinkItem>
        ))}
    </PopularTestListContainer>
  );
}

export default PopularTestList;
