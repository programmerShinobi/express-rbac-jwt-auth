const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../utils/data');  // Import users from data.js

// Handle login and generate a JWT token
const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare the hashed password
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  });
};

module.exports = { login };
