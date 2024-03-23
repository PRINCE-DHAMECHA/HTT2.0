import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

export default mongoose.model("Answer", answerSchema);
