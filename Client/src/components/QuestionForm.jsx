import React, { useState } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/discussion", {
        title,
        body,
        user,
      });
      alert("Question submitted successfully");
      setTitle("");
      setUser("");
      setBody("");
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("An error occurred while submitting the question");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Submit a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700"
          >
            User:
          </label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body:
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            required
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
