const express = require("express");

const server = express();

server.listen(3000, () => {
  console.log("server started on port 3000");
});
