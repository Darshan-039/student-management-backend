require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { connection } = require("./connection");
const { userrouter } = require("./userRoutes/routes");
const { authRouter } = require("./authRoutes/routes");


const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.use("/auth", authRouter);
app.use("/students", userrouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});