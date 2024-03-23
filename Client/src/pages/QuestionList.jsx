import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const QuestionListPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/discussion/questions"
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Link
        to="/submit-question"
        className="mb-4 block bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Submit a Question
      </Link>
      <h2 className="text-2xl font-bold mb-4">All Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {questions.map((question) => (
          <div key={question._id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">
              <Link
                to={`/questions/${question._id}`}
                className="text-blue-600 hover:underline"
              >
                {question.title}
              </Link>
            </h3>
            <p className="text-gray-600">{question.body}</p>
            <Link
              to={`/questions/${question._id}/`}
              className="mt-2 block text-sm text-gray-500 hover:text-gray-700"
            >
              View Replies
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionListPage;
