import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import QuestionBody from "../components/DiscussionForum/QuestionBody";

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
    <div className="m-4 p-2 rounded-md bg-gray-100">
    <div className="flex justify-between m-4">
      <h1 className="text-3xl">Discussion Forum</h1>
      <Link
        to="/submit-question"
        className="mb-4 block bg-black text-white py-2 px-4 rounded-md hover:bg-[#9E2B59] focus:outline-none focus:bg-[#9E2B59]"
      >
        Submit a Question
      </Link>
    </div>
    <div className="overflow-auto h-[600px]">
      {questions.map((question) => ( 
        <QuestionBody key={question.id} title={question.title} body={question.body} id={question._id} user={question.user} /> 
      ))}
    </div>
    </div>
  );
};

export default QuestionListPage;
