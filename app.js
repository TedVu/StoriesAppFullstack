const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load config
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT} and in ${process.env.NODE_ENV} mode`
  )
);
