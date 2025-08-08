// src/components/AddStudentForm.js
import React, { useState } from 'react';

const AddStudentForm = ({ setStudentList }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name.trim()) {
      alert("🚫 Name cannot be empty!");
      return;
    }
    setStudentList((prev) => [...prev, { name, present: false }]);
    setName('');
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h4>➕ Add New Student</h4>
      <input
        type="text"
        value={name}
        placeholder="Enter student name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>Add</button>
    </div>
  );
};

export default AddStudentForm;
