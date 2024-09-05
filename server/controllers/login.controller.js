const User = require('../models/user.model');
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");



// const getProducts = async(req,res) =>{
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error){
//         res.status(500).json({message: error.message});
//         //send(error);
//     }
// }

// const getProduct = async (req,res) =>{
//     try{
//         //params sina url id to id var da hppaga DB product.findById(var id ) do search twrga product ta hppga respond json file da product to display twba
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }catch{
//         res.status(500).json({message: error.message});
//     }
// }
// const updateProduct =  async (req,res) => {
//     try{
//         const {id} = req.params;
//         // id search twrga user input hppe product var da hpkhi aduda product tudei singaga updatedProduct hpchilla show twba
//         const product =  await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             res.status(404).json({message: 'Product not Found'})
//         }
        
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     }catch (error){
//         res.status(500).json({message: error.message});
//     }
// }

// const deleteProduct = async (req, res) =>{
//     try{
//         const {id} = req.params;

//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).jsan({message: "404 Page not found"})
//         }

//         res.status(200).json({message: "Product deleted"})

//     }catch (error){
//         res.status(500).json({message: error-message});
//     }
// }
//-------Registration
const createUser = async(req,res) =>{
   try{
       //    const createUser = await user.create(req.body);
       //    res.status(200).json(createUser);
        //const hashpassword = await bcryptjs.hashSync(req.body.password,10);
        const newUser = new User({
            name: req.body.name,
            enrollmentId: req.body.enrollmentId,
            email: req.body.email,
            password: req.body.password,
            //contact: req.body.contact
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
        console.log(savedUser);
    } catch (error){
        res.status(500).json({message: error.message});
        //send(error);
    }
}

const loginUser = async (req, res) => {
    const { enrollmentId, password } = req.body;
    
    try {
      // Find user by email
      console.log(enrollmentId)
      const user = await User.findOne( {enrollmentId});
      console.log(user)
      if (!user) {
        return res.status(404).send({ message: 'Enrollment ID not found' });
      }
  
      // Compare password
      const isMatch = await bcryptjs.compare(password, user.password);
      
      if (!isMatch) {
        return res.status(401).send({ message: 'Incorrect password'} );
      }
  
      // Generate token
      // Optional: Generate a JWT token
      const token = jwt.sign(
        { userId: user._id, enrollmentId: user.enrollmentId },
        'your_jwt_secret', // Replace with your JWT secret key
        { expiresIn: '1h' } // Token expiration time
    );
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    // getProducts,
    // getProduct,
    // deleteProduct,
    // updateProduct
    createUser,
    loginUser
}
