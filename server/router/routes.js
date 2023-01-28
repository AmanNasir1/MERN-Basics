const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();

// Get all router

router.get("/", (req, res) => {
  res.json({ message: "Get All workout" });
});

//  Get A single router

router.get("/:id", (req, res) => {
  res.json({ message: "Get single workout" });
});

// Post a New Router
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ message: "Post a new workout" });
});

// Delete a router

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a  workout" });
});

//  Update  Workout
router.patch("/:id", (req, res) => {
  res.json({ message: "update a  workout" });
});

module.exports = router;
