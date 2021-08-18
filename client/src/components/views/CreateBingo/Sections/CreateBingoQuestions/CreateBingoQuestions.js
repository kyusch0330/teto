import React, { useState } from "react";
import { CreateBingoContainer } from "../../CreateBingo.styles";
import {
  BingoBoard,
  BingoItem,
  CreateQuestionModal,
} from "./CreateBIngoQuestions.styles";

function CreateBingoQuestions({ bingoSize }) {
  const [displayQuestionModal, setDisplayQuestionModal] = useState(false);
  console.log(displayQuestionModal);
  return (
    <CreateBingoContainer>
      {displayQuestionModal && (
        <CreateQuestionModal onClick={() => setDisplayQuestionModal(false)}>
          QUESTION MODAL
        </CreateQuestionModal>
      )}
      <BingoBoard bingoSize={bingoSize}>
        {Array(bingoSize * bingoSize)
          .fill(0)
          .map((q, index) => {
            return (
              <BingoItem onClick={() => setDisplayQuestionModal(true)}>
                Q {index}
              </BingoItem>
            );
          })}
      </BingoBoard>
    </CreateBingoContainer>
  );
}

export default CreateBingoQuestions;
