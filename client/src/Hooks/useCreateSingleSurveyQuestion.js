import { useState } from "react";
import useCreateOptions from "./useCreateOptions";
import useMaxLimitInput from "./useMaxLimitInput";

const useCreateSingleSurveyQuestion = (types) => {
  const [checkNum, setCheckNum] = useState(1);
  const [error, setError] = useState("");

  const [text, handleTextChange] = useMaxLimitInput(
    "",
    setError,
    100,
    "Text must be less than 100 letters."
  );

  const [description, handleDescriptionChange] = useMaxLimitInput(
    "",
    setError,
    50,
    "Description must be less than 50 letters."
  );

  const handleCheckNumChange = (e) => {
    const nextCheckNum = Number(e.target.value);
    if (nextCheckNum <= 0) {
      setError("The number to check must be greater than zero.");
    } else if (nextCheckNum > options.length) {
      setError("The number to check must be less than the number of options.");
    } else {
      setError("");
      setCheckNum(nextCheckNum);
    }
  };

  /* options */
  const { options, optionMethods } = useCreateOptions(types);

  return {
    text,
    handleTextChange,
    description,
    handleDescriptionChange,
    checkNum,
    handleCheckNumChange,
    options,
    optionMethods,
    error,
    setError,
  };
};

export default useCreateSingleSurveyQuestion;
