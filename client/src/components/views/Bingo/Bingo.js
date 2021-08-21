import DeleteTestButton from "components/Common/DeleteTestButton";
import EditTestButton from "components/Common/EditTestButton";
import LikeButton from "components/Common/LikeButton";
import { Formik } from "formik";
import useBingo from "hooks/useBingo";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import getTime from "utils/getTime";
import { getResult } from "../Bingo/getResult";
import {
  BingoContainer,
  BingoPaper,
  BingoBoard,
  BingoQuestion,
  AuthorMenu,
  ResultButton,
} from "./Bingo.styles";

function Bingo({ match, userObj }) {
  const { params } = match;
  const history = useHistory();
  // 해당 survey 가져오기
  const { bingo, checks, handleChangeChecks } = useBingo(params.id);
  const handleSubmit = () => {
    const result = getResult(bingo.levels, checks, bingo.bingoSize);
    history.push("/bingo-result", {
      result,
      testId: params.id,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BingoContainer>
      {!bingo || !checks ? null : (
        <BingoPaper>
          <AuthorMenu>
            <EditTestButton
              testData={bingo}
              creatorId={bingo.userId}
              userObj={userObj}
              testType={"bingo"}
            />
            <DeleteTestButton
              testId={bingo._id}
              creatorId={bingo.userId}
              userObj={userObj}
              testType={"bingo"}
            />
          </AuthorMenu>
          <LikeButton
            initialLikes={bingo.likes}
            userObj={userObj}
            testId={params.id}
            testType={"bingo"}
          />
          <h3>{bingo.title}</h3>
          <span className="authorName">{bingo.userName}</span>
          <span className="createdAt">{getTime(bingo.createdAt)}</span>
          <p>{bingo.description}</p>
          <br />

          <BingoBoard bingoSize={bingo.bingoSize}>
            {bingo.questions.map((question, index) => (
              <BingoQuestion
                onClick={() => handleChangeChecks(index)}
                checked={checks[index]}
              >
                {question.text}
              </BingoQuestion>
            ))}
          </BingoBoard>
          <ResultButton type="button" onClick={handleSubmit}>
            Result
          </ResultButton>
        </BingoPaper>
      )}
    </BingoContainer>
  );
}

export default Bingo;
