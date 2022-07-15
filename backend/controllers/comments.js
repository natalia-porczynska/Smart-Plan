import CommentMessage from "../models/commentMessage.js";
import mongoose from "mongoose";
import express from "express";

const router = express.Router();

export const getComments = async (req, res) => {
  try {
    const commentMessages = await CommentMessage.find();
    res.status(200).json(commentMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  const comment = req.body;
  const newComment = new CommentMessage(comment);
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no comment with given id");

  await CommentMessage.findByIdAndRemove(id);

  res.json({ message: "comment deleted sucesfully" });
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { author, title, content, mail, target } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no comment with given id");

  const updatedComment = { author, title, content, mail, target, _id: id };

  await CommentMessage.findByIdAndUpdate(id, updatedComment, {
    new: true,
  });

  res.json(updatedComment);
};
export default router;
