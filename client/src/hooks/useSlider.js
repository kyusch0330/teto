import { useRef, useState } from "react";

const useSlider = (initialQuestion = 0) => {
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const nextQuestion = useRef();
  const prevQuestion = useRef();
  const moveToNext = () => {
    if (!nextQuestion.current) return;
    nextQuestion.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    console.log("toNext", currentQuestion, nextQuestion);
    setCurrentQuestion(currentQuestion + 1);
  };
  const moveToPrev = () => {
    if (!prevQuestion.current) return;
    prevQuestion.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    console.log("toPrev", currentQuestion, prevQuestion);
    if (currentQuestion !== 0) setCurrentQuestion(currentQuestion - 1);
  };
  return {
    currentQuestion,
    setCurrentQuestion,
    prevQuestion,
    nextQuestion,
    moveToPrev,
    moveToNext,
  };
};

export default useSlider;
