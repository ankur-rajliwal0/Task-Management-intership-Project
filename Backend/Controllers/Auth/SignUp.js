const mongoose = require("mongoose");
const User = require("../../Model/UserModel.js");
const dotenv = require("dotenv");
dotenv.config();

async function CreateUser(req, res) {
  try {
    const { Firstname, lastname, email, password } = req.body;
    if (!Firstname || !email || !password) {
      return res.status(404).json({ message: "all fields are required" });
    }
    const existingUser = await User.findOne({ email });
    
  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
}
