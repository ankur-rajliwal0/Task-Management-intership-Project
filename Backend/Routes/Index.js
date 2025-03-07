const express = require("express");
const Routes = express.Router();
const AuthRoutes = require("./AuthRoutes.js");

Routes.use("/UserAuth",AuthRoutes);

module.exports = Routes