const mongoose=require('mongoose');
require("dotenv").config();
//creating database
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

