// QuestionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [user, setUsers] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/discussion', { title, body,user });
      alert('Question submitted successfully');
      setTitle('');
      setUsers('');
      setBody('');
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('An error occurred while submitting the question');
    }
  };

  return (
    <div>
      <h2>Submit a Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User:</label>
          <input type="text" value={user} onChange={(e) => setUsers(e.target.value)} required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
