const express = require("express");
const router = express.Router();

//productController hybei mhutta destructure sijin nrga access twba function
const { createUser,loginUser }= require ('../controllers/login.controller');


/* Cgi mhutta atoppa file da controller oina function hppa
router.get("/", async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error){
        res.status(500).json({message: error.message});
        //send(error);
    }
});
*/

router.post("/signup", createUser);
router.post("/login", loginUser);


module.exports = router;