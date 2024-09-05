const User = require('../models/user.model');
const Book = require('../models/book.model');

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userDB = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userData =  async (req, res) => {
    try {
      // Find user by ID from token
      const user = await User.findById(req.user.userId).select('-password'); // Exclude password
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

const bookCollection = async (req, res)  => {
    // const userID = req.params.id;
    try{
        const user = await User.findById(req.user.userId).select('-password');

        const userBookCollection = user.borrowedBooks;
        if(!userBookCollection){
            return res.status(404).json({ message: 'User not found' }); 
        }
        res.status(200).json(userBookCollection);

    }catch (error){
        res.status(500).json({message: error.message});
    }

}

const updateBorrowedBooks = async (req, res) => {
    const userId = req.params.id; // Assumes userId is actually enrollmentId in this case
    const criteria = req.body.criteria;

    // Validate that criteria is an array
    if (!Array.isArray(criteria)) {
        return res.status(400).json({ message: 'Criteria should be an array of objects' });
    }

    try {
        // Find the user by enrollmentId
        const user = await User.findOne({ enrollmentId: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Define borrowing limits based on user category
        const borrowingLimits = {
            SC: 5,
            ST: 5,
            OBC: 5,
            General: 3
        };
        const limit = borrowingLimits[user.category];

        // Check if the user has reached their borrowing limit
        if (user.borrowedBooks.length >= limit) {
            return res.status(400).json({ message: 'Borrowing limit reached' });
        }

        const validBookIds = [];
        for (const criterion of criteria) {
            const books = await Book.find({ isbn: criterion.isbn });

            if (!books.length) {
                return res.status(404).json({ message: `No books found with ISBN: ${criterion.isbn}` });
            }

            for (const book of books) {
                // Add user details to the book's borrowedBy array
                book.borrowedBy.push({
                    name: user.name,
                    enrollmentId: user.enrollmentId,
                    email: user.email
                });
                await book.save();
                validBookIds.push({
                    bookId: book._id,
                    title: book.title,
                    author: book.author,
                    isbn: book.isbn,
                    borrowedDate: new Date()
                });
            }
        }

        // Update the user's borrowedBooks field
        user.borrowedBooks = [...user.borrowedBooks, ...validBookIds];
        await user.save();

        // Populate the user's borrowedBooks with full book details
        const populatedUser = await User.findOne({ enrollmentId: userId }).populate('borrowedBooks').exec();

        res.status(200).json({ message: 'Borrowed books updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    userDB,
    updateBorrowedBooks,
    bookCollection,
    userData
}