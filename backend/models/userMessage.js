import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  surename: String,
  job: String,
  age: String,
  town: String,
  mail: String,
});

const UserMessage = mongoose.model("UserMessage", userSchema);

export default UserMessage;
