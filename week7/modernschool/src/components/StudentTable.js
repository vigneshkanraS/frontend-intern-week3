// src/components/StudentTable.js
import React from 'react';

const StudentTable = ({ students }) => {
  if (students.length === 0) {
    return <p>📭 No students added yet.</p>;
  }

  return (
    <div>
      <h3>📋 Student List</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, i) => (
            <tr key={i}>
              <td>{stu.name}</td>
              <td>{stu.standard}</td>
              <td>{stu.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
