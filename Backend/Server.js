const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const ConnectDb = require("./Db/ConnectDb");

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

dotenv.config();

// DataBase
ConnectDb();

// Port Configuration
const Port = process.env.PORT || 5100;

// Start the server
app.listen(Port, () => {
  console.log(`App is listening on http://localhost:${Port}`);
});
