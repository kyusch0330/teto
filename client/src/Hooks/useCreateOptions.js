import { useState } from "react";
import useArrayState from "./useArrayState";

const useCreateOptions = (types) => {
  const [options, optionMethods] = useArrayState(() => ({
    id: Date.now(),
    optionText: "",
    forType: types[0].id,
    weight: 1,
  }));

  return {
    options,
    optionMethods,
  };
};

export default useCreateOptions;
