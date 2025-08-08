// src/components/TeacherTable.js
import React from 'react';

const TeacherTable = ({ teachers }) => {
  if (teachers.length === 0) {
    return <p>📭 No teachers added yet.</p>;
  }

  return (
    <div>
      <h3>📋 Teacher List</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Emp ID</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t, i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>{t.subject}</td>
              <td>{t.empId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
