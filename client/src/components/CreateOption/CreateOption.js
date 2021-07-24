import React from "react";

function CreateOption({ option, onSaveOption, types, sendError }) {
  const handleOptionTextChange = (e) => {
    const nextOptionText = e.target.value;
    if (nextOptionText.length > 100) {
      sendError("Option text must be less than 100 letters.");
    } else {
      handleSaveOption({
        ...option,
        optionText: nextOptionText,
      });
    }
  };

  const handleForTypeChange = (e) => {
    const nextForType = Number(e.target.value);
    handleSaveOption({
      ...option,
      forType: nextForType,
    });
  };

  const handleWeightChange = (e) => {
    const nextWeight = Number(e.target.value);
    handleSaveOption({
      ...option,
      weight: nextWeight,
    });
  };

  const handleSaveOption = (newOption) => {
    onSaveOption(newOption);
  };

  return (
    <div>
      <label>
        optionText
        <input
          type="text"
          value={option.optionText}
          onChange={handleOptionTextChange}
        />
      </label>
      <select
        name="forType"
        value={option.forType}
        onChange={handleForTypeChange}
      >
        {types.map((type, index) => {
          return <option value={index}>{type.name}</option>;
        })}
      </select>
      <input
        type="number"
        value={option.weight}
        onChange={handleWeightChange}
      />
    </div>
  );
}

export default CreateOption;
