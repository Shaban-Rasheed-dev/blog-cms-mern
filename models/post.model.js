import mongoose from "mongoose";
export const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);
export const Post = mongoose.model("Post", postSchema);
