// src/App.js
import React, { useState, useEffect } from 'react';
import AttendanceForm from './components/AttendanceForm';
import AttendanceRecords from './components/AttendanceRecords';

function App() {
  const [allRecords, setAllRecords] = useState([]);
  const [studentList, setStudentList] = useState([
    { name: 'John', present: false },
    { name: 'Priya', present: false },
    { name: 'Rahul', present: false }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("attendanceData");
    if (saved) {
      setAllRecords(JSON.parse(saved));
    }
  }, []);

  const handleAttendanceSubmit = (data) => {
    const updatedRecords = [...allRecords, data];
    setAllRecords(updatedRecords);
    localStorage.setItem("attendanceData", JSON.stringify(updatedRecords));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🎯 Week 6 – Attendance Tracker</h1>
      <AttendanceForm
        onSubmit={handleAttendanceSubmit}
        studentList={studentList}
        setStudentList={setStudentList}
      />
      <hr />
      <AttendanceRecords records={allRecords} />
    </div>
  );
}

export default App;
