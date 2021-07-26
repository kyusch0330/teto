import { useState } from "react";
import useArrayState from "./useArrayState";

const useCreateSurveyQuestions = () => {
  /* questions */

  const [questions, questionMethods] = useArrayState(() => ({
    id: Date.now(),
    text: "",
    description: "",
    options: {},
  }));

  return {
    questions,
    questionMethods,
  };
};

export default useCreateSurveyQuestions;
