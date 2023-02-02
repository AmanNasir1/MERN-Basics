const User = require("../models/userModel");

//  Login User

const loginUser = async (req, res) => {
  res.json({ message: "Login User" });
};

// Signup User

const SignupUser = async (req, res) => {
  res.json({ message: "Signup User" });
};

module.exports = { loginUser, SignupUser };
