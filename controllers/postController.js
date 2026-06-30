import { Post } from "../models/post.model.js";

export const getAddPost = (req, res) => {
  res.render("admin/addpost");
};

export const AddPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .render("admin/addpost", { message: "All fields are required" });
    }
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const newPost = new Post({
      title,
      description,
      image,
    });
    await newPost.save();
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).render("admin/addpost", {
      message: "An error occurred while adding the post",
    });
  }
};
export const uploadImageEditor = (req, res) => {
  if (!req.file) {
    res.status(400).send({ message: "No file uploaded" });
  }
  res.send({ url: `/uploads/${req.file.filename}` });
};
export const getAllPosts = async (req, res) => {
  try {
    const allposts = await Post.find();
    res.render("admin/allpost", { allposts });
  } catch (error) {
    console.error(error);
    res.status(500).render("admin/allpost", {
      allposts: [],
      message: "Error fetching posts",
    });
  }
};

//delete post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await Post.findByIdAndDelete(id);
    if (!deletePost) {
      const allposts = await Post.find();
      return res.status(404).render("admin/allpost", {
        allposts,
        message: "Post not found",
      });
    }
    res.redirect("/all-posts");
  } catch (error) {
    console.error(error);
    res.status(500).render("admin/allpost", {
      message: "An error occurred while deleting the post",
    });
  }
};

//edit post
export const getEditPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.redirect("/all-posts");
    }
    res.render("admin/editpost", { post });
  } catch (error) {
    console.error(error);
    res.redirect("/all-posts");
  }
};

//update the post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
      const post = await Post.findById(id);

      return res.status(400).render("admin/editpost", {
        post,
        message: "All fields are required",
      });
    }
    // ✅ nai image aayi? use karo. nahi aayi? purani rakho
    const image = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.existingImage;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description, image },
      { returnDocument: "after" }, // updated here
    );

    if (!updatedPost) {
      return res.redirect("/all-posts");
    }

    res.redirect("/all-posts");
  } catch (error) {
    console.error(error);

    res.status(500).render("admin/editpost", {
      message: "An error occurred while updating the post",
    });
  }
};
