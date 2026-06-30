import { Contact } from "../models/contact.model.js";
export const createContact = async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .render("contact", {
          message: "All fields are required except phone number",
        });
    }
    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      message,
    });
    await newContact.save();

    res.redirect("/");
  } catch (error) {
    res.status(500).render("contact", { message: "Internal server error" });
  }
};
