const express = require('express');
const router = express.Router();

const { addNewBook , showAllBooks, getBookById,updateBookById,deleteBookById, searchBook ,borrowedBook}= require ('../controllers/book.controller');

router.post("/book/add", addNewBook);
router.get("/books", showAllBooks);
router.get("/books/search", searchBook);

router.get("/book/:id", getBookById);
router.put("/book/:id", updateBookById);
router.delete("/book/:id", deleteBookById);
router.get("/books/:id/rent", borrowedBook);





module.exports = router;