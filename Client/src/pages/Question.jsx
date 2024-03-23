import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionPage = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [question, setQuestion] = useState("");
  useEffect(() => {

    const fetchAnswers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/discussion/${questionId}/answers`
        );
        setAnswers(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/discussion/getOne/${questionId}`
        );
        setQuestion(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };
    fetchAnswers();
    fetchQuestion();
  }, [questionId]);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/discussion/${questionId}/answers`,
        { body: newAnswer, user: "user" }
      );
      setNewAnswer("");
      
    const fetchAnswers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/discussion/${questionId}/answers`
        );
        setAnswers(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };
      // Refresh answers after submitting the new answer
      fetchAnswers();
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Replies to Question</h2>
      <h1>{question.title}</h1>
      <p>{question.body}</p>
      <ul className="space-y-2">
        {answers.map((answer) => (
          <li key={answer._id} className="border p-2 rounded-md bg-gray-100">
            {answer.body}
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmitAnswer} className="mt-4">
        <h3 className="text-xl font-bold mb-2">Submit Your Answer</h3>
        <textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Your answer..."
          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
          rows="4"
        />
        <button
          type="submit"
          className="mt-2 bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuestionPage;
