// src/components/StudentForm.js
import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !standard || !rollNo) return alert("Fill all fields!");

    const newStudent = { name, standard, rollNo };
    onAddStudent(newStudent);
    setName('');
    setStandard('');
    setRollNo('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>➕ Add New Student</h3>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Class (e.g., 6A)"
        value={standard}
        onChange={(e) => setStandard(e.target.value)}
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
