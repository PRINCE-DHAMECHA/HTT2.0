// QuestionListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionListPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/discussion/questions');
        console.log(response)
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>All Questions</h2>
      <br></br>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            {question.title}
            <br></br>
            {question.body}
            <br></br>
            <Link to={`/questions/${question._id}/${question.title}/${question.body}`}>Replies</Link>
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
      <Link to="/submit-question">Submit a Question</Link>
    </div>
  );
};

export default QuestionListPage;
