const protect = require("../middleware/AuthMiddleware");
const express = require("express");
const router = express.Router();
const {
  register_user,
  login_user,
  get_user,
} = require("../controllers/UserController");

router.post("/register", register_user);
router.post("/login", login_user);
router.get("/me", protect, get_user);

module.exports = router;
