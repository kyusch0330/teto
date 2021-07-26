import { useState } from "react";

const useArrayState = (createInitObj) => {
  const [array, setArray] = useState([createInitObj()]);

  const handleAddObjClick = (e) => setArray(array.concat(createInitObj()));

  //각 CreateQuestion에 전달
  const handleSaveObj = (index) => (newObj) => {
    setArray(
      array
        .slice(0, index)
        .concat({ ...array[index], ...newObj })
        .concat(array.slice(index + 1, array.length))
    );
  };

  const handleDeleteObj = (index) => () => {
    if (array.length <= 1) return;
    setArray(
      array.slice(0, index).concat(array.slice(index + 1, array.length))
    );
  };

  return [
    array,
    {
      handleSaveObj,
      handleDeleteObj,
      handleAddObjClick,
    },
  ];
};

export default useArrayState;
