import express from "express";
import {
  getAboutPage,
  getContactPage,
  getHomePage,
  getLoginPage,
  getRegisterPage,
  postDetails,
  summary,
} from "../controllers/pageController.js";
export const pageRouter = express.Router();
pageRouter.get("/", getHomePage);
pageRouter.get("/about", getAboutPage);
pageRouter.get("/contact", getContactPage);
pageRouter.get("/register", getRegisterPage);
pageRouter.get("/login", getLoginPage);
pageRouter.get("/post-details/:id", postDetails);
pageRouter.get("/summary/:id", summary);
