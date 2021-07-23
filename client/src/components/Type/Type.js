import React, { useState } from "react";

function Type({ onSaveType }) {
  console.log("type rendering...");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveType = (e) => {
    onSaveType({
      name,
      description,
    });
  };
  return (
    <div>
      <label>
        type name
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={handleSaveType}
        />
      </label>
      <label>
        type description
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleSaveType}
        />
      </label>
    </div>
  );
}

export default Type;
