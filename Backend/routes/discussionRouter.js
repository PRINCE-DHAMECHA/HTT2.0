import express from "express";
const router = express.Router();

import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  getAllQuestions,
  getOneQuestion
} from "../controllers/questionController.js";

import {  answerQuestion, getRepliesOfQuestion } from "../controllers/answerController.js";
 
// Add a new question
router.post("/", addQuestion);

// Delete a question
router.delete("/:id", deleteQuestion);

// Update a question
router.put("/:id", updateQuestion);

// Get All questions
router.get('/questions', getAllQuestions);

// Get All replies
router.get('/:questionId/answers', getRepliesOfQuestion);

// Answer a question
router.post('/:questionId/answers', answerQuestion);

// Get one question
router.get("/getone/:questionId/",getOneQuestion)

export default router;
