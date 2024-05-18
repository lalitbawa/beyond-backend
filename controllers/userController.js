const User = require('../models/userModel');

const bcrypt = require('bcrypt');

// creates a new user object in the database
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all users from the database and return their ids
exports.getUsers = async (req, res) => {
  try {
    const { email } = req.query;
    const query = email ? { email } : {};
    const users = await User.find(query).select('_id');
    const userIds = users.map(user => ({ _id: user._id }));
    res.json(userIds);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login function that checks if the user exists and if the password is correct by hasing the password and comparing it to the hashed password in the database
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
      if (isPasswordCorrect) {
        res.json({ user });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};