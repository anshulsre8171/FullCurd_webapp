const mongoose=require("mongoose")
const Dbconnect=async()=>{
    const con=await mongoose.connect("mongodb://localhost:27017/fullapi")
    if(con){
        console.log("database is connected")
    }
}
module.exports=Dbconnect