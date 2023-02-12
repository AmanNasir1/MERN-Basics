const express = require("express");
const Workout = require("../models/workout");
const {
  createWorkout,
  getSingleWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workout");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
router.use(requireAuth);
// Get all router
router.get("/", getWorkout);

//  Get A single router

router.get("/:id", getSingleWorkout);

// Post a New Router
router.post("/", createWorkout);

// Delete a router

router.delete("/:id", deleteWorkout);

//  Update  Workout
router.patch("/:id", updateWorkout);

module.exports = router;
