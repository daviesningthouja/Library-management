const User = require('../models/user.model');
const Books = require('../models/book.model');

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

const bookCollection = async (req, res)  => {
    const userID = req.params.id;
    try{
        const user = await User.findById(userID);
        const userBookCollection = user.borrowedBooks;
        res.status(200).json(userBookCollection);

    }catch (error){
        res.status(500).json({message: error.message});
    }

}

const updateBorrowedBooks = async (req, res) => {
    const userId = req.params.id;
    const criteria = req.body.criteria;
    console.log({userId});
    
    // Validate that criteria is an array
    if (!Array.isArray(criteria)) {
        return res.status(400).json({ message: 'Criteria should be an array of objects' });
    }

    try {
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const validBookIds = [];
        for (const criterion of criteria) {
            console.log(criterion);
            const books = await Books.find({ "isbn": criterion.isbn })
            
            if (!books.length) {
                return res.status(404).json({ message: `No books found matching criterion: ${JSON.stringify(criterion)}` });
            }
            for (const book of books) {
                book.borrowedBy.push({"name": user.name, "enrollmentId": user.enrollmentId, "email": user.email});
                console.log(user);
                await book.save();
                validBookIds.push(book);
                
            }
        }

        // Update the user's borrowedBooks field
        user.borrowedBooks = validBookIds;
        await user.save();

         // Populate the user's borrowedBooks with full book details
         await user.populate(
            "borrowedBooks"
            // Adjust the fields to be populated as per your schema
        );

        res.status(200).json({ message: 'Borrowed books updated successfully', user });
        }catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
module.exports = {
    createUser,
    userDB,
    updateBorrowedBooks,
    bookCollection
}