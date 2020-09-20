module.exports.getFields = (req, res, next) => {
  res.send("fields");
};

module.exports.addField = (req, res, next) => {
  res.send("added field");
};

module.exports.helloWorld = (req, res) => {
  res.send("Hello World");
};
