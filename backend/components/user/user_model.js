const mongoose = require("mongoose");
const { isEmail, isAlphanumeric } = require("validator");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    min: 6,
    trim: true,
    validate: [
      isAlphanumeric,
      "please make sure that it includes alphabets and numbericals",
    ],
  },
  email: {
    type: String,
    required: true,
    min: 4,
    unique: true,
    trim: true,
    validate: [isEmail, "please enter a valid email"],
  },
  name: {
    type: String,
    required: true,
    min: 4,
    trim: true,
  },
});

//  Hashing the passwords
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
/////
const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
