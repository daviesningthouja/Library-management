const express = require('express');
const router = express.Router();

const {userDB, createUser, updateBorrowedBooks, bookCollection} = require('../controllers/user.controller');


router.get('/user', userDB);
router.post('/user/create', createUser);
router.put('/user/:id/borrowedBooks', updateBorrowedBooks);
router.get('/user/:id/collection', bookCollection)


module.exports = router;