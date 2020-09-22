const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const fieldRouter = require("./components/field");
const usersRouter = require("./components/user");
const farmRouter = require("./components/farm");
const accessTokenRouter = require("./components/access_token");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./dbconnection");
connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
};

server.use(cors(corsOptions));
server.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`server started on port ${PORT}`));

server.use("/", usersRouter);
server.use("/fields", fieldRouter);
server.use("/farms", farmRouter);
server.use("/access_token", accessTokenRouter);
