const mongoose=require('mongoose');

//creating database
// mongoose.connect("mongodb://localhost:27017/employee",{
mongoose.connect("mongodb+srv://sayali:1234@newclustor.gabyf.mongodb.net/employee?retryWrites=true&w=majority",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull.");
}).catch((error)=>{
    console.log(error);
})

