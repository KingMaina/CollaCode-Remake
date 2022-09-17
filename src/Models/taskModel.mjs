import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: "Let's get coding!"
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: false
    }
  ],
},
  {
    timestamps: true
  }
);

export default model('Task', taskSchema);