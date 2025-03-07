const bcrypt = require("bcrypt");
const User = require("../../Model/UserModel.js");
const dotenv = require("dotenv");
dotenv.config();

async function CreateUser(req, res) {
  try {
    const { Firstname, lastname, email, password } = req.body;

    // Check if required fields are provided
    if (!Firstname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, use another email" });
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      Firstname,
      lastname,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Send success response
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = CreateUser;
