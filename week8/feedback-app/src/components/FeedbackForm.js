import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert('Please fill all fields!');
      return;
    }

    const feedback = {
      name,
      role,
      comment,
      time: new Date().toLocaleString()
    };

    onAddFeedback(feedback);
    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>➕ Submit Feedback</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Student</option>
        <option>Teacher</option>
      </select>
      <textarea
        placeholder="Your feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
