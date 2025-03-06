const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.url).then(() => {
      console.log("Connected to database Suceesfully");
    });
  } catch (err) {
    console.log("error conneting to datbase", err);
    process.exit(1);
  }
};

module.exports = ConnectDb;
