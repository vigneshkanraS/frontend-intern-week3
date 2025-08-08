// src/components/TeacherForm.js
import React, { useState } from 'react';

const TeacherForm = ({ onAddTeacher }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [empId, setEmpId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !empId) return alert("Fill all fields!");

    const newTeacher = { name, subject, empId };
    onAddTeacher(newTeacher);
    setName('');
    setSubject('');
    setEmpId('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>👩‍🏫 Add New Teacher</h3>
      <input
        type="text"
        placeholder="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject (e.g., Maths)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />
      <button type="submit">Add Teacher</button>
    </form>
  );
};

export default TeacherForm;
