import { useState } from "react";

const useCreateOptions = (types) => {
  const [options, setOptions] = useState([
    { id: Date.now(), optionText: "", forType: types[0].id, weight: 1 },
  ]);

  const handleAddOptionClick = (e) => {
    if (options.length >= 10) return;
    setOptions(
      options.concat({
        id: Date.now(),
        optionText: "",
        forType: types[0].id,
        weight: 1,
      })
    );
  };

  // 각 CreateOption에 전달
  const handleSaveOption = (index) => (newOption) => {
    setOptions(
      options
        .slice(0, index)
        .concat({
          id: options[index].id,
          ...newOption,
        })
        .concat(options.slice(index + 1, options.length))
    );
  };

  const handleDeleteOption = (index) => () => {
    if (options.length <= 1) return;
    setOptions(
      options.slice(0, index).concat(options.slice(index + 1, options.length))
    );
  };

  return {
    options,
    handleAddOptionClick,
    handleSaveOption,
    handleDeleteOption,
  };
};

export default useCreateOptions;
