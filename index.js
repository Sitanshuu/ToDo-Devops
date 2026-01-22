const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./config/db");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes")


const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

ConnectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`The application is listening on: http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log("Error: ", error.message);
});