const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyAuth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;  // Store user info in request
    next();
  });
};

// Middleware to check user's role
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'You don\'t have permission to perform to do this operation!' });
    }
    next();
  };
};

module.exports = { verifyAuth, checkRole };
