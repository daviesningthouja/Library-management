require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const connection = require('./db');
const loginRoute = require('./routes/login.route');
const booksRoute = require('./routes/book.route');
const userRoute = require('./routes/user.route');
const jwt = require('jsonwebtoken');

// Middleware for protecting routes
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Bearer token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace with your JWT secret
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

//Connection to database
connection();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use('/api/user', loginRoute);
app.use('/api/library',authMiddleware,booksRoute);
app.use('/api/dashboard', authMiddleware, userRoute)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Sever is running on ${PORT}`);
});
