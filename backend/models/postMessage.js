import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  content: String,
  mail: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
