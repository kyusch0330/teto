import { useState } from "react";

const useCreateSurveyQuestions = () => {
  /* questions */
  const [questions, setQuestions] = useState([
    { id: Date.now(), text: "", description: "", options: {} },
  ]);

  //각 CreateQuestion에 전달
  const handleSaveQuestion = (index) => (newQuestion) => {
    setQuestions(
      questions
        .slice(0, index)
        .concat({
          id: questions[index].id,
          ...newQuestion,
        })
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleDeleteQuestion = (index) => () => {
    setQuestions(
      questions
        .slice(0, index)
        .concat(questions.slice(index + 1, questions.length))
    );
  };

  const handleAddQuestionClick = (e) => {
    setQuestions(
      questions.concat({
        id: Date.now(),
        text: "",
        description: "",
        options: {},
      })
    );
  };

  return {
    questions,
    questionMethods: {
      handleSaveQuestion,
      handleDeleteQuestion,
      handleAddQuestionClick,
    },
  };
};

export default useCreateSurveyQuestions;
