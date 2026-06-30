import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
// import { isAuthenticated } from "../middlewares/authMiddleware.js";
export const userRoutes = express.Router();
userRoutes.post("/register-user", registerUser);
userRoutes.post("/login-user", loginUser);
userRoutes.get("/logout-user", logoutUser);
