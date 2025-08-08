// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import TeacherForm from './components/TeacherForm';
import TeacherTable from './components/TeacherTable';

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // Load from localStorage on page load
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    const savedTeachers = localStorage.getItem("teachers");
    if (savedStudents) setStudents(JSON.parse(savedStudents));
    if (savedTeachers) setTeachers(JSON.parse(savedTeachers));
  }, []);

  // Add student
  const addStudent = (student) => {
    const updated = [...students, student];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  // Add teacher
  const addTeacher = (teacher) => {
    const updated = [...teachers, teacher];
    setTeachers(updated);
    localStorage.setItem("teachers", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <hr />
      <StudentForm onAddStudent={addStudent} />
      <StudentTable students={students} />
      <hr />
      <TeacherForm onAddTeacher={addTeacher} />
      <TeacherTable teachers={teachers} />
    </div>
  );
}

export default App;
