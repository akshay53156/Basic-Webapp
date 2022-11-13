const express = require("express");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.SERVER_PORT || 6000;
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Allows us to accept JSON data in the body
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // Allows us to accept requests from different origins

//Routes
app.use("/api/goals", require("./routes/GoalRoutes"));
app.use("/api/user",require("./routes/UserRoutes"));

// Error Handler Middleware
app.use(errorHandler);


// @desc    Not found
// @route   GET /*
// @access  Public
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
