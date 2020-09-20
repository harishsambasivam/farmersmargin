const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const fieldRouter = require("./components/field");

server.listen(3000, () => console.log("server started on port 3000"));

server.use(bodyParser.json());

server.use("/fields", fieldRouter);
