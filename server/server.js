require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const connection = require('./db');
const loginRoute = require('./routes/login.route');
const booksRoute = require('./routes/book.route');
const userRoute = require('./routes/user.route');
//Connection to database
connection();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use('/api/user', loginRoute);
app.use('/api/library', booksRoute);
app.use('/api/dashboard', userRoute)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Sever is running on ${PORT}`);
});
