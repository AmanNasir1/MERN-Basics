const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();
const {
  createWorkout,
  getSingleWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workout");
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
