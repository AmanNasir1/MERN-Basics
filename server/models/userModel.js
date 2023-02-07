const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All field must be filled ");
  }

  if (!validator.isEmail(email)) {
    throw Error("Not a valid email");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email Already in use");
  }
  //  mypasswordj67564y
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All Field must be filled ");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
