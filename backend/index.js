const express = require("express");
const bodyParser = require("body-parser");
const server = express();

const fieldRouter = require("./components/field");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./dbconnection");
connectDB();

server.use(bodyParser.json());

server.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.port}`)
);

server.use("/fields", fieldRouter);
