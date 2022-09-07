const express = require("express");
const Workout = require("../models/workoutModel");
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleterWorkout,} = require('../controllers/workoutControllers')

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout)

router.post("/", createWorkout);

router.delete("/:id", deleterWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
