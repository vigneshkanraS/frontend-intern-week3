import React from 'react';

const FeedbackList = ({ feedbacks, onDelete }) => {
  return (
    <div>
      <h3>📋 All Feedback</h3>
      {feedbacks.length === 0 ? (
        <p>📭 No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbacks.map((fb, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <b>{fb.name}</b> ({fb.role}) said: <i>{fb.comment}</i><br />
              <small>🕒 {fb.time}</small><br />
              <button onClick={() => onDelete(i)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
