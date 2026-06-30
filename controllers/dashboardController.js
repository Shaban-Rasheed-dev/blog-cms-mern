import { Post } from "../models/post.model.js";

export const getDashboard = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    //search functionality
    const search = req.query.search || "";
    const regex = new RegExp(search, "i");

    const latestPost = await Post.findOne().sort({ createdAt: -1 });
    const allPosts = await Post.find({ title: { $regex: regex } })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalPosts = await Post.countDocuments({ title: { $regex: regex } });
    const totalPages = Math.ceil(totalPosts / limit);
    res.render("admin/dashboard", {
      totalPosts,
      latestPost,
      allPosts,
      totalPages,
      page,
      search,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .render("admin/dashboard", { message: "Internal server error" });
  }
};
