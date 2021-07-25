import { useState } from "react";
import useMaxLimitInput from "./useMaxLimitInput";

const useCreateSurveyHeader = () => {
  const [error, setError] = useState("");

  /* title */
  const [title, handleTitleChange] = useMaxLimitInput(
    "",
    setError,
    100,
    "too long title"
  );

  /* description */
  const [description, handleDescriptionChange] = useMaxLimitInput(
    "",
    setError,
    1000,
    "too long description"
  );

  return {
    title,
    description,
    handleTitleChange,
    handleDescriptionChange,
    headerError: error,
  };
};

export default useCreateSurveyHeader;
