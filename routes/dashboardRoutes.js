import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

export const dashboardRoutes = express.Router();
dashboardRoutes.get("/dashboard", isAuthenticated, getDashboard);
