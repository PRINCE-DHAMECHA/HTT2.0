import Question from "../models/Question.js";

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { user, title, body } = req.body;
    const question = new Question({ user, title, body });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  try {
    const { title, body } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export  {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  getAllQuestions
}
