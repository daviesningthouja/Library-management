const express = require('express');
const router = express.Router();

const {userDB, createUser, updateBorrowedBooks, bookCollection, userData} = require('../controllers/user.controller');


router.get('/user', userDB);
router.post('/user/create', createUser);
router.put('/user/:id/borrowedBooks', updateBorrowedBooks);
router.get('/user/collection', bookCollection) //user collection
router.get('/user/profile', userData)

module.exports = router;