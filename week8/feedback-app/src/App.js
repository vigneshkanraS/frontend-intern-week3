import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('feedbacks');
    if (saved) {
      setFeedbacks(JSON.parse(saved));
    }
  }, []);

  const addFeedback = (newFeedback) => {
    const updated = [...feedbacks, newFeedback];
    setFeedbacks(updated);
    localStorage.setItem('feedbacks', JSON.stringify(updated));
  };

  const deleteFeedback = (index) => {
    const updated = [...feedbacks];
    updated.splice(index, 1);
    setFeedbacks(updated);
    localStorage.setItem('feedbacks', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📬 Feedback Collector App</h1>
      <FeedbackForm onAddFeedback={addFeedback} />
      <hr />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
}

export default App;
