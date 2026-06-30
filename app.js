import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { pageRouter } from "./routes/pageRoutes.js";
import { connectDB } from "./config/db.js";
import { userRoutes } from "./routes/userRoutes.js";
import { contactRoutes } from "./routes/contactRoutes.js";
import session from "express-session";
import { dashboardRoutes } from "./routes/dashboardRoutes.js";
import { postRoutes } from "./routes/postRoutes.js";
const app = express();
dotenv.config();

// Start the server
const PORT = process.env.PORT || 5000;

// Get the current file path and directory name using __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file using path.dirname
const __dirname = path.dirname(__filename);

// server static file from public folder
app.use(express.static(path.join(__dirname, "public")));

// parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set user session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

// access user session in views
app.use((req, res, next) => {
  res.locals.user = req.session.user ? req.session.user.name : "Guest";
  next();
});

// connect to the database
connectDB();
// set the view engine to ejs
app.set("view engine", "ejs");

app.use(pageRouter);
app.use(userRoutes);
app.use(contactRoutes);
app.use(dashboardRoutes);
app.use(postRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
// listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
