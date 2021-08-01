import React from "react";
import { useRef, useState } from "react";

const useSlider = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const nextQuestion = useRef();
  const prevQuestion = useRef();
  const moveToNext = () => {
    if (!nextQuestion.current) return;
    nextQuestion.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setCurrentQuestion(currentQuestion + 1);
  };
  const moveToPrev = () => {
    if (!prevQuestion.current) return;
    prevQuestion.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    if (currentQuestion !== 0) setCurrentQuestion(currentQuestion - 1);
  };
  return {
    currentQuestion,
    prevQuestion,
    nextQuestion,
    moveToPrev,
    moveToNext,
  };
};

export default useSlider;
