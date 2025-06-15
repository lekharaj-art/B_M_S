const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const databaseConnection = async() =>{
    const URL = process.env.API_KEY;
    await mongoose.connect(URL)
    .then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log("Database connection failed", err);
    })
}

module.exports = databaseConnection;