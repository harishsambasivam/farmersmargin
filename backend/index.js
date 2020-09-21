const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const fieldRouter = require("./components/field");
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

server.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.port}`)
);

server.use("/fields", fieldRouter);
server.use("/access_token", accessTokenRouter);
