const mongoose= require("mongoose");

const SSchema= new mongoose.Schema({
    img:String,
    name:String,
    password:String,

})

const studentModel= mongoose.model("Student",SSchema)
module.exports=studentModel