import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import { CgProfile } from "react-icons/cg";

const QuestionPage = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const { user } = useAppContext();
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
        { body: newAnswer, user: user.name }
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
    <div className="max-w-7xl mx-auto mt-8 text-center">
      <div className="flex text-left text-3xl">
        <p className="font-semibold">Q: {question.title}</p>
      </div>
      <div className="flex gap-3 flex-col justify-start text-left text-xl">
        <p className="mt-5">{question.body}</p>
        <div className="flex flex-row justify-start gap-2">
          <CgProfile className="flex justify-center mt-1" />
          <p className="font-semibold text-xl">{question.user}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full gap-10 mt-10">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 mx-auto">Replies</h2>
          <ul className="space-y-2 mt-10 max-h-80 myScroll">
            {answers.map((answer) => (
              <li
                key={answer._id}
                className="border p-2 rounded-md bg-gray-100 text-left"
              >
                <div>
                  <p className="text-lg">{answer.body}</p>
                  <div className="flex flex-row justify-start gap-2">
                    <CgProfile className="flex justify-center mt-1" />
                    <p className="font-semibold">{answer.user}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmitAnswer} className="mt-4">
            <h3 className="text-xl font-bold mb-2">Submit Your Reply</h3>
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
              className="mt-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit Answer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
