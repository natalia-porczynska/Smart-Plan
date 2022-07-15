import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  author: String,
  title: String,
  target: String,
  mail: String,
  content: String,
});

const CommentMessage = mongoose.model("CommentMessage", commentSchema);

export default CommentMessage;
