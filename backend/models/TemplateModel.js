import mongoose from "mongoose";

const Schema = mongoose.Schema;

const templateSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Template", templateSchema, "template");
