import { useState } from "react";
import useArrayState from "./useArrayState";

const useCreateTypes = () => {
  const [fixTypesError, setFixTypesError] = useState("");

  const [types, typeMethods] = useArrayState(() => ({
    id: Date.now(),
    name: "",
    description: "",
  }));

  /* fixedTypes */
  const [fixedTypes, setFixedTypes] = useState([]);

  const handleFixTypes = () => {
    let willFix = true;
    let errorType = 0;
    const typeToSave = types.map((type, index) => {
      if (!type.name) {
        willFix = false;
        errorType = index;
      }
      return { ...type };
    });
    if (!willFix) {
      setFixTypesError(`Type #${errorType} is error`);
    } else {
      setFixedTypes(typeToSave);
    }
  };

  return {
    types,
    typeMethods,
    fixedTypes,
    handleFixTypes,
    fixTypesError,
  };
};

export default useCreateTypes;
