const Goal = require("../models/GoalModel");
const User = require("../models/UserModel");

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const get_goals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.status(200).json(goals).end();
  } catch (error) {
    throw new Error("Server Error");
  }
};

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const post_goals = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Bad Request");
  } else {
    try {
      const goal = await Goal.create({
        user: req.user._id,
        text: req.body.text,
      });
      res.status(201).json(goal).end();
    } catch (error) {
      throw new Error("Server Error");
    }
  }
};

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const update_goals = async (req, res) => {
  let id = req.params.id;

  try {
    const goal = await Goal.findById(id);
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(400);
      res.json({ message: "User not found" });
    }

    if (goal.user.toString() !== user.id) {
      res.status(401);
      res.json({ message: "Not authorized" });
    }
    // All checks passed
    if (!goal) {
      res.status(400);
      res.json({ message: "Goal not found" });
    } else {
      const updateGoal = await Goal.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(updateGoal).end();
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const delete_goals = async (req, res) => {
  let id = req.params.id;

  try {

    const goal = await Goal.findById(id);
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(400);
      res.json({ message: "User not found" });
    }

    if (goal.user.toString() !== user.id) {
      res.status(401);
      res.json({ message: "Not authorized" });
    }

    // All checks passed
    if (!goal) {
      res.status(400);
      throw new Error("Goal Not found");
    } else {
      goal.remove();
      res.status(201).json({message: "Goal Deleted"}).end();
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  get_goals,
  post_goals,
  update_goals,
  delete_goals,
};
