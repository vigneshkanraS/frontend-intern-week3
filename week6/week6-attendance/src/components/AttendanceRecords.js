// src/components/AttendanceRecords.js
import React from 'react';

const AttendanceRecords = ({ records }) => {
  if (records.length === 0) {
    return <p style={{ padding: "20px" }}>📭 No attendance records found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Attendance Records</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Class</th>
            <th>Student</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {records.map((entry, idx) =>
            entry.records.map((student, sIdx) => (
              <tr key={`${idx}-${sIdx}`}>
                <td>{entry.date}</td>
                <td>{entry.class}</td>
                <td>{student.name}</td>
                <td>{student.present ? "✅" : "❌"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceRecords;
