const { CreateUser, Login } = require("../Controllers/Auth/Index.js");
const express = require("express");
const AuthRoutes = express.Router();

AuthRoutes.post("/Signup", CreateUser);
AuthRoutes.post("/Login", Login);

module.exports = AuthRoutes;
