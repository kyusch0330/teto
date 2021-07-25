import { useState } from "react";
import useMaxLimitInput from "./useMaxLimitInput";

const useCreateSingleType = () => {
  const [error, setError] = useState("");

  const [name, handleNameChange] = useMaxLimitInput(
    "",
    setError,
    20,
    "name must be no more than 100 characters"
  );

  const [description, handleDescriptionChange] = useMaxLimitInput(
    "",
    setError,
    100,
    "Description must be no more than 100 characters."
  );

  return {
    name,
    description,
    handleNameChange,
    handleDescriptionChange,
    error,
  };
};

export default useCreateSingleType;
