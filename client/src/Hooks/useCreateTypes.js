import { useState } from "react";

const useCreateTypes = () => {
  const [fixTypesError, setFixTypesError] = useState("");
  /* types */
  const [types, setTypes] = useState([
    {
      id: Date.now(),
      name: "",
      description: "",
    },
  ]);

  //각 CreateType에 전달
  const handleSaveType = (index) => (newType) => {
    setTypes(
      types
        .slice(0, index)
        .concat({
          id: types[index].id,
          ...newType,
        })
        .concat(types.slice(index + 1, types.length))
    );
  };

  const handleDeleteType = (index) => () => {
    console.log(
      types.slice(0, index).concat(types.slice(index + 1, types.length))
    );
    setTypes(
      types.slice(0, index).concat(types.slice(index + 1, types.length))
    );
  };

  const handleAddTypeClick = () => {
    setTypes(types.concat({ id: Date.now(), name: "", description: "" }));
  };

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
    typeMethods: {
      handleSaveType,
      handleDeleteType,
      handleAddTypeClick,
    },
    fixedTypes,
    handleFixTypes,
    fixTypesError,
  };
};

export default useCreateTypes;
