const Books = require('../models/book.model');


const addNewBook = async (req, res) => {
    try {
        // req.body should be an array of book objects
        const newBooks = req.body;

        // Array to store saved books
        const savedBooks = [];

        for (const newBookData of newBooks) {
            const newBook = new Books(newBookData);
            const savedBook = await newBook.save();
            savedBooks.push(savedBook);
        }
        
        res.status(201).json(savedBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const showAllBooks = async (req, res) => {
    
    try {
        const book = await Books.find();
        
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBookById = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Books.findById(bookId)
            
            
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBookById = async (req, res) => {
    try {
        const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBookById = async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchBook = async (req, res) => {
    try {
        const { author, title } = req.query;
        let query = {};

        if (author) {
            query.author = new RegExp(author, 'i'); // Case-insensitive regex search
        }

        if (title) {
            query.title = new RegExp(title, 'i'); // Case-insensitive regex search
        }

        const books = await Books.find(query).sort({ author: 1, title: 1 }); // Sort by author and title alphabetically
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const borrowedBook = async (req, res) => {
    const bookId = req.params.id;
    
    try {
        
        console.log(bookId)
        const book = await Books.findById(bookId).populate('borrowedBy.user', 'name email enrollmentId');
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addNewBook,
    showAllBooks,
    updateBookById,
    getBookById,
    deleteBookById,
    searchBook,
    borrowedBook
}