const express = require("express");
const router = express.Router();
const { loginUser, SignupUser } = require("../controllers/user");
//  Login Route

router.post("/login", loginUser);

// Signup Route

router.post("/signup", SignupUser);

module.exports = router;
