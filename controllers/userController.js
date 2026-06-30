import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, password } = req.body;
    //validate the user data

    if (!name || !email || !password) {
      return res
        .status(400)
        .render("register", { message: "All fields are required" });
    }
    // check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .render("register", { message: "User already exists" });
    }
    // hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).render("register", { message: "Internal server error" });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .render("login", { message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .render("login", { message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .render("login", { message: "Invalid email or password" });
    }
    // create a session for the user
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    res.status(500).render("login", { message: "Internal server error" });
  }
};

export const logoutUser = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).render("login", { message: "Internal server error" });
    } else {
      res.redirect("/");
    }
  });
};
