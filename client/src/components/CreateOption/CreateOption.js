import React from "react";

function CreateOption({
  option,
  onSaveOption,
  onDeleteOption,
  types,
  sendError,
}) {
  const handleSaveOption = (newOption) => {
    onSaveOption(newOption);
  };

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
          return (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        value={option.weight}
        onChange={handleWeightChange}
      />
      <button type="button" onClick={onDeleteOption}>
        delete
      </button>
    </div>
  );
}

export default CreateOption;
