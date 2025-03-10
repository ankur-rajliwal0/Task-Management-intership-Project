const User = require("../../Model/UserModel.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    console.log(isPassword);
    if (!isPassword) {
      return res.status(403).json({ message: "Password not matched" });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.Secret_key,
      { expiresIn: "5d" }
    );
    return res.status(200).json({ message: "user can access token", token });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = Login;
