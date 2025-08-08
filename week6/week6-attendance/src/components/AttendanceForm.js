// src/components/AttendanceForm.js
import React, { useState } from 'react';
import AddStudentForm from './AddStudentForm';

const AttendanceForm = ({ onSubmit, studentList, setStudentList }) => {
  const [classSelected, setClassSelected] = useState('6A');
  const [date, setDate] = useState('');
  const [students, setStudents] = useState(studentList);

  const handleCheckboxChange = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  const handleSubmit = () => {
    if (!date) {
      alert("📅 Please select a date!");
      return;
    }

    const attendanceData = {
      date,
      class: classSelected,
      records: students
    };

    onSubmit(attendanceData);
    alert("✅ Attendance submitted!");

    // reset checkboxes
    setStudents((prev) => prev.map((s) => ({ ...s, present: false })));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Mark Attendance</h2>

      <label>📅 Date: </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br /><br />

      <label>🏫 Class: </label>
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

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>✅ Submit Attendance</button>

      <AddStudentForm setStudentList={setStudentList} />
    </div>
  );
};

export default AttendanceForm;
