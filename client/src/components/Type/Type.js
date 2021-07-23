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
    <li onBlur={handleSaveType}>
      <label>
        type name
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        type description
        <textarea
          rows="4"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
    </li>
  );
}

export default Type;
