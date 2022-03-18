const mongoose=require('mongoose');

//creating database
mongoose.connect("mongodb://localhost:27017/employee",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull.");
}).catch((error)=>{
    console.log(error);
})

