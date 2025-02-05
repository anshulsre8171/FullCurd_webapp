const express=require("express")
const app=express()
app.use(express.json())

const fileupload=require("express-fileupload")
app.use(fileupload())
app.use("/static",express.static("./uploads"))

const dotenv=require("dotenv")
dotenv.config()

const cors=require("cors")
app.use(cors())

const Dbconnect = require("./Config/dbconfig")
Dbconnect()


const route=require("./Route/UserRoute")
app.use(route)

 
app.listen(process.env.PORT,()=>{
    console.log(`server is runing ${process.env.PORT}`)
})