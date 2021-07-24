import React, { useState } from "react";

function Type({ onSaveType }) {
  console.log("type rendering...");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    const nextName = e.target.value;
    if (nextName.length > 20) {
      setError("Name must be no more than 20 characters.");
    } else {
      setError("");
      setName(nextName);
    }
  };

  const handleDescriptionChange = (e) => {
    const nextDescription = e.target.value;
    if (nextDescription.length > 100) {
      setError("Description must be no more than 100 characters.");
    } else {
      setError("");
      setDescription(nextDescription);
    }
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
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <h5>{error}</h5>
    </li>
  );
}

export default Type;
