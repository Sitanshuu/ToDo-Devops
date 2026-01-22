const mongoose = require("mongoose");

const ConnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: 127.0.0.1:${conn.connection.port}`);
    }
    catch(error){
        console.log("Error: ", error.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;
