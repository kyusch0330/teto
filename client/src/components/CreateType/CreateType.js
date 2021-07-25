import React from "react";
import useCreateSingleType from "../../Hooks/useCreateSingleType";

function CreateType({ onSaveType, onDeleteType }) {
  const {
    name,
    description,
    handleNameChange,
    handleDescriptionChange,
    error,
  } = useCreateSingleType();

  const handleSaveType = () => {
    onSaveType({
      name,
      description,
    });
  };

  return (
    <div onBlur={handleSaveType}>
      <label>
        type name
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        type description
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <button type="button" onClick={onDeleteType}>
        delete
      </button>
      <h5>{error}</h5>
    </div>
  );
}

export default CreateType;
