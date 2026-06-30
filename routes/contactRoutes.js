import express from "express";
import { createContact } from "../controllers/contactController.js";
export const contactRoutes = express.Router();
contactRoutes.post("/contact", createContact);
