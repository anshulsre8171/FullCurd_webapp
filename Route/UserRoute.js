
const jwt=require("jsonwebtoken")
const express=require("express")
const userModel = require("../Model/UserMode")
const studentModel = require("../Model/StudentModel")
const checkuser=require("../midelware/midelware")
const route=express.Router()

route.post("/reg",async(req,res)=>{
   const {name,password,email}= req.body
   const data=await userModel({name,password,email})
   const response=await data.save()
   res.json({
    code: 201,
    message: "register",
    success: true,
    error:false,
    response
})
})


route.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const result=await userModel.findOne({email,password})
    if(result){
        const token=jwt.sign({id:result?.email},"code",{expiresIn:"1h"})
        res.json({
            code:201,
            error:false,
            success:true,
            data:result,
            token
        })
    }
    else{
        res.json({
            code:501,
            error:true,
            success:false,
            token:" "

        })
    }
})

route.post("/studentregister",async(req,res)=>{
    const {name,password}=req.body
    let img=req.files?.img
    //console.log(img);
    if(!img){
        res.json({
            code: 404,
            message: "img required",
            success: false,
            error: true
        })
    } 
    img?.mv("uploads/"+img?.name,(err)=>{
        if(err){
            res.json({
                code: 500,
                message: "internel server error during file upload",
                success: false,
                error: true
            })
        }
    })
    const data= new studentModel({name,password,img:img?.name})
    const result= await data.save()
    res.json({
        code: 201,
        message: "student register",
        success: true,
        error:false,
        result
    })
} )

route.get("/get",checkuser,async(req,res)=>{
    const result=await studentModel.find()
    res.send(result)
})

route.delete("/delete/:_id",async (req, res) => {
    const _id = req.params._id
    const result = await studentModel.deleteOne({_id})
    res.json({
        code: 201,
        message: "student delete",
        success: true,
        error:false
    })
})

route.put("/update/:_id",async (req, res) => {
    const _id = req.params._id
    const { name, password } = req.body
    const img=req.files.img
    img?.mv("uploads/"+img?.name,(err)=>{
        if(err){
            res.json({
                code: 500,
                message: "internel server error during file upload",
                success: false,
                error: true
            })
        }
    })
    const data = await studentModel.updateOne({_id}, {name, password,img:img?.name })
    res.send(data)
})

module.exports=route