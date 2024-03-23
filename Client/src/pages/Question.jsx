import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionPage = () => {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

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
    fetchAnswers();
  }, [questionId]);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    try {
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
      await axios.post(
        `http://localhost:5000/discussion/${questionId}/answers`,
        { body: newAnswer, user: "user" }
      );
      setNewAnswer("");
      // Refresh answers after submitting the new answer
      fetchAnswers();
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div>
      <h2>Replies to Question</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer._id}>{answer.body}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmitAnswer}>
        <h3>Submit Your Answer</h3>
        <textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Your answer..."
          required
        />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default QuestionPage;
