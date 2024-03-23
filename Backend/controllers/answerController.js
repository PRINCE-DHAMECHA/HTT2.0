import Answer from "../models/Answer.js";

// Answer a question
const answerQuestion = async (req, res) => {
  try {
    const { user, body } = req.body;
    const answer = new Answer({
      user,
      question: req.params.questionId,
      body,
    });
    await answer.save();
    res.status(201).json(answer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get replies of one question
const getRepliesOfQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const replies = await Answer.find({ question: questionId });
    res.json(replies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { answerQuestion, getRepliesOfQuestion };
