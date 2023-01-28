require("dotenv").config();
const express = require("express");
const app = express();
const workout = require("./router/routes");
const mongoose = require("mongoose");

// MiddleWare

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workout);

// Connect to db

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
