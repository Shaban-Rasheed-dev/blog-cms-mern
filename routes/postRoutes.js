import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import {
  AddPost,
  deletePost,
  getAddPost,
  getAllPosts,
  getEditPost,
  updatePost,
  uploadImageEditor,
} from "../controllers/postController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

export const postRoutes = express.Router();

postRoutes.get("/add-post", isAuthenticated, getAddPost);
postRoutes.post("/add-post", isAuthenticated, upload.single("image"), AddPost);

postRoutes.get("/all-posts", isAuthenticated, getAllPosts);
postRoutes.post("/delete/:id", isAuthenticated, deletePost);

postRoutes.get("/edit/:id", isAuthenticated, getEditPost);
postRoutes.post(
  "/update-post/:id",
  isAuthenticated,
  upload.single("image"),
  updatePost,
);
postRoutes.post(
  "/upload-editor-image",
  isAuthenticated,
  upload.single("image"),
  uploadImageEditor,
);
