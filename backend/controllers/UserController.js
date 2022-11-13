const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const register_user = async (req, res) => {
  const { name, email, password } = req.body;
  // Check everything is filled in
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill in all fields" }).end();
    return;
  }
  // Check for existing user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: `User already exists` }).end();
    return;
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hash,
  });

  if (user) {
    res.status(200).json({
      status: 200,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      },
    });
  } else {
    res.status(400).json({ message: "Invalid user data" }).end();
    return;
  }
};

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const login_user = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      status: 200,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      },
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" }).end();
    return;
  }
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const get_user = async (req, res) => {
  const { name, email, _id } = await User.findById(req.user.id); // req.user is set in the protect middleware
  res.status(200).json({ _id, name, email }).end();
};

// Generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  register_user,
  login_user,
  get_user,
};
