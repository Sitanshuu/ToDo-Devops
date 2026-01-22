const User = require("../models/UserModel");
const bcrypt = require("bcrypt");


const registerUser = ("/register", async (req, res)=>{
    try{
        const { firstName, lastName, userName, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: passwordHash
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch(err){
        console.error("Error during user registration:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

const loginUser = ("/login", async (req, res)=>{
    try{

    }
    catch(err){
        console.error("Error during user login:", err);
        res.status(500).json({ message: "Internal server error" });
    }
})

const getUser = ("/:userName", async (req, res)=>{
    try{

    }
    catch(err){
        console.error("Error during fetching user details:", err);
    }
})

const logoutUser = ("/logout", (req, res)=>{
    try{

    }
    catch(err){
        console.error("Error during user logout:", err);
    }
})


module.exports = {
    loginUser,
    registerUser,
    getUser,
    logoutUser
}