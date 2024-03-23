import express from "express";
const router = express.Router();

import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  getAllQuestions
} from "../controllers/questionController.js";

// Add a new question
router.post("/question", addQuestion);

// Delete a question
router.delete("/question/:id", deleteQuestion);

// Update a question
router.put("/question/:id", updateQuestion);

// Get All questions
router.get('/questions', getAllQuestions);

export default router;
