const Users = require("./user_model");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await Users.create({
      name,
      email,
      password,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.send(err.message);
  }
};
const userLogin = () => {};
const routerTest = async (req, res) => {
  return res.send("It is working");
};

module.exports.signUp = signUp;
module.exports.routerTest = routerTest;
