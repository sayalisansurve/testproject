const mongoose=require('mongoose');
// import dotenv from "dotenv";
require("dotenv").config();
//creating databasedotenv.config(); 
// dotenv.config(); 
// mongoose.connect("mongodb://localhost:27017/employee",{
// mongoose.connect("mongodb+srv://sayali:1234@newclustor.gabyf.mongodb.net/employee?retryWrites=true&w=majority",{
mongoose.connect(process.env.MONGODB_URL,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull.");
}).catch((error)=>{
    console.log(error);
})

