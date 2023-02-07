const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
//  Login User

const loginUser = async (req, res) => {
  const {email ,password} = req.body
  try {
    const user = await User.login(email, password);
    //  Create Token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Signup User

const SignupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    //  Create Token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, SignupUser };
