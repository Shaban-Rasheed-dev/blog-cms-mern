import { Post } from "../models/post.model.js";
import ollama from "ollama";
export const getHomePage = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = 5; // number of post per page

  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  const totalPosts = await Post.countDocuments();
  const totalPages = Math.ceil(totalPosts / limit);
  res.render("index", { posts, page, totalPages });
};

export const getAboutPage = (req, res) => {
  res.render("about");
};
export const getContactPage = (req, res) => {
  res.render("contact");
};
export const getLoginPage = (req, res) => {
  res.render("login");
};
export const getRegisterPage = (req, res) => {
  res.render("register");
};
export const postDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res
        .status(404)
        .render("postdetails", { message: "Post not found" });
    }
    res.render("post-details", { post });
  } catch (error) {
    console.error(error);
    res.status(500).render("postdetails", { message: "Internal server error" });
  }
};

export const summary = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.render("summary", { message: "Post not found" });
    }
    const response = await ollama.chat({
      model: "llama3.2:latest",
      messages: [
        {
          role: "user",
          content: `Summarize this post into a 50 words:${post.description}`,
        },
      ],
    });
    // console.log(response.message.content);
    res.render("summary", { post, summary: response.message.content });
  } catch (error) {
    console.error(error);
    res.status(500).render("summary", { message: "Internal server error" });
  }
};
