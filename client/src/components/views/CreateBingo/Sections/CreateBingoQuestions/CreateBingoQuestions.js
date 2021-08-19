import Modal from "components/Common/Modal";
import { Field } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  CreateBingoQuestionsContainer,
  BingoBoard,
  BingoItem,
  ModalInnerContainer,
  BingoTextBox,
} from "./CreateBIngoQuestions.styles";

function CreateBingoQuestions({ questions, bingoSize }) {
  const [currentQuestion, setCurrentQuestion] = useState({ num: -1 });
  useEffect(() => {
    if (currentQuestion.num > -1) setDisplayQuestionModal(true);
  }, [currentQuestion]);
  const [displayQuestionModal, setDisplayQuestionModal] = useState(false);
  return (
    <CreateBingoQuestionsContainer>
      {displayQuestionModal && (
        <Modal close={() => setDisplayQuestionModal(false)}>
          <ModalInnerContainer>
            <h3>빙고 질문{currentQuestion.num} 작성</h3>
            <Field
              autoFocus
              type="text"
              name={`questions[${currentQuestion.num}].text`}
            />
          </ModalInnerContainer>
        </Modal>
      )}
      <BingoBoard bingoSize={bingoSize}>
        {Array(bingoSize * bingoSize)
          .fill(0)
          .map((q, index) => {
            return (
              <BingoItem
                className={
                  index === currentQuestion.num ? "currentQuestion" : "aaa"
                }
                key={index}
                onClick={() => setCurrentQuestion({ num: index })}
              >
                <BingoTextBox>{questions[index].text}</BingoTextBox>
              </BingoItem>
            );
          })}
      </BingoBoard>
    </CreateBingoQuestionsContainer>
  );
}

export default CreateBingoQuestions;
