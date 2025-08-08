import React, { useState } from 'react';

const AttendanceForm = () => {
  const [classSelected, setClassSelected] = useState('6A');

  const [students, setStudents] = useState([
    { name: 'John', present: false },
    { name: 'Priya', present: false },
    { name: 'Rahul', present: false }
  ]);

  const handleCheckboxChange = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  const handleSubmit = () => {
    alert('Attendance submitted successfully!');
    console.log("Class:", classSelected);
    console.log("Attendance:", students);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📋 Attendance Marking</h2>

      <label>Select Class: </label>
      <select value={classSelected} onChange={(e) => setClassSelected(e.target.value)}>
        <option>6A</option>
        <option>10B</option>
        <option>12C</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        {students.map((student, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={student.present}
              onChange={() => handleCheckboxChange(index)}
            />
            <label style={{ marginLeft: "8px" }}>{student.name}</label>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        ✅ Mark Attendance
      </button>
    </div>
  );
};

export default AttendanceForm;
