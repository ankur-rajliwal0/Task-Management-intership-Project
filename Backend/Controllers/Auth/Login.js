const bcrypt = require("bcrypt");
const User = require("../../Model/UserModel.js");
const jwd = require("jsonwebtoken");

async function Login() {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "user does not Exist try with other mail" });
    }

  } catch (err) {
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = Login;
