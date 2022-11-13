const protect = require("../middleware/AuthMiddleware");
const express = require("express");
const router = express.Router();
const {
  get_goals,
  post_goals,
  update_goals,
  delete_goals,
} = require("../controllers/GoalController");

router.route("/").get(protect, get_goals).post(protect, post_goals);
router.route("/:id").put(protect,update_goals).delete(protect, delete_goals);

module.exports = router;
