const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../utils/authMiddleware");


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
        console.log(user);
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
        const {userName, password} = req.body;
        const user = await User.findOne({ userName: userName });
        if (!user){
            throw new Error("Invalid creddentials.");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid){
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.cookie("token", token);
            res.status(200).json({ message: "Login successful", token: token });
        }
        else{
            throw new Error("Invalid credentials.");
        }
    }
    catch(err){
        console.error("Error during user login:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

const getUser = ("/:userName", async (req, res)=>{
    try{
        const { userName } = req.params.userName;
        console.log(userName);
        // const user = await User.findOne({ userName: userName });
        // console.log(user);
        // res.json(user);
    } 
    catch(err){
        console.error("Error during fetching user details:", err);
    }
});

const logoutUser = ("/logout", (req, res)=>{
    try{
        res.cookie("token", "null", { expires: new Date(Date.now()) });
        res.json({ message: "Logout successful" });
    }
    catch(err){
        console.error("Error during user logout:", err);
    }
});

module.exports = {
    loginUser,
    registerUser,
    getUser,
    logoutUser
}