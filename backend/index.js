const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.listen(3000, () => {
  console.log("server started on port 3000");
});

server.use(bodyParser.json());

server.get("/field/:text", (req, res) => {
  console.log(req.params.text);
  res.send("hello world");
});

server.post("/field");
